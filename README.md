# Wingboard

> [!IMPORTANT]
> This is a work in progress.

A unibody ergonomic keyboard developed using [Ergogen](https://github.com/ergogen/ergogen) based on the [Absolem keyboard design](https://zealot.hu/absolem/).

## Row Column Matrix
![Rows and Columns matrix](./images/row-column-matrix.png)

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
2. To build Ergogen output and convert the *.jscad* files to *.stl* in the `output/cases` path, run the following command from the current directory:
```bash
ergogen . && for f in output/cases/*.jscad; do npx @jscad/cli@1 $f -of stla -o ${f%.*}.stl; done
```