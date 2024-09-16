import { z } from "zod";

// eg {"DATE":"2023-11-01","PIC":"PIC 1","HSCW":25.5,"IMF":3.92,"LMY":60.5,"GLQ":3.95}

export const PIC = z.object({
  DATE: z.string().date(),
  PIC: z.string(),
  HSCW: z.number().nullable(),
  IMF: z.number().nullable(),
  LMY: z.number().nullable(),
  GLQ: z.number().nullable(),
});

export type PIC = z.infer<typeof PIC>;

export const PICS = z.array(PIC);
export type PICS = z.infer<typeof PICS>;

export const PicKey = PIC.keyof();
export type PicKey = z.infer<typeof PicKey>;

export const PicDataKey = PicKey.exclude(["DATE", "PIC"]);
export type PicDataKey = z.infer<typeof PicDataKey>;
