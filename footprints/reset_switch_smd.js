// Copyright (c) 2025 SimplyYat
//
// SPDX-License-Identifier: MIT
//
// To view a copy of this license, visit https://opensource.org/license/mit/
//
// Author: @SimplyYat
//
// Description:
//   SMD side-operated momentary switch, right angle: [EVQPUC](http://industrial.panasonic.com/cdbs/www-data/pdf/ATV0000/ATV0000CE5.pdf)
//
//
// Nets:
//    from: corresponds to pin 1 and 3
//    to: corresponds to pin 2 and 4
//
// Params:
//    side: default is B for Back (options: F or B)
//      the side on which to place the single-side footprint
//    reset_switch_3dmodel_filename: default is ''
//      Allows you to specify the path to a 3D model STEP or WRL file to be
//      used when rendering the PCB. Use the ${VAR_NAME} syntax to point to
//      a KiCad configured path.
//    reset_switch_3dmodel_xyz_offset: default is [0, 0, 0]
//      xyz offset (in mm), used to adjust the position of the 3d model
//      relative the footprint.
//    reset_switch_3dmodel_xyz_scale: default is [1, 1, 1]
//      xyz scale, used to adjust the size of the 3d model relative to its
//      original size.
//    reset_switch_3dmodel_xyz_rotation: default is [0, 0, 0]
//      xyz rotation (in degrees), used to adjust the orientation of the 3d
//      model relative the footprint.
//    lcsc_part_number: default is 'C79174'
//      LCSC part number to use for this footprint, in case you want to use
//      JLCPCB's SMT assembly service.

