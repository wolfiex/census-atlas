import os,sys

for name in sys.argv[1:]:
	print('creating',name)
	for ext in ['js','html','css']:
		os.system('touch %s.%s'%(name,ext))
