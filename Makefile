# Add this ergogen_helper as a submodule to ./resources/kb_ergogen_helper/
# - Copy this makefile to the root of your ergogen project
# - Place your ergogen files in ./ergogen/
# - Create the ./pcb/ directory

KB_NAME = "Wingboard"
PCB_FILE_NAME = wingboard.kicad_pcb
KICAD_PY_PATH = /Applications/KiCad/KiCad.app/Contents/Frameworks/Python.framework/Versions/Current/bin/python3

BACKUP_PATH = backups/backup_$(shell date +"%Y-%m-%d_%H_%M_%S")
LAST_BACKUP_PATH = $(shell /bin/ls -td backups/*/ | head -n 1)

.DEFAULT_GOAL := help
.PHONY: *

install: ## Load submodules and install dependencies
	@echo Updating submodules...
	@git submodule init && git submodule update

	@echo Installing ergogen...
	@npm i -g ergogen

build: ## Backup current pcbs, run ergogen, update lock traces, restore traces from backup
	@$(MAKE) build-nt
	@echo "\n"
	@$(MAKE) restore-traces

build-nt: ## Same as `build`, but don't restore traces
	@$(MAKE) create-pcb-directory
	@echo "\n"
	@$(MAKE) backup
	@echo "\n"
	@$(MAKE) ergogen
	@echo "\n"
	@${MAKE} generate-stl
	@echo "\n"
	@$(MAKE) ergogen-deploy
#	@echo "\n"
#	@$(MAKE) update-pcb
	@echo "\n"
	@$(MAKE) lock-traces

backup: ## Backups the current pcb folder
	@echo "Creating backup $(BACKUP_PATH)..."
	@mkdir -p $(BACKUP_PATH)
	@cp -r pcb $(BACKUP_PATH)

create-pcb-directory: ## Create the pcb directory
	@echo "Checking for 'pcb' directory..."
	@if [ -d "pcb" ]; then echo "Directory already exists."; else mkdir pcb; echo "Directory created."; fi

ergogen: ## Run ergogen
	@echo "Running ergogen..."
	@ergogen .

ergogen-deploy: ## Copy ergogen output to pcb folder
	@echo "Copying ergogen generated PCB to pcb/..."
	@cp -r ./output/pcbs/*.kicad_pcb pcb/

# update-pcb: ## Updates KiCad PCB file from v5 to v7
# 	@echo "Updating PCB from v5 to v7..."
# 	@$(KICAD_PY_PATH) resources/kb_ergogen_helper/ergogen_helper.py update-pcb pcb/$(PCB_FILE_NAME)

lock-traces: ## Locks all traces in pcb file
	@echo "Locking traces in pcb..."
	@$(KICAD_PY_PATH) resources/kb_ergogen_helper/ergogen_helper.py --no-backup lock-traces pcb/$(PCB_FILE_NAME)

restore-traces: ## Restores traces from latest backup
	@echo "Restoring traces..."
	@$(KICAD_PY_PATH) resources/kb_ergogen_helper/ergogen_helper.py --no-backup copy-traces --unlocked-only $(LAST_BACKUP_PATH)/$(PCB_FILE_NAME) pcb/$(PCB_FILE_NAME)

generate-stl:
	@echo "Generating STL files..."
	@for f in output/cases/*.jscad; do npx @jscad/cli@1 $$f -of stla -o $${f%.*}.stl; done

help: ## Show this help
	@{ \
		SCRIPT_PATH=$$(echo "resources/kb_ergogen_helper/makefile_help.sh"); \
		sh "$$SCRIPT_PATH" "$(MAKEFILE_LIST)"; \
	}