// Copyright (c) 2025 SimplyYat
//
// SPDX-License-Identifier: MIT
//
// To view a copy of this license, visit https://opensource.org/license/mit/
//
// Author: @SimplyYat
//
// Description:
//   SMD side-operated slider switch, right angle: https://www.ckswitches.com/media/1424/pcm.pdf
//
//
// Nets:
//    from: corresponds to pin 1
//    to: corresponds to pin 2
//
// Params:
//    side: default is B for Back (options: F or B)
//      the side on which to place the single-side footprint
//    slide_switch_3dmodel_filename: default is ''
//      Allows you to specify the path to a 3D model STEP or WRL file to be
//      used when rendering the PCB. Use the ${VAR_NAME} syntax to point to
//      a KiCad configured path.
//    slide_switch_3dmodel_xyz_offset: default is [0, 0, 0]
//      xyz offset (in mm), used to adjust the position of the 3d model
//      relative the footprint.
//    slide_switch_3dmodel_xyz_scale: default is [1, 1, 1]
//      xyz scale, used to adjust the size of the 3d model relative to its
//      original size.
//    slide_switch_3dmodel_xyz_rotation: default is [0, 0, 0]
//      xyz rotation (in degrees), used to adjust the orientation of the 3d
//      model relative the footprint.
//    lcsc_part_number: default is 'C128955'
//      LCSC part number to use for this footprint, in case you want to use
//      JLCPCB's SMT assembly service.

