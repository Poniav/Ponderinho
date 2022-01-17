install: clean
	@echo yarn install
	@yarn 

clean:
	@echo "Cleaning up..."
	rm -rf node_modules build
