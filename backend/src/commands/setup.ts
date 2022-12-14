import {
  Client,
  BaseCommandInteraction,
  MessageButton,
  MessageActionRow,
} from "discord.js";
import { Command } from "../interface";

const cmd: Command = {
  data: {
    name: "setup",
    description: "Discord hCaptch認証のセットアップをします",
    defaultMemberPermissions: ["ADMINISTRATOR"],
  },
  async execute(client: Client, interaction: BaseCommandInteraction) {
    const guild = interaction.guild;
    await interaction.reply({
      content: "セットアップを開始します",
      ephemeral: true,
    });
    const role = guild?.roles.cache.find((role) => role.name === "verified");
    if (!role === undefined) {
      await interaction.editReply({
        content:
          "Verifiedロールが存在します\n認証ボタンを作成する場合は`/genbutton`コマンドを実行してください",
      });
      return;
    }
    guild?.roles.create({ name: "verified" });
    await interaction.editReply({
      content: "ロールを作成しました",
    });
    const button = new MessageButton()
      .setCustomId("verify")
      .setStyle("PRIMARY")
      .setLabel("認証")
      .setEmoji("✅");
    await interaction.channel?.send({
      embeds: [
        {
          title: "認証方法",
          description: "認証を行うには、以下のボタンを押してください",
          color: "RANDOM",
          timestamp: new Date(),
          footer: {
            text: "©️ HidemaruOwO | Discord hCaptcha",
          },
        },
      ],
      components: [new MessageActionRow().addComponents(button)],
    });
    await interaction.editReply({ content: "セットアップを完了しました" });
  },
};

export { cmd };
