echo Your commit:
read commit
git add -A
git commit -m "$commit"
git push
JEKYLL_ENV=production bundle exec jekyll build --incremental
cp .jekyll-metadata .jekyll-metadata_back
cd _site
touch .nojekyll
git add -A
git commit -m "$commit"
git push
cd ..
echo finished

# How to add google drive images to jekyll
#Right click the image and click Share...

#Click Advanced and change the Who can access option to Public on the web - Anyone on the Internet

#Copy the link to share and you will have something like
#https://drive.google.com/file/d/<FILE_ID>/view?usp=sharing

#Copy the <FILE_ID> to make a link like this:
#https://drive.google.com/uc?export=view&id=<FILE_ID>

#Insert image in Markdown as ususal using the link from step 4. 
#For example:  ![image](https://drive.google.com/uc?export=view&id=<FILE_ID>)
#Example: I have this octocat image in google, and its file id is 1913oZeBZPBNiUuk8gu3ZSbLBA2l_VQtG. You can try ![image](https://drive.google.com/uc?export=view&id=1913oZeBZPBNiUuk8gu3ZSbLBA2l_VQtG) in your markdown file or even in this answer.
