NAME := AniDice
PYTHON := python

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

build: dev

dev:
	@echo "$(TASK) Building webpack bundle for development.."
	@yarn run dev
	@echo "$(OK) Bundle built"

prod:
	@echo "$(TASK) Building webpack bundle for production.."
	@yarn run prod
	@echo "$(OK) Bundle built"


.PHONY: init build dev prod