module.exports = {
  params: {
    designator: 'PWR',
    side: 'B',
    slide_switch_3dmodel_filename: '${KICAD8_3DMODEL_DIR}/Button_Switch_SMD.3dshapes/SW_SPDT_PCM12.wrl',
    slide_switch_3dmodel_xyz_offset: [0, 0, 0],
    slide_switch_3dmodel_xyz_rotation: [0, 0, 0],
    slide_switch_3dmodel_xyz_scale: [1, 1, 1],
    from: { type: 'net', value: 'BAT_P' },
    to: { type: 'net', value: 'RAW' },
    lcsc_part_number: 'C128955',
  },
  body: p => {
    const r180 = p.r + 180;
    const base_footprint_start = `
    (footprint "Button_Switch_SMD:SW_SPDT_PCM12"
      (layer "${p.side}.Cu")
      ${p.at}
      (descr "Ultraminiature Surface Mount Slide Switch, right-angle, https://www.ckswitches.com/media/1424/pcm.pdf")
      (property "Reference" "${p.ref}"
        (at 0 0 ${r180})
        (layer "${p.side}.SilkS")
        (effects
          (font
            (size 1 1)
            (thickness 0.15)
          )
          (justify ${p.side == 'F' ? '' : 'mirror'})
        )
      )
      (property "Value" "SW_SPDT_PCM12"
        (at 0 0 ${r180})
        (layer "${p.side}.Fab")
        (hide yes)
        (effects
          (font
            (size 1 1)
            (thickness 0.15)
          )
        )
      )
      (property "Footprint" "Button_Switch_SMD:SW_SPDT_PCM12"
        (at 0 0 ${r180})
        (unlocked yes)
        (layer "${p.side}.Fab")
        (effects
          (font
            (size 1.27 1.27)
            (thickness 0.15)
          )
          (justify ${p.side == 'F' ? '' : 'mirror'})
        )
      )
      (property "Datasheet" ""
        (at 0 0 ${r180})
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
        (at 0 0 ${r180})
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
        (start -3.450004 -0.719996)
        (end -3.450006 0.070001)
        (stroke
          (width 0.12)
          (type solid)
        )
        (layer "${p.side}.SilkS")
              )
      (fp_line
        (start 0.1 1.120001)
        (end -1.599996 1.119996)
        (stroke
          (width 0.12)
          (type solid)
        )
        (layer "${p.side}.SilkS")
      )
      (fp_line
        (start -1.400002 -3.02)
        (end -1.400005 -1.729995)
        (stroke
          (width 0.12)
          (type solid)
        )
        (layer "${p.side}.SilkS")
      )
      (fp_line
        (start -1.200003 -3.229998)
        (end -1.400002 -3.02)
        (stroke
          (width 0.12)
          (type solid)
        )
        (layer "${p.side}.SilkS")
      )
      (fp_line
        (start 1.599994 1.120005)
        (end 1.399999 1.120004)
        (stroke
          (width 0.12)
          (type solid)
        )
        (layer "${p.side}.SilkS")
      )
      (fp_line
        (start -0.099992 -1.730001)
        (end -0.099998 -3.019995)
        (stroke
          (width 0.12)
          (type solid)
        )
        (layer "${p.side}.SilkS")
      )
      (fp_line
        (start -0.300008 -3.229998)
        (end -1.200003 -3.229998)
        (stroke
          (width 0.12)
          (type solid)
        )
        (layer "${p.side}.SilkS")
      )
      (fp_line
        (start -0.300008 -3.229998)
        (end -0.099998 -3.019995)
        (stroke
          (width 0.12)
          (type solid)
        )
        (layer "${p.side}.SilkS")
      )
      (fp_line
        (start 3.449996 0.070015)
        (end 3.449997 -0.720006)
        (stroke
          (width 0.12)
          (type solid)
        )
        (layer "${p.side}.SilkS")
      )
      (fp_line
        (start 2.85 -1.729999)
        (end -2.85 -1.729998)
        (stroke
          (width 0.12)
          (type solid)
        )
        (layer "${p.side}.SilkS")
      )
      (fp_line
        (start -4.399998 2.450003)
        (end -4.399995 -2.099995)
        (stroke
          (width 0.05)
          (type solid)
        )
        (layer "${p.side}.CrtYd")
      )
      (fp_line
        (start -4.399995 -2.099995)
        (end -1.649999 -2.100002)
        (stroke
          (width 0.05)
          (type solid)
        )
        (layer "${p.side}.CrtYd")
      )
      (fp_line
        (start -1.649999 -2.100002)
        (end -1.650002 -3.399996)
        (stroke
          (width 0.05)
          (type solid)
        )
        (layer "${p.side}.CrtYd")
              )
      (fp_line
        (start -1.650002 -3.399996)
        (end 1.649997 -3.400003)
        (stroke
          (width 0.05)
          (type solid)
        )
        (layer "${p.side}.CrtYd")
      )
      (fp_line
        (start 4.399997 2.449993)
        (end -4.399998 2.450003)
        (stroke
          (width 0.05)
          (type solid)
        )
        (layer "${p.side}.CrtYd")
      )
      (fp_line
        (start 1.649999 -2.099993)
        (end 4.400005 -2.100004)
        (stroke
          (width 0.05)
          (type solid)
        )
        (layer "${p.side}.CrtYd")
              )
      (fp_line
        (start 1.649997 -3.400003)
        (end 1.649999 -2.099993)
        (stroke
          (width 0.05)
          (type solid)
        )
        (layer "${p.side}.CrtYd")
      )
      (fp_line
        (start 4.400005 -2.100004)
        (end 4.399997 2.449993)
        (stroke
          (width 0.05)
          (type solid)
        )
        (layer "${p.side}.CrtYd")
              )
      (fp_line
        (start -3.350004 0.999991)
        (end 3.350004 1.000011)
        (stroke
          (width 0.1)
          (type solid)
        )
        (layer "${p.side}.Fab")
      )
      (fp_line
        (start -3.349999 -1.599992)
        (end -3.350004 0.999991)
        (stroke
          (width 0.1)
          (type solid)
        )
        (layer "${p.side}.Fab")
      )
      (fp_line
        (start -1.400013 -2.949999)
        (end -1.399999 -1.650006)
        (stroke
          (width 0.1)
          (type solid)
        )
        (layer "${p.side}.Fab")
              )
      (fp_line
        (start -1.200009 -3.149989)
        (end -1.400013 -2.949999)
        (stroke
          (width 0.1)
          (type solid)
        )
        (layer "${p.side}.Fab")
      )
      (fp_line
        (start -0.100003 -1.599997)
        (end -0.100005 -2.900004)
        (stroke
          (width 0.1)
          (type solid)
        )
        (layer "${p.side}.Fab")
              )
      (fp_line
        (start -0.349995 -3.150002)
        (end -1.200009 -3.149989)
        (stroke
          (width 0.1)
          (type solid)
        )
        (layer "${p.side}.Fab")
      )
      (fp_line
        (start -0.149996 -2.949993)
        (end -0.349995 -3.150002)
        (stroke
          (width 0.1)
          (type solid)
        )
        (layer "${p.side}.Fab")
              )
      (fp_line
        (start -0.100005 -2.900004)
        (end -0.149996 -2.949993)
        (stroke
          (width 0.1)
          (type solid)
        )
        (layer "${p.side}.Fab")
              )
      (fp_line
        (start 3.350004 1.000011)
        (end 3.350001 -1.600005)
        (stroke
          (width 0.1)
          (type solid)
        )
        (layer "${p.side}.Fab")
      )
      (fp_line
        (start 3.350001 -1.600005)
        (end -3.349999 -1.599992)
        (stroke
          (width 0.1)
          (type solid)
        )
        (layer "${p.side}.Fab")
      )
      (fp_text user "${p.ref}"
        (at 0.00001 3.200008 ${r180})
        (layer "${p.side}.Fab")
                (effects
          (font
            (size 1 1)
            (thickness 0.15)
          )
          (justify ${p.side == 'F' ? '' : 'mirror'})
        )
      )
      (pad "" smd rect
        (at -3.65001 -1.429994 ${p.r})
        (size 1 0.8)
        (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")
      )
      (pad "" smd rect
        (at -3.65 0.780001 ${p.r})
        (size 1 0.8)
        (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")
      )
      (pad "" np_thru_hole circle
        (at -1.500004 -0.329997 ${p.r})
        (size 0.9 0.9)
        (drill 0.9)
        (layers "*.Cu" "*.Mask")
      )
      (pad "" np_thru_hole circle
        (at 1.5 -0.330007 ${p.r})
        (size 0.9 0.9)
        (drill 0.9)
        (layers "*.Cu" "*.Mask")
      )
      (pad "" smd rect
        (at 3.649995 -1.429996 ${p.r})
        (size 1 0.8)
        (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")
      )
      (pad "" smd rect
        (at 3.65 0.780004 ${p.r})
        (size 1 0.8)
        (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")
      )
      (pad "1" smd rect
        (at -2.249996 1.430004 ${p.r})
        (size 0.7 1.5)
        (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")
        ${p.from.str}
      )
      (pad "2" smd rect
        (at 0.750003 1.430007 ${p.r})
        (size 0.7 1.5)
        (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")
        ${p.to.str}
      )
      (pad "3" smd rect
        (at 2.250009 1.429999 ${p.r})
        (size 0.7 1.5)
        (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")
      )
      `;
    const model_3d = `
      (model "${p.slide_switch_3dmodel_filename}"
        (offset
          (xyz ${p.slide_switch_3dmodel_xyz_offset[0]} ${p.slide_switch_3dmodel_xyz_offset[1]} ${p.slide_switch_3dmodel_xyz_offset[2]})
        )
        (scale
          (xyz ${p.slide_switch_3dmodel_xyz_scale[0]} ${p.slide_switch_3dmodel_xyz_scale[1]} ${p.slide_switch_3dmodel_xyz_scale[2]})
        )
        (rotate
          (xyz ${p.slide_switch_3dmodel_xyz_rotation[0]} ${p.slide_switch_3dmodel_xyz_rotation[1]} ${p.slide_switch_3dmodel_xyz_rotation[2]})
        )
      )`;
    const base_footprint_end = `
    )`;
    return base_footprint_start + (p.slide_switch_3dmodel_filename ? model_3d : '') + base_footprint_end;
  }
}
