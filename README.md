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
 Choc V2 Key Switches | No Solder | TBD | 48 | Manual install
 Choc V2 Key Caps | No Solder | 48 | Manual install
 Supermini NRF52840 MCU | THT | [AliExpress](https://www.aliexpress.com/item/1005001621678794.html?spm=a2g0o.productlist.main.3.22256MXM6MXMOc&algo_pvid=cc1cb5f0-bcd5-4dfa-9185-add9e4eee768&algo_exp_id=cc1cb5f0-bcd5-4dfa-9185-add9e4eee768-1&pdp_npi=4%40dis%21AUD%215.83%215.83%21%21%213.56%213.56%21%402101c5b217365044374885419ea55b%2112000016846541261%21sea%21AU%214011953287%21X&curPageLogUid=yQVmE2QrahaR&utparam-url=scene%3Asearch%7Cquery_from%3A) | 1 | Manual install
 Nice!View Display | THT | [Nice!View](https://nicekeyboards.com/nice-view) | 1 | Manual install
 EC11/12 Rotary Encoder | THT | TBD | 1 | Manual install
 Side Push Reset Switch (EVQPUC02K) | SMD | [AliExpress](https://www.aliexpress.com/item/1005002845025014.html?spm=a2g0o.productlist.main.17.18d7uC3JuC3JYF&algo_pvid=e749117c-627b-4f83-b282-9ee8ecd8f51a&algo_exp_id=e749117c-627b-4f83-b282-9ee8ecd8f51a-8&pdp_npi=4%40dis%21AUD%212.60%212.60%21%21%2111.65%2111.65%21%402101c59817365046938023702e595e%2112000029951120592%21sea%21AU%214011953287%21X&curPageLogUid=ygLyKat249IV&utparam-url=scene%3Asearch%7Cquery_from%3A) | 1 | [C79174](https://jlcpcb.com/partdetail/Panasonic-EVQPUC02K/C79174)
 Power Switch | SMD | TBD | 1 | Manual install
 JST PH 2.0mm 2-Pin Connector for Battery | SMD | [AliExpress (Horizontal ones)](https://www.aliexpress.com/item/1005005716487667.html?spm=a2g0o.productlist.main.5.67c455a9adJlS7&algo_pvid=41dd92c8-d88c-4ea2-bfcc-14092ce2489a&algo_exp_id=41dd92c8-d88c-4ea2-bfcc-14092ce2489a-2&pdp_npi=4%40dis%21AUD%214.11%213.21%21%21%212.51%211.96%21%402103247017365042545152094e1659%2112000034101497981%21sea%21AU%214011953287%21X&curPageLogUid=cfPpyCUyls7w&utparam-url=scene%3Asearch%7Cquery_from%3A) | 1 | [C7527581](https://jlcpcb.com/partdetail/Lian_XinTechnology-XDWF_092002P/C7527581)


## Pending Items
1. [ ] Add top case with cutouts for:
    1. [ ] Nice view display
    2. [ ] Reset switch (TL3342 low profile - 2mm+ hole at the top)
    3. [ ] EC11/12 rotary encoder
    4. [ ] Power switch
    5. [ ] USB-C port
    6. [ ] Screw holes
 2. [ ] Adjust bottom case height to allow battery and PCB clearance
 3. [ ] Route PCB
 4. [ ] Add Wings image to PCB (Nice to have) 

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