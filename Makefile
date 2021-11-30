test-coveralls:
	$(MAKE) test
	@NODE_ENV=test ./node_modules/.bin/mocha test -R mocha-lcov-reporter | ./node_modules/coveralls/bin/coveralls.js