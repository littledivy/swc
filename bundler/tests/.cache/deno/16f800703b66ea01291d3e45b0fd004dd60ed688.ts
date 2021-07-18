// Loaded from https://deno.land/x/discordeno@11.0.0-rc.2/src/handlers/commands/APPLICATION_COMMAND_DELETE.ts


import { eventHandlers } from "../../bot.ts";
import type { DiscordGatewayPayload } from "../../types/gateway/gateway_payload.ts";
import type { ApplicationCommandCreateUpdateDelete } from "../../types/interactions/commands/application_command_create_update_delete.ts";

export function handleApplicationCommandDelete(data: DiscordGatewayPayload) {
  eventHandlers.applicationCommandDelete?.(data.d as ApplicationCommandCreateUpdateDelete);
}
