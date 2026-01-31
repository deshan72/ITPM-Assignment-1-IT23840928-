// @ts-check
import { test, expect } from '@playwright/test';

export const testCases = [
  {
    id: `Pos_Fun_0001`,
    input: `aayuboovan! kohomadha oyalaa hodhin innavadha.`,
    expectedOutput: `ආයුබෝවන්! කොහොමද ඔයලා හොදින් ඉන්නවද.`,
  },
  {
    id: `Pos_Fun_0002`,
    input: `karuNaakaralaa mata podi udhavvak karanna puLuvandha?`,
    expectedOutput: `කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?`,
  },
  {
    id: `Pos_Fun_0003`,
    input: `mama gedhara yanavaa, ee unaata vahina nisaa yannee nae.`,
    expectedOutput: `මම ගෙදර යනවා,  ඒ උනාට වහින නිසා  යන්නේ නැ.`,
  },
  {
    id: `Pos_Fun_0004`,
    input: `oyaa enakam mama balan innavaa.`,
    expectedOutput: `ඔයා  එනකම් මම බලන් ඉන්නවා.`,
  },
  {
    id: `Pos_Fun_0005`,
    input: `Zoom meeting ekak thiyennee`,
    expectedOutput: `Zoom meeting එකක් තියෙන්නේ`,
  },
  {
    id: `Pos_Fun_0006`,
    input: `Documents tika attach karalaa mata email ekak evanna`,
    expectedOutput: `Documents ටික attach කරලා  මට email එකක් එවන්න`,
  },
  {
    id: `Pos_Fun_0007`,
    input: `mama ehema karannee naehae.`,
    expectedOutput: `මම එහෙම කරන්නේ නැහැ.`,
  },
  {
    id: `Pos_Fun_0008`,
    input: `Rs. 5343 gevanna thiyenavaa.mama eeka bank ekata gevala ennam`,
    expectedOutput: `Rs. 5343 ගෙවන්න තියෙනවා.මම ඒක bank එකට ගෙවල එන්නම්`,
  },
  {
    id: `Pos_Fun_0009`,
    input: `api 7.30 AM enavaa.puluvannam iita kalin lasthi vela inna`,
    expectedOutput: `අපි 7.30 AM එනවා.පුලුවන්නම් ඊට කලින් ලස්ති වෙල ඉන්න`,
  },
  {
    id: `Pos_Fun_0010`,
    input: `api naanna beach yamudha`,
    expectedOutput: `අපි නාන්න beach යමුද`,
  },
  {
    id: `Pos_Fun_0011`,
    input: `mee dhavas vala hariyata vaeda.ee nisa mata hariyata mahansi`,
    expectedOutput: `මේ දවස් වල හරියට වැඩ.ඒ නිස මට හරියට මහන්සි`,
  },
  {
    id: `Pos_Fun_0012`,
    input: `api labana mase trip ekak yanava kandy .oyalath enavadha yanna`,
    expectedOutput: `අපි ලබන මසෙ trip එකක් යනව kandy .ඔයලත් එනවද යන්න`,
  },
  {
    id: `Pos_Fun_0013`,
    input: `hari hari`,
    expectedOutput: `හරි හරි`,
  },
  {
    id: `Pos_Fun_0014`,
    input: `mama baenkuvata gihilla ennam`,
    expectedOutput: `මම බැන්කුවට ගිහිල්ල එන්නම්`,
  },
  {
    id: `Pos_Fun_0015`,
    input: `mama bath kanna yanava`,
    expectedOutput: `මම බත් කන්න යනව`,
  },
  {
    id: `Pos_Fun_0016`,
    input: `mama leda velaa inne.beheth aran ennam`,
    expectedOutput: `මම ලෙඩ වෙලා ඉන්නේ.බෙහෙත් අරන් එන්නම්`,
  },
  {
    id: `Pos_Fun_0017`,
    input: `iye maava accident una.mata godak amaaruyi`,
    expectedOutput: `ඉයෙ මාව accident උන.මට ගොඩක් අමාරුයි`,
  },
  {
    id: `Pos_Fun_0018`,
    input: `amma kiuvaa ikmanata gedhara enna kiyala`,
    expectedOutput: `අම්ම කිඋවා ඉක්මනට ගෙදර එන්න කියල`,
  },
  {
    id: `Pos_Fun_0019`,
    input: `campus eke event ekata yanna enavadha machan`,
    expectedOutput: `campus eke event එකට යන්න එනවද මචන්`,
  },
  {
    id: `Pos_Fun_0020`,
    input: `api kohe hari yamudha kattiyath ekka`,
    expectedOutput: `අපි කොහෙ හරි යමුද කට්ටියත් එක්ක`,
  },
  {
    id: `Pos_Fun_0021`,
    input: `magee yaaluva aluth bike ekak aragena`,
    expectedOutput: `මගේ යාලුව අලුත් bike එකක් අරගෙන`,
  },
  {
    id: `Pos_Fun_0022`,
    input: `machan heta enava needha vaedata`,
    expectedOutput: `මචන් හෙට එනව නේද වැඩට`,
  },
  {
    id: `Pos_Fun_0023`,
    input: `adha nam hodhatama vahinava.`,
    expectedOutput: `අද නම් හොදටම වහිනව.`,
  },
  {
    id: `Pos_Fun_0024`,
    input: `mee dhavas tikee patta sithalai nedha?`,
    expectedOutput: `මේ දවස් ටිකේ පට්ට සිතලෛ නේද?`,
  },
  {
    id: `Neg_Fun_0025`,
    input: `hetaawillaithuruwada tika iwarakaramu`,
    expectedOutput: `හෙටාwඉල්ලෛතුරුwඅඩ ටික ඉwඅරකරමු`,
  },
  {
    id: `Neg_Fun_0026`,
    input: `I will come tomorrow`,
    expectedOutput: `ඉ will come tomorrow`,
  },
  {
    id: `Neg_Fun_0027`,
    input: `mamagihillagenahithannepuluwanda`,
    expectedOutput: `මමගිහිල්ලගෙනහිතන්නෙපුලුwඅන්ඩ`,
  },
  {
    id: `Neg_Fun_0028`,
    input: `oya enne??!! Kohetada.kath ekkada`,
    expectedOutput: `ඔය එන්නෙ??!! ඛොහෙටඩ.කත් එක්කඩ`,
  },
  {
    id: `Neg_Fun_0030`,
    input: `hithalaaaa nemeiii`,
    expectedOutput: `හිතලාආ නෙමේඊ`,
  },
  {
    id: `Neg_Fun_0031`,
    input: `mama yanava 😂😂`,
    expectedOutput: `මම යනව 😂😂`,
  },
  {
    id: `Neg_Fun_0032`,
    input: `USD 1500 gevanna`,
    expectedOutput: `USD 1500 ගෙවන්න`,
  },
  {
    id: `Neg_Fun_0033`,
    input: `mama office gihin asap ennam`,
    expectedOutput: `මම office ගිහින් asap එන්නම්`,
  },
  {
    id: `Neg_Fun_0034`,
    input: `api Kandy yanna hadanne, Google Maps eka balamu`,
    expectedOutput: `අපි Kandy යන්න හඩන්නෙ, Google Maps එක බලමු`,
  },
  {
    id: `Neg_Fun_0035`,
    input: `ado machan eka poddak amarui wage`,
    expectedOutput: `ado මචන් එක පොඩ්ඩක් අමරුඉ wage`,
  },
];

for (const tc of testCases) {
  test(tc.id, async ({ page }) => {
    await page.goto("https://www.swifttranslator.com/");
    const inputBox = page.locator(
      'textarea[placeholder="Input Your Singlish Text Here."]',
    );
    const outputBox = page
      .locator('div:has(> div.panel-title:has-text("Sinhala")) div.w-full.h-80')
      .first();
    await inputBox.fill(tc.input);
    //In here check expected output exactly matches the output
    await expect(outputBox).toContainText(tc.expectedOutput, {
      timeout: 15000,
    });
  });
}