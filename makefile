SRCS=src/id3.coffee src/parser.coffee
TESTS=test/parser_test.coffee


id3: $(SRCS)
	coffee -o lib/ -c src/*.coffee

test: $(SRCS) $(TESTS)
	mocha --compilers coffee:coffee-script -R spec test/*.coffee

coverage: id3 $(SRCS) $(TESTS)
	jscoverage lib lib-cov
	coffee -o test-cov/ -c test/*.coffee
	ID3_COV=1 mocha -R html-cov test-cov/*.js > coverage.html

clean:
	rm -rf lib-cov coverage.html
	rm -rf docs

docs: $(SRCS) $(TESTS)
	docco src/*.coffee test/*.coffee

.PHONY: test