id3: src/id3.coffee src/parser.coffee
	coffee -o lib/ -c src/*.coffee

id3-test: test/parser_test.coffee
	coffee -o test/ -c test/*.coffee

test: id3
	mocha --compilers coffee:coffee-script -R spec test/*.coffee

coverage: id3 id3-test
	ID3_COV=1 mocha -R html-cov test/*.js > coverage.html

.PHONY: test