module.exports = {
  params: {
    designator: 'RST',
    side: 'B',
    reset_switch_3dmodel_filename: '${KICAD8_3DMODEL_DIR}/Button_Switch_SMD.3dshapes/Panasonic_EVQPUL_EVQPUC.wrl',
    reset_switch_3dmodel_xyz_offset: [0, 0, 0],
    reset_switch_3dmodel_xyz_rotation: [0, 0, 0],
    reset_switch_3dmodel_xyz_scale: [1, 1, 1],
    from: { type: 'net', value: 'GND' },
    to: { type: 'net', value: 'RST' },
    lcsc_part_number: 'C79174',
  },
  body: p => {
    const r180 = p.r + 180;
    const base_footprint_start = `
    (footprint "Button_Switch_SMD:Panasonic_EVQPUL_EVQPUC"
      (layer "${p.side}.Cu")
      (at 213.564958 58.14255 -147)
      (descr "http://industrial.panasonic.com/cdbs/www-data/pdf/ATV0000/ATV0000CE5.pdf")
      (tags "SMD SMT SPST EVQPUL EVQPUC")
      (property "Reference" "${p.ref}"
        ${p.at}
        (layer "${p.side}.SilkS")
        (effects
          (font
            (size 1 1)
            (thickness 0.15)
          )
          (justify ${p.side == 'F' ? '' : 'mirror'})
        )
      )
      (property "Value" "Panasonic_EVQPUL_EVQPUC"
        (at 0.000001 -3.5 ${p.r})
        (layer "${p.side}.Fab")
        (effects
          (font
            (size 1 1)
            (thickness 0.15)
          )
          (justify ${p.side == 'F' ? '' : 'mirror'})
        )
      )
      (property "Footprint" "Button_Switch_SMD:Panasonic_EVQPUL_EVQPUC"
        (at 0 0 ${p.r})
        (unlocked yes)
        (layer "${p.side}.Fab")
        (hide yes)
        (effects
          (font
            (size 1.27 1.27)
            (thickness 0.15)
          )
          (justify ${p.side == 'F' ? '' : 'mirror'})
        )
      )
      (property "Datasheet" ""
        (at 0 0 ${p.r})
        (unlocked yes)
        (layer "${p.side}.Fab")
        (hide yes)
        (effects
          (font
            (size 1.27 1.27)
            (thickness 0.15)
          )
          (justify ${p.side == 'F' ? '' : 'mirror'})
        )
      )
      (property "Description" ""
        (at 0 0 ${p.r})
        (unlocked yes)
        (layer "${p.side}.Fab")
        (hide yes)
        (effects
          (font
            (size 1.27 1.27)
            (thickness 0.15)
          )
          (justify ${p.side == 'F' ? '' : 'mirror'})
        )
      )
      (property "LCSC" "${p.lcsc_part_number}"
        (at 0 0 0)
        (unlocked yes)
        (layer "${p.side}.Fab")
        (hide yes)
        (effects
          (font
            (size 1 1)
            (thickness 0.15)
          )
          (justify ${p.side == 'F' ? '' : 'mirror'})
        )
      )
      (attr smd)
      (fp_line
        (start 2.449998 0.275002)
        (end 2.45 -0.275001)
        (stroke
          (width 0.12)
          (type solid)
        )
        (layer "${p.side}.SilkS")
      )
      (fp_line
        (start 1.425002 1.849999)
        (end 2.349998 1.849999)
        (stroke
          (width 0.12)
          (type solid)
        )
        (layer "${p.side}.SilkS")
      )
      (fp_line
        (start -2.349999 1.849997)
        (end -1.425 1.849999)
        (stroke
          (width 0.12)
          (type solid)
        )
        (layer "${p.side}.SilkS")
      )
      (fp_line
        (start -2.45 0.275001)
        (end -2.449998 -0.275002)
        (stroke
          (width 0.12)
          (type solid)
        )
        (layer "${p.side}.SilkS")
      )
      (fp_line
        (start -2.349998 -1.849999)
        (end 2.349999 -1.849997)
        (stroke
          (width 0.12)
          (type solid)
        )
        (layer "${p.side}.SilkS")
      )
      (fp_line
        (start 3.899997 3.25)
        (end 3.900002 -2.250001)
        (stroke
          (width 0.05)
          (type solid)
        )
        (layer "${p.side}.CrtYd")
      )
      (fp_line
        (start -3.900002 3.25)
        (end 3.899997 3.25)
        (stroke
          (width 0.05)
          (type solid)
        )
        (layer "${p.side}.CrtYd")
      )
      (fp_line
        (start -3.900002 3.25)
        (end -3.900001 -2.250001)
        (stroke
          (width 0.05)
          (type solid)
        )
        (layer "${p.side}.CrtYd")
      )
      (fp_line
        (start -3.900001 -2.250001)
        (end 3.900002 -2.250001)
        (stroke
          (width 0.05)
          (type solid)
        )
        (layer "${p.side}.CrtYd")
      )
      (fp_line
        (start 2.35 1.749999)
        (end 2.349998 -1.750001)
        (stroke
          (width 0.1)
          (type solid)
        )
        (layer "${p.side}.Fab")
      )
      (fp_line
        (start 1.3 1.75)
        (end 1.299999 2.749998)
        (stroke
          (width 0.1)
          (type solid)
        )
        (layer "${p.side}.Fab")
      )
      (fp_line
        (start -1.300004 2.750001)
        (end 1.299999 2.749998)
        (stroke
          (width 0.1)
          (type solid)
        )
        (layer "${p.side}.Fab")
      )
      (fp_line
        (start -1.3 1.75)
        (end -1.300004 2.750001)
        (stroke
          (width 0.1)
          (type solid)
        )
        (layer "${p.side}.Fab")
      )
      (fp_line
        (start -2.349998 1.750001)
        (end 2.35 1.749999)
        (stroke
          (width 0.1)
          (type solid)
        )
        (layer "${p.side}.Fab")
      )
      (fp_line
        (start -2.349998 1.750001)
        (end -2.35 -1.749999)
        (stroke
          (width 0.1)
          (type solid)
        )
        (layer "${p.side}.Fab")
      )
      (fp_line
        (start -2.35 -1.749999)
        (end 2.349998 -1.750001)
        (stroke
          (width 0.1)
          (type solid)
        )
        (layer "${p.side}.Fab")
      )
      (fp_text user "${p.ref}"
        (at 0 0 ${p.r})
        (layer "${p.side}.Fab")
        (effects
          (font
            (size 1 1)
            (thickness 0.15)
          )
          (justify ${p.side == 'F' ? '' : 'mirror'})
        )
      )
      (pad "" np_thru_hole circle
        (at -0.000001 1.375 ${p.r})
        (size 0.75 0.75)
        (drill 0.75)
        (layers "*.Cu" "*.Mask")
      )
      (pad "" np_thru_hole circle
        (at 0.000001 -1.375 ${p.r})
        (size 0.75 0.75)
        (drill 0.75)
        (layers "*.Cu" "*.Mask")
      )
      (pad "1" smd rect
        (at -2.625002 0.850002 ${p.r})
        (size 1.55 1)
        (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")
        ${p.from.str}
      )
      (pad "1" smd rect
        (at 2.624999 0.849999 ${p.r})
        (size 1.55 1)
        (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")
        ${p.from.str}
      )
      (pad "2" smd rect
        (at -2.624999 -0.849999 ${p.r})
        (size 1.55 1)
        (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")
        ${p.to.str}
      )
      (pad "2" smd rect
        (at 2.625002 -0.850002 ${p.r})
        (size 1.55 1)
        (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")
        ${p.to.str}
      )
      `;
    const model_3d = `
      (model ${p.reset_switch_3dmodel_filename}
        (offset
          (xyz ${p.reset_switch_3dmodel_xyz_offset[0]} ${p.reset_switch_3dmodel_xyz_offset[1]} ${p.reset_switch_3dmodel_xyz_offset[2]})
        )
        (scale
          (xyz ${p.reset_switch_3dmodel_xyz_scale[0]} ${p.reset_switch_3dmodel_xyz_scale[1]} ${p.reset_switch_3dmodel_xyz_scale[2]})
        )
        (rotate
          (xyz ${p.reset_switch_3dmodel_xyz_rotation[0]} ${p.reset_switch_3dmodel_xyz_rotation[1]} ${p.reset_switch_3dmodel_xyz_rotation[2]})
        )
      )`;
    const base_footprint_end = `
    )`;
    return base_footprint_start + (p.reset_switch_3dmodel_filename ? model_3d : '') + base_footprint_end;
  }
}
