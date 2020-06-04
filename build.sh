rm docs/css/*
rm docs/js/*
rm docs/img/*
rm docs/fonts/*
rm docs/*.html
harp compile ./src ./docs
echo "mediflex.evisom.pw" > "./docs/CNAME"