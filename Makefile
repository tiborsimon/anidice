NAME := AniDice
PYTHON := python

OUTPUT:=build
NODE:=./node_modules/.bin/

help:
	@echo ""
	@echo "$(BOLD_NAME) - make interface"
	@echo "---------------------------------"
	@echo "Targets:"
	@echo "  make [$(BOLD)$(YELLOW)help$(RESET)]            - Prints out this help message."
	@echo "  make $(BOLD)$(YELLOW)init$(RESET)              - Initializes the development environment."
	@echo "  make $(BOLD)$(YELLOW)build$(RESET)             - Builds the production bundle with Webpack."
	@echo ""

BOLD   := $(shell tput bold)
RED    := $(shell tput setaf 1)
GREEN  := $(shell tput setaf 2)
YELLOW := $(shell tput setaf 3)
RESET  := $(shell tput sgr0)

BOLD_NAME := $(BOLD)$(NAME)$(RESET)

TASK    := [ $(BOLD)$(GREEN)>>$(RESET) ]
OK      := [ $(BOLD)$(GREEN)OK$(RESET) ]
WARNING := [ $(BOLD)$(YELLOW)!!$(RESET) ]
ERROR   := [$(BOLD)$(RED)FAIL$(RESET)]

init:
	@echo "$(TASK) Initializing the environment.."
	@yarn
	@echo "$(OK) Environment initialized"

clean:
	@rm -rfv $(OUTPUT)
	@mkdir $(OUTPUT)

css:
	@echo "Building final css file.."
	@{ \
		cat ./node_modules/normalize.css/normalize.css && \
		cat ./src/sass/*.scss | $(NODE)node-sass; \
	} | \
	$(NODE)postcss --use autoprefixer | \
	$(NODE)cleancss | \
	sed "s#/\*.*\*/##g" > $(OUTPUT)/site.min.css

build: dev
	@cd build; sed -i.bak '/<style>/ r site.min.css' index.html

dev: clean css
	@echo "$(TASK) Building webpack bundle for development.."
	@yarn run dev
	@echo "$(OK) Bundle built"

prod: clean css
	@echo "$(TASK) Building webpack bundle for production.."
	@yarn run prod
	@echo "$(OK) Bundle built"

publish: build
	mkdir -p docs
	touch docs/.nojekyll
	cp build/index.html docs/index.html


.PHONY: init build dev prod
