# Wingboard

> [!IMPORTANT]
> This is a work in progress.

A unibody ergonomic keyboard developed using [Ergogen](https://github.com/ergogen/ergogen) based on the [Absolem keyboard design](https://zealot.hu/absolem/).

## Row Column Matrix
![Rows and Columns matrix](./images/row-column-matrix.png)

## Components needed

Component | Type (THT, SMD, or No Solder) | Link | Quantity | LCSC Part Number (for SMT Assembly through JLCPCB)
---------|---------|----------|---------|---------
 Diode SOD-123/323 (1N4148/W) | SMD | [AliExpress](https://www.aliexpress.com/item/1005003194674618.html?spm=a2g0o.productlist.main.1.573bJia8Jia8Wb&algo_pvid=a8ea4330-8dd0-4ccf-9e2d-acbd802ee4b5&algo_exp_id=a8ea4330-8dd0-4ccf-9e2d-acbd802ee4b5-0&pdp_npi=4%40dis%21AUD%210.59%210.59%21%21%210.36%210.36%21%402103277f17365036595674485e2399%2112000024602962919%21sea%21AU%214011953287%21X&curPageLogUid=sZfdotSVyEA4&utparam-url=scene%3Asearch%7Cquery_from%3A) | 48 | [C81598](https://jlcpcb.com/partdetail/st_semtech-1N4148W/C81598)
 Kailh Low Profile Hot Swap Switches | SMD | [AliExpress](https://www.aliexpress.com/item/1005003575767699.html?spm=a2g0o.detail.0.0.52b8WBreWBreoo&mp=1) | 48 | [C5333465](https://jlcpcb.com/partdetail/Kailh-CPG135001S30/C5333465)
 Choc V2 Key Switches | No Solder | [Deep Sea Silent Switches](https://www.aliexpress.com/item/1005008113631450.html?spm=a2g0o.detail.0.0.52b8WBreWBreoo&mp=1), [Choose from here](https://www.aliexpress.com/item/1005006626760418.html?spm=a2g0o.detail.0.0.52b8WBreWBreoo&mp=1), or find your own | 48 | Manual install
 Choc V2 Key Caps | No Solder | 48 | Manual install
 Supermini NRF52840 MCU | THT | [AliExpress](https://www.aliexpress.com/item/1005001621678794.html?spm=a2g0o.productlist.main.3.22256MXM6MXMOc&algo_pvid=cc1cb5f0-bcd5-4dfa-9185-add9e4eee768&algo_exp_id=cc1cb5f0-bcd5-4dfa-9185-add9e4eee768-1&pdp_npi=4%40dis%21AUD%215.83%215.83%21%21%213.56%213.56%21%402101c5b217365044374885419ea55b%2112000016846541261%21sea%21AU%214011953287%21X&curPageLogUid=yQVmE2QrahaR&utparam-url=scene%3Asearch%7Cquery_from%3A) | 1 | Manual install
 Nice!View Display | THT | [Nice!View](https://nicekeyboards.com/nice-view) | 1 | Manual install
 EC11/12 Rotary Encoder | THT | [AliExpress](https://www.aliexpress.com/item/1005007644083514.html?spm=a2g0o.productlist.main.13.5ebdEX6cEX6cZx&algo_pvid=fe1462be-7885-4ea1-ad0e-55a54c8f8da5&algo_exp_id=fe1462be-7885-4ea1-ad0e-55a54c8f8da5-6&pdp_npi=4%40dis%21AUD%214.01%214.01%21%21%212.45%212.45%21%402101c5bf17366540947572842efcf2%2112000041630839429%21sea%21AU%214011953287%21X&curPageLogUid=Nk5ZhleEhhVZ&utparam-url=scene%3Asearch%7Cquery_from%3A) | 1 | Manual install
 Knob for the rotary encoder shaft | No Solder | [AliExpress](https://www.aliexpress.com/item/1005004171280417.html?spm=a2g0o.detail.0.0.52b8WBreWBreoo&mp=1) | 1 | Manual install
 Side Push Reset Switch (EVQPUC02K) | SMD | [AliExpress](https://www.aliexpress.com/item/1005002845025014.html?spm=a2g0o.productlist.main.17.18d7uC3JuC3JYF&algo_pvid=e749117c-627b-4f83-b282-9ee8ecd8f51a&algo_exp_id=e749117c-627b-4f83-b282-9ee8ecd8f51a-8&pdp_npi=4%40dis%21AUD%212.60%212.60%21%21%2111.65%2111.65%21%402101c59817365046938023702e595e%2112000029951120592%21sea%21AU%214011953287%21X&curPageLogUid=ygLyKat249IV&utparam-url=scene%3Asearch%7Cquery_from%3A) | 1 | [C79174](https://jlcpcb.com/partdetail/Panasonic-EVQPUC02K/C79174)
 Power Switch | SMD | TBD | 1 | Manual install
 JST PH 2.0mm 2-Pin Connector for Battery | SMD | [AliExpress (Horizontal ones)](https://www.aliexpress.com/item/1005005716487667.html?spm=a2g0o.productlist.main.5.67c455a9adJlS7&algo_pvid=41dd92c8-d88c-4ea2-bfcc-14092ce2489a&algo_exp_id=41dd92c8-d88c-4ea2-bfcc-14092ce2489a-2&pdp_npi=4%40dis%21AUD%214.11%213.21%21%21%212.51%211.96%21%402103247017365042545152094e1659%2112000034101497981%21sea%21AU%214011953287%21X&curPageLogUid=cfPpyCUyls7w&utparam-url=scene%3Asearch%7Cquery_from%3A) | 1 | [C7527581](https://jlcpcb.com/partdetail/Lian_XinTechnology-XDWF_092002P/C7527581)

## How to build
1. Order the PCB from the `pcb/production` folder through your preferred PCB fabrication service like JLCPCB, PCBWay, etc.
2. If you're ordering through JLCPCB, you can optionally use their SMT Assembly service to solder some components for you, the LCSC parts number are already added to the PCB, use the `pcb/production/bom.csv` and `pcb/production/positions.csv` as the BOM and Pick and Place files, respectively. Currently, the PCB includes LCSC part numbers for the bottom side only, for these parts (check the LCSC column above for links):
   1. 1N4148W SMD Diodes
   2. Kailh Low Profile Hot Swap Switches (they didn't have these in stock, so I couldn't order them, but they're there for when they have stock)
   3. Side Push Reset Switch (EVQPUC02K)
   4. JST PH 2.0mm 2-Pin Connector for Battery
   5. SMD Slider Power Switch
3. Source the rest of the components from your preferred suppliers and get to Soldering.
4. I'm still working on building a top case for this keyboard, so stay tuned for updates.

## Pending Items
1. [ ] Add top case with cutouts for:
    1. [ ] Nice view display
    2. [ ] Reset switch (TL3342 low profile - 2mm+ hole at the top)
    3. [ ] EC11/12 rotary encoder
    4. [ ] Power switch
    5. [ ] USB-C port
    6. [ ] Screw holes
 2. [ ] Adjust bottom case height to allow battery and PCB clearance
 3. [x] Route PCB
 4. [x] Add Wings image to PCB (Nice to have) 

## Notes
1. To get this repo, including the submodule `kb_ergogen_helper`, run the following command:
```bash
git clone --recursive <URL of this repo>
```
2. Since the addition of the `Makefile`, the following command can be used to build the output, convert the *.jscad* files to *.stl* in the `output/cases` path, and update traces on the PCB from last changes:
```bash
make build
```
3. If the make command above doesn't work, then build the output and convert the *.jscad* files to *.stl* in the `output/cases` path, run the following command from the current directory:
```bash
ergogen . && for f in output/cases/*.jscad; do npx @jscad/cli@1 $f -of stla -o ${f%.*}.stl; done
```