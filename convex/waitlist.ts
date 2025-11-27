import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
    args: {
        email: v.string(),
        name: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        const newEntryId = await ctx.db.insert("waitlist", {
            email: args.email,
            name: args.name,
            status: "pending",
        });
        return newEntryId;
    },
});

export const get = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query("waitlist").collect();
    },
});
