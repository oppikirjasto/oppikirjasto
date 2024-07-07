#!/usr/bin/bash
set -ex

echo "Clearing build directory..."
rm -rf pdfbuild
mkdir pdfbuild
mkdir pdfbuild/output

echo "Installing docs-to-pdf..."
npm install --prefix ./pdfbuild docs-to-pdf

cd pdfbuild

pages=(
#   Title               Page                Path
    Äidinkieli          aidinkieli          7-9
    Ammatit             ammatit             7-9
    Biologia            biologia            7-9
    Elämänkatsomustieto elamankatsomustieto 7-9
    Fysiikka            fysiikka            7-9
    Historia            historia            7-9
    Käsityö             kasityo             7-9
    Kemia               kemia               7-9
    Kotitalous          kotitalous          7-9
    Kuvataide           kuvataide           7-9
    Liikunta            liikunta            7-9
    Maantieto           maantieto           7-9
    Matematiikka        matematiikka        7-9
    Musiikki            musiikki            7-9
    Ruotsi              ruotsi              7-9
    Terveystieto        terveystieto        7-9
    Uskonto             uskonto             7-9
    Yhteiskuntaoppi     yhteiskuntaoppi     7-9
)
rows=${#pages[*]} # number of 'rows'
columns=3         # number of 'columns'

for ((i=0; i<$rows; i+=$columns))
do
    read title page path <<< "${pages[@]:$i:$columns}"
    echo "Building PDF from $path/$page ..."
    npx docs-to-pdf \
        --initialDocURLs="http://localhost:3000/docs/$path/$page" \
        --contentSelector="article" \
        --paginationSelector="only-this-page-please" \
        --excludeSelectors=".margin-vert--xl a,[class^='tocCollapsible'],.breadcrumbs,.theme-edit-this-page" \
        --coverImage="http://localhost:3000/img/favicon.ico" \
        --coverTitle="$title" \
        --restrictPaths \
        --outputPDFFilename="output/$page.pdf"
done
echo "Building PDFs complete!"

echo "Copying..."
cp -r output/. ../static/pdf/
echo "Copied PDF's to ../static/pdf/"

echo "Done"
