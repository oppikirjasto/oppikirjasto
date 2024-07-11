#!/usr/bin/bash
set -ex

echo "Clearing build directory..."
rm -rf pdfbuild
mkdir -p pdfbuild/output/9/aidinkieli
mkdir -p pdfbuild/output/9/toinen

echo "Installing docs-to-pdf..."
npm install --prefix ./pdfbuild docs-to-pdf@0.6.2

# Replace "Table of contents" with "Sisällysluettelo"
sed -i -e 's/Table of contents/Sisällysluettelo/g' pdfbuild/node_modules/docs-to-pdf/lib/utils.js

cd pdfbuild

pages=(
#   Title                                Path
    "Äidinkieli\ 9\ (suomen\ kielellä)"  9/aidinkieli/suomen
    "Tulevaisuus\ 9"                     9/tulevaisuus
    "Biologia\ 9"                        9/biologia
    "Elämänkatsomustieto\ 9"             9/elamankatsomustieto
    "Fysiikka\ 9"                        9/fysiikka
    "Historia\ 9"                        9/historia
    "Käsityö\ 9"                         9/kasityo
    "Kemia\ 9"                           9/kemia
    "Kotitalous\ 9"                      9/kotitalous
    "Kuvataide\ 9"                       9/kuvataide
    "Liikunta\ 9"                        9/liikunta
    "Maantieto\ 9"                       9/maantieto
    "Matematiikka\ 9"                    9/matematiikka
    "Musiikki\ 9"                        9/musiikki
    "Ruotsi\ (B1)\ 9"                    9/toinen/ruotsi-b1
    "Terveystieto\ 9"                    9/terveystieto
)
rows=${#pages[*]} # number of 'rows'
columns=2         # number of 'columns'

for ((i=0; i<$rows; i+=$columns))
do
    read title path <<< "${pages[@]:$i:$columns}"
    echo "Building PDF from $path ..."
    npx docs-to-pdf \
        --initialDocURLs="http://localhost:3000/docs/$path" \
        --contentSelector="article" \
        --paginationSelector="only-this-page-please" \
        --excludeSelectors=".margin-vert--xl a,[class^='tocCollapsible'],.breadcrumbs,.theme-edit-this-page,.quiz,video,audio" \
        --coverImage="http://localhost:3000/img/favicon.ico" \
        --coverTitle="$title" \
        --restrictPaths \
        --outputPDFFilename="output/$path.pdf"
done
echo "Building PDFs complete!"

echo "Copying..."
cp -r output/. ../static/pdf/
echo "Copied PDF's to ../static/pdf/"

echo "Done"
