// Copyright (c) 2025 SimplyYat
//
// SPDX-License-Identifier: MIT
//
// To view a copy of this license, visit https://opensource.org/license/mit/
//
// Author: @SimplyYat
//
// Description:
//   SMD/THT battery connector - JST PH 2.0mm, right angle: [JST PH2](http://www.jst-mfg.com/product/pdf/eng/ePH.pdf)
//
//
// Nets:
//    from: corresponds to pin 1
//    to: corresponds to pin 2
//
// Params:
//    side: default is B for Back (options: F or B)
//      the side on which to place the single-side footprint
//    BAT_P: net for the positive terminal (default: BAT_P)
//    BAT_N: net for the negative terminal (default: GND)
//    battery_connector_3dmodel_filename: default is ''
//      Allows you to specify the path to a 3D model STEP or WRL file to be
//      used when rendering the PCB. Use the ${VAR_NAME} syntax to point to
//      a KiCad configured path.
//    battery_connector_3dmodel_xyz_offset: default is [0, 0, 0]
//      xyz offset (in mm), used to adjust the position of the 3d model
//      relative the footprint.
//    battery_connector_3dmodel_xyz_scale: default is [1, 1, 1]
//      xyz scale, used to adjust the size of the 3d model relative to its
//      original size.
//    battery_connector_3dmodel_xyz_rotation: default is [0, 0, 0]
//      xyz rotation (in degrees), used to adjust the orientation of the 3d
//      model relative the footprint.
//    lcsc_part_number: default is 'C7527581'
//      LCSC part number to use for this footprint, in case you want to use
//      JLCPCB's SMT assembly service.

