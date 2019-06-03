Create a directory comparsion tool
==================================

Task consisting of two parts
1. create a simple backend:
  - use (ideally) php or nodejs
  - backend should provide a route that will return a list of files for both directories and a differences between them
  - we'll provide example directories (dir1/dir2 in this repo)
  
2. create a frontend
  - will load a list of files from backend (asynchronously) and shows it as a flat list or a tree (view should be switchable)
    - (example [view](https://github.com/jurajsimbs/test_dir_compare_data/blob/master/example._comparsion_list.PNG))
  - we'd like to mark: 
    - new files (are not in dir1 and were added in dir2) with green color
	- removed files (are in dir1 but were removed in dir2) with gray color - striked through
	- changed files (are in both dorectories but their size differs) with blue colour
	  - show how the size differs (+1kb, -58bytes, etc.)
  - all other files will be unmarked
  - view should consist of one list (or a tree) of files properly marked
    - scrolling should be smooth (even if there are 100k+ files)
  - list should be searchable (filtered) with text-box placed on top of it.
  - use a UI library specifically written for the chosen front-end framework
  - use react or vueJs
  
  
Please upload result into github/gitlab/bitbucket

Bonus points:
- create a docker image
