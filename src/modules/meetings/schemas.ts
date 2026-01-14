import { z } from "zod";

const transcriptItemSchema = z.object({
    start_ts: z.number(),
    text: z.string(),
    speaker_id: z.string(),
    });

    export const meetingsInsertSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    agentId: z.string().min(1, { message: "Agent is required" }),

    transcript: z.array(transcriptItemSchema).optional(),
    });

    export const meetingsUpdateSchema = meetingsInsertSchema.extend({
    id: z.string().min(1, { message: "Id is required" }),
    });