module.exports = {
  params: {
    designator: 'JST_BAT',
    side: 'B',
    battery_connector_3dmodel_filename: '${KICAD8_3DMODEL_DIR}/Connector_JST.3dshapes/JST_PH_S2B-PH-SM4-TB_1x02-1MP_P2.00mm_Horizontal.wrl',
    battery_connector_3dmodel_xyz_offset: [0, 0, 0],
    battery_connector_3dmodel_xyz_rotation: [0, 0, 0],
    battery_connector_3dmodel_xyz_scale: [1, 1, 1],
    BAT_P: { type: 'net', value: 'BAT_P' },
    BAT_N: { type: 'net', value: 'GND' },
    lcsc_part_number: 'C7527581',
  },
  body: p => {
    const r180 = p.r + 180;
    const base_footprint_start = `
    (footprint "Connector_JST:JST_PH_S2B-PH-SM4-TB_1x02-1MP_P2.00mm_Horizontal"
      (layer "${p.side}.Cu")
      ${p.at}
      (descr "JST PH series connector, S2B-PH-SM4-TB (http://www.jst-mfg.com/product/pdf/eng/ePH.pdf), generated with kicad-footprint-generator")
      (tags "connector JST PH horizontal")
      (property "Reference" "${p.ref}"
        (at 0 5.8 0)
        (layer "${p.side}.SilkS")
        (hide yes)
        (effects
          (font
            (size 1 1)
            (thickness 0.15)
          )
          (justify ${p.side == 'F' ? '' : 'mirror'})
        )
      )
      (property "Value" "JST_PH_S2B-PH-SM4-TB_1x02-1MP_P2.00mm_Horizontal"
        (at 0 -5.8 0)
        (layer "${p.side}.Fab")
        (effects
          (font
            (size 1 1)
            (thickness 0.15)
          )
          (justify ${p.side == 'F' ? '' : 'mirror'})
        )
      )
      (property "Footprint" "Connector_JST:JST_PH_S2B-PH-SM4-TB_1x02-1MP_P2.00mm_Horizontal"
        (at 0 0 0)
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
        (at 0 0 0)
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
        (at 0 0 0)
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
        (start 4.06 3.31)
        (end 4.06 -0.94)
        (stroke
          (width 0.12)
          (type solid)
        )
        (layer "${p.side}.SilkS")
      )
      (fp_line
        (start 3.04 3.31)
        (end 4.06 3.31)
        (stroke
          (width 0.12)
          (type solid)
        )
        (layer "${p.side}.SilkS")
      )
      (fp_line
        (start 3.04 1.71)
        (end 3.04 3.31)
        (stroke
          (width 0.12)
          (type solid)
        )
        (layer "${p.side}.SilkS")
      )
      (fp_line
        (start 2.34 -4.51)
        (end -2.34 -4.51)
        (stroke
          (width 0.12)
          (type solid)
        )
        (layer "${p.side}.SilkS")
      )
      (fp_line
        (start 1.76 1.71)
        (end 3.04 1.71)
        (stroke
          (width 0.12)
          (type solid)
        )
        (layer "${p.side}.SilkS")
      )
      (fp_line
        (start -1.76 4.6)
        (end -1.76 1.71)
        (stroke
          (width 0.12)
          (type solid)
        )
        (layer "${p.side}.SilkS")
      )
      (fp_line
        (start -1.76 1.71)
        (end -3.04 1.71)
        (stroke
          (width 0.12)
          (type solid)
        )
        (layer "${p.side}.SilkS")
      )
      (fp_line
        (start -3.04 3.31)
        (end -4.06 3.31)
        (stroke
          (width 0.12)
          (type solid)
        )
        (layer "${p.side}.SilkS")
      )
      (fp_line
        (start -3.04 1.71)
        (end -3.04 3.31)
        (stroke
          (width 0.12)
          (type solid)
        )
        (layer "${p.side}.SilkS")
      )
      (fp_line
        (start -4.06 3.31)
        (end -4.06 -0.94)
        (stroke
          (width 0.12)
          (type solid)
        )
        (layer "${p.side}.SilkS")
      )
      (fp_line
        (start 4.6 5.1)
        (end 4.6 -5.1)
        (stroke
          (width 0.05)
          (type solid)
        )
        (layer "${p.side}.CrtYd")
      )
      (fp_line
        (start 4.6 -5.1)
        (end -4.6 -5.1)
        (stroke
          (width 0.05)
          (type solid)
        )
        (layer "${p.side}.CrtYd")
      )
      (fp_line
        (start -4.6 5.1)
        (end 4.6 5.1)
        (stroke
          (width 0.05)
          (type solid)
        )
        (layer "${p.side}.CrtYd")
      )
      (fp_line
        (start -4.6 -5.1)
        (end -4.6 5.1)
        (stroke
          (width 0.05)
          (type solid)
        )
        (layer "${p.side}.CrtYd")
      )
      (fp_line
        (start 3.95 3.2)
        (end 3.15 3.2)
        (stroke
          (width 0.1)
          (type solid)
        )
        (layer "${p.side}.Fab")
      )
      (fp_line
        (start 3.95 -4.4)
        (end 3.95 3.2)
        (stroke
          (width 0.1)
          (type solid)
        )
        (layer "${p.side}.Fab")
      )
      (fp_line
        (start 3.95 -4.4)
        (end -3.95 -4.4)
        (stroke
          (width 0.1)
          (type solid)
        )
        (layer "${p.side}.Fab")
      )
      (fp_line
        (start 3.15 3.2)
        (end 3.15 1.6)
        (stroke
          (width 0.1)
          (type solid)
        )
        (layer "${p.side}.Fab")
      )
      (fp_line
        (start 3.15 1.6)
        (end -3.15 1.6)
        (stroke
          (width 0.1)
          (type solid)
        )
        (layer "${p.side}.Fab")
      )
      (fp_line
        (start -0.5 1.6)
        (end -1 0.892893)
        (stroke
          (width 0.1)
          (type solid)
        )
        (layer "${p.side}.Fab")
      )
      (fp_line
        (start -1 0.892893)
        (end -1.5 1.6)
        (stroke
          (width 0.1)
          (type solid)
        )
        (layer "${p.side}.Fab")
      )
      (fp_line
        (start -3.15 3.2)
        (end -3.95 3.2)
        (stroke
          (width 0.1)
          (type solid)
        )
        (layer "${p.side}.Fab")
      )
      (fp_line
        (start -3.15 1.6)
        (end -3.15 3.2)
        (stroke
          (width 0.1)
          (type solid)
        )
        (layer "${p.side}.Fab")
      )
      (fp_line
        (start -3.95 -4.4)
        (end -3.95 3.2)
        (stroke
          (width 0.1)
          (type solid)
        )
        (layer "${p.side}.Fab")
      )
      (fp_text user "${p.ref}"
        (at 0 -1.5 ${r180})
        (layer "${p.side}.Fab")
        (effects
          (font
            (size 1 1)
            (thickness 0.15)
          )
          (justify ${p.side == 'F' ? '' : 'mirror'})
        )
      )
      (pad "1" thru_hole roundrect
        (at -1 2.85 ${p.r})
        (size 1 3.5)
        (drill 0.75)
        (layers "*.Cu" "*.Mask")
        (remove_unused_layers no)
        (roundrect_rratio 0.25)
        ${p.BAT_N.str}
      )
      (pad "2" thru_hole roundrect
        (at 1 2.85 ${p.r})
        (size 1 3.5)
        (drill 0.75)
        (layers "*.Cu" "*.Mask")
        (remove_unused_layers no)
        (roundrect_rratio 0.25)
        ${p.BAT_P.str}
      )
      (pad "MP" smd roundrect
        (at -3.35 -2.9 ${p.r})
        (size 1.5 3.4)
        (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")
        (roundrect_rratio 0.166667)
      )
      (pad "MP" smd roundrect
        (at 3.35 -2.9 ${p.r})
        (size 1.5 3.4)
        (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")
        (roundrect_rratio 0.166667)
      )
      `;
    const model_3d = `
      (model "${p.battery_connector_3dmodel_filename}"
        (offset
          (xyz ${p.battery_connector_3dmodel_xyz_offset[0]} ${p.battery_connector_3dmodel_xyz_offset[1]} ${p.battery_connector_3dmodel_xyz_offset[2]})
        )
        (scale
          (xyz ${p.battery_connector_3dmodel_xyz_scale[0]} ${p.battery_connector_3dmodel_xyz_scale[1]} ${p.battery_connector_3dmodel_xyz_scale[2]})
        )
        (rotate
          (xyz ${p.battery_connector_3dmodel_xyz_rotation[0]} ${p.battery_connector_3dmodel_xyz_rotation[1]} ${p.battery_connector_3dmodel_xyz_rotation[2]})
        )
      )`;
    const base_footprint_end = `
    )`;
    return base_footprint_start + (p.battery_connector_3dmodel_filename ? model_3d : '') + base_footprint_end;
  }
}
