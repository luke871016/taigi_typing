const exampleSentences = [
  {
    hanji: "𪜶兩个生做一模一樣。",
    tailo: "In nn̄g ê senn-tsò it-bôo-it-iūnn.",
  },
  {
    hanji: "𪜶兩兄弟仔為著拚生理，就按呢一刀兩斷無來去。",
    tailo:
      "In nn̄g hiann-tī-á uī-tio̍h piànn-sing-lí, tō án-ne it-to-lióng-tuān bô lâi-khì.",
  },
  {
    hanji: "老母一下死，囡仔就大聲吼。",
    tailo: "Lāu-bú tsi̍t-ē sí, gín-á tō tuā-siann háu.",
  },
  {
    hanji: "你毋好一日到暗拋拋走。",
    tailo: "Lí m̄-hó tsi̍t-ji̍t-kàu-àm pha-pha-tsáu.",
  },
  {
    hanji: "我一世人毋捌做過對不起別人的代誌。",
    tailo:
      "Guá tsi̍t-sì-lâng m̄ bat tsò-kuè tuì-put-khí pa̍t-lâng ê tāi-tsì.",
  },
  {
    hanji: "買果子的錢，一人愛出一半。",
    tailo: "Bé kué-tsí ê tsînn, tsi̍t lâng ài tshut tsi̍t-puànn.",
  },
  {
    hanji: "塗跤一半擺仔無拭，袂偌垃圾啦！",
    tailo: "Thôo-kha tsi̍t-puànn-pái-á bô tshit, bē guā lah-sap--lah!",
  },
  {
    hanji: "有一半个仔人客真𠢕嫌東嫌西。",
    tailo: "Ū tsi̍t-puànn-ê-á lâng-kheh tsin gâu hiâm-tang-hiâm-sai.",
  },
  {
    hanji: "頭家人真好，我一半日仔無去，伊嘛袂按怎。",
    tailo:
      "Thâu-ke lâng tsin hó, guá tsi̍t-puànn-ji̍t-á bô khì, i mā bē án-tsuánn.",
  },
  {
    hanji: "一旦地動，彼間厝就會倒。",
    tailo: "It-tàn tē-tāng, hit king tshù tō ē tó.",
  },
  {
    hanji: "做教授是我一生的願望。",
    tailo: "Tsò kàu-siū sī guá it-sing ê guān-bōng.",
  },
  {
    hanji: "對阮厝到公司，行路一目𥍉仔就到矣。",
    tailo:
      "Tuì guán tshù kàu kong-si, kiânn-lōo tsi̍t-ba̍k-nih-á tō kàu--ah.",
  },
  {
    hanji: "一目𥍉仔大學四年就過去矣。",
    tailo: "Tsi̍t-ba̍k-nih-á tāi-ha̍k sì nî tō kuè--khì--ah.",
  },
  {
    hanji: "一來我無時間，二來我無興趣，所以我無欲參加。",
    tailo:
      "It--lâi guá bô sî-kan, jī--lâi guá bô hìng-tshù, sóo-í guá bô beh tsham-ka.",
  },
  {
    hanji: "你講過的話，一定愛會記得。",
    tailo: "Lí kóng--kuè ê uē, it-tīng ài ē-kì--tit.",
  },
  {
    hanji: "伊食飯攏無一定的時間。",
    tailo: "I tsia̍h-pn̄g lóng bô it-tīng ê sî-kan.",
  },
  {
    hanji: "一直向前行，毋免轉斡。",
    tailo: "It-ti̍t hiòng-tsiân kiânn, m̄-bián tńg-uat.",
  },
  {
    hanji: "阿美一直咧掃塗跤，攏無歇睏。",
    tailo: "A-bí it-ti̍t teh sàu thôo-kha, lóng bô hioh-khùn.",
  },
  {
    hanji: "伊對伊的學生一律攏真嚴格。",
    tailo: "I tuì i ê ha̍k-sing it-lu̍t lóng tsin giâm-keh.",
  },
  {
    hanji: "伊佮我的看法並無一致。",
    tailo: "I kah guá ê khuànn-huat pīng bô it-tì.",
  },
  {
    hanji: "伊一面做工，一面讀冊。",
    tailo: "I tsi̍t-bīn tsò-kang, tsi̍t-bīn tha̍k-tsheh.",
  },
  {
    hanji: "𪜶一家伙仔對人攏真客氣。",
    tailo: "In tsi̍t-ke-hué-á tuì lâng lóng tsin kheh-khì.",
  },
  {
    hanji: "這擺欲替伊開刀的醫生攏是一粒一的。",
    tailo: "Tsit pái beh thè i khui-to ê i-sing lóng sī it-lia̍p-it--ê.",
  },
  {
    hanji: "阿英佮我是一粒一的好朋友。",
    tailo: "A-ing kah guá sī it-lia̍p-it ê hó-pîng-iú.",
  },
  {
    hanji: "伊跤手真緊，穡頭一睏仔就做了矣。",
    tailo: "I kha-tshiú tsin kín, sit-thâu tsi̍t-khùn-á tō tsò-liáu--ah.",
  },
  {
    hanji: "遮的物件伊做一睏仔共伊食了。",
    tailo: "Tsia ê mi̍h-kiānn i tsò tsi̍t-khùn-á kā i tsia̍h-liáu.",
  },
  {
    hanji: "眾人的意見伊一概反對。",
    tailo: "Tsìng-lâng ê ì-kiàn i it-khài huán-tuì.",
  },
  {
    hanji: "猶有一寡仔物件無整理。",
    tailo: "Iáu-ū tsi̍t-kuá-á mi̍h-kiānn bô tsíng-lí.",
  },
  {
    hanji: "藥仔食落去，到今一對時矣。",
    tailo: "Io̍h-á tsia̍h--lo̍h-khì, kàu-tann tsi̍t tuì-sî--ah.",
  },
  {
    hanji: "伊來一霎仔久就轉去矣。",
    tailo: "I lâi tsi̍t-tiap-á-kú tō tńg--khì--ah.",
  },
  {
    hanji: "你才食一點仔物件哪會飽？",
    tailo: "Lí tsiah tsia̍h tsi̍t-tiám-á mi̍h-kiānn ná ē pá?",
  },
  {
    hanji: "伊昨暝去予人刣幾若刀。",
    tailo: "I tsa-mê khì hōo lâng thâi kuí-nā to.",
  },
  {
    hanji: "𪜶頭家真𠢕共人刁。",
    tailo: "In thâu-ke tsin gâu kā lâng tiau.",
  },
  {
    hanji: "食又欲食，穡又毋做，真害！",
    tailo: "Tsia̍h iū beh tsia̍h, sit iū m̄ tsò, tsin hāi!",
  },
  {
    hanji: "這个袂使，彼个毋通，全你的意見了了。",
    tailo: "Tsit ê bē-sái, hit ê m̄-thang, tsuân lí ê ì-kiàn--liáu-liáu.",
  },
  {
    hanji: "時機誠䆀，害我十二生相變透透嘛變無撚。",
    tailo:
      "Sî-ki tsiânn bái, hāi guá tsa̍p-jī senn-siùnn piàn-thàu-thàu mā piàn-bô-lián.",
  },
  {
    hanji: "二九暝家家戶戶攏咧圍爐。",
    tailo: "Jī-káu-mê ke-ke-hōo-hōo lóng teh uî-lôo.",
  },
  {
    hanji: "割稻仔的人工愈濟就愈緊割了。",
    tailo: "Kuah-tiū-á ê lâng-kang jú tsē tō jú kín kuah-liáu.",
  },
  {
    hanji: "臺灣現此時的人工真貴。",
    tailo: "Tâi-uân hiān-tshú-sî ê lâng-kang tsin kuì.",
  },
  {
    hanji: "恁囝婿的人才生做袂䆀。",
    tailo: "Lín kiánn-sài ê lâng-tsâi senn-tsò bē-bái.",
  },
  {
    hanji: "算命的講，人中長的人較長歲壽。",
    tailo: "Sǹg-miā--ê kóng, jîn-tiong tn̂g ê lâng khah tn̂g-huè-siū.",
  },
  {
    hanji: "伊一禮拜至少愛賣三百个，才袂了本。",
    tailo: "I tsi̍t lé-pài tsì-tsió ài bē sann-pah ê, tsiah bē liáu-pún.",
  },
  {
    hanji: "媠，媠無十全；䆀，䆀無加圇。",
    tailo: "Suí, suí bô tsa̍p-tsn̂g; bái, bái bô ka-nn̂g.",
  },
  {
    hanji: "算命仙的講𪜶兩人的八字袂合。",
    tailo: "Sǹg-miā-sian--ê kóng in nn̄g lâng ê peh-jī bē ha̍h.",
  },
  {
    hanji: "七早八早，你就想欲歇睏？",
    tailo: "Tshit-tsá-peh-tsá, lí tō siūnn-beh hioh-khùn?",
  },
  {
    hanji: "你講閣較濟伊嘛聽袂入耳。",
    tailo: "Lí kóng koh-khah tsē i mā thiann bē ji̍p-ní.",
  },
  {
    hanji: "食甲七老八老矣，猶閣毋認老。",
    tailo: "Tsia̍h kah tshit-lāu-peh-lāu--ah, iáu-koh m̄ jīn-lāu.",
  },
  {
    hanji: "你著較拍拚咧，毋通做了尾仔囝。",
    tailo: "Lí tio̍h khah phah-piànn--leh, m̄-thang tsò liáu-bué-á-kiánn.",
  },
  {
    hanji: "講著種花伊閣有二步七仔！",
    tailo: "Kóng-tio̍h tsìng hue i koh ū--jī-pōo-tshit-á!",
  },
  {
    hanji: "過年時仔伊會用外國酒來做人事。",
    tailo: "Kuè-nî-sî-á i ē īng guā-kok tsiú lâi tsò jîn-sū.",
  },
  {
    hanji: "陳家二房的囝孫仔攏真老實。",
    tailo: "Tân--ka jī-pâng ê kiánn-sun-á lóng tsin láu-si̍t.",
  },
  {
    hanji: "我今仔入門，電話就來矣。",
    tailo: "Guá tann-á ji̍p-mn̂g, tiān-uē tō lâi--ah.",
  },
  {
    hanji: "我想欲趕緊共你娶入門。",
    tailo: "Guá siūnn-beh kuánn-kín kā lí tshuā ji̍p-mn̂g.",
  },
  {
    hanji: "你出門了後，伊就醒矣。",
    tailo: "Lí tshut-mn̂g liáu-āu, i tō tshénn--ah.",
  },
  {
    hanji: "大姊昨昏二指去予玻璃幼仔割著。",
    tailo: "Tuā-tsí tsa-hng jī-tsáinn khì hōo po-lê-iù-á kuah--tio̍h.",
  },
  {
    hanji: "伊是刁持欲佮我做對的。",
    tailo: "I sī tiau-tî beh kah guá tsò-tuì--ê.",
  },
  {
    hanji: "伊的人面真闊，拜託伊就無毋著！",
    tailo: "I ê lâng-bīn tsin khuah, pài-thok--i tō bô m̄-tio̍h!",
  },
  {
    hanji: "阮這个單位的人員無夠，工課才會做袂完。",
    tailo:
      "Guán tsit ê tan-uī ê jîn-uân bô-kàu, khang-khuè tsiah ē tsò bē uân.",
  },
  {
    hanji: "兩隊人馬佇街仔路相拄。",
    tailo: "Nn̄g tuī jîn-má tī ke-á-lōo sio-tú.",
  },
  {
    hanji: "這个囡仔欲食毋討趁，有夠了然。",
    tailo: "Tsit ê gín-á beh tsia̍h m̄ thó-thàn, ū-kàu liáu-jiân.",
  },
  {
    hanji: "咱愛靠家己的力量拚出咱家己的前途。",
    tailo:
      "Lán ài khò ka-kī ê li̍k-liōng piànn-tshut lán ka-kī ê tsiân-tôo.",
  },
  {
    hanji: "規間厝恬恬無聲，連半个人影嘛無。",
    tailo:
      "Kui king tshù tiām-tiām bô-siann, liân puànn ê lâng-iánn mā bô.",
  },
  {
    hanji: "我今年就欲入學去讀冊矣！",
    tailo: "Guá kin-nî tō beh ji̍p-o̍h khì tha̍k-tsheh--ah!",
  },
  {
    hanji: "這號物件都已經有矣，你閣欲買，加了錢的。",
    tailo:
      "Tsit-lō mi̍h-kiānn to í-king ū--ah, lí koh beh bé, ke liáu-tsînn--ê.",
  },
  {
    hanji: "這間店是算人頭收錢的。",
    tailo: "Tsit king tiàm sī sǹg lâng-thâu siu tsînn--ê.",
  },
  {
    hanji: "警察掠著的是人頭，毋是真正的頭家。",
    tailo:
      "Kíng-tshat lia̍h--tio̍h--ê sī lâng-thâu, m̄ sī tsin-tsiànn ê thâu-ke.",
  },
  {
    hanji: "無佮意你就講，何乜苦共伊刁難？",
    tailo: "Bô kah-ì lí tō kóng, hô-mí-khóo kā i thiau-lân?",
  },
  {
    hanji: "彼兩丸烏烏的物件是啥物？",
    tailo: "Hit nn̄g uân oo-oo ê mi̍h-kiānn sī siánn-mih?",
  },
  {
    hanji: "這項物件有也好，無也好，攏無要緊。",
    tailo: "Tsit hāng mi̍h-kiānn ū iā hó, bô iā hó, lóng bô iàu-kín.",
  },
  {
    hanji: "囡仔會大，早慢是愛離開。",
    tailo: "Gín-á ē tuā, tsá-bān sī ài lī-khui.",
  },
  {
    hanji: "陰鴆陰鴆，咬人三寸深。",
    tailo: "Im-thim-im-thim, kā lâng sann tshùn tshim.",
  },
  {
    hanji: "我無彼號閒工佮你開講。",
    tailo: "Guá bô hit-lō îng-kang kah lí khai-káng.",
  },
  {
    hanji: "這馬我才知影伊是騙我的。",
    tailo: "Tsit-má guá tsiah tsai-iánn i sī phiàn--guá--ê.",
  },
  {
    hanji: "伊才十七歲爾爾，袂使啉酒。",
    tailo: "I tsiah tsa̍p-tshit huè niā-niā, bē-sái lim tsiú.",
  },
  {
    hanji: "我才無欲相信你講的話！",
    tailo: "Guá tsiah bô beh siong-sìn lí kóng ê uē!",
  },
  {
    hanji: "阮丈人明仔載欲起來臺北。",
    tailo: "Guán tiūnn-lâng bîn-á-tsài beh khí-lâi Tâi-pak.",
  },
  {
    hanji: "伊是一个土人，講話較凊彩，你毋通佮伊計較。",
    tailo:
      "I sī tsi̍t ê thóo-lâng, kóng-uē khah tshìn-tshái, lí m̄-thang kah i kè-kàu.",
  },
  {
    hanji: "大人儉一喙，囡仔食甲飫。",
    tailo: "Tuā-lâng khiām tsi̍t tshuì, gín-á tsia̍h kah uì.",
  },
  {
    hanji: "囡仔猶閣細漢，你毋通共拍甲遐爾仔大力。",
    tailo:
      "Gín-á iáu-koh sè-hàn, lí m̄-thang kā phah kah hiah-nī-á tuā-la̍t.",
  },
  {
    hanji: "對臺北坐高鐵到臺中上久是一點捅鐘。",
    tailo:
      "Tuì Tâi-pak tsē ko-thih kàu Tâi-tiong siōng kú sī tsi̍t tiám thóng tsing.",
  },
  {
    hanji: "頂禮拜阮一陣人上山去看風景。",
    tailo:
      "Tíng lé-pài guán tsi̍t tīn lâng tsiūnn-suann khì khuànn hong-kíng.",
  },
  {
    hanji: "伊拍一下傷大下，箠仔煞斷去。",
    tailo: "I phah tsi̍t-ē siunn tuā-ē, tshuê-á suah tn̄g--khì.",
  },
  {
    hanji: "山頂的暗暝，會使看著千千萬萬粒星。",
    tailo:
      "Suann-tíng ê àm-mê, ē-sái khuànn-tio̍h tshian-tshian-bān-bān lia̍p tshenn.",
  },
  {
    hanji: "姑婆的翁我愛叫伊「丈公」。",
    tailo: "Koo-pô ê ang guá ài kiò i “tiūnn-kong”.",
  },
  {
    hanji: "這馬下勻的少年人，想法佮阮往過攏無仝。",
    tailo:
      "Tsit-má ē-ûn ê siàu-liân-lâng, siūnn-huat kah guán íng-kuè lóng bô kāng.",
  },
  {
    hanji: "大不了予人罵罵咧爾爾。",
    tailo: "Tāi-put-liáu hōo lâng mē-mē--leh niā-niā.",
  },
  {
    hanji: "伊三不五時就來阮兜行踏。",
    tailo: "I sam-put-gōo-sî tō lâi guán tau kiânn-ta̍h.",
  },
  {
    hanji: "伊三不五時會有新作品出版。",
    tailo: "I sam-put-gōo-sî ē ū sin tsok-phín tshut-pán.",
  },
  {
    hanji: "你這款土公仔性著愛改啦！",
    tailo: "Lí tsit khuán thóo-kong-á-sìng tio̍h-ài kái--lah!",
  },
  {
    hanji: "伊就是彼款土公仔性，你莫佮伊計較。",
    tailo: "I tō sī hit khuán thóo-kong-á-sìng, lí mài kah i kè-kàu.",
  },
  {
    hanji: "請上天保庇咱臺灣會當安定佮富裕。",
    tailo:
      "Tshiánn siōng-thian pó-pì lán Tâi-uân ē-tàng an-tīng kah hù-jū.",
  },
  {
    hanji: "彼項工夫伊已經學上手矣。",
    tailo: "Hit hāng kang-hu i í-king o̍h tsiūnn-tshiú--ah.",
  },
  {
    hanji: "諞仙仔錢諞上手就溜旋矣。",
    tailo: "Pián-sian-á tsînn pián tsiūnn-tshiú tō liu-suan--ah.",
  },
  {
    hanji: "伊出手真大方，攏袂凍霜。",
    tailo: "I tshut-tshiú tsin tāi-hong, lóng bē tàng-sng.",
  },
  {
    hanji: "伊今仔日的穿插真大方。",
    tailo: "I kin-á-ji̍t ê tshīng-tshah tsin tāi-hong.",
  },
  {
    hanji: "今仔日是大日，真濟人嫁娶。",
    tailo: "Kin-á-ji̍t sī tuā-ji̍t, tsin tsē lâng kè-tshuā.",
  },
  {
    hanji: "運動會閣拄著出大日，逐家一定會曝甲烏趖趖。",
    tailo:
      "Ūn-tōng-huē koh tú-tio̍h tshut-tuā-ji̍t, ta̍k-ke it-tīng ē pha̍k kah oo-sô-sô.",
  },
  {
    hanji: "你若欲做衫，愛先量寸尺。",
    tailo: "Lí nā beh tsò sann, ài sing niû tshùn-tshioh.",
  },
  {
    hanji: "囡仔人騎車愛小心，毋通騎傷緊。",
    tailo: "Gín-á-lâng khiâ-tshia ài sió-sim, m̄-thang khiâ siunn kín.",
  },
  {
    hanji: "舊曆的小月干焦二十九工爾爾。",
    tailo: "Kū-li̍k ê sió-gue̍h kan-na jī-tsa̍p-káu kang niā-niā.",
  },
  {
    hanji: "這個月是小月，來阮店交關的人客有較少。",
    tailo:
      "Tsit kò gue̍h sī sió-gue̍h, lâi guán tiàm kau-kuan ê lâng-kheh ū khah tsió.",
  },
  {
    hanji: "這條手巾仔做了有夠工夫。",
    tailo: "Tsit tiâu tshiú-kin-á tsò liáu ū-kàu kang-hu.",
  },
  {
    hanji: "咱攏是熟似人，毋免遐工夫。",
    tailo: "Lán lóng sī si̍k-sāi-lâng, m̄-bián hiah kang-hu.",
  },
  {
    hanji: "你做代誌毋通三心兩意。",
    tailo: "Lí tsò tāi-tsì m̄-thang sam-sim-lióng-ì.",
  },
  {
    hanji: "你閣會曉西瓜倚大爿，知影欲綴阮行。",
    tailo:
      "Lí koh ē-hiáu si-kue uá tuā-pîng, tsai-iánn beh tuè guán kiânn.",
  },
  {
    hanji: "你的年歲比我較濟，大爿讓予你坐。",
    tailo: "Lí ê nî-huè pí guá khah tsē, tuā-pîng niū hōo lí tsē.",
  },
  {
    hanji: "啥人叫你大主大意做這件代誌？",
    tailo: "Siánn-lâng kiò lí tuā-tsú-tuā-ì tsò tsit kiānn tāi-tsì?",
  },
  {
    hanji: "小可仔代誌毋免囥佇心肝內。",
    tailo: "Sió-khuá-á tāi-tsì m̄-bián khǹg tī sim-kuann-lāi.",
  },
  {
    hanji: "伊攏愛等甲下半暝才睏會落眠。",
    tailo: "I lóng ài tán kah ē-puànn-mê tsiah khùn ē lo̍h-bîn.",
  },
  {
    hanji: "做生理愛敢下本，才會成功。",
    tailo: "Tsò-sing-lí ài kánn hē-pún, tsiah ē sîng-kong.",
  },
  {
    hanji: "伊是這个歌仔戲班的小旦。",
    tailo: "I sī tsit ê kua-á-hì-pan ê sió-tuànn.",
  },
  {
    hanji: "欲予伊看會上目無簡單。",
    tailo: "Beh hōo i khuànn ē tsiūnn-ba̍k bô kán-tan.",
  },
  {
    hanji: "伊隨上台就袂記得愛唸口白。",
    tailo: "I suî tsiūnn-tâi tō bē-kì-tit ài liām kháu-pe̍h.",
  },
  {
    hanji: "伊的大名，大部份的人攏知。",
    tailo: "I ê tuā-miâ, tuā-pōo-hūn ê lâng lóng tsai.",
  },
  {
    hanji: "較早踮厝內，大囝的責任較重。",
    tailo: "Khah-tsá tiàm tshù-lāi, tuā-kiánn ê tsik-jīm khah tāng.",
  },
  {
    hanji: "你這个臭小囝，哪會無代無誌共人拍？",
    tailo: "Lí tsit ê tshàu-sió-kiánn, ná ē bô-tāi-bô-tsì kā lâng phah?",
  },
  {
    hanji: "彼个唱歌唱了上好的人，是阮姊仔。",
    tailo:
      "Hit ê tshiùnn-kua tshiùnn liáu siōng hó ê lâng, sī guán tsí--á.",
  },
  {
    hanji: "這件代誌你上好是莫管。",
    tailo: "Tsit kiānn tāi-tsì lí siōng-hó sī mài kuán.",
  },
  {
    hanji: "生理人初二、十六攏有拜土地公。",
    tailo: "Sing-lí-lâng tshe-jī, tsa̍p-la̍k lóng ū pài Thóo-tī-kong.",
  },
  {
    hanji: "我若緊張就會大舌，話攏講袂清楚。",
    tailo: "Guá nā kín-tiunn tō ē tuā-tsi̍h, uē lóng kóng bē tshing-tshó.",
  },
  {
    hanji: "小弟真歡喜來到貴寶地。",
    tailo: "Sió-tī tsin huann-hí lâi-kàu kuì pó-tē.",
  },
  {
    hanji: "請問這位小弟按怎稱呼？",
    tailo: "Tshiánn-mn̄g tsit uī sió-tī án-tsuánn tshing-hoo?",
  },
  {
    hanji: "北管戲嘛叫做亂彈、子弟戲，是早期臺灣時行的傳統戲曲。",
    tailo:
      "Pak-kuán-hì mā kiò-tsò lān-thân, tsú-tē-hì, sī tsá-kî Tâi-uân sî-kiânn ê thuân-thóng hì-khik.",
  },
  {
    hanji: "伊昨昏三更半暝才轉來。",
    tailo: "I tsa-hng sann-kenn-puànn-mê tsiah tńg--lâi.",
  },
  {
    hanji: "這个庄頭無偌大，蹛無幾口灶。",
    tailo: "Tsit ê tsng-thâu bô guā tuā, tuà bô kuí kháu-tsàu.",
  },
  {
    hanji: "伊有一个大肚胿，做啥物代誌攏真無方便。",
    tailo:
      "I ū tsi̍t ê tuā-tōo-kui, tsò siánn-mih tāi-tsì lóng tsin bô hong-piān.",
  },
  {
    hanji: "伊親像大肚胿，一頓會當食六碗飯。",
    tailo:
      "I tshin-tshiūnn tuā-tōo-kui, tsi̍t tǹg ē-tàng tsia̍h la̍k uánn pn̄g.",
  },
  {
    hanji: "伊揹一个大肚胿，嘛仝款拋拋走。",
    tailo: "I phāinn tsi̍t ê tuā-tōo-kui, mā kāng-khuán pha-pha-tsáu.",
  },
  {
    hanji: "陳的！久見久見！近來攏咧無閒啥？",
    tailo: "Tân--ê! Kiú-kiàn-kiú-kiàn! Kīn-lâi lóng teh bô-îng siannh?",
  },
  {
    hanji: "三角窗的厝來做店面上好。",
    tailo: "Sann-kak-thang ê tshù lâi tsò tiàm-bīn siōng hó.",
  },
  {
    hanji: "伊上愛提千里鏡看稀罕的鳥仔。",
    tailo: "I siōng ài the̍h tshian-lí-kiànn khuànn hi-hán ê tsiáu-á.",
  },
  {
    hanji: "我若無提醒，你久來就會袂記得矣。",
    tailo: "Guá nā bô thê-tshénn, lí kú--lâi tō ē bē-kì--tit--ah.",
  },
  {
    hanji: "伊去予警察召去問口供。",
    tailo: "I khì hōo kíng-tshat tiàu-khì mn̄g kháu-king.",
  },
  {
    hanji: "大事化小事，小事化無事。",
    tailo: "Tuā-sū huà sió-sū, sió-sū huà bô sū.",
  },
  {
    hanji: "𪜶兩个兄嫂小姑誠有話講。",
    tailo: "In nn̄g ê hiann-só sió-koo tsiânn ū uē kóng.",
  },
  {
    hanji: "翁婿的老爸，愛稱呼伊大官。",
    tailo: "Ang-sài ê lāu-pē, ài tshing-hoo i ta-kuann.",
  },
  {
    hanji: "𪜶親情內底有一个大官虎，講話攏會硩死人。",
    tailo:
      "In tshin-tsiânn lāi-té ū tsi̍t ê tuā-kuann-hóo, kóng-uē lóng ē teh sí-lâng.",
  },
  {
    hanji: "伊生本較土性，你莫佮伊計較。",
    tailo: "I senn-pún khah thóo-sìng, lí mài kah i kè-kàu.",
  },
  {
    hanji: "伊驚見赴袂著車幫，下性命走。",
    tailo: "I kiann-kìnn hù bē tio̍h tshia-pang, hē-sènn-miā tsáu.",
  },
  {
    hanji: "屘叔仔明仔下昏才會轉來。",
    tailo: "Ban-tsik-á bîn-á e-hng tsiah ē tńg--lâi.",
  },
  {
    hanji: "伊的人較土直，毋才較會去得失人。",
    tailo: "I ê lâng khah thóo-ti̍t, m̄-tsiah khah ē khì tik-sit--lâng.",
  },
  {
    hanji: "我看𪜶兩个，會做伙嘛袂久長。",
    tailo: "Guá khuànn in nn̄g ê, ē tsò-hué mā bē kú-tn̂g.",
  },
  {
    hanji: "你若是有啥物三長兩短，叫我欲按怎活落去？",
    tailo:
      "Lí nā-sī ū siánn-mih sann-tn̂g-nn̄g-té, kiò guá beh án-tsuánn ua̍h--lo̍h-khì?",
  },
  {
    hanji: "伊講伊大後日會倒轉來。",
    tailo: "I kóng i tuā-āu--ji̍t ē tò-tńg--lâi.",
  },
  {
    hanji: "伊這過出國，著愛大後年才會當倒轉來。",
    tailo:
      "I tsit-kuè tshut-kok, tio̍h-ài tuā-āu--nî tsiah ē-tàng tò-tńg--lâi.",
  },
  {
    hanji: "你閣按怎講，伊也是聽袂入耳。",
    tailo: "Lí koh án-tsuánn kóng, i iā sī thiann bē ji̍p-ní.",
  },
  {
    hanji: "古早人會娶大某、細姨，這馬已經袂使按呢。",
    tailo:
      "Kóo-tsá-lâng ē tshuā tuā-bóo, sè-î, tsit-má í-king bē-sái án-ne.",
  },
  {
    hanji: "年節時仔愛攢三牲來拜拜。",
    tailo: "Nî-tseh-sî-á ài tshuân sam-sing lâi pài-pài.",
  },
  {
    hanji: "𪜶兜是好額人，逐頓食的攏是山珍海味。",
    tailo:
      "In tau sī hó-gia̍h-lâng, ta̍k tǹg tsia̍h--ê lóng sī san-tin-hái-bī.",
  },
  {
    hanji: "人若肯拍拚，乞食也會出頭天。",
    tailo: "Lâng nā khíng phah-piànn, khit-tsia̍h iā ē tshut-thâu-thinn.",
  },
  {
    hanji: "算命的講伊生來是乞食命，毋過伊認真拍拚，這馬已經是大頭家矣。",
    tailo:
      "Sǹg-miā--ê kóng i senn--lâi sī khit-tsia̍h-miā, m̄-koh i jīn-tsin phah-piànn, tsit-má í-king sī tuā thâu-ke--ah.",
  },
  {
    hanji: "彼个人有夠大面神，攏毋知影通歹勢。",
    tailo:
      "Hit ê lâng ū-kàu tuā-bīn-sîn, lóng m̄ tsai-iánn thang pháinn-sè.",
  },
  {
    hanji: "聽講𪜶兜彼間大厝這馬是古蹟。",
    tailo: "Thiann-kóng in tau hit king tuā-tshù tsit-má sī kóo-tsik.",
  },
  {
    hanji: "古早有的老大人會家己買大厝。",
    tailo: "Kóo-tsá ū ê lāu-tuā-lâng  ē ka-kī bé tuā-tshù.",
  },
  {
    hanji: "伊佇彼間銀行有一个口座。",
    tailo: "I tī hit king gîn-hâng ū tsi̍t ê kháu-tsō.",
  },
  {
    hanji: "𪜶兜是大家口，扞家的人誠忝頭。",
    tailo: "In tau sī tuā-ke-kháu, huānn-ke ê lâng tsiânn thiám-thâu.",
  },
  {
    hanji: "來來來！逐家上桌食飯。",
    tailo: "Lâi lâi lâi! Ta̍k-ke tsiūnn-toh tsia̍h-pn̄g.",
  },
  {
    hanji: "我真討厭別人干涉我的代誌。",
    tailo: "Guá tsin thó-ià pa̍t-lâng kan-sia̍p guá ê tāi-tsì.",
  },
  {
    hanji: "這罐芳水較低級，毋是高級貨。",
    tailo: "Tsit kuàn phang-tsuí khah kē-kip, m̄ sī ko-kip huè.",
  },
  {
    hanji: "莫戴小鬼仔殼佇遐共人嚇驚。",
    tailo: "Mài tì siáu-kuí-á-khak tī hia kā lâng heh-kiann.",
  },
  {
    hanji: "薪水予伊三除四扣就賰無偌濟矣。",
    tailo: "Sin-suí hōo i sann-tû-sì-khàu tō tshun bô guā-tsē--ah.",
  },
  {
    hanji: "金水嬸仔三个後生攏誠有才情，毋是經理，就是董事長。",
    tailo:
      "Kim-tsuí tsím--á sann ê hāu-senn lóng tsiânn ū tsâi-tsîng, m̄ sī king-lí, tō sī táng-sū-tiúnn.",
  },
  {
    hanji: "下晝阮欲來去圖書館讀冊。",
    tailo: "Ē-tàu guán beh lâi-khì tôo-su-kuán tha̍k-tsheh.",
  },
  {
    hanji: "下晡我欲招阿美仔去𨑨迌。",
    tailo: "Ē-poo guá beh tsio A-bí--á khì tshit-thô.",
  },
  {
    hanji: "做序大的人對待囡仔毋通大細心。",
    tailo: "Tsò sī-tuā ê lâng tuì-thāi gín-á m̄-thang tuā-sè-sim.",
  },
  {
    hanji: "你看人大細目，早慢會出代誌。",
    tailo: "Lí khuànn lâng tuā-sè-ba̍k, tsá-bān ē tshut-tāi-tsì.",
  },
  {
    hanji: "遮的物件緊送去工場予𪜶。",
    tailo: "Tsia-ê mi̍h-kiānn kín sàng-khì kang-tiûnn hōo--in.",
  },
  {
    hanji: "像這款大寒的天，食一寡燒的上好。",
    tailo:
      "Tshiūnn tsit khuán tuā-kuânn ê thinn, tsia̍h tsi̍t kuá sio--ê siōng hó.",
  },
  {
    hanji: "禮拜欲大摒掃，毋通走出去耍。",
    tailo: "Lé-pài beh tuā-piànn-sàu, m̄-thang tsáu tshut-khì sńg.",
  },
  {
    hanji: "這塊餅已經上殕矣，緊提去擲㧒捔。",
    tailo:
      "Tsit tè piánn í-king tshiūnn-phú--ah, kín the̍h-khì tàn-hiat-ka̍k.",
  },
  {
    hanji: "伊對下港起來臺北食頭路。",
    tailo: "I tuì ē-káng khí-lâi Tâi-pak tsia̍h-thâu-lōo.",
  },
  {
    hanji: "氣象報告講今仔日有大湧，你毋通去釣魚。",
    tailo:
      "Khì-siōng pò-kò kóng kin-á-ji̍t ū tuā-íng, lí m̄-thang khì tiò-hî.",
  },
  {
    hanji: "干焦賰遮的菜爾爾，你欲無？",
    tailo: "Kan-na tshun tsia-ê tshài niā-niā, lí beh--bô?",
  },
  {
    hanji: "一屑仔代誌都辦袂好勢，真下痟！",
    tailo: "Tsi̍t-sut-á tāi-tsì to pān bē hó-sè, tsin hā-siau!",
  },
  {
    hanji: "喙共弓開才會當灌藥仔。",
    tailo: "Tshuì kā king--khui tsiah ē-tàng kuàn io̍h-á.",
  },
  {
    hanji: "天遐爾仔烏，等咧凡勢會落雨。",
    tailo: "Thinn hiah-nī-á oo, tán--leh huān-sè ē lo̍h-hōo.",
  },
  {
    hanji: "咱蹛這角圍仔，山勢較低。",
    tailo: "Lán tuà tsit kak-uî-á, suann-sè khah kē.",
  },
  {
    hanji: "這款代誌曷使閣問，土想嘛知。",
    tailo: "Tsit khuán tāi-tsì a̍h-sái koh mn̄g, thóo-siūnn mā tsai.",
  },
  {
    hanji: "下暗欲來阮兜予阮請無？",
    tailo: "E-àm beh lâi guán tau hōo guán tshiánn--bô?",
  },
  {
    hanji: "伊先共我拍，我才會共伊拍。",
    tailo: "I sing kā guá phah, guá tsiah ē kā i phah.",
  },
  {
    hanji: "伊跋落去山溝，跤骨摔斷去。",
    tailo: "I pua̍h lo̍h-khì suann-kau, kha-kut siak-tn̄g--khì.",
  },
  {
    hanji: "你出門在外，家己千萬愛小心。",
    tailo: "Lí tshut-mn̂g tsāi guā, ka-kī tshian-bān ài sió-sim.",
  },
  {
    hanji: "伊講的是𪜶故鄉的土話，我聽攏無。",
    tailo: "I kóng--ê sī in kòo-hiong ê thóo-uē, guá thiann lóng bô.",
  },
  {
    hanji: "較早有真濟山賊佇遮出入。",
    tailo: "Khah-tsá ū tsin tsē suann-tsha̍t tī tsia tshut-ji̍p.",
  },
  {
    hanji: "𪜶兜倩真濟下跤手人。",
    tailo: "In tau tshiànn tsin tsē ē-kha-tshiú-lâng.",
  },
  {
    hanji: "你真正有夠低路，連這款工課都袂曉做。",
    tailo:
      "Lí tsin-tsiànn ū-kàu kē-lōo, liân tsit khuán khang-khuè to bē-hiáu tsò.",
  },
  {
    hanji: "按這條大路直直去就到阮兜矣。",
    tailo: "Àn tsit tiâu tuā-lōo ti̍t-ti̍t khì tō kàu guán tau--ah.",
  },
  {
    hanji: "你著較大路咧，毋通遐凍霜。",
    tailo: "Lí tio̍h khah tuā-lōo--leh, m̄-thang hiah tàng-sng.",
  },
  {
    hanji: "時機遐䆀，三頓若顧會齊勻就誠佳哉矣。",
    tailo:
      "Sî-ki hiah bái, sann tǹg nā kòo ē tsiâu-ûn tō tsiânn ka-tsài--ah.",
  },
  {
    hanji: "阮阿公七十歲大壽的時陣，阮兜有辦桌請人。",
    tailo:
      "Guán a-kong tshit-tsa̍p huè tuā-siū ê sî-tsūn, guán tau ū pān-toh tshiánn--lâng.",
  },
  {
    hanji: "你今仔五十歲爾爾，哪會未曾未就共大壽買好矣。",
    tailo:
      "Lí tann-á gōo-tsa̍p huè niā-niā, ná ē buē-tsîng-buē tō kā tuā-siū bé hó--ah.",
  },
  {
    hanji: "囡仔若大漢，爸母就輕鬆矣。",
    tailo: "Gín-á nā tuā-hàn, pē-bú tō khin-sang--ah.",
  },
  {
    hanji: "這上緊嘛著愛到後日才會好。",
    tailo: "Tse siōng kín mā tio̍h-ài kàu āu--ji̍t tsiah ē hó.",
  },
  {
    hanji: "這過買的三層肉真好食。",
    tailo: "Tsit-kuè bé ê sam-tsân-bah tsin hó-tsia̍h.",
  },
  {
    hanji: "彼个查某囡仔講話真大範。",
    tailo: "Hit ê tsa-bóo gín-á kóng-uē tsin tuā-pān.",
  },
  {
    hanji: "學生囡仔逐工攏愛去學校上課。",
    tailo: "Ha̍k-sing gín-á ta̍k-kang lóng ài khì ha̍k-hāu siōng-khò.",
  },
  {
    hanji: "伊真有才調，律師牌一擺就考過！",
    tailo: "I tsin ū tsâi-tiāu, lu̍t-su-pâi tsi̍t pái tō khó--kuè!",
  },
  {
    hanji: "阮遮干焦做大賣，無咧賣零星的。",
    tailo: "Guán tsia kan-na tsò tuā-bē, bô teh bē lân-san--ê.",
  },
  {
    hanji: "小賣的價數一定比大賣較貴。",
    tailo: "Sió-bē ê kè-siàu it-tīng pí tuā-bē khah kuì.",
  },
  {
    hanji: "我感覺山豬仔肉較好食。",
    tailo: "Guá kám-kak suann-ti-á-bah khah hó-tsia̍h.",
  },
  {
    hanji: "大學畢業了後就愛揣頭路。",
    tailo: "Tāi-ha̍k pit-gia̍p liáu-āu tō ài tshuē thâu-lōo.",
  },
  {
    hanji: "「捀斗上山頭」是大孫的任務。",
    tailo: "“Phâng-táu tsiūnn suann-thâu” sī tuā-sun ê jīm-bū.",
  },
  {
    hanji: "阮的工頭看起來猶閣真少年。",
    tailo: "Guán ê kang-thâu khuànn--khí-lâi iáu-koh tsin siàu-liân.",
  },
  {
    hanji: "伊的大頭拇予刀仔割著矣。",
    tailo: "I ê tuā-thâu-bú hōo to-á kuah--tio̍h--ah.",
  },
  {
    hanji: "伊走去共𪜶頭家大聲。",
    tailo: "I tsáu-khì kā in thâu-ke tuā-siann.",
  },
  {
    hanji: "無聊的時陣，就來變工藝。",
    tailo: "Bô-liâu ê sî-tsūn, tō lâi pìnn-kang-gē.",
  },
  {
    hanji:
      "伊去媽祖宮下願，講𪜶老母的病若會好，伊就欲倩一班歌仔戲來謝神。",
    tailo:
      "I khì Má-tsóo-king hē-guān, kóng in lāu-bú ê pēnn nā ē hó, i tō beh tshiànn tsi̍t pan kua-á-hì lâi siā-sîn.",
  },
  {
    hanji: "𪜶後生生做足大欉的。",
    tailo: "In hāu-senn senn-tsò tsiok tuā-tsâng--ê.",
  },
  {
    hanji: "我予你一个面子，這件代誌就準拄煞。",
    tailo:
      "Guá hōo lí tsi̍t ê bīn-tsú, tsit kiānn tāi-tsì tō tsún-tú-suah.",
  },
  {
    hanji: "我袂記得寫功課，毋才會予老師罵。",
    tailo: "Guá bē-kì-tit siá kong-khò, m̄-tsiah ē hōo lāu-su mē.",
  },
  {
    hanji: "我揀的人攏是仁仁仁的。",
    tailo: "Guá kíng ê lâng lóng sī jîn-jîn-jîn--ê.",
  },
  {
    hanji: "伊跋一下規个人仆落去。",
    tailo: "I pua̍h tsi̍t-ē kui-ê lâng phak--lo̍h-khì.",
  },
  {
    hanji: "是啥人允你這件代誌的？",
    tailo: "Sī siánn-lâng ín lí tsit kiānn tāi-tsì--ê?",
  },
  {
    hanji: "頭毛縛了傷冗，強欲散去。",
    tailo: "Thâu-mn̂g pa̍k liáu siunn līng, kiōng-beh suànn--khì.",
  },
  {
    hanji: "最近手頭較冗，想欲加買幾領仔新衫。",
    tailo:
      "Tsuè-kīn tshiú-thâu khah līng, siūnn-beh ke bé kuí-niá-á sin sann.",
  },
  {
    hanji: "三分天註定，七分靠拍拚。",
    tailo: "Sann hun thinn tsù-tiānn, tshit hun khò phah-piànn.",
  },
  {
    hanji: "𪜶爸仔囝佇車頭分開。",
    tailo: "In pē-á-kiánn tī tshia-thâu hun-khui.",
  },
  {
    hanji: "好心的頭家！十箍銀來分我好無？",
    tailo: "Hó-sim ê thâu-ke! Tsa̍p khoo gîn lâi pun--guá hó--bô?",
  },
  {
    hanji: "彼个乞食逐工攏去車頭共人分。",
    tailo: "Hit ê khit-tsia̍h ta̍k-kang lóng khì tshia-thâu kā lâng pun.",
  },
  {
    hanji: "家己若袂生，會使去分別人的囡仔來飼。",
    tailo: "Ka-kī nā bē senn, ē-sái khì pun pa̍t-lâng ê gín-á lâi tshī.",
  },
  {
    hanji: "彼隻露螺的頭勼入去殼內底矣。",
    tailo: "Hit tsiah lōo-lê ê thâu kiu ji̍p-khì khak lāi-té--ah.",
  },
  {
    hanji: "你去共交落佇眠床跤的物件勾出來。",
    tailo:
      "Lí khì kā ka-la̍uh tī bîn-tshn̂g-kha ê mi̍h-kiānn kau--tshut-lâi.",
  },
  {
    hanji: "彼个查某真𠢕用目睭共人勾。",
    tailo: "Hit ê tsa-bóo tsin gâu iōng ba̍k-tsiu kā lâng kau.",
  },
  {
    hanji: "你袂曉寫的題目就先勾起來。",
    tailo: "Lí bē-hiáu siá ê tê-bo̍k tō sing kau--khí-lâi.",
  },
  {
    hanji: "伊咧做中人，你若欲買厝就去揣伊。",
    tailo: "I teh tsò tiong-lâng, lí nā beh bé tshù tō khì tshuē--i.",
  },
  {
    hanji: "我都允人矣，袂使反悔。",
    tailo: "Guá to ín--lâng--ah, bē-sái huán-hué.",
  },
  {
    hanji: "毋通交不三不四的朋友。",
    tailo: "M̄-thang kau put-sam-put-sù ê pîng-iú.",
  },
  {
    hanji: "遮的餅予恁兩个人公分。",
    tailo: "Tsia-ê piánn hōo lín nn̄g ê lâng kong-pun.",
  },
  {
    hanji: "這條路真歹行，你著勻勻仔行。",
    tailo: "Tsit tiâu lōo tsin pháinn kiânn, lí tio̍h ûn-ûn-á kiânn.",
  },
  {
    hanji: "伊是一个外表土直、內心溫柔的人。",
    tailo: "I sī tsi̍t ê guā-piáu thóo-ti̍t, luē-sim un-jiû ê lâng.",
  },
  {
    hanji: "未曾做就勼手，實在無路用。",
    tailo: "Buē-tsîng tsò tō kiu-tshiú, si̍t-tsāi bô-lōo-īng.",
  },
  {
    hanji: "你穿這領衫閣不止仔媠。",
    tailo: "Lí tshīng tsit niá sann koh put-tsí-á suí.",
  },
  {
    hanji: "今年六月冬稻仔誠飽穗。",
    tailo: "Kin-nî la̍k-gue̍h-tang tiū-á tsiânn pá-suī.",
  },
  {
    hanji: "作穡人佇六月冬攏會較無閒。",
    tailo: "Tsoh-sit-lâng tī la̍k-gue̍h-tang lóng ē khah bô-îng.",
  },
  {
    hanji: "阮小弟上愛看丑仔表演。",
    tailo: "Guán sió-tī siōng ài khuànn thiú-á piáu-ián.",
  },
  {
    hanji: "你著勻仔是，毋通食緊挵破碗。",
    tailo: "Lí tio̍h ûn-á-sī, m̄-thang tsia̍h-kín lòng-phuà uánn.",
  },
  {
    hanji: "伊講欲中立，兩爿攏無愛參加。",
    tailo: "I kóng beh tiong-li̍p, nn̄g-pîng lóng bô ài tsham-ka.",
  },
  {
    hanji: "這件代誌你愛講予伊知。",
    tailo: "Tsit kiānn tāi-tsì lí ài kóng hōo i tsai.",
  },
  {
    hanji: "代誌會成袂成，介在你欲做毋做。",
    tailo: "Tāi-tsì ē sîng bē sîng, kài-tsāi lí beh tsò m̄ tsò.",
  },
  {
    hanji: "這種代誌你毋就冗早講，這馬欲反悔已經袂赴矣。",
    tailo:
      "Tsit tsióng tāi-tsì lí m̄-tō liōng-tsá kóng, tsit-má beh huán-hué í-king bē-hù--ah.",
  },
  {
    hanji: "若講著車，伊是內行的。",
    tailo: "Nā kóng-tio̍h tshia, i sī lāi-hâng--ê.",
  },
  {
    hanji: "雖然今仔日是風颱天，不而過你嘛是愛去做工課。",
    tailo:
      "Sui-jiân kin-á-ji̍t sī hong-thai-thinn, put-jî-kò lí mā sī ài khì tsò khang-khuè.",
  },
  {
    hanji: "伊不但寄付錢，閣去做義工。",
    tailo: "I put-tān kià-hù tsînn, koh khì tsò gī-kang.",
  },
  {
    hanji: "逐家攏有通分伻，毋免相爭。",
    tailo: "Ta̍k-ke lóng ū thang pun-phenn, m̄-bián sio-tsenn.",
  },
  {
    hanji: "咱共伊鬥分伻淡薄仔，伊較袂遐忝。",
    tailo: "Lán kā i tàu pun-phenn--tām-po̍h-á, i khah bē hiah thiám.",
  },
  {
    hanji: "這對雙生仔到底啥人是啥人，我實在無法度分別。",
    tailo:
      "Tsit tuì siang-senn-á tàu-té siánn-lâng sī siánn-lâng, guá si̍t-tsāi bô-huat-tōo hun-pia̍t.",
  },
  {
    hanji: "我實在無法度分身來處理別人的代誌。",
    tailo:
      "Guá si̍t-tsāi bô-huat-tōo hun-sin lâi tshú-lí pa̍t-lâng ê tāi-tsì.",
  },
  {
    hanji: "伊做𤆬頭的，有誠濟人不服。",
    tailo: "I tsò tshuā-thâu--ê, ū tsiânn tsē lâng put-ho̍k.",
  },
  {
    hanji: "你分明是咧騙我，著無？",
    tailo: "Lí hun-bîng sī teh phiàn--guá, tio̍h--bô?",
  },
  {
    hanji: "遮的蔥仔是我共人分的。",
    tailo: "Tsia-ê tshang-á sī guá kā lâng pun--ê.",
  },
  {
    hanji: "遮的工課攏交予你來分派。",
    tailo: "Tsia-ê khang-khuè lóng kau hōo lí lâi hun-phài.",
  },
  {
    hanji: "伊咧騙你，你毋通中計。",
    tailo: "I teh phiàn--lí, lí m̄-thang tiòng-kè.",
  },
  {
    hanji: "裘仔內面愛閣加穿一領膨紗衫才袂寒。",
    tailo:
      "Hiû-á lāi-bīn ài koh ke tshīng tsi̍t niá phòng-se-sann tsiah bē kuânn.",
  },
  {
    hanji: "無我的允准，你袂使來阮兜。",
    tailo: "Bô guá ê ín-tsún, lí bē-sái lâi guán tau.",
  },
  {
    hanji: "這个是內孫，毋是外孫。",
    tailo: "Tsit ê sī lāi-sun, m̄ sī guā-sun.",
  },
  {
    hanji: "這本冊的內容真淺，囡仔人嘛看有。",
    tailo:
      "Tsit pún tsheh ê luē-iông tsin tshián, gín-á-lâng mā khuànn-ū.",
  },
  {
    hanji: "這條錢是逐家公家出的。",
    tailo: "Tsit tiâu tsînn sī ta̍k-ke kong-ke tshut--ê.",
  },
  {
    hanji: "你看著哪會遐爾仔無元氣？",
    tailo: "Lí khuànn tio̍h ná ē hiah-nī-á bô guân-khì?",
  },
  {
    hanji: "我來分配恁逐家的工課。",
    tailo: "Guá lâi hun-phuè lín ta̍k-ke ê khang-khuè.",
  },
  {
    hanji: "暗時坐佇窗仔門邊，我攏有看著五彩的燈火閃閃爍爍。",
    tailo:
      "Àm-sî tsē tī thang-á-mn̂g-pinn, guá lóng ū khuànn-tio̍h ngóo-tshái ê ting-hué siám-siám-sih-sih.",
  },
  {
    hanji: "少年人毋通食毒，若無，代誌會不得了。",
    tailo:
      "Siàu-liân-lâng m̄-thang tsia̍h-to̍k, nā-bô, tāi-tsì ē put-tik-liáu.",
  },
  {
    hanji: "伊英語講甲削削叫，真正不得了。",
    tailo: "I Ing-gí kóng kah siah-siah-kiò, tsin-tsiànn put-tik-liáu.",
  },
  {
    hanji: "我會按呢做攏是不得已的。",
    tailo: "Guá ē án-ne tsò lóng sī put-tik-í--ê.",
  },
  {
    hanji: "中晝飯食飽就好歇睏，毋通閣咧外口四界趖。",
    tailo:
      "Tiong-tàu-pn̄g tsia̍h-pá tō hó hioh-khùn, m̄-thang koh teh guā-kháu sì-kè-sô.",
  },
  {
    hanji: "警察愛保護公眾的安全。",
    tailo: "Kíng-tshat ài pó-hōo kong-tsiòng ê an-tsuân.",
  },
  {
    hanji: "我行到中途就拄著伊矣。",
    tailo: "Guá kiânn kàu tiong-tôo tō tú-tio̍h i--ah.",
  },
  {
    hanji: "代誌已經做一半矣，你袂當佇中途反悔毋做。",
    tailo:
      "Tāi-tsì í-king tsò tsi̍t-puànn--ah, lí bē-tàng tī tiong-tôo huán-hué m̄ tsò.",
  },
  {
    hanji: "這月日趁較有錢，生活會較冗剩。",
    tailo:
      "Tsit gue̍h-ji̍t thàn khah ū tsînn, sing-ua̍h ē khah liōng-siōng.",
  },
  {
    hanji: "受訓了後，逐家會分發去無仝的單位。",
    tailo: "Siū-hùn liáu-āu, ta̍k-ke ē hun-huat khì bô kāng ê tan-uī.",
  },
  {
    hanji: "伊的成績中等，毋是蓋䆀。",
    tailo: "I ê sîng-tsik tiong-tíng, m̄ sī kài bái.",
  },
  {
    hanji: "你莫見講攏是一寡不答不七的話。",
    tailo: "Lí mài kiàn kóng lóng sī tsi̍t-kuá put-tap-put-tshit ê uē.",
  },
  {
    hanji: "伊決定欲公開所有的代誌。",
    tailo: "I kuat-tīng beh kong-khai sóo-ū ê tāi-tsì.",
  },
  {
    hanji: "伊公開展覽伊的私人花園。",
    tailo: "I kong-khai tián-lám i ê su-jîn hue-hn̂g.",
  },
  {
    hanji: "年節時仔，庄頭做戲的錢攏是規庄頭公開的。",
    tailo:
      "Nî-tseh-sî-á, tsng-thâu tsò-hì ê tsînn lóng sī kui tsng-thâu kong-khui--ê.",
  },
  {
    hanji: "這个是內媽，外媽蹛佇宜蘭。",
    tailo: "Tsit ê sī lāi-má, guā-má tuà tī Gî-lân.",
  },
  {
    hanji: "一人一家代，公媽隨人祀。",
    tailo: "Tsi̍t lâng tsi̍t ke tāi, kong-má suî-lâng tshāi.",
  },
  {
    hanji: "就算講你無中意，阮嘛無法度。",
    tailo: "Tō-sǹg kóng lí bô tìng-ì, guán mā bô-huat-tōo.",
  },
  {
    hanji: "我這領衫的內裡破去矣。",
    tailo: "Guá tsit niá sann ê lāi-lí phuà--khì--ah.",
  },
  {
    hanji: "代誌做猶未一半，袂當勼跤。",
    tailo: "Tāi-tsì tsò iáu-buē tsi̍t-puànn, bē-tàng kiu-kha.",
  },
  {
    hanji: "臺北車頭內面五路的人攏有。",
    tailo: "Tâi-pak Tshia-thâu lāi-bīn ngóo-lōo ê lâng lóng ū.",
  },
  {
    hanji: "你有啥物不滿，做你講出來。",
    tailo: "Lí ū siánn-mih put-buán, tsò lí kóng--tshut-lâi.",
  },
  {
    hanji: "有代誌不管時攏會使來揣我。",
    tailo: "Ū tāi-tsì put-kuán-sî lóng ē-sái lâi tshuē--guá.",
  },
  {
    hanji: "伊有一筆冇數，到今猶收袂轉來。",
    tailo: "I ū tsi̍t pit phànn-siàu, kàu-tann iáu siu bē tńg--lâi.",
  },
  {
    hanji: "你著細膩，毋通公親變事主。",
    tailo: "Lí tio̍h sè-jī, m̄-thang kong-tshin piàn sū-tsú.",
  },
  {
    hanji: "人的五臟六腑攏是真重要的。",
    tailo: "Lâng ê ngóo-tsōng-lio̍k-hú lóng sī tsin tiōng-iàu--ê.",
  },
  {
    hanji: "阿公的病重甲強強欲化去矣！",
    tailo: "A-kong ê pēnn tāng kah kiōng-kiōng beh hua--khì--ah!",
  },
  {
    hanji: "大事化小事，小事化無事。",
    tailo: "Tuā-sū huà sió-sū, sió-sū huà bô sū.",
  },
  {
    hanji: "袋仔內反一寡銀角仔出來。",
    tailo: "Tē-á-lāi píng tsi̍t-kuá gîn-kak-á tshut--lâi.",
  },
  {
    hanji: "伊真𠢕反變，生理愈做愈大。",
    tailo: "I tsin gâu píng-pìnn, sing-lí jú tsò jú tuā.",
  },
  {
    hanji: "時機䆀䆀，錢愈趁愈少。",
    tailo: "Sî-ki bái-bái, tsînn jú thàn jú tsió.",
  },
  {
    hanji: "你若是有心欲做，就一定會成功。",
    tailo: "Lí nā-sī ū-sim beh tsò, tō it-tīng ē sîng-kong.",
  },
  {
    hanji: "咱規庄頭攏總有五百戶。",
    tailo: "Lán kui tsng-thâu lóng-tsóng ū gōo-pah hōo.",
  },
  {
    hanji: "頭家，西瓜一斤是偌濟錢？",
    tailo: "Thâu-ke, si-kue tsi̍t kin sī guā-tsē tsînn?",
  },
  {
    hanji: "你是毋是佇外口有欠人錢？",
    tailo: "Lí sī m̄ sī tī guā-kháu ū khiàm lâng tsînn?",
  },
  {
    hanji: "你欠運動，體力才會遮䆀。",
    tailo: "Lí khiàm ūn-tōng, thé-la̍t tsiah ē tsiah bái.",
  },
  {
    hanji: "伊做這途，不止仔好空。",
    tailo: "I tsò tsit tôo, put-tsí-á hó-khang.",
  },
  {
    hanji: "阮兜的冷氣昨暝歹去矣！",
    tailo: "Guán tau ê líng-khì tsa-mê pháinn--khì--ah!",
  },
  {
    hanji: "落雨天的時陣，這條路就變甲真歹行。",
    tailo:
      "Lo̍h-hōo-thinn ê sî-tsūn, tsit tiâu lōo tō piàn kah tsin pháinn kiânn.",
  },
  {
    hanji: "阿明中晝食歹腹肚，所以下晡就請假轉去。",
    tailo:
      "A-bîng tiong-tàu tsia̍h-pháinn pak-tóo, sóo-í ē-poo tō tshíng-ká tńg--khì.",
  },
  {
    hanji: "你行較慢咧我毋才綴會著。",
    tailo: "Lí kiânn khah bān--leh guá m̄-tsiah tuè ē tio̍h.",
  },
  {
    hanji: "你若欲愛緊提去，毋我欲送予別人。",
    tailo: "Lí nā beh ài kín the̍h--khì, m̄ guá beh sàng hōo pa̍t-lâng.",
  },
  {
    hanji: "伊可比是公司的外交部長。",
    tailo: "I khó-pí sī kong-si ê Guā-kau pōo-tiúnn.",
  },
  {
    hanji: "你歹𤆬頭，專門咧教歹囡仔大細。",
    tailo: "Lí pháinn-tshuā-thâu, tsuan-bûn teh kà pháinn gín-á-tuā-sè.",
  },
  {
    hanji: "𪜶某定定去佮一寡官夫人交際應酬。",
    tailo:
      "In bóo tiānn-tiānn khì kah tsi̍t-kuá kuann-hu-jîn kau-tsè ìng-siû.",
  },
  {
    hanji: "真久無見面矣，高夫人最近好無？",
    tailo: "Tsin kú bô kìnn-bīn--ah, Ko hu-jîn tsuè-kīn hó--bô?",
  },
  {
    hanji: "這个作家自少女時代就開始寫作。",
    tailo: "Tsit ê tsok-ka tsū siàu-lí sî-tāi tō khai-sí siá-tsok.",
  },
  {
    hanji: "伊的手工真幼，我的衫上愛予伊做。",
    tailo: "I ê tshiú-kang tsin iù, guá ê sann siōng ài hōo i tsò.",
  },
  {
    hanji: "今仔日的日子是好抑䆀？",
    tailo: "Kin-á-ji̍t ê ji̍t-tsí sī hó ia̍h bái?",
  },
  {
    hanji: "這个木匠做的木工袂䆀。",
    tailo: "Tsit ê ba̍k-tshiūnn tsò ê ba̍k-kang bē-bái.",
  },
  {
    hanji: "就是你無來，毋才愛請伊來鬥相共！",
    tailo: "Tō sī lí bô lâi, m̄-tsiah ài tshiánn i lâi tàu-sann-kāng!",
  },
  {
    hanji: "若水土袂合就真𠢕破病。",
    tailo: "Nā tsuí-thóo bē ha̍h tō tsin gâu phuà-pēnn.",
  },
  {
    hanji: "對天井看出去，拄好會當看著月娘。",
    tailo:
      "Tuì thinn-tsénn khuànn--tshut-khì, tú-hó ē-tàng khuànn-tio̍h gue̍h-niû.",
  },
  {
    hanji: "較早的人講，查某人月內若做了無好，後擺身體會較䆀。",
    tailo:
      "Khah-tsá ê lâng kóng, tsa-bóo-lâng gue̍h-lāi nā  tsò liáu bô hó, āu-pái sin-thé ē khah bái.",
  },
  {
    hanji: "舊曆正月初九是天公生。",
    tailo: "Kū-li̍k tsiann-gue̍h tshe-káu sī Thinn-kong-senn.",
  },
  {
    hanji: "一个某較好三个天公祖。",
    tailo: "Tsi̍t ê bóo khah hó sann ê Thinn-kong-tsóo.",
  },
  {
    hanji: "拄才猶咧出日頭，這馬煞咧反天矣。",
    tailo:
      "Tú-tsiah iáu teh tshut-ji̍t-thâu, tsit-má suah teh huán-thinn--ah.",
  },
  {
    hanji: "我限你一月日以內，共欠的錢還了。",
    tailo: "Guá hān lí tsi̍t gue̍h-ji̍t í-lāi, kā khiàm ê tsînn hîng-liáu.",
  },
  {
    hanji: "伊真歹手爪，你愛較注意咧。",
    tailo: "I tsin pháinn-tshiú-jiáu, lí ài khah tsù-ì--leh.",
  },
  {
    hanji: "準做天反地亂，你嘛袂用得烏白來。",
    tailo: "Tsún-tsò thinn-huán-tē-luān, lí mā bē-īng-tit oo-pe̍h-lâi.",
  },
  {
    hanji: "這件代誌講起來就心火著。",
    tailo: "Tsit kiānn tāi-tsì kóng--khí-lâi tō sim-hué-to̍h.",
  },
  {
    hanji: "你去共我買一个酒斗仔。",
    tailo: "Lí khì kā guá bé tsi̍t ê tsiú-táu-á.",
  },
  {
    hanji: "勸世歌是咧勸人毋通做歹代的。",
    tailo: "Khuàn-sè-kua sī teh khǹg lâng m̄-thang tsò pháinn-tāi--ê.",
  },
  {
    hanji: "好代毋通知，歹代直直來交纏。",
    tailo: "Hó-tāi m̄ thong-ti, pháinn-tāi ti̍t-ti̍t lâi kau-tînn.",
  },
  {
    hanji: "伊愛閣月外日才會轉來。",
    tailo: "I ài koh gue̍h-guā-ji̍t tsiah ē tńg--lâi.",
  },
  {
    hanji: "逐个人若攏忍一下，就天下太平矣。",
    tailo: "Ta̍k ê lâng nā lóng lún--tsi̍t-ē, tō thian-hā thài-pîng--ah.",
  },
  {
    hanji: "伊佮阿仁原本感情誠好，近來煞為著生理的代誌反目。",
    tailo:
      "I kah A-jîn guân-pún kám-tsîng tsiânn hó, kīn-lâi suah uī-tio̍h sing-lí ê tāi-tsì huán-bo̍k.",
  },
  {
    hanji: "你有欠用就來共我講，我會當借你。",
    tailo: "Lí ū khiàm-īng tō lâi kā guá kóng, guá ē-tàng tsioh--lí.",
  },
  {
    hanji: "遮的物件你若有欠用就提去。",
    tailo: "Tsia-ê mi̍h-kiānn lí nā ū khiàm-īng tō the̍h--khì.",
  },
  {
    hanji: "伊真凍霜，連一屑仔物都毋甘予人。",
    tailo: "I tsin tàng-sng, liân tsi̍t-sut-á mi̍h to m̄-kam hōo--lâng.",
  },
  {
    hanji: "伊目睭反白睚，若像欲昏去矣。",
    tailo: "I ba̍k-tsiu píng-pe̍h-kâinn, ná-tshiūnn beh hūn--khì--ah.",
  },
  {
    hanji: "天光矣，你好起來讀冊矣！",
    tailo: "Thinn-kng--ah, lí hó khí-lâi tha̍k-tsheh--ah!",
  },
  {
    hanji: "我囥佇桌頂的文件是啥人提去？",
    tailo: "Guá khǹg tī toh-tíng ê bûn-kiānn sī siánn-lâng the̍h--khì?",
  },
  {
    hanji: "你對這个方向直直行就到矣。",
    tailo: "Lí tuì tsit ê hong-hiòng ti̍t-ti̍t kiânn tō kàu--ah.",
  },
  {
    hanji: "你工課著愛好好仔做，毋通學人做歹囝。",
    tailo:
      "Lí khang-khuè tio̍h-ài hó-hó-á tsò, m̄-thang o̍h lâng tsò pháinn-kiánn.",
  },
  {
    hanji: "天地遐爾仔大，免驚無所在通去。",
    tailo: "Thinn-tē hiah-nī-á tuā, bián kiann bô sóo-tsāi thang khì.",
  },
  {
    hanji: "少年若無一擺戇，路邊哪有有應公。",
    tailo: "Siàu-liân nā bô tsi̍t pái gōng, lōo-pinn ná ū Iú-ìng-kong.",
  },
  {
    hanji: "我無佮意伊做代誌的方式。",
    tailo: "Guá bô kah-ì i tsò tāi-tsì ê hong-sik.",
  },
  {
    hanji: "伊身體欠安，才會無來上班。",
    tailo: "I sin-thé khiàm-an, tsiah ē bô lâi siōng-pan.",
  },
  {
    hanji: "烏白罵人是毋好的代誌。",
    tailo: "Oo-pe̍h mē--lâng sī m̄ hó ê tāi-tsì.",
  },
  {
    hanji: "恁遮的少年家毋通傷衝碰，逐項代誌攏愛想予伊較斟酌咧。",
    tailo:
      "Lín tsia-ê siàu-liân-ke m̄-thang siunn tshóng-pōng, ta̍k hāng tāi-tsì lóng ài siūnn hōo i khah tsim-tsiok--leh.",
  },
  {
    hanji: "若是一个毋好勢，代誌就去了了矣。",
    tailo: "Nā-sī tsi̍t ê m̄ hó-sè, tāi-tsì tō khì-liáu-liáu--ah.",
  },
  {
    hanji: "這毋成錢，你就收起來。",
    tailo: "Tse m̄-tsiânn tsînn, lí tō siu--khí-lâi.",
  },
  {
    hanji: "伊去予彼个毋成人氣甲欲死。",
    tailo: "I khì hōo hit ê m̄-tsiânn-lâng khì kah beh-sí.",
  },
  {
    hanji: "你欲騎跤踏車，手扞仔著愛扞予伊好。",
    tailo:
      "Lí beh khiâ kha-ta̍h-tshia, tshiú-huānn-á tio̍h-ài huānn hōo i hó.",
  },
  {
    hanji: "伊是好額人，遮的零星錢對伊來講是毋成物。",
    tailo:
      "I sī hó-gia̍h-lâng, tsia-ê lân-san-tsînn tuì i lâi kóng sī m̄-tsiânn-mi̍h.",
  },
  {
    hanji: "毋成猴，閣會考第一名。",
    tailo: "M̄-tsiânn-kâu, koh ē khó tē-it miâ.",
  },
  {
    hanji: "少年袂曉想，食老毋成樣。",
    tailo: "Siàu-liân bē-hiáu siūnn, tsia̍h-lāu m̄-tsiânn-iūnn.",
  },
  {
    hanji: "這馬外口的天色已經暗矣。",
    tailo: "Tsit-má guā-kháu ê thinn-sik í-king àm--ah.",
  },
  {
    hanji: "天色已經無早，我欲轉去矣！",
    tailo: "Thinn-sik í-king bô tsá, guá beh tńg--khì--ah!",
  },
  {
    hanji: "伊就是歹心行，才會受著報應。",
    tailo: "I tō sī pháinn-sim-hīng, tsiah ē siū-tio̍h pò-ìng.",
  },
  {
    hanji: "醫生講伊欠血，著愛加食一寡較營養的物件。",
    tailo:
      "I-sing kóng i khiàm-hueh, tio̍h-ài ke tsia̍h tsi̍t-kuá khah îng-ióng ê mi̍h-kiānn.",
  },
  {
    hanji: "我看伊做的歹代誌毋但按呢爾爾。",
    tailo: "Guá khuànn i tsò ê pháinn tāi-tsì m̄-nā án-ne niā-niā.",
  },
  {
    hanji: "伊毋但寄付錢，閣去做義工。",
    tailo: "I m̄-nā kià-hù tsînn, koh khì tsò gī-kang.",
  },
  {
    hanji: "代誌做好矣，你毋免來矣。",
    tailo: "Tāi-tsì tsò-hó--ah, lí m̄-bián lâi--ah.",
  },
  {
    hanji: "厝是阿公的手尾放落來的。",
    tailo: "Tshù sī a-kong ê tshiú-bué pàng--lo̍h-lâi--ê.",
  },
  {
    hanji: "伊月尾欲去高雄看𪜶後生。",
    tailo: "I gue̍h-bué beh khì Ko-hiông khuànn in hāu-senn.",
  },
  {
    hanji: "我手尾力無夠，捾袂起來。",
    tailo: "Guá tshiú-bué-la̍t bô-kàu, kuānn bē khí--lâi.",
  },
  {
    hanji: "遐的查埔囡仔手真賤，愛掣查某囡仔的毛尾仔。",
    tailo:
      "Hia-ê tsa-poo gín-á tshiú tsin tsiān, ài tshuah tsa-bóo gín-á ê mn̂g-bué-á.",
  },
  {
    hanji: "這个客戶真歹扭搦，我看你閣揣一个人佮你去好矣。",
    tailo:
      "Tsit ê kheh-hōo tsin pháinn-liú-la̍k, guá khuànn lí koh tshuē tsi̍t ê lâng kah lí khì hó--ah.",
  },
  {
    hanji: "伊有家己的想法，毋過毋敢開喙反抗𪜶阿爸的決定。",
    tailo:
      "I ū ka-kī ê siūnn-huat, m̄-koh m̄ kánn khui-tshuì huán-khòng in a-pah ê kuat-tīng.",
  },
  {
    hanji: "阮兜魚櫥仔的魚仔攏反肚矣。",
    tailo: "Guán tau hî-tû-á ê hî-á lóng píng-tōo--ah.",
  },
  {
    hanji: "彼个人的心肝真䆀，不時都想欲害人。",
    tailo:
      "Hit ê lâng ê sim-kuann tsin bái, put-sî to siūnn-beh hāi--lâng.",
  },
  {
    hanji: "逐个囡仔攏是爸母的心肝仔寶貝。",
    tailo: "Ta̍k ê gín-á lóng sī pē-bú ê sim-kuann-á pó-puè.",
  },
  {
    hanji: "你心肝咧想啥物我知知。",
    tailo: "Lí sim-kuann teh siūnn siánn-mih guá tsai-tsai.",
  },
  {
    hanji: "你這馬當咧心狂火著，千萬毋通做決定。",
    tailo:
      "Lí tsit-má tng-teh sim-kông-hué-to̍h, tshian-bān m̄-thang tsò kuat-tīng.",
  },
  {
    hanji: "今仔日佇高速公路發生一件反車的意外。",
    tailo:
      "Kin-á-ji̍t tī ko-sok kong-lōo huat-sing tsi̍t kiānn píng-tshia ê ì-guā.",
  },
  {
    hanji: "這款工課恁文身的根本都做袂來。",
    tailo: "Tsit khuán khang-khuè lín bûn-sin--ê kin-pún to tsò bē lâi.",
  },
  {
    hanji: "宜蘭、鹿港的方言真有特色。",
    tailo: "Gî-lân, Lo̍k-káng ê hong-giân tsin ū ti̍k-sik.",
  },
  {
    hanji: "你若毋較拍拚咧，連鞭就無法度佮人比並。",
    tailo:
      "Lí nā m̄ khah phah-piànn--leh, liâm-mi tō bô-huat-tōo kah lâng pí-phīng.",
  },
  {
    hanji: "人若予人比並做精牲就足毋值矣！",
    tailo: "Lâng nā hōo lâng pí-phīng tsò tsing-senn tō tsiok m̄-ta̍t--ah!",
  },
  {
    hanji: "我規暝反來反去睏袂去。",
    tailo: "Guá kui mê píng-lâi-píng-khì khùn bē khì.",
  },
  {
    hanji: "伊講話按呢反來反去，毋知伊到底是欲按怎。",
    tailo:
      "I kóng-uē án-ne píng-lâi-píng-khì, m̄ tsai i tàu-té sī beh án-tsuánn.",
  },
  {
    hanji: "阿英仔誠歹命，自細漢爸母就過身矣。",
    tailo: "A-ing--á tsiânn pháinn-miā, tsū sè-hàn pē-bú tō kuè-sin--ah.",
  },
  {
    hanji: "毛呼龜粿粽，紅包隨你送。",
    tailo: "Môo-honn ku kué tsàng, âng-pau suî lí sàng.",
  },
  {
    hanji: "有緣才會當做夫妻，恁就莫閣冤矣啦！",
    tailo: "Ū-iân tsiah ē-tàng tsò hu-tshe, lín tō mài koh uan--ah--lah!",
  },
  {
    hanji: "序大放予伊的手底袂少。",
    tailo: "Sī-tuā pàng hōo--i ê tshiú-té bē tsió.",
  },
  {
    hanji: "伊真歹性地，磕袂著就欲共人罵。",
    tailo: "I tsin pháinn-sìng-tē, kha̍p-bē-tio̍h tō beh kā lâng mē.",
  },
  {
    hanji: "你著愛紮雨傘去，毋拄好落雨就用會著。",
    tailo:
      "Lí tio̍h-ài tsah hōo-suànn khì, m̄-tú-hó lo̍h-hōo tō īng ē tio̍h.",
  },
  {
    hanji: "比武招親是歌仔戲才有的齣頭。",
    tailo: "Pí-bú tsio-tshin sī kua-á-hì tsiah ū ê tshut-thâu.",
  },
  {
    hanji: "好空的毋來，歹空的相爭報。",
    tailo: "Hó-khang--ê m̄ lâi, pháinn-khang--ê sio-tsenn pò.",
  },
  {
    hanji: "你問我的代誌我攏毋知，你去問別人。",
    tailo: "Lí mn̄g--guá ê tāi-tsì guá lóng m̄ tsai, lí khì mn̄g pa̍t-lâng.",
  },
  {
    hanji: "人欲來揣你算數矣，你閣毋知死。",
    tailo: "Lâng beh lâi tshuē lí sǹg-siàu--ah, lí koh m̄-tsai-sí.",
  },
  {
    hanji: "逐家攏毋知影伊走去佗位。",
    tailo: "Ta̍k-ke lóng m̄ tsai-iánn i tsáu-khì tó-uī.",
  },
  {
    hanji: "阮這个庄頭的交通真無方便。",
    tailo: "Guán tsit ê tsng-thâu ê kau-thong tsin bô hong-piān.",
  },
  {
    hanji: "予人客方便，人客才會愛來。",
    tailo: "Hōo lâng-kheh hong-piān, lâng-kheh tsiah ē ài lâi.",
  },
  {
    hanji: "你手頭若方便，一屑仔借我。",
    tailo: "Lí tshiú-thâu nā hong-piān, tsi̍t-sut-á tsioh--guá.",
  },
  {
    hanji: "伊是我拄過上歹剃頭的人。",
    tailo: "I sī guá tú--kuè siōng pháinn-thì-thâu ê lâng.",
  },
  {
    hanji: "你著好好仔拍拚，日後才有出脫。",
    tailo: "Lí tio̍h hó-hó-á phah-piànn, ji̍t-āu tsiah ū tshut-thuat.",
  },
  {
    hanji: "物件猶閣好好你就毋挃矣，按呢敢袂傷討債？",
    tailo:
      "Mi̍h-kiānn iáu-koh hó-hó lí tō m̄ ti̍h--ah, án-ne kám bē siunn thó-tsè?",
  },
  {
    hanji: "等一下看毋是勢，你就緊走。",
    tailo: "Tán--tsi̍t-ē khuànn m̄-sī-sè, lí tō kín tsáu.",
  },
  {
    hanji: "飯猶未煮好，你先去食一塊餅止枵。",
    tailo: "Pn̄g iáu-buē tsú-hó, lí sing khì tsia̍h tsi̍t tè piánn tsí-iau.",
  },
  {
    hanji: "那行那食物件，實在真歹看相。",
    tailo:
      "Ná kiânn ná tsia̍h mi̍h-kiānn, si̍t-tsāi tsin pháinn-khuànn-siùnn.",
  },
  {
    hanji: "想袂到伊會為著利益來反背眾人。",
    tailo: "Siūnn-bē-kàu i ē uī-tio̍h lī-ik lâi huán-puē tsìng-lâng.",
  },
  {
    hanji: "伊對語言方面真有興趣。",
    tailo: "I tuì gí-giân hong-bīn tsin ū hìng-tshù.",
  },
  {
    hanji: "我愛對佗一方面去才揣會著這項物件？",
    tailo:
      "Guá ài tuì tó tsi̍t hong-bīn khì tsiah tshuē ē tio̍h tsit hāng mi̍h-kiānn?",
  },
  {
    hanji: "你做甲遐辛苦閣予人嫌，實在真毋值！",
    tailo:
      "Lí tsò kah hiah sin-khóo koh hōo lâng hiâm, si̍t-tsāi tsin m̄-ta̍t!",
  },
  {
    hanji: "阿明𪜶後生真不孝，莫怪人講親生囝毋值荷包財。",
    tailo:
      "A-bîng in hāu-senn tsin put-hàu, bo̍k-kuài lâng kóng tshin-senn kiánn m̄-ta̍t hâ-pau tsâi.",
  },
  {
    hanji: "這件代誌我毋准你按呢做。",
    tailo: "Tsit kiānn tāi-tsì guá m̄-tsún lí án-ne tsò.",
  },
  {
    hanji: "伊毋但無抾恨，反倒轉閣來共咱鬥相共。",
    tailo:
      "I m̄-nā bô khioh-hīn, huán-tò-tńg koh lâi kā lán tàu-sann-kāng.",
  },
  {
    hanji: "明明都講好矣，哪會使反悔？",
    tailo: "Bîng-bîng to kóng-hó--ah, ná ē-sái huán-hué?",
  },
  {
    hanji: "毋通講袂贏人就欲反桌。",
    tailo: "M̄-thang kóng bē iânn--lâng tō beh píng-toh.",
  },
  {
    hanji: "今仔日天氣無好，你出門的時愛會記得紮雨幔。",
    tailo:
      "Kin-á-ji̍t thinn-khì bô hó, lí tshut-mn̂g ê sî ài ē-kì-tit tsah hōo-mua.",
  },
  {
    hanji: "伊昨昏都有較好矣，是按怎今仔日閣反症？",
    tailo:
      "I tsa-hng to ū khah hó--ah, sī-án-tsuánn kin-á-ji̍t koh huán-tsìng?",
  },
  {
    hanji: "食藥仔會當止疼，毋過嘛有副作用。",
    tailo: "Tsia̍h io̍h-á ē-tàng tsí-thiànn, m̄-koh mā ū hù-tsok-iōng.",
  },
  {
    hanji: "致著這款歹症頭真歹醫。",
    tailo: "Tì-tio̍h tsit khuán pháinn-tsìng-thâu tsin pháinn i.",
  },
  {
    hanji: "伊袂插你，你莫枉費心神矣。",
    tailo: "I bē tshap--lí, lí mài óng-huì sim-sîn--ah.",
  },
  {
    hanji: "你買這欲創啥？咱兜少缺！",
    tailo: "Lí bé tse beh tshòng siannh? Lán tau tsió-khueh!",
  },
  {
    hanji: "這種物件菜市仔少缺，免驚買無。",
    tailo:
      "Tsit tsióng mi̍h-kiānn tshài-tshī-á tsió-khueh, bián kiann bé-bô.",
  },
  {
    hanji: "你若欠缺啥，先提伊的去用。",
    tailo: "Lí nā khiàm-khueh siannh, sing the̍h i ê khì īng.",
  },
  {
    hanji: "看你閣欠缺偌濟，我來想辦法。",
    tailo: "Khuànn lí koh khiàm-khueh guā-tsē, guá lâi siūnn pān-huat.",
  },
  {
    hanji: "你記持誠䆀，隨講隨袂記得。",
    tailo: "Lí kì-tî tsiânn bái, suî kóng suî bē-kì--tit.",
  },
  {
    hanji: "伊在生的時陣做真濟好代，死了後一定會上天堂。",
    tailo:
      "I tsāi-senn ê sî-tsūn tsò tsin tsē hó-tāi, sí liáu-āu it-tīng ē tsiūnn thian-tông.",
  },
  {
    hanji: "伊會拍𪜶老爸，真反常。",
    tailo: "I ē phah in lāu-pē, tsin huán-siông.",
  },
  {
    hanji: "食飯食甲遮爾仔毋情願，規氣莫食。",
    tailo:
      "Tsia̍h-pn̄g tsia̍h kah tsiah-nī-á m̄-tsîng-guān, kui-khì mài tsia̍h.",
  },
  {
    hanji: "你會有這款心理，實在予人想袂到。",
    tailo: "Lí ē ū tsit khuán sim-lí, si̍t-tsāi hōo lâng siūnn-bē-kàu.",
  },
  {
    hanji: "手烏烏去摸壁會有手痕。",
    tailo: "Tshiú oo-oo khì bong piah ē ū tshiú-hûn.",
  },
  {
    hanji: "天頂天公，地下母舅公。",
    tailo: "Thinn-tíng Thinn-kong, tē-ē bú-kū-kong.",
  },
  {
    hanji: "這个囡仔真歹喙，人較無愛佮伊鬥陣。",
    tailo:
      "Tsit ê gín-á tsin pháinn-tshuì, lâng khah bô ài kah i tàu-tīn.",
  },
  {
    hanji: "伊講你是一蕊花，這是一个比喻。",
    tailo: "I kóng lí sī tsi̍t luí hue, tse sī tsi̍t ê pí-jū.",
  },
  {
    hanji: "做人著愛想予伊開，較袂心悶。",
    tailo: "Tsò-lâng tio̍h-ài siūnn hōo i khui, khah bē sim-būn.",
  },
  {
    hanji: "囡仔人食飯袂使歹款，逐項物件攏愛食。",
    tailo:
      "Gín-á-lâng tsia̍h-pn̄g bē-sái pháinn-khuán, ta̍k hāng mi̍h-kiānn lóng ài tsia̍h.",
  },
  {
    hanji: "伊真𠢕巴結頭家，真顧人怨。",
    tailo: "I tsin gâu pa-kiat thâu-ke, tsin kòo-lâng-uàn.",
  },
  {
    hanji: "伊真巴結，拄著艱難攏袂放棄。",
    tailo: "I tsin pa-kiat, tú-tio̍h kan-lân lóng bē hòng-khì.",
  },
  {
    hanji: "這件代誌毋著的人是你。",
    tailo: "Tsit kiānn tāi-tsì m̄-tio̍h ê lâng sī lí.",
  },
  {
    hanji: "人講會做翁仔某是頂世人相欠債。",
    tailo: "Lâng kóng ē tsò ang-á-bóo sī tíng-sì-lâng sio-khiàm-tsè.",
  },
  {
    hanji: "誠歹勢，我無拄好煞共恁的玻璃杯仔摃破去。",
    tailo:
      "Tsiânn pháinn-sè, guá bô-tú-hó suah kā lín ê po-lê pue-á kòng-phuà--khì.",
  },
  {
    hanji: "你傷過主動啦，伊會歹勢。",
    tailo: "Lí siunn kuè tsú-tōng--lah, i ē pháinn-sè.",
  },
  {
    hanji: "咱會佇遮相拄，攏是天意。",
    tailo: "Lán ē tī tsia sio-tú, lóng sī thinn-ì.",
  },
  {
    hanji: "目睭掛斗概，看人物就愛。",
    tailo: "Ba̍k-tsiu kuà táu-kài, khuànn lâng mi̍h tō ài.",
  },
  {
    hanji: "陳家的少爺人品真好，恁共查某囝嫁伊就無毋著啦。",
    tailo:
      "Tân--ka ê siàu-iâ jîn-phín tsin hó, lín kā tsa-bóo-kiánn kè--i tō bô m̄-tio̍h--lah.",
  },
  {
    hanji: "阮少爺對阮這寡下跤手人攏真好。",
    tailo:
      "Guán siàu-iâ tuì guán tsit kuá ē-kha-tshiú-lâng lóng tsin hó.",
  },
  {
    hanji: "這魚仔真臭臊，予人鼻著強欲反腹。",
    tailo:
      "Tse hî-á tsin tshàu-tsho, hōo lâng phīnn tio̍h kiōng-beh píng-pak.",
  },
  {
    hanji: "伊專門佇後壁講人的歹話。",
    tailo: "I tsuan-bûn tī āu-piah kóng lâng ê pháinn-uē.",
  },
  {
    hanji: "伊捌足濟種做瓷仔的手路。",
    tailo: "I bat tsiok tsē tsióng tsò huî-á ê tshiú-lōo.",
  },
  {
    hanji: "伊這款做法手路傷粗啦。",
    tailo: "I tsit khuán tsò-huat tshiú-lōo siunn tshoo--lah.",
  },
  {
    hanji: "阿英仔有夠歹運，見若儉寡錢，人就破病。",
    tailo:
      "A-ing--á ū-kàu pháinn-ūn, kiàn-nā khiām kuá tsînn, lâng tō phuà-pēnn.",
  },
  {
    hanji: "雖然𪜶兜真散赤，毋過𪜶的囡仔攏真有出脫。",
    tailo:
      "Sui-jiân in tau tsin sàn-tshiah, m̄-koh in ê gín-á lóng tsin ū tshut-thuat.",
  },
  {
    hanji: "這兩个計畫性質差傷濟，真歹比較。",
    tailo:
      "Tsit nn̄g ê kè-uē sìng-tsit tsha siunn tsē, tsin pháinn pí-kàu.",
  },
  {
    hanji: "明仔暗會停電，你敢有攢手電仔？",
    tailo: "Bîn-á-àm ē thîng-tiān, lí kám ū tshuân tshiú-tiān-á?",
  },
  {
    hanji: "咱已經品好矣，希望你毋通反僥。",
    tailo: "Lán í-king phín-hó--ah, hi-bāng lí m̄-thang huán-hiau.",
  },
  {
    hanji: "聽講這款藥仔會當止嗽化痰兼顧肺管。",
    tailo:
      "Thiann-kóng tsit khuán io̍h-á ē-tàng tsí-sàu huà thâm kiam kòo hì-kńg.",
  },
  {
    hanji: "夭壽！阮這條巷仔昨昏又閣著賊偷矣。",
    tailo:
      "Iáu-siū! Guán tsit tiâu hāng-á tsa-hng iū-koh tio̍h-tsha̍t-thau--ah.",
  },
  {
    hanji: "你這款人，啥物夭壽代誌做袂出來！",
    tailo:
      "Lí tsit khuán lâng, siánn-mih iáu-siū tāi-tsì tsò bē tshut--lâi!",
  },
  {
    hanji: "你這个夭壽短命的，共我的錢提去跋筊輸了了。",
    tailo:
      "Lí tsit ê iáu-siū-té-miā--ê, kā guá ê tsînn the̍h-khì pua̍h-kiáu su-liáu-liáu.",
  },
  {
    hanji: "我欲去買一本手摺簿仔轉來記數。",
    tailo: "Guá beh khì bé tsi̍t pún tshiú-tsih-phōo-á tńg-lâi kì-siàu.",
  },
  {
    hanji: "毋管是啥人共你問，你攏袂使講。",
    tailo: "M̄-kuán sī siánn-lâng kā lí mn̄g, lí lóng bē-sái kóng.",
  },
  {
    hanji: "伊的身世予人聽著感覺誠心酸。",
    tailo: "I ê sin-sè hōo lâng thiann tio̍h kám-kak tsiânn sim-sng.",
  },
  {
    hanji: "有酒矸，通賣無，歹銅舊錫簿仔紙通賣無？",
    tailo:
      "Ū tsiú-kan, thang bē--bô, pháinn-tâng-kū-siah phōo-á-tsuá thang bē--bô?",
  },
  {
    hanji: "明仔載𪜶一陣人欲去海邊仔引魂。",
    tailo: "Bîn-á-tsài in tsi̍t tīn lâng beh khì hái-pinn-á ín-hûn.",
  },
  {
    hanji: "反對的人是少數，你就放心去做。",
    tailo: "Huán-tuì ê lâng sī tsió-sòo, lí tō hòng-sim khì tsò.",
  },
  {
    hanji: "今仔日有一个和尚來遮化緣。",
    tailo: "Kin-á-ji̍t ū tsi̍t ê huê-siūnn lâi tsia huà-iân.",
  },
  {
    hanji: "比論講伊若共你借錢，你敢會借伊？",
    tailo: "Pí-lūn-kóng i nā kā lí tsioh tsînn, lí kánn ē tsioh--i?",
  },
  {
    hanji: "今仔日你去𨑨迌，有心適無？",
    tailo: "Kin-á-ji̍t lí khì tshit-thô, ū sim-sik--bô?",
  },
  {
    hanji: "天氣真寒，你愛會記得掛手橐仔。",
    tailo: "Thinn-khì tsin kuânn, lí ài ē-kì-tit kuà tshiú-lok-á.",
  },
  {
    hanji: "伊這个人歹積德，後擺無好尾。",
    tailo: "I tsit ê lâng pháinn-tsik-tik, āu-pái bô hó-bué.",
  },
  {
    hanji: "伊的一句話予我規个心頭挐絞絞。",
    tailo: "I ê tsi̍t kù uē hōo guá kui-ê sim-thâu jû-ká-ká.",
  },
  {
    hanji: "心頭掠予伊定，大步向前行。",
    tailo: "Sim-thâu lia̍h hōo i tiānn, tuā pōo hiòng-tsiân kiânn.",
  },
  {
    hanji: "這个醫生的手頭有較重。",
    tailo: "Tsit ê i-sing ê tshiú-thâu ū khah tāng.",
  },
  {
    hanji: "大摒掃的時，天篷嘛著清清咧。",
    tailo: "Tuā-piànn-sàu ê sî, thian-pông mā tio̍h tshing-tshing--leh.",
  },
  {
    hanji: "伊講話誠歹聲嗽，予人聽著心肝頭袂爽快。",
    tailo:
      "I kóng-uē tsiânn pháinn-siann-sàu, hōo lâng thiann tio̍h sim-kuann-thâu bē sóng-khuài.",
  },
  {
    hanji: "船欲入港的時會霆水螺。",
    tailo: "Tsûn beh ji̍p-káng ê sî ē tân-tsuí-lê.",
  },
  {
    hanji: "未來社會會變按怎，真歹講。",
    tailo: "Bī-lâi siā-huē ē piàn án-tsuánn, tsin pháinn-kóng.",
  },
  {
    hanji: "後日遮欲舉行一場歌唱比賽。",
    tailo: "Āu--ji̍t tsia beh kí-hîng tsi̍t tiûnn kua-tshiùnn pí-sài.",
  },
  {
    hanji: "現代的水觳仔塑膠做的較濟。",
    tailo: "Hiān-tāi ê tsuí-khok-á sok-ka tsò--ê khah tsē.",
  },
  {
    hanji: "伊車駛傷緊，駛甲規台車反輾轉。",
    tailo: "I tshia sái siunn kín, sái kah kui tâi tshia píng-liàn-tńg.",
  },
  {
    hanji: "腹肚若水櫃，胸坎若樓梯。",
    tailo: "Pak-tóo ná tsuí-kuī, hing-khám ná lâu-thui.",
  },
  {
    hanji: "伊的歹癖一大堆，連鞭咬指甲，連鞭搝頭鬃。",
    tailo:
      "I ê pháinn-phiah tsi̍t-tuā-tui, liâm-mi kā tsíng-kah, liâm-mi khiú thâu-tsang.",
  },
  {
    hanji: "伊毋願共你鬥相共，你就揣別人嘛。",
    tailo: "I m̄-guān kā lí tàu-sann-kāng, lí tō tshuē pa̍t-lâng--mah.",
  },
  {
    hanji: "伊連一點仔機會都毋予我，我誠毋願。",
    tailo: "I liân tsi̍t-tiám-á ki-huē to m̄ hōo--guá, guá tsiânn m̄-guān.",
  },
  {
    hanji: "這件代誌若是傳出去，會真歹聽。",
    tailo:
      "Tsit kiānn tāi-tsì nā-sī thuân--tshut-khì, ē tsin pháinn-thiann.",
  },
  {
    hanji: "三更半暝走去墓仔埔，你敢毋驚去看著歹物仔？",
    tailo:
      "Sann-kenn-puànn-mê tsáu-khì bōng-á-poo, lí kám m̄ kiann khì khuànn-tio̍h pháinn-mih-á?",
  },
  {
    hanji: "大地動會予人心驚膽嚇。",
    tailo: "Tuā tē-tāng ē hōo lâng sim-kiann-tánn-hiannh.",
  },
  {
    hanji: "今仔日十六，有真濟生理人做牙。",
    tailo: "Kin-á-ji̍t tsa̍p-la̍k, ū tsin tsē sing-lí-lâng tsò-gê.",
  },
  {
    hanji: "若想著這層代誌，我就火大。",
    tailo: "Nā siūnn-tio̍h tsit tsân tāi-tsì, guá tō hué-tuā.",
  },
  {
    hanji: "阮阿公攑爪仔欲去整理菜園。",
    tailo: "Guán a-kong gia̍h jiáu-á beh khì tsíng-lí tshài-hn̂g.",
  },
  {
    hanji: "彼隻貓仔的爪仔真利，毋通去予伊抓著。",
    tailo:
      "Hit tsiah niau-á ê jiáu-á tsin lāi, m̄-thang khì hōo i jiàu--tio̍h.",
  },
  {
    hanji: "火舌湠去誠緊，一目𥍉仔就共厝燒了了矣。",
    tailo:
      "Hué-tsi̍h thuànn--khì tsiânn kín, tsi̍t-ba̍k-nih-á tō kā tshù sio-liáu-liáu--ah.",
  },
  {
    hanji: "阿三仔彼箍無路用人，干焦會曉佇牛牢內觸牛母爾爾。",
    tailo:
      "A-sam--á hit khoo bô-lōo-īng lâng, kan-na ē-hiáu tī gû-tiâu-lāi tak gû-bó niā-niā.",
  },
  {
    hanji: "放煙火的時陣愛注意，毋通去予火星噴著。",
    tailo:
      "Pàng ian-hué ê sî-tsūn ài tsù-ì, m̄-thang khì hōo hué-tshenn phùn--tio̍h.",
  },
  {
    hanji: "交朋友愛細膩，毋通去交著王哥柳哥。",
    tailo: "Kau pîng-iú ài sè-jī, m̄-thang khì kau-tio̍h Ông--ko-Liú--ko.",
  },
  {
    hanji: "你哪會使攑牛捽仔咧捽囡仔？",
    tailo: "Lí ná ē-sái gia̍h gû-sut-á teh sut gín-á?",
  },
  {
    hanji: "這个牛牢內底有幾隻牛犅？",
    tailo: "Tsit ê gû-tiâu lāi-té ū kuí tsiah gû-káng?",
  },
  {
    hanji: "伊定定佇這箍圍仔佮人冤家相拍，又閣欲食毋討趁，袂輸王爺咧。",
    tailo:
      "I tiānn-tiānn tī tsit-khoo-uî-á kah lâng uan-ke sio-phah, iū-koh beh tsia̍h m̄ thó-thàn, bē-su ông-iâ--leh.",
  },
  {
    hanji: "舊年遮火燒山，樹仔攏燒了了。",
    tailo: "Kū-nî tsia hué-sio-suann, tshiū-á lóng sio-liáu-liáu.",
  },
  {
    hanji: "巷仔口火燒厝，足濟人圍咧看。",
    tailo: "Hāng-á-kháu hué-sio-tshù, tsiok tsē lâng uî leh khuànn.",
  },
  {
    hanji: "就是天氣傷熱，毋才會火燒埔。",
    tailo: "Tō sī thinn-khì siunn jua̍h, m̄-tsiah ē hué-sio-poo.",
  },
  {
    hanji: "六月火燒埔，真正會熱死人。",
    tailo: "La̍k--gue̍h hué-sio-poo, tsin-tsiànn ē jua̍h-sí lâng.",
  },
  {
    hanji: "伊敢若牛螕咧，欲叫伊出錢是無可能的代誌。",
    tailo:
      "I kánn-ná gû-pi--leh, beh kiò i tshut tsînn sī bô khó-lîng ê tāi-tsì.",
  },
  {
    hanji: "捾桶仔丼一聲就落入去鼓井內矣。",
    tailo:
      "Kuānn-tháng-á tôm tsi̍t siann tō lak ji̍p-khì kóo-tsénn-lāi--ah.",
  },
  {
    hanji: "糋好的芋仔糋欲食進前愛閣乍一下。",
    tailo:
      "Tsìnn hó ê ōo-á-tsìnn beh tsia̍h tsìn-tsîng ài koh tsànn--tsi̍t-ē.",
  },
  {
    hanji: "你今仔日欲出去𨑨迌乎？",
    tailo: "Lí kin-á-ji̍t beh tshut-khì tshit-thô--honnh?",
  },
  {
    hanji: "花是你送的乎？免歹勢啦！",
    tailo: "Hue sī lí sàng--ê--honnh? Bián pháinn-sè--lah!",
  },
  {
    hanji: "時機䆀䆀，我的錢水有較乏。",
    tailo: "Sî-ki bái-bái, guá ê tsînn-tsuí ū khah ha̍t.",
  },
  {
    hanji: "以你的經驗來看，這件代誌是按怎發生的？",
    tailo:
      "Í lí ê king-giām lâi khuànn, tsit kiānn tāi-tsì sī án-tsuánn huat-sing--ê?",
  },
  {
    hanji: "仙人拍鼓有時錯，跤步踏差啥人無？",
    tailo:
      "Sian-jîn phah kóo iú sî tshò, kha-pōo ta̍h-tsha siánn-lâng bô?",
  },
  {
    hanji: "伊的病哪會好甲遐爾仔緊？敢是去食著仙丹？",
    tailo:
      "I ê pēnn ná ē hó kah hiah-nī-á kín? Kám-sī khì tsia̍h-tio̍h sian-tan?",
  },
  {
    hanji: "你想欲判我的罪，著愛有充分的證據。",
    tailo:
      "Lí siūnn-beh phuànn guá ê tsuē, tio̍h-ài ū tshiong-hun ê tsìng-kì.",
  },
  {
    hanji: "這種餅世代相傳已經規百年矣。",
    tailo: "Tsit tsióng piánn sè-tāi siong-thuân í-king kui pah nî--ah.",
  },
  {
    hanji: "代先明呼明唱，才袂後日仔毋認數。",
    tailo:
      "Tāi-sing bîng-hoo bîng-tshiàng, tsiah bē āu-ji̍t-á m̄ jīn-siàu.",
  },
  {
    hanji: "拄著危險，伊攏走代先。",
    tailo: "Tú-tio̍h guî-hiám, i lóng tsáu tāi-sing.",
  },
  {
    hanji: "𪜶兩兄弟的感情真好。",
    tailo: "In nn̄g hiann-tī ê kám-tsîng tsin hó.",
  },
  {
    hanji: "阮這陣兄弟已經熟似十幾冬矣。",
    tailo: "Guán tsit tīn hiann-tī í-king si̍k-sāi tsa̍p-kuí tang--ah.",
  },
  {
    hanji: "今仔日佇西門町有一陣兄弟咧捙拚。",
    tailo:
      "Kin-á-ji̍t tī Se-mn̂g-ting ū tsi̍t tīn hiann-tī teh tshia-piànn.",
  },
  {
    hanji: "今年的雨水真充足，稻仔結了誠飽穗。",
    tailo:
      "Kin-nî ê hōo-tsuí tsin tshiong-tsiok, tiū-á kiat liáu tsiânn pá-suī.",
  },
  {
    hanji: "予𪜶兩个去仙拚仙，咱蹛邊仔看戲就好。",
    tailo:
      "Hōo in nn̄g ê khì sian-piànn-sian, lán tuà pinn--á khuànn hì tō hó.",
  },
  {
    hanji: "𪜶兩个是仝爸各母的兄弟。",
    tailo: "In nn̄g ê sī kāng-pē-koh-bú ê hiann-tī.",
  },
  {
    hanji: "明仔載以前愛共代誌做予伊好勢。",
    tailo: "Bîn-á-tsài í-tsîng ài kā tāi-tsì tsò hōo i hó-sè.",
  },
  {
    hanji: "世俗人有誠濟代誌看袂開。",
    tailo: "Sè-sio̍k-lâng ū tsiânn tsē tāi-tsì khuànn bē khui.",
  },
  {
    hanji: "囡仔離跤手以後你就輕鬆矣。",
    tailo: "Gín-á lī-kha-tshiú í-āu lí tō khin-sang--ah.",
  },
  {
    hanji: "今仔日的會議由伊來主持。",
    tailo: "Kin-á-ji̍t ê huē-gī iû i lâi tsú-tshî.",
  },
  {
    hanji: "伊做生理會當成功，主要的原因就是認真拍拚。",
    tailo:
      "I tsò-sing-lí ē-tàng sîng-kong, tsú-iàu ê guân-in tō sī jīn-tsin phah-piànn.",
  },
  {
    hanji: "主動的態度佮拍拚的精神是做人成功的基本條件。",
    tailo:
      "Tsú-tōng ê thāi-tōo kah phah-piànn ê tsing-sîn sī tsò-lâng sîng-kong ê ki-pún tiâu-kiānn.",
  },
  {
    hanji: "你對這件代誌有啥物主張？",
    tailo: "Lí tuì tsit kiānn tāi-tsì ū siánn-mih tsú-tiunn?",
  },
  {
    hanji: "我主張咱愛堅持到底，毋通妥協。",
    tailo: "Guá tsú-tiunn lán ài kian-tshî kàu-té, m̄-thang thò-hia̍p.",
  },
  {
    hanji: "我今仔日無閒，公司的代誌才勞煩你代理一下。",
    tailo:
      "Guá kin-á-ji̍t bô-îng, kong-si ê tāi-tsì tsiah lô-huân lí tāi-lí--tsi̍t-ē.",
  },
  {
    hanji: "這兩个皮包仔看著仝款仔仝款。",
    tailo: "Tsit nn̄g ê phuê-pau-á khuànn tio̍h kāng-khuán-á-kāng-khuán.",
  },
  {
    hanji: "這張批麻煩你替我代筆一下。",
    tailo: "Tsit tiunn phue mâ-huân lí thè guá tāi-pit--tsi̍t-ē.",
  },
  {
    hanji: "世間人攏真自私，干焦知影顧家己的利益。",
    tailo:
      "Sè-kan-lâng lóng tsin tsū-su, kan-na tsai-iánn kòo ka-kī ê lī-ik.",
  },
  {
    hanji: "這層代誌予你主意就好。",
    tailo: "Tsit tsân tāi-tsì hōo lí tsú-ì tō hó.",
  },
  {
    hanji: "新正年頭，規个社會充滿快樂的氣氛。",
    tailo:
      "Sin-tsiann-nî-thâu, kui-ê siā-huē tshiong-buán khuài-lo̍k ê khì-hun.",
  },
  {
    hanji: "厝內大細項代誌攏是伊咧發落。",
    tailo: "Tshù-lāi tuā-sè hāng tāi-tsì lóng sī i teh hua̍t-lo̍h.",
  },
  {
    hanji: "這層代誌你會當請伊代辦。",
    tailo: "Tsit tsân tāi-tsì lí ē-tàng tshiánn i tāi-pān.",
  },
  {
    hanji: "彼條路中央有一凹，你著愛較細膩咧。",
    tailo:
      "Hit tiâu lōo tiong-ng ū tsi̍t nah, lí tio̍h-ài khah sè-jī--leh.",
  },
  {
    hanji: "伊拍拚的故事有刊佇報紙頂頭。",
    tailo: "I phah-piànn ê kòo-sū ū khan tī pò-tsuá tíng-thâu.",
  },
  {
    hanji: "遮的加起來攏總一百箍。",
    tailo: "Tsia--ê ka--khí-lâi lóng-tsóng tsi̍t-pah khoo.",
  },
  {
    hanji: "伊卌外歲矣，看著猶真少年。",
    tailo: "I siap-guā huè--ah, khuànn tio̍h iáu tsin siàu-liân.",
  },
  {
    hanji: "彼兩个囡仔咧冤家，你緊去共占。",
    tailo: "Hit nn̄g ê gín-á teh uan-ke, lí kín khì kā tsiàm.",
  },
  {
    hanji: "伊講欲請我食好料的，真正是卯死矣！",
    tailo:
      "I kóng beh tshiánn guá tsia̍h hó-liāu--ê, tsin-tsiànn sī báu--sí--ah!",
  },
  {
    hanji: "無喙齒，只好沓沓仔卯。",
    tailo: "Bô tshuì-khí, tsí-hó ta̍uh-ta̍uh-á mauh.",
  },
  {
    hanji: "你愛閣共伊小叮一下，伊才會記得。",
    tailo: "Lí ài koh kā i sió ting--tsi̍t-ē, i tsiah ē-kì--tit.",
  },
  {
    hanji: "你若欲半䖙倒看電視，你的目睭早慢會近視。",
    tailo:
      "Lí nā beh puànn-the-tó khuànn tiān-sī, lí ê ba̍k-tsiu tsá-bān ē kīn-sī.",
  },
  {
    hanji: "較早的人感覺出丁是福氣。",
    tailo: "Khah-tsá ê lâng kám-kak tshut-ting sī hok-khì.",
  },
  {
    hanji: "伊所講的佮事實有真大的出入。",
    tailo: "I sóo kóng--ê kah sū-si̍t ū tsin tuā ê tshut-ji̍p.",
  },
  {
    hanji: "阿姨毋是外人，你講，無要緊。",
    tailo: "A-î m̄ sī guā-lâng, lí kóng, bô iàu-kín.",
  },
  {
    hanji: "這是咱這組的問題，莫共外人牽拖入來。",
    tailo:
      "Tse sī lán tsit tsoo ê būn-tê, mài kā guā-lâng khan-thua--ji̍p-lâi.",
  },
  {
    hanji: "你做按呢就會使矣，毋免閣加工啦！",
    tailo: "Lí tsò án-ne tō ē-sái--ah, m̄-bián koh ke-kang--lah!",
  },
  {
    hanji: "我明仔載欲請半工的假。",
    tailo: "Guá bîn-á-tsài beh tshíng puànn-kang ê ká.",
  },
  {
    hanji: "伊才退伍無偌久，就央三託四欲揣頭路。",
    tailo:
      "I tsiah thè-ngóo bô-guā-kú, tō iang-sann-thok-sì beh tshuē thâu-lōo.",
  },
  {
    hanji: "代誌做到半中站，袂使喝停就停。",
    tailo:
      "Tāi-tsì tsò kàu puànn tiong-tsām, bē-sái huah thîng tō thîng.",
  },
  {
    hanji: "價錢遮懸你若毋出手，將來一定會反悔。",
    tailo:
      "Kè-tsînn tsiah kuân lí nā m̄ tshut-tshiú, tsiong-lâi it-tīng ē huán-hué.",
  },
  {
    hanji: "阮阿公耍股票輸了了，煞拍我出水。",
    tailo:
      "Guán a-kong sńg kóo-phiò su-liáu-liáu, suah phah guá tshut-tsuí.",
  },
  {
    hanji: "伊可比一隻予人關佇籠仔內的鳥仔。",
    tailo: "I khó-pí tsi̍t tsiah hōo lâng kuainn tī lâng-á-lāi ê tsiáu-á.",
  },
  {
    hanji: "我決定欲請半月日的假來去𨑨迌。",
    tailo:
      "Guá kuat-tīng beh tshíng puànn gue̍h-ji̍t ê ká lâi-khì tshit-thô.",
  },
  {
    hanji: "阮阿公的冊房內底有真濟古冊。",
    tailo: "Guán a-kong ê tsheh-pâng lāi-té ū tsin tsē kóo-tsheh.",
  },
  {
    hanji: "這攤生理若予做會成，就聽好食半世人矣。",
    tailo:
      "Tsit thuann sing-lí nā hōo tsò ē sîng, tō thìng-hó tsia̍h puànn-sì-lâng--ah.",
  },
  {
    hanji: "另外買一个雞卵糕送𪜶老母。",
    tailo: "Līng-guā bé tsi̍t ê ke-nn̄g-ko sàng in lāu-bú.",
  },
  {
    hanji: "你想講激外外就無代誌矣是無？",
    tailo: "Lí siūnn-kóng kik-guā-guā tō bô tāi-tsì--ah sī--bô?",
  },
  {
    hanji: "這个查某囡仔真𠢕司奶。",
    tailo: "Tsit ê tsa-bóo gín-á tsin gâu sai-nai.",
  },
  {
    hanji: "這盤雞肉半生熟，毋通食。",
    tailo: "Tsit puânn ke-bah puànn-tshenn-si̍k, m̄-thang tsia̍h.",
  },
  {
    hanji: "日月潭是一个真出名的風景區。",
    tailo: "Ji̍t-gua̍t-thâm sī tsi̍t ê tsin tshut-miâ ê hong-kíng-khu.",
  },
  {
    hanji: "閣等一下啦！連鞭就欲出帆矣。",
    tailo: "Koh tán--tsi̍t-ē--lah! Liâm-mi tō beh tshut-phâng--ah.",
  },
  {
    hanji: "出業揣無頭路，只好暫時去做臨時工。",
    tailo:
      "Tshut-gia̍p tshuē-bô thâu-lōo, tsí-hó tsiām-sî khì tsò lîm-sî-kang.",
  },
  {
    hanji: "古早時代，「玉井」叫做「噍吧哖」。",
    tailo: "Kóo-tsá sî-tāi, “Gio̍k-tsénn” kiò-tsò “Ta-pa-nî”.",
  },
  {
    hanji: "專業的代誌外行的做袂來。",
    tailo: "Tsuan-gia̍p ê tāi-tsì guā-hâng--ê tsò bē lâi.",
  },
  {
    hanji: "我毋是本地人，我是外位搬來的。",
    tailo: "Guá m̄ sī pún-tē-lâng, guá sī guā-uī puann--lâi--ê.",
  },
  {
    hanji: "你去買一寡四秀仔來啖糝一下。",
    tailo: "Lí khì bé tsi̍t-kuá sì-siù-á lâi tām-sám--tsi̍t-ē.",
  },
  {
    hanji: "伊共所有的代誌攏講出來矣。",
    tailo: "I kā sóo-ū ê tāi-tsì lóng kóng--tshut-lâi--ah.",
  },
  {
    hanji: "咱著愛綴會著社會的改變，毋通傷古板！",
    tailo:
      "Lán tio̍h-ài tuè ē tio̍h siā-huē ê kái-piàn, m̄-thang siunn kóo-pán!",
  },
  {
    hanji: "代誌按呢一直吊佇半空中嘛毋是辦法。",
    tailo:
      "Tāi-tsì án-ne it-ti̍t tiàu tī puànn-khong-tiong mā m̄ sī pān-huat.",
  },
  {
    hanji: "我雄雄感覺跤痠手軟，四肢無力。",
    tailo: "Guá hiông-hiông kám-kak kha-sng-tshiú-nńg, sù-ki bô-la̍t.",
  },
  {
    hanji: "有人咧叫門，你去看是啥物人？",
    tailo: "Ū lâng teh kiò-mn̂g, lí khì khuànn sī siánn-mih-lâng?",
  },
  {
    hanji: "車頭附近有真濟叫客的計程車。",
    tailo: "Tshia-thâu hù-kīn ū tsin tsē kiò-kheh ê kè-thîng-tshia.",
  },
  {
    hanji: "只是一屑仔小意思爾爾。",
    tailo: "Tsí-sī tsi̍t-sut-á sió ì-sù niā-niā.",
  },
  {
    hanji: "我叫是你欲走矣，毋才無共你招。",
    tailo: "Guá kiò-sī lí beh tsáu--ah, m̄-tsiah bô kā lí tsio.",
  },
  {
    hanji: "只要有你，代誌就會成功。",
    tailo: "Tsí-iàu ū lí, tāi-tsì tō ē sîng-kong.",
  },
  {
    hanji: "外口真寒，你愛加疊一領外衫。",
    tailo: "Guā-kháu tsin kuânn, lí ài ke tha̍h tsi̍t niá guā-sann.",
  },
  {
    hanji: "遮四面攏是山，環境真好。",
    tailo: "Tsia sì-bīn lóng sī suann, khuân-kíng tsin hó.",
  },
  {
    hanji: "你若共錢借我，我會加倍還你。",
    tailo: "Lí nā kā tsînn tsioh--guá, guá ē ka-puē hîng--lí.",
  },
  {
    hanji: "你若欲做研究，我遮有一寡古書會用得借你。",
    tailo:
      "Lí nā beh tsò gián-kiù, guá tsia ū tsi̍t-kuá kóo-tsu ē-īng-tit tsioh--lí.",
  },
  {
    hanji: "出珠的人毋通四界走，才袂去共人穢著。",
    tailo:
      "Tshut-tsu ê lâng m̄-thang sì-kè tsáu, tsiah bē khì kā lâng uè--tio̍h.",
  },
  {
    hanji: "伊昨暗出酒，到今猶咧艱苦。",
    tailo: "I tsa-àm tshut-tsiú, kàu-tann iáu teh kan-khóo.",
  },
  {
    hanji: "咱國家的元首叫做總統。",
    tailo: "Lán kok-ka ê guân-siú kiò-tsò tsóng-thóng.",
  },
  {
    hanji: "我四常去圖書館查資料。",
    tailo: "Guá sù-siông khì tôo-su-kuán tshâ tsu-liāu.",
  },
  {
    hanji: "誠可惜！這擺的比賽無提著冠軍。",
    tailo: "Tsiânn khó-sioh! Tsit pái ê pí-sài bô the̍h-tio̍h kuan-kun.",
  },
  {
    hanji: "伊只不過是一个半桶屎爾爾。",
    tailo: "I tsí-put-kò sī tsi̍t ê puànn-tháng-sái niā-niā.",
  },
  {
    hanji: "你只不過是一个半桶師仔，有啥物好囂俳的？",
    tailo:
      "Lí tsí-put-kò sī tsi̍t ê puànn-tháng-sai-á, ū siánn-mih hó hiau-pai--ê?",
  },
  {
    hanji: "彼幾片彩雲加添黃昏的美麗。",
    tailo: "Hit kuí phìnn tshái-hûn ka-thiam hông-hun ê bí-lē.",
  },
  {
    hanji: "做人愛認真拍拚，才會有出脫。",
    tailo: "Tsò-lâng ài jīn-tsin phah-piànn, tsiah ē ū tshut-thuat.",
  },
  {
    hanji: "臺北是一个四通八達的大城市。",
    tailo: "Tâi-pak sī tsi̍t ê sù-thong-pat-ta̍t ê tuā siânn-tshī.",
  },
  {
    hanji: "這馬觀念進步，半陰陽仔嘛愛受著尊重。",
    tailo:
      "Tsit-má kuan-liām tsìn-pōo, puànn-iam-iûnn-á mā ài siū-tio̍h tsun-tiōng.",
  },
  {
    hanji: "等一下麻煩你出喙共我鬥講寡好話好無？",
    tailo:
      "Tán--tsi̍t-ē mâ-huân lí tshut-tshuì kā guá tàu kóng kuá hó-uē hó--bô?",
  },
  {
    hanji: "大學出業了後，同學攏四散去矣。",
    tailo: "Tāi-ha̍k tshut-gia̍p liáu-āu, tông-ha̍k lóng sì-suànn--khì-ah.",
  },
  {
    hanji: "你愛加減食一寡，病才會較快好。",
    tailo: "Lí ài ke-kiám tsia̍h--tsi̍t-kuá, pēnn tsiah ē khah khuài hó.",
  },
  {
    hanji: "執政者攏加減有包袱仔。",
    tailo: "Tsip-tsìng-tsiá lóng ke-kiám ū pau-ho̍k-á.",
  },
  {
    hanji: "這帖藥仔會當去傷解鬱。",
    tailo: "Tsit thiap io̍h-á ē-tàng khì-siong-kái-ut.",
  },
  {
    hanji: "逐个人攏誠佮意可愛的動物。",
    tailo: "Ta̍k ê lâng lóng tsiânn kah-ì khó-ài ê tōng-bu̍t.",
  },
  {
    hanji: "伊是一个古意人，你莫共伊創治啦。",
    tailo: "I sī tsi̍t ê kóo-ì-lâng, lí mài kā i tshòng-tī--lah.",
  },
  {
    hanji: "這塊雞卵糕攕一下煞凹落去。",
    tailo: "Tsit tè ke-nn̄g-ko tshiám tsi̍t-ē suah nah--lo̍h-khì.",
  },
  {
    hanji: "伊欲送予人的物件攏包裝甲真媠。",
    tailo: "I beh sàng hōo lâng ê mi̍h-kiānn lóng pau-tsong kah tsin suí.",
  },
  {
    hanji: "我欲出運矣，這馬開始欲趁大錢囉！",
    tailo:
      "Guá beh tshut-ūn--ah, tsit-má khai-sí beh thàn-tuā-tsînn--looh!",
  },
  {
    hanji: "我半路拄著朋友，真歡喜。",
    tailo: "Guá puànn-lōo tú-tio̍h pîng-iú, tsin huann-hí.",
  },
  {
    hanji: "代誌做甲半路就閬港矣。",
    tailo: "Tāi-tsì tsò kah puànn-lōo tō làng-káng--ah.",
  },
  {
    hanji: "加減趁一寡仔外路仔來相添所費。",
    tailo: "Ke-kiám thàn tsi̍t-kuá-á guā-lōo-á lâi sio-thinn sóo-huì.",
  },
  {
    hanji: "伊是一个半路師，你敢放心共工課交予伊做？",
    tailo:
      "I sī tsi̍t ê puànn-lōo-sai, lí kám hòng-sim kā khang-khuè kau hōo i tsò?",
  },
  {
    hanji: "阮阿母上愛用半精白的肉落去滷。",
    tailo: "Guán a-bú siōng ài īng puànn-tsiann-pe̍h ê bah lo̍h-khì lóo.",
  },
  {
    hanji: "你去四箍輾轉揣看覓，看彼个囡仔覕佇佗位？",
    tailo:
      "Lí khì sì-khoo-liàn-tńg tshuē khuànn-māi, khuànn hit ê gín-á bih tī tó-uī?",
  },
  {
    hanji: "賣蚵仔麵線包領你趁錢。",
    tailo: "Bē ô-á-mī-suànn pau-niá lí thàn-tsînn.",
  },
  {
    hanji: "這个凹鼻的尪仔誠歹看。",
    tailo: "Tsit ê nah-phīnn ê ang-á tsiânn pháinn-khuànn.",
  },
  {
    hanji: "巷仔底有人辦喪事咧做功德。",
    tailo: "Hāng-á-té ū lâng pān song-sū teh tsò kong-tik.",
  },
  {
    hanji: "你這个可憐的囡仔，遮爾細漢老爸就來過身去。",
    tailo:
      "Lí tsit ê khó-liân ê gín-á, tsiah-nī sè-hàn lāu-pē tō lâi kuè-sin--khì.",
  },
  {
    hanji: "遐細漢爸母就過身，實在是可憐代。",
    tailo: "Hiah sè-hàn pē-bú tō kuè-sin, si̍t-tsāi sī khó-liân-tāi.",
  },
  {
    hanji: "伊為著家己的利益出賣朋友。",
    tailo: "I uī-tio̍h ka-kī ê lī-ik tshut-bē pîng-iú.",
  },
  {
    hanji: "伊彼个人無啥可靠，我看你去揣別人較好。",
    tailo:
      "I hit ê lâng bô siánn khó-khò, guá khuànn lí khì tshuē pa̍t-lâng khah hó.",
  },
  {
    hanji: "食藥仔愛配半燒冷的滾水。",
    tailo: "Tsia̍h io̍h-á ài phuè puànn-sio-líng ê kún-tsuí.",
  },
  {
    hanji: "這是眾人的代誌，毋通予一个人包辦。",
    tailo:
      "Tse sī tsìng-lâng ê tāi-tsì, m̄-thang hōo tsi̍t ê lâng pau-pān.",
  },
  {
    hanji: "你著愛認真拍拚，才有出頭的一日。",
    tailo:
      "Lí tio̍h-ài jīn-tsin phah-piànn, tsiah ū tshut-thâu ê tsi̍t ji̍t.",
  },
  {
    hanji: "好佳哉有你出頭，若無，這件代誌就辦袂成矣。",
    tailo:
      "Hó-ka-tsài ū lí tshut-thâu, nā-bô, tsit kiānn tāi-tsì tō pān bē sîng--ah.",
  },
  {
    hanji: "𪜶囝今年二十出頭矣。",
    tailo: "In kiánn kin-nî jī-tsa̍p tshut-thâu--ah.",
  },
  {
    hanji: "你愛認真拍拚，才會出頭天。",
    tailo: "Lí ài jīn-tsin phah-piànn, tsiah ē tshut-thâu-thinn.",
  },
  {
    hanji: "你若恬恬莫出聲，無人會講你是啞口。",
    tailo: "Lí nā tiām-tiām mài tshut-siann, bô lâng ē kóng lí sī é-káu.",
  },
  {
    hanji: "你若是加講話，連鞭就會出代誌。",
    tailo: "Lí nā-sī ke-kóng-uē, liâm-mi tō ē tshut-tāi-tsì.",
  },
  {
    hanji: "囡仔出癖的時陣毋通共伊𤆬出去。",
    tailo: "Gín-á tshut-phia̍h ê sî-tsūn m̄-thang kā i tshuā--tshut-khì.",
  },
  {
    hanji: "比賽會贏會輸無包穩的。",
    tailo: "Pí-sài ē iânn ē su bô pau-ún--ê.",
  },
  {
    hanji: "伊遮認真練習，這回比賽包穩會贏。",
    tailo: "I tsiah jīn-tsin liān-si̍p, tsit huê pí-sài pau-ún ē iânn.",
  },
  {
    hanji: "四邊恬靜，干焦有鳥仔啼叫的聲。",
    tailo: "Sì-pinn tiām-tsīng, kan-na ū tsiáu-á thî-kiò ê siann.",
  },
  {
    hanji: "比數差遐濟，這聲包贏的。",
    tailo: "Pí-sòo tsha hiah tsē, tsit-siann pau-iânn--ê.",
  },
  {
    hanji: "共這塊田包贌落來種作。",
    tailo: "Kā tsit tè tshân pau-pa̍k lo̍h-lâi tsìng-tsoh.",
  },
  {
    hanji: "風颱過了後，菜價攏夯起來。",
    tailo: "Hong-thai kuè liáu-āu, tshài-kè lóng giâ--khí-lâi.",
  },
  {
    hanji: "伊足巧的，你免想欲拐伊。",
    tailo: "I tsiok khiáu--ê, lí bián siūnn beh kuái--i.",
  },
  {
    hanji: "這馬的人嫁粧定定攏打現金。",
    tailo: "Tsit-má ê lâng kè-tsng tiānn-tiānn lóng tánn hiān-kim.",
  },
  {
    hanji: "我無時間通去買禮物，規氣打現金予你。",
    tailo:
      "Guá bô sî-kan thang khì bé lé-bu̍t, kui-khì tánn hiān-kim hōo--lí.",
  },
  {
    hanji: "看場合打扮，才袂失人禮。",
    tailo: "Khuànn tiûnn-ha̍p tánn-pān, tsiah bē sit-lâng-lé.",
  },
  {
    hanji: "有人講飼狗是咧共狗做奴才。",
    tailo: "Ū lâng kóng tshī káu sī teh kā káu tsò lôo-tsâi.",
  },
  {
    hanji: "伊早起跋倒，去頓著尻川。",
    tailo: "I tsá-khí pua̍h-tó, khì tǹg-tio̍h kha-tshng.",
  },
  {
    hanji: "囡仔人若無乖著愛拍尻川䫌。",
    tailo: "Gín-á-lâng nā bô kuai tio̍h-ài phah kha-tshng-phué.",
  },
  {
    hanji: "伊佇尻川後講人的歹話。",
    tailo: "I tī kha-tshng-āu kóng lâng ê pháinn-uē.",
  },
  {
    hanji: "我一下失手煞共茶杯仔摔破去。",
    tailo: "Guá tsi̍t-ē sit-tshiú suah kā tê-pue-á siak-phuà--khì.",
  },
  {
    hanji: "嫁娶的時陣會有一位好命的婦人人打扎新娘。",
    tailo:
      "Kè-tshuā ê sî-tsūn ē ū tsi̍t uī hó-miā ê hū-jîn-lâng tánn-tsah sin-niû.",
  },
  {
    hanji: "我生理失敗的時佳哉有伊共我打扎。",
    tailo: "Guá sing-lí sit-pāi ê sî ka-tsài ū i kā guá tánn-tsah.",
  },
  {
    hanji: "你的正手爿有一本冊，提過來予我好無？",
    tailo:
      "Lí ê tsiànn-tshiú-pîng ū tsi̍t pún tsheh, the̍h kuè-lâi hōo--guá hó--bô?",
  },
  {
    hanji: "正月正時，愛講一寡好吉兆的話。",
    tailo: "Tsiann-gue̍h-tsiann-sî, ài kóng tsi̍t-kuá hó-kiat-tiāu ê uē.",
  },
  {
    hanji: "𪜶母仔囝兩个人無依無倚，誠艱苦過日。",
    tailo:
      "In bú-á-kiánn nn̄g ê lâng bô-i-bô-uá, tsiânn kan-khóo kuè-ji̍t.",
  },
  {
    hanji: "這項物件價值一萬箍左右。",
    tailo: "Tsit hāng mi̍h-kiānn kè-ta̍t tsi̍t-bān khoo tsó-iū.",
  },
  {
    hanji: "平平是人，生活哪會差遐濟？",
    tailo: "Pênn-pênn sī lâng, sing-ua̍h ná ē tsha hiah tsē?",
  },
  {
    hanji: "平平路也會行甲跋跋倒？",
    tailo: "Pênn-pênn lōo iā ē kiânn kah pua̍h-pua̍h--tó?",
  },
  {
    hanji: "弓蕉無到分，食著末末。",
    tailo: "King-tsio bô kàu-hun, tsia̍h tio̍h bua̍h-bua̍h.",
  },
  {
    hanji: "阿琴仔家己一个養飼幼囝，實在足感心。",
    tailo:
      "A-khîm--á ka-kī tsi̍t-ê iúnn-tshī iù-kiánn, si̍t-tsāi tsiok kám-sim.",
  },
  {
    hanji: "咱做人求平安就好，毋通痟貪。",
    tailo: "Lán tsò-lâng kiû-pîng-an tō hó, m̄-thang siáu-tham.",
  },
  {
    hanji: "我本成就有想欲按呢做。",
    tailo: "Guá pún-tsiânn tō ū siūnn-beh án-ne tsò.",
  },
  {
    hanji: "伊按呢做，未免傷酷刑！",
    tailo: "I án-ne tsò, bī-bián siunn khok-hîng!",
  },
  {
    hanji: "平均落來，一个人會當分著三千箍。",
    tailo:
      "Pîng-kin--lo̍h-lâi, tsi̍t ê lâng ē-tàng pun-tio̍h sann-tshing khoo.",
  },
  {
    hanji: "這擺考試成績的分佈真平均。",
    tailo: "Tsit pái khó-tshì sîng-tsik ê hun-pòo tsin pîng-kin.",
  },
  {
    hanji: "一時的失敗嘛毋通失志。",
    tailo: "Tsi̍t-sî ê sit-pāi mā m̄-thang sit-tsì.",
  },
  {
    hanji: "參加宴會著愛打扮較媠咧。",
    tailo: "Tsham-ka iàn-huē tio̍h-ài tánn-pān khah suí--leh.",
  },
  {
    hanji: "講話攏無考慮，當然會失言。",
    tailo: "Kóng-uē lóng bô khó-lī, tong-jiân ē sit-giân.",
  },
  {
    hanji: "母身若顧予伊好，囡仔出世就較健康。",
    tailo: "Bó-sin nā kòo hōo i hó, gín-á tshut-sì tō khah kiān-khong.",
  },
  {
    hanji: "飛行機若失事代誌就大條。",
    tailo: "Hue-lîng-ki nā sit-sū tāi-tsì tō tuā tiâu.",
  },
  {
    hanji: "今仔日我本底欲去學校，騎車跋倒著傷才無去。",
    tailo:
      "Kin-á-ji̍t guá pún-té beh khì ha̍k-hāu, khiâ-tshia pua̍h-tó tio̍h-siong tsiah bô khì.",
  },
  {
    hanji: "伊按呢做真正是咧夯枷。",
    tailo: "I án-ne tsò tsin-tsiànn sī teh giâ-kê.",
  },
  {
    hanji: "伊做人誠正派，袂想空想縫去害人。",
    tailo:
      "I tsò-lâng tsiânn tsìng-phài, bē siūnn-khang-siūnn-phāng khì hāi--lâng.",
  },
  {
    hanji: "菜頭囥傷久就會消水失重。",
    tailo: "Tshài-thâu khǹg siunn kú tō ē siau-tsuí sit-tāng.",
  },
  {
    hanji: "我對正面共伊看，才發現伊生做真媠。",
    tailo:
      "Guá tuì tsiànn-bīn kā i khuànn, tsiah huat-hiān i senn-tsò tsin suí.",
  },
  {
    hanji: "𪜶兄弟仔定定正面衝突，冤家量債。",
    tailo:
      "In hiann-tī-á tiānn-tiānn tsiànn-bīn tshiong-tu̍t, uan-ke-niû-tsè.",
  },
  {
    hanji: "想著這件代誌，我就失眠睏袂去。",
    tailo: "Siūnn-tio̍h tsit kiānn tāi-tsì, guá tō sit-bîn khùn bē khì.",
  },
  {
    hanji: "毋通佇人的尻脊後講人的歹話。",
    tailo: "M̄-thang tī lâng ê kha-tsiah-āu kóng lâng ê pháinn-uē.",
  },
  {
    hanji: "虱目魚的幼骨仔誠濟，你著細膩仔食。",
    tailo: "Sat-ba̍k-hî ê iù-kut-á tsiânn tsē, lí tio̍h sè-jī-á tsia̍h.",
  },
  {
    hanji: "這條路是用打馬膠鋪的。",
    tailo: "Tsit tiâu lōo sī īng tá-má-ka phoo--ê.",
  },
  {
    hanji: "伊今仔日的表現有淡薄仔失常。",
    tailo: "I kin-á-ji̍t ê piáu-hiān ū tām-po̍h-á sit-siông.",
  },
  {
    hanji: "今仔日的天氣佮平常無仝款。",
    tailo: "Kin-á-ji̍t ê thinn-khì kah pîng-siông bô kāng-khuán.",
  },
  {
    hanji: "姊妹仔冤家是真平常的代誌。",
    tailo: "Tsí-muē-á uan-ke sī tsin pîng-siông ê tāi-tsì.",
  },
  {
    hanji: "阮阿公過身，打桶兩禮拜才出山。",
    tailo:
      "Guán a-kong kuè-sin, tánn-tháng nn̄g lé-pài tsiah tshut-suann.",
  },
  {
    hanji: "我先失陪乎，另日我才閣來。",
    tailo: "Guá sing sit-puê--honnh, līng-ji̍t guá tsiah-koh lâi.",
  },
  {
    hanji: "我欲來去市場買一塊豬肝。",
    tailo: "Guá beh lâi-khì tshī-tiûnn bé tsi̍t tè ti-kuann.",
  },
  {
    hanji: "臺灣的蓮霧已經拍入去日本的市場矣。",
    tailo:
      "Tâi-uân ê lián-bū í-king phah ji̍p-khì Ji̍t-pún ê tshī-tiûnn--ah.",
  },
  {
    hanji: "這件代誌我替你打揲好勢矣。",
    tailo: "Tsit kiānn tāi-tsì guá thè lí tánn-tia̍p hó-sè--ah.",
  },
  {
    hanji: "伊予𪜶老母打揲甲真悽慘。",
    tailo: "I hōo in lāu-bú tánn-tia̍p kah tsin tshi-tshám.",
  },
  {
    hanji: "大學猶未出業，未曾未就欲家己開店做生理。",
    tailo:
      "Tāi-ha̍k iáu-buē tshut-gia̍p, buē-tsîng-buē tō beh ka-kī khui-tiàm tsò-sing-lí.",
  },
  {
    hanji: "遮的貨攏是正港的，恁逐家會當放心仔買。",
    tailo:
      "Tsia ê huè lóng sī tsiànn-káng--ê, lín ta̍k-ke ē-tàng hòng-sim-á bé.",
  },
  {
    hanji: "歌仔戲是對民間發展起來的。",
    tailo: "Kua-á-hì sī tuì bîn-kan huat-tián--khí-lâi--ê.",
  },
  {
    hanji: "阮囝已經會曉家己扒飯矣。",
    tailo: "Guán kiánn í-king ē-hiáu ka-kī pe-pn̄g--ah.",
  },
  {
    hanji: "原來你就是王董的，失敬，失敬！",
    tailo: "Guân-lâi lí tō sī Ông táng--ê, sit-kìng, sit-kìng!",
  },
  {
    hanji: "景氣無好，失業的人誠濟。",
    tailo: "Kíng-khì bô hó, sit-gia̍p ê lâng tsiânn tsē.",
  },
  {
    hanji: "若欲做著愛做正當的生理。",
    tailo: "Nā beh tsò tio̍h-ài tsò tsìng-tong ê sing-lí.",
  },
  {
    hanji: "天氣遮寒，食火鍋正當時。",
    tailo: "Thinn-khì tsiah kuânn, tsia̍h hué-ko tsiànn-tong-sî.",
  },
  {
    hanji: "講正經的啦，你嘛愛揣一个好的頭路。",
    tailo:
      "Kóng tsìng-king--ê--lah, lí mā ài tshuē tsi̍t ê hó ê thâu-lōo.",
  },
  {
    hanji: "天頂天公，地下母舅公。",
    tailo: "Thinn-tíng Thinn-kong, tē-ē bú-kū-kong.",
  },
  {
    hanji: "這領膨紗衫刺了真幼路。",
    tailo: "Tsit niá phòng-se-sann tshiah liáu tsin iù-lōo.",
  },
  {
    hanji: "風颱天上驚失電，咱著愛準備蠟燭。",
    tailo:
      "Hong-thai-thinn siōng kiann sit-tiān, lán tio̍h-ài tsún-pī la̍h-tsik.",
  },
  {
    hanji: "烏骨雞的市價比肉雞仔較好。",
    tailo: "Oo-kut-ke ê tshī-kè pí bah-ke-á khah hó.",
  },
  {
    hanji: "失德的代誌咱千萬毋通做。",
    tailo: "Sit-tik ê tāi-tsì lán tshian-bān m̄-thang tsò.",
  },
  {
    hanji: "你做衫賰的布頭布尾敢會使予我？",
    tailo: "Lí tsò sann tshun ê pòo-thâu-pòo-bué kám ē-sái hōo--guá?",
  },
  {
    hanji: "公司倒去的代誌，予伊真大的打擊。",
    tailo: "Kong-si tó--khì ê tāi-tsì, hōo i tsin tuā ê tánn-kik.",
  },
  {
    hanji: "你千萬毋通打擊伊的信心。",
    tailo: "Lí tshian-bān m̄-thang tánn-kik i ê sìn-sim.",
  },
  {
    hanji: "真濟擔仔攏有布篷通遮雨。",
    tailo: "Tsin tsē tànn-á lóng ū pòo-phâng thang jia-hōo.",
  },
  {
    hanji: "真失禮，這攏是我的毋著。",
    tailo: "Tsin sit-lé, tse lóng sī guá ê m̄-tio̍h.",
  },
  {
    hanji: "𪜶囝已經失蹤幾若冬矣。",
    tailo: "In kiánn í-king sit-tsong kuí-nā tang--ah.",
  },
  {
    hanji: "我一時失覺察，物件煞予彼个賊仔偷提去。",
    tailo:
      "Guá tsi̍t-sî sit-kak-tshat, mi̍h-kiānn suah hōo hit ê tsha̍t-á thau-the̍h--khì.",
  },
  {
    hanji: "你哪會做這款失體面的代誌？",
    tailo: "Lí ná ē tsò tsit khuán sit-thé-biān ê tāi-tsì?",
  },
  {
    hanji: "草仔緊薅薅咧，才袂生甲滿四界。",
    tailo: "Tsháu-á kín khau-khau--leh, tsiah bē senn kah muá-sì-kè.",
  },
  {
    hanji: "半暝三更我欲佗生三十萬予你？",
    tailo: "Puànn-mê sann-kenn guá beh toh senn sann-tsa̍p bān hōo--lí?",
  },
  {
    hanji: "伊共我的電腦用歹去矣。",
    tailo: "I kā guá ê tiān-náu īng pháinn--khì--ah.",
  },
  {
    hanji: "你甲毋答應，阮只好揣別人。",
    tailo: "Lí kah m̄ tah-ìng, guán tsí-hó tshuē pa̍t-lâng.",
  },
  {
    hanji: "甲遐衰，會去拄著這款代誌？",
    tailo: "Kah hiah sue, ē khì tú-tio̍h tsit khuán tāi-tsì?",
  },
  {
    hanji: "拄才出大日，目𥍉仔就落大雨。",
    tailo: "Tú tsiah tshut-tuā-ji̍t, ba̍k-nih-á tō lo̍h tuā-hōo.",
  },
  {
    hanji: "伊做代誌真用心，莫怪會成功。",
    tailo: "I tsò tāi-tsì tsin iōng-sim, bo̍k-kuài ē sîng-kong.",
  },
  {
    hanji: "伊用心計畫，想欲加得一寡仔財產。",
    tailo: "I iōng-sim kè-uē, siūnn-beh ke tit tsi̍t-kuá-á tsâi-sán.",
  },
  {
    hanji: "你這馬若無用功讀冊，以後就知艱苦。",
    tailo:
      "Lí tsit-má nā bô iōng-kong tha̍k-tsheh, í-āu tō tsai kan-khóo.",
  },
  {
    hanji: "伊愛共人誣賴，白白布強欲共人染甲烏。",
    tailo:
      "I ài kā lâng bû-luā, pe̍h-pe̍h pòo kiōng-beh kā lâng ní kah oo.",
  },
  {
    hanji: "投資彼款若鳥鼠仔會的公司，你毋驚錢會白白了去。",
    tailo:
      "Tâu-tsu hit khuán ná niáu-tshí-á-huē ê kong-si, lí m̄ kiann tsînn ē pe̍h-pe̍h liáu--khì.",
  },
  {
    hanji: "你欲白白看𪜶受死是無？",
    tailo: "Lí beh pe̍h-pe̍h khuànn in siū sí sī--bô?",
  },
  {
    hanji: "伊逐項代誌攏激皮皮，毋驚人共伊笑。",
    tailo:
      "I ta̍k hāng tāi-tsì lóng kik-phî-phî, m̄ kiann lâng kā i tshiò.",
  },
  {
    hanji: "這个名真生份，我毋捌聽過。",
    tailo: "Tsit ê miâ tsin senn-hūn, guá m̄ bat thiann--kuè.",
  },
  {
    hanji: "𪜶兩个冤家了後就親像生份人仝款。",
    tailo:
      "In nn̄g ê uan-ke liáu-āu tō tshin-tshiūnn senn-hūn-lâng kāng-khuán.",
  },
  {
    hanji: "查某人生囝是真危險的代誌。",
    tailo: "Tsa-bóo-lâng senn-kiánn sī tsin guî-hiám ê tāi-tsì.",
  },
  {
    hanji: "咱做人著愛有志氣，才袂予人看無目地。",
    tailo:
      "Lán tsò-lâng tio̍h-ài ū tsì-khì, tsiah bē hōo lâng khuànn bô ba̍k-tē.",
  },
  {
    hanji: "鳥仔生成會飛；人生成會行路。",
    tailo: "Tsiáu-á senn-sîng ē pue; lâng senn-sîng ē kiânn-lōo.",
  },
  {
    hanji: "𪜶兩个毋知有啥物冤仇，見擺見面就想欲拚生死。",
    tailo:
      "In nn̄g ê m̄ tsai ū siánn-mih uan-siû, kiàn-pái kìnn-bīn tō siūnn-beh piànn-senn-sí.",
  },
  {
    hanji: "伊是白肉底，按怎曝嘛曝袂烏。",
    tailo: "I sī pe̍h-bah-té, án-tsuánn pha̍k mā pha̍k bē oo.",
  },
  {
    hanji: "昨昏下晝比今仔日較生冷。",
    tailo: "Tsa-hng ē-tàu pí kin-á-ji̍t khah tshenn-líng.",
  },
  {
    hanji: "醫生叫你生冷較莫食，你閣食冰？",
    tailo: "I-sing kiò lí tshenn-líng khah mài tsia̍h, lí koh tsia̍h ping?",
  },
  {
    hanji: "今仔日的菜白汫無味，你敢是袂記得摻鹽？",
    tailo:
      "Kin-á-ji̍t ê tshài pe̍h-tsiánn-bô-bī, lí kám-sī bē-kì-tit tsham iâm?",
  },
  {
    hanji: "買票看這種白汫無味的戲真正是無彩錢。",
    tailo:
      "Bé phiò khuànn tsit tsióng pe̍h-tsiánn-bô-bī ê hì tsin-tsiànn sī bô-tshái tsînn.",
  },
  {
    hanji: "拄著代誌愛冷靜，毋通遐生狂。",
    tailo: "Tú-tio̍h tāi-tsì ài líng-tsīng, m̄-thang hiah tshenn-kông.",
  },
  {
    hanji: "目前我攏無閒通佮你見面。",
    tailo: "Bo̍k-tsiân guá lóng bô-îng thang kah lí kìnn-bīn.",
  },
  {
    hanji: "拄著這款代誌，叫𪜶規家口仔欲按怎生活落去？",
    tailo:
      "Tú-tio̍h tsit khuán tāi-tsì, kiò in kui-ke-kháu-á beh án-tsuánn sing-ua̍h--lo̍h-khì?",
  },
  {
    hanji: "阮兜的頭前有一間大瓦厝。",
    tailo: "Guán tau ê thâu-tsîng ū tsi̍t king tuā hiā-tshù.",
  },
  {
    hanji: "較早的人認為嬰仔欲號名愛根據生時日月，才號有好名。",
    tailo:
      "Khah-tsá ê lâng jīn-uî enn-á beh hō-miâ ài kin-kì senn-sî-ji̍t-gue̍h, tsiah hō ū hó miâ.",
  },
  {
    hanji: "彼个查某囡仔生做真古錐。",
    tailo: "Hit ê tsa-bóo gín-á senn-tsò tsin kóo-tsui.",
  },
  {
    hanji: "這粒梨仔甘甜閣真有湯。",
    tailo: "Tsit lia̍p lâi-á kam-tinn koh tsin ū thng.",
  },
  {
    hanji: "這間工場當咧生產新產品。",
    tailo: "Tsit king kang-tiûnn tng-teh sing-sán sin sán-phín.",
  },
  {
    hanji: "阮真久無轉去庄跤，這馬對遐真生疏。",
    tailo:
      "Guán tsin kú bô tńg-khì tsng-kha, tsit-má tuì hia tsin tshenn-soo.",
  },
  {
    hanji: "佇生理場欲成功人面愛闊。",
    tailo: "Tī sing-lí-tiûnn beh sîng-kong lâng-bīn ài khuah.",
  },
  {
    hanji: "你額頭生粒仔，愛緊抹藥仔。",
    tailo: "Lí hia̍h-thâu senn lia̍p-á, ài kín buah io̍h-á.",
  },
  {
    hanji: "伊規暝無睏，有淡薄仔目蚶。",
    tailo: "I kui mê bô khùn, ū tām-po̍h-á ba̍k-ham.",
  },
  {
    hanji: "有人知影這項物件的用途無？",
    tailo: "Ū lâng tsai-iánn tsit hāng mi̍h-kiānn ê iōng-tôo--bô?",
  },
  {
    hanji: "咱做代誌，立場著愛堅定，才袂去予人批評。",
    tailo:
      "Lán tsò tāi-tsì , li̍p-tiûnn tio̍h-ài kian-tīng, tsiah bē khì hōo lâng phue-phîng.",
  },
  {
    hanji: "彼塊餅生菇矣，毋通食！",
    tailo: "Hit tè piánn senn-koo--ah, m̄-thang tsia̍h!",
  },
  {
    hanji: "你若犯著我，我就對你無客氣！",
    tailo: "Lí nā huān-tio̍h guá, guá tō tuì lí bô kheh-khì!",
  },
  {
    hanji: "無人知影伊按呢做是有啥物用意。",
    tailo: "Bô lâng tsai-iánn i án-ne tsò sī ū siánn-mih iōng-ì.",
  },
  {
    hanji: "土雞仔用白煠的較清甜。",
    tailo: "Thóo-ke-á īng pe̍h-sa̍h--ê khah tshing-tinn.",
  },
  {
    hanji: "你是看著啥，目睭仁哪會攏袂振動？",
    tailo:
      "Lí sī khuànn-tio̍h siannh, ba̍k-tsiu-jîn ná ē lóng bē tín-tāng?",
  },
  {
    hanji: "伊目睭毛長閣翹，有夠媠。",
    tailo: "I ba̍k-tsiu-mn̂g tn̂g koh khiàu, ū-kàu suí.",
  },
  {
    hanji: "伊真𠢕講白賊話，你予伊騙去矣。",
    tailo: "I tsin gâu kóng pe̍h-tsha̍t-uē, lí hōo i phiàn--khì--ah.",
  },
  {
    hanji: "彼支刀真久無用，已經生鉎矣！",
    tailo: "Hit ki to tsin kú bô īng, í-king senn-sian--ah!",
  },
  {
    hanji: "七月七，龍眼烏，石榴必。",
    tailo: "Tshit-gue̍h tshit, lîng-gíng oo, sia̍h-liû pit.",
  },
  {
    hanji: "咱這月日的生產目標愛比頂月日的生產量增加一倍。",
    tailo:
      "Lán tsit gue̍h-ji̍t ê sing-sán bo̍k-piau ài pí tíng gue̍h-ji̍t ê sing-sán-liōng tsing-ka tsi̍t puē.",
  },
  {
    hanji: "彼个老大人喙鬚白蔥蔥。",
    tailo: "Hit ê lāu-tuā-lâng tshuì-tshiu pe̍h-tshang-tshang.",
  },
  {
    hanji: "成績無夠，袂當申請獎學金。",
    tailo: "Sîng-tsik bô-kàu, bē-tàng sin-tshíng tsióng-ha̍k-kim.",
  },
  {
    hanji: "你的申請猶閣咧審查當中。",
    tailo: "Lí ê sin-tshíng iáu-koh teh sím-tsa tang-tiong.",
  },
  {
    hanji: "我看伊逐工目頭結結，心肝嘛真艱苦。",
    tailo:
      "Guá khuànn i ta̍k-kang ba̍k-thâu kat-kat, sim-kuann mā tsin kan-khóo.",
  },
  {
    hanji: "囡仔若有出脫，我閣較艱苦嘛甘願。",
    tailo: "Gín-á nā ū tshut-thuat, guá koh-khah kan-khóo mā kam-guān.",
  },
  {
    hanji: "白鑠鑠的龍銀，啥物人看著袂佮意？",
    tailo:
      "Pe̍h-siak-siak ê liông-gîn, siánn-mih-lâng khuànn--tio̍h bē kah-ì?",
  },
  {
    hanji: "伊佮我的關係是亦師亦友。",
    tailo: "I kah guá ê kuan-hē sī i̍k su i̍k iú.",
  },
  {
    hanji: "任你按怎苦勸，伊嘛攏毋改。",
    tailo: "Jīm lí án-tsuánn khóo-khǹg, i mā lóng m̄ kái.",
  },
  {
    hanji: "彼條溝仔真狹，你一下伐就會過。",
    tailo: "Hit tiâu kau-á tsin e̍h, lí tsi̍t-ē hua̍h tō ē kuè.",
  },
  {
    hanji: "你做你大伐行，攏無欲等我！",
    tailo: "Lí tsò lí tuā hua̍h kiânn, lóng bô beh tán--guá!",
  },
  {
    hanji: "你閣行幾伐仔就會當看著公車牌仔矣。",
    tailo:
      "Lí koh kiânn--kuí-hua̍h-á tō ē-tàng khuànn-tio̍h kong-tshia-pâi-á--ah.",
  },
  {
    hanji: "伊先會失禮我就原諒伊。",
    tailo: "I sing huē-sit-lé guá tō guân-liōng--i.",
  },
  {
    hanji: "這件公文就交代予你矣。",
    tailo: "Tsit kiānn kong-bûn tō kau-tài hōo--lí--ah.",
  },
  {
    hanji: "你今仔日下晡去佗愛交代清楚。",
    tailo: "Lí kin-á-ji̍t ē-poo khì toh ài kau-tài tshing-tshó.",
  },
  {
    hanji: "你佇學校讀冊，愛聽先生的教示。",
    tailo: "Lí tī ha̍k-hāu tha̍k-tsheh, ài thiann sian-sinn ê kà-sī.",
  },
  {
    hanji: "人若是無爽快，愛去予先生看。",
    tailo: "Lâng nā-sī bô sóng-khuài, ài khì hōo sian-sinn khuànn.",
  },
  {
    hanji: "林先生真𠢕寫毛筆字。",
    tailo: "Lîm--sian-sinn tsin gâu siá môo-pit-jī.",
  },
  {
    hanji: "阮先生媽這馬猶閣真健康。",
    tailo: "Guán sian-sinn-má tsit-má iáu-koh tsin kiān-khong.",
  },
  {
    hanji: "看你遮爾兇狂，是發生啥物代誌？",
    tailo:
      "Khuànn lí tsiah-nī hiong-kông, sī huat-sing siánn-mih tāi-tsì?",
  },
  {
    hanji: "聽講伊佮阿英咧交往，敢有影？",
    tailo: "Thiann-kóng i kah A-ing teh kau-óng, kám ū-iánn?",
  },
  {
    hanji: "病院有提供伙食予病人食。",
    tailo: "Pēnn-īnn ū thê-kiong hué-si̍t hōo pēnn-lâng tsia̍h.",
  },
  {
    hanji: "𪜶兩个自從冤家了後，就無相交插矣。",
    tailo: "In nn̄g ê tsū-tsiông uan-ke liáu-āu, tō bô sio-kau-tshap--ah.",
  },
  {
    hanji: "伊想欲開店做生理，我看是無三日的好光景啦！",
    tailo:
      "I siūnn-beh khui-tiàm tsò-sing-lí, guá khuànn sī bô sann ji̍t ê hó kong-kíng--lah!",
  },
  {
    hanji: "徛佇山頂看山跤的光景，心情真快活。",
    tailo:
      "Khiā tī suann-tíng khuànn suann-kha ê kong-kíng, sim-tsîng tsin khuìnn-ua̍h.",
  },
  {
    hanji: "我全然毋知發生啥物代誌。",
    tailo: "Guá tsuân-jiân m̄ tsai huat-sing siánn-mih tāi-tsì.",
  },
  {
    hanji: "小姐，你的物件交落去矣！",
    tailo: "Sió-tsiá, lí ê mi̍h-kiānn ka-la̍uh--khì--ah!",
  },
  {
    hanji: "我的雨傘毋知佇佗位拍交落去矣？",
    tailo: "Guá ê hōo-suànn m̄ tsai tī tó-uī phah-ka-la̍uh--khì--ah?",
  },
  {
    hanji: "先輩講的話你愛加減仔聽，才袂食虧。",
    tailo:
      "Sian-puè kóng ê uē lí ài ke-kiám-á thiann, tsiah bē tsia̍h-khui.",
  },
  {
    hanji: "伊驚甲規身軀起交懍恂。",
    tailo: "I kiann kah kui-sin-khu khí ka-lún-sún.",
  },
  {
    hanji: "遮的錢是我該當出的份額。",
    tailo: "Tsia-ê tsînn sī guá kai-tong tshut ê hūn-gia̍h.",
  },
  {
    hanji: "阿公定定去彼間𥴊仔店交關。",
    tailo: "A-kong tiānn-tiānn khì hit king kám-á-tiàm kau-kuan.",
  },
  {
    hanji: "伊是老先覺，啥物代誌攏瞞伊袂過。",
    tailo: "I sī lāu sian-kak, siánn-mih tāi-tsì lóng muâ i bē kuè.",
  },
  {
    hanji: "遮的錢額共共咧有一千箍。",
    tailo: "Tsia-ê tsînn-gia̍h kiōng-kiōng--leh ū tsi̍t-tshing khoo.",
  },
  {
    hanji: "彼領衫穿無幾擺就冰起來矣。",
    tailo: "Hit niá sann tshīng bô kuí-pái tō ping--khí-lâi--ah.",
  },
  {
    hanji: "伊共花矸排做一列，予人欣賞。",
    tailo: "I kā hue-kan pâi-tsò tsi̍t lia̍t, hōo lâng him-sióng.",
  },
  {
    hanji: "今年收成䆀，只好向後冬。",
    tailo: "Kin-nî siu-sîng bái, tsí-hó ǹg āu-tang.",
  },
  {
    hanji: "𪜶兩个囝攏咧讀大學矣。",
    tailo: "In nn̄g ê kiánn lóng teh tha̍k tāi-ha̍k--ah.",
  },
  {
    hanji: "查埔囝做代誌愛有擔當。",
    tailo: "Tsa-poo-kiánn tsò tāi-tsì ài ū tam-tng.",
  },
  {
    hanji: "伊酒干焦啉一點仔囝爾爾就醉矣。",
    tailo: "I tsiú kan-na lim tsi̍t-tiám-á-kiánn niā-niā tō tsuì--ah.",
  },
  {
    hanji: "番薯大猶未在，慢且收。",
    tailo: "Han-tsî tuā iáu-buē tsāi, bān-tshiánn siu.",
  },
  {
    hanji: "人若大到在矣就免食轉骨的補藥矣。",
    tailo:
      "Lâng nā tuā kàu tsāi--ah tō bián tsia̍h tńg-kut ê póo-io̍h--ah.",
  },
  {
    hanji: "各人的物件愛顧予伊好。",
    tailo: "Kok-lâng ê mi̍h-kiānn ài kòo hōo i hó.",
  },
  {
    hanji: "伊再三聲明這件代誌佮伊無關係。",
    tailo: "I tsài-sann sing-bîng tsit kiānn tāi-tsì kah i bô kuan-hē.",
  },
  {
    hanji: "毋著都毋著矣，你就莫閣佇遐吐大氣矣。",
    tailo:
      "M̄-tio̍h to m̄-tio̍h--ah, lí tō mài koh tī hia thóo-tuā-khuì--ah.",
  },
  {
    hanji: "有的人逐擺感冒攏愛吊大筒。",
    tailo: "Ū ê lâng ta̍k-pái kám-mōo lóng ài tiàu tuā-tâng.",
  },
  {
    hanji: "伊真固執，欲叫伊回心轉意是無可能的。",
    tailo:
      "I tsin kòo-tsip, beh kiò i huê-sim-tsuán-ì sī bô khó-lîng--ê.",
  },
  {
    hanji: "簽約的時愛頓印仔才有準算。",
    tailo: "Tshiam-iok ê sî ài tǹg ìn-á tsiah ū tsún-sǹg.",
  },
  {
    hanji: "人生在世，毋免傷計較。",
    tailo: "Jîn-sing tsāi-sè, m̄-bián siunn kè-kàu.",
  },
  {
    hanji: "伊從細漢就咧做囡仔工。",
    tailo: "I tsîng sè-hàn tō teh tsò gín-á-kang.",
  },
  {
    hanji: "囡仔囝毋捌代誌，毋通磕袂著就共伊拍。",
    tailo:
      "Gín-á-kiánn m̄ bat-tāi-tsì, m̄-thang kha̍p-bē-tio̍h tō kā i phah.",
  },
  {
    hanji: "一个囡仔疕，閣足𠢕變鬼變怪。",
    tailo: "Tsi̍t ê gín-á-phí, koh tsiok gâu pìnn-kuí-pìnn-kuài.",
  },
  {
    hanji: "雖然伊遮爾大漢矣，有時陣猶是足囡仔款呢。",
    tailo:
      "Sui-jiân i tsiah-nī tuā-hàn--ah, ū-sî-tsūn iáu-sī tsiok gín-á-khuán--neh.",
  },
  {
    hanji: "這个皮包仔傷細跤，無合用。",
    tailo: "Tsit ê phuê-pau-á siunn sè kha, bô ha̍h-īng.",
  },
  {
    hanji: "在生食一粒塗豆，較贏死了拜一个豬頭。",
    tailo:
      "Tsāi-senn tsia̍h tsi̍t lia̍p thôo-tāu, khah iânn sí-liáu pài tsi̍t ê ti-thâu.",
  },
  {
    hanji: "聽伊講話的腔口，就知影伊是在地人。",
    tailo:
      "Thiann i kóng-uē ê khiunn-kháu, tō tsai-iánn i sī tsāi-tē-lâng.",
  },
  {
    hanji: "伊嗽甲真厲害，我驚伊會吐血。",
    tailo: "I sàu kah tsin lī-hāi, guá kiann i ē thòo-hueh.",
  },
  {
    hanji: "看伊寫的物件，我真正會吐血！",
    tailo: "Khuànn i siá ê mi̍h-kiānn, guá tsin-tsiànn ē thòo-hueh!",
  },
  {
    hanji: "這號話你也吐血會得出來。",
    tailo: "Tsit-lō uē lí iā thòo-hueh ē-tit tshut--lâi.",
  },
  {
    hanji: "我寫批予伊，伊攏無共我回批。",
    tailo: "Guá siá phue hōo--i, i lóng bô kā guá huê-phue.",
  },
  {
    hanji: "這擺註死予伊吊車尾考著大學，無，伊就愛去做兵矣。",
    tailo:
      "Tsit pái tsù-sí hōo i tiàu-tshia-bué khó-tio̍h tāi-ha̍k, bô, i tō ài khì tsò-ping--ah.",
  },
  {
    hanji: "聽講彼兩間公司欲合併。",
    tailo: "Thiann-kóng hit nn̄g king kong-si beh ha̍p-pìng.",
  },
  {
    hanji: "伊的囝兒序細攏誠有孝。",
    tailo: "I ê kiánn-jî sī-sè lóng tsiânn iú-hàu.",
  },
  {
    hanji: "咱明仔早起招恁同姒仔來去廟裡拜拜。",
    tailo:
      "Lán bîn-á-tsá-khí tsio lín tâng-sāi-á lâi-khì biō--lí pài-pài.",
  },
  {
    hanji: "拜二早起，我會招阮同門的做陣去。",
    tailo: "Pài-jī tsá-khí, guá ē tsio guán tâng-mn̂g--ê tsò-tīn khì.",
  },
  {
    hanji: "向前閣行幾步仔就看著矣。",
    tailo: "Hiòng-tsiân koh kiânn kuí-pōo-á tō khuànn--tio̍h--ah.",
  },
  {
    hanji: "因為落雨，我今仔日才無想欲出門。",
    tailo: "In-uī lo̍h-hōo, guá kin-á-ji̍t tsiah bô siūnn-beh tshut-mn̂g.",
  },
  {
    hanji: "阿英真好命，囝孫攏足有孝。",
    tailo: "A-ing tsin hó-miā, kiánn-sun lóng tsiok iú-hàu.",
  },
  {
    hanji: "看伊佇遐吐氣，一定是有心事。",
    tailo: "Khuànn i tī hia thóo-khuì, it-tīng sī ū sim-sū.",
  },
  {
    hanji: "聽著音樂聲，逐家就綴咧合唱。",
    tailo: "Thiann-tio̍h im-ga̍k siann, ta̍k-ke tō tuè leh ha̍p-tshiùnn.",
  },
  {
    hanji: "逐家攏同情彼个可憐的囡仔。",
    tailo: "Ta̍k-ke lóng tông-tsîng hit ê khó-liân ê gín-á.",
  },
  {
    hanji: "𪜶陳家佇這个所在真有名望。",
    tailo: "In Tân--ka tī tsit ê sóo-tsāi tsin ū bîng-bōng.",
  },
  {
    hanji: "向望你會當好好仔做人。",
    tailo: "Ǹg-bāng lí ē-tàng hó-hó-á tsò-lâng.",
  },
  {
    hanji: "伊賣的物件，價數攏真合理。",
    tailo: "I bē ê mi̍h-kiānn, kè-siàu lóng tsin ha̍p-lí.",
  },
  {
    hanji: "你吊脰嘛袂當解決問題。",
    tailo: "Lí tiàu-tāu mā bē-tàng kái-kuat būn-tê.",
  },
  {
    hanji: "你哪會遐愛錢，開喙合喙攏是錢。",
    tailo: "Lí ná ē hiah ài tsînn, khui-tshuì ha̍p-tshuì lóng sī tsînn.",
  },
  {
    hanji: "阮囝婿後個月欲去日本。",
    tailo: "Guán kiánn-sài āu kò gue̍h beh khì Ji̍t-pún.",
  },
  {
    hanji: "無錢毋通假大範，才袂予人吊猴。",
    tailo: "Bô tsînn m̄-thang ké tuā-pān, tsiah bē hōo lâng tiàu-kâu.",
  },
  {
    hanji: "𪜶兩个自小學就是同窗。",
    tailo: "In nn̄g ê tsū sió-ha̍k tō sī tông-tshong.",
  },
  {
    hanji: "伊咧問你，你攏無回答。",
    tailo: "I teh mn̄g--lí, lí lóng bô huê-tap.",
  },
  {
    hanji: "向腰共落佇塗跤的物件抾起來。",
    tailo: "Ànn-io kā lak tī thôo-kha ê mi̍h-kiānn khioh--khí-lâi.",
  },
  {
    hanji: "咱這馬散甲欲吊鼎矣，閣毋較儉一下。",
    tailo:
      "Lán tsit-má sàn kah beh tiàu-tiánn--ah, koh m̄ khah khiām--tsi̍t-ē.",
  },
  {
    hanji: "伊會按呢做到底是啥物因端？",
    tailo: "I ē án-ne tsò tàu-té sī siánn-mih in-tuann?",
  },
  {
    hanji: "無證據毋通佇遐吐憐涎。",
    tailo: "Bô tsìng-kì m̄-thang tī hia thòo-liân-siân.",
  },
  {
    hanji: "你今仔日各樣各樣，是毋是感冒矣？",
    tailo: "Lí kin-á-ji̍t koh-iūnn-koh-iūnn, sī m̄ sī kám-mōo--ah?",
  },
  {
    hanji: "這个投資案有危機佇咧。",
    tailo: "Tsit ê tâu-tsu-àn ū guî-ki tī--leh.",
  },
  {
    hanji: "伊講欲去臺北拍拚，結果煞有去無回頭。",
    tailo:
      "I kóng beh khì Tâi-pak phah-piànn, kiat-kó suah ū khì bô huê-thâu.",
  },
  {
    hanji: "你若知影毋著，這馬回頭猶未傷慢。",
    tailo: "Lí nā tsai-iánn m̄-tio̍h, tsit-má huê-thâu iáu-buē siunn bān.",
  },
  {
    hanji: "在職的人才有這項福利。",
    tailo: "Tsāi-tsit ê lâng tsiah ū tsit hāng hok-lī.",
  },
  {
    hanji: "我頂禮拜問你的問題，你當時會當回覆我？",
    tailo:
      "Guá tíng lé-pài mn̄g--lí ê būn-tê, lí tang-sî ē-tàng huê-hok--guá?",
  },
  {
    hanji: "我有寫批予伊，毋過伊攏無回覆我。",
    tailo: "Guá ū siá phue hōo--i, m̄-koh i lóng bô huê-hok--guá.",
  },
  {
    hanji: "恁彼个單位在額的有偌濟？",
    tailo: "Lín hit ê tan-uī tsāi-gia̍h--ê ū guā-tsē?",
  },
  {
    hanji: "沓沓仔粒積，年久月深，伊已經變做好額人矣。",
    tailo:
      "Ta̍uh-ta̍uh-á lia̍p-tsik, nî-kú-gue̍h-tshim, i í-king piàn-tsò hó-gia̍h-lâng--ah.",
  },
  {
    hanji: "地方的頭人攏真認真咧做代誌。",
    tailo: "Tē-hng ê thâu-lâng lóng tsin jīn-tsin teh tsò tāi-tsì.",
  },
  {
    hanji: "好天的時阮欲來去𬦰山。",
    tailo: "Hó-thinn ê sî guán beh lâi-khì peh-suann.",
  },
  {
    hanji: "我遮爾好心，煞去予伊誤會。",
    tailo: "Guá tsiah-nī hó-sim, suah khì hōo i gōo-huē.",
  },
  {
    hanji: "你有夠戇，連好歹人都分袂出來。",
    tailo: "Lí ū-kàu gōng, liân hó-pháinn lâng to hun bē tshut--lâi.",
  },
  {
    hanji: "好歹攏是家己的囝，你就看較開咧。",
    tailo:
      "Hó-pháinn lóng sī ka-kī ê kiánn, lí tō khuànn khah khui--leh.",
  },
  {
    hanji: "𪜶兩个好兄弟是穿仝一領褲大漢的。",
    tailo:
      "In nn̄g ê hó-hiann-tī sī tshīng kāng tsi̍t niá khòo tuā-hàn--ê.",
  },
  {
    hanji: "遮的果子是欲用來拜好兄弟的。",
    tailo: "Tsia-ê kué-tsí sī beh iōng-lâi pài hó-hiann-tī--ê.",
  },
  {
    hanji: "伊這个人真奸巧，你愛較細膩咧。",
    tailo: "I tsit ê lâng tsin kan-khiáu, lí ài khah sè-jī--leh.",
  },
  {
    hanji: "你做代誌著較安份咧，毋通痟貪軁雞籠。",
    tailo:
      "Lí tsò tāi-tsì tio̍h khah an-hūn--leh, m̄-thang siáu-tham nǹg ke-lam.",
  },
  {
    hanji: "好囝毋免濟，濟囝餓死爸。",
    tailo: "Hó-kiánn m̄-bián tsē, tsē kiánn gō-sí pē.",
  },
  {
    hanji: "看都好好人，哪會定定咧揣醫生？",
    tailo: "Khuànn to hó-hó-lâng, ná ē tiānn-tiānn teh tshuē i-sing?",
  },
  {
    hanji: "你若閣為非糝做，別日仔你就會無好死。",
    tailo: "Lí nā koh uî-hui-sám-tsò, pa̍t-ji̍t-á lí tō ē bô hó-sí.",
  },
  {
    hanji: "明仔載欲安床，你毋通袂記得。",
    tailo: "Bîn-á-tsài beh an-tshn̂g, lí m̄-thang bē-kì--tit.",
  },
  {
    hanji: "代誌哪會行到這款地步？",
    tailo: "Tāi-tsì ná ē kiânn kàu tsit khuán tē-pōo?",
  },
  {
    hanji: "免你多事，阮兜的代誌我家己會處理。",
    tailo: "Bián lí to-sū, guán tau ê tāi-tsì guá ka-kī ē tshú-lí.",
  },
  {
    hanji: "好佳哉有你佇咧，無我就慘矣。",
    tailo: "Hó-ka-tsài ū lí tī--leh, bô guá tō tshám--ah.",
  },
  {
    hanji: "年底欲到矣，數愛緊結結咧。",
    tailo: "Nî-té beh kàu--ah, siàu ài kín kiat-kiat--leh.",
  },
  {
    hanji: "真好空，發票著四千箍。",
    tailo: "Tsin hó-khang, huat-phiò tio̍h sì-tshing khoo.",
  },
  {
    hanji: "𪜶翁規年迵天佇外面走傱，伊只有孤單守空房。",
    tailo:
      "In ang kui-nî-thàng-thinn tī guā-bīn tsáu-tsông, i tsí-ū koo-tuann tsiú khang-pâng.",
  },
  {
    hanji: "閣過去就是別人的地界矣，咱行到遮就好。",
    tailo:
      "Koh kuè--khì tō sī pa̍t-lâng ê tē-kài--ah, lán kiânn kàu tsia tō hó.",
  },
  {
    hanji: "伊外表好看爾爾，無啥物底蒂。",
    tailo: "I guā-piáu hó-khuànn niā-niā, bô siánn-mih té-tì.",
  },
  {
    hanji: "伊若閣軟塗深掘，我就欲予伊好看。",
    tailo: "I nā koh nńg-thôo-tshim-ku̍t, guá tō beh hōo i hó-khuànn.",
  },
  {
    hanji: "彼筆錢是伊欲予你安家用的。",
    tailo: "Hit pit tsînn sī i beh hōo lí an-ka īng--ê.",
  },
  {
    hanji: "這禮拜我攏無法度安眠。",
    tailo: "Tsit lé-pài guá lóng bô-huat-tōo an-bîn.",
  },
  {
    hanji: "這張字紙頂懸有寫講你愛還偌濟錢。",
    tailo:
      "Tsit tiunn jī-tsuá tíng-kuân ū siá kóng lí ài hîng guā-tsē tsînn.",
  },
  {
    hanji: "年兜逐家咧攢欲過年攏真無閒。",
    tailo: "Nî-tau ta̍k-ke teh tshuân beh kuè-nî lóng tsin bô-îng.",
  },
  {
    hanji: "這擺尾牙的餐會予你去安排。",
    tailo: "Tsit pái bué-gê ê tshan-huē hōo lí khì an-pâi.",
  },
  {
    hanji: "伊是阮學校的地理老師。",
    tailo: "I sī guán ha̍k-hāu ê tē-lí lāu-su.",
  },
  {
    hanji: "𪜶老爸是專門咧共人看地理的。",
    tailo: "In lāu-pē sī tsuan-bûn teh kā lâng khuànn tē-lí--ê.",
  },
  {
    hanji: "這个囡仔真好喙，看著人客來，攏會共人叫。",
    tailo:
      "Tsit ê gín-á tsin hó-tshuì, khuànn-tio̍h lâng-kheh lâi, lóng ē kā lâng kiò.",
  },
  {
    hanji: "按怎共伊好喙，伊就是毋答應。",
    tailo: "Án-tsuánn kā i hó-tshuì, i tō sī m̄ tah-ìng.",
  },
  {
    hanji: "恁公司若有缺，才拜託你共我安插一下。",
    tailo:
      "Lín kong-si nā ū khueh, tsiah pài-thok lí kā guá an-tshah--tsi̍t-ē.",
  },
  {
    hanji: "無愛插伊，伊煞愈好款。",
    tailo: "Bô ài tshap--i, i suah jú hó-khuán.",
  },
  {
    hanji: "我的口座猶有淡薄仔存款。",
    tailo: "Guá ê kháu-tsō iáu-ū tām-po̍h-á tsûn-khuán.",
  },
  {
    hanji: "伊真好量，人對伊歹聲嗽，伊嘛袂抾恨。",
    tailo:
      "I tsin hó-liōng, lâng tuì i pháinn-siann-sàu, i mā bē khioh-hīn.",
  },
  {
    hanji: "你用奸雄步，我早就看出出矣。",
    tailo: "Lí iōng kan-hiông pōo, guá tsá tō khuànn-tshut-tshut--ah.",
  },
  {
    hanji: "這款傷天害理的代誌，你敢好勢做？",
    tailo: "Tsit khuán siong-thian-hāi-lí ê tāi-tsì, lí kám hó-sè tsò?",
  },
  {
    hanji: "刀對心臟揬落去，連鞭就好勢矣。",
    tailo: "To tuì sim-tsōng tu̍h--lo̍h-khì, liâm-mi tō hó-sè--ah.",
  },
  {
    hanji: "伊是好意欲共你鬥相共，結果煞予你罵。",
    tailo: "I sī hó-ì beh kā lí tàu-sann-kāng, kiat-kó suah hōo lí mē.",
  },
  {
    hanji: "我才搬來，猶未安搭好勢。",
    tailo: "Guá tsiah puann--lâi, iáu-buē an-tah hó-sè.",
  },
  {
    hanji: "暫且共伊安搭一下，賰的後擺才閣講。",
    tailo:
      "Tsiām-tshiánn kā i an-tah--tsi̍t-ē, tshun--ê āu-pái tsiah-koh kóng.",
  },
  {
    hanji: "誠久無落雨矣，圳溝內底的水嘛攏焦去矣。",
    tailo:
      "Tsiânn kú bô lo̍h-hōo--ah, tsùn-kau lāi-té ê tsuí mā lóng ta--khì--ah.",
  },
  {
    hanji: "伊的年歲較大，所以記持有較䆀啦！",
    tailo: "I ê nî-huè khah tuā, sóo-í kì-tî ū khah bái--lah!",
  },
  {
    hanji: "愈倚年節，菜市仔買物件的人就愈濟矣。",
    tailo:
      "Jú uá nî-tseh, tshài-tshī-á bé mi̍h-kiānn ê lâng tō jú tsē--ah.",
  },
  {
    hanji: "過年時仔，人攏會講幾句仔好話。",
    tailo: "Kuè-nî-sî-á, lâng lóng ē kóng kuí-kù-á hó-uē.",
  },
  {
    hanji: "我細漢的時陣蹛佇庄跤。",
    tailo: "Guá sè-hàn ê sî-tsūn tuà tī tsng-kha.",
  },
  {
    hanji: "伊尖跤幼手，叫伊做這款粗工，伊敢會堪得？",
    tailo:
      "I tsiam-kha-iù-tshiú, kiò i tsò tsit khuán tshoo-kang, i kám ē-kham--ti̍t?",
  },
  {
    hanji: "𪜶翁過身了後，伊就守寡到今。",
    tailo: "In ang kuè-sin liáu-āu, i tō tsiú-kuá kàu-tann.",
  },
  {
    hanji: "伊真正是一个好鼻獅，啥物所在有好食的伊攏揣會著。",
    tailo:
      "I tsin-tsiànn sī tsi̍t ê hó-phīnn-sai, siánn-mih sóo-tsāi ū hó-tsia̍h--ê i lóng tshuē ē tio̍h.",
  },
  {
    hanji: "伊咧起性地，你小共伊安慰一下。",
    tailo: "I teh khí-sìng-tē, lí sió kā i an-uì--tsi̍t-ē.",
  },
  {
    hanji: "序細若有孝，序大人就會感覺較安慰。",
    tailo: "Sī-sè nā iú-hàu, sī-tuā-lâng tō ē kám-kak khah an-uì.",
  },
  {
    hanji: "這陣的股市行情誠好，伊攢兩千萬，存範欲大抐一下。",
    tailo:
      "Tsit-tsūn ê kóo-tshī hâng-tsîng tsiânn hó, i tshuân nn̄g-tshing bān, tshûn-pān beh tuā lā--tsi̍t-ē.",
  },
  {
    hanji: "你較安靜咧，有人咧睏晝。",
    tailo: "Lí khah an-tsīng--leh, ū lâng teh khùn-tàu.",
  },
  {
    hanji: "這箍圍仔攏是伊的地頭，你毋通去惹伊。",
    tailo: "Tsit-khoo-uî-á lóng sī i ê tē-thâu, lí m̄-thang khì jiá--i.",
  },
  {
    hanji: "這个庄頭的人攏真好客。",
    tailo: "Tsit ê tsng-thâu ê lâng lóng tsin hònn-kheh.",
  },
  {
    hanji: "彼个查某囡仔真好禮，叫我坐佇遮。",
    tailo: "Hit ê tsa-bóo gín-á tsin hó-lé, kiò guá tsē tī tsia.",
  },
  {
    hanji: "好額人的生活佮咱是無仝款的。",
    tailo: "Hó-gia̍h-lâng ê sing-ua̍h kah lán sī bô kāng-khuán--ê.",
  },
  {
    hanji: "時機遐䆀，想欲趁錢著愛較尖鑽咧。",
    tailo:
      "Sî-ki hiah bái, siūnn-beh thàn-tsînn tio̍h-ài khah tsiam-tsǹg--leh.",
  },
  {
    hanji: "伊佮𪜶老爸生做誠成。",
    tailo: "I kah in lāu-pē senn-tsò tsiânn sîng.",
  },
  {
    hanji: "你敢會使共我鬥扛遮的米？",
    tailo: "Lí kám ē-sái kā guá tàu kng tsia-ê bí?",
  },
  {
    hanji: "你的手愛扞予伊好，才袂跋倒。",
    tailo: "Lí ê tshiú ài huānn hōo i hó, tsiah bē pua̍h-tó.",
  },
  {
    hanji: "我毋知予啥物扦著，砧砧足艱苦的。",
    tailo:
      "Guá m̄ tsai hōo siánn-mih tshuann--tio̍h, tiam-tiam tsiok kan-khóo--ê.",
  },
  {
    hanji: "食飽了後愛共桌頂收收咧。",
    tailo: "Tsia̍h-pá liáu-āu ài kā toh-tíng siu-siu--leh.",
  },
  {
    hanji: "時間猶閣真早，慢慢仔來。",
    tailo: "Sî-kan iáu-koh tsin tsá, bān-bān-á lâi.",
  },
  {
    hanji: "你敢知影這首歌的曲是啥人寫的？",
    tailo: "Lí kám tsai-iánn tsit siú kua ê khik sī siánn-lâng siá--ê?",
  },
  {
    hanji: "那讀冊那看電視，欲哪讀有冊？",
    tailo: "Ná tha̍k-tsheh ná khuànn tiān-sī, beh ná tha̍k-ū tsheh?",
  },
  {
    hanji: "有一日，我一定會成功。",
    tailo: "Ū-tsi̍t-ji̍t, guá it-tīng ē sîng-kong.",
  },
  {
    hanji: "看著伊彼个死人面，我就受氣。",
    tailo: "Khuànn-tio̍h i hit ê sí-lâng-bīn, guá tō siū-khì.",
  },
  {
    hanji: "你一个面敢若死人面，一點仔血色都無。",
    tailo:
      "Lí tsi̍t ê bīn kánn-ná sí-lâng-bīn, tsi̍t-tiám-á hueh-sik to bô.",
  },
  {
    hanji: "莫聽著無錢通提就激彼號死人款。",
    tailo:
      "Mài thiann-tio̍h bô tsînn thang the̍h tō kik hit-lō sí-lâng-khuán.",
  },
  {
    hanji: "伊就是傷膨風，代誌才會舞甲袂收山。",
    tailo:
      "I tō sī siunn phòng-hong, tāi-tsì tsiah ē bú kah bē siu-suann.",
  },
  {
    hanji: "𨑨迌遮濟工，你嘛好收心矣。",
    tailo: "Tshit-thô tsiah tsē kang, lí mā hó siu-sim--ah.",
  },
  {
    hanji: "番薯囥咧予伊收水了後，食著較甜。",
    tailo:
      "Han-tsî khǹg--leh hōo i siu-tsuí liáu-āu, tsia̍h tio̍h khah tinn.",
  },
  {
    hanji: "伊早日是牽牛車的，這馬變成大頭家。",
    tailo:
      "I tsá-ji̍t sī khan gû-tshia--ê, tsit-má piàn-sîng tuā thâu-ke.",
  },
  {
    hanji: "十月的時，差不多就會使收冬矣。",
    tailo: "Tsa̍p--gue̍h ê sî, tsha-put-to tō ē-sái siu-tang--ah.",
  },
  {
    hanji: "你真死目，物件現現佇遐，你猶看無？",
    tailo:
      "Lí tsin sí-ba̍k, mi̍h-kiānn hiān-hiān tī hia, lí iáu khuànn-bô?",
  },
  {
    hanji: "彼个歹人已經予人判死刑矣。",
    tailo: "Hit ê pháinn-lâng í-king hōo lâng phuànn sí-hîng--ah.",
  },
  {
    hanji: "你這个死囡仔，叫你顧店，你煞走出去耍！",
    tailo:
      "Lí tsit ê sí-gín-á, kiò lí kòo tiàm, lí suah tsáu tshut-khì sńg!",
  },
  {
    hanji: "你按呢死坐活食敢是辦法？",
    tailo: "Lí án-ne sí-tsē-ua̍h-tsia̍h kám-sī pān-huat?",
  },
  {
    hanji: "你代誌舞到這款地步，才予我來收尾，敢袂傷超過？",
    tailo:
      "Lí tāi-tsì bú kàu tsit khuán tē-pōo, tsiah hōo guá lâi siu-bué, kám bē siunn tshiau-kuè?",
  },
  {
    hanji: "伊是一个誠有孝的囡仔。",
    tailo: "I sī tsi̍t ê tsiânn iú-hàu ê gín-á.",
  },
  {
    hanji: "景氣䆀，生理小收束一下。",
    tailo: "Kíng-khì bái, sing-lí sió siu-sok--tsi̍t-ē.",
  },
  {
    hanji: "這件代誌我心內已經有底矣。",
    tailo: "Tsit kiānn tāi-tsì guá sim-lāi í-king ū-té--ah.",
  },
  {
    hanji: "熨衫愛熨予伊死性，才會好看。",
    tailo: "Ut sann ài ut hōo i sí-sìng, tsiah ē hó-khuànn.",
  },
  {
    hanji: "伊做代誌傷死板，袂曉通變竅。",
    tailo: "I tsò tāi-tsì siunn sí-pán, bē-hiáu thang piàn-khiàu.",
  },
  {
    hanji: "無認真，以後就毋成物。",
    tailo: "Bô jīn-tsin, í-āu tō m̄-tsiânn-mi̍h.",
  },
  {
    hanji: "阿明人誠古意，袂舞遐的有空無榫的代誌。",
    tailo:
      "A-bîng lâng tsiânn kóo-ì, bē bú hia-ê ū-khang-bô-sún ê tāi-tsì.",
  },
  {
    hanji: "早前逐家攏是用茶箍咧洗衫。",
    tailo: "Tsá-tsîng ta̍k-ke lóng sī īng tê-khoo teh sé-sann.",
  },
  {
    hanji: "欲食毋討趁，死泉連鞭焦。",
    tailo: "Beh tsia̍h m̄ thó-thàn, sí-tsuânn liâm-mi ta.",
  },
  {
    hanji: "七月半鴨仔，毋知死活。",
    tailo: "Tshit-gue̍h-puànn ah-á, m̄ tsai sí-ua̍h.",
  },
  {
    hanji: "我會當幫助你的所在真有限。",
    tailo: "Guá ē-tàng pang-tsōo--lí ê sóo-tsāi tsin iú-hān.",
  },
  {
    hanji: "伊有時仔嘛會共我鬥跤手。",
    tailo: "I ū-sî-á mā ē kā guá tàu-kha-tshiú.",
  },
  {
    hanji: "海水起落是有時有陣的。",
    tailo: "Hái-tsuí khí-lo̍h sī ū-sî-ū-tsūn--ê.",
  },
  {
    hanji: "欲借錢嘛愛有時有陣，袂使定定按呢。",
    tailo: "Beh tsioh tsînn mā ài ū-sî-ū-tsūn, bē-sái tiānn-tiānn án-ne.",
  },
  {
    hanji: "伊有時陣會來阮兜𨑨迌。",
    tailo: "I ū-sî-tsūn ē lâi guán tau tshit-thô.",
  },
  {
    hanji: "天氣咧變誠緊，早晏愛會記得疊衫。",
    tailo:
      "Thinn-khì teh piàn tsiânn kín, tsá-uànn ài ē-kì-tit tha̍h sann.",
  },
  {
    hanji: "七少年八少年就著這款死症，可憐！",
    tailo:
      "Tshit siàu-liân peh siàu-liân tō tio̍h tsit khuán sí-tsìng, khó-liân!",
  },
  {
    hanji: "伊逐工早起攏會去公園運動。",
    tailo: "I ta̍k-kang tsá-khí lóng ē khì kong-hn̂g ūn-tōng.",
  },
  {
    hanji: "早起頓愛食，才有體力。",
    tailo: "Tsá-khí-tǹg ài tsia̍h, tsiah ū thé-la̍t.",
  },
  {
    hanji: "想袂到伊會成做地方上的頭人。",
    tailo: "Siūnn-bē-kàu i ē tsiânn-tsò tē-hng-siōng ê thâu-lâng.",
  },
  {
    hanji: "伊真有情，搬去遐久矣，閣會定定來相揣。",
    tailo:
      "I tsin ū-tsîng, puann-khì hiah kú--ah, koh ē tiānn-tiānn lâi sio-tshuē.",
  },
  {
    hanji: "這个辦法有通，咱就按呢試看覓。",
    tailo: "Tsit ê pān-huat ū-thong, lán tō án-ne tshì khuànn-māi.",
  },
  {
    hanji: "藥膏抹落去粒仔就收喙矣。",
    tailo: "Io̍h-ko buah--lo̍h-khì lia̍p-á tō siu-tshuì--ah.",
  },
  {
    hanji: "伊慣勢早睏，過九點就毋通閣敲電話予伊。",
    tailo:
      "I kuàn-sì tsá-khùn, kuè káu tiám tō m̄-thang koh khà tiān-uē hōo--i.",
  },
  {
    hanji: "索仔若拍死結就真僫敨開。",
    tailo: "Soh-á nā phah sí-kat tō tsin oh tháu--khui.",
  },
  {
    hanji: "做人愛有量，才會有福報。",
    tailo: "Tsò-lâng ài ū-liōng, tsiah ē ū hok-pò.",
  },
  {
    hanji: "有閒才閣來阮兜𨑨迌。",
    tailo: "Ū-îng tsiah-koh lâi guán tau tshit-thô.",
  },
  {
    hanji: "你早暗愛會記得食藥仔。",
    tailo: "Lí tsá-àm ài ē-kì-tit tsia̍h io̍h-á.",
  },
  {
    hanji: "你免數想，人伊已經死會矣。",
    tailo: "Lí bián siàu-siūnn, lâng i í-king sí-huē--ah.",
  },
  {
    hanji: "人若有歲，身體就會開始厚毛病。",
    tailo: "Lâng nā ū-huè, sin-thé tō ē khai-sí kāu môo-pēnn.",
  },
  {
    hanji: "伊的性地真好，毋過有當時仔嘛是會掠狂。",
    tailo: "I ê sìng-tē tsin hó, m̄-koh ū-tang-sî-á mā sī ē lia̍h-kông.",
  },
  {
    hanji: "神明若有聖，愛替我做主。",
    tailo: "Sîn-bîng nā ū-siànn, ài thè guá tsò-tsú.",
  },
  {
    hanji: "頭前是死路，行袂出去。",
    tailo: "Thâu-tsîng sī sí-lōo, kiânn bē tshut--khì.",
  },
  {
    hanji: "遮的先留落來，後擺猶有路用。",
    tailo: "Tsia--ê sing lâu--lo̍h-lâi, āu-pái iáu ū-lōo-īng.",
  },
  {
    hanji: "阮兜是阮阿爸咧扞鼎灶。",
    tailo: "Guán tau sī guán a-pah teh huānn-tiánn-tsàu.",
  },
  {
    hanji: "昨日暗，阿公有託夢予我。",
    tailo: "Tso̍h--ji̍t àm, a-kong ū thok-bāng hōo--guá.",
  },
  {
    hanji: "做人愛較樸實咧，毋通傷虛華。",
    tailo: "Tsò-lâng ài khah phoh-si̍t--leh, m̄-thang siunn hi-hua.",
  },
  {
    hanji: "你若欲食毋討趁，早慢就愛做乞食。",
    tailo: "Lí nā beh tsia̍h m̄ thó-thàn, tsá-bān tō ài tsò khit-tsia̍h.",
  },
  {
    hanji: "彼个人做代誌死趖死趖，看著足袂慣勢。",
    tailo:
      "Hit ê lâng tsò tāi-tsì sí-sô-sí-sô, khuànn tio̍h tsiok bē kuàn-sì.",
  },
  {
    hanji: "所有的代誌攏是伊咧扞盤，佮我無底代。",
    tailo:
      "Sóo-ū ê tāi-tsì lóng sī i teh huānn-puânn, kah guá bô tī-tāi.",
  },
  {
    hanji: "明明是你毋著，閣欲死諍。",
    tailo: "Bîng-bîng sī lí m̄-tio̍h, koh beh sí-tsènn.",
  },
  {
    hanji: "下早仔的生理真好，我早早就收擔矣！",
    tailo: "E-tsái-á ê sing-lí tsin hó, guá tsá-tsá tō siu-tànn--ah!",
  },
  {
    hanji: "你莫看伊瘦閣薄板，其實伊誠有擋頭。",
    tailo:
      "Lí mài khuànn i sán koh po̍h-pán, kî-si̍t i tsiânn ū-tòng-thâu.",
  },
  {
    hanji: "代誌明明是你做的，你閣欲死賴人。",
    tailo: "Tāi-tsì bîng-bîng sī lí tsò--ê, lí koh beh sí-luā--lâng.",
  },
  {
    hanji: "像你按呢儉死錢，是欲按怎會好額？",
    tailo: "Tshiūnn lí án-ne khiām sí-tsînn, sī beh án-tsuánn ē hó-gia̍h?",
  },
  {
    hanji: "恁厝內是啥物人咧扞頭？",
    tailo: "Lín tshù-lāi sī siánn-mih-lâng teh huānn-thâu?",
  },
  {
    hanji: "咱做代誌愛有頭有尾，毋通虎頭鳥鼠尾。",
    tailo:
      "Lán tsò tāi-tsì ài ū-thâu-ū-bué, m̄-thang hóo thâu niáu-tshí bué.",
  },
  {
    hanji: "氣溫降低，人的血管會收縮。",
    tailo: "Khì-un kàng-kē, lâng ê hueh-kńg ē siu-sok.",
  },
  {
    hanji: "勸人做好代，較贏食早齋。",
    tailo: "Khǹg lâng tsò hó-tāi, khah iânn tsia̍h tsá-tsai.",
  },
  {
    hanji: "遐的柑仔分起來閣真有額。",
    tailo: "Hia-ê kam-á pun--khí-lâi koh tsin ū-gia̍h.",
  },
  {
    hanji: "這馬干焦賰神明猶有人咧共扛轎。",
    tailo: "Tsit-má kan-na tshun sîn-bîng iáu-ū lâng teh kā kng-kiō.",
  },
  {
    hanji: "較早若選舉伊攏共人扛轎，這擺伊欲家己出來選。",
    tailo:
      "Khah-tsá nā suán-kí i lóng kā lâng kng-kiō, tsit pái i beh ka-kī tshut-lâi suán.",
  },
  {
    hanji: "收瀾收離離，囡仔好育飼。",
    tailo: "Siu-nuā siu-lī-lī, gín-á hó-io-tshī.",
  },
  {
    hanji: "𪜶老爸講的話，伊聽袂入耳。",
    tailo: "In lāu-pē kóng ê uē, i thiann bē ji̍p-ní.",
  },
  {
    hanji: "作業凊彩聿聿咧就交出去。",
    tailo: "Tsok-gia̍p tshìn-tshái u̍t-u̍t--leh tō kau--tshut-khì.",
  },
  {
    hanji: "伊老人目看報紙看袂清楚，緊提目鏡予伊。",
    tailo:
      "I lāu-lâng-ba̍k khuànn pò-tsuá khuànn bē tshing-tshó, kín the̍h ba̍k-kiànn hōo--i.",
  },
  {
    hanji: "阿義是𪜶兄弟姊妹內面的老大。",
    tailo: "A-gī sī in hiann-tī-tsí-muē lāi-bīn ê láu-tuā.",
  },
  {
    hanji: "彼个穿烏衫的就是𪜶的老大。",
    tailo: "Hit ê tshīng oo sann--ê tō sī in ê láu-tuā.",
  },
  {
    hanji: "佇基隆有一間服侍老大公的廟。",
    tailo: "Tī Ke-lâng ū tsi̍t king ho̍k-sāi lāu-tuā-kong ê biō.",
  },
  {
    hanji: "彼个老公仔喙鬚白蔥蔥。",
    tailo: "Hit ê lāu-kong-á tshuì-tshiu pe̍h-tshang-tshang.",
  },
  {
    hanji: "你這个老不修，食遐老矣，猶閣想欲行酒家。",
    tailo:
      "Lí tsit ê lāu-put-siu, tsia̍h hiah lāu--ah, iáu-koh siūnn-beh kiânn tsiú-ka.",
  },
  {
    hanji: "你至少嘛愛共我講一聲。",
    tailo: "Lí tsì-tsió mā ài kā guá kóng--tsi̍t-siann.",
  },
  {
    hanji: "逐个人攏嘛想欲過自由的生活。",
    tailo: "Ta̍k-ê lâng lóng mā siūnn-beh kuè tsū-iû ê sing-ua̍h.",
  },
  {
    hanji: "人生所追求的就是幸福自在的生活。",
    tailo: "Jîn-sing sóo tui-kiû--ê tō sī hīng-hok tsū-tsāi ê sing-ua̍h.",
  },
  {
    hanji: "我老早就知影伊有問題。",
    tailo: "Guá láu-tsá tō tsai-iánn i ū būn-tê.",
  },
  {
    hanji: "你的面看起來一點仔血色都無。",
    tailo: "Lí ê bīn khuànn--khí-lâi tsi̍t-tiám-á hueh-sik to bô.",
  },
  {
    hanji: "彼間公司的管理百百空，莫怪做甲欲倒欲倒。",
    tailo:
      "Hit king kong-si ê kuán-lí pah-pah-khang, bo̍k-kuài tsò kah beh tó beh tó.",
  },
  {
    hanji: "這一切攏是你自作自受。",
    tailo: "Tse it-tshè lóng sī lí tsū-tsok-tsū-siū.",
  },
  {
    hanji: "是你自作孽才著受遮的苦，免怨嘆。",
    tailo:
      "Sī lí tsū-tsok-gia̍t tsiah tio̍h siū tsia-ê khóo, bián uàn-thàn.",
  },
  {
    hanji: "老的老步定，少年的較懂嚇。",
    tailo: "Lāu--ê lāu-pōo-tiānn, siàu-liân--ê khah táng-hiannh.",
  },
  {
    hanji: "為著趁一屑仔錢，老命險無去。",
    tailo: "Uī-tio̍h thàn tsi̍t-sut-á tsînn, lāu-miā hiám bô--khì.",
  },
  {
    hanji: "阮老的明仔載欲去日本。",
    tailo: "Guán lāu--ê bîn-á-tsài beh khì Ji̍t-pún.",
  },
  {
    hanji: "你就是耳空輕，才會定定予人騙。",
    tailo:
      "Lí tō sī hīnn-khang-khin, tsiah ē tiānn-tiānn hōo lâng phiàn.",
  },
  {
    hanji: "伊是行後尾門才會當佇遮食頭路。",
    tailo: "I sī kiânn-āu-bué-mn̂g tsiah ē-tàng tī tsia tsia̍h-thâu-lōo.",
  },
  {
    hanji: "新正阮欲去大姨仔𪜶兜行春。",
    tailo: "Sin-tsiann guán beh khì tuā-î-á in tau kiânn-tshun.",
  },
  {
    hanji: "𪜶今仔日去草山行春。",
    tailo: "In kin-á-ji̍t khì Tsháu-suann kiânn-tshun.",
  },
  {
    hanji: "這間行郊已經有一百冬矣！",
    tailo: "Tsit king hâng-kau í-king ū tsi̍t-pah tang--ah!",
  },
  {
    hanji: "伊放火燒人的車，上好去自首。",
    tailo: "I pàng-hué sio lâng ê tshia, siōng-hó khì tsū-siú.",
  },
  {
    hanji: "伊自修學德國話學甲足老。",
    tailo: "I tsū-siu o̍h Tik-kok-uē o̍h kah tsiok láu.",
  },
  {
    hanji: "有燒香有保庇，有食藥有行氣。",
    tailo: "Ū sio-hiunn ū pó-pì, ū tsia̍h io̍h ū kiânn-khì.",
  },
  {
    hanji: "代誌到甲這款地步矣，你猶閣老神在在。",
    tailo:
      "Tāi-tsì kàu kah tsit khuán tē-pōo--ah, lí iáu-koh lāu-sîn-tsāi-tsāi.",
  },
  {
    hanji: "這馬真濟新產品攏是自動的。",
    tailo: "Tsit-má tsin tsē sin sán-phín lóng sī tsū-tōng--ê.",
  },
  {
    hanji: "你欲駛自動車去，抑是坐火車去？",
    tailo: "Lí beh sái tsū-tōng-tshia khì, ia̍h-sī tsē hué-tshia khì?",
  },
  {
    hanji: "我逐工共恁煮飯洗衫，就敢若恁倩的老婆仔咧。",
    tailo:
      "Guá ta̍k-kang kā lín tsú pn̄g sé-sann, tō kánn-ná lín tshiànn--ê lāu-pô-á--leh.",
  },
  {
    hanji: "阿伯仔，誠久無看著矣，這馬猶閣老康健呢！",
    tailo:
      "A-peh--á, tsiânn kú bô khuànn--tio̍h--ah, tsit-má iáu-koh  lāu-khong-kiān--neh!",
  },
  {
    hanji: "食老嘛愛加減出來行徙。",
    tailo: "Tsia̍h-lāu mā ài ke-kiám tshut-lâi kiânn-suá.",
  },
  {
    hanji: "今仔日魚市的行情誠好。",
    tailo: "Kin-á-ji̍t hî-tshī ê hâng-tsîng tsiânn hó.",
  },
  {
    hanji: "伊已經臺灣全島行透透矣。",
    tailo: "I í-king Tâi-uân tsuân-tó kiânn-thàu-thàu--ah.",
  },
  {
    hanji: "你按呢講會去傷著伊的自尊心。",
    tailo: "Lí án-ne kóng ē khì siong-tio̍h i ê tsū-tsun-sim.",
  },
  {
    hanji: "伊就是傷過無聊，才會四界去揣人欲行棋。",
    tailo:
      "I tō sī siunn kuè bô-liâu, tsiah ē sì-kè khì tshuē lâng beh kiânn-kî.",
  },
  {
    hanji: "恁阿公老番顛矣，講話去去倒倒。",
    tailo: "Lín a-kong lāu-huan-tian--ah, kóng-uē khì-khì-tò-tò.",
  },
  {
    hanji: "彼个阿婆老硞硞矣，猶閣咧做生理。",
    tailo: "Hit ê a-pô lāu-khok-khok--ah, iáu-koh teh tsò-sing-lí.",
  },
  {
    hanji: "閣較艱苦嘛毋通行短路。",
    tailo: "Koh-khah kan-khóo mā m̄-thang kiânn-té-lōo.",
  },
  {
    hanji: "少年的，你著聽老歲仔苦勸。",
    tailo: "Siàu-liân--ê, lí tio̍h thiann lāu-huè-á khóo-khǹg.",
  },
  {
    hanji: "我叫是伊是肉跤仔，結果伊上贏。",
    tailo: "Guá kiò-sī i sī bah-kha-á, kiat-kó i siōng iânn.",
  },
  {
    hanji: "聽講這款藥仔會當通血路，毋知有影無？",
    tailo:
      "Thiann-kóng tsit khuán io̍h-á ē-tàng thong hueh-lōo, m̄ tsai ū-iánn--bô?",
  },
  {
    hanji: "那行路那食物件真歹看相。",
    tailo: "Ná kiânn-lōo ná tsia̍h mi̍h-kiānn tsin pháinn-khuànn-siùnn.",
  },
  {
    hanji: "抾著的發票竟然著兩百箍，我真正咧行運矣。",
    tailo:
      "Khioh--tio̍h ê huat-phiò kìng-jiân tio̍h nn̄g-pah khoo, guá tsin-tsiànn teh kiânn-ūn--ah.",
  },
  {
    hanji: "這三百箍予你做行路工！",
    tailo: "Tsit sann-pah khoo hōo lí tsò kiânn-lōo-kang!",
  },
  {
    hanji: "伊講伊後禮拜欲出國考察。",
    tailo: "I kóng i āu lé-pài beh tshut-kok khó-tshat.",
  },
  {
    hanji: "五日節家家戶戶攏食肉粽。",
    tailo: "Gōo-ji̍t-tseh ke-ke-hōo-hōo lóng tsia̍h bah-tsàng.",
  },
  {
    hanji: "你就是傷好命，才會食米毋知影米價。",
    tailo: "Lí tō sī siunn hó-miā, tsiah ē tsia̍h bí m̄ tsai-iánn bí-kè.",
  },
  {
    hanji: "這件代誌你愛好好仔考慮。",
    tailo: "Tsit kiānn tāi-tsì lí ài hó-hó-á khó-lī.",
  },
  {
    hanji: "𪜶搬厝了後，就罕得閣來遮行踏。",
    tailo: "In puann-tshù liáu-āu, tō hán-tit koh lâi tsia kiânn-ta̍h.",
  },
  {
    hanji: "這个公園有誠濟人咧行踏。",
    tailo: "Tsit ê kong-hn̂g ū tsiânn tsē lâng teh kiânn-ta̍h.",
  },
  {
    hanji: "人所交的朋友會影響伊的行踏。",
    tailo: "Lâng sóo kau ê pîng-iú ē íng-hióng i ê kiânn-ta̍h.",
  },
  {
    hanji: "你莫佮彼个有翁的佇遐咧米糕𣻸。",
    tailo: "Lí mài kah hit ê ū-ang--ê tī hia teh bí-ko-siûnn.",
  },
  {
    hanji: "我自頭就知影伊會平安轉來。",
    tailo: "Guá tsū-thâu tō tsai-iánn i ē pîng-an tńg--lâi.",
  },
  {
    hanji: "你的血壓傷懸，愛控制一下。",
    tailo: "Lí ê hueh-ap siunn kuân, ài khòng-tsè--tsi̍t-ē.",
  },
  {
    hanji: "你大學出業就緊去揣頭路，毋通蹛厝裡做米蟲。",
    tailo:
      "Lí tāi-ha̍k tshut-gia̍p tō kín khì tshuē thâu-lōo, m̄-thang tuà tshù--lí tsò bí-thâng.",
  },
  {
    hanji: "米價會起甲遮懸，攏嘛遐的米蟲咧變鬼變怪。",
    tailo:
      "Bí-kè ē khí kah tsiah kuân, lóng mā hia-ê bí-thâng teh pìnn-kuí-pìnn-kuài.",
  },
  {
    hanji: "彼幾个竹雞仔佇巷仔口相拍。",
    tailo: "Hit kuí ê tik-ke-á tī hāng-á-kháu sio-phah.",
  },
  {
    hanji: "你真正咧老顛倒矣，昨昏的代誌今仔日就袂記得。",
    tailo:
      "Lí tsin-tsiànn teh lāu-thian-tho̍h--ah, tsa-hng ê tāi-tsì kin-á-ji̍t tō bē-kì--tit.",
  },
  {
    hanji: "你家己做毋著，愛有自覺。",
    tailo: "Lí ka-kī tsò m̄-tio̍h, ài ū tsū-kak.",
  },
  {
    hanji: "若無經過這擺的考驗，你永遠袂出脫。",
    tailo:
      "Nā bô king-kuè tsit pái ê khó-giām, lí íng-uán bē tshut-thuat.",
  },
  {
    hanji: "食無三把蕹菜，就想欲上西天。",
    tailo: "Tsia̍h bô sann pé ìng-tshài, tō siūnn-beh tsiūnn se-thian.",
  },
  {
    hanji: "西醫的效果比中醫較緊。",
    tailo: "Se-i ê hāu-kó pí tiong-i khah kín.",
  },
  {
    hanji: "你串講攏講遐的，無效啦！",
    tailo: "Lí tshuàn-kóng lóng kóng hia--ê, bô-hāu--lah!",
  },
  {
    hanji: "伊真久無納貸款，厝煞予銀行估去。",
    tailo: "I tsin kú bô la̍p tāi-khuán, tshù suah hōo gîn-hâng kóo--khì.",
  },
  {
    hanji: "這領衫皺皺，你共熨較伸咧。",
    tailo: "Tsit niá sann jiâu-jiâu, lí kā ut khah tshun--leh.",
  },
  {
    hanji: "伊定定佇半暝仔𬦰起來讀冊。",
    tailo: "I tiānn-tiānn tī puànn-mê-á peh khí-lâi tha̍k-tsheh.",
  },
  {
    hanji: "伊都無愛你，你何乜苦一直等伊？",
    tailo: "I to bô ài--lí, lí hô-mí-khóo it-ti̍t tán--i?",
  },
  {
    hanji: "阿公的阿兄咱愛叫伊「伯公」。",
    tailo: "A-kong ê a-hiann lán ài kiò i “peh-kong”.",
  },
  {
    hanji: "伊坐了𤺪矣，佇遐伸勻。",
    tailo: "I tsē liáu siān--ah, tī hia tshun-ûn.",
  },
  {
    hanji: "做人愛知影伸勼，才袂得失人。",
    tailo: "Tsò-lâng ài tsai-iánn tshun-kiu, tsiah bē tik-sit--lâng.",
  },
  {
    hanji: "逐遍去阮阿舅𪜶兜，攏會紮伴手。",
    tailo: "Ta̍k-piàn khì guán a-kū in tau, lóng ē tsah phuānn-tshiú.",
  },
  {
    hanji: "伊逐擺轉來干焦會曉伸手討錢爾爾。",
    tailo:
      "I ta̍k-pái tńg--lâi kan-na ē-hiáu tshun-tshiú thó-tsînn niā-niā.",
  },
  {
    hanji: "牧師的話佇我的心內發生作用。",
    tailo: "Bo̍k-su ê uē tī guá ê sim-lāi huat-sing tsok-iōng.",
  },
  {
    hanji: "伊講這句話，有另外的作用。",
    tailo: "I kóng tsit kù uē, ū līng-guā ê tsok-iōng.",
  },
  {
    hanji: "伊較早咧作田，這馬咧做生理。",
    tailo: "I khah-tsá teh tsoh-tshân, tsit-má teh tsò-sing-lí.",
  },
  {
    hanji: "你這張批的住址寫毋著矣。",
    tailo: "Lí tsit tiunn phue ê tsū-tsí siá m̄-tio̍h--ah.",
  },
  {
    hanji: "你已經三十捅歲矣，閣遐愛作怪。",
    tailo: "Lí í-king sann-tsa̍p-thóng huè--ah, koh hiah ài tsok-kuài.",
  },
  {
    hanji: "彼間厝無人蹛會久，我看是有妖魔咧作怪。",
    tailo:
      "Hit king tshù bô lâng tuà ē kú, guá khuànn sī ū iau-môo teh tsok-kuài.",
  },
  {
    hanji: "你若是有心欲做，啥物困難攏會當克服。",
    tailo:
      "Lí nā-sī ū-sim beh tsò, siánn-mih khùn-lân lóng ē-tàng khik-ho̍k.",
  },
  {
    hanji: "這台車大人都騎袂行矣，何況是一个囡仔。",
    tailo:
      "Tsit tâi tshia tuā-lâng to khiâ bē kiânn--ah, hô-hóng sī tsi̍t ê gín-á.",
  },
  {
    hanji: "你莫不時共恁老母伸長手。",
    tailo: "Lí mài put-sî kā lín lāu-bú tshun-tn̂g-tshiú.",
  },
  {
    hanji: "伊衫仔褲穿甲清氣閣伶俐。",
    tailo: "I sann-á-khòo tshīng kah tshing-khì koh líng-lī.",
  },
  {
    hanji: "伊人伶俐，外交閣好，所以朋友誠濟。",
    tailo: "I lâng líng-lī, guā-kau koh hó, sóo-í pîng-iú tsiânn tsē.",
  },
  {
    hanji: "伊誠愛畫圖，所以作品袂少。",
    tailo: "I tsiânn ài uē-tôo, sóo-í tsok-phín bē tsió.",
  },
  {
    hanji: "我唱歌，伊彈琴替我伴奏。",
    tailo: "Guá tshiùnn-kua, i tuânn-khîm thè guá phuānn-tsàu.",
  },
  {
    hanji: "這領衫真媠，但是我無佮意。",
    tailo: "Tsit niá sann tsin suí, tān-sī guá bô kah-ì.",
  },
  {
    hanji: "伊拍拚幾若年矣，仝款無啥物作為。",
    tailo: "I phah-piànn kuí-nā nî--ah, kāng-khuán bô siánn-mih tsok-uî.",
  },
  {
    hanji: "伊是一个真出名的作家。",
    tailo: "I sī tsi̍t ê tsin tshut-miâ ê tsok-ka.",
  },
  {
    hanji: "門開開，冷氣對外面吹入來。",
    tailo: "Mn̂g khui-khui, líng-khì tuì guā-bīn tshue--ji̍p-lâi.",
  },
  {
    hanji: "恁兩个千萬毋通串通害人。",
    tailo: "Lín nn̄g ê tshian-bān m̄-thang tshuàn-thong hāi--lâng.",
  },
  {
    hanji: "我估價這項物件差不多一千箍。",
    tailo: "Guá kóo-kè tsit hāng mi̍h-kiānn tsha-put-to tsi̍t-tshing khoo.",
  },
  {
    hanji: "工課若無做煞，免數想欲食暗頓。",
    tailo: "Khang-khuè nā bô tsò-suah, bián siàu-siūnn beh tsia̍h àm-tǹg.",
  },
  {
    hanji: "感情的代誌，袂當計較啥物人較克虧。",
    tailo:
      "Kám-tsîng ê tāi-tsì, bē-tàng kè-kàu siánn-mih-lâng khah khik-khui.",
  },
  {
    hanji: "伊規个家伙攏予人拐了了，實在有夠克虧。",
    tailo:
      "I kui-ê ke-hué lóng hōo lâng kuái-liáu-liáu, si̍t-tsāi ū-kàu khik-khui.",
  },
  {
    hanji: "伊彼个人串講都無好話。",
    tailo: "I hit ê lâng tshuàn-kóng to bô hó-uē.",
  },
  {
    hanji: "伊食到六十外歲猶閣咧作穡。",
    tailo: "I tsia̍h kàu la̍k-tsa̍p-guā huè iáu-koh teh tsoh-sit.",
  },
  {
    hanji: "這馬的作穡人攏用機械咧種作。",
    tailo: "Tsit-má ê tsoh-sit-lâng lóng īng ki-hāi teh tsìng-tsoh.",
  },
  {
    hanji: "你無做毋著，免驚人投！",
    tailo: "Lí bô tsò m̄-tio̍h, bián kiann lâng tâu!",
  },
  {
    hanji: "𪜶老爸放予伊的財產，伊無幾年就刜了了矣。",
    tailo:
      "In lāu-pē pàng hōo--i ê tsâi-sán, i bô kuí nî tō phut-liáu-liáu--ah.",
  },
  {
    hanji: "伊無細膩去予刀仔刣著。",
    tailo: "I bô-sè-jī khì hōo to-á thâi--tio̍h.",
  },
  {
    hanji: "一个死翁的查某人閣含兩个囡仔，日子無好過。",
    tailo:
      "Tsi̍t ê sí ang ê tsa-bóo-lâng koh kânn nn̄g ê gín-á, ji̍t-tsí bô hó-kuè.",
  },
  {
    hanji: "外口是啥物人的車咧吭吭叫？",
    tailo: "Guā-kháu sī siánn-mih-lâng ê tshia teh khngh-khngh-kiò?",
  },
  {
    hanji: "門吭一聲，逐家驚一趒。",
    tailo: "Mn̂g khōng tsi̍t siann, ta̍k-ke kiann tsi̍t tiô.",
  },
  {
    hanji: "頭毛洗好愛吹予焦，才袂感冒。",
    tailo: "Thâu-mn̂g sé-hó ài tshue hōo ta, tsiah bē kám-mōo.",
  },
  {
    hanji: "愛努力拍拚，才會出頭天。",
    tailo: "Ài lóo-li̍k phah-piànn, tsiah ē tshut-thâu-thinn.",
  },
  {
    hanji: "頭家，這个傷舊，我欲換別个。",
    tailo: "Thâu-ke, tsit ê siunn kū, guá beh uānn pa̍t-ê.",
  },
  {
    hanji: "今仔日我無閒，別日才去看你。",
    tailo: "Kin-á-ji̍t guá bô-îng, pa̍t-ji̍t tsiah khì khuànn--lí.",
  },
  {
    hanji: "伊真𠢕煎卵，卵包煎甲足媠的。",
    tailo: "I tsin gâu tsian nn̄g, nn̄g-pau tsian kah tsiok suí--ê.",
  },
  {
    hanji: "伊共人刣死，予人判刑。",
    tailo: "I kā lâng thâi--sí, hōo lâng phuànn-hîng.",
  },
  {
    hanji: "你若是有委屈就愛講出來，千萬毋通吞忍。",
    tailo:
      "Lí nā-sī ū uí-khut tō ài kóng--tshut-lâi, tshian-bān m̄-thang thun-lún.",
  },
  {
    hanji: "𪜶兩翁某定定咧吵抐。",
    tailo: "In nn̄g ang-bóo tiānn-tiānn teh tshá-lā.",
  },
  {
    hanji: "法院的判決無公平，伊欲閣上訴。",
    tailo: "Huat-īnn ê phuànn-kuat bô kong-pênn, i beh koh siōng-sòo.",
  },
  {
    hanji: "頭家吩咐我去分店收錢。",
    tailo: "Thâu-ke huan-hù guá khì hun-tiàm siu tsînn.",
  },
  {
    hanji: "若欲買啥，你就吩咐我。",
    tailo: "Nā beh bé siannh, lí tō huan-hù--guá.",
  },
  {
    hanji: "伊去餅店吩咐講欲愛麵龜。",
    tailo: "I khì piánn-tiàm huan-hù kóng beh ài mī-ku.",
  },
  {
    hanji: "昨暝狗母毋知按怎一直吹狗螺。",
    tailo: "Tsa-mê káu-bó m̄ tsai án-tsuánn it-ti̍t tshue-káu-lê.",
  },
  {
    hanji: "你莫按呢逐工吵家抐宅。",
    tailo: "Lí mài án-ne ta̍k-kang tshá-ke-lā-the̍h.",
  },
  {
    hanji: "你就是貪人的利息，才會予人倒數。",
    tailo: "Lí tō sī tham lâng ê lī-sik, tsiah ē hōo lâng tó-siàu.",
  },
  {
    hanji: "伊聽著消息，即時就趕轉去矣。",
    tailo: "I thiann-tio̍h siau-sit, tsik-sî tō kuánn--tńg-khì--ah.",
  },
  {
    hanji: "我這是半賣半相送，無啥物利純。",
    tailo: "Guá tse sī puànn bē puànn sio-sàng, bô siánn-mih lī-sûn.",
  },
  {
    hanji: "頭家，這敢猶閣有別款的？",
    tailo: "Thâu-ke, tse kám iáu-koh ū pa̍t-khuán--ê?",
  },
  {
    hanji: "我無愛食排骨飯，有別項通食無？",
    tailo: "Guá bô ài tsia̍h pâi-kut pn̄g, ū pa̍t-hāng thang tsia̍h--bô?",
  },
  {
    hanji: "我聽講別搭的價數比遮較俗。",
    tailo: "Guá thiann-kóng pa̍t-tah ê kè-siàu pí tsia khah sio̍k.",
  },
  {
    hanji: "你若無坐好，等一下就會吭跤翹。",
    tailo: "Lí nā bô tsē hó, tán--tsi̍t-ē tō ē khōng-kha-khiàu.",
  },
  {
    hanji: "這擺的劫數恐驚會逃袂過。",
    tailo: "Tsit pái ê kiap-sòo khióng-kiann ē tô bē kuè.",
  },
  {
    hanji: "是好是䆀，攏愛靠你家己去判斷。",
    tailo: "Sī hó sī bái, lóng ài khò lí ka-kī khì phuànn-tuàn.",
  },
  {
    hanji: "阮頭家會用刣雞教猴的方式管理部下，予人感覺無啥爽快。",
    tailo:
      "Guán thâu-ke ē īng thâi-ke-kà-kâu ê hong-sik kuán-lí pōo-hā, hōo lâng kám-kak bô siánn sóng-khuài.",
  },
  {
    hanji: "伊四界烏白講我，我欲告伊。",
    tailo: "I sì-kè oo-pe̍h kóng--guá, guá beh kò--i.",
  },
  {
    hanji: "牛奶是袂囥得，你愛緊啉予伊了。",
    tailo: "Gû-ling sī bē-khǹg--tit, lí ài kín lim hōo i liáu.",
  },
  {
    hanji: "伊拍破別人的瓷仔，愛用錢坐。",
    tailo: "I phah-phuà pa̍t-lâng ê huî-á, ài īng tsînn tshē.",
  },
  {
    hanji: "遐有一个坎仔，你愛細膩。",
    tailo: "Hia ū tsi̍t ê khám-á, lí ài sè-jī.",
  },
  {
    hanji: "無人共窟仔坉平，行路會足危險的。",
    tailo: "Bô lâng kā khut-á thūn-pênn, kiânn-lōo ē tsiok guî-hiám--ê.",
  },
  {
    hanji: "這間戲院有千外个坐位。",
    tailo: "Tsit king hì-īnn ū tshing-guā ê tsē-uī.",
  },
  {
    hanji: "伊的人生，坎坎坷坷，講起來話頭長啦！",
    tailo:
      "I ê jîn-sing, khám-khám-khia̍t-khia̍t, kóng--khí-lâi uē-thâu tn̂g--lah!",
  },
  {
    hanji: "學師仔上驚拄著師傅偷囥步。",
    tailo: "O̍h sai-á siōng kiann tú-tio̍h sai-hū thau khǹg-pōo.",
  },
  {
    hanji: "伊𬦰山的時陣，無細膩跋落去坑崁。",
    tailo: "I peh-suann ê sî-tsūn, bô-sè-jī pua̍h lo̍h-khì khenn-khàm.",
  },
  {
    hanji: "七點才坐桌，這陣去傷早。",
    tailo: "Tshit tiám tsiah tsē-toh, tsit-tsūn khì siunn tsá.",
  },
  {
    hanji: "代誌到這个坎站，我嘛無法度矣。",
    tailo: "Tāi-tsì kàu tsit ê khám-tsām, guá mā bô-huat-tōo--ah.",
  },
  {
    hanji: "這水猶未坐清，毋通燃來啉。",
    tailo: "Tse tsuí iáu-buē tsē-tshing, m̄-thang hiânn-lâi lim.",
  },
  {
    hanji: "伊無注意煞跋落坑溝底。",
    tailo: "I bô tsù-ì suah pua̍h-lo̍h khenn-kau-té.",
  },
  {
    hanji: "伊今仔坐監轉來爾爾，當咧揣頭路。",
    tailo: "I tann-á tsē-kann tńg--lâi niā-niā, tng-teh tshuē thâu-lōo.",
  },
  {
    hanji: "伊欠人錢，煞叫𪜶老母去坐數。",
    tailo: "I khiàm lâng tsînn, suah kiò in lāu-bú khì tshē-siàu.",
  },
  {
    hanji: "伊當咧困難，你就小共伊鬥相共一下。",
    tailo: "I tng-teh khùn-lân, lí tō sió kā i tàu-sann-kāng--tsi̍t-ē.",
  },
  {
    hanji: "交考試單仔進前愛巡巡咧。",
    tailo: "Kau khó-tshì-tuann-á tsìn-tsîng ài sûn-sûn--leh.",
  },
  {
    hanji: "伊下早仔去予屜仔挾著尾二指，這馬閣猶腫腫。",
    tailo:
      "I e-tsái-á khì hōo thuah-á gia̍p-tio̍h bué-jī-tsáinn, tsit-má koh iáu tsíng-tsíng.",
  },
  {
    hanji: "伊頭先講好，尾手閣講無愛。",
    tailo: "I thâu-sing kóng hó, bué-tshiú koh kóng bô ài.",
  },
  {
    hanji: "食尾牙面憂憂，食頭牙撚喙鬚。",
    tailo: "Tsia̍h bué-gê bīn iu-iu, tsia̍h thâu-gê lián tshuì-tshiu.",
  },
  {
    hanji: "伊頭仔講欲去，尾仔煞反悔。",
    tailo: "I thâu-á kóng beh khì, bué-á suah huán-hué.",
  },
  {
    hanji: "伊的女朋友生做像尪仔面遐媠。",
    tailo: "I ê lú-pîng-iú senn-tsò tshiūnn ang-á-bīn hiah suí.",
  },
  {
    hanji: "較早的囡仔愛耍尪仔標。",
    tailo: "Khah-tsá ê gín-á ài sńg ang-á-phiau.",
  },
  {
    hanji: "這件代誌，伊完全毋知。",
    tailo: "Tsit kiānn tāi-tsì, i uân-tsuân m̄ tsai.",
  },
  {
    hanji: "你交代的代誌，我已經完成矣。",
    tailo: "Lí kau-tài ê tāi-tsì, guá í-king uân-sîng--ah.",
  },
  {
    hanji: "孝男、孝女愛分開徛佇兩爿。",
    tailo: "Hàu-lâm, hàu-lí ài hun-khui khiā tī nn̄g-pîng.",
  },
  {
    hanji: "伊傷慢來，干焦會當坐佇尾後。",
    tailo: "I siunn bān lâi, kan-na ē-tàng tsē tī bué-āu.",
  },
  {
    hanji: "伊定定予人當做宋盼的。",
    tailo: "I tiānn-tiānn hōo lâng tòng-tsò sòng-phàn--ê.",
  },
  {
    hanji: "想袂到會變做這个局面！",
    tailo: "Siūnn-bē-kàu ē piàn-tsò tsit ê kio̍k-bīn!",
  },
  {
    hanji: "伊跋倒頓龜去傷著尾胴骨。",
    tailo: "I pua̍h-tó tǹg-ku khì siong-tio̍h bué-tâng-kut.",
  },
  {
    hanji: "妗婆雖然真老矣，精神猶真好。",
    tailo: "Kīm-pô sui-jiân tsin lāu--ah, tsing-sîn iáu tsin hó.",
  },
  {
    hanji: "彼箍屁窒仔上𠢕歕雞胿，莫插伊。",
    tailo: "Hit khoo phuì-that-á siōng gâu pûn-ke-kui, mài tshap--i.",
  },
  {
    hanji: "徛佇尾溜彼个，你敢捌伊？",
    tailo: "Khiā tī bué-liu hit ê, lí kám bat--i?",
  },
  {
    hanji: "代誌交予伊處理穩妥當的。",
    tailo: "Tāi-tsì kau hōo i tshú-lí ún thò-tòng--ê.",
  },
  {
    hanji: "你今仔日妝甲遮妖嬌，是欲去佗位？",
    tailo: "Lí kin-á-ji̍t tsng kah tsiah iau-kiau, sī beh khì tó-uī?",
  },
  {
    hanji: "尾幫車十二點發，愛較緊咧。",
    tailo: "Bué-pang-tshia tsa̍p-jī tiám huat, ài khah kín--leh.",
  },
  {
    hanji: "拍賣頭幾工鬧熱滾滾，到尾聲，人客賰無幾个。",
    tailo:
      "Phah-bē thâu kuí kang lāu-jia̍t-kún-kún, kàu bué-siann, lâng-kheh tshun bô kuí ê.",
  },
  {
    hanji: "曝棉被的時陣愛先弄弄咧。",
    tailo: "Pha̍k mî-phuē ê sî-tsūn ài sing lāng-lāng--leh.",
  },
  {
    hanji: "彼个鳳陽婆誠𠢕扭尻川仔花。",
    tailo: "Hit ê Hōng-iông-pô tsiânn gâu ngiú kha-tshng-á-hue.",
  },
  {
    hanji: "囡仔驚生份，共老母的衫仔尾扱牢牢！",
    tailo: "Gín-á kiann-senn-hūn, kā lāu-bú ê sann-á-bué khi̍p-tiâu-tiâu!",
  },
  {
    hanji: "伊跋倒矣，緊共伊扶起來。",
    tailo: "I pua̍h-tó--ah, kín kā i hû--khí-lâi.",
  },
  {
    hanji: "伊的性敢若阿斗，予人袂扶得。",
    tailo: "I ê sìng kánn-ná A-táu, hōo lâng bē-hû--tit.",
  },
  {
    hanji: "伊上𠢕共頭家扶𡳞脬。",
    tailo: "I siōng gâu kā thâu-ke phôo-lān-pha.",
  },
  {
    hanji: "咱做序細毋通予序大人操煩。",
    tailo: "Lán tsò sī-sè m̄-thang hōo sī-tuā-lâng tshau-huân.",
  },
  {
    hanji: "求神明庇佑咱全家平安。",
    tailo: "Kiû sîn-bîng pì-iū lán tsuân-ke pîng-an.",
  },
  {
    hanji: "伊會忌床，逐擺出國旅行攏睏袂去。",
    tailo: "I ē khī-tshn̂g, ta̍k-pái tshut-kok lí-hîng lóng khùn bē khì.",
  },
  {
    hanji: "用雞湯來煮魚敢會扴味？",
    tailo: "Īng ke-thng lâi tsú hî kám ē ke̍h-bī?",
  },
  {
    hanji: "彼个人歹心行，上愛弄狗相咬。",
    tailo: "Hit ê lâng pháinn-sim-hīng, siōng ài lōng-káu-sio-kā.",
  },
  {
    hanji: "你小忍耐一下，連鞭就好矣。",
    tailo: "Lí sió jím-nāi--tsi̍t-ē, liâm-mi tō hó--ah.",
  },
  {
    hanji: "你的頭毛澹澹，去弄風弄弄咧，較快焦。",
    tailo:
      "Lí ê thâu-mn̂g tâm-tâm, khì lāng-hong lāng-lāng--leh, khah khuài ta.",
  },
  {
    hanji: "身軀洗了隨出去弄風會去寒著。",
    tailo: "Sin-khu sé-liáu suî tshut-khì lāng-hong ē khì kuânn--tio̍h.",
  },
  {
    hanji: "伊這个人上𠢕共人扶挺。",
    tailo: "I tsit ê lâng siōng gâu kā lâng phôo-thánn.",
  },
  {
    hanji: "你小扶挺一下，我來共固定予在。",
    tailo: "Lí sió phôo-thánn--tsi̍t-ē, guá lâi kā kòo-tīng hōo tsāi.",
  },
  {
    hanji: "伊這馬佇你的公司食頭路，請你加共伊扶挺一下。",
    tailo:
      "I tsit-má tī lí ê kong-si tsia̍h-thâu-lōo, tshiánn lí ke kā i phôo-thánn--tsi̍t-ē.",
  },
  {
    hanji: "伊這个人就是戇直，袂曉看人的目色扮笑面。",
    tailo:
      "I tsit ê lâng tō sī gōng-ti̍t, bē-hiáu khuànn lâng ê ba̍k-sik pān-tshiò-bīn.",
  },
  {
    hanji: "有啥物款的序大就有啥物款的序細。",
    tailo: "Ū siánn-mih khuán ê sī-tuā tō ū siánn-mih khuán ê sī-sè.",
  },
  {
    hanji: "破病的人閣毋知欲忌喙，你實在真害。",
    tailo:
      "Phuà-pēnn ê lâng koh m̄ tsai beh khī-tshuì, lí si̍t-tsāi tsin hāi.",
  },
  {
    hanji: "阿明真𠢕弄喙花，真濟人予伊騙甲戇戇踅。",
    tailo:
      "A-bîng tsin gâu lāng-tshuì-hue, tsin tsē lâng hōo i phiàn kah gōng-gōng se̍h.",
  },
  {
    hanji: "伊彼个人誠歹扭搦，你家己愛有心理準備。",
    tailo:
      "I hit ê lâng tsiânn pháinn-liú-la̍k, lí ka-kī ài ū sim-lí tsún-pī.",
  },
  {
    hanji: "等咧喜酒食煞，𪜶彼陣好朋友欲去弄新娘。",
    tailo:
      "Tán--leh hí-tsiú tsia̍h-suah, in hit tīn hó-pîng-iú beh khì lāng-sin-niû.",
  },
  {
    hanji: "有一把工夫就免煩惱食穿。",
    tailo: "Ū tsi̍t pé kang-hu tō bián huân-ló tsia̍h-tshīng.",
  },
  {
    hanji: "菜去抐抐咧，無，會臭火焦。",
    tailo: "Tshài khì lā-lā--leh, bô, ē tshàu-hué-ta.",
  },
  {
    hanji: "你若莫佇遐抐，𪜶就袂冤家！",
    tailo: "Lí nā mài tī hia lā, in tō bē uan-ke!",
  },
  {
    hanji: "米落甲規塗跤，趕緊抔起來。",
    tailo: "Bí lak kah kui thôo-kha, kuánn-kín put--khí-lâi.",
  },
  {
    hanji: "遮的批信是欲寄去美國的。",
    tailo: "Tsia-ê phue-sìn sī beh kià-khì Bí-kok--ê.",
  },
  {
    hanji: "你欲啉咖啡抑是欲啉茶？",
    tailo: "Lí beh lim ka-pi ia̍h-sī beh lim tê?",
  },
  {
    hanji: "提出較好的條件對方就會投降。",
    tailo: "Thê-tshut khah hó ê tiâu-kiānn tuì-hong tō ē tâu-hâng.",
  },
  {
    hanji: "等頭家批准就開始施工。",
    tailo: "Tán thâu-ke phue-tsún tō khai-sí si-kang.",
  },
  {
    hanji: "電影內底的抓耙仔攏無好尾。",
    tailo: "Tiān-iánn lāi-té ê jiàu-pê-á lóng bô hó-bué.",
  },
  {
    hanji: "伊改酒了後，人加真有精神。",
    tailo: "I kái-tsiú liáu-āu, lâng ke tsin ū tsing-sîn.",
  },
  {
    hanji: "生理無好，規氣改途好啦！",
    tailo: "Sing-lí bô hó, kui-khì kái-tôo hó--lah!",
  },
  {
    hanji: "趁放假去𨑨迌會當改換心情。",
    tailo: "Thàn pàng-ká khì tshit-thô ē-tàng kái-uānn sim-tsîng.",
  },
  {
    hanji: "這批機器著先改裝，才會當配合新的規格。",
    tailo:
      "Tsit phue ki-khì tio̍h sing kái-tsong, tsiah ē-tàng phuè-ha̍p sin ê kui-keh.",
  },
  {
    hanji: "你的文章寫了真好，會使去投稿矣。",
    tailo: "Lí ê bûn-tsiong siá liáu tsin hó, ē-sái khì tâu-kó--ah.",
  },
  {
    hanji: "伊去臺北投靠𪜶阿姊。",
    tailo: "I khì Tâi-pak tâu-khò in a-tsí.",
  },
  {
    hanji: "我佮伊講話講了真投機。",
    tailo: "Guá kah i kóng-uē kóng liáu tsin tâu-ki.",
  },
  {
    hanji: "伊攏靠投機生理咧趁錢。",
    tailo: "I lóng khò tâu-ki sing-lí teh thàn-tsînn.",
  },
  {
    hanji: "伊是咧變啥把戲，予人看攏無。",
    tailo: "I sī teh pìnn siánn pá-hì, hōo lâng khuànn lóng bô.",
  },
  {
    hanji: "為著身體健康，你上好改薰。",
    tailo: "Uī-tio̍h sin-thé kiān-khong, lí siōng-hó kái-hun.",
  },
  {
    hanji: "員工受害，走去揣頭家抗議。",
    tailo: "Uân-kang siū-hāi, tsáu-khì tshuē thâu-ke khòng-gī.",
  },
  {
    hanji: "每一个學生學期尾攏愛交一篇報告。",
    tailo: "Muí tsi̍t ê ha̍k-sing ha̍k-kî-bué lóng ài kau tsi̍t phinn pò-kò.",
  },
  {
    hanji: "這塊餅予你，你若無愛就汰。",
    tailo: "Tsit tè piánn hōo--lí, lí nā bô ài tō thài.",
  },
  {
    hanji: "學語言愛有環境，汰久自然就會。",
    tailo: "O̍h gí-giân ài ū khuân-kíng, thuā kú tsū-jiân tō ē.",
  },
  {
    hanji: "你愛共這塊桌布小沐一下仔水，才來拭桌頂。",
    tailo:
      "Lí ài kā tsit tè toh-pòo sió bak tsi̍t-ē-á tsuí, tsiah lâi tshit toh-tíng.",
  },
  {
    hanji: "彼隻船仔沕落去水底矣。",
    tailo: "Hit tsiah tsûn-á bi̍t lo̍h-khì tsuí-té--ah.",
  },
  {
    hanji: "自從離開故鄉，每日思念爸母。",
    tailo: "Tsū-tsiông lī-khui kòo-hiong, muí-ji̍t su-liām pē-bú.",
  },
  {
    hanji: "遮的物件垃圾，你莫來沐手。",
    tailo: "Tsia-ê mi̍h-kiānn lah-sap, lí mài lâi bak-tshiú.",
  },
  {
    hanji: "彼款代誌你毋通去沐手。",
    tailo: "Hit khuán tāi-tsì lí m̄-thang khì bak-tshiú.",
  },
  {
    hanji: "塗跤愛沖水才洗會清氣。",
    tailo: "Thôo-kha ài tshiâng-tsuí tsiah sé ē tshing-khì.",
  },
  {
    hanji: "你按呢亂講，毋驚會去沖犯著神明？",
    tailo:
      "Lí án-ne luān-kóng, m̄ kiann ē khì tshiong-huān-tio̍h sîn-bîng?",
  },
  {
    hanji: "公司每年攏有發獎金予伊。",
    tailo: "Kong-si muí-nî lóng ū huat tsióng-kim hōo--i.",
  },
  {
    hanji: "米洗無清氣的款，飯食著沙沙。",
    tailo: "Bí sé bô tshing-khì ê khuán, pn̄g tsia̍h tio̍h sua-sua.",
  },
  {
    hanji: "這塊桌仔摸著沙沙，愛拭拭咧。",
    tailo: "Tsit tè toh-á bong tio̍h sua-sua, ài tshit-tshit--leh.",
  },
  {
    hanji: "我看著有人佇水底沐沐泅。",
    tailo: "Guá khuànn-tio̍h ū lâng tī tsuí-té bo̍k-bo̍k-siû.",
  },
  {
    hanji: "伊做伊走，放我佇遮沐沐泅。",
    tailo: "I tsò i tsáu, pàng guá tī tsia bo̍k-bo̍k-siû.",
  },
  {
    hanji: "水坐清了後，塗沙攏沉底矣。",
    tailo: "Tsuí tsē-tshing liáu-āu, thôo-sua lóng tîm-té--ah.",
  },
  {
    hanji: "阿爸今仔日去菜園仔沃肥。",
    tailo: "A-pah kin-á-ji̍t khì tshài-hn̂g-á ak-puî.",
  },
  {
    hanji: "我無佇咧這段時間，你愛會記得沃花。",
    tailo: "Guá bô tī--leh tsit tuānn sî-kan, lí ài ē-kì-tit ak-hue.",
  },
  {
    hanji: "欲落大雨矣，咱愛緊離開沙埔。",
    tailo: "Beh lo̍h tuā-hōo--ah, lán ài kín lī-khui sua-poo.",
  },
  {
    hanji: "伊做人真豪爽，袂沙屑。",
    tailo: "I tsò-lâng tsin hô-sóng, bē sua-sap.",
  },
  {
    hanji: "這款代誌求神問佛嘛無效。",
    tailo: "Tsit khuán tāi-tsì kiû-sîn-mn̄g-pu̍t mā bô-hāu.",
  },
  {
    hanji: "好佳哉有你替我求情，若無，我就慘矣。",
    tailo: "Hó-ka-tsài ū lí thè guá kiû-tsîng, nā-bô, guá tō tshám--ah.",
  },
  {
    hanji: "伊拄仔睏醒，目睭猶沙微沙微。",
    tailo: "I tú-á khùn-tshénn, ba̍k-tsiu iáu sa-bui-sa-bui.",
  },
  {
    hanji: "𪜶兜的灶跤摒甲足清氣！",
    tailo: "In tau ê tsàu-kha piànn kah tsiok tshing-khì!",
  },
  {
    hanji: "士林夜市仔敢若阮兜的灶跤咧！",
    tailo: "Sū-lîm iā-tshī-á kánn-ná guán tau ê tsàu-kha--leh!",
  },
  {
    hanji: "你想咱愛用啥物步數來解決這个問題？",
    tailo:
      "Lí siūnn lán ài īng siánn-mih pōo-sòo lâi kái-kuat tsit ê būn-tê?",
  },
  {
    hanji: "我欲步輦來去公園𨑨迌，你欲鬥陣來去無？",
    tailo:
      "Guá beh pōo-lián lâi-khì kong-hn̂g tshit-thô, lí beh tàu-tīn lâi-khì--bô?",
  },
  {
    hanji: "我無紮雨傘，規身軀攏沃澹去。",
    tailo: "Guá bô tsah hōo-suànn, kui-sin-khu lóng ak-tâm--khì.",
  },
  {
    hanji: "結婚了後，你嘛毋通予家庭束縛來放棄理想。",
    tailo:
      "Kiat-hun liáu-āu, lí mā m̄-thang hōo ka-tîng sok-pa̍k lâi hòng-khì lí-sióng.",
  },
  {
    hanji: "昨暗落大雨，阿英𪜶兜做水災。",
    tailo: "Tsa-àm lo̍h tuā-hōo, A-ing in tau tsò-tsuí-tsai.",
  },
  {
    hanji: "我的指頭仔去予糊仔黏牢咧。",
    tailo: "Guá ê tsíng-thâu-á khì hōo kôo-á liâm-tiâu--leh.",
  },
  {
    hanji: "薰食牢咧毋好，你著愛改。",
    tailo: "Hun tsia̍h-tiâu--leh m̄ hó, lí tio̍h-ài kái.",
  },
  {
    hanji: "阮小弟的風吹牢佇樹仔頂提袂落來。",
    tailo:
      "Guán sió-tī ê hong-tshue tiâu tī tshiū-á-tíng the̍h bē lo̍h--lâi.",
  },
  {
    hanji: "好矣！好矣！莫閣會矣！",
    tailo: "Hó--ah! Hó--ah! Mài koh huē--ah!",
  },
  {
    hanji: "你今仔日哪會遮爾仔罕行？",
    tailo: "Lí kin-á-ji̍t ná ē tsiah-nī-á hán-kiânn?",
  },
  {
    hanji: "男子漢大丈夫，我若講會到就做會到。",
    tailo: "Lâm-tsú-hàn tāi-tiōng-hu, guá nā kóng ē kàu tō tsò ē kàu.",
  },
  {
    hanji: "這間學校是公立的抑是私立的？",
    tailo: "Tsit king ha̍k-hāu sī kong-li̍p--ê ia̍h-sī su-li̍p--ê?",
  },
  {
    hanji: "爸母育囝真辛苦，咱大漢了後愛有孝爸母。",
    tailo:
      "Pē-bú io-kiánn tsin sin-khóo, lán tuā-hàn liáu-āu ài iú-hàu pē-bú.",
  },
  {
    hanji: "育囡仔毋是一件簡單的代誌。",
    tailo: "Io gín-á m̄ sī tsi̍t kiānn kán-tan ê tāi-tsì.",
  },
  {
    hanji: "真罕行，你今仔日哪有閒通來？",
    tailo: "Tsin hán-kiânn, lí kin-á-ji̍t ná ū-îng thang lâi?",
  },
  {
    hanji: "我藏佇衫仔櫥的私奇去予阮某搜著。",
    tailo:
      "Guá tshàng tī sann-á-tû ê sai-khia khì hōo guán bóo tshiau--tio̍h.",
  },
  {
    hanji: "阿美定定佮我講私奇話。",
    tailo: "A-bí tiānn-tiānn kah guá kóng sai-khia-uē.",
  },
  {
    hanji: "教囡仔用秀梳仔無一定有效。",
    tailo: "Kà gín-á īng siù-se-á bô-it-tīng ū-hāu.",
  },
  {
    hanji: "你罕得來，加坐一時仔。",
    tailo: "Lí hán-tit lâi, ke tsē--tsi̍t-sî-á.",
  },
  {
    hanji: "食甲肚脹無健康，食七、八分飽就好。",
    tailo:
      "Tsia̍h kah tóo-tiòng bô kiān-khong, tsia̍h tshit, peh hun pá tō hó.",
  },
  {
    hanji: "洗身軀的時肚臍嘛愛洗予清氣。",
    tailo: "Sé-sin-khu ê sî tōo-tsâi mā ài sé hōo tshing-khì.",
  },
  {
    hanji: "我見去揣伊伊見無佇咧。",
    tailo: "Guá kiàn khì tshuē--i i kiàn bô tī--leh.",
  },
  {
    hanji: "阮兜門跤口囥一堆磚仔角。",
    tailo: "Guán tau mn̂g-kha-kháu khǹg tsi̍t tui tsng-á-kak.",
  },
  {
    hanji: "伊足足講一點鐘的電話。",
    tailo: "I tsiok-tsiok kóng tsi̍t tiám-tsing ê tiān-uē.",
  },
  {
    hanji: "伊干焦一身人爾爾，無長半項。",
    tailo: "I kan-na tsi̍t sian lâng niā-niā, bô tióng puànn hāng.",
  },
  {
    hanji: "遮是走山了後才變成按呢。",
    tailo: "Tsia sī tsáu-suann liáu-āu tsiah piàn-sîng án-ne.",
  },
  {
    hanji: "咱做人著愛憑良心，毋通做失德的代誌。",
    tailo:
      "Lán tsò-lâng tio̍h-ài pîn liông-sim, m̄-thang tsò sit-tik ê tāi-tsì.",
  },
  {
    hanji: "車手愛扞予伊好，才袂跋倒。",
    tailo: "Tshia-tshiú ài huānn hōo i hó, tsiah bē pua̍h-tó.",
  },
  {
    hanji: "伊逐工透早攏愛食包仔配豆奶。",
    tailo: "I ta̍k-kang thàu-tsá lóng ài tsia̍h pau-á phuè tāu-ling.",
  },
  {
    hanji: "你毋通為著人有好的物件就赤目。",
    tailo: "Lí m̄-thang uī-tio̍h lâng ū hó ê mi̍h-kiānn tō tshiah-ba̍k.",
  },
  {
    hanji: "伊四十歲矣，身材閣保持甲真好。",
    tailo: "I sì-tsa̍p huè--ah, sin-tsâi koh pó-tshî kah tsin hó.",
  },
  {
    hanji: "𪜶走私毒品去予警察掠著。",
    tailo: "In tsáu-su to̍k-phín khì hōo kíng-tshat lia̍h--tio̍h.",
  },
  {
    hanji: "這罐咖啡囥傷久，已經走味去矣。",
    tailo: "Tsit kuàn ka-pi khǹg siunn kú, í-king tsáu-bī--khì--ah.",
  },
  {
    hanji: "伊去予大水流去，揣無身屍。",
    tailo: "I khì hōo tuā-tsuí lâu--khì, tshuē-bô sin-si.",
  },
  {
    hanji: "彼間厝已經予人拆甲無身屍啦！",
    tailo: "Hit king tshù í-king hōo lâng thiah kah bô sin-si--lah!",
  },
  {
    hanji: "彼幾箱物件囥佇車後斗就好矣。",
    tailo: "Hit kuí siunn mi̍h-kiānn khǹg tī tshia-āu-táu tō hó--ah.",
  },
  {
    hanji: "見若拄著王的，伊攏會請我食飯。",
    tailo: "Kiàn-nā tú-tio̍h Ông--ê, i lóng ē tshiánn guá tsia̍h-pn̄g.",
  },
  {
    hanji: "初見面就予伊請，你敢袂歹勢？",
    tailo: "Tshoo kìnn-bīn tō hōo i tshiánn, lí kám bē pháinn-sè?",
  },
  {
    hanji: "我見面就講伊袂佮咱合股。",
    tailo: "Guá kìnn-bīn tō kóng i bē kah lán ha̍p-kóo.",
  },
  {
    hanji: "彼个外國人講華語定定會走音。",
    tailo: "Hit ê guā-kok-lâng kóng Huâ-gí tiānn-tiānn ē tsáu-im.",
  },
  {
    hanji: "你去叫彼个走桌的閣捾兩罐麥仔酒來！",
    tailo:
      "Lí khì kiò hit ê tsáu-toh--ê koh kuānn nn̄g kuàn be̍h-á-tsiú lâi!",
  },
  {
    hanji: "伊見笑轉受氣，講話才會大細聲。",
    tailo: "I kiàn-siàu tńg siū-khì, kóng-uē tsiah ē tuā-sè-siann.",
  },
  {
    hanji: "這種見笑代以後毋通閣發生。",
    tailo: "Tsit tsióng kiàn-siàu-tāi í-āu m̄-thang koh huat-sing.",
  },
  {
    hanji: "這陣我當咧無閒，走袂開跤。",
    tailo: "Tsit-tsūn guá tng-teh bô-îng, tsáu-bē-khui-kha.",
  },
  {
    hanji: "水雄雄淹起來，想欲走嘛走袂離。",
    tailo: "Tsuí hiông-hiông im--khí-lâi, siūnn-beh tsáu mā tsáu-bē-lī.",
  },
  {
    hanji: "我這久無閒，袂走閃得。",
    tailo: "Guá tsit-kú bô-îng, bē-tsáu-siám--tit.",
  },
  {
    hanji: "有的歌手自細漢就四界去走唱。",
    tailo: "Ū ê kua-tshiú tsū sè-hàn tō sì-kè khì tsáu-tshiùnn.",
  },
  {
    hanji: "這間店的頭家欲倩兩个辛勞。",
    tailo: "Tsit king tiàm ê thâu-ke beh tshiànn nn̄g ê sin-lô.",
  },
  {
    hanji: "伊一直咧走揣當年失散去的查某囝。",
    tailo:
      "I it-ti̍t teh tsáu-tshuē tong-nî sit-suànn--khì ê tsa-bóo-kiánn.",
  },
  {
    hanji: "伊言詞少，無愛發表意見。",
    tailo: "I giân-sû tsió, bô ài huat-piáu ì-kiàn.",
  },
  {
    hanji: "這角勢有真濟人種番麥。",
    tailo: "Tsit kak-sì ū tsin tsē lâng tsìng huan-be̍h.",
  },
  {
    hanji: "伊為𪜶囝的代誌四界走傱。",
    tailo: "I uī in kiánn ê tāi-tsì sì-kè tsáu-tsông.",
  },
  {
    hanji: "欲看病千萬毋通揣赤跤仙仔。",
    tailo: "Beh khuànn-pēnn tshian-bān m̄-thang tshuē tshiah-kha-sian-á.",
  },
  {
    hanji: "佇社會上走跳，目色愛金。",
    tailo: "Tī siā-huē-siōng tsáu-thiàu, ba̍k-sik ài kim.",
  },
  {
    hanji: "這台機器用久走精去矣。",
    tailo: "Tsit tâi ki-khì īng kú tsáu-tsing--khì--ah.",
  },
  {
    hanji: "以早的人攏提豆餅咧飼豬。",
    tailo: "Í-tsá ê lâng lóng the̍h tāu-piánn teh tshī ti.",
  },
  {
    hanji: "每一个人攏有言論自由。",
    tailo: "Muí tsi̍t ê lâng lóng ū giân-lūn tsū-iû.",
  },
  {
    hanji: "伊出車禍挵斷一齒角齒。",
    tailo: "I tshut-tshia-hō lòng-tn̄g tsi̍t khí kak-khí.",
  },
  {
    hanji: "鋟鋟嚵，紅龜包豆餡。公仔食，婆仔罵。公仔攑扁擔，婆仔喝毋敢。",
    tailo:
      "Tshím-tshím-tshànn, âng-ku pau tāu-ānn. Kong--á tsia̍h, pô--á mā. Kong--á gia̍h pín-tann, pô--á huah m̄ kánn.",
  },
  {
    hanji: "借問一下，我欲去車頭愛按佗位行？",
    tailo: "Tsioh-mn̄g--tsi̍t-ē, guá beh khì tshia-thâu ài àn tó-uī kiânn?",
  },
  {
    hanji: "這台計程車的車頭去予卡車挵甲凹落去。",
    tailo:
      "Tsit tâi kè-thîng-tshia ê tshia-thâu khì hōo khah-tshia lòng kah nah--lo̍h-khì.",
  },
  {
    hanji: "見擺你都按呢講，見擺攏做袂好勢。",
    tailo: "Kiàn-pái lí to án-ne kóng, kiàn-pái lóng tsò bē hó-sè.",
  },
  {
    hanji: "伊身懸較矮人，講話顛倒較大聲。",
    tailo: "I sin-kuân khah é--lâng, kóng-uē tian-tò khah tuā-siann.",
  },
  {
    hanji: "彼堵壁足垃圾，你毋通並佇遐。",
    tailo: "Hit tóo piah tsiok lah-sap, lí m̄-thang phīng tī hia.",
  },
  {
    hanji: "頭家！佮兩枝蔥仔好無？",
    tailo: "Thâu-ke! Kah nn̄g ki tshang-á hó--bô?",
  },
  {
    hanji: "免趕緊，沓沓仔來就好。",
    tailo: "Bián kuánn-kín, ta̍uh-ta̍uh-á lâi tō hó.",
  },
  {
    hanji: "照咱人的例，冬節愛挲圓仔。",
    tailo: "Tsiàu lán-lâng ê lē, tang-tseh ài so înn-á.",
  },
  {
    hanji: "阿達仔是一个佬仔，你毋通予伊騙去。",
    tailo: "A-ta̍t-á sī tsi̍t ê láu-á, lí m̄-thang hōo i phiàn--khì.",
  },
  {
    hanji: "我佮伊已經真久無來去矣，毋知影伊的情形。",
    tailo:
      "Guá kah i í-king tsin kú bô lâi-khì--ah, m̄ tsai-iánn i ê tsîng-hîng.",
  },
  {
    hanji: "物件就是你提的，莫佇遐咧佯生啦！",
    tailo: "Mi̍h-kiānn tō sī lí the̍h--ê, mài tī hia teh tènn-tshenn--lah!",
  },
  {
    hanji: "小旦上𠢕共人使目尾。",
    tailo: "Sió-tuànn siōng gâu kā lâng sái-ba̍k-bué.",
  },
  {
    hanji: "我共你使目尾，你攏無共我看。",
    tailo: "Guá kā lí sái-ba̍k-bué, lí lóng bô kā guá khuànn.",
  },
  {
    hanji: "我看伊定定共你使目箭，無的確是對你有意思。",
    tailo:
      "Guá khuànn i tiānn-tiānn kā lí sái-ba̍k-tsìnn, bô-tik-khak sī tuì lí ū ì-sù.",
  },
  {
    hanji: "我共伊使目箭，伊就恬去矣。",
    tailo: "Guá kā i sái-ba̍k-tsìnn, i tō tiām--khì--ah.",
  },
  {
    hanji: "𪜶翁仔某會冤家攏是你咧使弄。",
    tailo: "In ang-á-bóo ē uan-ke lóng sī lí teh sái-lōng.",
  },
  {
    hanji: "伊規年迵天攏佇美國佮臺灣來來去去。",
    tailo:
      "I kui-nî-thàng-thinn lóng tī Bí-kok kah Tâi-uân lâi-lâi-khì-khì.",
  },
  {
    hanji: "伊定定使性地，所以逐家攏無愛佮伊做伙。",
    tailo:
      "I tiānn-tiānn sái-sìng-tē, sóo-í ta̍k-ke lóng bô ài kah i tsò-hué.",
  },
  {
    hanji: "佳哉你有紮雨傘，無，咱就愛沃雨矣。",
    tailo: "Ka-tsài lí ū tsah hōo-suànn, bô, lán tō ài ak-hōo--ah.",
  },
  {
    hanji: "事後才來後悔就袂赴矣。",
    tailo: "Sū-āu tsiah lâi hiō-hué tō bē-hù--ah.",
  },
  {
    hanji: "伊彼个人萬項代誌攏愛人侍候。",
    tailo: "I hit ê lâng bān-hāng tāi-tsì lóng ài lâng sū-hāu.",
  },
  {
    hanji: "日本料理我較食都袂佮喙。",
    tailo: "Ji̍t-pún liāu-lí guá khah tsia̍h to bē kah-tshuì.",
  },
  {
    hanji: "𪜶兩人的佳期就定佇十月初六。",
    tailo: "In nn̄g lâng ê ka-kî tō tīng tī tsa̍p-gue̍h tshe-la̍k.",
  },
  {
    hanji: "老大人規日坐佇厝內，毋出去佮人開講，會一直侗戇去。",
    tailo:
      "Lāu-tuā-lâng kui-ji̍t tsē tī tshù-lāi, m̄ tshut-khì kah lâng khai-káng, ē it-ti̍t tòng-gōng--khì.",
  },
  {
    hanji: "伊用湯匙仔刮頷頸，講是咧掠痧！",
    tailo: "I īng thng-sî-á kueh ām-kún, kóng sī teh lia̍h-sua!",
  },
  {
    hanji: "阮逐擺對遐行過，攏會予樹枝刮著。",
    tailo:
      "Guán ta̍k-pái tuì hia kiânn--kuè, lóng ē hōo tshiū-ki kueh--tio̍h.",
  },
  {
    hanji: "趕緊共你跤底的塗沙刮刮咧！",
    tailo: "Kuánn-kín kā lí kha-té ê thôo-sua khe-khe--leh!",
  },
  {
    hanji: "咱著愛協力共代誌做予好。",
    tailo: "Lán tio̍h-ài hia̍p-li̍k kā tāi-tsì tsò hōo hó.",
  },
  {
    hanji: "伊講的話其中有一寡問題。",
    tailo: "I kóng ê uē kî-tiong ū tsi̍t-kuá būn-tê.",
  },
  {
    hanji: "這粒西瓜到分矣，真甜真好食。",
    tailo: "Tsit lia̍p si-kue kàu-hun--ah, tsin tinn tsin hó-tsia̍h.",
  },
  {
    hanji: "你來寫批囊，其他的代誌我來處理。",
    tailo: "Lí lâi siá phue-lông, kî-thann ê tāi-tsì guá lâi tshú-lí.",
  },
  {
    hanji: "毋通買彼種兩光的產品。",
    tailo: "M̄-thang bé hit tsióng lióng-kong ê sán-phín.",
  },
  {
    hanji: "請你來警察局協同警方辦案。",
    tailo: "Tshiánn lí lâi kíng-tshat-kio̍k hia̍p-tông kíng-hong pān-àn.",
  },
  {
    hanji: "氣到地矣煞共桌仔反掉。",
    tailo: "Khì--kàu-tè--ah suah kā toh-á píng-tiāu.",
  },
  {
    hanji: "火車閣十分鐘就會到位矣。",
    tailo: "Hué-tshia koh tsa̍p hun-tsing tō ē kàu-uī--ah.",
  },
  {
    hanji: "𪜶兩个毋是親兄弟，是叔伯的。",
    tailo: "In nn̄g ê m̄ sī tshin-hiann-tī, sī tsik-peh--ê.",
  },
  {
    hanji: "初見面，請你多多指教。",
    tailo: "Tshoo-kìnn-bīn, tshiánn lí to-to tsí-kàu.",
  },
  {
    hanji: "我初初佮伊熟似的時，伊拄高中出業。",
    tailo:
      "Guá tshoo-tshoo kah i si̍k-sāi ê sî, i tú ko-tiong tshut-gia̍p.",
  },
  {
    hanji: "惹熊惹虎，毋通惹著刺查某。",
    tailo: "Jiá hîm jiá hóo, m̄-thang jiá-tio̍h tshiah-tsa-bóo.",
  },
  {
    hanji: "拋荒的土地發足濟刺查某。",
    tailo: "Pha-hng ê thóo-tē huat tsiok tsē tshiah-tsa-bóo.",
  },
  {
    hanji: "我拄仔對田裡轉來，規身軀足刺疫的！",
    tailo:
      "Guá tú-á tuì tshân--lí tńg--lâi, kui-sin-khu tsiok tshiah-ia̍h--ê!",
  },
  {
    hanji: "這種卸面皮的代誌千萬毋通做。",
    tailo: "Tsit tsióng sià-bīn-phuê ê tāi-tsì tshian-bān m̄-thang tsò.",
  },
  {
    hanji: "話會使好好仔講，毋免按呢刺耙耙。",
    tailo: "Uē ē-sái hó-hó-á kóng, m̄-bián án-ne tshiah-pê-pê.",
  },
  {
    hanji: "你是𤆬頭的，袂使卸責任。",
    tailo: "Lí sī tshuā-thâu--ê, bē-sái sià-tsik-jīm.",
  },
  {
    hanji: "彼間百貨公司咧卸貨底。",
    tailo: "Hit king pah-huè kong-si teh sià-huè-té.",
  },
  {
    hanji: "你送遮爾大的禮，我受當袂起。",
    tailo: "Lí sàng tsiah-nī tuā ê lé, guá siū-tong-bē-khí.",
  },
  {
    hanji: "其實，這攏是伊替我做的。",
    tailo: "Kî-si̍t, tse lóng sī i thè guá tsò--ê.",
  },
  {
    hanji: "騎機車無戴安全帽仔會予警察取締。",
    tailo: "Khiâ ki-tshia bô tì an-tsuân-bō-á ē hōo kíng-tshat tshú-tè.",
  },
  {
    hanji: "茶鈷咧呻矣，你緊去共火關起來。",
    tailo: "Tê-kóo teh tshan--ah, lí kín khì kā hué kuainn--khí-lâi.",
  },
  {
    hanji: "和平是多數人追求的目標。",
    tailo: "Hô-pîng sī to-sòo lâng tui-kiû ê bo̍k-piau.",
  },
  {
    hanji: "啥物好食物，食甲咂咂叫？",
    tailo: "Siánn-mih hó-tsia̍h mi̍h, tsia̍h kah tsa̍p-tsa̍p-kiò?",
  },
  {
    hanji: "你規暝呿呿嗽，哪會無愛去予先生看？",
    tailo:
      "Lí kui-mê khuh-khuh-sàu, ná ē bô ài khì hōo sian-sinn khuànn?",
  },
  {
    hanji: "這條線你愛共伊固定予伊好。",
    tailo: "Tsit tiâu suànn lí ài kā i kòo-tīng hōo i hó.",
  },
  {
    hanji: "有固定的頭路生活才會安定。",
    tailo: "Ū kòo-tīng ê thâu-lōo sing-ua̍h tsiah ē an-tīng.",
  },
  {
    hanji: "竹篙愛攑坦直才會得入去。",
    tailo: "Tik-ko ài gia̍h thán-ti̍t tsiah ē-tit ji̍p--khì.",
  },
  {
    hanji: "你一直共我呵咾，我會歹勢。",
    tailo: "Lí it-ti̍t kā guá o-ló, guá ē pháinn-sè.",
  },
  {
    hanji: "逐家先品予伊好，等咧欲耍的時毋通呸面。",
    tailo:
      "Ta̍k-ke sing phín hōo i hó, tán--leh beh sńg ê sî m̄-thang phuì-bīn.",
  },
  {
    hanji: "煮菜摻味素粉較有氣味。",
    tailo: "Tsú tshài tsham bī-sòo-hún khah ū khì-bī.",
  },
  {
    hanji: "阿仁誠固執，攏無欲聽別人的意見。",
    tailo: "A-jîn tsiânn kòo-tsip, lóng bô beh thiann pa̍t-lâng ê ì-kiàn.",
  },
  {
    hanji: "杉箍囥坦徛若倒落來會撼著人。",
    tailo: "Sam-khoo khǹg thán-khiā nā tó--lo̍h-lâi ē hám-tio̍h lâng.",
  },
  {
    hanji: "伊佇公媽頭前咒誓後擺袂閣去跋矣。",
    tailo:
      "I tī kong-má thâu-tsîng tsiù-tsuā āu-pái bē koh khì pua̍h--ah.",
  },
  {
    hanji: "你欲睏就睏予好勢，毋通按呢睏坦橫。",
    tailo:
      "Lí beh khùn tō khùn hōo hó-sè, m̄-thang án-ne khùn thán-huâinn.",
  },
  {
    hanji: "伊不時咒讖別人，無欲檢討家己。",
    tailo: "I put-sî tsiù-tshàm pa̍t-lâng, bô beh kiám-thó ka-kī.",
  },
  {
    hanji: "伊定定共人咒讖甲真歹聽。",
    tailo: "I tiānn-tiānn kā lâng tsiù-tshàm kah tsin pháinn-thiann.",
  },
  {
    hanji: "伊呼籲逐家注意社會問題。",
    tailo: "I hoo-io̍k ta̍k-ke tsù-ì siā-huē būn-tê.",
  },
  {
    hanji: "我會按呢做嘛是姑不而將。",
    tailo: "Guá ē án-ne tsò mā sī koo-put-jî-tsiong.",
  },
  {
    hanji: "這馬囡仔的𨑨迌物攏真奇巧。",
    tailo: "Tsit-má gín-á ê tshit-thô-mi̍h lóng tsin kî-khá.",
  },
  {
    hanji: "伊委任代書共伊辦過戶。",
    tailo: "I uí-jīm tāi-su kā i pān kuè-hōo.",
  },
  {
    hanji: "總統委任伊做大使派往聯合國。",
    tailo: "Tsóng-thóng uí-jīm i tsò tāi-sài phài óng Liân-ha̍p-kok.",
  },
  {
    hanji: "你這个垃圾鬼，一軀衫穿規禮拜攏無欲洗。",
    tailo:
      "Lí tsit ê lah-sap-kuí, tsi̍t su sann tshīng kui lé-pài lóng bô beh sé.",
  },
  {
    hanji: "物件落佇塗跤閣抾起來食，有夠垃圾鬼。",
    tailo:
      "Mi̍h-kiānn lak tī thôo-kha koh khioh khí-lâi tsia̍h, ū-kàu lah-sap-kuí.",
  },
  {
    hanji: "阮兩个人是姑表的，毋是姨表的。",
    tailo: "Guán nn̄g ê lâng sī koo-piáu--ê, m̄ sī î-piáu--ê.",
  },
  {
    hanji: "有一个媠姑娘徛佇路邊等車。",
    tailo: "Ū tsi̍t ê suí koo-niû khiā tī lōo-pinn tán tshia.",
  },
  {
    hanji: "我姑情伊規半工矣，伊毋答應就是毋答應。",
    tailo:
      "Guá koo-tsiânn i kui-puànn-kang--ah, i m̄ tah-ìng tō sī m̄ tah-ìng.",
  },
  {
    hanji: "我是做夜勤的，日時會當歇睏。",
    tailo: "Guá sī tsò iā-khîn--ê, ji̍t--sî ē-tàng hioh-khùn.",
  },
  {
    hanji: "伊徛定定毋敢烏白振動。",
    tailo: "I khiā tiānn-tiānn m̄ kánn oo-pe̍h tín-tāng.",
  },
  {
    hanji: "做人佮做代誌攏愛有定性，毋通反起反倒。",
    tailo:
      "Tsò-lâng kah tsò tāi-tsì lóng ài ū tīng-sìng, m̄-thang huán-khí-huán-tó.",
  },
  {
    hanji: "猶未定性的塗尪仔袂使摸。",
    tailo: "Iáu-buē tīng-sìng ê thôo-ang-á bē-sái bong.",
  },
  {
    hanji: "無你佇我的身邊，我加誠孤單。",
    tailo: "Bô lí tī guá ê sin-pinn, guá ke tsiânn koo-tuann.",
  },
  {
    hanji: "伊的個性較孤獨，無咧佮人相交插。",
    tailo: "I ê kò-sìng khah koo-ta̍k, bô teh kah lâng sio-kau-tshap.",
  },
  {
    hanji: "咧欲過年矣，店頭的貨排甲實捅捅！",
    tailo:
      "Teh-beh kuè-nî--ah, tiàm-thâu ê huè pâi kah tsa̍t-thóng-thóng!",
  },
  {
    hanji: "你這个病是袂當延傷久。",
    tailo: "Lí tsit ê pēnn sī bē-tàng tshiân siunn kú.",
  },
  {
    hanji: "人伊毋是刁持的，毋通怪人。",
    tailo: "Lâng i m̄ sī tiau-tî--ê, m̄-thang kuè--lâng.",
  },
  {
    hanji: "伊共代誌凊彩戽戽咧就準拄好矣。",
    tailo: "I kā tāi-tsì tshìn-tshái hòo-hòo--leh tō tsún-tú-hó--ah.",
  },
  {
    hanji: "彼个怪人閣咧變鬼變怪矣。",
    tailo: "Hit ê kuài-lâng koh teh pìnn-kuí-pìnn-kuài--ah.",
  },
  {
    hanji: "身軀去戽水戽戽咧，才袂遐熱。",
    tailo: "Sin-khu khì hòo-tsuí hòo-hòo--leh, tsiah bē hiah jua̍h.",
  },
  {
    hanji: "日頭較過咧才戽水，菜才袂蔫蔫去。",
    tailo:
      "Ji̍t-thâu khah kuè--leh tsiah hòo-tsuí, tshài tsiah bē lian-lian--khì.",
  },
  {
    hanji: "彼爿的山頭敢若咧落雨。",
    tailo: "Hit pîng ê suann-thâu kánn-ná teh lo̍h-hōo.",
  },
  {
    hanji: "我無彼號性命佮你按呢耍。",
    tailo: "Guá bô hit-lō sènn-miā kah lí án-ne sńg.",
  },
  {
    hanji: "你毋通閣延延矣，火車欲開矣。",
    tailo: "Lí m̄-thang koh iân-tshiân--ah, hué-tshia beh khui--ah.",
  },
  {
    hanji: "你哪會一个怐怐？袂曉轉踅一下！",
    tailo: "Lí ná ē tsi̍t ê khòo-khòo? Bē-hiáu tńg-se̍h--tsi̍t-ē!",
  },
  {
    hanji: "伊出代誌彼時，我佇厝裡。",
    tailo: "I tshut-tāi-tsì hit-sî, guá tī tshù--lí.",
  },
  {
    hanji: "彼陣我一个人蹛佇山頂，日子過了真清閒。",
    tailo:
      "Hit-tsūn guá tsi̍t ê lâng tuà tī suann-tíng, ji̍t-tsí kuè liáu tsin tshing-îng.",
  },
  {
    hanji: "像伊彼款食碗內說碗外的人，咱毋通佮伊交陪。",
    tailo:
      "Tshiūnn i hit khuán tsia̍h uánn-lāi sueh uánn-guā ê lâng, lán m̄-thang kah i kau-puê.",
  },
  {
    hanji: "咱來去踅彼搭的夜市仔，好無？",
    tailo: "Lán lâi-khì se̍h hit-tah ê iā-tshī-á, hó--bô?",
  },
  {
    hanji: "你莫閣佇遐念經矣，會使無？",
    tailo: "Lí mài koh tī hia liām-king--ah, ē-sái--bô?",
  },
  {
    hanji: "彼號、彼號，我無閒啦，你莫來。",
    tailo: "Hit-lō, hit-lō, guá bô-îng--lah, lí mài lâi.",
  },
  {
    hanji: "往過伊攏會來揣阮老爸開講。",
    tailo: "Íng-kuè i lóng ē lâi tshuē guán lāu-pē khai-káng.",
  },
  {
    hanji: "愛先了解問題的性質才來想解決的辦法。",
    tailo:
      "Ài sing liáu-kái būn-tê ê sìng-tsit tsiah lâi siūnn kái-kuat ê pān-huat.",
  },
  {
    hanji: "逐日都作穡作甲真忝頭。",
    tailo: "Ta̍k-ji̍t to tsoh-sit tsoh kah tsin thiám-thâu.",
  },
  {
    hanji: "伊予𪜶老爸拍甲真忝頭。",
    tailo: "I hōo in lāu-pē phah kah tsin thiám-thâu.",
  },
  {
    hanji: "彼擺予你閃過，這擺你愛照步來。",
    tailo: "Hit pái hōo lí siám--kuè, tsit pái lí ài tsiàu-pōo-lâi.",
  },
  {
    hanji: "代誌佮你所想的差真濟。",
    tailo: "Tāi-tsì kah lí sóo siūnn--ê tsha tsin tsē.",
  },
  {
    hanji: "皮鞋專塗粉，去抿抿咧。",
    tailo: "Phuê-ê tsuan thôo-hún, khì bín-bín--leh.",
  },
  {
    hanji: "代誌愛先舞予清楚，毋通烏白拂。",
    tailo: "Tāi-tsì ài sing bú hōo tshing-tshó, m̄-thang oo-pe̍h hut.",
  },
  {
    hanji: "這欉樹仔愛用柴箍拄咧才袂倒去。",
    tailo:
      "Tsit tsâng tshiū-á ài īng tshâ-khoo tú--leh tsiah bē tó--khì.",
  },
  {
    hanji: "伊欠錢毋還，我提伊的跤踏車來拄。",
    tailo: "I khiàm tsînn m̄ hîng, guá the̍h i ê kha-ta̍h-tshia lâi tú.",
  },
  {
    hanji: "講著偌俗拄偌俗，結果比人加貴百外箍。",
    tailo:
      "Kóng tio̍h guā sio̍k tú guā sio̍k, kiat-kó pí lâng ke kuì pah-guā khoo.",
  },
  {
    hanji: "伊去予別人的跤拐一下跋倒。",
    tailo: "I khì hōo pa̍t-lâng ê kha kuāinn tsi̍t-ē pua̍h-tó.",
  },
  {
    hanji: "伊佇五招以內拍敗對手。",
    tailo: "I tī gōo tsiau í-lāi phah-pāi tuì-tshiú.",
  },
  {
    hanji: "明仔載我欲招伊去𨑨迌。",
    tailo: "Bîn-á-tsài guá beh tsio i khì tshit-thô.",
  },
  {
    hanji: "伊毋是娶某，是予𪜶某招的。",
    tailo: "I m̄ sī tshuā-bóo, sī hōo in bóo tsio--ê.",
  },
  {
    hanji: "拄才我明明有聽著人咧講話。",
    tailo: "Tú-tsiah guá bîng-bîng ū thiann-tio̍h lâng teh kóng-uē.",
  },
  {
    hanji: "厝頂漏雨矣，緊去捾桶仔來承水。",
    tailo: "Tshù-tíng lāu hōo--ah, kín khì kuānn tháng-á lâi sîn-tsuí.",
  },
  {
    hanji: "你按呢講會拍歹雙方的感情。",
    tailo: "Lí án-ne kóng ē phah-pháinn siang-hong ê kám-tsîng.",
  },
  {
    hanji: "叫你放手，你是無聽著呢？",
    tailo: "Kiò lí pàng-tshiú, lí sī bô thiann--tio̍h--nih?",
  },
  {
    hanji: "厝裡的代誌我猶閣袂當放手。",
    tailo: "Tshù--lí ê tāi-tsì guá iáu-koh bē-tàng pàng-tshiú.",
  },
  {
    hanji: "因為伊人巧閣頂真，所以才會有遮好的成績。",
    tailo:
      "In-uī i lâng khiáu koh tíng-tsin, sóo-í tsiah ē ū tsiah hó ê sîng-tsik.",
  },
  {
    hanji: "你若無較乖咧，我就共你掠來拍尻川。",
    tailo:
      "Lí nā bô khah kuai--leh, guá tō kā lí lia̍h-lâi phah-kha-tshng.",
  },
  {
    hanji: "這擺我一定欲佮伊拚生死。",
    tailo: "Tsit pái guá it-tīng beh kah i piànn-senn-sí.",
  },
  {
    hanji: "𪜶咧拚生理，咱緊來去抾俗貨。",
    tailo: "In teh piànn-sing-lí, lán kín lâi-khì khioh sio̍k-huè.",
  },
  {
    hanji: "你講話講甲遐大聲，會共囡仔拍生驚啦！",
    tailo:
      "Lí kóng-uē kóng kah hiah tuā-siann, ē kā gín-á phah-tshenn-kiann--lah!",
  },
  {
    hanji: "證據猶閣無夠，你毋通共伊拍生驚。",
    tailo: "Tsìng-kì iáu-koh bô-kàu, lí m̄-thang kā i phah-tshenn-kiann.",
  },
  {
    hanji: "你的冊拍交落去矣，猶毋抾起來？",
    tailo: "Lí ê tsheh phah-ka-la̍uh--khì--ah, iáu m̄ khioh--khí-lâi?",
  },
  {
    hanji: "阮阿母較早專門咧共人抾囡仔。",
    tailo: "Guán a-bú khah-tsá tsuan-bûn teh kā lâng khioh-gín-á.",
  },
  {
    hanji: "𪜶老母舊年才抾囡仔爾爾。",
    tailo: "In lāu-bú kū-nî tsiah khioh-gín-á niā-niā.",
  },
  {
    hanji: "你昨昏來的時我拄好出門無佇咧。",
    tailo: "Lí tsa-hng lâi ê sî guá tú-hó tshut-mn̂g bô tī--leh.",
  },
  {
    hanji: "你若放血，就愛去病院檢查！",
    tailo: "Lí nā pàng-hueh, tō ài khì pēnn-īnn kiám-tsa!",
  },
  {
    hanji: "因為伊著痧，我毋才共伊放血。",
    tailo: "In-uī i tio̍h-sua, guá m̄-tsiah kā i pàng-hueh.",
  },
  {
    hanji: "嬰仔奶食了，愛尻脊骿共伊搭搭咧予伊拍呃。",
    tailo:
      "Enn-á ling tsia̍h-liáu, ài kha-tsiah-phiann kā i tah-tah--leh hōo i phah-eh.",
  },
  {
    hanji: "伊專門拐弄人的囡仔去做賊仔，誠歹心！",
    tailo:
      "I tsuan-bûn kuái-lōng lâng ê gín-á khì tsò tsha̍t-á, tsiânn pháinn-sim!",
  },
  {
    hanji: "這个囡仔真驚生份，出外攏共𪜶老母拑牢牢。",
    tailo:
      "Tsit ê gín-á tsin kiann-senn-hūn, tshut-guā lóng kā in lāu-bú khînn-tiâu-tiâu.",
  },
  {
    hanji: "伊拖身拖命趁錢來飼一家伙仔，實在真可憐。",
    tailo:
      "I thua-sin-thua-miā thàn-tsînn lâi tshī tsi̍t-ke-hué-á, si̍t-tsāi tsin khó-liân.",
  },
  {
    hanji: "翁親某親，老婆仔拋捙輪。",
    tailo: "Ang tshin bóo tshin, lāu-pô-á pha-tshia-lin.",
  },
  {
    hanji: "食甲遮濟歲矣猶閣咧為序細拖命。",
    tailo: "Tsia̍h kah tsiah tsē huè--ah iáu-koh teh uī sī-sè thua-miā.",
  },
  {
    hanji: "你若共伊磕著，我就佮你拚命。",
    tailo: "Lí nā kā i kha̍p--tio̍h, guá tō kah lí piànn-miā.",
  },
  {
    hanji: "伊這个人真奇怪，不時都佮人咧拍官司。",
    tailo:
      "I tsit ê lâng tsin kî-kuài, put-sî to kah lâng teh phah-kuann-si.",
  },
  {
    hanji: "你按呢拚性命做，身體敢會堪得？",
    tailo: "Lí án-ne piànn-sènn-miā tsò, sin-thé kám ē-kham--tit?",
  },
  {
    hanji: "這間厝的厝契予伊偷提去抵押矣。",
    tailo: "Tsit king tshù ê tshù-khè hōo i thau-the̍h khì tí-ah--ah.",
  },
  {
    hanji: "戲館邊的豬母，袂歕簫嘛會拍拍。",
    tailo: "Hì-kuán-pinn ê ti-bó, bē pûn siau mā ē phah-phik.",
  },
  {
    hanji: "伊拍拚讀冊，想欲考高考。",
    tailo: "I phah-piànn tha̍k-tsheh, siūnn-beh khó ko-khó.",
  },
  {
    hanji: "伊的個性放放，無適合做這項代誌。",
    tailo: "I ê kò-sìng hòng-hòng, bô sik-ha̍p tsò tsit hāng tāi-tsì.",
  },
  {
    hanji: "你一工到暗拋拋走，足歹揣的。",
    tailo: "Lí tsi̍t-kang-kàu-àm pha-pha-tsáu, tsiok pháinn tshuē--ê.",
  },
  {
    hanji: "食茶練痟話，消遣拍抐涼。",
    tailo: "Tsia̍h-tê liān-siáu-uē, siau-khián phah-lā-liâng.",
  },
  {
    hanji: "伊鼻空過敏，毋才一直拍咳啾。",
    tailo: "I phīnn-khang kuè-bín, m̄-tsiah it-ti̍t phah-kha-tshiùnn.",
  },
  {
    hanji: "跤手較緊咧，莫佇遐拖屎連。",
    tailo: "Kha-tshiú khah kín--leh, mài tī hia thua-sái-liân.",
  },
  {
    hanji: "這有毒呢，若食落，無死嘛拖屎連。",
    tailo: "Tse ū to̍k--neh, nā tsia̍h--lo̍h, bô sí mā thua-sái-liân.",
  },
  {
    hanji: "伊彼个人真𠢕抾恨，你莫去惹伊。",
    tailo: "I hit ê lâng tsin gâu khioh-hīn, lí mài khì jiá--i.",
  },
  {
    hanji: "頭家講欲招待逐家去日本𨑨迌。",
    tailo: "Thâu-ke kóng beh tsiau-thāi ta̍k-ke khì Ji̍t-pún tshit-thô.",
  },
  {
    hanji: "阿珠人真抾拾，袂烏白開錢。",
    tailo: "A-tsu lâng tsin khioh-si̍p, bē oo-pe̍h khai-tsînn.",
  },
  {
    hanji: "彼隻羊仔囝去予獅拆食落腹。",
    tailo: "Hit tsiah iûnn-á-kiánn khì hōo sai thiah-tsia̍h-lo̍h-pak.",
  },
  {
    hanji: "伊四界放風聲，講欲揣你算數。",
    tailo: "I sì-kè pàng-hong-siann, kóng beh tshuē lí sǹg-siàu.",
  },
  {
    hanji: "伊自細漢就開始練拍拳。",
    tailo: "I tsū sè-hàn tō khai-sí liān phah-kûn.",
  },
  {
    hanji: "𪜶講欲去夜市仔看人拍拳頭賣膏藥。",
    tailo:
      "In kóng beh khì iā-tshī-á khuànn lâng phah kûn-thâu bē koo-io̍h.",
  },
  {
    hanji: "欲食毋討趁，我看你這世人抾捔矣。",
    tailo:
      "Beh tsia̍h m̄ thó-thàn, guá khuànn lí tsit-sì-lâng khioh-ka̍k--ah.",
  },
  {
    hanji: "你毋通放捒這个好機會。",
    tailo: "Lí m̄-thang pàng-sak tsit ê hó ki-huē.",
  },
  {
    hanji: "我的鬢邊一陣一陣咧抽疼。",
    tailo: "Guá ê pìn-pinn tsi̍t tsūn tsi̍t tsūn teh thiu-thiànn.",
  },
  {
    hanji: "這是要緊的契約，你毋通拆破。",
    tailo: "Tse sī iàu-kín ê khè-iok, lí m̄-thang thiah-phuà.",
  },
  {
    hanji: "我若無拆破予你聽，你就毋捌。",
    tailo: "Guá nā bô thiah-phuà hōo lí thiann, lí tō m̄ bat.",
  },
  {
    hanji: "警察押送犯人去櫳仔內。",
    tailo: "Kíng-tshat ah-sàng huān-lâng khì lông-á-lāi.",
  },
  {
    hanji: "勢面若䆀，你就緊抽退。",
    tailo: "Sè-bīn nā bái, lí tō kín thiu-thè.",
  },
  {
    hanji: "這件代誌你莫四界去放送。",
    tailo: "Tsit kiānn tāi-tsì lí mài sì-kè khì hòng-sàng.",
  },
  {
    hanji: "食藥仔愛配拉圇仔燒的水。",
    tailo: "Tsia̍h io̍h-á ài phuè lâ-lûn-á-sio ê tsuí.",
  },
  {
    hanji: "我拄欲出去揣你，你拄好轉來。",
    tailo: "Guá tú beh tshut-khì tshuē--lí, lí tú-hó tńg--lâi.",
  },
  {
    hanji: "伊逐擺做代誌，攏會去拖累著別人。",
    tailo: "I ta̍k-pái tsò tāi-tsì, lóng ē khì thua-luī-tio̍h pa̍t-lâng.",
  },
  {
    hanji: "逐擺攏是伊咧拍通關，真正是海量！",
    tailo:
      "Ta̍k-pái lóng sī i teh phah-thong-kuan, tsin-tsiànn sī hái-liōng!",
  },
  {
    hanji: "你早起有去海裡拋魚無？",
    tailo: "Lí tsá-khí ū khì hái--lí pha-hî--bô?",
  },
  {
    hanji: "過年時仔伊攏會走來阮兜拍麻雀。",
    tailo: "Kuè-nî-sî-á i lóng ē tsáu-lâi guán tau phah-muâ-tshiok.",
  },
  {
    hanji: "𪜶兩个平常時仔上愛拍喙鼓。",
    tailo: "In nn̄g ê pîng-siông-sî-á siōng ài phah-tshuì-kóo.",
  },
  {
    hanji: "兩个少年的都愛甲剝袂離矣，你煞硬欲共人拆散。",
    tailo:
      "Nn̄g ê siàu-liân--ê to ài kah pak bē lī--ah, lí suah ngē-beh kā lâng thiah-suànn.",
  },
  {
    hanji: "天拍殕仔光伊就起來咧無閒矣。",
    tailo: "Thinn phah-phú-á-kng i tō khí-lâi teh bô-îng--ah.",
  },
  {
    hanji: "這馬真濟店面的招牌攏做甲足特別。",
    tailo:
      "Tsit-má tsin tsē tiàm-bīn ê tsiau-pâi lóng tsò kah tsiok ti̍k-pia̍t.",
  },
  {
    hanji: "政府若無抾稅，欲佗位生錢來建設。",
    tailo:
      "Tsìng-hú nā bô khioh-suè, beh tó-uī senn tsînn lâi kiàn-siat.",
  },
  {
    hanji: "想欲開喙，雄雄喙舌煞拍結。",
    tailo: "Siūnn-beh khui-tshuì, hiông-hiông tshuì-tsi̍h suah phah-kat.",
  },
  {
    hanji: "請你毋通拒絕我的好意。",
    tailo: "Tshiánn lí m̄-thang kī-tsua̍t guá ê hó-ì.",
  },
  {
    hanji: "索仔拍結毬，敨袂開矣。",
    tailo: "Soh-á phah-kat-kiû, tháu bē khui--ah.",
  },
  {
    hanji: "想著彼項代誌，我心肝頭規个拍結毬。",
    tailo:
      "Siūnn-tio̍h hit hāng tāi-tsì, guá sim-kuann-thâu kui-ê phah-kat-kiû.",
  },
  {
    hanji: "這五百箍是我佇路裡抾著的。",
    tailo: "Tsit gōo-pah khoo sī guá tī lōo--lí khioh--tio̍h--ê.",
  },
  {
    hanji: "伊近來定定去拄著麻煩。",
    tailo: "I kīn-lâi tiānn-tiānn khì tú-tio̍h mâ-huân.",
  },
  {
    hanji: "阮兩个是佇街仔路拄著的。",
    tailo: "Guán nn̄g ê sī tī ke-á-lōo tú--tio̍h--ê.",
  },
  {
    hanji: "𪜶爸仔囝拆開欲十年矣。",
    tailo: "In pē-á-kiánn thiah-khui beh tsa̍p nî--ah.",
  },
  {
    hanji: "意思若會當拆開，代誌就誠簡單矣。",
    tailo: "Ì-sù nā ē-tàng thiah-khui, tāi-tsì tō tsiânn kán-tan--ah.",
  },
  {
    hanji: "伊讀冊真拚勢，莫怪定定提頭名。",
    tailo:
      "I tha̍k-tsheh tsin piànn-sè, bo̍k-kuài tiānn-tiānn the̍h thâu-miâ.",
  },
  {
    hanji: "是拄搪予我看著，我才知影的。",
    tailo: "Sī tú-tn̄g hōo guá khuànn--tio̍h, guá tsiah tsai-iánn--ê.",
  },
  {
    hanji: "伊七少年八少年就來過身去，真拍損。",
    tailo:
      "I tshit siàu-liân peh siàu-liân tō lâi kuè-sin--khì, tsin phah-sńg.",
  },
  {
    hanji: "淑芬仔頂月日才生一个囡仔，毋知按怎煞拍損去。",
    tailo:
      "Siok-hun--á tíng gue̍h-ji̍t tsiah senn tsi̍t ê gín-á, m̄ tsai án-tsuánn suah phah-sńg--khì.",
  },
  {
    hanji: "拋碇了後，咱就會當落船矣。",
    tailo: "Pha-tiānn liáu-āu, lán tō ē-tàng lo̍h-tsûn--ah.",
  },
  {
    hanji: "明仔載欲考試，閣愛拚暝工矣。",
    tailo: "Bîn-á-tsài beh khó-tshì, koh ài piànn-mê-kang--ah.",
  },
  {
    hanji: "自動車落崎的時油門毋通放盡磅。",
    tailo: "Tsū-tōng-tshia lo̍h-kiā ê sî iû-mn̂g m̄-thang pàng-tsīn-pōng.",
  },
  {
    hanji: "我拍算欲先來去日本讀冊才閣轉來揣頭路。",
    tailo:
      "Guá phah-sǹg beh sing lâi-khì Ji̍t-pún tha̍k-tsheh tsiah-koh tńg-lâi tshuē thâu-lōo.",
  },
  {
    hanji: "這馬外口烏陰烏陰，等咧拍算會落雨。",
    tailo: "Tsit-má guā-kháu oo-im-oo-im, tán--leh phah-sǹg ē lo̍h-hōo.",
  },
  {
    hanji: "𪜶規家伙仔靠拋網掠魚過日子。",
    tailo: "In kui-ke-hué-á khò pha bāng lia̍h hî kuè ji̍t-tsí.",
  },
  {
    hanji: "我承認這項代誌是我毋著。",
    tailo: "Guá sîng-jīn tsit hāng tāi-tsì sī guá m̄-tio̍h.",
  },
  {
    hanji: "這个嫌疑犯已經招認矣。",
    tailo: "Tsit ê hiâm-gî-huān í-king tsiau-jīn--ah.",
  },
  {
    hanji: "你若是表現了好，逐家就會共你拍噗仔。",
    tailo: "Lí nā-sī piáu-hiān liáu hó, ta̍k-ke tō ē kā lí phah-pho̍k-á.",
  },
  {
    hanji: "欠錢毋還，我欲提你的翕相機來拄數。",
    tailo:
      "Khiàm tsînn m̄ hîng, guá beh the̍h lí ê hip-siòng-ki lâi tú-siàu.",
  },
  {
    hanji: "生理歹做，無放數嘛袂使。",
    tailo: "Sing-lí pháinn tsò, bô pàng-siàu mā bē-sái.",
  },
  {
    hanji: "伊靠放數，就足好過矣。",
    tailo: "I khò pàng-siàu, tō tsiok hó-kuè--ah.",
  },
  {
    hanji: "百貨公司這馬當咧拍賣，咱來去買幾領仔衫。",
    tailo:
      "Pah-huè kong-si tsit-má tng-teh phah-bē, lán lâi-khì bé kuí-niá-á sann.",
  },
  {
    hanji: "這馬有古董咧拍賣，咱緊來去看。",
    tailo: "Tsit-má ū kóo-tóng teh phah-bē, lán kín lâi-khì khuànn.",
  },
  {
    hanji: "伊貸款納袂出來，厝就予人拍賣矣。",
    tailo: "I tāi-khuán la̍p bē tshut--lâi, tshù tō hōo lâng phah-bē--ah.",
  },
  {
    hanji: "抽豬母稅的才會佮老母仝姓。",
    tailo: "Thiu-ti-bó-suè--ê tsiah ē kah lāu-bú kāng sènn.",
  },
  {
    hanji: "伊定定講家己歹命，愛拖磨一世人。",
    tailo:
      "I tiānn-tiānn kóng ka-kī pháinn-miā, ài thua-buâ tsi̍t-sì-lâng.",
  },
  {
    hanji: "你食欲甲三十矣，毋通閣再放蕩落去矣。",
    tailo:
      "Lí tsia̍h beh kah sann-tsa̍p--ah, m̄-thang koh-tsài hòng-tōng--lo̍h-khì--ah.",
  },
  {
    hanji: "你較恬咧，無，嬰仔會予你拍醒。",
    tailo: "Lí khah tiām--leh, bô, enn-á ē hōo lí phah-tshénn.",
  },
  {
    hanji: "你莫磕袂著就欲佮人拚輸贏。",
    tailo: "Lí mài kha̍p-bē-tio̍h tō beh kah lâng piànn-su-iânn.",
  },
  {
    hanji: "伊介紹的生理哪有可能無抽頭。",
    tailo: "I kài-siāu ê sing-lí ná ū khó-lîng bô thiu-thâu.",
  },
  {
    hanji: "伊雄雄放聲吼出來，害我掣一趒。",
    tailo:
      "I hiông-hiông pàng-siann háu--tshut-lâi, hāi guá tshuah tsi̍t tiô.",
  },
  {
    hanji: "伊昨昏就放聲講今仔日欲閣來。",
    tailo: "I tsa-hng tō pàng-siann kóng kin-á-ji̍t beh koh lâi.",
  },
  {
    hanji: "戲棚頂搬歌仔戲的定定會拋輾斗！",
    tailo: "Hì-pênn-tíng puann kua-á-hì--ê tiānn-tiānn ē pha-liàn-táu!",
  },
  {
    hanji: "伊的手骨去予人拍斷去。",
    tailo: "I ê tshiú-kut khì hōo lâng phah-tn̄g--khì.",
  },
  {
    hanji: "我的話才講一半，就予伊拍斷去。",
    tailo: "Guá ê uē tsiah kóng tsi̍t-puànn, tō hōo i phah-tn̄g--khì.",
  },
  {
    hanji: "古早人愛去拍獵才有肉通食。",
    tailo: "Kóo-tsá-lâng ài khì phah-la̍h tsiah ū bah thang tsia̍h.",
  },
  {
    hanji: "昨暗伊腹肚疼甲佇眠床頂拍翸。",
    tailo: "Tsa-àm i pak-tóo thiànn kah tī bîn-tshn̂g-tíng phah-phún.",
  },
  {
    hanji: "有錢就烏白拍翸，較濟嘛無夠開！",
    tailo: "Ū tsînn tō oo-pe̍h phah-phún, khah tsē mā bô-kàu khai!",
  },
  {
    hanji: "伊揣你袂著就掠我去抵額。",
    tailo: "I tshuē lí bē tio̍h tō lia̍h guá khì tí-gia̍h.",
  },
  {
    hanji: "你提這張藥單去拆藥仔。",
    tailo: "Lí the̍h tsit tiunn io̍h-tuann khì thiah-io̍h-á.",
  },
  {
    hanji: "大部份的歌詞攏有押韻。",
    tailo: "Tuā-pōo-hūn ê kua-sû lóng ū ah-ūn.",
  },
  {
    hanji: "遮人真濟，你毋通蹛遮拋麒麟。",
    tailo: "Tsia lâng tsin tsē, lí m̄-thang tuà tsia pha-kî-lîn.",
  },
  {
    hanji: "你莫講彼號話共我拍觸衰。",
    tailo: "Lí mài kóng hit-lō uē kā guá phah-tshik-sue.",
  },
  {
    hanji: "人講拍鐵愛趁燒，你這馬毋做欲等甲底時？",
    tailo:
      "Lâng kóng phah-thih ài thàn sio, lí tsit-má m̄ tsò beh tán kah tī-sî?",
  },
  {
    hanji: "魚仔刣了愛抹鹽較袂歹去。",
    tailo: "Hî-á thâi-liáu ài buah iâm khah bē pháinn--khì.",
  },
  {
    hanji: "伊就是傷拗蠻才會遐顧人怨。",
    tailo: "I tō sī siunn áu-bân tsiah ē hiah kòo-lâng-uàn.",
  },
  {
    hanji: "若是攏無人欲去，咱就抽鬮來決定。",
    tailo: "Nā-sī lóng bô lâng beh khì, lán tō thiu-khau lâi kuat-tīng.",
  },
  {
    hanji: "逐家意見攏無仝，規氣拈鬮來決定。",
    tailo: "Ta̍k-ke ì-kiàn lóng bô kāng, kui-khì liam-khau lâi kuat-tīng.",
  },
  {
    hanji: "老人面皮抾襇，會挾死胡蠅。",
    tailo: "Lāu-lâng bīn-phuê khioh-kíng, ē gia̍p-sí hôo-sîn.",
  },
  {
    hanji: "伊這站仔做一下抽躼起來。",
    tailo: "I tsit-tsām-á tsò tsi̍t-ē thiu-lò--khí-lâi.",
  },
  {
    hanji: "你去買一寡果子轉來供神。",
    tailo: "Lí khì bé tsi̍t-kuá kué-tsí tńg-lâi kìng sîn.",
  },
  {
    hanji: "阮兜的果子園種椪柑佮菝仔。",
    tailo: "Guán tau ê kué-tsí-hn̂g tsìng phòng-kam kah pua̍t-á.",
  },
  {
    hanji: "今仔日的代誌上好莫拖到明仔日。",
    tailo: "Kin-á-ji̍t ê tāi-tsì siōng-hó mài thua kàu bîn-á-ji̍t.",
  },
  {
    hanji: "明仔早起我欲佮阮阿公去運動。",
    tailo: "Bîn-á-tsá-khí guá beh kah guán a-kong khì ūn-tōng.",
  },
  {
    hanji: "明仔暗我就欲坐車轉去下港矣。",
    tailo: "Bîn-á-àm guá tō beh tsē tshia tńg-khì ē-káng--ah.",
  },
  {
    hanji: "明仔載的代誌明仔載才閣講。",
    tailo: "Bîn-á-tsài ê tāi-tsì bîn-á-tsài tsiah-koh kóng.",
  },
  {
    hanji: "聽著這个消息，伊煞昏去。",
    tailo: "Thiann-tio̍h tsit ê siau-sit, i suah hūn--khì.",
  },
  {
    hanji: "就是有人陷害，伊才會來枉死。",
    tailo: "Tō sī ū lâng hām-hāi, i tsiah ē lâi óng-sí.",
  },
  {
    hanji: "伊誠有孝，服侍爸母蓋用心。",
    tailo: "I tsiânn iú-hàu, ho̍k-sāi pē-bú kài iōng-sim.",
  },
  {
    hanji: "我明明有聽著伊的聲，哪會揣無人？",
    tailo: "Guá bîng-bîng ū thiann-tio̍h i ê siann, ná ē tshuē-bô lâng?",
  },
  {
    hanji: "你明知伊做歹，閣欲共伊鬥相共！",
    tailo: "Lí bîng-tsai i tsò-pháinn, koh beh kā i tàu-sann-kāng!",
  },
  {
    hanji: "伊較早是真出名的明星。",
    tailo: "I khah-tsá sī tsin tshut-miâ ê bîng-tshenn.",
  },
  {
    hanji: "樹仔予風吹甲東倒西歪。",
    tailo: "Tshiū-á hōo hong tshue kah tang-tó-sai-uai.",
  },
  {
    hanji: "我真歡喜會當共你服務。",
    tailo: "Guá tsin huann-hí ē-tàng kā lí ho̍k-bū.",
  },
  {
    hanji: "我佮伊的房間干焦隔一塊枋堵。",
    tailo: "Guá kah i ê pâng-king kan-na keh tsi̍t tè pang-tóo.",
  },
  {
    hanji: "我臆了無毋著，物件果然是伊提去的。",
    tailo: "Guá ioh liáu bô m̄-tio̍h, mi̍h-kiānn kó-jiân sī i the̍h--khì--ê.",
  },
  {
    hanji: "枉費我對你付出遮爾仔濟，你一點仔都毋知著感恩。",
    tailo:
      "Óng-huì guá tuì lí hù-tshut tsiah-nī-á tsē, lí tsi̍t-tiám-á to m̄ tsai tio̍h kám-un.",
  },
  {
    hanji: "有話就明講，毋通囥佇心肝內。",
    tailo: "Ū uē tō bîng-kóng, m̄-thang khǹg tī sim-kuann-lāi.",
  },
  {
    hanji: "伊的企圖真明顯，逐家小看咧就知。",
    tailo: "I ê khì-tôo tsin bîng-hián, ta̍k-ke sió khuànn--leh tō tsai.",
  },
  {
    hanji: "伊若看著燒酒，就規个人攏沬落去矣。",
    tailo:
      "I nā khuànn-tio̍h sio-tsiú, tō kui-ê lâng lóng bī--lo̍h-khì--ah.",
  },
  {
    hanji: "水傷冷，我毋敢落去泅。",
    tailo: "Tsuí siunn líng, guá m̄ kánn lo̍h-khì siû.",
  },
  {
    hanji: "今仔日風誠透，恁莫去海邊仔泅水。",
    tailo: "Kin-á-ji̍t hong tsiânn thàu, lín mài khì hái-pinn-á siû-tsuí.",
  },
  {
    hanji: "咱臺灣的治安猶算袂䆀。",
    tailo: "Lán Tâi-uân ê tī-an iáu sǹg bē-bái.",
  },
  {
    hanji: "代誌沓沓滴滴，按怎做都做袂了。",
    tailo: "Tāi-tsì ta̍p-ta̍p-tih-tih, án-tsuánn tsò to tsò bē liáu.",
  },
  {
    hanji: "碗盤油肭肭，愛用燒水才洗會清氣。",
    tailo:
      "Uánn-puânn iû-leh-leh, ài iōng sio-tsuí tsiah sé ē tshing-khì.",
  },
  {
    hanji: "枕頭囊專油垢，剝起來洗洗咧。",
    tailo: "Tsím-thâu-lông tsuan iû-káu, pak khí-lâi sé-sé--leh.",
  },
  {
    hanji: "咱做代誌著愛照法度來行。",
    tailo: "Lán tsò tāi-tsì tio̍h-ài tsiàu huat-tōo lâi kiânn.",
  },
  {
    hanji: "恁遮有啥物好食的通治枵？",
    tailo: "Lín tsia ū siánn-mih hó-tsia̍h--ê thang tī-iau?",
  },
  {
    hanji: "你愛緊去治病，才袂過人。",
    tailo: "Lí ài kín khì tī-pēnn, tsiah bē kuè--lâng.",
  },
  {
    hanji: "伊定定出國，予人真欣羨。",
    tailo: "I tiānn-tiānn tshut-kok, hōo lâng tsin him-siān.",
  },
  {
    hanji: "這是別人的代誌，你莫咧沓滴。",
    tailo: "Tse sī pa̍t-lâng ê tāi-tsì, lí mài teh ta̍p-tih.",
  },
  {
    hanji: "伊的胃毋好，較無愛食油臊。",
    tailo: "I ê uī m̄ hó, khah bô ài tsia̍h iû-tsho.",
  },
  {
    hanji: "彼个就是這擺考試的狀元。",
    tailo: "Hit ê tō sī tsit pái khó-tshì ê tsiōng-guân.",
  },
  {
    hanji: "這項物件做袂赴通賣，你若欲愛著注文。",
    tailo:
      "Tsit hāng mi̍h-kiānn tsò bē-hù thang bē, lí nā beh ài tio̍h tsù-bûn.",
  },
  {
    hanji: "伊的行為引起人的注目。",
    tailo: "I ê hîng-uî ín-khí lâng ê tsù-bo̍k.",
  },
  {
    hanji: "我手裡有物件，干焦會當共你行注目禮。",
    tailo:
      "Guá tshiú--lí ū mi̍h-kiānn, kan-na ē-tàng kā lí kiânn tsù-bo̍k-lé.",
  },
  {
    hanji: "我這陣咧炕肉，你共我鬥影一下。",
    tailo: "Guá tsit-tsūn teh khòng-bah, lí kā guá tàu iánn--tsi̍t-ē.",
  },
  {
    hanji: "你毋緊娶某生囝，等甲爸老囝幼，你就艱苦。",
    tailo:
      "Lí m̄ kín tshuā-bóo senn-kiánn, tán kah pē-lāu-kiánn-iù, lí tō kan-khóo.",
  },
  {
    hanji: "山路誠歹行，咱著愛較注意咧。",
    tailo: "Suann-lōo tsiânn pháinn kiânn, lán tio̍h-ài khah tsù-ì--leh.",
  },
  {
    hanji: "你毋是去買物件，哪會空手轉來？",
    tailo: "Lí m̄ sī khì bé mi̍h-kiānn, ná ē khang-tshiú tńg--lâi?",
  },
  {
    hanji: "物件若舞害去你就知死！",
    tailo: "Mi̍h-kiānn nā bú-hāi--khì lí tō tsai-sí!",
  },
  {
    hanji: "𪜶欲去的所在你敢知位？",
    tailo: "In beh khì ê sóo-tsāi lí kám tsai-uī?",
  },
  {
    hanji: "做人若知足，日子就會較好過。",
    tailo: "Tsò-lâng nā ti-tsiok, ji̍t-tsí tō ē khah hó-kuè.",
  },
  {
    hanji: "人講斷掌查埔做相公，斷掌查某守空房。",
    tailo:
      "Lâng kóng tn̄g-tsiúnn tsa-poo tsò siùnn-kang, tn̄g-tsiúnn tsa-bóo tsiú khang-pâng.",
  },
  {
    hanji: "你直直行，免轉斡就到矣。",
    tailo: "Lí ti̍t-ti̍t kiânn, bián tńg-uat tō kàu--ah.",
  },
  {
    hanji: "你直直去共伊講就會使，免揣對我遮來。",
    tailo:
      "Lí ti̍t-ti̍t khì kā i kóng tō ē-sái, bián tshuē tuì guá tsia lâi.",
  },
  {
    hanji: "當初叫你莫耍股票你毋聽，這馬了甲貼底知苦矣乎！",
    tailo:
      "Tong-tshoo kiò lí mài sńg kóo-phiò lí m̄ thiann, tsit-má liáu kah tah-té tsai-khóo--ah--honnh!",
  },
  {
    hanji: "這幫車直透花蓮，中間攏無停。",
    tailo: "Tsit pang tshia ti̍t-thàu Hua-liân, tiong-kan lóng bô thîng.",
  },
  {
    hanji: "你毋通空喙哺舌誣賴別人。",
    tailo: "Lí m̄-thang khang-tshuì-pōo-tsi̍h bû-luā pa̍t-lâng.",
  },
  {
    hanji: "空喙哺舌無路用，無去做攏無準算。",
    tailo:
      "Khang-tshuì-pōo-tsi̍h bô-lōo-īng, bô khì tsò lóng bô tsún-sǹg.",
  },
  {
    hanji: "這枝樹椏直溜溜，會使取來做枴仔。",
    tailo: "Tsit ki tshiū-ue ti̍t-liu-liu, ē-sái tshú lâi tsò kuái-á.",
  },
  {
    hanji: "這種藥仔愛空腹的時食。",
    tailo: "Tsit tsióng io̍h-á ài khang-pak ê sî tsia̍h.",
  },
  {
    hanji: "伊這个人直腸直肚，想著啥講啥，請你毋通見怪。",
    tailo:
      "I tsit ê lâng ti̍t-tn̂g-ti̍t-tōo, siūnn-tio̍h siannh kóng siannh, tshiánn lí m̄-thang kiàn-kuài.",
  },
  {
    hanji: "你敢知影伊叫做啥物名？",
    tailo: "Lí kám tsai-iánn i kiò-tsò siánn-mih miâ?",
  },
  {
    hanji: "伊的確是去寒著，今仔日才無來。",
    tailo: "I tik-khak sī khì kuânn--tio̍h, kin-á-ji̍t tsiah bô lâi.",
  },
  {
    hanji: "你窗仔門關無好，風攏對空縫吹入來矣！",
    tailo:
      "Lí thang-á-mn̂g kuainn bô hó, hong lóng tuì khang-phāng tshue--ji̍p-lâi--ah!",
  },
  {
    hanji: "這盤菜若芡一寡蔥仔會較芳。",
    tailo: "Tsit puânn tshài nā khiàn tsi̍t-kuá tshang-á ē khah phang.",
  },
  {
    hanji: "伊逐工欲出門進前，攏愛𫝺一寡芳水。",
    tailo:
      "I ta̍k-kang beh tshut-mn̂g tsìn-tsîng, lóng ài hiù tsi̍t-kuá phang-tsuí.",
  },
  {
    hanji: "這个嬰仔飼甲誠肨奶，生做足古錐。",
    tailo:
      "Tsit ê enn-á tshī kah tsiânn hàng-ling, senn-tsò tsiok kóo-tsui.",
  },
  {
    hanji: "閒閒無代誌，罔行嘛好。",
    tailo: "Îng-îng bô tāi-tsì, bóng kiânn mā hó.",
  },
  {
    hanji: "彼缺若像一塊肥肉，逐家攏咧相爭搶。",
    tailo:
      "Hit khueh ná-tshiūnn tsi̍t tè puî-bah, ta̍k-ke lóng teh sio-tsenn tshiúnn.",
  },
  {
    hanji: "我的房內專是花的芳味。",
    tailo: "Guá ê pâng-lāi tsuan sī hue ê phang-bī.",
  },
  {
    hanji: "這間店是阮三个人股東的。",
    tailo: "Tsit king tiàm sī guán sann ê lâng kóo-tong--ê.",
  },
  {
    hanji: "伊干焦靠淡薄仔薪水咧罔度爾爾。",
    tailo: "I kan-na khò tām-po̍h-á sin-suí teh bóng tōo niā-niā.",
  },
  {
    hanji: "這塊布的花草我誠佮意。",
    tailo: "Tsit tè pòo ê hue-tsháu guá tsiânn kah-ì.",
  },
  {
    hanji: "明星攏足驚人講𪜶是花瓶。",
    tailo: "Bîng-tshenn lóng tsiok kiann lâng kóng in sī hue-pân.",
  },
  {
    hanji: "我手頭有彼間公司的股票。",
    tailo: "Guá tshiú-thâu ū hit king kong-si ê kóo-phiò.",
  },
  {
    hanji: "伊生做肥軟仔肥軟，看著蓋古錐。",
    tailo: "I senn-tsò puî-nńg-á-puî-nńg, khuànn tio̍h kài kóo-tsui.",
  },
  {
    hanji: "泅水的時陣上驚跤糾筋。",
    tailo: "Siû-tsuí ê sî-tsūn siōng kiann kha kiù-kin.",
  },
  {
    hanji: "伊肺管無好，真𠢕感冒。",
    tailo: "I hì-kńg bô hó, tsin gâu kám-mōo.",
  },
  {
    hanji: "我已經共花箍送過去矣。",
    tailo: "Guá í-king kā hue-khoo sàng--kuè-khì--ah.",
  },
  {
    hanji: "伊今仔日穿甲花巴哩貓。",
    tailo: "I kin-á-ji̍t tshīng kah hue-pa-li-niau.",
  },
  {
    hanji: "你哪會食甲規个面花巴哩貓？",
    tailo: "Lí ná ē tsia̍h kah kui-ê bīn hue-pa-li-niau?",
  },
  {
    hanji: "這馬毋捌看人嫁娶的時咧坐花轎矣。",
    tailo: "Tsit-má m̄ bat khuànn lâng kè-tshuā ê sî teh tsē hue-kiō--ah.",
  },
  {
    hanji: "花欉當咧開花，毋通修剪。",
    tailo: "Hue-tsâng tng-teh khui-hue, m̄-thang siu-tsián.",
  },
  {
    hanji: "結婚進前，目睭愛擘予伊金。",
    tailo: "Kiat-hun tsìn-tsîng, ba̍k-tsiu ài peh hōo i kim.",
  },
  {
    hanji: "阿母頂個月予我的錢有長寡。",
    tailo: "A-bú tíng kò gue̍h hōo--guá ê tsînn ū tióng--kuá.",
  },
  {
    hanji: "阮阿公較早佇人兜做長工。",
    tailo: "Guán a-kong khah-tsá tī lâng tau tsò tn̂g-kang.",
  },
  {
    hanji: "伊是虯毛的，免電頭鬃。",
    tailo: "I sī khiû-mn̂g--ê, bián tiān-thâu-tsang.",
  },
  {
    hanji: "阿公決定的代誌，無人會當阻止。",
    tailo: "A-kong kuat-tīng ê tāi-tsì, bô lâng ē-tàng tsóo-tsí.",
  },
  {
    hanji: "這間金仔店是阮遮上大間的。",
    tailo: "Tsit king kim-á-tiàm sī guán tsia siōng tuā king--ê.",
  },
  {
    hanji: "伊有影長尻川，去人兜坐落去就毋知通起來。",
    tailo:
      "I ū-iánn tn̂g-kha-tshng, khì lâng tau tsē--lo̍h-khì tō m̄ tsai thang khí--lâi.",
  },
  {
    hanji: "你罵我阿西，無，你家己是有偌巧？",
    tailo: "Lí mē guá a-se, bô, lí ka-kī sī ū guā khiáu?",
  },
  {
    hanji: "代誌若交予彼个長尾星做，包害的。",
    tailo: "Tāi-tsì nā kau hōo hit ê tn̂g-bué-tshenn tsò, pau hāi--ê.",
  },
  {
    hanji: "你莫佇遐做一寡仔阿沙不魯的代誌。",
    tailo: "Lí mài tī hia tsò tsi̍t-kuá-á a-sa-puh-luh ê tāi-tsì.",
  },
  {
    hanji: "你毋通交一寡阿里不達的朋友，對你無好處。",
    tailo:
      "Lí m̄-thang kau tsi̍t-kuá a-lí-put-ta̍t ê pîng-iú, tuì lí bô hó-tshù.",
  },
  {
    hanji: "伊近來的行為有淡薄仔奇怪。",
    tailo: "I kīn-lâi ê hîng-uî ū tām-po̍h-á kî-kuài.",
  },
  {
    hanji: "較緊睏！無，虎姑婆欲來矣。",
    tailo: "Khah kín khùn! Bô, Hóo-koo-pô beh lâi--ah.",
  },
  {
    hanji: "𪜶這馬當青春，猶毋知通煩惱。",
    tailo: "In tsit-má tng tshing-tshun, iáu m̄ tsai thang huân-ló.",
  },
  {
    hanji: "提親進前，逐家攏會去探對方的門風。",
    tailo:
      "Thê-tshin tsìn-tsîng, ta̍k-ke lóng ē khì thàm tuì-hong ê mn̂g-hong.",
  },
  {
    hanji: "電影內面的妖魔鬼怪攏生做青面獠牙。",
    tailo:
      "Tiān-iánn lāi-bīn ê iau-môo-kuí-kuài lóng senn-tsò tshenn-bīn-liâu-gê.",
  },
  {
    hanji: "伊這馬當咧風火頭，你莫近倚去。",
    tailo: "I tsit-má tng-teh hong-hué-thâu, lí mài kīn-uá--khì.",
  },
  {
    hanji: "𪜶翁仔某一个虎豹母一个雷公性，毋知按怎鬥陣。",
    tailo:
      "In ang-á-bóo tsi̍t ê hóo-pà-bú tsi̍t ê luî-kong-sìng, m̄ tsai án-tsuánn tàu-tīn.",
  },
  {
    hanji: "貴賓來矣，緊出去迎接。",
    tailo: "Kuì-pin lâi--ah, kín tshut-khì gîng-tsiap.",
  },
  {
    hanji: "這改的比賽伊表現了袂䆀。",
    tailo: "Tsit kái ê pí-sài i piáu-hiān liáu bē-bái.",
  },
  {
    hanji: "咱人毋通烏白講人的長短。",
    tailo: "Lán-lâng m̄-thang oo-pe̍h kóng lâng ê tn̂g-té.",
  },
  {
    hanji: "阮三年無相揣矣，我感覺伊這馬敢若有較長進。",
    tailo:
      "Guán sann nî bô sio-tshuē--ah, guá kám-kak i tsit-má kánn-ná ū khah tióng-tsìn.",
  },
  {
    hanji: "對情人愛珍惜，毋通迎新棄舊。",
    tailo: "Tuì tsîng-jîn ài tin-sioh, m̄-thang ngiâ-sin-khì-kū.",
  },
  {
    hanji: "阮阿公毋但長歲壽，身體猶閣足勇健的。",
    tailo:
      "Guán a-kong m̄-nā tn̂g-huè-siū, sin-thé iáu-koh tsiok ióng-kiānn--ê.",
  },
  {
    hanji: "紅龜粿抹油過，逐塊都金滑仔金滑。",
    tailo: "Âng-ku-kué buah iû--kuè, ta̍k tè to kim-ku̍t-á-kim-ku̍t.",
  },
  {
    hanji: "這箍圍仔的人攏真長壽。",
    tailo: "Tsit-khoo-uî-á ê lâng lóng tsin tn̂g-siū.",
  },
  {
    hanji: "你若欲出去著愛會記得紮雨幔，等一下落雨才袂去沃著。",
    tailo:
      "Lí nā beh tshut--khì tio̍h-ài ē-kì-tit tsah hōo-mua, tán--tsi̍t-ē lo̍h-hōo tsiah bē khì ak--tio̍h.",
  },
  {
    hanji: "洞房花燭夜，金榜題名時。",
    tailo: "Tōng-pông hua-tsiok iā, kim-pńg tê-miâ sî.",
  },
  {
    hanji: "青翠的草埔，予人看著真爽快。",
    tailo:
      "Tshenn-tshuì ê tsháu-poo, hōo lâng khuànn tio̍h tsin sóng-khuài.",
  },
  {
    hanji: "伊是虎鼻師，啥物味都鼻會出來。",
    tailo: "I sī hóo-phīnn-sai, siánn-mih bī to phīnn ē tshut--lâi.",
  },
  {
    hanji: "伊是虯儉的人，毋甘開錢享受。",
    tailo: "I sī khiû-khiām ê lâng, m̄-kam khai-tsînn hiáng-siū.",
  },
  {
    hanji: "平平是庄裡的人，你毋通近廟欺神。",
    tailo: "Pênn-pênn sī tsng--lí ê lâng, lí m̄-thang kīn-biō-khi-sîn.",
  },
  {
    hanji: "你青磅白磅走來欲借錢，我欲佗生遐濟錢通借你。",
    tailo:
      "Lí tshenn-pōng-pe̍h-pōng tsáu-lâi beh tsioh tsînn, guá beh tó senn hiah tsē tsînn thang tsioh--lí.",
  },
  {
    hanji: "廟口這陣咧迎鬧熱，咱緊來去看。",
    tailo:
      "Biō-kháu tsit-tsūn teh ngiâ-lāu-jia̍t, lán kín lâi-khì khuànn.",
  },
  {
    hanji: "無人會當阻擋我去完成這件代誌。",
    tailo:
      "Bô lâng ē-tàng tsóo-tòng guá khì uân-sîng tsit kiānn tāi-tsì.",
  },
  {
    hanji: "我去拍一條金鍊仔予伊做嫁粧。",
    tailo: "Guá khì phah tsi̍t tiâu kim-liān-á hōo i tsò kè-tsng.",
  },
  {
    hanji: "人民無受教育會阻礙國家的進步。",
    tailo: "Jîn-bîn bô siū kàu-io̍k ē tsóo-gāi kok-ka ê tsìn-pōo.",
  },
  {
    hanji: "這枝竹仔長躼埽，強欲拄天。",
    tailo: "Tsit ki tik-á tn̂g-lò-sò, kiōng-beh tú thinn.",
  },
  {
    hanji: "伊起彼間厝，去侵著別人的地界。",
    tailo: "I khí hit king tshù, khì tshim-tio̍h pa̍t-lâng ê tē-kài.",
  },
  {
    hanji: "伊侵頭家的錢才會予頭家刣頭。",
    tailo: "I tshim thâu-ke ê tsînn tsiah ē hōo thâu-ke thâi-thâu.",
  },
  {
    hanji: "物件款予伊便，才袂時到揣無。",
    tailo: "Mi̍h-kiānn khuán hōo i piān, tsiah bē sî kàu tshuē-bô.",
  },
  {
    hanji: "逐家共椅仔小促較倚咧，較好夾菜。",
    tailo: "Ta̍k-ke kā í-á sió tshik khah uá--leh, khah hó ngeh tshài.",
  },
  {
    hanji: "索仔愛閣促較短咧，才袂傷櫳。",
    tailo: "Soh-á ài koh tshik khah té--leh, tsiah bē siunn lang.",
  },
  {
    hanji: "我逐項都共你攢便便矣，你免煩惱。",
    tailo: "Guá ta̍k hāng to kā lí tshuân piān-piān--ah, lí bián huân-ló.",
  },
  {
    hanji: "欲按怎做，等對方條件開出來才便看。",
    tailo:
      "Beh án-tsuánn tsò, tán tuì-hong tiâu-kiānn khui--tshut-lâi tsiah piān-khuànn.",
  },
  {
    hanji: "都轉來到厝矣，你嘛去換一領便衫。",
    tailo: "To tńg-lâi kàu tshù--ah, lí mā khì uānn tsi̍t niá piān-sann.",
  },
  {
    hanji: "伊自去予人侮辱了後，逐工攏咧哭。",
    tailo: "I tsū khì hōo lâng bú-jio̍k liáu-āu, ta̍k-kang lóng teh khàu.",
  },
  {
    hanji: "連這款夭壽代你都敢做，敢毋驚會促歲壽？",
    tailo:
      "Liân tsit khuán iáu-siū-tāi lí to kánn tsò, kám m̄ kiann ē tshik-huè-siū?",
  },
  {
    hanji: "破病愛去予醫生看，莫烏白食便藥仔。",
    tailo:
      "Phuà-pēnn ài khì hōo i-sing khuànn, mài oo-pe̍h tsia̍h piān-io̍h-á.",
  },
  {
    hanji: "伊講遐的話是咧共你倒削。",
    tailo: "I kóng hia-ê uē sī teh kā lí tò-siah.",
  },
  {
    hanji: "是親非是親，非親卻是親。",
    tailo: "Sī tshin hui sī tshin, hui tshin khiok-sī tshin.",
  },
  {
    hanji: "阿英雖然是前人囝，毋過𪜶後母仝款共伊惜命命。",
    tailo:
      "A-ing sui-jiân sī tsîng-lâng-kiánn, m̄-koh in āu-bú kāng-khuán kā i sioh-miā-miā.",
  },
  {
    hanji: "我對這擺的考試有信心。",
    tailo: "Guá tuì tsit pái ê khó-tshì ū sìn-sim.",
  },
  {
    hanji: "前世燒好香，這世人才會遐好命。",
    tailo: "Tsîng-sì sio hó hiunn, tsit-sì-lâng tsiah ē hiah hó-miā.",
  },
  {
    hanji: "我會共代誌交予伊做，是因為我信任伊。",
    tailo: "Guá ē kā tāi-tsì kau hōo i tsò, sī in-uī guá sìn-jīm--i.",
  },
  {
    hanji: "穿山甲俗名叫做「鯪鯉」。",
    tailo: "Tshuan-san-kah sio̍k-miâ kiò-tsò “lâ-lí”.",
  },
  {
    hanji: "萬項代誌攏有前因後果。",
    tailo: "Bān-hāng tāi-tsì lóng ū tsiân-in-hiō-kó.",
  },
  {
    hanji: "臺灣的本土語言毋知閣會當保存偌久？",
    tailo: "Tâi-uân ê pún-thóo gí-giân m̄ tsai koh ē-tàng pó-tsûn guā-kú?",
  },
  {
    hanji: "愛好好保守祖公仔放落來的田園。",
    tailo: "Ài hó-hó pó-siú tsóo-kong-á pàng--lo̍h-lâi ê tshân-hn̂g.",
  },
  {
    hanji: "希望佛祖會當保庇逐家平安勇健。",
    tailo: "Hi-bāng Pu̍t-tsóo ē-tàng pó-pì ta̍k-ke pîng-an ióng-kiānn.",
  },
  {
    hanji: "阮學校的前身是一間研習所。",
    tailo: "Guán ha̍k-hāu ê tsiân-sin sī tsi̍t king gián-si̍p-sóo.",
  },
  {
    hanji: "阿發仔生理做甲削削叫，厝內的代誌攏放予𪜶某扞。",
    tailo:
      "A-huat--á sing-lí tsò kah siah-siah-kiò, tshù-lāi ê tāi-tsì lóng pàng hōo in bóo huānn.",
  },
  {
    hanji: "伊講的話前後顛倒反，毋知影佗一句才是真的。",
    tailo:
      "I kóng ê uē tsîng-āu tian-tò-píng, m̄ tsai-iánn tó tsi̍t kù tsiah-sī tsin--ê.",
  },
  {
    hanji: "我替伊煩惱甲欲死，伊卻是無要無緊。",
    tailo: "Guá thè i huân-ló kah beh-sí, i khiok-sī bô-iàu-bô-kín.",
  },
  {
    hanji: "𪜶前某對人誠好，予人誠感心。",
    tailo: "In tsîng-bóo tuì lâng tsiânn hó, hōo lâng tsiânn kám-sim.",
  },
  {
    hanji: "你若想欲共我借錢，就愛先揣一个保家。",
    tailo:
      "Lí nā siūnn-beh kā guá tsioh tsînn, tō ài sing tshuē tsi̍t ê pó-ke.",
  },
  {
    hanji: "𪜶兩兄弟透早就去山頂剉柴矣。",
    tailo: "In nn̄g hiann-tī thàu-tsá tō khì suann-tíng tshò-tshâ--ah.",
  },
  {
    hanji: "你敢講恁老師講了毋著，真正足有勇氣。",
    tailo:
      "Lí kánn kóng lín lāu-su kóng liáu m̄-tio̍h, tsin-tsiànn tsiok ū ióng-khì.",
  },
  {
    hanji: "阿公今年八十歲矣，身體猶閣真勇健。",
    tailo:
      "A-kong kin-nî peh-tsa̍p huè--ah, sin-thé iáu-koh tsin ióng-kiānn.",
  },
  {
    hanji: "感情的代誌是袂當勉強的。",
    tailo: "Kám-tsîng ê tāi-tsì sī bē-tàng bián-kióng--ê.",
  },
  {
    hanji: "市場外口有人咧摒俗貨。",
    tailo: "Tshī-tiûnn guā-kháu ū lâng teh piànn-sio̍k-huè.",
  },
  {
    hanji: "伊誠勇敢，拄著危險攏毋驚。",
    tailo: "I tsiânn ióng-kám, tú-tio̍h guî-hiám lóng m̄ kiann.",
  },
  {
    hanji: "這件代誌，我是無法度共你掛保險。",
    tailo: "Tsit kiānn tāi-tsì, guá sī bô-huat-tōo kā lí kuà-pó-hiám.",
  },
  {
    hanji: "我共你保證伊開的支票袂跳票。",
    tailo: "Guá kā lí pó-tsìng i khui ê tsi-phiò bē thiàu-phiò.",
  },
  {
    hanji: "保證書就是公司對產品的保證。",
    tailo: "Pó-tsìng-su tō sī kong-si tuì sán-phín ê pó-tsìng.",
  },
  {
    hanji: "總統若出門，身軀邊一定有保鏢。",
    tailo: "Tsóng-thóng nā tshut-mn̂g, sin-khu-pinn it-tīng ū pó-pio.",
  },
  {
    hanji: "歹瓜厚子，歹人厚言語。",
    tailo: "Pháinn kue kāu tsí, pháinn-lâng kāu giân-gí.",
  },
  {
    hanji: "鹽酸會咬肉，欲用愛細膩。",
    tailo: "Iâm-sng ē kā bah, beh iōng ài sè-jī.",
  },
  {
    hanji: "你莫哀啦，逐家的工課攏平濟。",
    tailo: "Lí mài ai--lah, ta̍k-ke ê khang-khuè lóng pênn tsē.",
  },
  {
    hanji: "逐家先品好，等咧輸的人袂使起呸面。",
    tailo: "Ta̍k-ke sing phín hó, tán--leh su ê lâng bē-sái khí-phuì-bīn.",
  },
  {
    hanji: "明明腹內無膏，閣愛品伊學問偌飽拄偌飽。",
    tailo:
      "Bîng-bîng pak-lāi bô ko, koh ài phín i ha̍k-būn guā pá tú guā pá.",
  },
  {
    hanji: "歹瓜厚子，歹人厚言語。",
    tailo: "Pháinn kue kāu tsí, pháinn-lâng kāu giân-gí.",
  },
  {
    hanji: "伊雄雄咯血出來，害我驚一趒。",
    tailo: "I hiông-hiông kha̍k-hueh--tshut-lâi, hāi guá kiann tsi̍t tiô.",
  },
  {
    hanji: "伊哀求我放伊一條生路。",
    tailo: "I ai-kiû guá pàng i tsi̍t tiâu senn-lōo.",
  },
  {
    hanji: "伊一工到暗嫌東嫌西，莫怪人講伊厚沙屑。",
    tailo:
      "I tsi̍t-kang-kàu-àm hiâm-tang-hiâm-sai, bo̍k-kuài lâng kóng i kāu-sua-sap.",
  },
  {
    hanji: "伊這个人足厚性地的，磕袂著就欲佮人冤家。",
    tailo:
      "I tsit ê lâng tsiok kāu-sìng-tē--ê, kha̍p-bē-tio̍h tō beh kah lâng uan-ke.",
  },
  {
    hanji: "做生理著愛先品明，以後才袂有糾紛。",
    tailo: "Tsò-sing-lí tio̍h-ài sing phín-bîng, í-āu tsiah bē ū kiù-hun.",
  },
  {
    hanji: "垂肩的人穿衫較無好看。",
    tailo: "Suê-king ê lâng tshīng sann khah bô hó-khuànn.",
  },
  {
    hanji: "伊定定嫌東嫌西，予真濟人罵伊厚屎。",
    tailo:
      "I tiānn-tiānn hiâm-tang-hiâm-sai, hōo tsin tsē lâng mē i kāu-sái.",
  },
  {
    hanji: "伊哀怨的歌聲予人想起傷心的代誌。",
    tailo: "I ai-uàn ê kua-siann hōo lâng siūnn-khí siong-sim ê tāi-tsì.",
  },
  {
    hanji: "梨仔誠厚重，無幾粒就三斤矣。",
    tailo: "Lâi-á tsiânn kāu-tāng, bô kuí lia̍p tō sann kin--ah.",
  },
  {
    hanji: "你一直咧哈唏，愛睏就緊去睏。",
    tailo: "Lí it-ti̍t teh hah-hì, ài-khùn tō kín khì khùn.",
  },
  {
    hanji: "柿仔若猶未熟，食著會咬喙。",
    tailo: "Khī-á nā iáu-buē si̍k, tsia̍h tio̍h ē kā-tshuì.",
  },
  {
    hanji: "伊咧睏的時定定會咬喙齒根。",
    tailo: "I teh khùn ê sî tiānn-tiānn ē kā-tshuì-khí-kin.",
  },
  {
    hanji: "哎喲喂！你莫閣叫我做矣！",
    tailo: "Ai--iō-uê! Lí mài koh kiò guá tsò--ah!",
  },
  {
    hanji: "你有夠厚話，叫你莫講，你煞攏講講出來！",
    tailo:
      "Lí ū-kàu kāu-uē, kiò lí mài kóng, lí suah lóng kóng-kóng--tshut-lâi!",
  },
  {
    hanji: "你哪會遐厚禮數，路頭遐遠閣親身送來。",
    tailo:
      "Lí ná ē hiah kāu-lé-sòo, lōo-thâu hiah hn̄g koh tshin-sin sàng--lâi.",
  },
  {
    hanji: "伊這个人足厚譴損，逐項代誌攏著看日。",
    tailo:
      "I tsit ê lâng tsiok kāu-khiàn-sńg, ta̍k hāng tāi-tsì lóng tio̍h khuànn-ji̍t.",
  },
  {
    hanji: "你毋驚伊去奏你的歹話？",
    tailo: "Lí m̄ kiann i khì tsàu lí ê pháinn-uē?",
  },
  {
    hanji: "你毋通予彼个姼仔詼騙去。",
    tailo: "Lí m̄-thang hōo hit ê tshit-á-khue phiàn--khì.",
  },
  {
    hanji: "人講姻緣是天註定，若是無緣，閣較按怎強求嘛無路用。",
    tailo:
      "Lâng kóng in-iân sī thinn tsù-tiānn, nā-sī bô-iân, koh-khah án-tsuánn kiông-kiû mā bô-lōo-īng.",
  },
  {
    hanji: "袋仔喙愛封起來，餅才袂潤去。",
    tailo: "Tē-á-tshuì ài hong--khí-lâi, piánn tsiah bē jūn--khì.",
  },
  {
    hanji: "伊做代誌攏會留一寡屎尾予別人替伊處理。",
    tailo:
      "I tsò tāi-tsì lóng ē lâu tsi̍t-kuá sái-bué hōo pa̍t-lâng thè i tshú-lí.",
  },
  {
    hanji: "咱若去別人兜就愛較客氣咧。",
    tailo: "Lán nā khì pa̍t-lâng tau tō ài khah kheh-khì--leh.",
  },
  {
    hanji: "彼間厝已經貼封條矣，所以袂當買賣矣。",
    tailo:
      "Hit king tshù í-king tah hong-tiâu--ah, sóo-í bē-tàng bé-bē--ah.",
  },
  {
    hanji: "餅袋仔愛封喙，餅才袂潤去。",
    tailo: "Piánn-tē-á ài hong-tshuì, piánn tsiah bē jūn--khì.",
  },
  {
    hanji: "伊的度量不止仔闊，事事項項攏袂計較。",
    tailo:
      "I ê tōo-liōng put-tsí-á khuah, sū-sū-hāng-hāng lóng bē kè-kàu.",
  },
  {
    hanji: "我的代誌，你莫烏白去宣傳。",
    tailo: "Guá ê tāi-tsì, lí mài oo-pe̍h khì suan-thuân.",
  },
  {
    hanji: "明仔載我會坐客運轉去。",
    tailo: "Bîn-á-tsài guá ē tsē kheh-ūn tńg--khì.",
  },
  {
    hanji: "以前美國捌向日本宣戰。",
    tailo: "Í-tsîng Bí-kok bat hiòng Ji̍t-pún suan-tsiàn.",
  },
  {
    hanji: "你莫像屎礐仔蟲蟯蟯鑽。",
    tailo: "Lí mài tshiūnn sái-ha̍k-á-thâng ngia̍uh-ngia̍uh-tsǹg.",
  },
  {
    hanji: "伊已經四十歲矣，當然嘛急欲娶某。",
    tailo: "I í-king sì-tsa̍p huè--ah, tong-jiân mā kip beh tshuā-bóo.",
  },
  {
    hanji: "伊怨家己少年的時無認真讀冊。",
    tailo: "I uàn ka-kī siàu-liân ê-sî bô jīn-tsin tha̍k-tsheh.",
  },
  {
    hanji: "這个囡仔真恬，無愛講話。",
    tailo: "Tsit ê gín-á tsin tiām, bô ài kóng-uē.",
  },
  {
    hanji: "手洗洗咧，好來拜公媽矣。",
    tailo: "Tshiú sé-sé--leh, hó lâi pài kong-má--ah.",
  },
  {
    hanji: "彼幾箱仔物件囥佇後斗就好矣。",
    tailo: "Hit kuí-siunn-á mi̍h-kiānn khǹg tī āu-táu tō hó--ah.",
  },
  {
    hanji: "這層代誌咱後日才閣講。",
    tailo: "Tsit tsân tāi-tsì lán āu-ji̍t tsiah-koh kóng.",
  },
  {
    hanji: "這條錢你後月日愛會記得還我。",
    tailo: "Tsit tiâu tsînn lí āu gue̍h-ji̍t ài ē-kì-tit hîng--guá.",
  },
  {
    hanji: "你去叫遐的學生仔提拭仔共烏枋拭拭咧。",
    tailo:
      "Lí khì kiò hia-ê ha̍k-sing-á the̍h tshit-á kā oo-pang tshit-tshit--leh.",
  },
  {
    hanji: "伊的恩情咱只有等到後世人才閣還矣。",
    tailo:
      "I ê un-tsîng lán tsí-ū tán-kàu āu-sì-lâng tsiah-koh hîng--ah.",
  },
  {
    hanji: "我希望後出世會當做查某。",
    tailo: "Guá hi-bāng āu-tshut-sì ē-tàng tsò tsa-bóo.",
  },
  {
    hanji: "你做的代誌定定愛我共你拭尻川。",
    tailo: "Lí tsò ê tāi-tsì tiānn-tiānn ài guá kā lí tshit-kha-tshng.",
  },
  {
    hanji: "恁後生今年考著佗一間大學？",
    tailo: "Lín hāu-senn kin-nî khó-tio̍h tó tsi̍t king tāi-ha̍k?",
  },
  {
    hanji: "今仔日愛拜佛，你去攢寡物件。",
    tailo: "Kin-á-ji̍t ài pài-pu̍t, lí khì tshuân kuá mi̍h-kiānn.",
  },
  {
    hanji: "伊怨妒別人比伊較好額。",
    tailo: "I uàn-tòo pa̍t-lâng pí i khah hó-gia̍h.",
  },
  {
    hanji: "𪜶後叔是一个勤儉的人。",
    tailo: "In āu-tsik sī tsi̍t ê khîn-khiām ê lâng.",
  },
  {
    hanji: "人講後岫袂疼前人囝，其實愛看人。",
    tailo:
      "Lâng kóng āu-siū bē thiànn tsîng-lâng-kiánn, kî-si̍t ài khuànn lâng.",
  },
  {
    hanji: "伊足急性的，無像我遐𠢕拖沙。",
    tailo: "I tsiok kip-sìng--ê, bô tshiūnn guá hiah gâu thua-sua.",
  },
  {
    hanji: "𪜶後爸對𪜶兄弟仔袂䆀。",
    tailo: "In āu-pē tuì in hiann-tī-á bē-bái.",
  },
  {
    hanji: "正月初一真濟人去廟裡拜拜。",
    tailo: "Tsiann-gue̍h tshe-it tsin tsē lâng khì biō--lí pài-pài.",
  },
  {
    hanji: "伊閣娶的後某對前人囝誠照顧。",
    tailo: "I koh tshuā ê āu-bóo tuì tsîng-lâng-kiánn tsiânn tsiàu-kòo.",
  },
  {
    hanji: "你毋聽我的話，時到後悔就袂赴矣。",
    tailo: "Lí m̄ thiann guá ê uē, sî kàu hiō-hué tō bē-hù--ah.",
  },
  {
    hanji: "彼隻狗仔的後跤斷一肢。",
    tailo: "Hit tsiah káu-á ê āu-kha tn̄g tsi̍t ki.",
  },
  {
    hanji: "雖然厝內真散，伊攏毋捌怨嘆。",
    tailo: "Sui-jiân tshù-lāi tsin sàn, i lóng m̄ bat uàn-thàn.",
  },
  {
    hanji: "伊怨慼家己真歹命，無通好好仔讀冊。",
    tailo:
      "I uàn-tsheh ka-kī tsin pháinn-miā, bô thang hó-hó-á tha̍k-tsheh.",
  },
  {
    hanji: "這領衫欲賣千二，你看怎樣？",
    tailo: "Tsit niá sann beh bē tshing-jī, lí khuànn tsuánn-iūnn?",
  },
  {
    hanji: "我來去提扁擔，共遮的果子擔去賣。",
    tailo: "Guá lâi-khì the̍h pún-tann, kā tsia-ê kué-tsí tann-khì bē.",
  },
  {
    hanji: "咱後頭閣有偌濟錢猶未納？",
    tailo: "Lán āu-thâu koh ū guā-tsē tsînn iáu-buē la̍p?",
  },
  {
    hanji: "後擺你若閣脫箠，我就無愛共你鬥相共矣。",
    tailo:
      "Āu-pái lí nā koh thut-tshuê, guá tō bô ài kā lí tàu-sann-kāng--ah.",
  },
  {
    hanji: "伊講伊後擺想欲做醫生。",
    tailo: "I kóng i āu-pái siūnn-beh tsò i-sing.",
  },
  {
    hanji: "我共衫仔褲挂佇衫架仔頂。",
    tailo: "Guá kā sann-á-khòo kuì tī sann-kè-á-tíng.",
  },
  {
    hanji: "一切攏愛按阮的規矩來行才會使。",
    tailo: "It-tshè lóng ài àn guán ê kui-kí lâi kiânn tsiah ē-sái.",
  },
  {
    hanji: "這條路近是近，毋過傷歹行。",
    tailo: "Tsit tiâu lōo kīn sī kīn, m̄-koh siunn pháinn kiânn.",
  },
  {
    hanji: "是袂䆀啦，毋過交通有較無利便。",
    tailo: "Sī bē-bái--lah, m̄-koh kau-thong ū khah bô lī-piān.",
  },
  {
    hanji: "𪜶兩翁仔某昨日就出國去𨑨迌矣。",
    tailo: "In nn̄g ang-á-bóo tso̍h--ji̍t tō tshut-kok khì tshit-thô--ah.",
  },
  {
    hanji: "我挖心肝予你看，敢講你閣毋相信？",
    tailo: "Guá óo-sim-kuann hōo lí khuànn, kám-kóng lí koh m̄ siong-sìn?",
  },
  {
    hanji: "彼堆火欲化去矣，你緊去提火夾來挓火。",
    tailo:
      "Hit tui hué beh hua--khì--ah, lí kín khì the̍h hué-ngeh lâi thà-hué.",
  },
  {
    hanji: "你指甲傷長矣，愛鉸鉸咧。",
    tailo: "Lí tsíng-kah siunn tn̂g--ah, ài ka-ka--leh.",
  },
  {
    hanji: "伊的指甲不時漆指甲花。",
    tailo: "I ê tsíng-kah put-sî tshat tsíng-kah-hue.",
  },
  {
    hanji: "這件代誌曷使講？看就知矣。",
    tailo: "Tsit kiānn tāi-tsì a̍h-sái kóng? Khuànn tō tsai--ah.",
  },
  {
    hanji: "伊若真正按呢做，就傷超過矣。",
    tailo: "I nā tsin-tsiànn án-ne tsò, tō siunn tshiau-kuè--ah.",
  },
  {
    hanji: "昨昏是上尾一工，今仔日已經袂赴矣。",
    tailo: "Tsa-hng sī siōng-bué tsi̍t kang, kin-á-ji̍t í-king bē-hù--ah.",
  },
  {
    hanji: "兩个人相挖空，平平失氣。",
    tailo: "Nn̄g ê lâng sio-óo-khang, pênn-pênn sit-khuì.",
  },
  {
    hanji: "到底著愛按怎做，你才會相信？",
    tailo: "Tàu-té tio̍h-ài án-tsuánn tsò, lí tsiah ē siong-sìn?",
  },
  {
    hanji: "伊就是傷無良心，才會予人指指揬揬。",
    tailo: "I tō sī siunn bô-liông-sim, tsiah ē hōo lâng kí-kí-tu̍h-tu̍h.",
  },
  {
    hanji: "一陣春風吹來，予人感覺誠清彩。",
    tailo:
      "Tsi̍t tsūn tshun-hong tshue--lâi, hōo lâng kám-kak tsiânn tshing-tshái.",
  },
  {
    hanji: "看伊滿面春風，一定有啥物好代誌。",
    tailo: "Khuànn i muá-bīn tshun-hong, it-tīng ū siánn-mih hó tāi-tsì.",
  },
  {
    hanji: "逐年清明，阮攏轉去南部挂紙。",
    tailo: "Ta̍k-nî Tshing-bîng, guán lóng tńg-khì lâm-pōo kuì-tsuá.",
  },
  {
    hanji: "既然伊無想欲做，你就莫勉強伊。",
    tailo: "Kì-jiân i bô siūnn-beh tsò, lí tō mài bián-kióng--i.",
  },
  {
    hanji: "這逐家攏知矣，你曷著閣講？",
    tailo: "Tse ta̍k-ke lóng tsai--ah, lí a̍h-tio̍h koh kóng?",
  },
  {
    hanji: "我是一个出外人，我的故鄉佇臺東。",
    tailo: "Guá sī tsi̍t ê tshut-guā-lâng, guá ê kòo-hiong tī Tâi-tang.",
  },
  {
    hanji: "你一切著愛按照規定來行，毋通家己大主大意。",
    tailo:
      "Lí it-tshè tio̍h-ài àn-tsiàu kui-tīng lâi kiânn, m̄-thang ka-kī tuā-tsú-tuā-ì.",
  },
  {
    hanji: "你昨暝是去做賊仔呢？無，精神哪會遮爾䆀？",
    tailo:
      "Lí tsa-mê sī khì tsò tsha̍t-á--nih? Bô, tsing-sîn ná ē tsiah-nī bái?",
  },
  {
    hanji: "這項工課我毋捌做過，請你共我指點一下。",
    tailo:
      "Tsit hāng khang-khuè guá m̄ bat tsò--kuè, tshiánn lí kā guá tsí-tiám--tsi̍t-ē.",
  },
  {
    hanji: "去提一塊細塊椅仔來架跤。",
    tailo: "Khì the̍h tsi̍t tè sè tè í-á lâi khuè kha.",
  },
  {
    hanji: "伊這擺會感冒，是去予同事染著。",
    tailo: "I tsit pái ē kám-mōo, sī khì hōo tông-sū jiám--tio̍h.",
  },
  {
    hanji: "某乜人定定佇你的尻脊後講你的歹話。",
    tailo:
      "Bóo-mí-lâng tiānn-tiānn tī lí ê kha-tsiah-āu kóng lí ê pháinn-uē.",
  },
  {
    hanji: "李的定定無佇咧，𪜶某囝敢攏袂講話？",
    tailo:
      "Lí--ê tiānn-tiānn bô tī--leh, in bóo-kiánn kám lóng bē kóng-uē?",
  },
  {
    hanji: "查某的徛這爿，查埔的徛彼爿。",
    tailo: "Tsa-bóo--ê khiā tsit pîng, tsa-poo--ê khiā hit pîng.",
  },
  {
    hanji: "伊一个查某人欲飼一家大細，擔頭誠重。",
    tailo:
      "I tsi̍t ê tsa-bóo-lâng beh tshī tsi̍t ke tuā-sè, tànn-thâu tsiânn tāng.",
  },
  {
    hanji: "阮查某人轉去後頭厝矣。",
    tailo: "Guán tsa-bóo-lâng tńg-khì āu-thâu-tshù--ah.",
  },
  {
    hanji: "阮查某囝今年欲考大學。",
    tailo: "Guán tsa-bóo-kiánn kin-nî beh khó tāi-ha̍k.",
  },
  {
    hanji: "彼幾个查某囡仔徛佇遐毋知是咧等啥人。",
    tailo:
      "Hit kuí ê tsa-bóo gín-á khiā tī hia m̄ tsai sī teh tán siánn-lâng.",
  },
  {
    hanji: "這阮查某孫，頂禮拜才大學出業。",
    tailo: "Tse guán tsa-bóo-sun, tíng lé-pài tsiah tāi-ha̍k tshut-gia̍p.",
  },
  {
    hanji: "這阮查某孫，阮大兄的查某囝啦。",
    tailo: "Tse guán tsa-bóo-sun, guán tuā-hiann ê tsa-bóo-kiánn--lah.",
  },
  {
    hanji: "查埔的請徛佇這爿檢查。",
    tailo: "Tsa-poo--ê tshiánn khiā tī tsit pîng kiám-tsa.",
  },
  {
    hanji: "這个旅行團的查埔人比查某人較少。",
    tailo:
      "Tsit ê lí-hîng-thuân ê tsa-poo-lâng pí tsa-bóo-lâng khah tsió.",
  },
  {
    hanji: "阮查埔人佇菜市仔咧賣果子。",
    tailo: "Guán  tsa-poo-lâng tī tshài-tshī-á teh bē kué-tsí.",
  },
  {
    hanji: "查埔囝著愛敢做敢擔當。",
    tailo: "Tsa-poo-kiánn tio̍h-ài kánn tsò kánn tam-tng.",
  },
  {
    hanji: "這種布料是用天然的染料染的。",
    tailo: "Tsit tsióng pòo-liāu sī īng thian-jiân ê ní-liāu ní--ê.",
  },
  {
    hanji: "伊實在有夠枵鬼，看著啥就想欲食。",
    tailo:
      "I si̍t-tsāi ū-kàu iau-kuí, khuànn-tio̍h siannh tō siūnn-beh tsia̍h.",
  },
  {
    hanji: "練柔道毋但會當強身，嘛會當修身養性。",
    tailo:
      "Liān jiû-tō m̄-nā ē-tàng kiông-sin, mā ē-tàng siu-sin ióng-sìng.",
  },
  {
    hanji: "規工枵飽吵，強欲予你煩死！",
    tailo: "Kui kang iau-pá-tshá, kiōng-beh hōo lí huân--sí!",
  },
  {
    hanji: "會計師明仔載欲來阮公司查數。",
    tailo: "Kuè-kè-su bîn-á-tsài beh lâi guán kong-si tshâ-siàu.",
  },
  {
    hanji: "你莫遮爾枵饞，一支喙食無歇睏。",
    tailo: "Lí mài tsiah-nī iau-sâi, tsi̍t ki tshuì tsia̍h bô hioh-khùn.",
  },
  {
    hanji: "泉水水質若好，泡的茶特別好啉。",
    tailo: "Tsuânn-tsuí tsuí-tsit nā hó, phàu ê tê ti̍k-pia̍t hó-lim.",
  },
  {
    hanji: "洘旱的時陣無水通用，真艱苦。",
    tailo: "Khó-huānn ê sî-tsūn bô tsuí thang īng, tsin kan-khóo.",
  },
  {
    hanji: "用雪文洗過的衫，著愛閣洗汰一擺。",
    tailo: "Iōng sap-bûn sé--kuè ê sann, tio̍h-ài koh sé-thuā--tsi̍t-pái.",
  },
  {
    hanji: "緊去洗身軀，洗好通較早去睏。",
    tailo: "Kín khì sé-sin-khu, sé-hó thang khah tsá khì khùn.",
  },
  {
    hanji: "洗身軀間上好開一个窗仔，較通風。",
    tailo:
      "Sé-sin-khu-king siōng-hó khui tsi̍t ê thang-á, khah thang-hong.",
  },
  {
    hanji: "莫閣吵新娘矣，通予𪜶洞房。",
    tailo: "Mài koh tshá sin-niû--ah, thang hōo in tōng-pông.",
  },
  {
    hanji: "查埔彼爿退婚了後，查某這爿要求愛去𪜶兜共𪜶洗門風。",
    tailo:
      "Tsa-poo hit pîng thè-hun liáu-āu, tsa-bóo tsit pîng iau-kiû ài khì in tau kā in sé-mn̂g-hong.",
  },
  {
    hanji: "較早的人攏佇溝仔墘洗衫。",
    tailo: "Khah-tsá ê lâng lóng tī kau-á-kînn sé-sann.",
  },
  {
    hanji: "無啊！我一下來你就共我洗面，予我足袂爽的。",
    tailo:
      "Bô--ah! Guá tsi̍t-ē lâi lí tō kā guá sé-bīn, hōo guá tsiok bē-sóng--ê.",
  },
  {
    hanji: "伊這个人真清廉，袂歪哥。",
    tailo: "I tsit ê lâng tsin tshing-liâm, bē uai-ko.",
  },
  {
    hanji: "逐日洗浴是一種好的習慣。",
    tailo: "Ta̍k-ji̍t sé-i̍k sī tsi̍t tsióng hó ê si̍p-kuàn.",
  },
  {
    hanji: "過年時仔，街仔路人洘秫秫。",
    tailo: "Kuè-nî-sî-á, ke-á-lōo lâng khó-tsu̍t-tsu̍t.",
  },
  {
    hanji: "地動了後，彼間樓仔厝敢若有淡薄仔歪斜。",
    tailo:
      "Tē-tāng liáu-āu, hit king lâu-á-tshù kánn-ná ū tām-po̍h-á uai-tshua̍h.",
  },
  {
    hanji: "你家己去提鏡照看覓，歪喙雞仔閣想欲食好米。",
    tailo:
      "Lí ka-kī khì the̍h kiànn tsiò khuànn-māi, uai-tshuì ke-á koh siūnn-beh tsia̍h hó bí.",
  },
  {
    hanji: "伊拄才起來咧洗喙爾爾。",
    tailo: "I tú-tsiah khí-lâi teh sé-tshuì niā-niā.",
  },
  {
    hanji: "伊穿一軀粉紅仔色的洋裝。",
    tailo: "I tshīng tsi̍t su hún-âng-á-sik ê iûnn-tsong.",
  },
  {
    hanji: "一領衫穿甲歪膏揤斜，有夠歹看。",
    tailo:
      "Tsi̍t niá sann tshīng kah uai-ko-tshi̍h-tshua̍h, ū-kàu pháinn-khuànn.",
  },
  {
    hanji: "看人咧蹛洋樓，你敢袂欣羨？",
    tailo: "Khuànn lâng teh tuà iûnn-lâu, lí kám bē him-siān?",
  },
  {
    hanji: "垃圾人身軀三工無洗盪。",
    tailo: "Lah-sap lâng sin-khu sann kang bô sé-tn̄g.",
  },
  {
    hanji: "羅漢跤仔四界流，流到南洋去。",
    tailo: "Lô-hàn-kha-á sì-kè liû, liû kàu Lâm-iûnn khì.",
  },
  {
    hanji: "伊共這塊肥豬肉提去炸豬油。",
    tailo: "I kā tsit tè puî ti-bah the̍h-khì tsuànn ti-iû.",
  },
  {
    hanji: "𪜶是為著錢才來變面。",
    tailo: "In sī uī-tio̍h tsînn tsiah lâi pìnn-bīn.",
  },
  {
    hanji: "厝內若有活水來透，錢的用度就會較冗剩。",
    tailo:
      "Tshù-lāi nā ū ua̍h-tsuí lâi thàu, tsînn ê iōng-tōo tō ē khah liōng-siōng.",
  },
  {
    hanji: "伊那講那流目屎，予人看著會心酸。",
    tailo: "I ná kóng ná lâu ba̍k-sái, hōo lâng khuànn tio̍h  ē sim-sng.",
  },
  {
    hanji: "這款衫連鞭就退流行矣。",
    tailo: "Tsit khuán sann liâm-mi tō thè liû-hîng--ah.",
  },
  {
    hanji: "彼个人真狡怪，毋通予伊騙去。",
    tailo: "Hit ê lâng tsin káu-kuài, m̄-thang hōo i phiàn--khì.",
  },
  {
    hanji: "你這个囡仔哪會遮爾仔狡怪！",
    tailo: "Lí tsit ê gín-á ná ē tsiah-nī-á káu-kuài!",
  },
  {
    hanji: "用肥豬肉來炸油，豬油粕仔猶會使來炒菜。",
    tailo:
      "Iōng puî ti-bah lâi tsuànn-iû, ti-iû-phoh-á iáu ē-sái lâi tshá tshài.",
  },
  {
    hanji: "塗跤彼堆炭屎燒猶未過，你毋通去踏著。",
    tailo:
      "Thôo-kha hit tui thuànn-sái sio iáu-buē kuè, lí m̄-thang khì ta̍h--tio̍h.",
  },
  {
    hanji: "伊一直流凊汗，敢若足虛的。",
    tailo: "I it-ti̍t lâu-tshìn-kuānn, kánn-ná tsiok hi--ê.",
  },
  {
    hanji: "伊甘願四界流浪，毋肯好好仔揣頭路。",
    tailo: "I kam-guān sì-kè liû-lōng, m̄ khíng hó-hó-á tshuē thâu-lōo.",
  },
  {
    hanji: "恁查某囝實在真活動，一直走來走去。",
    tailo:
      "Lín tsa-bóo-kiánn si̍t-tsāi tsin ua̍h-tāng, it-ti̍t tsáu lâi tsáu khì.",
  },
  {
    hanji: "你坐遐久，緊起來活動一下。",
    tailo: "Lí tsē hiah kú, kín khí-lâi ua̍h-tāng--tsi̍t-ē.",
  },
  {
    hanji: "阮的圖書館有真濟藝文活動。",
    tailo: "Guán ê tôo-su-kuán ū tsin tsē gē-bûn ua̍h-tāng.",
  },
  {
    hanji: "叫你毋通講你閣講，我實在活欲予你氣死！",
    tailo:
      "Kiò lí m̄-thang kóng lí koh kóng, guá si̍t-tsāi ua̍h-beh hōo lí khì--sí!",
  },
  {
    hanji: "彼粒王梨已經流湯矣，緊提去擲掉。",
    tailo: "Hit lia̍p ông-lâi í-king lâu-thng--ah, kín the̍h-khì tàn-tiāu.",
  },
  {
    hanji: "彼个查某囡仔敢猶活會？",
    tailo: "Hit ê tsa-bóo gín-á kám iáu ua̍h-huē?",
  },
  {
    hanji: "伊看著活跳跳，一點仔都無成破病的人。",
    tailo:
      "I khuànn tio̍h ua̍h-thiàu-thiàu, tsi̍t-tiám-á to bô sîng phuà-pēnn ê lâng.",
  },
  {
    hanji: "少年人愛較活潑咧，毋通遐死酸。",
    tailo: "Siàu-liân-lâng ài khah hua̍t-phuat--leh, m̄-thang hiah sí-sng.",
  },
  {
    hanji: "伊彼號豬哥性，看著媠查某囡仔就流豬哥瀾。",
    tailo:
      "I hit-lō ti-ko-sìng, khuànn-tio̍h suí tsa-bóo gín-á tō lâu-ti-ko-nuā.",
  },
  {
    hanji: "伊一直誠為難，毋知影欲選啥物人去比賽才好。",
    tailo:
      "I it-ti̍t tsiânn uî-lân, m̄ tsai-iánn beh suán siánn-mih-lâng khì pí-sài tsiah hó.",
  },
  {
    hanji: "你是毋是刁故意欲為難伊？",
    tailo: "Lí sī m̄ sī tiau-kòo-ì beh uî-lân--i?",
  },
  {
    hanji: "伊看人趁大錢，看甲流瀾。",
    tailo: "I khuànn lâng thàn-tuā-tsînn, khuànn kah lâu-nuā.",
  },
  {
    hanji: "戲棚頂做甲流汗，戲棚跤嫌甲流瀾。",
    tailo:
      "Hì-pênn-tíng tsò kah lâu-kuānn, hì-pênn-kha hiâm kah lâu-nuā.",
  },
  {
    hanji: "五日節，愛攢一寡牲醴來拜公媽。",
    tailo: "Gōo-ji̍t-tseh, ài tshuân tsi̍t-kuá sing-lé lâi pài kong-má.",
  },
  {
    hanji: "萬般皆是命，半點不由人。",
    tailo: "Bān-pan kai sī bīng, puàn-tiám put iû jîn.",
  },
  {
    hanji: "𪜶爸仔囝生做足相𫝛。",
    tailo: "In pē-á-kiánn senn-tsò tsiok sio-siāng.",
  },
  {
    hanji: "伊佮我相仝，攏無愛食麵。",
    tailo: "I kah guá sio-kāng, lóng bô ài tsia̍h mī.",
  },
  {
    hanji: "阮兩个人相出路，無相拄。",
    tailo: "Guán nn̄g ê lâng sio-tshut-lōo, bô sio-tú.",
  },
  {
    hanji: "伊毋但共人罵，甚至閣出手拍人。",
    tailo: "I m̄-nā kā lâng mē, sīm-tsì koh tshut-tshiú phah--lâng.",
  },
  {
    hanji: "昨昏電視有報講兩个𨑨迌囡仔佇公園相刣。",
    tailo:
      "Tsa-hng tiān-sī ū pò kóng nn̄g ê tshit-thô-gín-á tī kong-hn̂g sio-thâi.",
  },
  {
    hanji: "一某無人知，兩某相卸代。",
    tailo: "Tsi̍t bóo bô lâng tsai, nn̄g bóo sio-sià-tāi.",
  },
  {
    hanji: "阮兩个頭拄仔佇路口相拄。",
    tailo: "Guán nn̄g ê thâu-tú-á tī lōo-kháu sio-tú.",
  },
  {
    hanji: "𪜶兩个好朋友哪會相拍？",
    tailo: "In nn̄g ê hó-pîng-iú ná ē sio-phah?",
  },
  {
    hanji: "伊彼隻相拍雞仔真厲害。",
    tailo: "I hit tsiah sio-phah-ke-á tsin lī-hāi.",
  },
  {
    hanji: "彼箍若相拍雞仔，無人愛參伊鬥陣。",
    tailo: "Hit khoo ná sio-phah-ke-á, bô lâng ài tsham i tàu-tīn.",
  },
  {
    hanji: "糖仔一人一粒，毋通相爭。",
    tailo: "Thn̂g-á tsi̍t lâng tsi̍t lia̍p, m̄-thang sio-tsenn.",
  },
  {
    hanji: "我看𪜶兩个是天生相剋，才會見面就相觸。",
    tailo:
      "Guá khuànn in nn̄g ê sī thian-sing sio-khik, tsiah ē kìnn-bīn tō sio-tak.",
  },
  {
    hanji: "你莫佮我坐相倚，較袂熱。",
    tailo: "Lí mài kah guá tsē sio-uá, khah bē jua̍h.",
  },
  {
    hanji: "見著人愛相借問，才有禮貌。",
    tailo: "Kìnn-tio̍h lâng ài sio-tsioh-mn̄g, tsiah ū-lé-māu.",
  },
  {
    hanji: "𪜶兩个佇街仔路相唚，予人看著。",
    tailo: "In nn̄g ê tī ke-á-lōo sio-tsim, hōo lâng khuànn--tio̍h.",
  },
  {
    hanji: "看鬧熱的人相挨相𤲍。",
    tailo: "Khuànn lāu-jia̍t ê lâng sio-e-sio-kheh.",
  },
  {
    hanji: "𪜶兩个無相捌，咱來介紹予𪜶熟似。",
    tailo: "In nn̄g ê bô sio-bat, lán lâi kài-siāu hōo in si̍k-sāi.",
  },
  {
    hanji: "這條路佮彼條路是相迵的。",
    tailo: "Tsit tiâu lōo kah hit tiâu lōo sī sio-thàng--ê.",
  },
  {
    hanji: "我欲出國的時，真濟朋友攏來相送。",
    tailo: "Guá beh tshut-kok ê sî, tsin tsē pîng-iú lóng lâi sio-sàng.",
  },
  {
    hanji: "阮兩个相閃身，煞攏無看著對方。",
    tailo: "Guán nn̄g ê sio-siám-sin, suah lóng bô khuànn-tio̍h tuì-hong.",
  },
  {
    hanji: "這條路傷狹，袂當相閃車。",
    tailo: "Tsit tiâu lōo siunn e̍h, bē-tàng sio-siám-tshia.",
  },
  {
    hanji: "看兩人咧相偃實在真刺激。",
    tailo: "Khuànn nn̄g lâng teh sio-ián si̍t-tsāi tsin tshì-kik.",
  },
  {
    hanji: "你著愛珍惜咱兩人的感情。",
    tailo: "Lí tio̍h-ài tin-sioh lán nn̄g lâng ê kám-tsîng.",
  },
  {
    hanji: "𪜶兩人為著𨑨迌物仔咧相舂。",
    tailo: "In nn̄g lâng uī-tio̍h tshit-thô-mih-á teh sio-tsing.",
  },
  {
    hanji: "伊駛車佇臺北佮人相舂，這馬咧等警察去處理。",
    tailo:
      "I sái-tshia tī Tâi-pak kah lâng sio-tsing, tsit-má teh tán kíng-tshat khì tshú-lí.",
  },
  {
    hanji: "逐家相連紲行對伊身軀邊，欲予伊簽名。",
    tailo:
      "Ta̍k-ke sio-liân-suà kiânn tuì i sin-khu-pinn, beh hōo i tshiam-miâ.",
  },
  {
    hanji: "聽著遮的鬼仔古，我直直起畏寒。",
    tailo: "Thiann-tio̍h tsia-ê kuí-á-kóo, guá ti̍t-ti̍t khí-uì-kuânn.",
  },
  {
    hanji: "兩人相尋，真久攏毋分開。",
    tailo: "Nn̄g lâng sio-siâm, tsin kú lóng m̄ hun--khui.",
  },
  {
    hanji: "無，恁兩个相換好矣，伊徛頭前，你徛後壁。",
    tailo:
      "Bô, lín nn̄g ê sio-uānn hó--ah, i khiā thâu-tsîng, lí khiā āu-piah.",
  },
  {
    hanji: "人無爽快，直直畏熱起來。",
    tailo: "Lâng bô sóng-khuài, ti̍t-ti̍t uì-jua̍h--khí-lâi.",
  },
  {
    hanji: "我拄才看著兩个查某人佇街仔路相罵。",
    tailo:
      "Guá tú-tsiah khuànn-tio̍h nn̄g ê tsa-bóo-lâng tī ke-á-lōo sio-mē.",
  },
  {
    hanji: "伊是一个相諍毋認輸，相輸閣毋捌贏的人。",
    tailo:
      "I sī tsi̍t ê sio-tsènn m̄ jīn-su, sio-su koh m̄ bat iânn ê lâng.",
  },
  {
    hanji: "恁兩个莫閣相激矣，無，等一下閣起冤家。",
    tailo:
      "Lín nn̄g ê mài koh sio-kik--ah, bô, tán--tsi̍t-ē koh khí uan-ke.",
  },
  {
    hanji: "𪜶阿爸叫伊轉去相親。",
    tailo: "In a-pah kiò i tńg-khì siòng-tshin.",
  },
  {
    hanji: "你若毋相信，咱就來相輸。",
    tailo: "Lí nā m̄ siong-sìn, lán tō lâi sio-su.",
  },
  {
    hanji: "逐遍若叫你讀冊，你就開始盹龜。",
    tailo: "Ta̍k piàn nā kiò lí tha̍k-tsheh, lí tō khai-sí tuh-ku.",
  },
  {
    hanji: "我今仔日是專工欲來佮你相辭的。",
    tailo: "Guá kin-á-ji̍t sī tsuan-kang beh lâi kah lí sio-sî--ê.",
  },
  {
    hanji: "𪜶兩个佇遐相嚷誠久矣，我予𪜶吵甲強欲起痟矣。",
    tailo:
      "In nn̄g ê tī hia sio-jiáng tsiânn kú--ah, guá hōo in tshá kah kiōng-beh khí-siáu--ah.",
  },
  {
    hanji: "恁按呢不時相觸，敢袂𤺪？",
    tailo: "Lín án-ne put-sî sio-tak, kám bē siān?",
  },
  {
    hanji: "這項物件你小共我看一下，我連鞭就轉來。",
    tailo:
      "Tsit hāng mi̍h-kiānn lí sió kā guá khuànn--tsi̍t-ē, guá liâm-mi tō tńg--lâi.",
  },
  {
    hanji: "這層親事愛看伊家己的意思。",
    tailo: "Tsit tsân tshin-sū ài khuànn i ka-kī ê ì-sù.",
  },
  {
    hanji: "外口真寒，你愛加穿一領衫。",
    tailo: "Guā-kháu tsin kuânn, lí ài ke tshīng tsi̍t niá sann.",
  },
  {
    hanji: "你做代誌是袂當共我省工。",
    tailo: "Lí tsò tāi-tsì sī bē-tàng kā guá síng-kang.",
  },
  {
    hanji: "寫甲遐爾細字，你敢看有？",
    tailo: "Siá kah hiah-nī sè jī, lí kám khuànn-ū?",
  },
  {
    hanji: "你愛有出脫人才會看你有。",
    tailo: "Lí ài ū tshut-thuat lâng tsiah ē khuànn-lí-ū.",
  },
  {
    hanji: "昨暝佇夜市仔遐，我有看見人咧表演魔術。",
    tailo:
      "Tsa-mê tī iā-tshī-á hia, guá ū khuànn-kìnn lâng teh piáu-ián môo-su̍t.",
  },
  {
    hanji: "今仔日下晡的天氣真秋凊。",
    tailo: "Kin-á-ji̍t ē-poo ê thinn-khì tsin tshiu-tshìn.",
  },
  {
    hanji: "做人若會曉看破世情，會較好過日。",
    tailo: "Tsò-lâng nā ē-hiáu khuànn-phuà sè-tsîng, ē khah hó kuè-ji̍t.",
  },
  {
    hanji: "伊予人看破跤手矣，無人會閣再相信伊。",
    tailo:
      "I hōo lâng khuànn-phuà-kha-tshiú--ah, bô lâng ē koh-tsài siong-sìn--i.",
  },
  {
    hanji: "你就是毋肯拍拚毋才會予人看衰。",
    tailo: "Lí tō sī m̄ khíng phah-piànn m̄-tsiah ē hōo lâng khuànn-sue.",
  },
  {
    hanji: "伊若是欲食毋討趁，後擺就會予人看袂起。",
    tailo:
      "I nā-sī beh tsia̍h m̄ thó-thàn, āu-pái tō ē hōo lâng khuànn-bē-khí.",
  },
  {
    hanji: "我做的代誌逐家看現現，毋驚人講閒仔話。",
    tailo:
      "Guá tsò ê tāi-tsì ta̍k-ke khuànn-hiān-hiān, m̄ kiann lâng kóng îng-á-uē.",
  },
  {
    hanji: "你去看覓，才來共我講。",
    tailo: "Lí khì khuànn-māi, tsiah lâi kā guá kóng.",
  },
  {
    hanji: "你是佇佗位啦？我哪會攏看無。",
    tailo: "Lí sī tī tó-uī--lah? Guá ná ē lóng khuànn-bô.",
  },
  {
    hanji: "你講的話攏做袂到，莫怪人會看你無。",
    tailo: "Lí kóng ê uē lóng tsò bē kàu, bo̍k-kuài lâng ē khuànn lí bô.",
  },
  {
    hanji: "你就是無志氣才會予人看無起。",
    tailo: "Lí tō sī bô tsì-khì tsiah ē hōo lâng khuànn-bô-khí.",
  },
  {
    hanji: "你若有自信就免驚予人看輕。",
    tailo: "Lí nā ū tsū-sìn tō bián kiann hōo lâng khuànn-khin.",
  },
  {
    hanji: "有樣看樣，無樣家己想。",
    tailo: "Ū iūnn khuànn-iūnn, bô iūnn ka-kī siūnn.",
  },
  {
    hanji: "伊大箍把是好看頭，身體其實無通好。",
    tailo: "I tuā-khoo-pé sī hó-khuànn-thâu, sin-thé kî-si̍t bô thang hó.",
  },
  {
    hanji: "你病甲遮爾嚴重，愛緊去看醫生。",
    tailo: "Lí pēnn kah tsiah-nī giâm-tiōng, ài kín khì khuànn-i-sing.",
  },
  {
    hanji: "我是予阿媽看顧大漢的。",
    tailo: "Guá sī hōo a-má khuànn-kòo tuā-hàn--ê.",
  },
  {
    hanji: "伊真愛佇背後講人的長短跤話。",
    tailo: "I tsin ài tī puē-āu kóng lâng ê tn̂g-té-kha-uē.",
  },
  {
    hanji: "彼塊田借錢已經第二胎矣。",
    tailo: "Hit tè tshân tsioh tsînn í-king tē-jī thai--ah.",
  },
  {
    hanji: "是啥原因致使代誌到這款地步？",
    tailo: "Sī siánn guân-in tì-sú tāi-tsì kàu tsit khuán tē-pōo?",
  },
  {
    hanji: "我今仔日胃口䆀，無想欲食物件。",
    tailo: "Guá kin-á-ji̍t uī-kháu bái, bô siūnn-beh tsia̍h mi̍h-kiānn.",
  },
  {
    hanji: "我對伊無胃口，你莫閣牽矣。",
    tailo: "Guá tuì i bô uī-kháu, lí mài koh khan--ah.",
  },
  {
    hanji: "伊的面色紅牙紅牙，看著真勇健。",
    tailo: "I ê bīn-sik âng-gê-âng-gê, khuànn tio̍h tsin ióng-kiānn.",
  },
  {
    hanji: "細漢的時，阮阿公就教我背冊，閣教我真濟古早人講的道理。",
    tailo:
      "Sè-hàn ê sî, guán a-kong tō kà guá puē-tsheh, koh kà guá tsin tsē kóo-tsá-lâng kóng ê tō-lí.",
  },
  {
    hanji: "伊有去送紅包才會當占著這缺。",
    tailo: "I ū khì sàng âng-pau tsiah ē-tàng tsiàm-tio̍h tsit khueh.",
  },
  {
    hanji: "伊遮爾少年就致身命，實在可憐。",
    tailo: "I tsiah-nī siàu-liân tō tì-sin-miā, si̍t-tsāi khó-liân.",
  },
  {
    hanji: "攏是你傷倖伊，才致使伊今仔日會變按呢。",
    tailo:
      "Lóng sī lí siunn sīng--i, tsiah tì-sú i kin-á-ji̍t ē pìnn án-ne.",
  },
  {
    hanji: "你敢有收著林的的紅帖仔？",
    tailo: "Lí kám ū siu-tio̍h Lîm--ê ê âng-thiap-á?",
  },
  {
    hanji: "你若閣背約，伊就毋佮你合作矣。",
    tailo: "Lí nā koh puē-iok, i tō m̄ kah lí ha̍p-tsok--ah.",
  },
  {
    hanji: "伊因為營養不良，煞來致病。",
    tailo: "I in-uī îng-ióng put-liông, suah lâi tì-pēnn.",
  },
  {
    hanji: "若欲參選，伊的背景真好。",
    tailo: "Nā beh tsham-suán, i ê puē-kíng tsin hó.",
  },
  {
    hanji: "伊食到七十外矣，猶閣是紅膏赤蠘。",
    tailo:
      "I tsia̍h kàu tshit-tsa̍p-guā--ah, iáu-koh sī âng-ko-tshiah-tshi̍h.",
  },
  {
    hanji: "伊受爸母致蔭，才會當遮好命。",
    tailo: "I siū pē-bú tì-ìm, tsiah ē-tàng tsiah hó-miā.",
  },
  {
    hanji: "這个姑娘仔生做真美麗。",
    tailo: "Tsit ê koo-niû-á senn-tsò tsin bí-lē.",
  },
  {
    hanji: "你講若你講，我才毋相信。",
    tailo: "Lí kóng ná lí kóng, guá tsiah m̄ siong-sìn.",
  },
  {
    hanji: "塗跤先苴報紙才開始油漆。",
    tailo: "Thôo-kha sing tsū pò-tsuá tsiah khai-sí iû-tshat.",
  },
  {
    hanji: "伊是一个做苦工的苦力。",
    tailo: "I sī tsi̍t ê tsò khóo-kang ê ku-lí.",
  },
  {
    hanji: "你著認真讀冊，毋通枉費恁老爸對你的苦心。",
    tailo:
      "Lí tio̍h jīn-tsin tha̍k-tsheh, m̄-thang óng-huì lín lāu-pē tuì lí ê khóo-sim.",
  },
  {
    hanji: "伊對我的感情若有若無，害我定定失眠。",
    tailo:
      "I tuì guá ê kám-tsîng ná ū ná bô, hāi guá tiānn-tiānn sit-bîn.",
  },
  {
    hanji: "你若是人無爽快，就較早去歇睏。",
    tailo: "Lí nā-sī lâng bô sóng-khuài, tō khah tsá khì hioh-khùn.",
  },
  {
    hanji: "看著電影的主角予人苦毒，觀眾綴咧流目屎。",
    tailo:
      "Khuànn-tio̍h tiān-iánn ê tsú-kak hōo lâng khóo-to̍k, kuan-tsiòng tuè leh lâu ba̍k-sái.",
  },
  {
    hanji: "大兄共伊滿腹的苦情講予我聽。",
    tailo: "Tuā-hiann kā i muá-pak ê khóo-tsîng kóng hōo guá thiann.",
  },
  {
    hanji: "若準明仔載落雨，咱就莫去矣！",
    tailo: "Nā-tsún bîn-á-tsài lo̍h-hōo, lán tō mài khì--ah!",
  },
  {
    hanji: "這齣電影我若像捌看過。",
    tailo: "Tsit tshut tiān-iánn guá ná-tshiūnn bat khuànn--kuè.",
  },
  {
    hanji: "伊就若親像我的親人仝款！",
    tailo: "I tō ná-tshin-tshiūnn guá ê tshin-lâng kāng-khuán!",
  },
  {
    hanji: "彼个人傷苛頭，我無想欲佮伊交陪。",
    tailo: "Hit ê lâng siunn khô-thâu, guá bô siūnn-beh kah i kau-puê.",
  },
  {
    hanji: "你免共伊苦勸矣，伊袂聽你的話。",
    tailo: "Lí bián kā i khóo-khǹg--ah, i bē thiann lí ê uē.",
  },
  {
    hanji: "彼个物件限你明仔載中晝以前予我。",
    tailo:
      "Hit ê mi̍h-kiānn hān lí bîn-á-tsài tiong-tàu í-tsîng hōo--guá.",
  },
  {
    hanji: "伊講話重句，愈緊張愈嚴重。",
    tailo: "I kóng-uē tîng-kù, jú kín-tiunn jú giâm-tiōng.",
  },
  {
    hanji: "你的罪惡重重疊疊，洗袂清啦！",
    tailo: "Lí ê tsuē-ok tîng-tîng-tha̍h-tha̍h, sé bē tshing--lah!",
  },
  {
    hanji: "這領衫是彼領的重倍價。",
    tailo: "Tsit niá sann sī hit niá ê tîng-puē kè.",
  },
  {
    hanji: "這間的雞卵糕重倍好食。",
    tailo: "Tsit king ê ke-nn̄g-ko tîng-puē hó-tsia̍h.",
  },
  {
    hanji: "月底又閣迫倚矣，愛閣攢會仔錢囉。",
    tailo: "Gue̍h-té iū-koh pik-uá--ah, ài koh tshuân huē-á-tsînn--looh.",
  },
  {
    hanji: "代誌去予伊舞一下重耽去。",
    tailo: "Tāi-tsì khì hōo i bú tsi̍t-ē tîng-tânn--khì.",
  },
  {
    hanji: "你共我鬥想一个計智來對付伊。",
    tailo: "Lí kā guá tàu siūnn tsi̍t ê kè-tì lâi tuì-hù--i.",
  },
  {
    hanji: "我已經想無閣較好的計策矣！",
    tailo: "Guá í-king siūnn-bô koh-khah hó ê kè-tshik--ah!",
  },
  {
    hanji: "校長真重視這擺的音樂比賽。",
    tailo: "Hāu-tiúnn tsin tiōng-sī tsit pái ê im-ga̍k pí-sài.",
  },
  {
    hanji: "伊去予車挵一下著重傷。",
    tailo: "I khì hōo tshia lòng tsi̍t-ē tio̍h tāng-siong.",
  },
  {
    hanji: "萬項代誌愛看較開咧，毋通傷計較。",
    tailo:
      "Bān-hāng tāi-tsì ài khuànn khah khui--leh, m̄-thang siunn kè-kàu.",
  },
  {
    hanji: "朋友公家做生理，金錢的問題一定愛計較清楚。",
    tailo:
      "Pîng-iú kong-ke tsò-sing-lí, kim-tsînn ê būn-tê it-tīng ài kè-kàu tshing-tshó.",
  },
  {
    hanji: "你毋通起歹心共伊計算。",
    tailo: "Lí m̄-thang khí pháinn-sim kā i kè-sǹg.",
  },
  {
    hanji: "小可代誌爾爾，無要緊。",
    tailo: "Sió-khuá tāi-tsì niā-niā, bô iàu-kín.",
  },
  {
    hanji: "伊無要緊厝內的代誌，干焦要緊佮朋友的約束。",
    tailo:
      "I bô iàu-kín tshù-lāi ê tāi-tsì, kan-na iàu-kín kah pîng-iú ê iok-sok.",
  },
  {
    hanji: "𪜶這遍的旅遊，費用攏由公司負擔。",
    tailo: "In tsit piàn ê lí-iû, huì-iōng lóng iû kong-si hū-tam.",
  },
  {
    hanji: "𪜶兜生活的重擔，攏是伊咧擔。",
    tailo: "In tau sing-ua̍h ê tāng-tànn, lóng sī i teh tann.",
  },
  {
    hanji: "騎車若欲載物件，物件就愛分伻囥，才袂重頭輕。",
    tailo:
      "Khiâ-tshia nā beh tsài mi̍h-kiānn, mi̍h-kiānn tō ài pun-phenn khǹg, tsiah bē tāng-thâu-khin.",
  },
  {
    hanji: "伊佮𪜶女朋友的愛情早就飛去矣。",
    tailo: "I kah in lú-pîng-iú ê ài-tsîng tsá tō pue--khì--ah.",
  },
  {
    hanji: "這隻飛行機是欲飛美國的。",
    tailo: "Tsit tsiah hue-lîng-ki sī beh pue Bí-kok--ê.",
  },
  {
    hanji: "這蕊花線條畫了，色愛食較豔咧。",
    tailo: "Tsit luí hue suànn-tiâu uē-liáu, sik ài tsia̍h khah iām--leh.",
  },
  {
    hanji: "食老了後目睭花花，看報紙足食力。",
    tailo:
      "Tsia̍h-lāu liáu-āu ba̍k-tsiu hue-hue, khuànn pò-tsuá tsiok tsia̍h-la̍t.",
  },
  {
    hanji: "這擺你看我的面子，就莫佮伊計較矣。",
    tailo: "Tsit pái lí khuànn guá ê bīn-tsú, tō mài kah i kè-kàu--ah.",
  },
  {
    hanji: "彼个查某囡仔面水袂䆀。",
    tailo: "Hit ê tsa-bóo gín-á bīn-tsuí bē-bái.",
  },
  {
    hanji: "看我的面水，原諒伊啦！",
    tailo: "Khuànn guá ê bīn-tsuí, guân-liōng--i--lah!",
  },
  {
    hanji: "伊風火夯起來矣，你愛較細膩咧。",
    tailo: "I hong-hué giâ--khí-lâi--ah, lí ài khah sè-jī--leh.",
  },
  {
    hanji: "伊當佇風火頭，你千萬毋通去惹伊。",
    tailo: "I tng tī hong-hué-thâu, lí tshian-bān m̄-thang khì jiá--i.",
  },
  {
    hanji: "店面開佇三角窗較食市。",
    tailo: "Tiàm-bīn khui tī sann-kak-thang khah tsia̍h-tshī.",
  },
  {
    hanji: "這項物件予人食名領去矣。",
    tailo: "Tsit hāng mi̍h-kiānn hōo lâng tsia̍h-miâ niá--khì--ah.",
  },
  {
    hanji: "這間店是食名爾爾，物件品質無偌好。",
    tailo:
      "Tsit king tiàm sī tsia̍h-miâ niā-niā, mi̍h-kiānn phín-tsit bô guā hó.",
  },
  {
    hanji: "你的面色無好，敢會是睏無飽眠？",
    tailo: "Lí ê bīn-sik bô hó, kám ē sī khùn bô pá-bîn?",
  },
  {
    hanji: "媽媽今仔日的面色怪怪，咱愛較乖咧，才袂予人罵。",
    tailo:
      "Má-mah kin-á-ji̍t ê bīn-sik kuài-kuài, lán ài khah kuai--leh, tsiah bē hōo lâng mē.",
  },
  {
    hanji: "伊這項物件小等閣愛食色，做了有夠工夫。",
    tailo:
      "I tsit hāng mi̍h-kiānn sió-tán koh ài tsia̍h-sik, tsò liáu ū-kàu kang-hu.",
  },
  {
    hanji: "你莫閣膨風矣，欲講去風尾講！",
    tailo: "Lí mài koh phòng-hong--ah, beh kóng khì hong-bué kóng!",
  },
  {
    hanji: "人講：「第三查某囝食命」，莫怪你遐好命。",
    tailo:
      "Lâng kóng, “Tē-sann tsa-bóo-kiánn tsia̍h-miā”, bo̍k-kuài lí hiah hó-miā.",
  },
  {
    hanji: "天氣誠寒，你著愛先抹面油才出門。",
    tailo:
      "Thinn-khì tsiânn kuânn, lí tio̍h-ài sing buah bīn-iû tsiah tshut-mn̂g.",
  },
  {
    hanji: "冤冤仇仇，風波幾時休。",
    tailo: "Uan-uan-siû-siû, hong-pho kí sî hiu.",
  },
  {
    hanji: "食物一定愛清氣，才有衛生。",
    tailo: "Si̍t-bu̍t it-tīng ài tshing-khì, tsiah ū uē-sing.",
  },
  {
    hanji: "美麗的景色出現佇我面前。",
    tailo: "Bí-lē ê kíng-sik tshut-hiān tī guá bīn-tsîng.",
  },
  {
    hanji: "面前咱所拄著的問題攏無法度解決，是欲按怎才好？",
    tailo:
      "Bīn-tsîng lán sóo tú--tio̍h ê būn-tê lóng bô-huat-tōo kái-kuat, sī beh án-tsuánn tsiah hó?",
  },
  {
    hanji: "伊真有風度，共對頭恭喜。",
    tailo: "I tsin ū hong-tōo, kā tuì-thâu kiong-hí.",
  },
  {
    hanji: "作穡人攏愛靠天公伯仔，才有通食穿。",
    tailo:
      "Tsoh-sit-lâng lóng ài khò Thinn-kong-peh--á, tsiah ū thang tsia̍h-tshīng.",
  },
  {
    hanji: "伊的目睭去予風飛沙坱著。",
    tailo: "I ê ba̍k-tsiu khì hōo hong-pue-sua ing--tio̍h.",
  },
  {
    hanji: "伊下暗去食桌，無佇厝裡。",
    tailo: "I e-àm khì tsia̍h-toh, bô tī tshù--lí.",
  },
  {
    hanji: "你愛拍拚趁錢，買新厝，予恁爸風神一下。",
    tailo:
      "Lí ài phah-piànn thàn-tsînn, bé sin tshù, hōo lín pâ hong-sîn--tsi̍t-ē.",
  },
  {
    hanji: "做生理毋通共人食秤頭。",
    tailo: "Tsò-sing-lí m̄-thang kā lâng tsia̍h-tshìn-thâu.",
  },
  {
    hanji: "你逐工食清領便，閣有啥物好煩惱的？",
    tailo:
      "Lí ta̍k-kang tsia̍h-tshing-niá-piān, koh ū siánn-mih hó huân-ló--ê?",
  },
  {
    hanji: "麻煩你共面頂彼本冊提來予我。",
    tailo: "Mâ-huân lí kā bīn-tíng hit pún tsheh the̍h-lâi hōo--guá.",
  },
  {
    hanji: "今仔日風湧真大，是毋是風颱欲來矣？",
    tailo: "Kin-á-ji̍t hong-íng tsin tuā, sī m̄ sī hong-thai beh lâi--ah?",
  },
  {
    hanji: "來啦！盡量食菜，免客氣。",
    tailo: "Lâi--lah! Tsīn-liōng tsia̍h tshài, bián kheh-khì.",
  },
  {
    hanji: "伊做代誌認真，風評袂䆀。",
    tailo: "I tsò tāi-tsì jīn-tsin, hong-phîng bē-bái.",
  },
  {
    hanji: "阮囝咧做兵，後禮拜我欲來去面會。",
    tailo: "Guán kiánn teh tsò-ping, āu lé-pài guá beh lâi-khì biān-huē.",
  },
  {
    hanji: "叫恁老爸趕緊轉來食暗矣。",
    tailo: "Kiò lín lāu-pē kuánn-kín tńg-lâi tsia̍h-àm--ah.",
  },
  {
    hanji: "去市場拄著一隻飛鼠，錢就予伊撏去矣。",
    tailo:
      "Khì tshī-tiûnn tú-tio̍h tsi̍t tsiah pue-tshí, tsînn tō hōo i jîm--khì--ah.",
  },
  {
    hanji: "伊真有食福，每一擺來，我攏拄好咧煮好料的。",
    tailo:
      "I tsin ū tsia̍h-hok, muí tsi̍t pái lâi, guá lóng tú-hó teh tsú hó-liāu--ê.",
  },
  {
    hanji: "看你按呢面憂面結，是有啥物心事？",
    tailo: "Khuànn lí án-ne bīn-iu-bīn-kat, sī ū siánn-mih sim-sū?",
  },
  {
    hanji: "衫仔愛食漿過，才會伸。",
    tailo: "Sann-á ài tsia̍h-tsiunn--kuè, tsiah ē tshun.",
  },
  {
    hanji: "你看著面熟面熟，咱敢捌相見過？",
    tailo: "Lí khuànn tio̍h bīn-si̍k-bīn-si̍k, lán kám bat sio-kìnn--kuè?",
  },
  {
    hanji: "看恁兩个感情遮好，我會食醋呢。",
    tailo: "Khuànn lín nn̄g ê kám-tsîng tsiah hó, guá ē tsia̍h-tshòo--neh.",
  },
  {
    hanji: "你就是對人傷無客氣，才會不時咧食膨餅。",
    tailo:
      "Lí tō sī tuì lâng siunn bô kheh-khì, tsiah ē put-sî teh tsia̍h-phòng-piánn.",
  },
  {
    hanji: "伊才毋是彼款會食錢的人。",
    tailo: "I tsiah m̄ sī hit khuán ē tsia̍h-tsînn ê lâng.",
  },
  {
    hanji: "伊都徛佇你的面頭前矣，你閣無看著。",
    tailo:
      "I to khiā tī lí ê bīn-thâu-tsîng--ah, lí koh bô khuànn--tio̍h.",
  },
  {
    hanji: "伊佇𪜶阿叔遐食頭路。",
    tailo: "I tī in a-tsik hia tsia̍h-thâu-lōo.",
  },
  {
    hanji: "風喙口有一陣風聲噓噓叫。",
    tailo: "Hong-tshuì-kháu ū tsi̍t tsūn hong-siann hū-hū-kiò.",
  },
  {
    hanji: "你敢有聽著彼件代誌的風聲？",
    tailo: "Lí kám ū thiann-tio̍h hit kiānn tāi-tsì ê hong-siann?",
  },
  {
    hanji: "外口當咧風聲講金仔欲起大價矣。",
    tailo: "Guā-kháu tng-teh hong-siann kóng kim-á beh khí-tuā-kè--ah.",
  },
  {
    hanji: "小可仔代誌毋通風聲嗙影，講甲毋知偌嚴重咧。",
    tailo:
      "Sió-khuá-á tāi-tsì m̄-thang hong-siann-pòng-iánn, kóng kah m̄ tsai guā giâm-tiōng--leh.",
  },
  {
    hanji: "逐項攏欲計較，上尾食虧的是你家己。",
    tailo:
      "Ta̍k hāng lóng beh kè-kàu, siōng-bué tsia̍h-khui--ê sī lí ka-kī.",
  },
  {
    hanji: "看伊行路的款，實在有夠風騷。",
    tailo: "Khuànn i kiânn-lōo ê khuán, si̍t-tsāi ū-kàu hong-so.",
  },
  {
    hanji: "俺逐家攏著愛疼俺這塊土地。",
    tailo: "Án ta̍k-ke lóng tio̍h-ài thiànn án tsit tè thóo-tē.",
  },
  {
    hanji: "你就是攏無修行，性地才會遮爾仔䆀。",
    tailo: "Lí tō sī lóng bô siu-hīng, sìng-tē tsiah ē tsiah-nī-á bái.",
  },
  {
    hanji: "咱愛時常修養咱的心行，才袂做失德的代誌。",
    tailo:
      "Lán ài sî-siông siu-ióng lán ê sim-hīng, tsiah bē tsò sit-tik ê tāi-tsì.",
  },
  {
    hanji: "伊的修養真好，攏袂佮人冤家。",
    tailo: "I ê siu-ióng tsin hó, lóng bē kah lâng uan-ke.",
  },
  {
    hanji: "你毋通笑伊倯，伊真有學問閣有修養。",
    tailo: "Lí m̄-thang tshiò i sông, i tsin ū ha̍k-būn koh ū siu-ióng.",
  },
  {
    hanji: "開五百箍買一枝筆，敢有值？",
    tailo: "Khai gōo-pah khoo bé tsi̍t ki pit, kám ū ta̍t?",
  },
  {
    hanji: "做甲欲死，毋值得人一句話。",
    tailo: "Tsò kah beh-sí, m̄ ta̍t-tit lâng tsi̍t kù uē.",
  },
  {
    hanji: "為著小可仔代誌來冤家，真毋值。",
    tailo: "Uī-tio̍h sió-khuá-á tāi-tsì lâi uan-ke, tsin m̄-ta̍t.",
  },
  {
    hanji: "一兼二顧，摸蜊仔兼洗褲。",
    tailo: "It kiam jī kòo, bong lâ-á kiam sé khòo.",
  },
  {
    hanji: "伊寫字、食飯攏用倒手。",
    tailo: "I siá-jī, tsia̍h-pn̄g lóng īng tò-tshiú.",
  },
  {
    hanji: "你欲揣的彼間厝佇倒手爿。",
    tailo: "Lí beh tshuē ê hit king tshù tī tò-tshiú-pîng.",
  },
  {
    hanji: "你頭拄仔講的彼間店是佇路的倒爿抑是正爿？",
    tailo:
      "Lí thâu-tú-á kóng ê hit king tiàm sī tī lōo ê tò-pîng ia̍h-sī tsiànn-pîng?",
  },
  {
    hanji: "你佗位無爽快，哪會咧流凊汗？",
    tailo: "Lí tó-uī bô sóng-khuài, ná ē teh lâu-tshìn-kuānn?",
  },
  {
    hanji: "你心內有啥物冤屈，攏講出來無要緊。",
    tailo:
      "Lí sim-lāi ū siánn-mih uan-khut, lóng kóng--tshut-lâi bô iàu-kín.",
  },
  {
    hanji: "這款冤枉錢你曷開會落去！",
    tailo: "Tsit khuán uan-óng tsînn lí a̍h khai ē lo̍h--khì!",
  },
  {
    hanji: "摒掃的工課予倩的去做就好矣！",
    tailo: "Piànn-sàu ê khang-khuè hōo tshiànn--ê khì tsò tō hó--ah!",
  },
  {
    hanji: "交貨的日子倚近，做袂赴矣！",
    tailo: "Kau-huè ê ji̍t-tsí uá-kīn, tsò bē-hù--ah!",
  },
  {
    hanji: "掀過來，倒面嘛會使寫。",
    tailo: "Hian--kuè-lâi, tò-bīn mā ē-sái siá.",
  },
  {
    hanji: "想袂到𪜶兩个會冤家變親家。",
    tailo: "Siūnn-bē-kàu in nn̄g ê ē uan-ke piàn tshin-ke.",
  },
  {
    hanji: "你做人大兄閣一日到暗佮小弟冤家量債，敢袂歹勢？",
    tailo:
      "Lí tsò lâng tuā-hiann koh tsi̍t-ji̍t-kàu-àm kah sió-tī uan-ke-niû-tsè, kám bē pháinn-sè?",
  },
  {
    hanji: "借問一下，文化路佇佗位？",
    tailo: "Tsioh-mn̄g--tsi̍t-ē, Bûn-huà-lōo tī tó-uī?",
  },
  {
    hanji: "我是凊彩講的，你毋通囥佇心肝內。",
    tailo:
      "Guá sī tshìn-tshái kóng--ê, lí m̄-thang khǹg tī sim-kuann-lāi.",
  },
  {
    hanji: "倚晝的時陣我就會轉來。",
    tailo: "Uá-tàu ê sî-tsūn guá tō ē tńg--lâi.",
  },
  {
    hanji: "這个價數我就倒貼矣，哪會用得！",
    tailo: "Tsit ê kè-siàu guá tō tò-thiap--ah, ná ē-īng--tit!",
  },
  {
    hanji: "朋友愛互相鼓勵，講話毋通倒剾。",
    tailo: "Pîng-iú ài hōo-siong kóo-lē, kóng-uē m̄-thang tò-khau.",
  },
  {
    hanji: "好禮仔坐，無，會倒摔向。",
    tailo: "Hó-lé-á tsē, bô, ē tò-siàng-hiànn.",
  },
  {
    hanji: "看著彼个笑面虎我就倒彈。",
    tailo: "Khuànn-tio̍h hit ê tshiò-bīn-hóo guá tō tò-tuānn.",
  },
  {
    hanji: "球擲落塗跤會倒彈起來。",
    tailo: "Kiû tàn-lo̍h thôo-kha ē tò-tuānn--khí-lâi.",
  },
  {
    hanji: "有的跤踏車倒踏就會停。",
    tailo: "Ū ê kha-ta̍h-tshia tò-ta̍h tō ē thîng.",
  },
  {
    hanji: "自𪜶爸母死了後，伊就去倚靠𪜶兄嫂。",
    tailo: "Tsū in pē-bú sí liáu-āu, i tō khì uá-khò in hiann-só.",
  },
  {
    hanji: "彼堵壁的油漆猶未焦，你毋通去倚壁。",
    tailo: "Hit tóo piah ê iû-tshat iáu-buē ta, lí m̄-thang khì uá-piah.",
  },
  {
    hanji: "借錢若毋還，後擺無人欲借你。",
    tailo: "Tsioh tsînn nā m̄ hîng, āu-pái bô lâng beh tsioh--lí.",
  },
  {
    hanji: "你倒頭行了後，對正手爿彼條路出去，就到位矣。",
    tailo:
      "Lí tò-thâu-kiânn liáu-āu, tuì tsiànn-tshiú-pîng hit tiâu lōo tshut--khì, tō kàu-uī--ah.",
  },
  {
    hanji: "你真正有夠凍霜，連五箍銀都欲佮人計較。",
    tailo:
      "Lí tsin-tsiànn ū-kàu tàng-sng, liân gōo khoo gîn to beh kah lâng kè-kàu.",
  },
  {
    hanji: "天氣傷寒，一寡菜凍霜攏袂收成得。",
    tailo:
      "Thinn-khì siunn kuânn, tsi̍t-kuá tshài tàng-sng lóng bē-siu-sîng--tit.",
  },
  {
    hanji: "醫生欲檢查你的尻脊骿，請你倒覆。",
    tailo:
      "I-sing beh kiám-tsa lí ê kha-tsiah-phiann, tshiánn lí tò-phak.",
  },
  {
    hanji: "話講倒轉來，伊講你嘛是為你好。",
    tailo: "Uē kóng tò-tńg--lâi, i kóng--lí mā sī uī lí hó.",
  },
  {
    hanji: "這盆花愛提出去凍露水。",
    tailo: "Tsit phûn hue ài the̍h tshut-khì tàng-lōo-tsuí.",
  },
  {
    hanji: "你下暗欲佮啥人去凍露水？",
    tailo: "Lí e-àm beh kah siánn-lâng khì tàng-lōo-tsuí?",
  },
  {
    hanji: "伊厝內佮外口的工課無法度兼顧。",
    tailo: "I tshù-lāi kah guā-kháu ê khang-khuè bô-huat-tōo kiam-kòo.",
  },
  {
    hanji: "伊喙齒疼，哼規暝攏無睏。",
    tailo: "I tshuì-khí thiànn, hainn kui mê lóng bô khùn.",
  },
  {
    hanji: "代誌過去就煞，莫閣哼矣啦！",
    tailo: "Tāi-tsì kuè--khì tō suah, mài koh hainn--ah--lah!",
  },
  {
    hanji: "哼！我才無愛佮你去咧！",
    tailo: "Hngh! Guá tsiah bô ài kah lí khì--leh!",
  },
  {
    hanji: "阿芬誠顧家，事事項項攏為厝內咧拍算。",
    tailo:
      "A-hun tsiânn kòo-ke, sū-sū-hāng-hāng lóng uī tshù-lāi teh phah-sǹg.",
  },
  {
    hanji: "我原本是蹛佇美國，尾仔才搬轉來臺灣。",
    tailo:
      "Guá guân-pún sī tuà tī Bí-kok, bué--á tsiah puann tńg-lâi Tâi-uân.",
  },
  {
    hanji: "物件原在囥佇遐，攏無徙位。",
    tailo: "Mi̍h-kiānn guân-tsāi khǹg tī hia, lóng bô suá-uī.",
  },
  {
    hanji: "物件用好，愛囥蹛原位。",
    tailo: "Mi̍h-kiānn īng hó, ài khǹg tuà guân-uī.",
  },
  {
    hanji: "彼个老奸連鞭就會現出原形矣！",
    tailo: "Hit ê lāu-kan liâm-mi tō ē hiàn-tshut guân-hîng--ah!",
  },
  {
    hanji: "伊受著枉屈，才四界咧哭呻。",
    tailo: "I siū-tio̍h óng-khut, tsiah sì-kè teh khàu-tshan.",
  },
  {
    hanji: "伊原底是欲先讀冊，因為大學考無牢才去揣頭路。",
    tailo:
      "I guân-té sī beh sing tha̍k-tsheh, in-uī tāi-ha̍k khó bô tiâu tsiah khì tshuē thâu-lōo.",
  },
  {
    hanji: "聽你咧哭爸，我就袂爽。",
    tailo: "Thiann lí teh khàu-pē, guá tō bē-sóng.",
  },
  {
    hanji: "你免佇遮哭枵，我無欲插你。",
    tailo: "Lí bián tī tsia khàu-iau, guá bô beh tshap--lí.",
  },
  {
    hanji: "哭枵！無紮雨傘煞咧落雨。",
    tailo: "Khàu-iau! Bô tsah hōo-suànn suah teh lo̍h-hōo.",
  },
  {
    hanji: "你莫佇遐哼哼叫，我聽甲足煩呢！",
    tailo:
      "Lí mài tī hia hainn-hainn-kiò, guá thiann kah tsiok huân--neh!",
  },
  {
    hanji: "嬰仔唔唔睏，一暝大一寸。",
    tailo: "Enn-á onn-onn-khùn, tsi̍t mê tuā tsi̍t tshùn.",
  },
  {
    hanji: "你講甲哩哩囉囉，我聽攏無！",
    tailo: "Lí kóng kah li-li-lo-lo, guá thiann lóng bô!",
  },
  {
    hanji: "厝頂破甲遐大空，莫怪會漏雨。",
    tailo: "Tshù-tíng phuà kah hiah tuā khang, bo̍k-kuài ē lāu hōo.",
  },
  {
    hanji: "我明仔載就愛納厝稅矣。",
    tailo: "Guá bîn-á-tsài tō ài la̍p tshù-suè--ah.",
  },
  {
    hanji: "請你原諒我！後擺我絕對會改進。",
    tailo: "Tshiánn lí guân-liōng--guá! Āu-pái guá tsua̍t-tuì ē kái-tsìn.",
  },
  {
    hanji: "遮原頭是墓仔埔，毋是這馬你所看著的學校。",
    tailo:
      "Tsia guân-thâu sī bōng-á-poo, m̄ sī tsit-má lí sóo khuànn--tio̍h ê ha̍k-hāu.",
  },
  {
    hanji: "這馬原頭遐已經無貨矣。",
    tailo: "Tsit-má guân-thâu hia í-king bô huè--ah.",
  },
  {
    hanji: "阮厝頭家人誠好，定定共阮鬥相共。",
    tailo:
      "Guán tshù-thâu-ke lâng tsiânn hó, tiānn-tiānn kā guán tàu-sann-kāng.",
  },
  {
    hanji: "佇庄跤所在，厝邊頭尾的感情攏誠好。",
    tailo:
      "Tī tsng-kha sóo-tsāi, tshù-pinn-thâu-bué ê kám-tsîng lóng tsiânn hó.",
  },
  {
    hanji: "伊自少年的時就真匪類矣。",
    tailo: "I tsū siàu-liân ê sî tō tsin huí-luī--ah.",
  },
  {
    hanji: "你實在真匪類，物件猶未歹就想欲擲掉。",
    tailo:
      "Lí si̍t-tsāi tsin huí-luī, mi̍h-kiānn iáu-buē pháinn tō siūnn-beh tàn-tiāu.",
  },
  {
    hanji: "無，你是咧套我的話是毋？",
    tailo: "Bô, lí sī teh thò guá ê uē sī--m̄?",
  },
  {
    hanji: "彼个小娘仔真有我的緣。",
    tailo: "Hit ê sió-niû-á tsin ū guá ê iân.",
  },
  {
    hanji: "阮心內彼个娘仔是無人通比並的。",
    tailo: "Guán sim-lāi hit ê niû-á sī bô lâng thang pí-phīng--ê.",
  },
  {
    hanji: "伊厝裡閣有一个老娘嬭。",
    tailo: "I tshù--lí koh ū tsi̍t ê lāu niû-lé.",
  },
  {
    hanji: "害矣啦！代誌煏空矣啦！",
    tailo: "Hāi--ah--lah! Tāi-tsì piak-khang--ah--lah!",
  },
  {
    hanji: "這个囡仔真害，宿題攏毋捌準時交。",
    tailo: "Tsit ê gín-á tsin hāi, siok-tê lóng m̄ bat tsún-sî kau.",
  },
  {
    hanji: "差豬差狗，不如家己走。",
    tailo: "Tshe ti tshe káu, put-jû ka-kī tsáu.",
  },
  {
    hanji: "遮痠遐疼，我身軀已經規組害了了矣。",
    tailo:
      "Tsia sng hia thiànn, guá sin-khu í-king kui tsoo hāi-liáu-liáu--ah.",
  },
  {
    hanji: "逐家攏是家己人，就莫計較遐濟矣。",
    tailo: "Ta̍k-ke lóng sī ka-kī-lâng, tō mài kè-kàu hiah tsē--ah.",
  },
  {
    hanji: "就我所知，伊無可能容允你烏白來。",
    tailo: "Tsiū guá sóo tsai, i bô khó-lîng iông-ín lí oo-pe̍h-lâi.",
  },
  {
    hanji: "伊咧講啥物，我差不多攏聽無。",
    tailo: "I teh kóng siánn-mih, guá tsha-put-to lóng thiann-bô.",
  },
  {
    hanji: "阮兩个孫仔生做有夠古錐。",
    tailo: "Guán nn̄g ê sun-á senn-tsò ū-kàu kóo-tsui.",
  },
  {
    hanji: "阮孫仔後個月欲娶，阮阿嫂足歡喜的。",
    tailo:
      "Guán sun-á āu kò gue̍h beh tshuā, guán a-só tsiok huann-hí--ê.",
  },
  {
    hanji: "𪜶兜的家伙攏予伊敗了了矣。",
    tailo: "In tau ê ke-hué lóng hōo i pāi-liáu-liáu--ah.",
  },
  {
    hanji: "阿榮是厝內的屘囝，自細漢就真得人疼。",
    tailo:
      "A-îng sī tshù-lāi ê ban-kiánn, tsū sè-hàn tō tsin tit-lâng-thiànn.",
  },
  {
    hanji: "這是伊食飯的家私，你毋通共伊用歹去。",
    tailo:
      "Tse sī i tsia̍h-pn̄g ê ke-si, lí m̄-thang kā i iōng-pháinn--khì.",
  },
  {
    hanji: "彼陣人講無兩句，家私就攏捎出來矣。",
    tailo:
      "Hit tīn lâng kóng bô nn̄g kù, ke-si tō lóng sa--tshut-lâi--ah.",
  },
  {
    hanji: "𪜶兜的囡仔家教誠好。",
    tailo: "In tau ê gín-á ka-kàu tsiânn hó.",
  },
  {
    hanji: "我做代誌真頇顢，你就加共我差教咧。",
    tailo: "Guá tsò tāi-tsì tsin hân-bān, lí tō ke kā guá tshe-kà--leh.",
  },
  {
    hanji: "阮大兄今年欲加一个孫婿矣。",
    tailo: "Guán tuā-hiann kin-nî beh ke tsi̍t ê sun-sài--ah.",
  },
  {
    hanji: "阮查某孫的翁就是我的孫婿。",
    tailo: "Guán tsa-bóo-sun ê ang tō sī guá ê sun-sài.",
  },
  {
    hanji: "你緊共雨傘展開，無，會沃澹去！",
    tailo: "Lí kín kā hōo-suànn thián--khui, bô, ē ak-tâm--khì!",
  },
  {
    hanji: "伊若有啥物差錯，我就揣你算數。",
    tailo: "I nā ū siánn-mih tsha-tshò, guá tō tshuē lí sǹg-siàu.",
  },
  {
    hanji: "彼隻鳥仔一下展翼，連鞭就飛甲無看見影矣。",
    tailo:
      "Hit tsiah tsiáu-á tsi̍t-ē thián-si̍t, liâm-mi tō pue kah bô khuànn-kìnn iánn--ah.",
  },
  {
    hanji: "遮的差額是我算毋著的。",
    tailo: "Tsia-ê tsha-gia̍h sī guá sǹg m̄-tio̍h--ê.",
  },
  {
    hanji: "伊閣佇遐咧展寶矣！實在真討厭。",
    tailo: "I koh tī hia teh tián-pó--ah! Si̍t-tsāi tsin thó-ià.",
  },
  {
    hanji: "伊閣抱𪜶孫出來咧展寶矣。",
    tailo: "I koh phō in sun tshut-lâi teh tián-pó--ah.",
  },
  {
    hanji: "恁老爸等咧就欲來𤆬你轉去。",
    tailo: "Lín lāu-pē tán--leh tō beh lâi tshuā lí tńg--khì.",
  },
  {
    hanji: "恁老師對學生真有耐性。",
    tailo: "Lín lāu-su tuì ha̍k-sing tsin ū nāi-sìng.",
  },
  {
    hanji: "莫按呢挨來挨去，會跋倒。",
    tailo: "Mài án-ne e lâi e khì, ē pua̍h--tó.",
  },
  {
    hanji: "為著無欲予人恥笑，我一直誠認真拍拚。",
    tailo:
      "Uī-tio̍h bô beh hōo lâng thí-tshiò, guá it-ti̍t tsiânn jīn-tsin phah-piànn.",
  },
  {
    hanji: "恁兩个莫閣佇遐挨推矣！",
    tailo: "Lín nn̄g ê mài koh tī hia e-the--ah!",
  },
  {
    hanji: "逐家欲去𪜶兜共伊恭喜。",
    tailo: "Ta̍k-ke beh khì in tau kā i kiong-hí.",
  },
  {
    hanji: "𪜶兩个翁仔某誠恩愛。",
    tailo: "In nn̄g ê ang-á-bóo tsiânn un-ài.",
  },
  {
    hanji: "用別人的拳頭拇舂石獅。",
    tailo: "Iōng pa̍t-lâng ê kûn-thâu-bú tsing tsio̍h-sai.",
  },
  {
    hanji: "代誌恐驚見無遐爾簡單。",
    tailo: "Tāi-tsì khióng-kiann-kìnn bô hiah-nī kán-tan.",
  },
  {
    hanji: "伊無細膩去挵著電火柱。",
    tailo: "I bô-sè-jī khì lòng-tio̍h tiān-hué-thiāu.",
  },
  {
    hanji: "伊欲共𪜶某的心挽倒轉來。",
    tailo: "I beh kā in bóo ê sim bán tò-tńg--lâi.",
  },
  {
    hanji: "錢愛挽咧用，毋通開了了。",
    tailo: "Tsînn ài bán leh īng, m̄-thang khai-liáu-liáu.",
  },
  {
    hanji: "若破病愛緊去予醫生看，毋通硬挽。",
    tailo: "Nā phuà-pēnn ài kín khì hōo i-sing khuànn, m̄-thang ngē bán.",
  },
  {
    hanji: "我去予電梯門挾佇中央。",
    tailo: "Guá khì hōo tiān-thui mn̂g nge̍h tī tiong-ng.",
  },
  {
    hanji: "你內衫的手䘼捅出來矣，緊搝入去。",
    tailo:
      "Lí lāi-sann ê tshiú-ńg thóng--tshut-lâi--ah, kín khiú--ji̍p-khì.",
  },
  {
    hanji: "我捌聽過白賊七仔的故事。",
    tailo: "Guá bat thiann-kuè Pe̍h-tsha̍t-tshit--á ê kòo-sū.",
  },
  {
    hanji: "爸母辛辛苦苦共你捏大漢。",
    tailo: "Pē-bú sin-sin-khóo-khóo kā lí lia̍p tuā-hàn.",
  },
  {
    hanji: "空喙揤咧，才袂閣流血。",
    tailo: "Khang-tshuì tshi̍h--leh, tsiah bē koh lâu-hueh.",
  },
  {
    hanji: "這件代誌是頂司揤牢咧，若無早就辦矣。",
    tailo:
      "Tsit kiānn tāi-tsì sī tíng-si tshi̍h-tiâu--leh, nā-bô tsá tō pān--ah.",
  },
  {
    hanji: "真緊！三年晃一下就過矣！",
    tailo: "Tsin kín! Sann nî huánn--tsi̍t-ē tō kuè--ah!",
  },
  {
    hanji: "查某𡢃仔逐早起著捀水予老爺洗面。",
    tailo: "Tsa-bóo-kán-á ta̍k tsá-khí tio̍h phâng-tsuí hōo lāu-iâ sé-bīn.",
  },
  {
    hanji: "伊想欲挽回𪜶愛人仔的心。",
    tailo: "I siūnn-beh bán-huê in ài-jîn-á ê sim.",
  },
  {
    hanji: "無愛的物件捒走，才袂鎮位。",
    tailo: "Bô ài ê mi̍h-kiānn sak-tsáu, tsiah bē tìn-uī.",
  },
  {
    hanji: "伊是咧等待出手的好時辰。",
    tailo: "I sī teh tán-thāi tshut-tshiú ê hó sî-sîn.",
  },
  {
    hanji: "你這馬是一定欲佮我捙拚是無？",
    tailo: "Lí tsit-má sī it-tīng beh kah guá tshia-piànn sī--bô?",
  },
  {
    hanji: "欲入去人的辦公室進前愛先挵門。",
    tailo: "Beh ji̍p-khì lâng ê pān-kong-sik tsìn-tsîng ài sing lòng mn̂g.",
  },
  {
    hanji: "辦喪事的時候，愛較正經咧。",
    tailo: "Pān song-sū ê sî-hāu, ài khah tsìng-king--leh.",
  },
  {
    hanji: "我時時刻刻都咧思念你。",
    tailo: "Guá sî-sî-khik-khik to teh su-liām--lí.",
  },
  {
    hanji: "人講「食緊挵破碗」，你著照步來。",
    tailo: "Lâng kóng “tsia̍h-kín lòng-phuà uánn”, lí tio̍h tsiàu-pōo-lâi.",
  },
  {
    hanji: "想著彼層代誌，伊規身軀煞挽脈。",
    tailo: "Siūnn-tio̍h hit tsân tāi-tsì, i kui-sin-khu suah bán-me̍h.",
  },
  {
    hanji: "雄雄地動，規間厝攏咧振動。",
    tailo: "Hiông-hiông tē-tāng, kui king tshù lóng teh tín-tāng.",
  },
  {
    hanji: "桌頂的花矸你毋通振動。",
    tailo: "Toh-tíng ê hue-kan lí m̄-thang tín-tāng.",
  },
  {
    hanji: "彼个人按怎叫都叫袂振動。",
    tailo: "Hit ê lâng án-tsuánn kiò to kiò bē tín-tāng.",
  },
  {
    hanji: "厝內的工課攏是𪜶某咧料理。",
    tailo: "Tshù-lāi ê khang-khuè lóng sī in bóo teh liāu-lí.",
  },
  {
    hanji: "這壁堵的敆逝若無創好勢，後擺是會漏水。",
    tailo:
      "Tse piah-tóo ê kap-tsuā nā bô tshòng hó-sè, āu-pái sī ē lāu tsuí.",
  },
  {
    hanji: "彼个囡仔誠愛佇塗跤捙跋反。",
    tailo: "Hit ê gín-á tsiânn ài tī thôo-kha tshia-pua̍h-píng.",
  },
  {
    hanji: "為著趁食就愛四界捙跋反。",
    tailo: "Uī-tio̍h thàn-tsia̍h tō ài sì-kè tshia-pua̍h-píng.",
  },
  {
    hanji: "春天後母面，欲變一時間。",
    tailo: "Tshun-thinn āu-bú bīn, beh piàn tsi̍t-sî-kan.",
  },
  {
    hanji: "我遮爾仔信任你，你煞來共我欺騙，實在予人料想袂到。",
    tailo:
      "Guá tsiah-nī-á sìn-jīm--lí, lí suah lâi kā guá khi-phiàn, si̍t-tsāi hōo lâng liāu-sióng-bē-kàu.",
  },
  {
    hanji: "這件代誌予人料想袂到。",
    tailo: "Tsit kiānn tāi-tsì hōo lâng liāu-sióng-bē-kàu.",
  },
  {
    hanji: "伊有今仔日的下場，我早就料算著矣。",
    tailo: "I ū kin-á-ji̍t ê hā-tiûnn, guá tsá tō liāu-sǹg--tio̍h--ah.",
  },
  {
    hanji: "你真愛捙盤呢，敢袂使靜一下？",
    tailo: "Lí tsin ài tshia-puânn--neh, kám bē-sái tsīng--tsi̍t-ē?",
  },
  {
    hanji: "小可仔代誌爾爾，敢有需要捙盤遐久？",
    tailo:
      "Sió-khuá-á tāi-tsì niā-niā, kám ū su-iàu tshia-puânn hiah kú?",
  },
  {
    hanji: "好的時機毋是定定有，你著愛好好仔把握。",
    tailo: "Hó ê sî-ki m̄ sī tiānn-tiānn ū, lí tio̍h-ài hó-hó-á pá-ak.",
  },
  {
    hanji: "伊當咧捆縛行李，按算欲用寄的。",
    tailo: "I tng-teh khún-pa̍k hîng-lí, àn-sǹg beh iōng kià--ê.",
  },
  {
    hanji: "看伊捙輾斗實在真趣味。",
    tailo: "Khuànn i tshia-liàn-táu si̍t-tsāi tsin tshù-bī.",
  },
  {
    hanji: "等咧你去藥房替我敆藥仔。",
    tailo: "Tán--leh lí khì io̍h-pâng thè guá kap-io̍h-á.",
  },
  {
    hanji: "咱文化的根愛顧予伊牢。",
    tailo: "Lán bûn-huà ê kin ài kòo hōo i tiâu.",
  },
  {
    hanji: "字典內底重要的字共伊框起來。",
    tailo: "Jī-tián lāi-té tiōng-iàu ê jī kā i khong--khí-lâi.",
  },
  {
    hanji: "果子靠傷的所在用刀尾框掉。",
    tailo: "Kué-tsí khò-siong ê sóo-tsāi iōng to-bué khong-tiāu.",
  },
  {
    hanji: "臺灣經濟的根本是骨力拍拚的精神。",
    tailo:
      "Tâi-uân king-tsè ê kin-pún sī kut-la̍t phah-piànn ê tsing-sîn.",
  },
  {
    hanji: "伊根本都毋捌字，哪會曉寫批？",
    tailo: "I kin-pún to m̄ bat-jī, ná ē-hiáu siá phue?",
  },
  {
    hanji: "昨昏彼个案件辦了按怎？",
    tailo: "Tsa-hng hit ê àn-kiānn pān liáu án-tsuánn?",
  },
  {
    hanji: "伊看起來真柴耙，毋過對人真好。",
    tailo: "I khuànn--khí-lâi tsin tshâ-pê, m̄-koh tuì lâng tsin hó.",
  },
  {
    hanji: "咱愛加栽培一寡仔人才。",
    tailo: "Lán ài ke tsai-puê tsi̍t-kuá-á jîn-tsâi.",
  },
  {
    hanji: "我是阿媽共我晟養大漢的。",
    tailo: "Guá sī a-má kā guá tshiânn-ióng tuā-hàn--ê.",
  },
  {
    hanji: "根據伊的講法，咱應該著較早出門才著。",
    tailo:
      "Kin-kì i ê kóng-huat, lán ing-kai tio̍h khah tsá tshut-mn̂g tsiah tio̍h.",
  },
  {
    hanji: "講話愛有根據，袂使烏白講。",
    tailo: "Kóng-uē ài ū kin-kì, bē-sái oo-pe̍h kóng.",
  },
  {
    hanji: "這馬真少人用柴頭咧燃火矣。",
    tailo: "Tsit-má tsin tsió lâng iōng tshâ-thâu teh hiânn-hué--ah.",
  },
  {
    hanji: "你都毋是柴頭閣，是按怎攏毋知影伊咧想啥？",
    tailo:
      "Lí to m̄ sī tshâ-thâu koh, sī-án-tsuánn lóng m̄ tsai-iánn i teh siūnn siannh?",
  },
  {
    hanji: "阮阿公早就去睏柴頭矣。",
    tailo: "Guán a-kong tsá tō khì khùn tshâ-thâu--ah.",
  },
  {
    hanji: "𪜶彼个後生敢若柴頭尪仔，見擺問伊代誌攏袂曉小應一下。",
    tailo:
      "In hit ê hāu-senn kánn-ná tshâ-thâu-ang-á, kiàn-pái mn̄g i tāi-tsì lóng bē-hiáu sió ìn--tsi̍t-ē.",
  },
  {
    hanji: "伊一下開喙就欲共人欱死。",
    tailo: "I tsi̍t-ē khui-tshuì tō beh kā lâng hap--sí.",
  },
  {
    hanji: "有一粒雞胿仔浮佇水面。",
    tailo: "Ū tsi̍t lia̍p ke-kui-á phû tī tsuí-bīn.",
  },
  {
    hanji: "香菇欲煮進前愛先浸水。",
    tailo: "Hiunn-koo beh tsú tsìn-tsîng ài sing tsìm tsuí.",
  },
  {
    hanji: "我無彼號氣力閣佮你冤落去矣。",
    tailo: "Guá bô hit-lō khuì-la̍t koh kah lí uan--lo̍h-khì--ah.",
  },
  {
    hanji: "伊做代誌真浮冇，我袂放心。",
    tailo: "I tsò tāi-tsì tsin phû-phànn, guá bē hòng-sim.",
  },
  {
    hanji: "你莫逐工予我氣身惱命。",
    tailo: "Lí mài ta̍k-kang hōo guá khì-sin-lóo-miā.",
  },
  {
    hanji: "看你按呢氣怫怫，是為著啥物代誌？",
    tailo: "Khuànn lí án-ne khì-phut-phut, sī uī-tio̍h siánn-mih tāi-tsì?",
  },
  {
    hanji: "查埔人就愛有查埔人的氣概。",
    tailo: "Tsa-poo-lâng tō ài ū tsa-poo-lâng ê khì-khài.",
  },
  {
    hanji: "囡仔摸著烘烘，可能欲感冒矣。",
    tailo: "Gín-á bong tio̍h hang-hang, khó-lîng beh kám-mōo--ah.",
  },
  {
    hanji: "伊穿彼領烏𪐞紅的衫誠好看。",
    tailo: "I tshīng hit niá oo-tòo-âng ê sann tsiânn hó-khuànn.",
  },
  {
    hanji: "伊的頭毛烏㽎㽎，足媠的。",
    tailo: "I ê thâu-mn̂g oo-sìm-sìm, tsiok suí--ê.",
  },
  {
    hanji: "伊曝甲烏趖趖，若親像烏人咧。",
    tailo: "I pha̍k kah oo-sô-sô, ná-tshin-tshiūnn oo-lâng--leh.",
  },
  {
    hanji: "柚仔囥予伊消水，會較甜。",
    tailo: "Iū-á khǹg hōo i siau-tsuí, ē khah tinn.",
  },
  {
    hanji: "彼个烏心肝的人，早慢會有報應。",
    tailo: "Hit ê oo-sim-kuann ê lâng, tsá-bān ē ū pò-ìng.",
  },
  {
    hanji: "這馬外口烏天暗地，等一下一定會落大雨。",
    tailo:
      "Tsit-má guā-kháu oo-thinn-àm-tē, tán--tsi̍t-ē it-tīng ē lo̍h tuā-hōo.",
  },
  {
    hanji: "伊對外口沃澹入來，緊行倚去烘火。",
    tailo: "I tuì guā-kháu ak-tâm ji̍p--lâi, kín kiânn uá-khì hang-hué.",
  },
  {
    hanji: "我才無欲聽你咧烏白講。",
    tailo: "Guá tsiah bô beh thiann lí teh oo-pe̍h kóng.",
  },
  {
    hanji: "這馬足少人咧翕烏白的相片矣。",
    tailo: "Tsit-má tsiok tsió lâng teh hip oo-pe̍h ê siòng-phìnn--ah.",
  },
  {
    hanji: "定定佮人相拍的阿雄這馬佇學校的烏名單內面矣。",
    tailo:
      "Tiānn-tiānn kah lâng sio-phah ê A-hiông tsit-má tī ha̍k-hāu ê oo-miâ-tuann lāi-bīn--ah.",
  },
  {
    hanji: "阿勇共警察烏西，叫伊莫開罰單。",
    tailo: "A-ióng kā kíng-tshat oo-se, kiò i mài khui hua̍t-tuann.",
  },
  {
    hanji: "這幅圖我感覺無啥物特別。",
    tailo: "Tsit pak tôo guá kám-kak bô siánn-mih ti̍k-pia̍t.",
  },
  {
    hanji: "這件代誌你愛特別注意。",
    tailo: "Tsit kiānn tāi-tsì lí ài ti̍k-pia̍t tsù-ì.",
  },
  {
    hanji: "伊去廟裡拜拜，祈求消災解厄。",
    tailo: "I khì biō--lí pài-pài, kî-kiû siau-tsai-kái-eh.",
  },
  {
    hanji: "伊無遵照契約，去予人消定矣。",
    tailo: "I bô tsun-tsiàu khè-iok, khì hōo lâng siau-tiānn--ah.",
  },
  {
    hanji: "你這台車的烏油應該愛換矣。",
    tailo: "Lí tsit tâi tshia ê oo-iû ing-kai ài uānn--ah.",
  },
  {
    hanji: "伊跋倒挵一下跤腿煞烏青。",
    tailo: "I pua̍h-tó lòng tsi̍t-ē kha-thuí suah oo-tshenn.",
  },
  {
    hanji: "你的跤哪會挵甲烏青凝血？",
    tailo: "Lí ê kha ná ē lòng kah oo-tshenn gîng-hueh?",
  },
  {
    hanji: "伊自中風了後，就親像消風的雞胿仔仝款，失去人生的目標。",
    tailo:
      "I tsū tiòng-hong liáu-āu, tō tshin-tshiūnn siau-hong ê ke-kui-á kāng-khuán, sit-khì jîn-sing ê bo̍k-piau.",
  },
  {
    hanji: "以前阿公攏用消息撚耳空。",
    tailo: "Í-tsîng a-kong lóng iōng siau-sit lián hīnn-khang.",
  },
  {
    hanji: "這馬咧烏陰矣，較停仔無的確會落雨。",
    tailo: "Tsit-má teh oo-im--ah, khah-thîng-á bô-tik-khak ē lo̍h-hōo.",
  },
  {
    hanji: "氣象講這幾工攏是烏陰天。",
    tailo: "Khì-siōng kóng tsit kuí kang lóng sī oo-im-thinn.",
  },
  {
    hanji: "才幾月日無看見爾爾，你哪會變甲遐爾烏焦瘦？",
    tailo:
      "Tsiah kuí gue̍h-ji̍t bô khuànn--kìnn niā-niā, lí ná ē piàn kah hiah-nī oo-ta-sán?",
  },
  {
    hanji: "兄弟仝心，烏塗變黃金。",
    tailo: "Hiann-tī kāng-sim, oo-thôo piàn n̂g-kim.",
  },
  {
    hanji: "伊覕佇烏暗的樹林，心內真驚惶。",
    tailo: "I bih tī oo-àm ê tshiū-nâ, sim-lāi tsin kiann-hiânn.",
  },
  {
    hanji: "我做工課做甲烏暗眩，足艱苦的。",
    tailo: "Guá tsò khang-khuè tsò kah oo-àm-hîn, tsiok kan-khóo--ê.",
  },
  {
    hanji: "伊最近誠消極，啥物代誌攏無愛做。",
    tailo:
      "I tsuè-kīn tsiânn siau-ki̍k, siánn-mih tāi-tsì lóng bô ài tsò.",
  },
  {
    hanji: "冰箱內底的菜已經烏漚去矣，緊提去擲掉！",
    tailo:
      "Ping-siunn lāi-té ê tshài í-king oo-áu--khì--ah, kín the̍h-khì tàn-tiāu!",
  },
  {
    hanji: "伊曝甲烏趖趖，若親像烏人咧。",
    tailo: "I pha̍k kah oo-sô-sô, ná-tshin-tshiūnn oo-lâng--leh.",
  },
  {
    hanji: "伊定定攏耍甲規身軀烏趖趖。",
    tailo: "I tiānn-tiānn lóng sńg kah kui-sin-khu oo-sô-sô.",
  },
  {
    hanji: "真無聊，攏無代誌通消遣。",
    tailo: "Tsin bô-liâu, lóng bô tāi-tsì thang siau-khián.",
  },
  {
    hanji: "為著𪜶後生的代誌，伊煩惱甲消瘦落肉。",
    tailo:
      "Uī-tio̍h in hāu-senn ê tāi-tsì, i huân-ló kah siau-sán-lo̍h-bah.",
  },
  {
    hanji: "我聽你咧烏魯木齊，十句無一句實的。",
    tailo: "Guá thiann lí teh oo-lóo-bo̍k-tsè, tsa̍p kù bô tsi̍t kù si̍t--ê.",
  },
  {
    hanji: "烏鴉喙，糊瘰瘰，見講見對。",
    tailo: "Oo-a-tshuì, hôo-luì-luì, kiàn kóng kiàn tuì.",
  },
  {
    hanji: "臺灣有的原住民有刺烏鴉喙的風俗。",
    tailo: "Tâi-uân ū ê guân-tsū-bîn ū tshiah oo-a-tshuì ê hong-sio̍k.",
  },
  {
    hanji: "古早開查某間的人叫做烏龜。",
    tailo: "Kóo-tsá khui tsa-bóo-king ê lâng kiò-tsò oo-kui.",
  },
  {
    hanji: "𪜶某討契兄，予伊做烏龜。",
    tailo: "In bóo thó-khè-hiann, hōo i tsò oo-kui.",
  },
  {
    hanji: "叫𪜶某去趁食，家己做烏龜，真正袂見笑。",
    tailo:
      "Kiò in bóo khì thàn-tsia̍h, ka-kī tsò oo-kui, tsin-tsiànn bē-kiàn-siàu.",
  },
  {
    hanji: "你的飯菜我有共你留咧。",
    tailo: "Lí ê pn̄g-tshài guá ū kā lí lâu--leh.",
  },
  {
    hanji: "頭毛留長長，儉錢食塗豆糖。",
    tailo: "Thâu-mn̂g lâu tn̂g-tn̂g, khiām-tsînn tsia̍h thôo-tāu-thn̂g.",
  },
  {
    hanji: "空喙閣流血矣，足疼的。",
    tailo: "Khang-tshuì koh lâu-hueh--ah, tsiok thiànn--ê.",
  },
  {
    hanji: "我細漢佮阿媽蹛，伊足疼我的。",
    tailo: "Guá sè-hàn kah a-má tuà, i tsiok thiànn--guá--ê.",
  },
  {
    hanji: "彼个畜生若予我拄著，我絕對無放伊煞。",
    tailo:
      "Hit ê thik-senn nā hōo guá tú--tio̍h, guá tsua̍t-tuì bô pàng i suah.",
  },
  {
    hanji: "伊細漢的時陣定定偷泄尿。",
    tailo: "I sè-hàn ê sî-tsūn tiānn-tiānn thau tshuā-jiō.",
  },
  {
    hanji: "伊每學期攏做班長，成績嘛真好。",
    tailo: "I muí ha̍k-kî lóng tsò pan-tiúnn, sîng-tsik mā tsin hó.",
  },
  {
    hanji: "伊予你驚一下險仔疶屎。",
    tailo: "I hōo lí kiann tsi̍t-ē hiám-á tshuah-sái.",
  },
  {
    hanji: "𪜶老母反對𪜶來往，伊煞來病相思。",
    tailo: "In lāu-bú huán-tuì in lâi-óng, i suah lâi pēnn-siunn-si.",
  },
  {
    hanji: "阮老師對每一个同學攏真疼惜。",
    tailo: "Guán lāu-su tuì muí tsi̍t ê tông-ha̍k lóng tsin thiànn-sioh.",
  },
  {
    hanji: "阮查某囝若嫁予你，你就愛好好仔共伊疼痛。",
    tailo:
      "Guán tsa-bóo-kiánn nā kè hōo--lí, lí tō ài hó-hó-á kā i thiànn-thàng.",
  },
  {
    hanji: "講甲規畚箕，做無一湯匙。",
    tailo: "Kóng kah kui pùn-ki, tsò bô tsi̍t thng-sî.",
  },
  {
    hanji: "我致這个症頭已經幾若年矣。",
    tailo: "Guá tì tsit ê tsìng-thâu í-king kuí-nā nî--ah.",
  },
  {
    hanji: "這个所在無啥物通好留戀矣。",
    tailo: "Tsit ê sóo-tsāi bô siánn-mih thang-hó liû-luân--ah.",
  },
  {
    hanji: "我昨暝睏甲眠眠，有聽著伊轉來的聲。",
    tailo:
      "Guá tsa-mê khùn kah bîn-bîn, ū thiann-tio̍h i tńg--lâi ê siann.",
  },
  {
    hanji: "我的鞋仔內底敢若有石頭仔，感覺砧砧。",
    tailo: "Guá ê ê-á lāi-té kánn-ná ū tsio̍h-thâu-á, kám-kak tiam-tiam.",
  },
  {
    hanji: "五斤的秫米破一斤尖仔。",
    tailo: "Gōo kin ê tsu̍t-bí phuà tsi̍t kin tsiam-á.",
  },
  {
    hanji: "我小眠一下，你莫共我吵。",
    tailo: "Guá sió bîn--tsi̍t-ē, lí mài kā guá tshá.",
  },
  {
    hanji: "伊攏嘛是靠祖公致蔭的。",
    tailo: "I lóng mā sī khò tsóo-kong tì-ìm--ê.",
  },
  {
    hanji: "伊真正是一个有孝的囡仔。",
    tailo: "I tsin-tsiànn sī tsi̍t ê iú-hàu ê gín-á.",
  },
  {
    hanji: "囡仔大漢了後，眠床就愛換新的矣。",
    tailo: "Gín-á tuā-hàn liáu-āu, bîn-tshn̂g tō ài uānn sin--ê--ah.",
  },
  {
    hanji: "伊便若坐車，就會眩車。",
    tailo: "I piān-nā tsē tshia, tō ē hîn-tshia.",
  },
  {
    hanji: "我有話欲共你講，真拄好，你來矣。",
    tailo: "Guá ū uē beh kā lí kóng, tsin-tú-hó, lí lâi--ah.",
  },
  {
    hanji: "我昨昏去揣伊，真拄好，伊人無佇咧。",
    tailo: "Guá tsa-hng khì tshuē--i, tsin-tú-hó, i lâng bô tī--leh.",
  },
  {
    hanji: "伊做的彼件歹代誌早慢會破空。",
    tailo: "I tsò ê hit kiānn pháinn tāi-tsì tsá-bān ē phuà-khang.",
  },
  {
    hanji: "伊愛揣人的破空，共人落氣。",
    tailo: "I ài tshuē lâng ê phuà-khang, kā lâng làu-khuì.",
  },
  {
    hanji: "伊騎車跋倒，所以跤頭趺有一个破空。",
    tailo: "I khiâ-tshia pua̍h-tó, sóo-í kha-thâu-u ū tsi̍t ê phuà-khang.",
  },
  {
    hanji: "出車禍了後伊就破相矣。",
    tailo: "Tshut tshia-hō liáu-āu i tō phuà-siùnn--ah.",
  },
  {
    hanji: "看人食肉，毋通看人破柴。",
    tailo: "Khuànn lâng tsia̍h bah, m̄-thang khuànn lâng phuà tshâ.",
  },
  {
    hanji: "伊實在有夠破格，代誌予伊沐著就失敗。",
    tailo:
      "I si̍t-tsāi ū-kàu phuà-keh, tāi-tsì hōo i bak--tio̍h tō sit-pāi.",
  },
  {
    hanji: "𪜶老母破病了後到今攏無較好。",
    tailo: "In lāu-bú phuà-pēnn liáu-āu kàu-tann lóng bô khah hó.",
  },
  {
    hanji: "伊攏是用伊的真情咧寫歌，才會予人遐感動。",
    tailo:
      "I lóng sī īng i ê tsin-tsîng teh siá kua, tsiah ē hōo lâng hiah kám-tōng.",
  },
  {
    hanji: "𠢕眩船的人愛食眩船藥仔。",
    tailo: "Gâu hîn-tsûn ê lâng ài tsia̍h hîn-tsûn io̍h-á.",
  },
  {
    hanji: "真歹勢！逐擺都予你破費。",
    tailo: "Tsin pháinn-sè! Ta̍k-pái to hōo lí phò-huì.",
  },
  {
    hanji: "祖公祖媽有靈聖，會保庇囝孫仔平安。",
    tailo: "Tsóo-kong tsóo-má ū lîng-siànn, ē pó-pì kiánn-sun-á pîng-an.",
  },
  {
    hanji: "伊的頭一胎是破腹生的。",
    tailo: "I ê thâu tsi̍t the sī phuà-pak senn--ê.",
  },
  {
    hanji: "法醫就是咧替人破腹驗屍的。",
    tailo: "Huat-i tō sī teh thè lâng phuà-pak giām-si--ê.",
  },
  {
    hanji: "伊的聲若親像破雞筅，我聽著強欲昏倒。",
    tailo:
      "I ê siann ná-tshin-tshiūnn phuà-ke-tshíng, guá thiann tio̍h kiōng-beh hūn--tó.",
  },
  {
    hanji: "𪜶兜的神主牌仔竟然會拍毋見。",
    tailo: "In tau ê sîn-tsú-pâi-á kìng-jiân ē phah-m̄-kìnn.",
  },
  {
    hanji: "你咧想啥？想甲規个人攏神去。",
    tailo: "Lí teh siūnn siannh? Siūnn kah kui-ê lâng lóng sîn--khì.",
  },
  {
    hanji: "你去買寡秫米轉來做麻糍。",
    tailo: "Lí khì bé kuá tsu̍t-bí tńg-lâi tsò muâ-tsî.",
  },
  {
    hanji: "逐家咧開講，講甲笑咍咍。",
    tailo: "Ta̍k-ke teh khai-káng, kóng kah tshiò-hai-hai.",
  },
  {
    hanji: "伊是一个笑面虎，你著愛注意！",
    tailo: "I sī tsi̍t ê tshiò-bīn-hóo, lí tio̍h-ài tsù-ì!",
  },
  {
    hanji: "伊最近無笑容，敢若有心事咧。",
    tailo: "I tsuè-kīn bô tshiò-iông, kánn-ná ū sim-sū--leh.",
  },
  {
    hanji: "準時納稅是納稅義務人的義務。",
    tailo: "Tsún-sî la̍p-suè sī la̍p-suè gī-bū-jîn ê gī-bū.",
  },
  {
    hanji: "阮表兄欲娶某矣，阮欲去共伊祝賀。",
    tailo:
      "Guán piáu-hiann beh tshuā-bóo--ah, guán beh khì kā i tsiok-hō.",
  },
  {
    hanji: "伊最近有淡薄仔神經衰弱。",
    tailo: "I tsuè-kīn ū tām-po̍h-á sîn-king sue-jio̍k.",
  },
  {
    hanji: "咱人做代誌著愛有站節。",
    tailo: "Lán-lâng tsò tāi-tsì tio̍h-ài ū tsām-tsat.",
  },
  {
    hanji: "講話愛有站節，毋通笑話講規擔。",
    tailo: "Kóng-uē ài ū tsām-tsat, m̄-thang tshiò-uē kóng kui tànn.",
  },
  {
    hanji: "伊愛講笑詼，予逐家聽甲笑咍咍。",
    tailo: "I ài kóng tshiò-khue, hōo ta̍k-ke thiann kah tshiò-hai-hai.",
  },
  {
    hanji: "我予你驚一下險險仔無神魂去。",
    tailo: "Guá hōo lí kiann tsi̍t-ē hiám-hiám-á bô sîn-hûn--khì.",
  },
  {
    hanji: "生理人秤頭愛有夠，生理才做會久。",
    tailo: "Sing-lí-lâng tshìn-thâu ài ū-kàu, sing-lí tsiah tsò ē kú.",
  },
  {
    hanji: "伊不時攏笑頭笑面，看起來誠好鬥陣。",
    tailo:
      "I put-sî lóng tshiò-thâu-tshiò-bīn, khuànn--khí-lâi tsiânn hó tàu-tīn.",
  },
  {
    hanji: "這塊布真素，無啥物花草。",
    tailo: "Tsit tè pòo tsin sòo, bô siánn-mih hue-tsháu.",
  },
  {
    hanji: "這个缺頂個月有人補矣。",
    tailo: "Tsit ê khueh tíng kò gue̍h ū lâng póo--ah.",
  },
  {
    hanji: "伊的囡仔予人罟去飼矣。",
    tailo: "I ê gín-á hōo lâng koo-khì tshī--ah.",
  },
  {
    hanji: "喙齒疼，喙䫌胮起來矣。",
    tailo: "Tshuì-khí thiànn, tshuì-phué hàng--khí-lâi--ah.",
  },
  {
    hanji: "我的胸坎實實，人真無爽快。",
    tailo: "Guá ê hing-khám tsa̍t-tsa̍t, lâng tsin bô sóng-khuài.",
  },
  {
    hanji: "你去提寡紙坯來做紙盒仔。",
    tailo: "Lí khì the̍h kuá tsuá-phue lâi tsò tsuá-a̍p-á.",
  },
  {
    hanji: "咱會當用紙枋來做紙箱仔。",
    tailo: "Lán ē-tàng iōng tsuá-pang lâi tsò tsuá-siunn-á.",
  },
  {
    hanji: "彼塊素面的布看著較清爽。",
    tailo: "Hit tè sòo-bīn ê pòo khuànn tio̍h khah tshing-sóng.",
  },
  {
    hanji: "毋是每一个人攏適合食素食。",
    tailo: "M̄ sī muí tsi̍t ê lâng lóng sik-ha̍p tsia̍h sòo-si̍t.",
  },
  {
    hanji: "古早的查某人會佇厝裡紡紗。",
    tailo: "Kóo-tsá ê tsa-bóo-lâng ē tī tshù--lí pháng-se.",
  },
  {
    hanji: "缺喙會使用手術來修補。",
    tailo: "Khih-tshuì ē-sái iōng tshiú-su̍t lâi siu-póo.",
  },
  {
    hanji: "伊講遐的話純然是咧騙你。",
    tailo: "I kóng hia-ê uē sûn-jiân sī teh phiàn--lí.",
  },
  {
    hanji: "狗仔共碗舐甲足清氣的。",
    tailo: "Káu-á kā uánn tsīnn kah tsiok tshing-khì--ê.",
  },
  {
    hanji: "彼塊餅予胡蠅舐過，毋通食矣！",
    tailo: "Hit tè piánn hōo hôo-sîn tsīnn--kuè, m̄-thang tsia̍h--ah!",
  },
  {
    hanji: "伊猶閣傷茈，所以袂當做主管。",
    tailo: "I iáu-koh siunn tsínn, sóo-í bē-tàng tsò tsú-kuán.",
  },
  {
    hanji: "袂曉啉酒閣啉並濟的，這馬咧茫矣乎？",
    tailo:
      "Bē-hiáu lim tsiú koh lim phīng tsē--ê, tsit-má teh bâng--ah--honnh?",
  },
  {
    hanji: "下昏暗的飯有臭火薰味。",
    tailo: "E-hng-àm ê pn̄g ū tshàu-hué-hun bī.",
  },
  {
    hanji: "伊講話臭奶呆，我聽攏無。",
    tailo: "I kóng-uē tshàu-ling-tai, guá thiann lóng bô.",
  },
  {
    hanji: "伊對草地來都市揣頭路。",
    tailo: "I tuì tsháu-tē lâi too-tshī tshuē thâu-lōo.",
  },
  {
    hanji: "伊生做遮爾臭老，實在看袂出來才三十歲爾爾。",
    tailo:
      "I senn-tsò tsiah-nī tshàu-lāu, si̍t-tsāi khuànn bē tshut--lâi tsiah sann-tsa̍p huè niā-niā.",
  },
  {
    hanji: "伊著第一名了後，變甲足臭屁。",
    tailo: "I tio̍h tē-it miâ liáu-āu, piàn kah tsiok tshàu-phuì.",
  },
  {
    hanji: "你的枕頭囊臭油垢味誠重。",
    tailo: "Lí ê tsím-thâu-lông tshàu-iû-káu bī tsiânn tāng.",
  },
  {
    hanji: "你莫激一个臭面予我看。",
    tailo: "Lí mài kik tsi̍t ê tshàu-bīn hōo guá khuànn.",
  },
  {
    hanji: "遮的餅臭殕去矣，毋通食。",
    tailo: "Tsia-ê piánn tshàu-phú--khì--ah, m̄-thang tsia̍h.",
  },
  {
    hanji: "魚仔煎甲臭焦就無好食矣。",
    tailo: "Hî-á tsian kah tshàu-ta tō bô hó-tsia̍h--ah.",
  },
  {
    hanji: "這擺的投資失敗，規个家伙攏臭焦去矣。",
    tailo:
      "Tsit pái ê tâu-tsu sit-pāi, kui-ê ke-hué lóng tshàu-ta--khì--ah.",
  },
  {
    hanji: "阿三仔誠臭煬，不時講家己偌𠢕拄偌𠢕。",
    tailo:
      "A-sam--á tsiânn tshàu-iāng, put-sî kóng ka-kī guā gâu tú guā gâu.",
  },
  {
    hanji: "這盤菜豆炒無熟，足臭腥。",
    tailo: "Tsit puânn tshài-tāu tshá bô si̍k, tsiok tshàu-tshènn.",
  },
  {
    hanji: "你入門我就鼻著你的臭跤液味，緊去共跤洗洗咧！",
    tailo:
      "Lí ji̍p-mn̂g guá tō phīnn-tio̍h lí ê tshàu-kha-sio̍h bī, kín khì kā kha sé-sé--leh!",
  },
  {
    hanji: "你先去共草蓆仔舒予伊好才去睏。",
    tailo: "Lí sing khì kā tsháu-tshio̍h-á tshu hōo i hó tsiah khì khùn.",
  },
  {
    hanji: "這坩糜敢若臭酸去，無，哪會味怪怪？",
    tailo:
      "Tsit khann muê kánn-ná tshàu-sng--khì, bô, ná ē bī kuài-kuài?",
  },
  {
    hanji: "聽你咧臭彈，我就毋相信你有佮總統做伙食飯過。",
    tailo:
      "Thiann lí teh tshàu-tuānn, guá tō m̄ siong-sìn lí ū kah tsóng-thóng tsò-hué tsia̍h-pn̄g--kuè.",
  },
  {
    hanji: "你有夠臭賤，人無欲插你，你閣一直去膏人。",
    tailo:
      "Lí ū-kàu tshàu-tsiān, lâng bô beh tshap--lí, lí koh it-ti̍t khì kô--lâng.",
  },
  {
    hanji: "鳳尾草雖然臭賤，毋過若是熱著的時，共伊煎來做茶啉嘛誠有效。",
    tailo:
      "Hōng-bué-tsháu sui-jiân tshàu-tsiān, m̄-koh nā-sī jua̍h--tio̍h ê sî, kā i tsuann-lâi tsò tê lim mā tsiânn ū-hāu.",
  },
  {
    hanji: "伊佇公司做臭頭雞仔，眾人嫌，無人呵咾。",
    tailo:
      "I tī kong-si tsò tshàu-thâu-ke-á, tsìng-lâng hiâm, bô lâng o-ló.",
  },
  {
    hanji: "便所臭薟薟，予人鼻著強欲擋袂牢。",
    tailo:
      "Piān-sóo tshàu-hiam-hiam, hōo lâng phīnn tio̍h kiōng-beh tòng bē tiâu.",
  },
  {
    hanji: "田園拋荒，野草實捅捅。",
    tailo: "Tshân-hn̂g pha-hng, iá-tsháu tsa̍t-thóng-thóng.",
  },
  {
    hanji: "我閣較衰䆀，嘛袂去揣伊鬥相共。",
    tailo: "Guá koh-khah sue-bái, mā bē khì tshuē i tàu-sann-kāng.",
  },
  {
    hanji: "阮老師袂歹，對學生真客氣。",
    tailo: "Guán lāu-su bē pháinn, tuì ha̍k-sing tsin kheh-khì.",
  },
  {
    hanji: "塑膠杯仔小可摔一下袂歹。",
    tailo: "Sok-ka pue-á sió-khuá siak--tsi̍t-ē bē pháinn.",
  },
  {
    hanji: "落雨天袂用得去溪邊𨑨迌！",
    tailo: "Lo̍h-hōo-thinn bē-īng-tit khì khe-pinn tshit-thô!",
  },
  {
    hanji: "你昨昏買的彼枝筆袂用得。",
    tailo: "Lí tsa-hng bé ê hit ki pit bē-īng--tit.",
  },
  {
    hanji: "這件代誌予伊舞甲袂收山。",
    tailo: "Tsit kiānn tāi-tsì hōo i bú kah bē-siu-suann.",
  },
  {
    hanji: "你毋通佮彼个衰尾道人合股做生理。",
    tailo: "Lí m̄-thang kah hit ê sue-bué-tō-jîn ha̍p-kóo tsò-sing-lí.",
  },
  {
    hanji: "伊真荏身，磕袂著就破病。",
    tailo: "I tsin lám-sin, kha̍p-bē-tio̍h tō phuà-pēnn.",
  },
  {
    hanji: "你這个袂見笑的，竟然敢閣來揣我。",
    tailo:
      "Lí tsit ê bē-kiàn-siàu--ê, kìng-jiân kánn koh lâi tshuē--guá.",
  },
  {
    hanji: "你袂使佮伊出去𨑨迌！",
    tailo: "Lí bē-sái kah i tshut-khì tshit-thô!",
  },
  {
    hanji: "這搭的路面頭拄仔才鞏的，你袂使得烏白踏。",
    tailo:
      "Tsit-tah ê lōo-bīn thâu-tú-á tsiah khōng--ê, lí bē-sái-tit oo-pe̍h ta̍h.",
  },
  {
    hanji: "這款的買賣我按怎算都袂和。",
    tailo: "Tsit khuán ê bé-bē guá án-tsuánn sǹg to bē-hô.",
  },
  {
    hanji: "毋拄好共伊挨著，按呢就袂直矣。",
    tailo: "M̄-tú-hó kā i e--tio̍h, án-ne tō bē-ti̍t--ah.",
  },
  {
    hanji: "世間上有真濟代誌是袂按算的。",
    tailo: "Sè-kan-siōng ū tsin tsē tāi-tsì sī bē àn-sǹg--ê.",
  },
  {
    hanji: "車咧欲開矣，你若無較緊咧就袂赴矣。",
    tailo: "Tshia teh-beh khui--ah, lí nā bô khah kín--leh tō bē-hù--ah.",
  },
  {
    hanji: "有誠濟較早的代誌，我攏袂記得矣。",
    tailo: "Ū tsiânn tsē khah-tsá ê tāi-tsì, guá lóng bē-kì--tit--ah.",
  },
  {
    hanji: "因為伊愛去讀冊，所以袂得通去𨑨迌。",
    tailo: "In-uī i ài khì tha̍k-tsheh, sóo-í bē-tit-thang khì tshit-thô.",
  },
  {
    hanji: "我心肝內感覺對伊真袂得過。",
    tailo: "Guá sim-kuann-lāi kám-kak tuì i tsin bē-tit kuè.",
  },
  {
    hanji: "你毋好閣共伊刺激矣，我驚伊會袂堪得。",
    tailo: "Lí m̄-hó koh kā i tshì-kik--ah, guá kiann i ē bē-kham--tit.",
  },
  {
    hanji: "伊身體無好，袂堪得做工課做甲三更半暝。",
    tailo:
      "I sin-thé bô hó, bē-kham-tit tsò khang-khuè tsò kah sann-kenn-puànn-mê.",
  },
  {
    hanji: "你若毋較緊咧，咱就袂當準時入場矣。",
    tailo: "Lí nā m̄ khah kín--leh, lán tō bē-tàng tsún-sî ji̍p-tiûnn--ah.",
  },
  {
    hanji: "少年放蕩，荒廢學業，真毋值。",
    tailo: "Siàu-liân hòng-tōng, hong-huì ha̍k-gia̍p, tsin m̄-ta̍t.",
  },
  {
    hanji: "揣頭路揣規月日攏揣無，我哪會遮衰潲。",
    tailo:
      "Tshuē thâu-lōo tshuē kui gue̍h-ji̍t lóng tshuē-bô, guá ná ē tsiah sue-siâu.",
  },
  {
    hanji: "我較按怎想都想袂曉，伊是按怎欲按呢做。",
    tailo:
      "Guá khah án-tsuánn siūnn to siūnn bē-hiáu, i sī-án-tsuánn beh án-ne tsò.",
  },
  {
    hanji: "伊看著我袂輸看著鬼咧。",
    tailo: "I khuànn-tio̍h guá bē-su khuànn-tio̍h kuí--leh.",
  },
  {
    hanji: "你按呢講，袂輸講是我做毋著。",
    tailo: "Lí án-ne kóng, bē-su-kóng sī guá tsò m̄-tio̍h.",
  },
  {
    hanji: "伊真固執，予人袂講得。",
    tailo: "I tsin kòo-tsip, hōo lâng bē-kóng--tit.",
  },
  {
    hanji: "彼个查某囡仔袂講得媠。",
    tailo: "Hit ê tsa-bóo gín-á bē-kóng-tit suí.",
  },
  {
    hanji: "佮伊講話，見講嘛講袂伸捙。",
    tailo: "Kah i kóng-uē, kiàn kóng mā kóng bē-tshun-tshia.",
  },
  {
    hanji: "伊有夠荏懶，規禮拜攏無洗身軀。",
    tailo: "I ū-kàu lám-nuā, kui lé-pài lóng bô sé-sin-khu.",
  },
  {
    hanji: "你若欲報數，就愛會記得討收據。",
    tailo: "Lí nā beh pò-siàu, tō ài ē-kì-tit thó siu-kì.",
  },
  {
    hanji: "共伊的電話號碼記落來。",
    tailo: "Kā i ê tiān-uē hō-bé kì--lo̍h-lâi.",
  },
  {
    hanji: "五日節若到，秫米就起大價。",
    tailo: "Gōo-ji̍t-tseh nā kàu, tsu̍t-bí tō khí-tuā-kè.",
  },
  {
    hanji: "對今仔日起，咱就是翁仔某矣。",
    tailo: "Tuì kin-á-ji̍t khí, lán tō sī ang-á-bóo--ah.",
  },
  {
    hanji: "伊的人就是一條腸仔迵尻川，無啥物心機。",
    tailo:
      "I ê lâng tō sī tsi̍t tiâu tn̂g-á thàng kha-tshng, bô siánn-mih sim-ki.",
  },
  {
    hanji: "伊去予隔壁的阿美仔迷去矣。",
    tailo: "I khì hōo keh-piah ê A-bí--á bê--khì--ah.",
  },
  {
    hanji: "彼陣人講無三句話就起迸矣。",
    tailo: "Hit tīn lâng kóng bô sann kù uē tō khí piàng--ah.",
  },
  {
    hanji: "伊予𪜶囝逆一下中風。",
    tailo: "I hōo in kiánn gi̍k tsi̍t-ē tiòng-hong.",
  },
  {
    hanji: "彼隻豬哥閣咧起𪁎矣。",
    tailo: "Hit tsiah ti-ko koh teh khí-tshio--ah.",
  },
  {
    hanji: "你若叫伊鬥相共，伊後擺一定會共你討人情。",
    tailo:
      "Lí nā kiò i tàu-sann-kāng, i āu-pái it-tīng ē kā lí thó jîn-tsîng.",
  },
  {
    hanji: "𪜶老爸出山的時，阮攏有去共伊送上山。",
    tailo:
      "In lāu-pē tshut-suann ê sî, guán lóng ū khì kā i sàng-tsiūnn-suann.",
  },
  {
    hanji: "起手無回大丈夫，這步棋行了就袂當後悔矣。",
    tailo:
      "Khí-tshiú bô huê tāi-tiōng-hu, tsit pōo kî kiânn-liáu tō bē-tàng hiō-hué--ah.",
  },
  {
    hanji: "起手我就知影伊是歹人矣。",
    tailo: "Khí-tshiú guá tō tsai-iánn i sī pháinn-lâng--ah.",
  },
  {
    hanji: "你實在真逆天，予你食肉閣嫌。",
    tailo: "Lí si̍t-tsāi tsin gi̍k-thinn, hōo lí tsia̍h bah koh hiâm.",
  },
  {
    hanji: "是啥物代誌予伊起毛䆀？",
    tailo: "Sī siánn-mih tāi-tsì hōo i khí-moo bái?",
  },
  {
    hanji: "相連紲攏考一百分，莫怪起毛婸。",
    tailo: "Sio-liân-suà lóng khó tsi̍t-pah hun, bo̍k-kuài khí-moo giang.",
  },
  {
    hanji: "阮欲開始起火來烘肉矣。",
    tailo: "Guán beh khai-sí khí-hué lâi hang-bah--ah.",
  },
  {
    hanji: "冷凍的魚仔提出來退冰。",
    tailo: "Líng-tòng ê hî-á the̍h tshut-lâi thè-ping.",
  },
  {
    hanji: "逐个人攏愛拍拚追求家己的目標。",
    tailo: "Ta̍k ê lâng lóng ài phah-piànn tui-kiû ka-kī ê bo̍k-piau.",
  },
  {
    hanji: "你這過的成績有淡薄仔退步。",
    tailo: "Lí tsit-kuè ê sîng-tsik ū tām-po̍h-á thè-pōo.",
  },
  {
    hanji: "法官當咧追究失事的責任。",
    tailo: "Huat-kuann tng-teh tui-kiù sit-sū ê tsik-jīm.",
  },
  {
    hanji: "攏是彼幾个𤆬頭欲起事。",
    tailo: "Lóng sī hit kuí ê tshuā-thâu beh khí-sū.",
  },
  {
    hanji: "日頭曝尻川矣，你猶毋緊起來！",
    tailo: "Ji̍t-thâu pha̍k kha-tshng--ah, lí iáu m̄ kín khí--lâi!",
  },
  {
    hanji: "遐的殺人犯敢講攏毋驚冤魂來討命？",
    tailo:
      "Hia-ê sat-jîn-huān kám-kóng lóng m̄ kiann uan-hûn lâi thó-miā?",
  },
  {
    hanji: "伊已經去阿玉仔𪜶兜送定矣。",
    tailo: "I í-king khì A-gio̍k-á in tau sàng-tiānn--ah.",
  },
  {
    hanji: "磕袂著就欲起性地，啥人閣敢和你做伙？",
    tailo:
      "Kha̍p-bē-tio̍h tō beh khí-sìng-tē, siánn-lâng koh kánn hām lí tsò-hué?",
  },
  {
    hanji: "公司無趁錢，真濟股東攏想欲退股。",
    tailo:
      "Kong-si bô thàn-tsînn, tsin tsē kóo-tong lóng siūnn-beh thè-kóo.",
  },
  {
    hanji: "𪜶大家足𠢕訕削人。",
    tailo: "In ta-ke tsiok gâu suān-siah--lâng.",
  },
  {
    hanji: "你按呢敢袂傷過頭迷信？",
    tailo: "Lí án-ne kám bē siunn kuè-thâu bê-sìn?",
  },
  {
    hanji: "阿滿仔討契兄，去予𪜶翁㨑著。",
    tailo: "A-buán--á thó-khè-hiann, khì hōo in ang tsang--tio̍h.",
  },
  {
    hanji: "彼个乞食婆攏四界去討食。",
    tailo: "Hit ê khit-tsia̍h-pô lóng sì-kè khì thó-tsia̍h.",
  },
  {
    hanji: "食雞，會起家；食鰇魚，生囡仔好育飼。",
    tailo: "Tsia̍h ke, ē khí-ke; tsia̍h jiû-hî, senn gín-á hó-io-tshī.",
  },
  {
    hanji: "我討海已經有三十年矣。",
    tailo: "Guá thó-hái í-king ū sann-tsa̍p nî--ah.",
  },
  {
    hanji: "伊猶未退酒，你莫去共伊吵。",
    tailo: "I iáu-buē thè-tsiú, lí mài khì kā i tshá.",
  },
  {
    hanji: "恁是咧起痟呢？遐爾仔寒閣欲去泅水。",
    tailo:
      "Lín sī teh khí-siáu--nih? Hiah-nī-á kuânn koh beh khì siû-tsuí.",
  },
  {
    hanji: "伊因為起痟，攏無咧上班。",
    tailo: "I in-uī khí-siáu, lóng bô teh siōng-pan.",
  },
  {
    hanji: "彼个童乩退童了後，規身軀攏無力去。",
    tailo:
      "Hit ê tâng-ki thè-tâng liáu-āu, kui-sin-khu lóng bô-la̍t--khì.",
  },
  {
    hanji: "人若是欲食毋討趁，註定是一世人抾捔啦。",
    tailo:
      "Lâng nā-sī beh tsia̍h m̄ thó-thàn, tsù-tiānn sī tsi̍t-sì-lâng khioh-ka̍k--lah.",
  },
  {
    hanji: "話講無幾句，伊就起雄矣。",
    tailo: "Uē kóng bô kuí kù, i tō khí-hiông--ah.",
  },
  {
    hanji: "伊食物件有夠討債，定定賰一半就欲挕捒。",
    tailo:
      "I tsia̍h mi̍h-kiānn ū-kàu thó-tsè, tiānn-tiānn tshun tsi̍t-puànn tō beh hìnn-sak.",
  },
  {
    hanji: "𪜶兜的財產攏予伊這个討債囝敗了矣。",
    tailo:
      "In tau ê tsâi-sán lóng hōo i tsit ê thó-tsè-kiánn pāi-liáu--ah.",
  },
  {
    hanji: "股票的價錢逐工都咧起落。",
    tailo: "Kóo-phiò ê kè-tsînn ta̍k-kang to teh khí-lo̍h.",
  },
  {
    hanji: "隨人的物件，隨人做記號。",
    tailo: "Suî-lâng ê mi̍h-kiānn, suî-lâng tsò kì-hō.",
  },
  {
    hanji: "好好仔講就好，毋通按呢起跤動手。",
    tailo: "Hó-hó-á kóng tō hó, m̄-thang án-ne khí-kha-tāng-tshiú.",
  },
  {
    hanji: "新的公路欲開磅空對這粒山下跤迵過。",
    tailo:
      "Sin ê kong-lōo beh khui pōng-khang tuì tsit lia̍p suann ē-kha thàng--kuè.",
  },
  {
    hanji: "我上討厭彼種講話無信用的人。",
    tailo: "Guá siōng thó-ià hit tsióng kóng-uē bô sìn-iōng ê lâng.",
  },
  {
    hanji: "經過一個月了後，伊才追認𪜶囝結婚的事實。",
    tailo:
      "King-kuè tsi̍t kò gue̍h liáu-āu, i tsiah tui-jīn in kiánn kiat-hun ê sū-si̍t.",
  },
  {
    hanji: "風颱了後逐項菜都起價。",
    tailo: "Hong-thai liáu-āu ta̍k hāng tshài to khí-kè.",
  },
  {
    hanji: "連鞭就有人欲來共伊討數矣。",
    tailo: "Liâm-mi tō ū lâng beh lâi kā i thó-siàu--ah.",
  },
  {
    hanji: "你若無紮錢，予你先記數。",
    tailo: "Lí nā bô tsah tsînn, hōo lí sing kì-siàu.",
  },
  {
    hanji: "伊按呢共你訕潲，你敢袂艱苦？",
    tailo: "I án-ne kā lí suān-siâu, lí kám bē kan-khóo?",
  },
  {
    hanji: "伊藥仔食落去有漸漸仔退熱矣。",
    tailo: "I io̍h-á tsia̍h--lo̍h-khì ū tsiām-tsiām-á thè-jia̍t--ah.",
  },
  {
    hanji: "囡仔共大人討錢去買枝仔冰。",
    tailo: "Gín-á kā tuā-lâng thó-tsînn khì bé ki-á-ping.",
  },
  {
    hanji: "欲做學問，起頭著愛共基礎拍予伊好。",
    tailo: "Beh tsò ha̍k-būn, khí-thâu tio̍h-ài kā ki-tshóo phah hōo i hó.",
  },
  {
    hanji: "這款藥仔抹落去，真緊就會退癀矣。",
    tailo: "Tsit khuán io̍h-á buah--lo̍h-khì, tsin kín tō ē thè-hông--ah.",
  },
  {
    hanji: "你按呢一直逃避，嘛毋是辦法。",
    tailo: "Lí án-ne it-ti̍t tô-pī, mā m̄ sī pān-huat.",
  },
  {
    hanji: "沙龍巴斯貼久嘛會起藥蛆。",
    tailo: "Sa-long-pa-suh tah kú mā ē khí-io̍h-tshi.",
  },
  {
    hanji: "伊貢獻伊的一生去幫助青盲的人。",
    tailo: "I kòng-hiàn i ê it-sing khì pang-tsōo tshenn-mê ê lâng.",
  },
  {
    hanji: "有真濟人對伊足迷戀的。",
    tailo: "Ū tsin tsē lâng tuì i tsiok bê-luân--ê.",
  },
  {
    hanji: "共這支鉤仔釘佇這面壁。",
    tailo: "Kā tsit ki kau-á tìng tī tsit bīn piah.",
  },
  {
    hanji: "你做人的馬仔，一世人都袂出脫。",
    tailo: "Lí tsò lâng ê bé-á, tsi̍t-sì-lâng to bē tshut-thuat.",
  },
  {
    hanji: "伊違反規定，去予主辦單位除名矣。",
    tailo: "I uî-huán kui-tīng, khì hōo tsú-pān tan-uī tû-miâ--ah.",
  },
  {
    hanji: "伊酒啉甲馬西馬西，話捎咧亂講。",
    tailo: "I tsiú lim kah má-se-má-se, uē sa leh luān kóng.",
  },
  {
    hanji: "𪜶兩个鬥空欲騙你的錢，你著較細膩咧！",
    tailo:
      "In nn̄g ê tàu-khang beh phiàn lí ê tsînn, lí tio̍h khah sè-jī--leh!",
  },
  {
    hanji: "除非你加入，伊才肯共阮鬥相共。",
    tailo: "Tû-hui lí ka-ji̍p, i tsiah khíng kā guán tàu-sann-kāng.",
  },
  {
    hanji: "你敢有需要人共你鬥相共？",
    tailo: "Lí kám ū su-iàu lâng kā lí tàu-sann-kāng?",
  },
  {
    hanji: "風颱咧欲來矣，真濟漁船仔攏駛入來港口閃風。",
    tailo:
      "Hong-thai teh-beh lâi--ah, tsin tsē hî-tsûn-á lóng sái ji̍p-lâi káng-kháu siám-hong.",
  },
  {
    hanji: "阮搬來下港二十年矣，早就釘根矣。",
    tailo: "Guán puann-lâi ē-káng jī-tsa̍p nî--ah, tsá tō tìng-kin--ah.",
  },
  {
    hanji: "你是釘根矣是無？坐規晡攏無徙位。",
    tailo: "Lí sī tìng-kin--ah sī--bô? Tsē kui-poo lóng bô suá-uī.",
  },
  {
    hanji: "伊開始咧陣疼，應該欲生矣。",
    tailo: "I khai-sí teh tsūn-thiànn, ing-kai beh senn--ah.",
  },
  {
    hanji: "身體健康上重要，衛生習慣袂當馬馬虎虎。",
    tailo:
      "Sin-thé kiān-khong siōng tiōng-iàu, uē-sing si̍p-kuàn bē-tàng má-má-hu-hu.",
  },
  {
    hanji: "我若有時間就去共恁鬥無閒。",
    tailo: "Guá nā ū sî-kan tō khì kā lín tàu-bô-îng.",
  },
  {
    hanji: "代誌都咧亂矣，你莫閣來鬥無閒。",
    tailo: "Tāi-tsì to teh luān--ah, lí mài koh lâi tàu-bô-îng.",
  },
  {
    hanji: "學生佇學校攏會學做針黹。",
    tailo: "Ha̍k-sing tī ha̍k-hāu lóng ē o̍h tsò tsiam-tsí.",
  },
  {
    hanji: "伊佇外口鬥夥計，𪜶某敢攏毋知？",
    tailo: "I tī guā-kháu tàu-hué-kì, in bóo kám lóng m̄ tsai?",
  },
  {
    hanji: "你莫看彼个囡仔乖乖仔，其實伊真鬼精。",
    tailo:
      "Lí mài khuànn hit ê gín-á kuai-kuai--á, kî-si̍t i tsin kuí-tsiann.",
  },
  {
    hanji: "廟口咧大拜拜，咱來去鬥鬧熱。",
    tailo: "Biō-kháu teh tuā pài-pài, lán lâi-khì tàu-lāu-jia̍t.",
  },
  {
    hanji: "大人咧處理代誌，囡仔人毋通來鬥鬧熱。",
    tailo:
      "Tuā-lâng teh tshú-lí tāi-tsì, gín-á-lâng m̄-thang lâi tàu-lāu-jia̍t.",
  },
  {
    hanji: "彼个人鬼頭鬼腦，逐工都想空想縫欲食人。",
    tailo:
      "Hit ê lâng kuí-thâu-kuí-náu, ta̍k-kang to siūnn-khang-siūnn-phāng beh tsia̍h--lâng.",
  },
  {
    hanji: "這遍佳哉有你鬥幫贊，實在真多謝！",
    tailo: "Tsit piàn ka-tsài ū lí tàu-pang-tsān, si̍t-tsāi tsin to-siā!",
  },
  {
    hanji: "這是你袂當閃避的問題。",
    tailo: "Tse sī lí bē-tàng siám-pī ê būn-tê.",
  },
  {
    hanji: "檨仔釘點矣，緊食食咧。",
    tailo: "Suāinn-á tìng-tiám--ah, kín tsia̍h-tsia̍h--leh.",
  },
  {
    hanji: "這禮拜有連紲四工的假。",
    tailo: "Tsit lé-pài ū liân-suà sì kang ê ká.",
  },
  {
    hanji: "這个花矸愛排佇中央，毋通偏一爿。",
    tailo: "Tsit ê hue-kan ài pâi tī tiong-ng, m̄-thang phian tsi̍t pîng.",
  },
  {
    hanji: "你是做佗一途的？我咧做老師。",
    tailo: "Lí sī tsò tó tsi̍t tôo--ê? Guá teh tsò lāu-su.",
  },
  {
    hanji: "伊七少年八少年就做公矣。",
    tailo: "I tshit siàu-liân peh siàu-liân tō tsò kong--ah.",
  },
  {
    hanji: "這是你家己做得來的，毋是人害你的。",
    tailo: "Tse sī lí ka-kī tsò-tit lâi--ê, m̄ sī lâng hāi--lí--ê.",
  },
  {
    hanji: "紅豆做紅豆囥，綠豆做綠豆囥。",
    tailo: "Âng-tāu tsò âng-tāu khǹg, li̍k-tāu tsò li̍k-tāu khǹg.",
  },
  {
    hanji: "伊想欲共𪜶查某囝做予阿勇伯仔𪜶後生。",
    tailo:
      "I siūnn-beh kā in tsa-bóo-kiánn tsò hōo A-ióng peh--á in hāu-senn.",
  },
  {
    hanji: "我共你偷講，你毋通共別人講。",
    tailo: "Guá kā lí thau kóng, lí m̄-thang kā pa̍t-lâng kóng.",
  },
  {
    hanji: "你若是無法度，就毋通踮遐咧假𠢕。",
    tailo: "Lí nā-sī bô-huat-tōo, tō m̄-thang tiàm hia teh ké-gâu.",
  },
  {
    hanji: "伊按呢做是欲做人情予你。",
    tailo: "I án-ne tsò sī beh tsò-jîn-tsîng hōo--lí.",
  },
  {
    hanji: "這擺市內做大水，損失誠嚴重。",
    tailo: "Tsit pái tshī-lāi tsò-tuā-tsuí, sún-sit tsiânn giâm-tiōng.",
  },
  {
    hanji: "做代誌愛照起工，毋通偷工減料。",
    tailo: "Tsò tāi-tsì ài tsiàu-khí-kang, m̄-thang thau-kang-kiám-liāu.",
  },
  {
    hanji: "分派工課愛公平，袂使偏心。",
    tailo: "Hun-phài khang-khuè ài kong-pênn, bē-sái phian-sim.",
  },
  {
    hanji: "生活閣較困難，嘛袂使做歹。",
    tailo: "Sing-ua̍h koh-khah khùn-lân, mā bē-sái tsò-pháinn.",
  },
  {
    hanji: "伊真𠢕假仙，你毋通予伊騙去。",
    tailo: "I tsin gâu ké-sian, lí m̄-thang hōo i phiàn--khì.",
  },
  {
    hanji: "明明都足想欲食，閣假仙假觸講食袂落去。",
    tailo:
      "Bîng-bîng to tsiok siūnn-beh tsia̍h, koh ké-sian-ké-tak kóng tsia̍h bē lo̍h--khì.",
  },
  {
    hanji: "這个錶仔是假包的，你予人騙去矣！",
    tailo: "Tsit ê pió-á sī ké-pâu--ê, lí hōo lâng phiàn--khì--ah!",
  },
  {
    hanji: "媽媽去布莊剪布欲做新衫。",
    tailo: "Má-mah khì pòo-tsng tsián-pòo beh tsò sin sann.",
  },
  {
    hanji: "咱兩个做伙來去𨑨迌。",
    tailo: "Lán nn̄g ê tsò-hué lâi-khì tshit-thô.",
  },
  {
    hanji: "逐家有緣做伙，愛珍惜這種緣份。",
    tailo: "Ta̍k-ke ū-iân tsò-hué, ài tin-sioh tsit tsióng iân-hūn.",
  },
  {
    hanji: "這个囡仔真健丟，閣會曉拋麒麟。",
    tailo: "Tsit ê gín-á tsin kiān-tiu, koh ē-hiáu pha-kî-lîn.",
  },
  {
    hanji: "你莫假死矣，你哪有可能毋知。",
    tailo: "Lí mài ké-sí--ah, lí ná ū khó-lîng m̄ tsai.",
  },
  {
    hanji: "做紅龜粿的時愛用紅花粉做色。",
    tailo: "Tsò âng-ku-kué ê sî ài iōng âng-hue-hún tsò-sik.",
  },
  {
    hanji: "明仔載愛共恁阿公做忌。",
    tailo: "Bîn-á-tsài ài kā lín a-kong tsò-kī.",
  },
  {
    hanji: "假使若落雨，我就無愛去。",
    tailo: "Ká-sú nā lo̍h-hōo, guá tō bô ài khì.",
  },
  {
    hanji: "𪜶兩人偷來暗去，通庄頭的人攏嘛知。",
    tailo:
      "In nn̄g lâng thau-lâi-àm-khì, thong tsng-thâu ê lâng lóng mā tsai.",
  },
  {
    hanji: "伊欲共一樓提來做店面。",
    tailo: "I beh kā it lâu the̍h-lâi tsò tiàm-bīn.",
  },
  {
    hanji: "桌頂的菜，你毋通佇遐偷拈。",
    tailo: "Toh-tíng ê tshài, lí m̄-thang tī hia thau ni.",
  },
  {
    hanji: "𪜶某偷咬雞仔伊敢毋知？",
    tailo: "In bóo thau-kā-ke-á i kám m̄ tsai?",
  },
  {
    hanji: "正月初二查某囝轉外家做客。",
    tailo: "Tsiann-gue̍h tshe-jī tsa-bóo-kiánn tńg guā-ke tsò-kheh.",
  },
  {
    hanji: "透大風共電火柱仔偃倒矣。",
    tailo: "Thàu-tuā-hong kā tiān-hué-thiāu-á ián-tó--ah.",
  },
  {
    hanji: "好人予你做，我來做臭人。",
    tailo: "Hó-lâng hōo lí tsò, guá lâi tsò-tshàu-lâng.",
  },
  {
    hanji: "咱做陣來去南方澳仔食海產。",
    tailo: "Lán tsò-tīn lâi-khì Lâm-hong-ò-á tsia̍h hái-sán.",
  },
  {
    hanji: "我無愛佮伊做伙，偏偏閣佮伊仝班。",
    tailo: "Guá bô ài kah i tsò-hué, phian-phian koh kah i kāng pan.",
  },
  {
    hanji: "我想欲出門，偏偏落雨矣。",
    tailo: "Guá siūnn-beh tshut-mn̂g, phian-phian lo̍h-hōo--ah.",
  },
  {
    hanji: "你是偏偏欲佮我做對是無？",
    tailo: "Lí sī phian-phian beh kah guá tsò-tuì sī--bô?",
  },
  {
    hanji: "狗仔吠甲遮爾大聲，一定是有人來偷掠雞。",
    tailo:
      "Káu-á puī kah tsiah-nī tuā-siann, it-tīng sī ū lâng lâi thau lia̍h ke.",
  },
  {
    hanji: "伊偷提人的物件，去予人掠著。",
    tailo: "I thau-the̍h lâng ê mi̍h-kiānn, khì hōo lâng lia̍h--tio̍h.",
  },
  {
    hanji: "阿兄欲去臺北揣頭路，阿母偷揜三千箍予伊做所費。",
    tailo:
      "A-hiann beh khì Tâi-pak tshuē thâu-lōo, a-bú thau-iap sann-tshing khoo hōo i tsò sóo-huì.",
  },
  {
    hanji: "明明都咧佮意阿美，看著阿美閣會假無意！",
    tailo: "Bîng-bîng to teh kah-ì A-bí, khuànn-tio̍h A-bí koh ē ké-bô-ì!",
  },
  {
    hanji: "伊自透早做甲這馬，攏無停睏。",
    tailo: "I tsū thàu-tsá tsò kah tsit-má, lóng bô thîng-khùn.",
  },
  {
    hanji: "毋管生活偌爾艱苦，總是愛繼續拍拚落去。",
    tailo:
      "M̄-kuán sing-ua̍h guā-nī kan-khóo, tsóng-sī ài kè-sio̍k phah-piànn--lo̍h-khì.",
  },
  {
    hanji: "去人濟的所在愛較斟酌咧，錢毋通去予剪綹仔剪去。",
    tailo:
      "Khì lâng tsē ê sóo-tsāi ài khah tsim-tsiok--leh, tsînn m̄-thang khì hōo tsián-liú-á tsián--khì.",
  },
  {
    hanji: "你是真正毋知，抑是假影毋知？",
    tailo: "Lí sī tsin-tsiànn m̄ tsai, ia̍h-sī ké-iánn m̄ tsai?",
  },
  {
    hanji: "恁莫佇眾人面頭前做瘦氣，實在袂看口得。",
    tailo:
      "Lín mài tī tsìng-lâng bīn-thâu-tsîng tsò-sán-khuì, si̍t-tsāi bē-khuànn-kháu--tit.",
  },
  {
    hanji: "會當佮恁做親情，我嘛誠歡喜。",
    tailo: "Ē-tàng kah lín tsò-tshin-tsiânn, guá mā tsiânn huann-hí.",
  },
  {
    hanji: "做戲毋是簡單的代誌，愛下工夫。",
    tailo: "Tsò-hì m̄ sī kán-tan ê tāi-tsì, ài hē kang-hu.",
  },
  {
    hanji: "頭家，弓蕉一斤偌濟錢？",
    tailo: "Thâu-ke, king-tsio tsi̍t kin guā-tsē tsînn?",
  },
  {
    hanji: "一陣老大人佇公園仔內面開講、行棋做議量。",
    tailo:
      "Tsi̍t tīn lāu-tuā-lâng tī kong-hn̂g-á lāi-bīn khai-káng, kiânn-kî tsò-gī-niū.",
  },
  {
    hanji: "伊欲用彼張符仔共人做譴損。",
    tailo: "I beh iōng hit tiunn hû-á kā lâng tsò-khiàn-sńg.",
  },
  {
    hanji: "伊覕佇門後咧偷聽人講話。",
    tailo: "I bih tī mn̂g-āu teh thau thiann lâng kóng-uē.",
  },
  {
    hanji: "索仔勒較絚咧，才袂去予風吹落去！",
    tailo:
      "Soh-á li̍k khah ân--leh, tsiah bē khì hōo hong tshue-lak--khì!",
  },
  {
    hanji: "你哪會連我都罵參落去？",
    tailo: "Lí ná ē liân guá to mē tsham--lo̍h-khì?",
  },
  {
    hanji: "食飽桌頂無拭會唌虼蚻來。",
    tailo: "Tsia̍h-pá toh-tíng bô tshit ē siânn ka-tsua̍h lâi.",
  },
  {
    hanji: "彼擔賣果子的定定啄人的秤頭。",
    tailo: "Hit tànn bē-kué-tsí--ê tiānn-tiānn tok lâng ê tshìn-thâu.",
  },
  {
    hanji: "啊都伊毋來，阮才會欠一个人。",
    tailo: "Ah to i m̄ lâi, guán tsiah ē khiàm tsi̍t ê lâng.",
  },
  {
    hanji: "你莫提雞卵糕佇遐唌人！",
    tailo: "Lí mài the̍h ke-nn̄g-ko tī hia siânn--lâng!",
  },
  {
    hanji: "你若無講話，人嘛袂共你當做啞口。",
    tailo: "Lí nā bô kóng-uē, lâng mā bē kā lí tòng-tsò é-káu.",
  },
  {
    hanji: "這粒豆仔啞口去，種袂發芽。",
    tailo: "Tsit lia̍p tāu-á é-káu--khì, tsìng bē puh-gê.",
  },
  {
    hanji: "這件代誌啥物時陣欲開始動手？",
    tailo: "Tsit kiānn tāi-tsì siánn-mih sî-tsūn beh khai-sí tāng-tshiú?",
  },
  {
    hanji: "蔥仔佮蒜仔欲按怎區別？",
    tailo: "Tshang-á kah suàn-á beh án-tsuánn khu-pia̍t?",
  },
  {
    hanji: "請你說明語言佮文字的區別。",
    tailo: "Tshiánn lí suat-bîng gí-giân kah bûn-jī ê khu-pia̍t.",
  },
  {
    hanji: "有的生理人做生理會唬秤頭，所以買物件愛細膩。",
    tailo:
      "Ū ê sing-lí-lâng tsò-sing-lí ē hóo-tshìn-thâu, sóo-í bé mi̍h-kiānn ài sè-jī.",
  },
  {
    hanji: "咱的信心絕對毋通動搖。",
    tailo: "Lán ê sìn-sim tsua̍t-tuì m̄-thang tōng-iâu.",
  },
  {
    hanji: "我想欲佮你參詳一項代誌！",
    tailo: "Guá siūnn-beh kah lí tsham-siông tsi̍t hāng tāi-tsì!",
  },
  {
    hanji: "大人無上桌，囡仔人袂使先動箸。",
    tailo: "Tuā-lâng bô tsiūnn-toh, gín-á-lâng bē-sái sing tāng-tī.",
  },
  {
    hanji: "𪜶英語老師是啄鼻仔。",
    tailo: "In Ing-gí lāu-su sī tok-phīnn-á.",
  },
  {
    hanji: "入去遐久矣，哪會一點仔動靜都無？",
    tailo: "Ji̍p-khì hiah kú--ah, ná ē tsi̍t-tiám-á tōng-tsīng to bô?",
  },
  {
    hanji: "你家己做毋著閣敢來唱聲，我無咧驚你。",
    tailo:
      "Lí ka-kī tsò m̄-tio̍h koh kánn lâi tshiàng-siann, guá bô teh kiann--lí.",
  },
  {
    hanji: "按呢無夠，你愛閣補一寡仔，才有夠通分。",
    tailo:
      "Án-ne bô-kàu, lí ài koh póo--tsi̍t-kuá-á, tsiah ū-kàu thang pun.",
  },
  {
    hanji: "你真正是娶著一个好某。",
    tailo: "Lí tsin-tsiànn sī tshuā-tio̍h tsi̍t ê hó bóo.",
  },
  {
    hanji: "是啥人共你講我欲嫁伊？",
    tailo: "Sī siánn-lâng kā lí kóng guá beh kè--i?",
  },
  {
    hanji: "你足夠工的，服務誠好。",
    tailo: "Lí tsiok kàu-kang--ê, ho̍k-bū tsiânn hó.",
  },
  {
    hanji: "遮的貨賣完嘛干焦夠工爾爾，也無啥趁。",
    tailo:
      "Tsia-ê huè bē-uân mā kan-na kàu-kang niā-niā, iā bô siánn thàn.",
  },
  {
    hanji: "這个計畫真夠工，逐方面攏想甲著。",
    tailo:
      "Tsit ê kè-uē tsin kàu-kang, ta̍k hong-bīn lóng siūnn kah tio̍h.",
  },
  {
    hanji: "雞大甲夠水，會使刣矣。",
    tailo: "Ke tuā kah kàu-tsuí, ē-sái thâi--ah.",
  },
  {
    hanji: "開五百箍，愛食予夠本。",
    tailo: "Khai gōo-pah khoo, ài tsia̍h hōo kàu-pún.",
  },
  {
    hanji: "一月日愛偌濟錢才有夠用。",
    tailo: "Tsi̍t gue̍h-ji̍t ài guā-tsē tsînn tsiah ū kàu-īng.",
  },
  {
    hanji: "先規畫予好，才來執行。",
    tailo: "Sing kui-uē hōo hó, tsiah lâi tsip-hîng.",
  },
  {
    hanji: "伊堅持欲繼續拍拚落去。",
    tailo: "I kian-tshî beh kè-sio̍k phah-piànn--lo̍h-khì.",
  },
  {
    hanji: "菜燕囥冷了後就會堅凍。",
    tailo: "Tshài-iàn khǹg líng liáu-āu tō ē kian-tàng.",
  },
  {
    hanji: "這屑仔物件遮濟人欲食，一定食袂夠氣。",
    tailo:
      "Tsit-sut-á mi̍h-kiānn tsiah tsē lâng beh tsia̍h, it-tīng tsia̍h bē kàu-khuì.",
  },
  {
    hanji: "檨仔切片烘予堅乾做檨仔乾。",
    tailo:
      "Suāinn-á tshiat phìnn hang hōo kian-kuann tsò suāinn-á-kuann.",
  },
  {
    hanji: "我堂堂一个男子漢大丈夫，講會到就做會到。",
    tailo:
      "Guá tông-tông tsi̍t ê lâm-tsú-hàn tāi-tiōng-hu, kóng ē kàu tō tsò ē kàu.",
  },
  {
    hanji: "你實在是食人夠夠，傷過份啦！",
    tailo: "Lí si̍t-tsāi sī tsia̍h-lâng-kàu-kàu, siunn kuè-hūn--lah!",
  },
  {
    hanji: "毋知伊的新頂司個性啥款？",
    tailo: "M̄ tsai i ê sin tíng-si kò-sìng siánn-khuán?",
  },
  {
    hanji: "隔壁咧娶新娘，咱來去看鬧熱。",
    tailo: "Keh-piah teh tshuā-sin-niû, lán lâi-khì khuànn-lāu-jia̍t.",
  },
  {
    hanji: "阿水嬸仔明仔載欲娶新婦。",
    tailo: "A-tsuí tsím--á bîn-á-tsài beh tshuā-sin-pū.",
  },
  {
    hanji: "鹿港是一个真鬧熱的埠頭。",
    tailo: "Lo̍k-káng sī tsi̍t ê tsin lāu-jia̍t ê poo-thâu.",
  },
  {
    hanji: "阮公司的員工已經夠額，無欲閣倩矣。",
    tailo:
      "Guán kong-si ê uân-kang í-king kàu-gia̍h, bô beh koh tshiànn--ah.",
  },
  {
    hanji: "做生日遮爾奢颺，真討債。",
    tailo: "Tsò-senn-ji̍t tsiah-nī tshia-iānn, tsin thó-tsè.",
  },
  {
    hanji: "古早時，婦人人欲出門攏愛梳妝打扮。",
    tailo:
      "Kóo-tsá-sî, hū-jîn-lâng beh tshut-mn̂g lóng ài se-tsng tánn-pān.",
  },
  {
    hanji: "伊誠將才，為國家計畫足濟代誌。",
    tailo: "I tsiânn tsiòng-tsâi, uī kok-ka kè-uē tsiok tsē tāi-tsì.",
  },
  {
    hanji: "這領衫是伊專工為你做的。",
    tailo: "Tsit niá sann sī i tsuan-kang uī lí tsò--ê.",
  },
  {
    hanji: "有人去密告，代誌才會煏空。",
    tailo: "Ū lâng khì bi̍t-kò, tāi-tsì tsiah ē piak-khang.",
  },
  {
    hanji: "將來會發生啥代誌無人知。",
    tailo: "Tsiong-lâi ē huat-sing siánn tāi-tsì bô lâng tsai.",
  },
  {
    hanji: "將近欲收擔的時陣，伊才到位。",
    tailo: "Tsiong-kīn beh siu-tànn ê sî-tsūn, i tsiah kàu-uī.",
  },
  {
    hanji: "伊已經予人送定矣，有婚約佇咧。",
    tailo: "I í-king hōo lâng sàng-tiānn--ah, ū hun-iok tī--leh.",
  },
  {
    hanji: "我的希望攏寄託佇你的身上。",
    tailo: "Guá ê hi-bāng lóng kià-thok tī lí ê sin--siōng.",
  },
  {
    hanji: "伊共囡仔寄託予𪜶大兄。",
    tailo: "I kā gín-á kià-thok hōo in tuā-hiann.",
  },
  {
    hanji: "窗仔門關甲密喌喌，連胡蠅都飛袂入去。",
    tailo:
      "Thang-á-mn̂g kuainn kah ba̍t-tsiuh-tsiuh, liân hôo-sîn to pue bē ji̍p--khì.",
  },
  {
    hanji: "你的衫仔櫥閣櫼甲真密實。",
    tailo: "Lí ê sann-á-tû koh tsinn kah tsin ba̍t-tsa̍t.",
  },
  {
    hanji: "後禮拜欲去阿姨𪜶兜愛會記得紮帶手去。",
    tailo: "Āu lé-pài beh khì a-î in tau ài ē-kì-tit tsah tuà-tshiú khì.",
  },
  {
    hanji: "做人若傷計較得失，日子會足歹過。",
    tailo:
      "Tsò-lâng nā siunn kè-kàu tik-sit, ji̍t-tsí ē tsiok pháinn-kuè.",
  },
  {
    hanji: "我佮伊常在佇路頭相拄。",
    tailo: "Guá kah i tshiâng-tsāi tī lōo-thâu sio-tú.",
  },
  {
    hanji: "你這馬就咧張老，敢袂傷早？",
    tailo: "Lí tsit-má tō teh tiunn-lāu, kám bē siunn tsá?",
  },
  {
    hanji: "這馬的電視攏是彩色的。",
    tailo: "Tsit-má ê tiān-sī lóng sī tshái-sik--ê.",
  },
  {
    hanji: "伊因為帶身命才會攏無咧上班。",
    tailo: "I in-uī tài-sin-miā tsiah ē lóng bô teh siōng-pan.",
  },
  {
    hanji: "帶念你較早攏真認真做工課，這擺就原諒你。",
    tailo:
      "Tài-liām lí khah-tsá lóng tsin jīn-tsin tsò khang-khuè, tsit-pái tō guân-liōng--lí.",
  },
  {
    hanji: "一下無張持，物件煞落佇塗跤。",
    tailo: "Tsi̍t-ē bô-tiunn-tî, mi̍h-kiānn suah lak tī thôo-kha.",
  },
  {
    hanji: "伊有帶病，面色才會遐歹看。",
    tailo: "I ū tài-pēnn, bīn-sik tsiah ē hiah pháinn-khuànn.",
  },
  {
    hanji: "代誌會舞甲變按呢攏是予伊帶衰的。",
    tailo: "Tāi-tsì ē bú kah piàn án-ne lóng sī hōo i tài-sue--ê.",
  },
  {
    hanji: "我腹肚疼甲強強欲接載袂牢。",
    tailo: "Guá pak-tóo thiànn kah kiōng-kiōng beh tsih-tsài bē tiâu.",
  },
  {
    hanji: "聽伊講遐的話，我聽甲強欲起性地。",
    tailo:
      "Thiann i kóng hia-ê uē, guá thiann kah kiōng-beh khí-sìng-tē.",
  },
  {
    hanji: "彼个佇偏僻的所在搶劫的強盜已經予警察掠著矣。",
    tailo:
      "Hit ê tī phian-phiah ê sóo-tsāi tshiúnn-kiap ê kiông-tō í-king hōo kíng-tshat lia̍h--tio̍h--ah.",
  },
  {
    hanji: "伊欠人真濟錢，不時有債主佇巷仔口張等伊。",
    tailo:
      "I khiàm lâng tsin tsē tsînn, put-sî ū tsè-tsú tī hāng-á-kháu tng-tán--i.",
  },
  {
    hanji: "伊昨暝予人強摃一萬箍去。",
    tailo: "I tsa-mê hōo lâng kiông-kòng tsi̍t-bān khoo khì.",
  },
  {
    hanji: "伊的行為若親像強摃仝款。",
    tailo: "I ê hîng-uî ná-tshin-tshiūnn kiông-kòng kāng-khuán.",
  },
  {
    hanji: "你按呢講會得罪足濟人。",
    tailo: "Lí án-ne kóng ē tik-tsuē tsiok tsē lâng.",
  },
  {
    hanji: "人講拜菜頭是欲求一个好彩頭。",
    tailo: "Lâng kóng pài tshài-thâu sī beh kiû tsi̍t ê hó-tshái-thâu.",
  },
  {
    hanji: "伊從舊年到今攏無頭路。",
    tailo: "I tsîng kū-nî kàu-tann lóng bô thâu-lōo.",
  },
  {
    hanji: "這件代誌你去共𪜶小挲一下。",
    tailo: "Tsit kiānn tāi-tsì lí khì kā in sió so--tsi̍t-ē.",
  },
  {
    hanji: "伊有夠惜皮，一空仔囝爾爾就哀甲大細聲。",
    tailo:
      "I ū-kàu sioh-phuê, tsi̍t-khang-á-kiánn niā-niā tō ai kah tuā-sè siann.",
  },
  {
    hanji: "這份公文愛麻煩你徛名。",
    tailo: "Tsit hūn kong-bûn ài mâ-huân lí khiā-miâ.",
  },
  {
    hanji: "阿足仔誠惜囝，連小可代誌嘛毋甘予𪜶囝做。",
    tailo:
      "A-tsiok--á tsiânn sioh-kiánn, liân sió-khuá tāi-tsì mā m̄-kam hōo in kiánn tsò.",
  },
  {
    hanji: "坐遮好好，你莫閣徙位矣啦！",
    tailo: "Tsē tsia hó-hó, lí mài koh suá-uī--ah--lah!",
  },
  {
    hanji: "從到今我攏毋捌看過天頂落雪。",
    tailo: "Tsîng-kàu-tann guá lóng m̄ bat khuànn-kuè thinn-tíng lo̍h-seh.",
  },
  {
    hanji: "遮久矣都還袂出來，規氣捨施你。",
    tailo: "Tsiah kú--ah to hîng bē tshut--lâi, kui-khì siá-sì--lí.",
  },
  {
    hanji: "伊真惜面皮，無愛予人講閒仔話。",
    tailo: "I tsin sioh bīn-phuê, bô ài hōo lâng kóng îng-á-uē.",
  },
  {
    hanji: "阮這間厝是欲稅人做徛家的。",
    tailo: "Guán tsit king tshù sī beh suè lâng tsò khiā-ke--ê.",
  },
  {
    hanji: "遮的花栽欲徙栽去公園內面。",
    tailo: "Tsia-ê hue-tsai beh suá-tsai khì kong-hn̂g lāi-bīn.",
  },
  {
    hanji: "做人愛守本份，才會當佇社會上佮人徛起。",
    tailo:
      "Tsò-lâng ài siú pún-hūn, tsiah ē-tàng tī siā-huē-siōng kah lâng khiā-khí.",
  },
  {
    hanji: "伊哪會變做悾悾，到底是發生啥物代誌？",
    tailo:
      "I ná ē piàn-tsò khong-khong, tàu-té sī huat-sing siánn-mih tāi-tsì?",
  },
  {
    hanji: "這種無情理的話，干焦你才講會出來。",
    tailo:
      "Tsit tsióng bô tsîng-lí ê uē, kan-na lí tsiah kóng ē tshut--lâi.",
  },
  {
    hanji: "攏是伊佇遐咧挲圓捏扁。",
    tailo: "Lóng sī i tī hia teh so-înn tēnn-pínn.",
  },
  {
    hanji: "伊已經拜託董的共代誌挲圓矣。",
    tailo: "I í-king pài-thok táng--ê kā tāi-tsì so-înn--ah.",
  },
  {
    hanji: "王議員去予人挲圓仔湯才無閣參選。",
    tailo:
      "Ông gī-uân khì hōo lâng so-înn-á-thng tsiah bô koh tsham-suán.",
  },
  {
    hanji: "替伊買的物件若無提錢來，就徛算是送伊的。",
    tailo:
      "Thè i bé ê mi̍h-kiānn nā bô the̍h tsînn lâi, tō khiā-sǹg sī sàng--i--ê.",
  },
  {
    hanji: "徛算講伊較毋捌代誌，你小讓伊一下。",
    tailo: "Khiā-sǹg-kóng i khah m̄ bat-tāi-tsì, lí sió niū--i--tsi̍t-ē.",
  },
  {
    hanji: "遮的兵仔逐工攏愛徛衛兵。",
    tailo: "Tsia-ê ping-á ta̍k-kang lóng ài khiā-uē-ping.",
  },
  {
    hanji: "彼箍毋成囝又閣來查某宿舍門口徛衛兵矣。",
    tailo:
      "Hit khoo m̄-tsiânn-kiánn iū-koh lâi tsa-bóo sok-sià mn̂g-kháu khiā-uē-ping--ah.",
  },
  {
    hanji: "伊真歹睏癖，若徙鋪就睏袂去。",
    tailo: "I tsin pháinn khùn-phiah, nā suá-phoo tō khùn bē khì.",
  },
  {
    hanji: "伊的成績佇阮彼年級攏是徛頭的。",
    tailo: "I ê sîng-tsik tī guán hit nî-kip lóng sī khiā-thâu--ê.",
  },
  {
    hanji: "伊這款悾顛的情形已經半冬矣。",
    tailo: "I tsit khuán khong-tian ê tsîng-hîng í-king puànn tang--ah.",
  },
  {
    hanji: "棉被先捲起來才收入去袋仔內。",
    tailo: "Mî-phuē sing kńg--khí-lâi tsiah siu ji̍p-khì tē-á-lāi.",
  },
  {
    hanji: "出力對大腿共伊捻落去。",
    tailo: "Tshut-la̍t tuì tuā-thuí kā i liàm--lo̍h-khì.",
  },
  {
    hanji: "我想欲捻一塊粿來食看覓。",
    tailo: "Guá siūnn-beh liàm tsi̍t tè kué lâi tsia̍h khuànn-māi.",
  },
  {
    hanji: "我都猶未食半喙咧，你就捽了了矣！",
    tailo:
      "Guá to iáu-buē tsia̍h puànn tshuì--leh, lí tō sut-liáu-liáu--ah!",
  },
  {
    hanji: "伊去予人捽甲流血流滴。",
    tailo: "I khì hōo lâng sut kah lâu-hueh-lâu-tih.",
  },
  {
    hanji: "伊共鼎蓋掀起來，看內面是啥物。",
    tailo: "I kā tiánn-kuà hian--khí-lâi, khuànn lāi-bīn sī siánn-mih.",
  },
  {
    hanji: "學英文愛定定掀字典，才會進步。",
    tailo: "O̍h Ing-bûn ài tiānn-tiānn hian jī-tián, tsiah ē tsìn-pōo.",
  },
  {
    hanji: "伊的底細予人掀出來矣。",
    tailo: "I ê té-sè hōo lâng hian--tshut-lâi--ah.",
  },
  {
    hanji: "椅仔排無好勢，看著真亂。",
    tailo: "Í-á pâi bô hó-sè, khuànn tio̍h  tsin luān.",
  },
  {
    hanji: "水路若窒起來，水就排袂出去矣。",
    tailo: "Tsuí-lōo nā that--khí-lâi, tsuí tō pâi bē tshut--khì--ah.",
  },
  {
    hanji: "錢愛共伊掜起來，無，伊會亂開。",
    tailo: "Tsînn ài kā i tau--khí-lâi, bô, i ē luān khai.",
  },
  {
    hanji: "伊予警察掜留佇警察局。",
    tailo: "I hōo kíng-tshat tau-liû tī kíng-tshat-kio̍k.",
  },
  {
    hanji: "昨昏做無了的，這馬接落去做。",
    tailo: "Tsa-hng tsò bô liáu--ê, tsit-má tsiap lo̍h-khì tsò.",
  },
  {
    hanji: "這是逐家的責任，毋通推來推去。",
    tailo: "Tse sī ta̍k-ke ê tsik-jīm, m̄-thang the lâi the khì.",
  },
  {
    hanji: "這味藥仔是推會行抑推袂行？",
    tailo: "Tsit bī io̍h-á sī thui ē kiânn ia̍h thui bē kiânn?",
  },
  {
    hanji: "去補習班推看會進步袂。",
    tailo: "Khì póo-si̍p-pan thui khuànn ē tsìn-pōo--bē.",
  },
  {
    hanji: "提草仔膏共烏青跡推推咧！",
    tailo: "The̍h tsháu-á-ko kā oo-tshenn jiah thui-thui--leh!",
  },
  {
    hanji: "干焦一袋爾爾，愛用掮的，袂使用擔的。",
    tailo:
      "Kan-na tsi̍t tē niā-niā, ài iōng khainn--ê, bē-sái iōng tann--ê.",
  },
  {
    hanji: "若毋是我救伊，伊早就無命矣。",
    tailo: "Nā m̄ sī guá kiù--i, i tsá tō bô-miā--ah.",
  },
  {
    hanji: "這粒山頭的地理已經敗去矣。",
    tailo: "Tsit lia̍p suann-thâu ê tē-lí í-king pāi--khì--ah.",
  },
  {
    hanji: "彼个了尾仔囝共祖公仔產攏敗了了矣。",
    tailo:
      "Hit ê liáu-bué-á-kiánn kā tsóo-kong-á-sán lóng pāi-liáu-liáu--ah.",
  },
  {
    hanji: "這我袂曉，請你教一下。",
    tailo: "Tse guá bē-hiáu, tshiánn lí kà--tsi̍t-ē.",
  },
  {
    hanji: "我的手袂接力，無法度提重的物件。",
    tailo: "Guá ê tshiú bē tsih-la̍t, bô-huat-tōo the̍h tāng ê mi̍h-kiānn.",
  },
  {
    hanji: "冬天食補，才會接力，身體會較勇健。",
    tailo:
      "Tang-thinn tsia̍h-póo, tsiah ē tsih-la̍t, sin-thé ē khah ióng-kiānn.",
  },
  {
    hanji: "先莫煩惱錢，救人較要緊。",
    tailo: "Sing mài huân-ló tsînn, kiù-lâng khah iàu-kín.",
  },
  {
    hanji: "伊辭職了後，這个工課就由我接手。",
    tailo: "I sî-tsit liáu-āu, tsit ê khang-khuè tō iû guá tsiap-tshiú.",
  },
  {
    hanji: "這件代誌我無接手，你莫問我。",
    tailo: "Tsit kiānn tāi-tsì guá bô tsiap-tshiú, lí mài mn̄g--guá.",
  },
  {
    hanji: "你按呢做會去予人掠包。",
    tailo: "Lí án-ne tsò ē khì hōo lâng lia̍h-pau.",
  },
  {
    hanji: "腹腸狹的人較會排斥別人。",
    tailo: "Pak-tn̂g e̍h ê lâng khah ē pâi-thik pa̍t-lâng.",
  },
  {
    hanji: "今仔日就是敗市，毋才會賣遮俗。",
    tailo: "Kin-á-ji̍t tō sī pāi-tshī, m̄-tsiah ē bē tsiah sio̍k.",
  },
  {
    hanji: "阮公司想欲採用較有經驗的人。",
    tailo: "Guán kong-si siūnn-beh tshái-iōng khah ū king-giām ê lâng.",
  },
  {
    hanji: "這个囡仔若無教示是袂乖的。",
    tailo: "Tsit ê gín-á nā bô kà-sī sī bē kuai--ê.",
  },
  {
    hanji: "伊對你捽目尾，我看是有好空的欲予你。",
    tailo:
      "I tuì lí sut-ba̍k-bué, guá khuànn sī ū hó-khang--ê beh hōo--lí.",
  },
  {
    hanji: "逐个佇遐排列，是為著欲買演唱會的門票。",
    tailo:
      "Ta̍k ê tī hia pâi-lia̍t, sī uī-tio̍h beh bé ián-tshiùnn-huē ê mn̂g-phiò.",
  },
  {
    hanji: "伊只不過是一个掛名的經理爾爾。",
    tailo: "I tsí-put-kò sī tsi̍t ê kuà-miâ ê king-lí niā-niā.",
  },
  {
    hanji: "這个活動愛靠你來推行。",
    tailo: "Tsit ê ua̍h-tāng ài khò lí lâi thui-hîng.",
  },
  {
    hanji: "蝦仔愛掠沙筋了後食著較無沙屑。",
    tailo: "Hê-á ài lia̍h-sua-kin liáu-āu tsia̍h tio̍h khah bô sua-sap.",
  },
  {
    hanji: "媽媽看著我的分數一定會掠狂。",
    tailo: "Má-mah khuànn-tio̍h guá ê hun-sòo it-tīng ē lia̍h-kông.",
  },
  {
    hanji: "伊隨來遮就火燒厝，真正是掃帚星。",
    tailo:
      "I suî lâi tsia tō hué-sio-tshù, tsin-tsiànn sī sàu-tshiú-tshenn.",
  },
  {
    hanji: "有的物件好趁，有的末趁，掠長補短生理猶會做得。",
    tailo:
      "Ū ê mi̍h-kiānn hó thàn, ū ê bua̍t-thàn, lia̍h-tn̂g-póo-té sing-lí iáu ē-tsò--tit.",
  },
  {
    hanji: "一陣囡仔佇遐咧掩咯雞。",
    tailo: "Tsi̍t tīn gín-á tī hia teh ng-ko̍k-ke.",
  },
  {
    hanji: "你敢做，就莫叫我替你掩崁。",
    tailo: "Lí kánn tsò, tō mài kiò guá thè lí am-khàm.",
  },
  {
    hanji: "幾若代人粒積袂堪得一个敗家。",
    tailo: "Kuí-nā tāi lâng lia̍p-tsik bē-kham-tit tsi̍t ê pāi-ke.",
  },
  {
    hanji: "較早的人定定用掃梳笒仔捽囡仔。",
    tailo: "Khah-tsá ê lâng tiānn-tiānn iōng sàu-se-gím-á sut gín-á.",
  },
  {
    hanji: "我掠做無人知影彼件代誌。",
    tailo: "Guá lia̍h-tsò bô lâng tsai-iánn hit kiānn tāi-tsì.",
  },
  {
    hanji: "彼个客戶就予你去接接。",
    tailo: "Hit ê kheh-hōo tō hōo lí khì tsih-tsiap.",
  },
  {
    hanji: "人客來矣，你毋緊去接接閣蹛遮坐。",
    tailo: "Lâng-kheh lâi--ah, lí m̄ kín khì tsih-tsiap koh tuà tsia tsē.",
  },
  {
    hanji: "伊做代誌不時都掩掩揜揜，毋知是咧做啥物歹代。",
    tailo:
      "I tsò tāi-tsì put-sî to ng-ng-iap-iap, m̄ tsai sī teh tsò siánn-mih pháinn-tāi.",
  },
  {
    hanji: "這个接喙黏無好勢，強欲裂開矣。",
    tailo: "Tsit ê tsiap-tshuì liâm bô hó-sè, kiōng-beh li̍h--khui--ah.",
  },
  {
    hanji: "伊愛共人接喙，接落去就講袂煞。",
    tailo: "I ài kā lâng tsiap-tshuì, tsiap--lo̍h-khì tō kóng bē suah.",
  },
  {
    hanji: "伊為著離緣的官司，去旅社掠猴。",
    tailo: "I uī-tio̍h lī-iân ê kuann-si, khì lí-siā lia̍h-kâu.",
  },
  {
    hanji: "伊講規晡，我嘛是掠無頭摠。",
    tailo: "I kóng kui-poo, guá mā sī lia̍h-bô-thâu-tsáng.",
  },
  {
    hanji: "恁等一下，我來去排隊買票。",
    tailo: "Lín tán--tsi̍t-ē, guá lâi-khì pâi-tuī bé phiò.",
  },
  {
    hanji: "你毋通掛意，我會趕緊轉來。",
    tailo: "Lí m̄-thang khuà-ì, guá ē kuánn-kín tńg--lâi.",
  },
  {
    hanji: "𪜶當咧冤家，你小共𪜶排解一下。",
    tailo: "In tng-teh uan-ke, lí sió kā in pâi-kái--tsi̍t-ē.",
  },
  {
    hanji: "伊堅持無欲做人的接跤的。",
    tailo: "I kian-tshî bô beh tsò lâng ê tsiap-kha--ê.",
  },
  {
    hanji: "連紲行幾若點鐘，我強欲接載袂牢矣。",
    tailo:
      "Liân-suà kiânn kuí-nā tiám-tsing, guá kiōng-beh tsih-tsài bē tiâu--ah.",
  },
  {
    hanji: "你明仔載去揣看有師傅會當來掠漏無？",
    tailo:
      "Lí bîn-á-tsài khì tshuē khuànn ū sai-hū ē-tàng lâi lia̍h-lāu--bô?",
  },
  {
    hanji: "無掖種欲哪會當向望收成。",
    tailo: "Bô iā-tsíng beh ná ē-tàng ǹg-bāng siu-sîng.",
  },
  {
    hanji: "因為高麗菜大豐收，高麗菜就按呢大敗價。",
    tailo:
      "In-uī ko-lê-tshài tuā hong-siu, ko-lê-tshài tsiū-án-ne tuā pāi-kè.",
  },
  {
    hanji: "先予𪜶兩个推撨好勢，咱才來決定紲落來欲按怎做。",
    tailo:
      "Sing hōo in nn̄g ê tshui-tshiâu hó-sè, lán tsiah lâi kuat-tīng suà--lo̍h-lâi beh án-tsuánn tsò.",
  },
  {
    hanji: "伊對窗仔門探頭出來看外口發生啥物代誌。",
    tailo:
      "I tuì thang-á-mn̂g thàm-thâu--tshut-lâi khuànn guā-kháu huat-sing siánn-mih tāi-tsì.",
  },
  {
    hanji: "人客來的時，愛探頭招呼，才有禮貌。",
    tailo: "Lâng-kheh lâi ê sî, ài thàm-thâu tsio-hoo, tsiah ū-lé-māu.",
  },
  {
    hanji: "我已經入院一禮拜矣，伊連探頭都無。",
    tailo: "Guá í-king ji̍p-īnn tsi̍t lé-pài--ah, i liân thàm-thâu to bô.",
  },
  {
    hanji: "予伊掠龍了後，規身軀攏誠爽快。",
    tailo: "Hōo i lia̍h-lîng liáu-āu, kui-sin-khu lóng tsiânn sóng-khuài.",
  },
  {
    hanji:
      "逐擺買彩券，我若簽這號，伊就開彼號，若簽彼號，就開這號。掠龜走鱉，攏毋捌著獎。",
    tailo:
      "Ta̍k-pái bé tshái-kuàn, guá nā tshiam tsit hō, i tō khui hit hō, nā tshiam hit hō, tō khui tsit hō. Lia̍h-ku-tsáu-pih, lóng m̄ bat tio̍h-tsióng.",
  },
  {
    hanji: "你共心內的掛礙講出來予逐家參考看覓。",
    tailo:
      "Lí kā sim-lāi ê khuà-gāi kóng tshut-lâi hōo ta̍k-ke tsham-khó khuànn-māi.",
  },
  {
    hanji: "我猶毋捌接觸過這種新產品。",
    tailo: "Guá iáu m̄ bat tsiap-tshiok-kuè tsit tsióng sin sán-phín.",
  },
  {
    hanji: "讀冊若無接續，就較會袂記得。",
    tailo: "Tha̍k-tsheh nā bô tsiap-sio̍k, tō khah ē bē-kì--tit.",
  },
  {
    hanji: "彼件代誌就留予你去探聽。",
    tailo: "Hit kiānn tāi-tsì tō lâu hōo lí khì thàm-thiann.",
  },
  {
    hanji: "你一个查某囡仔人，嘛留寡予人探聽。",
    tailo:
      "Lí tsi̍t ê tsa-bóo gín-á-lâng, mā lâu kuá hōo lâng thàm-thiann.",
  },
  {
    hanji: "彼堵壁斜去，強欲倒落去矣。",
    tailo: "Hit tóo piah tshiâ--khì, kiōng-beh tó--lo̍h-khì--ah.",
  },
  {
    hanji: "欲我，早就佮伊變面矣。",
    tailo: "Beh guá, tsá tō kah i pìnn-bīn--ah.",
  },
  {
    hanji: "逐家攏咧無閒，你坐佇遮涼。",
    tailo: "Ta̍k-ke lóng teh bô-îng, lí tsē tī tsia liâng.",
  },
  {
    hanji: "天氣遮熱，足想欲食涼水。",
    tailo: "Thinn-khì tsiah jua̍h, tsiok siūnn-beh tsia̍h liâng-tsuí.",
  },
  {
    hanji: "伊佇遐哭甲欲死欲活，是發生啥物代誌？",
    tailo:
      "I tī hia khàu kah beh-sí-beh-ua̍h, sī huat-sing siánn-mih tāi-tsì?",
  },
  {
    hanji: "是按怎這件代誌到這馬猶未條直？",
    tailo:
      "Sī-án-tsuánn tsit kiānn tāi-tsì kàu tsit-má iáu-buē tiâu-ti̍t?",
  },
  {
    hanji: "工課我家己做做咧較條直！",
    tailo: "Khang-khuè guá ka-kī tsò-tsò--leh khah tiâu-ti̍t!",
  },
  {
    hanji: "欲知金仔會起大價，我早就愛加買寡起來囥。",
    tailo:
      "Beh-tsai kim-á ē khí-tuā-kè, guá tsá tō ài ke bé kuá khí-lâi khǹg.",
  },
  {
    hanji: "彼款餅梢梢，老歲仔嘛食有法。",
    tailo: "Hit khuán piánn sau-sau, lāu-huè-á mā tsia̍h ū huat.",
  },
  {
    hanji: "伊做著涼勢涼勢，別人來做就無遐熟手！",
    tailo:
      "I tsò tio̍h liâng-sè-liâng-sè, pa̍t-lâng lâi tsò tō bô hiah si̍k-tshiú!",
  },
  {
    hanji: "這是我親手做的，做了毋是真好，請你毋通棄嫌。",
    tailo:
      "Tse sī guá tshin-tshiú tsò--ê, tsò liáu m̄ sī tsin hó, tshiánn lí m̄-thang khì-hiâm.",
  },
  {
    hanji: "欲暗仔外口較涼，若欲出門，愛加疊一領衫。",
    tailo:
      "Beh-àm-á guā-kháu khah liâng, nā beh tshut-mn̂g, ài ke tha̍h tsi̍t niá sann.",
  },
  {
    hanji: "我喝甲嚨喉強欲梢聲矣，伊猶是無咧共我信篤。",
    tailo:
      "Guá huah kah nâ-âu kiōng-beh sau-siann--ah, i iáu-sī bô teh kā guá sìn-táu.",
  },
  {
    hanji: "這塊碗較深，會使貯較濟湯。",
    tailo: "Tsit tè uánn khah tshim, ē-sái té khah tsē thng.",
  },
  {
    hanji: "這間厝傷淺，袂當做生理。",
    tailo: "Tsit king tshù siunn tshián, bē-tàng tsò-sing-lí.",
  },
  {
    hanji: "賣你五百我會了錢，你閣添五十我就賣你。",
    tailo:
      "Bē lí gōo-pah guá ē liáu-tsînn, lí koh thinn gōo-tsa̍p guá tō bē--lí.",
  },
  {
    hanji: "這張申請單你緊共提去添添咧。",
    tailo:
      "Tsit tiunn sin-tshíng-tuann lí kín kā the̍h-khì thinn-thinn--leh.",
  },
  {
    hanji: "你著愛看較清、認較明咧。",
    tailo: "Lí tio̍h-ài khuànn khah tshing, jīn khah bîng--leh.",
  },
  {
    hanji: "工課做了，心規个攏清起來。",
    tailo: "Khang-khuè tsò-liáu, sim kui-ê lóng tshing--khí-lâi.",
  },
  {
    hanji: "雨落遮爾大，我看會淹大水。",
    tailo: "Hōo lo̍h tsiah-nī tuā, guá khuànn ē im-tuā-tsuí.",
  },
  {
    hanji: "囡仔大漢了後，序大人就較清心。",
    tailo: "Gín-á tuā-hàn liáu-āu, sī-tuā-lâng tō khah tshing-sim.",
  },
  {
    hanji: "你最近看起來敢若較清心。",
    tailo: "Lí tsuè-kīn khuànn--khí-lâi kánn-ná khah tshing-sim.",
  },
  {
    hanji: "你若想欲清火，會使加啉一寡綠豆湯。",
    tailo:
      "Lí nā siūnn-beh tshing-hué, ē-sái ke lim tsi̍t-kuá li̍k-tāu-thng.",
  },
  {
    hanji: "你袂使穿淺拖仔去學校。",
    tailo: "Lí bē-sái tshīng tshián-thua-á khì ha̍k-hāu.",
  },
  {
    hanji: "伊便若去廟裡拜拜，攏會添油香。",
    tailo: "I piān-nā khì biō--lí pài-pài, lóng ē thiam-iû-hiunn.",
  },
  {
    hanji: "伊這間新厝看著真清幽。",
    tailo: "I tsit king sin tshù khuànn tio̍h tsin tshing-iu.",
  },
  {
    hanji: "來啊！燒淨香，點束柴，敲鐘擂鼓，迎接侍候。",
    tailo:
      "Lâi--ah! Sio tsīng-hiunn, tiám sok-tshâ, khau tsing luî kóo, gîng-tsiap sū-hāu.",
  },
  {
    hanji: "我的房間不時攏真清氣。",
    tailo: "Guá ê pâng-king put-sî lóng tsin tshing-khì.",
  },
  {
    hanji: "彼个查某囡仔看起來誠清氣相。",
    tailo: "Hit ê tsa-bóo gín-á khuànn--khí-lâi tsiânn tshing-khì-siùnn.",
  },
  {
    hanji: "阿英欲嫁矣，親情朋友攏包紅包共伊添粧。",
    tailo:
      "A-ing beh kè--ah, tshin-tsiânn pîng-iú lóng pau âng-pau kā i thiam-tsng.",
  },
  {
    hanji: "伊這站仔足清閒的，規日攏咧遊山玩水。",
    tailo:
      "I tsit-tsām-á tsiok tshing-îng--ê, kui ji̍t lóng teh iû-san-uán-suí.",
  },
  {
    hanji: "你先去添飯，連鞭湯捀出去就聽好食飯矣。",
    tailo:
      "Lí sing khì thinn-pn̄g, liâm-mi thng phâng--tshut-khì tō thìng-hó tsia̍h-pn̄g--ah.",
  },
  {
    hanji: "伊到今攏毋肯出面，淺想嘛知代誌一定是伊做的。",
    tailo:
      "I kàu-tann lóng m̄ khíng tshut-bīn, tshián-siūnn mā tsai tāi-tsì it-tīng sī i tsò--ê.",
  },
  {
    hanji: "人講做官若清廉，食飯著攪鹽。",
    tailo: "Lâng kóng tsò-kuann nā tshing-liâm, tsia̍h-pn̄g tio̍h kiáu iâm.",
  },
  {
    hanji: "替人傳話毋通添話，無，會惹是非。",
    tailo: "Thè lâng thuân-uē m̄-thang thinn-uē, bô, ē jiá sī-hui.",
  },
  {
    hanji: "欲過年矣，你聽好去清數矣。",
    tailo: "Beh kuè-nî--ah, lí thìng-hó khì tshing-siàu--ah.",
  },
  {
    hanji: "我遮閣有淡薄仔錢會當借你。",
    tailo: "Guá tsia koh ū tām-po̍h-á tsînn ē-tàng tsioh--lí.",
  },
  {
    hanji: "伊無細膩去摸著燒鼎，手去焐一搭。",
    tailo: "I bô-sè-jī khì bong-tio̍h sio tiánn, tshiú khì ù tsi̍t tah.",
  },
  {
    hanji: "這个學生愛特別共伊牽。",
    tailo: "Tsit ê ha̍k-sing ài ti̍k-pia̍t kā i khan.",
  },
  {
    hanji: "是啥人遮𠢕牽？講遮久。",
    tailo: "Sī siánn-lâng tsiah gâu khan? Kóng tsiah kú.",
  },
  {
    hanji: "你的腹肚哪會遐爾大圈？愛較捷運動咧！",
    tailo:
      "Lí ê pak-tóo ná ē hiah-nī tuā khian? Ài khah tsia̍p ūn-tōng--leh!",
  },
  {
    hanji: "雨落遮大，伊閣一直犁去。",
    tailo: "Hōo lo̍h tsiah tuā, i koh it-ti̍t lê--khì.",
  },
  {
    hanji: "跤手較猛咧，無會做袂赴。",
    tailo: "Kha-tshiú khah mé--leh, bô ē tsò bē-hù.",
  },
  {
    hanji: "日頭遮爾猛，天氣有夠熱。",
    tailo: "Ji̍t-thâu tsiah-nī mé, thinn-khì ū-kàu jua̍h.",
  },
  {
    hanji: "你身軀紮遐濟錢，毋通現出來予人看著。",
    tailo:
      "Lí sin-khu tsah hiah tsē tsînn, m̄-thang hiàn tshut-lâi hōo lâng khuànn--tio̍h.",
  },
  {
    hanji: "車現欲來矣，你才講無愛去。",
    tailo: "Tshia hiān beh lâi--ah, lí tsiah kóng bô ài khì.",
  },
  {
    hanji: "阮牽手透早就去菜市仔買菜矣。",
    tailo: "Guán khan-tshiú thàu-tsá tō khì tshài-tshī-á bé tshài--ah.",
  },
  {
    hanji: "彼兩个囡仔牽手行鬥陣，有夠古錐。",
    tailo: "Hit nn̄g ê gín-á khan-tshiú kiânn tàu-tīn, ū-kàu kóo-tsui.",
  },
  {
    hanji: "大人大種矣，閣按呢冤家相拍，實在足現世的。",
    tailo:
      "Tuā-lâng-tuā-tsíng--ah, koh án-ne uan-ke sio-phah, si̍t-tsāi tsiok hiān-sì--ê.",
  },
  {
    hanji: "伊昨暗騎車想欲表演特技，無拄好煞犁田。",
    tailo:
      "I tsa-àm khiâ-tshia siūnn-beh piáu-ián ti̍k-ki, bô-tú-hó suah lê-tshân.",
  },
  {
    hanji: "伊猶閣少年，向望你共伊牽成。",
    tailo: "I iáu-koh siàu-liân, ǹg-bāng lí kā i khan-sîng.",
  },
  {
    hanji: "現此時的人攏較會曉享受。",
    tailo: "Hiān-tshú-sî ê lâng lóng khah ē-hiáu hiáng-siū.",
  },
  {
    hanji: "𪜶兩个啉燒酒啉甲真爽快。",
    tailo: "In nn̄g ê lim sio-tsiú lim kah tsin sóng-khuài.",
  },
  {
    hanji: "天氣誠涼，予我感覺真爽快。",
    tailo: "Thinn-khì tsiânn liâng, hōo guá kám-kak tsin sóng-khuài.",
  },
  {
    hanji: "遐的代誌佮我無關係，莫牽拖做伙。",
    tailo: "Hia-ê tāi-tsì kah guá bô kuan-hē, mài khan-thua tsò-hué.",
  },
  {
    hanji: "代誌現拄現就是按呢，你欲閣諍啥物？",
    tailo:
      "Tāi-tsì hiān-tú-hiān tō sī án-ne, lí beh koh tsènn siánn-mih?",
  },
  {
    hanji: "這間店干焦接受現金的買賣。",
    tailo: "Tsit king tiàm kan-na tsiap-siū hiān-kim ê bé-bē.",
  },
  {
    hanji: "去港仔邊買現流仔，毋但鮮嘛加真俗。",
    tailo: "Khì káng-á-pinn bé hiān-lâu-á, m̄-nā tshinn mā ke tsin sio̍k.",
  },
  {
    hanji: "你莫看伊瘦，伊瘦罔瘦，猶閣誠有牽挽。",
    tailo:
      "Lí mài khuànn i sán, i sán bóng sán, iáu-koh tsiânn ū khan-bán.",
  },
  {
    hanji: "牽罟倚索分魚有人有份，大肚分雙份。",
    tailo: "Khan-koo uá soh pun hî ū lâng ū hūn, tuā-tōo pun siang hūn.",
  },
  {
    hanji: "這件代誌現現就是你做的，你閣諍無。",
    tailo:
      "Tsit kiānn tāi-tsì hiān-hiān tō sī lí tsò--ê, lí koh tsènn bô.",
  },
  {
    hanji: "你拄才講啥逐家聽現現，袂使閣反悔。",
    tailo:
      "Lí tú-tsiah kóng siánn ta̍k-ke thiann-hiān-hiān, bē-sái koh huán-hué.",
  },
  {
    hanji: "你莫看伊穿甲真奅，其實伊是一个牽猴仔。",
    tailo:
      "Lí mài khuànn i tshīng kah tsin phānn, kî-si̍t i sī tsi̍t ê khan-kâu-á.",
  },
  {
    hanji: "伊是做牽猴仔的，專門咧趁中人錢。",
    tailo: "I sī tsò khan-kâu-á--ê, tsuan-bûn teh thàn tiong-lâng tsînn.",
  },
  {
    hanji: "若毋是伊牽線，我佮阮某嘛袂熟似。",
    tailo: "Nā m̄ sī i khan-suànn, guá kah guán bóo mā bē si̍k-sāi.",
  },
  {
    hanji: "一切攏是伊咧牽線，佮別人無底代。",
    tailo: "It-tshè lóng sī i teh khan-suànn, kah pa̍t-lâng bô-tī-tāi.",
  },
  {
    hanji: "你下暗睏的時愛較猛醒咧。",
    tailo: "Lí e-àm khùn ê sî ài khah mé-tshénn--leh.",
  },
  {
    hanji: "這罐藥仔是理風寒的，你緊提去食。",
    tailo: "Tsit kuàn io̍h-á sī lí hong-hân--ê, lí kín the̍h-khì tsia̍h.",
  },
  {
    hanji: "種菜莫傷疏嘛莫傷密，才種會媠。",
    tailo:
      "Tsìng tshài mài siunn se mā mài siunn ba̍t, tsiah tsìng ē suí.",
  },
  {
    hanji: "你予我小眯一下，我才陪你去。",
    tailo: "Lí hōo guá sió bî--tsi̍t-ē, guá tsiah puê lí khì.",
  },
  {
    hanji: "你去共偷眯一下，看伊咧創啥 。",
    tailo: "Lí khì kā thau bî--tsi̍t-ē, khuànn i teh tshòng siannh.",
  },
  {
    hanji: "你一人對眾人敢諍會贏人？",
    tailo: "Lí tsi̍t lâng tuì tsìng-lâng kám tsènn ē iânn--lâng?",
  },
  {
    hanji: "這號問題簡簡單單，眾人捌的曷著你講。",
    tailo:
      "Tsit-lō būn-tê kán-kán-tan-tan, tsìng-lâng bat--ê a̍h-tio̍h lí kóng.",
  },
  {
    hanji: "彼件代誌我干焦略仔知爾爾。",
    tailo: "Hit kiānn tāi-tsì guá kan-na lio̍h-á tsai niā-niā.",
  },
  {
    hanji: "你是眵目是毋？粉鳥煞看做斑鴿。",
    tailo: "Lí sī tshuh-ba̍k sī--m̄? Hún-tsiáu suah khuànn-tsò pan-kah.",
  },
  {
    hanji: "伊眼光誠好，知影彼幅圖會起大價。",
    tailo: "I gán-kong tsiânn hó, tsai-iánn hit pak tôo ē khí-tuā-kè.",
  },
  {
    hanji: "眼前咱愛先解決錢的問題。",
    tailo: "Gán-tsiân lán ài sing kái-kuat tsînn ê būn-tê.",
  },
  {
    hanji: "日本點心甜粅粅，食濟會大箍。",
    tailo: "Ji̍t-pún tiám-sim tinn-but-but, tsia̍h tsē ē tuā-khoo.",
  },
  {
    hanji: "老師教課的內容你著愛理解才會用得。",
    tailo: "Lāu-su kà-khò ê luē-iông lí tio̍h-ài lí-kái tsiah ē-īng--tit.",
  },
  {
    hanji: "阮序大人攏是誠理解的人。",
    tailo: "Guán sī-tuā-lâng lóng sī tsiânn lí-kái ê lâng.",
  },
  {
    hanji: "𪜶兄弟仔的感情真疏遠，無像兄弟仔。",
    tailo:
      "In hiann-tī-á ê kám-tsîng tsin soo-uán, bô tshiūnn hiann-tī-á.",
  },
  {
    hanji: "你若感覺你受著無合理的對待，一定愛勇敢佮對方理論。",
    tailo:
      "Lí nā kám-kak lí siū-tio̍h bô ha̍p-lí ê tuì-thāi, it-tīng ài ióng-kám kah tuì-hong lí-lūn.",
  },
  {
    hanji: "公園內面的花草較疏櫳。",
    tailo: "Kong-hn̂g lāi-bīn ê hue-tsháu khah se-lang.",
  },
  {
    hanji: "用酒窒仔共這罐酒窒起來。",
    tailo: "Iōng tsiú-that-á kā tsit kuàn tsiú that--khí-lâi.",
  },
  {
    hanji: "這種𨑨迌物仔外面窒倒街，免驚無地買。",
    tailo:
      "Tsit tsióng tshit-thô-mih-á guā-bīn that-tó-ke, bián kiann bô-tè bé.",
  },
  {
    hanji: "清明的時陣阮兜攏會祭祖。",
    tailo: "Tshing-bîng ê sî-tsūn guán tau lóng ē tsè-tsóo.",
  },
  {
    hanji: "腹肚枵到地矣，看著啥物會食得的物件攏提來窒喙空。",
    tailo:
      "Pak-tóo-iau--kàu-tè--ah, khuànn-tio̍h siánn-mih ē-tsia̍h--tit ê mi̍h-kiānn lóng the̍h-lâi that-tshuì-khang.",
  },
  {
    hanji: "共粒𣁳起來，湯莫啉。",
    tailo: "Kā lia̍p khat--khí-lâi, thng mài lim.",
  },
  {
    hanji: "囡仔人講話毋通遐爾粗。",
    tailo: "Gín-á-lâng kóng-uē m̄-thang hiah-nī tshoo.",
  },
  {
    hanji: "欲落雨矣，出門愛紮雨傘。",
    tailo: "Beh lo̍h-hōo--ah, tshut-mn̂g ài tsah hōo-suànn.",
  },
  {
    hanji: "你先去食飯，賰的工課我紲落去做就好。",
    tailo:
      "Lí sing khì tsia̍h-pn̄g, tshun ê khang-khuè guá suà-lo̍h-khì tsò tō hó.",
  },
  {
    hanji: "這粗工毋是你這款幼秀的人會當做的。",
    tailo:
      "Tse tshoo-kang m̄ sī lí tsit khuán iù-siù ê lâng ē-tàng tsò--ê.",
  },
  {
    hanji: "到時陣愛麻煩你共我紹介予恁頭家。",
    tailo: "Kàu sî-tsūn ài mâ-huân lí kā guá siāu-kài hōo lín thâu-ke.",
  },
  {
    hanji: "你若欲出去，門紲手關起來。",
    tailo: "Lí nā beh tshut--khì, mn̂g suà-tshiú kuainn--khí-lâi.",
  },
  {
    hanji: "我請你買的物件是欲粗用的爾爾，免買傷好。",
    tailo:
      "Guá tshiánn lí bé ê mi̍h-kiānn sī beh tshoo-īng--ê niā-niā, bián bé siunn hó.",
  },
  {
    hanji: "你愛坐大位，我坐細位就好。",
    tailo: "Lí ài tsē tuā-uī, guá tsē sè-uī tō hó.",
  },
  {
    hanji: "這是粗俗物件毋值幾仙錢啦！",
    tailo: "Tse sī tshoo-sio̍k mi̍h-kiānn m̄-ta̍t kuí sián tsînn--lah!",
  },
  {
    hanji: "這種粗俗物仔，買來粗用就好。",
    tailo: "Tsit tsióng tshoo-sio̍k-mih-á, bé-lâi tshoo-īng tō hó.",
  },
  {
    hanji: "這馬粗重的工課攏用機械咧做。",
    tailo: "Tsit-má tshoo-tāng ê khang-khuè lóng īng ki-hāi teh tsò.",
  },
  {
    hanji: "紩衫雖罔是簡單的代誌，無學嘛是袂曉。",
    tailo:
      "Thīnn-sann sui-bóng sī kán-tan ê tāi-tsì, bô o̍h mā sī bē-hiáu.",
  },
  {
    hanji: "你買的柑仔粕粕無湯，足歹食。",
    tailo: "Lí bé ê kam-á phoh-phoh bô thng, tsiok pháinn-tsia̍h.",
  },
  {
    hanji: "伊人生做細粒子，毋過力頭閣真飽。",
    tailo: "I lâng senn-tsò sè-lia̍p-tsí, m̄-koh la̍t-thâu koh tsin pá.",
  },
  {
    hanji: "這鰇魚仔絲是愈食愈紲喙。",
    tailo: "Tse jiû-hî-á-si sī jú tsia̍h jú suà-tshuì.",
  },
  {
    hanji: "食鹹的了後，換食甜的紲喙尾。",
    tailo: "Tsia̍h kiâm--ê liáu-āu, uānn tsia̍h tinn--ê suà-tshuì-bué.",
  },
  {
    hanji: "攏是一寡粗菜便飯，你毋通棄嫌。",
    tailo: "Lóng sī tsi̍t-kuá tshoo-tshài piān-pn̄g, lí m̄-thang khì-hiâm.",
  },
  {
    hanji: "代誌已經按呢生矣，紲落去欲按怎咧？",
    tailo:
      "Tāi-tsì í-king án-ne-senn--ah, suà--lo̍h-khì beh án-tsuánn--leh?",
  },
  {
    hanji: "路邊擔仔食粗飽好，若欲講究愛去大飯店食。",
    tailo:
      "Lōo-pinn-tànn-á tsia̍h tshoo-pá hó, nā beh káng-kiù ài khì tuā-pn̄g-tiàm tsia̍h.",
  },
  {
    hanji: "咱對查某囡仔愛溫柔體貼，毋通傷粗魯。",
    tailo:
      "Lán tuì tsa-bóo gín-á ài un-jiû thé-thiap, m̄-thang siunn tshoo-lóo.",
  },
  {
    hanji: "今仔日這頓我請，愛食啥做你點，毋通細膩。",
    tailo:
      "Kin-á-ji̍t tsit tǹg guá tshiánn, ài tsia̍h siannh tsò lí tiám, m̄-thang sè-jī.",
  },
  {
    hanji: "講話愛較細聲咧，才袂吵著別人。",
    tailo: "Kóng-uē ài khah sè-siann--leh, tsiah bē tshá-tio̍h pa̍t-lâng.",
  },
  {
    hanji: "出力對伊的胸坎舂落去。",
    tailo: "Tshut-la̍t tuì i ê hing-khám tsing--lo̍h-khì.",
  },
  {
    hanji: "用別人的拳頭拇舂石獅。",
    tailo: "Iōng pa̍t-lâng ê kûn-thâu-bú tsing tsio̍h-sai.",
  },
  {
    hanji: "這台機車猶新新，真好脫手。",
    tailo: "Tsit tâi ki-tshia iáu sin-sin, tsin hó thuat-tshiú.",
  },
  {
    hanji: "昨昏下晡掠著的膨鼠去予伊脫走去！",
    tailo:
      "Tsa-hng ē-poo lia̍h--tio̍h ê phòng-tshí khì hōo i thuat-tsáu--khì!",
  },
  {
    hanji: "這擺的會議真重要，毋通閣脫箠矣。",
    tailo:
      "Tsit pái ê huē-gī tsin tiōng-iàu, m̄-thang koh thut-tshuê--ah.",
  },
  {
    hanji: "你是按怎逐擺攏會袂記得，實在有夠脫線。",
    tailo:
      "Lí sī-án-tsuánn ta̍k-pái lóng ē bē-kì--tit, si̍t-tsāi ū-kàu thuat-suànn.",
  },
  {
    hanji: "伊拍球傷出力，手骨煞脫輪。",
    tailo: "I phah-kiû siunn tshut-la̍t, tshiú-kut suah thu̍t-lûn.",
  },
  {
    hanji: "愛食糖仔閣貧惰洗喙，莫怪喙齒蛀幾若空。",
    tailo:
      "Ài tsia̍h thn̂g-á koh pîn-tuānn sé-tshuì, bo̍k-kuài tshuì-khí tsiù kuí-nā khang.",
  },
  {
    hanji: "你若不時欲做違法的代誌，早慢會予人㨑去接受處份。",
    tailo:
      "Lí nā put-sî beh tsò uî-huat ê tāi-tsì, tsá-bān ē hōo lâng tsang-khì tsiap-siū tshú-hūn.",
  },
  {
    hanji: "原來是欲佮查某囡仔去看電影，莫怪伊喙笑目笑。",
    tailo:
      "Guân-lâi sī beh kah tsa-bóo gín-á khì khuànn tiān-iánn, bo̍k-kuài i tshuì-tshiò-ba̍k-tshiò.",
  },
  {
    hanji: "莫非代誌是伊做的，無，伊哪會攏無出面？",
    tailo: "Bo̍k-hui tāi-tsì sī i tsò--ê, bô, i ná ē lóng bô tshut-bīn?",
  },
  {
    hanji: "麻煩你替我處理這件代誌。",
    tailo: "Mâ-huân lí thè guá tshú-lí tsit kiānn tāi-tsì.",
  },
  {
    hanji: "這件代誌你是欲按怎處置？",
    tailo: "Tsit kiānn tāi-tsì lí sī beh án-tsuánn tshú-tì?",
  },
  {
    hanji: "莫講大人，這个道理連囡仔都知影。",
    tailo: "Mài-kóng tuā-lâng, tsit ê tō-lí liân gín-á to tsai-iánn.",
  },
  {
    hanji: "食柴的白蟻、食冊的剪蟲仔、食米的蛀龜攏總叫做蛀蟲。",
    tailo:
      "Tsia̍h tshâ ê pe̍h-hiā, tsia̍h tsheh ê tsián-thâng-á, tsia̍h bí ê tsiù-ku lóng-tsóng kiò-tsò tsiù-thâng.",
  },
  {
    hanji: "伊會術人的錢，你愛細膩。",
    tailo: "I ē su̍t lâng ê tsînn, lí ài sè-jī.",
  },
  {
    hanji: "這種茶真甘，你啉看覓。",
    tailo: "Tsit tsióng tê tsin kam, lí lim khuànn-māi.",
  },
  {
    hanji: "江湖一點訣，講破毋值三仙錢。",
    tailo: "Kang-ôo tsi̍t tiám kuat, kóng-phuà m̄-ta̍t sann sián tsînn.",
  },
  {
    hanji: "莫來這套，我予你袂設得。",
    tailo: "Mài lâi tsit thò, guá hōo lí bē-siat--tit.",
  },
  {
    hanji: "聽著車禍的消息，伊規个人攏愣去。",
    tailo:
      "Thiann-tio̍h tshia-hō ê siau-sit, i kui-ê lâng lóng gāng--khì.",
  },
  {
    hanji: "第二次大戰死去的人有規千萬。",
    tailo: "Tē-jī tshù tāi-tsiàn sí--khì ê lâng ū kui-tshing-bān.",
  },
  {
    hanji: "伊規世人食苦，毋捌享受過。",
    tailo: "I kui-sì-lâng tsia̍h-khóo, m̄ bat hiáng-siū--kuè.",
  },
  {
    hanji: "伊走去覕佇庄跤，歸尾嘛是予債主揣著。",
    tailo:
      "I tsáu-khì bih tī tsng-kha, kui-bué mā sī  hōo tsè-tsú tshuē--tio̍h.",
  },
  {
    hanji: "你愛加減運動，無，歲頭濟的時，會規身軀無氣力通好振動。",
    tailo:
      "Lí ài ke-kiám ūn-tōng, bô, huè-thâu tsē ê sî,  ē kui-sin-khu bô khuì-la̍t thang-hó tín-tāng.",
  },
  {
    hanji: "阮老爸規定我暗時十點就愛轉去到厝裡。",
    tailo:
      "Guán lāu-pē kui-tīng guá àm-sî tsa̍p tiám tō ài tńg-khì kàu tshù--lí.",
  },
  {
    hanji: "我看代誌攏予伊做，按呢較規氣。",
    tailo: "Guá khuànn tāi-tsì lóng hōo i tsò, án-ne khah kui-khì.",
  },
  {
    hanji: "這欲賣毋成錢，規氣送人。",
    tailo: "Tse beh bē m̄-tsiânn-tsînn, kui-khì sàng--lâng.",
  },
  {
    hanji: "去人的公司上班，愛遵守人的規矩。",
    tailo: "Khì lâng ê kong-si siōng-pan, ài tsun-siú lâng ê kui-kí.",
  },
  {
    hanji: "這个囡仔做代誌誠規矩。",
    tailo: "Tsit ê gín-á tsò tāi-tsì tsiânn kui-kí.",
  },
  {
    hanji: "恁規陣人徛佇遐，是欲創啥？",
    tailo: "Lín kui-tīn lâng khiā tī hia, sī beh tshòng siannh?",
  },
  {
    hanji: "這間電影院的設備真周全。",
    tailo: "Tsit king tiān-iánn-īnn ê siat-pī tsin tsiu-tsuân.",
  },
  {
    hanji: "你無為家己想，嘛著為囡仔的未來設想！",
    tailo: "Lí bô uī ka-kī siūnn, mā tio̍h uī gín-á ê bī-lâi siat-sióng!",
  },
  {
    hanji: "你毋通閣放蕩矣，愛為家己的將來設想！",
    tailo:
      "Lí m̄-thang koh hòng-tōng--ah, ài uī ka-kī ê tsiong-lâi siat-sióng!",
  },
  {
    hanji: "逐擺聽伊講話，我攏會規腹火。",
    tailo: "Ta̍k-pái thiann i kóng-uē, guá lóng ē kui-pak-hué.",
  },
  {
    hanji: "規路攏是車，毋知欲窒甲當時。",
    tailo: "Kui-lōo lóng sī tshia, m̄ tsai beh that kah tang-sî.",
  },
  {
    hanji: "伊無閒咧做生理，毋知𪜶某咧設緣投。",
    tailo: "I bô-îng teh tsò-sing-lí, m̄ tsai in bóo teh siat-iân-tâu.",
  },
  {
    hanji: "伊頷頸掛一條真大條的金袚鍊。",
    tailo: "I ām-kún kuà tsi̍t tiâu tsin tuā tiâu ê kim phua̍h-liān.",
  },
  {
    hanji: "高麗菜先豉鹽才落去炒，食著加真脆。",
    tailo:
      "Ko-lê-tshài sing sīnn-iâm tsiah lo̍h-khì tshá, tsia̍h tio̍h ke tsin tshè.",
  },
  {
    hanji: "伊貪著人好額，才會去予人招。",
    tailo: "I tham-tio̍h lâng hó-gia̍h, tsiah ē khì hōo lâng tsio.",
  },
  {
    hanji: "伊傷貪，才會去予諞仙仔諞去。",
    tailo: "I siunn tham, tsiah ē khì hōo pián-sian-á pián--khì.",
  },
  {
    hanji: "霜風一直對門縫貫入來。",
    tailo: "Sng-hong it-ti̍t tuì mn̂g-phāng kǹg--ji̍p-lâi.",
  },
  {
    hanji: "連彼罐涼水總共是一百箍。",
    tailo: "Liân hit kuàn liâng-tsuí tsóng-kiōng sī tsi̍t-pah khoo.",
  },
  {
    hanji: "這个問題連老師傅都袂曉。",
    tailo: "Tsit ê būn-tê liân lāu sai-hū to bē-hiáu.",
  },
  {
    hanji: "連遮大條的新聞都毋知。",
    tailo: "Liân tsiah tuā tiâu ê sin-bûn to m̄ tsai.",
  },
  {
    hanji: "我今仔日足忝的！規身軀軟𩛩𩛩。",
    tailo: "Guá kin-á-ji̍t tsiok thiám--ê! Kui-sin-khu nńg-kauh-kauh.",
  },
  {
    hanji: "彼塊雞卵糕軟㽎㽎，誠好食！",
    tailo: "Hit tè ke-nn̄g-ko nńg-sìm-sìm, tsiânn hó-tsia̍h!",
  },
  {
    hanji: "我逐个攏看過矣，攏毋是你的。",
    tailo: "Guá ta̍k ê lóng khuànn--kuè--ah, lóng m̄ sī lí ê.",
  },
  {
    hanji: "阿仁透中晝毋食飯，咧趕穡頭。",
    tailo: "A-jîn thàu-tiong-tàu m̄ tsia̍h-pn̄g, teh kuánn sit-thâu.",
  },
  {
    hanji: "伊真軟心，你共拜託伊會共你鬥相共。",
    tailo: "I tsin nńg-sim, lí kā pài-thok i ē kā lí tàu-sann-kāng.",
  },
  {
    hanji: "伊穡頭真濟，透日攏咧趕工。",
    tailo: "I sit-thâu tsin tsē, thàu-ji̍t lóng teh kuánn-kang.",
  },
  {
    hanji: "是毋是會當逃過這擺的劫數，就愛看伊的造化囉！",
    tailo:
      "Sī m̄ sī ē-tàng tô-kuè tsit pái ê kiap-sòo, tō ài khuànn i ê tsō-huà--looh!",
  },
  {
    hanji: "規間厝舞甲亂操操，無，恁是咧造反是無？",
    tailo:
      "Kui king tshù bú kah luān-tshau-tshau, bô, lín sī teh tsō-huán sī--bô?",
  },
  {
    hanji: "冰的麥仔酒啉著透心涼。",
    tailo: "Ping ê be̍h-á-tsiú lim tio̍h thàu-sim-liâng.",
  },
  {
    hanji: "照顧囡仔是爸母的責任。",
    tailo: "Tsiàu-kòo gín-á sī pē-bú ê tsik-jīm.",
  },
  {
    hanji: "這爿的窗仔愛安通光的玻璃。",
    tailo: "Tsit pîng ê thang-á ài an thang-kng ê po-lê.",
  },
  {
    hanji: "伊逐年攏會出國去𨑨迌。",
    tailo: "I ta̍k-nî lóng ē tshut-kok khì tshit-thô.",
  },
  {
    hanji: "這間𥴊仔店的貨色誠齊全。",
    tailo: "Tsit king kám-á-tiàm ê huè-sik tsiânn tsê-tsuân.",
  },
  {
    hanji: "恁兩个這馬敢閣有咧通批？",
    tailo: "Lín nn̄g ê tsit-má kám koh ū teh thong-phue?",
  },
  {
    hanji: "伊實在真軟汫，予人講兩句仔就流目屎矣。",
    tailo:
      "I si̍t-tsāi tsin nńg-tsiánn, hōo lâng kóng--nn̄g-kù-á tō lâu ba̍k-sái--ah.",
  },
  {
    hanji: "伊真軟汫，走無一時仔久就哼哼呻。",
    tailo:
      "I tsin nńg-tsiánn, tsáu bô tsi̍t-sî-á-kú tō hainn-hainn-tshan.",
  },
  {
    hanji: "賰遮的貨底欲按怎處理？",
    tailo: "Tshun tsia-ê huè-té beh án-tsuánn tshú-lí?",
  },
  {
    hanji: "伊透雨走出去買牛奶予囡仔啉。",
    tailo: "I thàu-hōo tsáu tshut-khì bé gû-ling hōo gín-á lim.",
  },
  {
    hanji: "彼个查某囡仔足貪食的。",
    tailo: "Hit ê tsa-bóo gín-á tsiok tham-tsia̍h--ê.",
  },
  {
    hanji: "外面當咧透風，你莫閣出去矣。",
    tailo: "Guā-bīn tng-teh thàu-hong, lí mài koh tshut--khì--ah.",
  },
  {
    hanji: "我的房間真通風，暗時仔咧睏閣小可仔會寒。",
    tailo:
      "Guá ê pâng-king tsin thang-hong, àm-sî-á teh khùn koh sió-khuá-á ē kuânn.",
  },
  {
    hanji: "逐家攏是家己人，著愛互相照顧。",
    tailo: "Ta̍k-ke lóng sī ka-kī-lâng, tio̍h-ài hōo-siong tsiàu-kòo.",
  },
  {
    hanji: "我這站歇睏，免去上班。",
    tailo: "Guá tsit-tsām hioh-khùn, bián khì siōng-pan.",
  },
  {
    hanji: "我規身軀軟荍荍，攏無想欲振動。",
    tailo: "Guá kui-sin-khu nńg-siô-siô, lóng bô siūnn-beh tín-tāng.",
  },
  {
    hanji: "這馬的人攏罕得寫批矣。",
    tailo: "Tsit-má ê lâng lóng hán-tit siá phue--ah.",
  },
  {
    hanji: "伊連紲三擺攏考第一名。",
    tailo: "I liân-suà sann pái lóng khó tē-it miâ.",
  },
  {
    hanji: "伊毋是刁意故的，你莫閣共伊責備矣。",
    tailo: "I m̄ sī thiau-ì-kòo--ê, lí mài koh kā i tsik-pī--ah.",
  },
  {
    hanji: "我欲揣校長，勞煩你通報一下。",
    tailo: "Guá beh tshuē hāu-tiúnn, lô-huân lí thong-pò--tsi̍t-ē.",
  },
  {
    hanji: "做人若貧惰，一世人袂快活。",
    tailo: "Tsò-lâng nā pîn-tuānn, tsi̍t-sì-lâng bē khuìnn-ua̍h.",
  },
  {
    hanji: "彼个貧惰骨，日頭曝尻川矣閣毋起來。",
    tailo:
      "Hit ê pîn-tuānn-kut, ji̍t-thâu pha̍k kha-tshng--ah koh m̄ khí--lâi.",
  },
  {
    hanji: "伊是讓你，毋是驚你，你毋通軟塗深掘喔！",
    tailo:
      "I sī niū--lí, m̄ sī kiann--lí, lí m̄-thang nńg-thôo-tshim-ku̍t--ooh!",
  },
  {
    hanji: "你毋通佇遐空喙哺舌亂造話。",
    tailo: "Lí m̄-thang tī hia khang-tshuì-pōo-tsi̍h luān tsō-uē.",
  },
  {
    hanji: "叫甲彼箍軟跤蝦袂做代誌，有啥物路用？",
    tailo:
      "Kiò kah hit khoo nńg-kha-hê bē tsò tāi-tsì, ū siánn-mih lōo-īng?",
  },
  {
    hanji: "這過的風颱誠大，你愛提早預防。",
    tailo: "Tsit-kuè ê hong-thai tsiânn tuā, lí ài thê-tsá ī-hông.",
  },
  {
    hanji: "彼條路傷狹，轎車無法度通過。",
    tailo: "Hit tiâu lōo siunn e̍h, kiau-tshia bô-huat-tōo thong-kuè.",
  },
  {
    hanji: "這條法案已經佇立法院通過矣。",
    tailo: "Tsit tiâu huat-àn í-king tī Li̍p-huat-īnn thong-kuè--ah.",
  },
  {
    hanji: "種樹仔嘛是咧為人類造福。",
    tailo: "Tsìng tshiū-á mā sī teh uī jîn-luī tsō-hok.",
  },
  {
    hanji: "遮的弓蕉已經軟膏膏矣，毋緊食著愛擲掉！",
    tailo:
      "Tsia-ê king-tsio í-king nńg-kô-kô--ah, m̄ kín tsia̍h tio̍h-ài tàn-tiāu!",
  },
  {
    hanji: "毋知按怎我今仔日規身軀軟膏膏？",
    tailo: "M̄ tsai án-tsuánn guá kin-á-ji̍t kui-sin-khu nńg-kô-kô?",
  },
  {
    hanji: "伊退休了後生活誠逍遙。",
    tailo: "I thè-hiu liáu-āu sing-ua̍h tsiânn siau-iâu.",
  },
  {
    hanji: "伊逐擺攏欲佮人相諍，毋過無一擺諍贏。",
    tailo:
      "I ta̍k-pái lóng beh kah lâng sio-tsènn, m̄-koh bô tsi̍t pái tsènn iânn.",
  },
  {
    hanji: "你小等一下，連鞭就好矣。",
    tailo: "Lí sió-tán--tsi̍t-ē, liâm-mi tō hó--ah.",
  },
  {
    hanji: "伊是有翁的查某，你毋通貪戀伊的美色。",
    tailo: "I sī ū ang ê tsa-bóo, lí m̄-thang tham-luân i ê bí-sik.",
  },
  {
    hanji: "我都毋去矣，伊閣較無可能去。",
    tailo: "Guá to m̄ khì--ah, i koh-khah bô khó-lîng khì.",
  },
  {
    hanji: "你都欲走矣，莫管遮濟。",
    tailo: "Lí to beh tsáu--ah, mài kuán tsiah tsē.",
  },
  {
    hanji: "我較按怎解說伊都毋信。",
    tailo: "Guá khah án-tsuánn kái-sueh i to m̄ sìn.",
  },
  {
    hanji: "想都有咧想啦，欲做猶是真懶。",
    tailo: "Siūnn to ū teh siūnn--lah, beh tsò iáu-sī tsin lán.",
  },
  {
    hanji: "我都無咧戇閣，哪有可能遐簡單就予伊騙去。",
    tailo:
      "Guá to bô teh gōng koh, ná ū khó-lîng hiah kán-tan tō hōo i phiàn--khì.",
  },
  {
    hanji: "咱這勻的人攏較有讀冊，無像頂勻的人受教育的機會真少。",
    tailo:
      "Lán tsit ûn ê lâng lóng khah ū tha̍k-tsheh, bô tshiūnn tíng-ûn ê lâng siū kàu-io̍k ê ki-huē tsin tsió.",
  },
  {
    hanji: "若欲預防病毒，洗手著用雪文會加較有效。",
    tailo:
      "Nā beh ī-hông pēnn-to̍k, sé tshiú tio̍h iōng sap-bûn ē ke khah ū-hāu.",
  },
  {
    hanji: "這件代誌咱毋是頂日就講好矣？",
    tailo: "Tsit kiānn tāi-tsì lán m̄ sī tíng-ji̍t tō kóng-hó--ah?",
  },
  {
    hanji: "𪜶阿公頂月日拄才過身去。",
    tailo: "In a-kong tíng gue̍h-ji̍t tú-tsiah kuè-sin--khì.",
  },
  {
    hanji: "頂日仔𪜶規家伙仔有來我遮。",
    tailo: "Tíng-ji̍t-á in kui-ke-hué-á ū lâi guá tsia.",
  },
  {
    hanji: "伊一定是頂世人燒好香，才會娶著遮爾好的某。",
    tailo:
      "I it-tīng sī tíng-sì-lâng sio hó hiunn, tsiah ē tshuā-tio̍h tsiah-nī hó ê bóo.",
  },
  {
    hanji: "頂司管下司，鋤頭管畚箕。",
    tailo: "Tíng-si kuán ē-si, tî-thâu kuán pùn-ki.",
  },
  {
    hanji: "伊是佇昨昏頂半暝過身去的。",
    tailo: "I sī tī tsa-hng tíng-puànn-mê kuè-sin--khì--ê.",
  },
  {
    hanji: "我都合袂拄好，袂當參加這遍的同窗會。",
    tailo:
      "Guá too-ha̍p bē-tú-hó, bē-tàng tsham-ka tsit piàn ê tông-tshong-huē.",
  },
  {
    hanji: "細膩！頭前有陷坑，毋通跋落去。",
    tailo: "Sè-jī! Thâu-tsîng ū hām-khenn, m̄-thang pua̍h--lo̍h-khì.",
  },
  {
    hanji: "這个囡仔較閉思，你毋通傷歹，會去共伊嚇驚著。",
    tailo:
      "Tsit ê gín-á khah pì-sù, lí m̄-thang siunn pháinn, ē khì kā i heh-kiann--tio̍h.",
  },
  {
    hanji: "物件囥架仔頂面就好矣。",
    tailo: "Mi̍h-kiānn khǹg kè-á tíng-bīn tō hó--ah.",
  },
  {
    hanji: "頂面有交代，叫咱著愛好好仔處理這層代誌。",
    tailo:
      "Tíng-bīn ū kau-tài, kiò lán tio̍h-ài hó-hó-á tshú-lí tsit tsân tāi-tsì.",
  },
  {
    hanji: "伊這个人真歹心，竟然設計共人陷害。",
    tailo:
      "I tsit ê lâng tsin pháinn-sim, kìng-jiân siat-kè kā lâng hām-hāi.",
  },
  {
    hanji: "你是咧陷眠是無？無，哪會講彼號無影無跡的話。",
    tailo:
      "Lí sī teh hām-bîn sī--bô? Bô, ná ē kóng hit-lō bô-iánn-bô-tsiah ê uē.",
  },
  {
    hanji: "伊暗時仔攏睏袂好勢，定定睏甲一半就咧陷眠。",
    tailo:
      "I àm-sî-á lóng khùn bē hó-sè, tiānn-tiānn khùn kah tsi̍t-puànn tō teh hām-bîn.",
  },
  {
    hanji: "伊咧做代誌真頂真，絕對袂烏白舞！",
    tailo: "I teh tsò tāi-tsì tsin tíng-tsin, tsua̍t-tuì bē oo-pe̍h bú!",
  },
  {
    hanji: "𪜶頂晡就出去矣，暗時才會轉來。",
    tailo: "In tíng-poo tō tshut--khì--ah, àm-sî tsiah ē tńg--lâi.",
  },
  {
    hanji: "我看你只好揣人來頂替。",
    tailo: "Guá khuànn lí tsí-hó tshuē lâng lâi tíng-thè.",
  },
  {
    hanji: "頂港有名聲，下港上出名。",
    tailo: "Tíng-káng ū miâ-siann, ē-káng siōng tshut-miâ.",
  },
  {
    hanji: "這層代誌咱頂過已經講過矣！",
    tailo: "Tsit tsân tāi-tsì lán tíng-kuè í-king kóng--kuè--ah!",
  },
  {
    hanji: "親情間的好歹代誌你攏陪綴有著。",
    tailo: "Tshin-tsiânn kan ê hó-pháinn tāi-tsì lí lóng puê-tuè ū tio̍h.",
  },
  {
    hanji: "伊定定用媠查某囡仔做釣餌，來騙人的錢。",
    tailo:
      "I tiānn-tiānn iōng suí tsa-bóo gín-á tsò tiò-jī, lâi phiàn lâng ê tsînn.",
  },
  {
    hanji: "頂輩若講伊幾句仔，伊就應喙應舌。",
    tailo: "Tíng-puè nā kóng--i--kuí-kù-á, i tō ìn-tshuì-ìn-tsi̍h.",
  },
  {
    hanji: "阿明誠陰鴆，我定定攏毋知伊咧想啥。",
    tailo:
      "A-bîng tsiânn im-thim, guá tiānn-tiānn lóng m̄ tsai i teh siūnn siannh.",
  },
  {
    hanji: "恁毋通傷超過，頂頭咧講話矣。",
    tailo: "Lín m̄-thang siunn tshiau-kuè, tíng-thâu teh kóng-uē--ah.",
  },
  {
    hanji: "頂幫毋是已經修理好矣，哪會閣歹去？",
    tailo: "Tíng-pang m̄ sī í-king siu-lí hó--ah, ná ē koh pháinn--khì?",
  },
  {
    hanji: "坐野雞仔車雖然俗，毋過較無安全。",
    tailo: "Tsē iá-ke-á-tshia sui-jiân sio̍k, m̄-koh khah bô an-tsuân.",
  },
  {
    hanji: "酒囥下跤格，汽水囥頂懸格。",
    tailo: "Tsiú khǹg ē-kha keh, khì-tsuí khǹg tíng-kuân keh.",
  },
  {
    hanji: "鳥仔欲生湠後代才會作鳥仔岫。",
    tailo: "Tsiáu-á beh senn-thuànn āu-tāi tsiah ē tsoh tsiáu-á-siū.",
  },
  {
    hanji: "一副麻雀攏總有一百四十四張麻雀子仔。",
    tailo:
      "Tsi̍t hù muâ-tshiok lóng-tsóng ū tsi̍t-pah sì-tsa̍p-sì tiunn muâ-tshiok-jí-á.",
  },
  {
    hanji: "伊一直揣機會欲報鳥鼠仔冤。",
    tailo: "I it-ti̍t tshuē ki-huē beh pò-niáu-tshí-á-uan.",
  },
  {
    hanji: "物件新新，毋通創歹去。",
    tailo: "Mi̍h-kiānn sin-sin, m̄-thang tshòng-pháinn--khì.",
  },
  {
    hanji: "喂，你好，麻煩請阿珠聽電話。",
    tailo: "Ueh, lí hó, mâ-huân tshiánn A-tsu thiann tiān-uē.",
  },
  {
    hanji: "伊一直喃講欲搬去庄跤蹛。",
    tailo: "I it-ti̍t nauh kóng beh puann-khì tsng-kha tuà.",
  },
  {
    hanji: "伊佇內底，你共伊喊一下。",
    tailo: "I tī lāi-té, lí kā i hiàm--tsi̍t-ē.",
  },
  {
    hanji: "你去共彼隻鴨仔喊予伊走。",
    tailo: "Lí khì kā hit tsiah ah-á hiàm hōo i tsáu.",
  },
  {
    hanji: "我𬦰樓梯𬦰甲足喘的。",
    tailo: "Guá peh lâu-thui peh kah tsiok tshuán--ê.",
  },
  {
    hanji: "伊咧遏花，緊共喝予走。",
    tailo: "I teh at hue, kín kā huah hōo tsáu.",
  },
  {
    hanji: "這件代誌予你加真麻煩，勞力喔！",
    tailo: "Tsit kiānn tāi-tsì hōo lí ke tsin mâ-huân,  lóo-la̍t--ooh!",
  },
  {
    hanji: "食物仔到喙口才交落去。",
    tailo: "Tsia̍h mih-á kàu tshuì-kháu tsiah ka-la̍uh--khì.",
  },
  {
    hanji: "伊掀蓋的時去挵著喙下斗。",
    tailo: "I hian kuà ê sî khì lòng-tio̍h tshuì-ē-táu.",
  },
  {
    hanji: "伊頭拄仔一直咧喘大氣，若像足艱苦的！",
    tailo:
      "I thâu-tú-á it-ti̍t teh tshuán-tuā-khuì, ná-tshiūnn tsiok kan-khóo--ê!",
  },
  {
    hanji: "考了䆀，免佇遐喘大氣，趕緊用功，才有機會補救。",
    tailo:
      "Khó liáu bái, bián tī hia tshuán-tuā-khuì, kuánn-kín iōng-kong, tsiah ū ki-huē póo-kiù.",
  },
  {
    hanji: "這个囡仔真喙白，逐項都毋食。",
    tailo: "Tsit ê gín-á tsin tshuì-pe̍h, ta̍k hāng to m̄ tsia̍h.",
  },
  {
    hanji: "叫伊出錢若親像咧共伊割肉。",
    tailo: "Kiò i tshut tsînn ná-tshin-tshiūnn teh kā i kuah-bah.",
  },
  {
    hanji: "你愛較細膩咧，才袂予伊創空。",
    tailo: "Lí ài khah sè-jī--leh, tsiah bē hōo i tshòng-khang.",
  },
  {
    hanji: "𪜶兩个不時都咧盤喙花。",
    tailo: "In nn̄g ê put-sî to teh puânn tshuì-hue.",
  },
  {
    hanji: "樓跤有人咧喝咻，毋知是啥物代誌。",
    tailo: "Lâu-kha ū lâng teh huah-hiu, m̄ tsai sī siánn-mih tāi-tsì.",
  },
  {
    hanji: "彼桌的人客喝拳喝甲大細聲。",
    tailo: "Hit toh ê lâng-kheh huah-kûn huah kah tuā-sè-siann.",
  },
  {
    hanji: "人若袂喘氣就是欲轉去見公媽矣。",
    tailo: "Lâng nā bē tshuán-khuì tō sī beh tńg-khì kìnn kong-má--ah.",
  },
  {
    hanji: "今仔日無閒甲連喘氣的機會都無。",
    tailo: "Kin-á-ji̍t bô-îng kah liân tshuán-khuì ê ki-huē to bô.",
  },
  {
    hanji: "喙臭火氣大，愛去予先生看。",
    tailo: "Tshuì-tshàu hué-khì tuā, ài khì hōo sian-sinn khuànn.",
  },
  {
    hanji: "我家己來就好矣！毋敢勞動你。",
    tailo: "Guá ka-kī lâi tō hó--ah! M̄ kánn lô-tōng--lí.",
  },
  {
    hanji: "你愛好好仔拍拚，為將來創造基礎。",
    tailo: "Lí ài hó-hó-á phah-piànn, uī tsiong-lâi tshòng-tsō ki-tshóo.",
  },
  {
    hanji: "逐透早佇漁港攏有人咧喝魚仔。",
    tailo: "Ta̍k thàu-tsá tī hî-káng lóng ū lâng teh huah-hî-á.",
  },
  {
    hanji: "自昨暝到今伊攏一直啼啼哭哭。",
    tailo: "Tsū tsa-mê kàu-tann i lóng it-ti̍t thî-thî-khàu-khàu.",
  },
  {
    hanji: "你規工按呢踅踅唸，敢袂喙焦？",
    tailo: "Lí kui-kang án-ne se̍h-se̍h-liām, kám bē tshuì-ta?",
  },
  {
    hanji: "創業攏較辛苦，你著愛忍耐。",
    tailo: "Tshòng-gia̍p lóng khah sin-khóo, lí tio̍h-ài jím-nāi.",
  },
  {
    hanji: "伊話猶未講出喙，就已經喉滇目箍紅矣。",
    tailo:
      "I uē iáu-buē kóng tshut-tshuì, tō í-king âu-tīnn ba̍k-khoo âng--ah.",
  },
  {
    hanji: "真歹勢，我欲勞煩你替我走一逝。",
    tailo: "Tsin pháinn-sè, guá beh lô-huân lí thè guá tsáu--tsi̍t-tsuā.",
  },
  {
    hanji: "你是食啥食甲喙箍紅紅？",
    tailo: "Lí sī tsia̍h siannh tsia̍h kah tshuì-khoo âng-âng?",
  },
  {
    hanji: "這个物件我照割價賣你，無趁你的錢。",
    tailo:
      "Tsit ê mi̍h-kiānn guá tsiàu kuah-kè bē--lí, bô thàn lí ê tsînn.",
  },
  {
    hanji: "伊講話喑噁，我攏聽無。",
    tailo: "I kóng-uē ìnn-ònn, guá lóng thiann-bô.",
  },
  {
    hanji: "人攏做甲欲好矣，伊才來割稻仔尾。",
    tailo: "Lâng lóng tsò kah beh hó--ah, i tsiah lâi kuah-tiū-á-bué.",
  },
  {
    hanji: "創辦一間學校是誠無簡單的代誌。",
    tailo: "Tshòng-pān tsi̍t king ha̍k-hāu sī tsiânn bô kán-tan ê tāi-tsì.",
  },
  {
    hanji: "這件代誌我會去向校長報告。",
    tailo: "Tsit kiānn tāi-tsì guá ē khì hiòng hāu-tiúnn pò-kò.",
  },
  {
    hanji: "小人報冤三日，君子報冤三年。",
    tailo: "Siáu-jîn pò-uan sann ji̍t, kun-tsú pò-uan sann nî.",
  },
  {
    hanji: "人講伊是報馬仔，佇伊的面前講話愛較細膩咧。",
    tailo:
      "Lâng kóng i sī pò-bé-á, tī i ê bīn-tsîng kóng-uē ài khah sè-jī--leh.",
  },
  {
    hanji: "這遍的車票是拆單逝的。",
    tailo: "Tsit piàn ê tshia-phiò sī thiah tuann-tsuā--ê.",
  },
  {
    hanji: "這个物件已經報銷去矣。",
    tailo: "Tsit ê mi̍h-kiānn í-king pò-siau--khì--ah.",
  },
  {
    hanji: "風颱咧欲來矣，咧起報頭矣。",
    tailo: "Hong-thai teh-beh lâi--ah, teh khí pò-thâu--ah.",
  },
  {
    hanji: "二九暝愛圍爐，你著冗早轉來。",
    tailo: "Jī-káu-mê ài uî-lôo, lí tio̍h liōng-tsá tńg--lâi.",
  },
  {
    hanji: "豬來散，狗來富，貓來起大厝。",
    tailo: "Ti lâi sàn, káu lâi pù, niau lâi khí tuā-tshù.",
  },
  {
    hanji: "氣象報告講明仔載會比今仔日較寒。",
    tailo: "Khì-siōng pò-kò kóng bîn-á-tsài ē pí kin-á-ji̍t khah kuânn.",
  },
  {
    hanji: "一切攏就你的意思，按呢好無？",
    tailo: "It-tshè lóng tsiū lí ê ì-sù, án-ne hó--bô?",
  },
  {
    hanji: "就我來講，我並無贊成伊的做法。",
    tailo: "Tsiū guá lâi kóng, guá pīng bô tsàn-sîng i ê tsò-huat.",
  },
  {
    hanji: "閣過一个青紅燈，就會當看著𪜶兜。",
    tailo:
      "Koh kuè tsi̍t ê tshenn-âng-ting, tō ē-tàng khuànn-tio̍h in tau.",
  },
  {
    hanji: "你毋來，伊就無欲出面矣。",
    tailo: "Lí m̄ lâi, i tō bô beh tshut-bīn--ah.",
  },
  {
    hanji: "你三點鐘才做會好，伊半點鐘就做好矣。",
    tailo:
      "Lí sann tiám-tsing tsiah tsò ē hó, i puànn tiám-tsing tō tsò-hó--ah.",
  },
  {
    hanji: "閣來就是寒人矣，寒衫愛先準備予好。",
    tailo:
      "Koh lâi tō sī kuânn--lâng--ah, kuânn-sann ài sing tsún-pī hōo hó.",
  },
  {
    hanji: "恁是富戶，當然毋知散赤人生活的艱苦。",
    tailo:
      "Lín sī hù-hōo, tong-jiân m̄ tsai sàn-tshiah-lâng sing-ua̍h ê kan-khóo.",
  },
  {
    hanji: "伊就是阿爸定定提起的李先生。",
    tailo: "I tō sī a-pah tiānn-tiānn thê-khí ê Lí--sian-sinn.",
  },
  {
    hanji: "伊行無好勢，就按呢跋倒。",
    tailo: "I kiânn bô hó-sè, tsiū-án-ne pua̍h-tó.",
  },
  {
    hanji: "五月節過了，寒衫就會當收起來矣。",
    tailo:
      "Gōo-gue̍h-tseh kuè-liáu, kuânn-sann tō ē-tàng siu--khí-lâi--ah.",
  },
  {
    hanji: "做人的序細著愛尊重序大人。",
    tailo: "Tsò lâng ê sī-sè tio̍h-ài tsun-tiōng sī-tuā-lâng.",
  },
  {
    hanji: "這擺的比賽贏了誠媠氣。",
    tailo: "Tsit pái ê pí-sài iânn liáu tsiânn suí-khuì.",
  },
  {
    hanji: "叫你加疊一領衫你就毋，這馬去寒著矣乎！",
    tailo:
      "Kiò lí ke tha̍h tsi̍t niá sann lí tō m̄, tsit-má khì kuânn--tio̍h--ah--honnh!",
  },
  {
    hanji: "伊事業成功，生活過甲真富裕。",
    tailo: "I sū-gia̍p sîng-kong, sing-ua̍h kuè kah tsin hù-jū.",
  },
  {
    hanji: "伊四季攏穿仝款衫，敢若毋知寒熱。",
    tailo:
      "I sù-kuì lóng tshīng kāng-khuán sann, kánn-ná m̄ tsai kuânn-jua̍h.",
  },
  {
    hanji: "伊妝甲媠噹噹，大概是欲去約會。",
    tailo: "I tsng kah suí-tang-tang, tāi-khài sī beh khì iok-huē.",
  },
  {
    hanji: "阮老爸昨昏下晡掠著幾若隻鳥鼠。",
    tailo: "Guán lāu-pē tsa-hng ē-poo lia̍h-tio̍h kuí-nā tsiah niáu-tshí.",
  },
  {
    hanji: "伊干焦會惡我，毋捌惡人。",
    tailo: "I kan-na ē ok--guá, m̄ bat ok--lâng.",
  },
  {
    hanji: "聽伊講遐的話，真正會予伊惱死。",
    tailo: "Thiann i kóng hia-ê uē, tsin-tsiànn ē hōo i lóo--sí.",
  },
  {
    hanji: "聽著飛機失事的消息，伊規个人愣去。",
    tailo:
      "Thiann-tio̍h hui-ki sit-sū ê siau-sit, i kui-ê lâng gāng--khì.",
  },
  {
    hanji: "伊欲共我拍，我用手共伊掰開。",
    tailo: "I beh kā guá phah, guá iōng tshiú kā i pué--khui.",
  },
  {
    hanji: "揀啊揀，揀著一个賣龍眼。",
    tailo: "Kíng--ah kíng, kíng-tio̍h tsi̍t ê bē lîng-gíng.",
  },
  {
    hanji: "欲買柚仔愛揀較有重的。",
    tailo: "Beh bé iū-á ài kíng khah ū tāng--ê.",
  },
  {
    hanji: "我干焦聽著擗一聲，火就著起來矣。",
    tailo:
      "Guá kan-na thiann-tio̍h phia̍k tsi̍t siann, hué tō to̍h--khí-lâi--ah.",
  },
  {
    hanji: "佮伊講無兩句，就共伊揍落去。",
    tailo: "Kah i kóng bô nn̄g kù, tō kā i bok--lo̍h-khì.",
  },
  {
    hanji: "這張圖真媠，我欲描一張起來。",
    tailo: "Tsit tiunn tôo tsin suí, guá beh biô tsi̍t tiunn khí--lâi.",
  },
  {
    hanji: "伊哪會蝹落去？緊共伊插起來。",
    tailo: "I ná ē un--lo̍h-khì? Kín kā i tshah--khí-lâi.",
  },
  {
    hanji: "伊定定講白賊，所以這馬攏無人欲插伊。",
    tailo:
      "I tiānn-tiānn kóng-pe̍h-tsha̍t, sóo-í tsit-má lóng bô lâng beh tshap--i.",
  },
  {
    hanji: "牌仔欲分進前愛先插插咧。",
    tailo: "Pâi-á beh pun tsìn-tsîng ài sing tshap-tshap--leh.",
  },
  {
    hanji: "別人的代誌咱莫插手啦！",
    tailo: "Pa̍t-lâng ê tāi-tsì lán mài tshap-tshiú--lah!",
  },
  {
    hanji: "阿母氣甲袂講話，干焦直直捶心肝。",
    tailo: "A-bú khì kah bē kóng-uē, kan-na ti̍t-ti̍t tuî-sim-kuann.",
  },
  {
    hanji: "這咱莫挃矣！較省佮人掰手面。",
    tailo: "Tse lán mài ti̍h--ah! Khah síng kah lâng pué-tshiú-bīn.",
  },
  {
    hanji: "伊退休了後就無插代誌矣。",
    tailo: "I thè-hiu liáu-āu tō bô tshap tāi-tsì--ah.",
  },
  {
    hanji: "你若欲告伊，愛提出證據。",
    tailo: "Lí nā beh kò--i,  ài thê-tshut tsìng-kì.",
  },
  {
    hanji: "彼个人誠奸巧，你著愛較小心提防咧。",
    tailo:
      "Hit ê lâng tsiânn kan-khiáu, lí tio̍h-ài khah sió-sim thê-hông--leh.",
  },
  {
    hanji: "所有的物件攏由我提供。",
    tailo: "Sóo-ū ê mi̍h-kiānn lóng iû guá thê-kiong.",
  },
  {
    hanji: "我會當有今仔日，攏愛感謝你的提拔。",
    tailo: "Guá ē-tàng ū kin-á-ji̍t, lóng ài kám-siā lí ê thê-pua̍t.",
  },
  {
    hanji: "我無佇遮上班，我是來插花仔的。",
    tailo: "Guá bô tī tsia siōng-pan, guá sī lâi tshah-hue-á--ê.",
  },
  {
    hanji: "若拄著掣流，毋通想欲蹽過。",
    tailo: "Nā tú-tio̍h tshuah-lâu, m̄-thang siūnn-beh liâu--kuè.",
  },
  {
    hanji: "伊足揀食，莫怪瘦卑巴。",
    tailo: "I tsiok kíng-tsia̍h, bo̍k-kuài sán-pi-pa.",
  },
  {
    hanji: "生囝就愛予囝惱氣一世人！",
    tailo: "Senn-kiánn tō ài hōo kiánn lóo-khì tsi̍t-sì-lâng!",
  },
  {
    hanji: "緊來鬥跤手，毋通插胳徛咧看。",
    tailo: "Kín lâi tàu-kha-tshiú, m̄-thang tshah-koh khiā leh khuànn.",
  },
  {
    hanji: "惡馬惡人騎，胭脂馬拄著關老爺。",
    tailo: "Ok bé ok-lâng khiâ, ian-tsi-bé tú-tio̍h Kuan-ló-iâ.",
  },
  {
    hanji: "大人咧講話，囡仔人莫插喙。",
    tailo: "Tuā-lâng teh kóng-uē, gín-á-lâng mài tshap-tshuì.",
  },
  {
    hanji: "我佮人講話，你莫佇邊仔咧插喙插舌。",
    tailo:
      "Guá kah lâng kóng-uē, lí mài tī pinn--á teh tshap-tshuì-tshap-tsi̍h.",
  },
  {
    hanji: "我來揀菜，揀好才予你洗。",
    tailo: "Guá lâi kíng-tshài, kíng-hó tsiah hōo lí sé.",
  },
  {
    hanji: "我猶未講煞，你先莫插話好無？",
    tailo: "Guá iáu-buē kóng-suah, lí sing mài tshah-uē hó--bô?",
  },
  {
    hanji: "伊描寫媽祖的故事誠傳神。",
    tailo: "I biô-siá Má-tsóo ê kòo-sū tsiânn thuân-sîn.",
  },
  {
    hanji: "伊開喙就惡確確，袂輸咱攏欠伊的錢咧。",
    tailo:
      "I khui-tshuì tō ok-khia̍k-khia̍k, bē-su lán lóng khiàm i ê tsînn--leh.",
  },
  {
    hanji: "阮拍算後禮拜欲去𪜶兜提親。",
    tailo: "Guán phah-sǹg āu lé-pài beh khì in tau thê-tshin.",
  },
  {
    hanji: "若無人提頭，這件代誌就無人欲做。",
    tailo: "Nā bô lâng thê-thâu, tsit kiānn tāi-tsì tō bô lâng beh tsò.",
  },
  {
    hanji: "遮人真插雜，你要緊的物件著較斟酌咧。",
    tailo:
      "Tsia lâng tsin tshap-tsa̍p, lí iàu-kín ê mi̍h-kiānn tio̍h khah tsim-tsiok--leh.",
  },
  {
    hanji: "伊提議逐家出錢來做好代。",
    tailo: "I thê-gī ta̍k-ke tshut tsînn lâi tsò hó-tāi.",
  },
  {
    hanji: "新買的物件若有問題，緊提去換。",
    tailo: "Sin bé ê mi̍h-kiānn nā ū būn-tê, kín the̍h-khì uānn.",
  },
  {
    hanji: "你定定偷揜錢予伊，莫當做我毋知。",
    tailo:
      "Lí tiānn-tiānn thau-iap tsînn hōo--i, mài tòng-tsò guá m̄ tsai.",
  },
  {
    hanji: "物件愛收予好，欲用的時才袂揣無。",
    tailo: "Mi̍h-kiānn ài siu hōo hó, beh īng ê sî tsiah bē tshuē-bô.",
  },
  {
    hanji: "伊轉去一定會予𪜶老爸揲甲真忝。",
    tailo: "I tńg--khì it-tīng ē hōo in lāu-pē tia̍p kah tsin thiám.",
  },
  {
    hanji: "伊揹一袋米欲去換一隻雞。",
    tailo: "I phāinn tsi̍t tē bí beh khì uānn tsi̍t tsiah ke.",
  },
  {
    hanji: "逃犯予警察對肩胛頭揹過。",
    tailo: "Tô-huān hōo kíng-tshat tuì king-kah-thâu phāinn--kuè.",
  },
  {
    hanji: "這个不孝囝共祖厝摒去還數。",
    tailo: "Tsit ê put-hàu kiánn kā tsóo-tshù piànn-khì hîng siàu.",
  },
  {
    hanji: "你誠敢呢！這款代誌你竟然做會出來！",
    tailo:
      "Lí tsiânn kánn--neh! Tsit khuán tāi-tsì lí kìng-jiân tsò ē tshut--lâi!",
  },
  {
    hanji: "臺北橋跤有誠濟等欲做散工的。",
    tailo: "Tâi-pak-kiô-kha ū tsiânn tsē tán beh tsò suánn-kang--ê.",
  },
  {
    hanji: "伊自細漢厝裡就真散凶，生活誠困苦。",
    tailo:
      "I tsū sè-hàn tshù--lí tō tsin sàn-hiong, sing-ua̍h tsiânn khùn-khóo.",
  },
  {
    hanji: "你莫想講散凶人就好欺負。",
    tailo: "Lí mài siūnn-kóng sàn-hiong-lâng tō hó khi-hū.",
  },
  {
    hanji: "這帖藥仔會用得敨中氣。",
    tailo: "Tsit thiap io̍h-á ē-īng-tit tháu tiong-khuì.",
  },
  {
    hanji: "你駛車已經駛五點鐘矣，敢免換手？",
    tailo:
      "Lí sái-tshia í-king sái gōo tiám-tsing--ah, kám bián uānn-tshiú?",
  },
  {
    hanji: "伊倒手真𠢕畫圖，換手就畫袂媠矣。",
    tailo: "I tò-tshiú tsin gâu uē-tôo, uānn-tshiú tō uē bē suí--ah.",
  },
  {
    hanji: "你這箍散仙，連家己的物件囥佇佗位都毋知。",
    tailo:
      "Lí tsit khoo suànn-sian, liân ka-kī ê mi̍h-kiānn khǹg tī tó-uī to m̄ tsai.",
  },
  {
    hanji: "趁大錢？莫向矣！有通摒本就愛偷笑矣。",
    tailo:
      "Thàn-tuā-tsînn? Mài ǹg--ah! Ū thang piànn-pún tō ài thau tshiò--ah.",
  },
  {
    hanji: "你真敢死，連老師你也敢罵！",
    tailo: "Lí tsin kánn-sí, liân lāu-su lí iā kánn mē!",
  },
  {
    hanji: "伊真敢死，竟然對二樓跳落來。",
    tailo: "I tsin kánn sí, kìng-jiân tuì jī lâu thiàu--lo̍h-lâi.",
  },
  {
    hanji: "日月潭的景色袂䆀，有閒咱來去行行咧。",
    tailo:
      "Ji̍t-gua̍t-thâm ê kíng-sik bē-bái, ū-îng lán lâi-khì kiânn-kiânn--leh.",
  },
  {
    hanji: "自從生理失敗，伊就若揜尾狗咧，攏無愛佮朋友來往。",
    tailo:
      "Tsū-tsiông sing-lí sit-pāi, i  tō ná iap-bué-káu--leh, lóng bô ài kah pîng-iú lâi-óng.",
  },
  {
    hanji: "遮爾重要的物件竟然無紮，你實在有夠散形。",
    tailo:
      "Tsiah-nī tiōng-iàu ê mi̍h-kiānn kìng-jiân bô tsah, lí si̍t-tsāi ū-kàu suànn-hîng.",
  },
  {
    hanji: "𪜶兜真散赤，攏毋捌看伊穿一軀新衫。",
    tailo:
      "In tau tsin sàn-tshiah, lóng m̄ bat khuànn i tshīng tsi̍t su sin sann.",
  },
  {
    hanji: "敢若是伊，閣敢若毋是。",
    tailo: "Kánn-ná sī i, koh kánn-ná m̄ sī.",
  },
  {
    hanji: "彼幾个散食人寒天時無寒衫通穿，實在足可憐的。",
    tailo:
      "Hit kuí ê sàn-tsia̍h-lâng kuânn-thinn-sî bô kuânn-sann thang tshīng, si̍t-tsāi tsiok khó-liân--ê.",
  },
  {
    hanji: "伊講遐的話是為著欲敨氣，你聽了準煞。",
    tailo:
      "I kóng hia-ê uē sī uī-tio̍h beh tháu-khuì, lí thiann-liáu tsún suah.",
  },
  {
    hanji: "這馬景氣真䆀，逐家攏強欲無頭路矣。",
    tailo:
      "Tsit-má kíng-khì tsin bái, ta̍k-ke lóng kiōng-beh bô thâu-lōo--ah.",
  },
  {
    hanji: "警察一下到，規陣筊徒就散陣矣。",
    tailo: "Kíng-tshat tsi̍t-ē kàu, kui-tīn kiáu-tôo tō suànn-tīn--ah.",
  },
  {
    hanji: "厝內當咧摒掃，恁毋通佇遐傱來傱去。",
    tailo:
      "Tshù-lāi tng-teh piànn-sàu, lín m̄-thang tī hia tsông lâi tsông khì.",
  },
  {
    hanji: "伊遐爾無閒，這款小事敢通去麻煩伊？",
    tailo:
      "I hiah-nī bô-îng, tsit khuán sió-sū kám thang khì mâ-huân--i?",
  },
  {
    hanji: "彼間店當咧摒貨底，咱下暗有閒做伙來去看覓。",
    tailo:
      "Hit king tiàm tng-teh piànn-huè-té, lán e-àm ū-îng tsò-hué lâi-khì khuànn-māi.",
  },
  {
    hanji: "這間厝的裝潢普普仔爾爾，無講偌媠。",
    tailo:
      "Tsit king tshù ê tsong-hông phóo-phóo--á niā-niā, bô kóng guā suí.",
  },
  {
    hanji: "換準是我，我袂放伊煞。",
    tailo: "Uānn-tsún sī guá, guá bē pàng i suah.",
  },
  {
    hanji: "佇臺灣，便利商店誠普遍，四界攏看會著。",
    tailo:
      "Tī Tâi-uân, piān-lī siong-tiàm tsiânn phóo-phiàn, sì-kè lóng khuànn ē tio̍h.",
  },
  {
    hanji: "車窗外口的景緻誠實袂䆀。",
    tailo: "Tshia-thang guā-kháu ê kíng-tì tsiânn-si̍t bē-bái.",
  },
  {
    hanji: "遮的柳丁會使提去散賣。",
    tailo: "Tsia-ê liú-ting ē-sái the̍h-khì suánn-bē.",
  },
  {
    hanji: "𥴊仔店的物件攏是散賣的較濟。",
    tailo: "Kám-á-tiàm ê mi̍h-kiānn lóng sī suánn-bē--ê khah tsē.",
  },
  {
    hanji: "伊今年畢業，這馬當咧揣頭路。",
    tailo: "I kin-nî pit-gia̍p, tsit-má tng-teh tshuē thâu-lōo.",
  },
  {
    hanji: "敢講你對我一點仔感情都無？",
    tailo: "Kám-kóng lí tuì guá tsi̍t-tiám-á kám-tsîng to bô?",
  },
  {
    hanji: "聽伊講話就知影伊真有智識。",
    tailo: "Thiann i kóng-uē tō tsai-iánn i tsin ū tì-sik.",
  },
  {
    hanji: "你敢有這期的新聞週刊？",
    tailo: "Lí kám ū tsit kî ê sin-bûn tsiu-khan?",
  },
  {
    hanji: "這本雜誌一個月出一期。",
    tailo: "Tsit pún tsa̍p-tsì tsi̍t kò gue̍h tshut tsi̍t kî.",
  },
  {
    hanji: "欲去𨑨迌愛紮衫仔褲去替換。",
    tailo: "Beh khì tshit-thô ài tsah sann-á-khòo khì thè-uānn.",
  },
  {
    hanji: "外口真寒，你欲出門愛加疊一領棉裘。",
    tailo:
      "Guā-kháu tsin kuânn, lí beh tshut-mn̂g ài ke tha̍h tsi̍t niá mî-hiû.",
  },
  {
    hanji: "較早的作田人落雨天就穿棕蓑去作穡。",
    tailo:
      "Khah-tsá ê tsoh-tshân-lâng lo̍h-hōo-thinn tō tshīng tsang-sui khì tsoh-sit.",
  },
  {
    hanji: "攑椅頭仔去外口坐較秋凊。",
    tailo: "Gia̍h í-thâu-á khì guā-kháu tsē khah tshiu-tshìn.",
  },
  {
    hanji: "囡仔的𨑨迌物百百款。",
    tailo: "Gín-á ê tshit-thô-mi̍h pah-pah-khuán.",
  },
  {
    hanji: "款厝內毋是干焦查某人才會當做的工課。",
    tailo:
      "Khuán tshù-lāi m̄ sī kan-na tsa-bóo-lâng tsiah ē-tàng tsò ê khang-khuè.",
  },
  {
    hanji: "飯傷濟，愛減一寡起來我才食會去。",
    tailo:
      "Pn̄g siunn tsē, ài kiám tsi̍t-kuá khí--lâi guá tsiah tsia̍h ē khì.",
  },
  {
    hanji: "伊猶未轉來，菜先減一寡起來留予伊。",
    tailo:
      "I iáu-buē tńg--lâi, tshài sing kiám tsi̍t-kuá khí-lâi lâu hōo--i.",
  },
  {
    hanji: "伊真殘忍，不時拍貓、拍狗。",
    tailo: "I tsin tsân-jím, put-sî phah niau,  phah káu.",
  },
  {
    hanji: "大家官來，你愛好好仔款待。",
    tailo: "Ta-ke-kuann lâi, lí ài hó-hó-á khuán-thāi.",
  },
  {
    hanji: "最近手頭有較絚，逐家用錢著愛較減省咧。",
    tailo:
      "Tsuè-kīn tshiú-thâu ū khah ân, ta̍k-ke iōng tsînn tio̍h-ài khah kiám-síng--leh.",
  },
  {
    hanji: "你遮大漢，欺負細漢的敢有𠢕？",
    tailo: "Lí tsiah tuā-hàn, khi-hū sè-hàn--ê kám ū gâu?",
  },
  {
    hanji: "佇淡水會使坐渡船去八里。",
    tailo: "Tī Tām-tsuí ē-sái tsē tōo-tsûn khì Pat-lí.",
  },
  {
    hanji: "伊款勸逐家毒品千萬毋通沐。",
    tailo: "I khuán-khǹg ta̍k-ke to̍k-phín tshian-bān m̄-thang bak.",
  },
  {
    hanji: "伊一个人感冒，湠甲規家伙仔攏著。",
    tailo: "I tsi̍t ê lâng kám-mōo, thuànn kah kui-ke-hué-á lóng tio̍h.",
  },
  {
    hanji: "流行感冒已經湠開矣，恁逐家愛預防。",
    tailo:
      "Liû-hîng kám-mōo í-king thuànn--khui--ah, lín ta̍k-ke ài ī-hông.",
  },
  {
    hanji: "這種木瓜品質真好，你提一寡仔木瓜子去湠種。",
    tailo:
      "Tsit tsióng bo̍k-kue phín-tsit tsin hó, lí the̍h tsi̍t-kuá-á bo̍k-kue-tsí khì thuànn-tsíng.",
  },
  {
    hanji: "後日老師欲共逐家測驗。",
    tailo: "Āu--ji̍t lāu-su beh kā ta̍k-ke tshik-giām.",
  },
  {
    hanji: "昨昏食賰的赤鯮若欲食愛落鼎閣焙一下。",
    tailo:
      "Tsa-hng tsia̍h tshun ê tshiah-tsang nā beh tsia̍h ài lo̍h tiánn koh puē--tsi̍t-ē.",
  },
  {
    hanji: "你無愛食麵，無咱來去食炒飯。",
    tailo: "Lí bô ài tsia̍h mī, bô lán lâi-khì tsia̍h tshá-pn̄g.",
  },
  {
    hanji: "恁彼个同事無，姓張的。",
    tailo: "Lín hit ê tông-sū bô, sènn Tiunn--ê.",
  },
  {
    hanji: "佇巷仔口無，彼間𥴊仔店。",
    tailo: "Tī hāng-á-kháu bô, hit king kám-á-tiàm.",
  },
  {
    hanji: "這个牌子的產品真有信用。",
    tailo: "Tsit ê pâi-tsú ê sán-phín tsin ū sìn-iōng.",
  },
  {
    hanji: "這个囡仔敢若猴山仔，真無定著。",
    tailo: "Tsit ê gín-á kánn-ná kâu-san--á, tsin bô-tiānn-tio̍h.",
  },
  {
    hanji: "佮序大人講話袂使無大無細。",
    tailo: "Kah sī-tuā-lâng kóng-uē bē-sái bô-tuā-bô-sè.",
  },
  {
    hanji: "伊當咧痟電動，叫伊讀冊，伊也無心情。",
    tailo:
      "I tng-teh siáu tiān-tōng, kiò i tha̍k-tsheh, i iā bô-sim-tsîng.",
  },
  {
    hanji: "這个大善人去予人冤枉，實在無天理！",
    tailo:
      "Tsit ê tuā siān-jîn khì hōo lâng uan-óng, si̍t-tsāi bô thinn-lí!",
  },
  {
    hanji: "伊直直共我招，猶毋過我無想欲去。",
    tailo: "I ti̍t-ti̍t kā guá tsio, iáu-m̄-koh guá bô siūnn-beh khì.",
  },
  {
    hanji: "這兩个物件無仝啦！愛斟酌看才看會出來。",
    tailo:
      "Tsit nn̄g ê mi̍h-kiānn bô kāng--lah! Ài tsim-tsiok khuànn tsiah khuànn ē tshut--lâi.",
  },
  {
    hanji: "無代無誌你是按怎會去惹伊？",
    tailo: "Bô-tāi-bô-tsì lí sī-án-tsuánn ē khì jiá--i?",
  },
  {
    hanji: "一支喙啾啾叫，時到無半步。",
    tailo: "Tsi̍t ki tshuì tshiùnn-tshiùnn-kiò, sî kàu bô-puànn-pōo.",
  },
  {
    hanji: "講欲提一寡舊衫予我，到今閣無半絲。",
    tailo:
      "Kóng beh the̍h tsi̍t-kuá kū sann hōo--guá, kàu-tann koh bô-puànn-si.",
  },
  {
    hanji: "少年的時放蕩愛𨑨迌，老來無半項。",
    tailo:
      "Siàu-liân ê sî hòng-tōng ài tshit-thô, lāu--lâi bô-puànn-hāng.",
  },
  {
    hanji: "伊是𠢕講爾爾，正經叫伊做是無半撇。",
    tailo:
      "I sī gâu kóng niā-niā, tsìng-king kiò i tsò sī bô-puànn-phiat.",
  },
  {
    hanji: "了錢無打緊，閣會害著別人。",
    tailo: "Liáu-tsînn--bô-tánn-kín, koh ē hāi-tio̍h pa̍t-lâng.",
  },
  {
    hanji: "想袂到你這个猴囡仔閣有兩步七仔！",
    tailo: "Siūnn-bē-kàu lí tsit ê kâu-gín-á koh ū--nn̄g-pōo-tshit-á!",
  },
  {
    hanji: "這條巷仔是無尾巷，你車毋通駛入去。",
    tailo:
      "Tsit tiâu hāng-á sī bô-bué-hāng, lí tshia m̄-thang sái--ji̍p-khì.",
  },
  {
    hanji: "這擺的代誌我嘛無步矣。",
    tailo: "Tsit pái ê tāi-tsì guá mā bô-pōo--ah.",
  },
  {
    hanji: "這款代誌你曷做會出來？真正是無良心！",
    tailo:
      "Tsit khuán tāi-tsì lí a̍h tsò ē tshut--lâi? Tsin-tsiànn sī bô-liông-sim!",
  },
  {
    hanji: "彼款人無事使矣，你莫向望伊會有出脫。",
    tailo:
      "Hit khuán lâng bô-sū-sái--ah, lí mài ǹg-bāng i ē ū tshut-thuat.",
  },
  {
    hanji: "𪜶兩姊妹仔無依無倚，按呢毋是辦法。",
    tailo: "In nn̄g tsí-muē-á bô-i-bô-uá, án-ne m̄ sī pān-huat.",
  },
  {
    hanji: "去音樂館聽歌的滋味袂䆀。",
    tailo: "Khì im-ga̍k-kuán thiann kua ê tsu-bī bē-bái.",
  },
  {
    hanji: "無奈何，只好去揣阿伯鬥相共。",
    tailo: "Bô-ta-uâ, tsí-hó khì tshuē a-peh tàu-sann-kāng.",
  },
  {
    hanji: "無定著彼件代誌就是伊做的。",
    tailo: "Bô-tiānn-tio̍h hit kiānn tāi-tsì tō sī i tsò--ê.",
  },
  {
    hanji: "彼个囡仔足無定著，坐都坐袂牢。",
    tailo: "Hit ê gín-á tsiok bô-tiānn-tio̍h, tsē to tsē bē tiâu.",
  },
  {
    hanji: "伊偷走出去買枝仔冰，無拄好去予老師拄著。",
    tailo:
      "I thau tsáu tshut-khì bé ki-á-ping, bô-tú-hó khì hōo lāu-su tú--tio̍h.",
  },
  {
    hanji: "這个囡仔講嘛講袂聽，實在無法伊。",
    tailo: "Tsit ê gín-á kóng mā kóng bē thiann, si̍t-tsāi bô-huat--i.",
  },
  {
    hanji: "真歹勢，我無法度共你鬥相共。",
    tailo: "Tsin pháinn-sè, guá bô-huat-tōo kā lí tàu-sann-kāng.",
  },
  {
    hanji: "伊欲按呢做，我嘛無法度。",
    tailo: "I beh án-ne tsò, guá mā bô-huat-tōo.",
  },
  {
    hanji: "我今仔日無的確會加班。",
    tailo: "Guá kin-á-ji̍t bô-tik-khak ē ka-pan.",
  },
  {
    hanji: "囡仔愛先學爬，然後才學行。",
    tailo: "Gín-á ài sing o̍h pê, jiân-āu tsiah o̍h kiânn.",
  },
  {
    hanji: "幾若年無見面，你猶是佮以前仝款。",
    tailo: "Kuí-nā nî bô kìnn-bīn, lí iáu-sī kah í-tsîng kāng-khuán.",
  },
  {
    hanji: "無某無猴，穿衫破肩胛頭。",
    tailo: "Bô-bóo-bô-kâu, tshīng sann phuà king-kah-thâu.",
  },
  {
    hanji: "羊毛衫愛用焦洗的，才袂勼水。",
    tailo: "Iûnn-mn̂g-sann ài īng ta-sé--ê, tsiah bē kiu-tsuí.",
  },
  {
    hanji: "伊去予金光黨的焦洗去。",
    tailo: "I khì hōo kim-kong-tóng--ê ta-sé--khì.",
  },
  {
    hanji: "錢是伊欠的，佮我無相干。",
    tailo: "Tsînn sī i khiàm--ê, kah guá bô-siong-kan.",
  },
  {
    hanji: "連鞭就欲考試矣，閣按呢無要無緊。",
    tailo: "Liâm-mi tō beh khó-tshì--ah, koh án-ne bô-iàu-bô-kín.",
  },
  {
    hanji: "物件若好，較貴一點仔無要緊。",
    tailo: "Mi̍h-kiānn nā hó, khah kuì--tsi̍t-tiám-á bô iàu-kín.",
  },
  {
    hanji: "阮兜有時仔家己煮食，有時仔食外口。",
    tailo: "Guán tau ū-sî-á ka-kī tsú-tsia̍h, ū-sî-á tsia̍h-guā-kháu.",
  },
  {
    hanji: "這兩種麥仔酒我啉著無差。",
    tailo: "Tsit nn̄g tsióng be̍h-á-tsiú guá lim tio̍h bô-tsha.",
  },
  {
    hanji: "欲食飯抑食麵我攏無差。",
    tailo: "Beh tsia̍h pn̄g ia̍h tsia̍h mī guá lóng bô-tsha.",
  },
  {
    hanji: "伊送去病院進前，就無氣矣。",
    tailo: "I sàng-khì pēnn-īnn tsìn-tsîng, tō bô-khuì--ah.",
  },
  {
    hanji: "我走無十分鐘，就強欲無氣矣。",
    tailo: "Guá tsáu bô tsa̍p hun-tsing, tō kiōng-beh bô-khuì--ah.",
  },
  {
    hanji: "這站仔較無眠，歇睏日愛補眠。",
    tailo: "Tsit-tsām-á khah bô-bîn, hioh-khùn-ji̍t ài póo bîn.",
  },
  {
    hanji: "你才走無偌久，伊就來矣。",
    tailo: "Lí tsiah tsáu bô-guā-kú, i tō lâi--ah.",
  },
  {
    hanji: "你莫看我無夠重，我毋是好欺負的。",
    tailo: "Lí mài khuànn guá bô-kàu-tāng, guá m̄ sī hó khi-hū--ê.",
  },
  {
    hanji: "伊差一點仔就著獎矣，有夠無彩。",
    tailo: "I tsha tsi̍t-tiám-á tō tio̍h-tsióng--ah, ū-kàu bô-tshái.",
  },
  {
    hanji: "無彩你遐爾仔愛伊，結果伊猶是雙跤踏雙船。",
    tailo:
      "Bô-tshái lí hiah-nī-á ài--i, kiat-kó i iáu-sī siang kha ta̍h siang tsûn.",
  },
  {
    hanji: "買彼號物件都無路用，你莫閣無彩錢矣。",
    tailo:
      "Bé hit-lō mi̍h-kiānn to bô-lōo-īng, lí mài koh bô-tshái tsînn--ah.",
  },
  {
    hanji: "伊無張持喝一聲，逐家攏驚一趒。",
    tailo: "I bô-tiunn-tî huah tsi̍t siann, ta̍k-ke lóng kiann tsi̍t tiô.",
  },
  {
    hanji: "真歹勢，無張持共你挨著。",
    tailo: "Tsin pháinn-sè, bô-tiunn-tî kā lí e--tio̍h.",
  },
  {
    hanji: "你哪會遐無細膩，共碗挵破。",
    tailo: "Lí ná ē hiah bô-sè-jī, kā uánn lòng-phuà.",
  },
  {
    hanji: "伊彼个人真無量，攏毋肯共人鬥相共。",
    tailo:
      "I hit ê lâng tsin bô-liōng, lóng m̄ khíng kā lâng tàu-sann-kāng.",
  },
  {
    hanji: "伊的工課真濟，足無閒的。",
    tailo: "I ê khang-khuè tsin tsē, tsiok bô-îng--ê.",
  },
  {
    hanji: "伊是孤囝，煞猶未娶某就過身，𪜶兜就按呢無傳。",
    tailo:
      "I sī koo-kiánn, suah iáu-buē tshuā-bóo tō kuè-sin, in tau tsiū-án-ne bô-thn̂g.",
  },
  {
    hanji: "這張舊相片是我無意中揣著的。",
    tailo: "Tsit tiunn kū siòng-phìnn sī guá bô-ì-tiong tshuē--tio̍h-ê.",
  },
  {
    hanji: "你講這種話實在無意無思。",
    tailo: "Lí kóng tsit tsióng uē si̍t-tsāi bô-ì-bô-sù.",
  },
  {
    hanji: "這台機車無路用矣，愛報廢掉。",
    tailo: "Tsit tâi ki-tshia bô-lōo-īng--ah, ài pò-huì-tiāu.",
  },
  {
    hanji: "伊是一个無路用人，無一項代誌做會好勢。",
    tailo:
      "I sī tsi̍t ê bô-lōo-īng lâng, bô tsi̍t hāng tāi-tsì tsò ē hó-sè.",
  },
  {
    hanji: "已經害去矣，閣哭嘛無較縒。",
    tailo: "Í-king hāi--khì--ah, koh khàu mā bô-khah-tsua̍h.",
  },
  {
    hanji: "伊做工課做甲無暝無日，恐驚會拍歹身體。",
    tailo:
      "I tsò khang-khuè tsò kah bô-mê-bô-ji̍t, khióng-kiann ē phah-pháinn sin-thé.",
  },
  {
    hanji: "彼台冷氣攏袂涼，有開無開無精差。",
    tailo:
      "Hit tâi líng-khì lóng bē liâng, ū khui bô khui bô-tsing-tsha.",
  },
  {
    hanji: "昨暗走一下傷久，害我今仔日跤牚腿。",
    tailo:
      "Tsa-àm tsáu tsi̍t-ē siunn kú, hāi guá kin-á-ji̍t kha thènn-thuí.",
  },
  {
    hanji: "代誌到這个地步矣，你猶閣有啥物話通講？",
    tailo:
      "Tāi-tsì kàu tsit ê tē-pōo--ah, lí iáu-koh ū siánn-mih uē thang kóng?",
  },
  {
    hanji: "這層代誌是有影抑是無影？",
    tailo: "Tsit tsân tāi-tsì sī ū-iánn ia̍h-sī bô-iánn?",
  },
  {
    hanji: "無論你講啥，我攏袂答應。",
    tailo: "Bô-lūn lí kóng siannh, guá lóng bē tah-ìng.",
  },
  {
    hanji: "這件代誌毋免你牚頭，我家己就會當解決。",
    tailo:
      "Tsit kiānn tāi-tsì m̄-bián lí thènn-thâu, guá ka-kī tō ē-tàng kái-kuat.",
  },
  {
    hanji: "阿勇真無膽，天若烏就毋敢出門。",
    tailo: "A-ióng tsin bô-tánn, thinn nā oo tō m̄ kánn tshut-mn̂g.",
  },
  {
    hanji: "伊無聲無說行入來，害我驚一趒。",
    tailo: "I bô-siann-bô-sueh kiânn--ji̍p-lâi, hāi guá kiann tsi̍t tiô.",
  },
  {
    hanji: "伊棍仔攑咧無講無呾就撼來，佳哉我緊閃開！",
    tailo:
      "I kùn-á gia̍h--leh bô-kóng-bô-tànn tō hám--lâi, ka-tsài guá kín siám--khui!",
  },
  {
    hanji: "囡仔身軀洗好糝一屑仔痱仔粉較焦鬆。",
    tailo: "Gín-á sin-khu sé-hó sám tsi̍t-sut-á puì-á-hún khah ta-sang.",
  },
  {
    hanji: "做股票了幾萬箍仔，對伊來講無礙著。",
    tailo:
      "Tsò kóo-phiò liáu--kuí-bān-khoo-á, tuì i lâi kóng bô-gāi--tio̍h.",
  },
  {
    hanji: "我家己一个人足無議量，毋才去看電影。",
    tailo:
      "Guá ka-kī tsi̍t ê lâng tsiok bô-gī-niū, m̄-tsiah khì khuànn tiān-iánn.",
  },
  {
    hanji: "這碗麵無鹹無纖，有夠歹食。",
    tailo: "Tsit uánn mī bô-kiâm-bô-siam, ū-kàu pháinn-tsia̍h.",
  },
  {
    hanji: "你今仔日是按怎，哪會無攬無拈？",
    tailo: "Lí kin-á-ji̍t sī án-tsuánn, ná ē bô-lám-bô-ne?",
  },
  {
    hanji: "畫虎畫皮無畫骨，知人知面不知心。",
    tailo: "Uē hóo uē phuê bô uē kut, ti jîn ti bīn put ti sim.",
  },
  {
    hanji: "昨暗聽伊痚規暝，我實在真毋甘。",
    tailo: "Tsa-àm thiann i he kui mê, guá si̍t-tsāi tsin m̄-kam.",
  },
  {
    hanji: "你咧痟，我無欲綴你痟。",
    tailo: "Lí teh siáu, guá bô beh tuè lí siáu.",
  },
  {
    hanji: "伊性地若發，你就該死。",
    tailo: "I sìng-tē nā huat, lí tō kai-sí.",
  },
  {
    hanji: "佮你這个番仔講話真忝。",
    tailo: "Kah lí tsit ê huan-á kóng-uē tsin thiám.",
  },
  {
    hanji: "伊駛車進前有啉燒酒閣駛傷緊，才會發生車禍。",
    tailo:
      "I sái-tshia tsìn-tsîng ū lim sio-tsiú koh sái siunn kín, tsiah ē huat-sing tshia-hō.",
  },
  {
    hanji: "恁查某孫誠乖，家己一个坐佇遐畫尪仔，攏袂共你吵。",
    tailo:
      "Lín tsa-bóo-sun tsiânn kuai, ka-kī tsi̍t ê tsē tī hia uē-ang-á, lóng bē kā lí tshá.",
  },
  {
    hanji: "囡仔疕爾爾就生毛閣發角，我看你是皮咧癢的款。",
    tailo:
      "Gín-á-phí niā-niā tō senn-mn̂g koh huat-kak, guá khuànn lí sī phuê teh tsiūnn ê khuán.",
  },
  {
    hanji: "伊雄雄發性地，逐家攏予伊驚著。",
    tailo: "I hiông-hiông huat-sìng-tē, ta̍k-ke lóng hōo i kiann--tio̍h.",
  },
  {
    hanji: "伊若痟狗咧，磕袂著就罵人。",
    tailo: "I ná siáu-káu--leh, kha̍p-bē-tio̍h tō mē--lâng.",
  },
  {
    hanji: "聽著實驗失敗的消息，我感覺真痛苦。",
    tailo:
      "Thiann-tio̍h si̍t-giām sit-pāi ê siau-sit, guá kám-kak tsin thòng-khóo.",
  },
  {
    hanji: "你這个番婆！我講無提就是無提，你是欲諍到當時？",
    tailo:
      "Lí tsit ê huan-pô! Guá kóng bô the̍h tō sī bô the̍h, lí sī beh tsènn kàu tang-sî?",
  },
  {
    hanji: "無，你是咧畫符仔是無？",
    tailo: "Bô, lí sī teh uē-hû-á sī--bô?",
  },
  {
    hanji: "做人千萬毋通痟貪，才袂軁雞籠。",
    tailo: "Tsò-lâng tshian-bān m̄-thang siáu-tham, tsiah bē nǹg ke-lam.",
  },
  {
    hanji: "伊做人痟痟，真好鬥陣。",
    tailo: "I tsò-lâng siáu-siáu, tsin hó tàu-tīn.",
  },
  {
    hanji: "我人已經共你揣來矣，看你是欲按怎發落？",
    tailo:
      "Guá lâng í-king kā lí tshuē--lâi--ah, khuànn lí sī beh án-tsuánn hua̍t-lo̍h?",
  },
  {
    hanji: "厝內的代誌攏是伊咧發落。",
    tailo: "Tshù-lāi ê tāi-tsì lóng sī i teh hua̍t-lo̍h.",
  },
  {
    hanji: "你的代誌叫我出錢，你是咧講啥物痟話？",
    tailo:
      "Lí ê tāi-tsì kiò guá tshut tsînn, lí sī teh kóng siánn-mih siáu uē?",
  },
  {
    hanji: "阿明來臺北三年，這馬事業已經真發達矣。",
    tailo:
      "A-bîng lâi Tâi-pak sann nî, tsit-má sū-gia̍p í-king tsin huat-ta̍t--ah.",
  },
  {
    hanji: "我的粒仔發癀矣，足疼的！",
    tailo: "Guá ê lia̍p-á huat-hông--ah, tsiok thiànn--ê!",
  },
  {
    hanji: "伊實在有夠番顛，我閣按怎講嘛無效。",
    tailo:
      "I si̍t-tsāi ū-kàu huan-tian, guá koh án-tsuánn kóng mā bô-hāu.",
  },
  {
    hanji: "伊發願事業若會成功，就欲捐錢幫助散赤人。",
    tailo:
      "I huat-guān sū-gia̍p nā ē sîng-kong, tō beh kuan tsînn pang-tsōo sàn-tshiah-lâng.",
  },
  {
    hanji: "我想一睏才了解伊講彼句話的意思。",
    tailo: "Guá siūnn tsi̍t khùn tsiah liáu-kái i kóng hit kù uē ê ì-sù.",
  },
  {
    hanji: "我看伊佮𪜶主管睏過矣。",
    tailo: "Guá khuànn i kah in tsú-kuán khùn--kuè--ah.",
  },
  {
    hanji: "風咧吹，紙一直飛，你嘛提一个物件小硩咧。",
    tailo:
      "Hong teh tshue, tsuá it-ti̍t pue, lí mā the̍h tsi̍t ê mi̍h-kiānn sió teh--leh.",
  },
  {
    hanji: "人送油飯予咱，咱愛硩米還人。",
    tailo: "Lâng sàng iû-pn̄g hōo--lán, lán ài teh bí hîng--lâng.",
  },
  {
    hanji: "人死了後，身軀會變硬。",
    tailo: "Lâng sí liáu-āu, sin-khu ē piàn ngē.",
  },
  {
    hanji: "已經變紅燈矣，閣硬衝過。",
    tailo: "Í-king piàn âng-ting--ah, koh ngē tshiong--kuè.",
  },
  {
    hanji: "伊攏睏坦敧，毋捌睏坦覆。",
    tailo: "I lóng khùn thán-khi, m̄ bat khùn thán-phak.",
  },
  {
    hanji: "咱收人的聘禮，愛硩定還人。",
    tailo: "Lán siu lâng ê phìng-lé, ài teh-tiānn hîng--lâng.",
  },
  {
    hanji: "阮囝逐擺食飯攏愛硬押，伊才欲好好仔食。",
    tailo:
      "Guán kiánn ta̍k-pái tsia̍h-pn̄g lóng ài ngē-ah, i tsiah beh hó-hó-á tsia̍h.",
  },
  {
    hanji: "伊是自願來的，毋是我共伊硬押來的。",
    tailo: "I sī tsū-guān lâi--ê, m̄ sī guá kā i ngē-ah--lâi--ê.",
  },
  {
    hanji: "兩爿硬拄硬，我看你莫插較好。",
    tailo: "Nn̄g-pîng ngē-tú-ngē, guá khuànn lí mài tshap khah hó.",
  },
  {
    hanji: "硬拄硬一工著愛兩千箍倩人顧。",
    tailo:
      "Ngē-tú-ngē tsi̍t kang tio̍h-ài nn̄g-tshing khoo tshiànn lâng kòo.",
  },
  {
    hanji: "伊的數學程度真好，雖然才讀國中，高中的數學嘛攏會曉。",
    tailo:
      "I ê sòo-ha̍k thîng-tōo tsin hó, sui-jiân tsiah tha̍k kok-tiong, ko-tiong ê sòo-ha̍k mā lóng ē-hiáu.",
  },
  {
    hanji: "我強欲予遮的冊硩扁矣！",
    tailo: "Guá kiōng-beh hōo tsia-ê tsheh teh-pínn--ah!",
  },
  {
    hanji: "伊欲稅厝，叫我共伊鬥揣。",
    tailo: "I beh suè-tshù, kiò guá kā i tàu tshuē.",
  },
  {
    hanji: "這个囡仔誠硬氣，以後一定有出脫。",
    tailo: "Tsit ê gín-á tsiânn ngē-khì, í-āu it-tīng ū tshut-thuat.",
  },
  {
    hanji: "你做代誌毋通硬迸迸，有時陣愛變通一下。",
    tailo:
      "Lí tsò tāi-tsì m̄-thang ngē-piàng-piàng, ū-sî-tsūn ài piàn-thong--tsi̍t-ē.",
  },
  {
    hanji: "硬骨的囡仔攏較毋認輸。",
    tailo: "Ngē-kut ê gín-á lóng khah m̄ jīn-su.",
  },
  {
    hanji: "這領衫漿了真硬掙，真好看。",
    tailo: "Tsit niá sann tsiunn liáu tsin ngē-tsiānn, tsin hó-khuànn.",
  },
  {
    hanji: "伊八十歲矣猶閣足硬掙。",
    tailo: "I peh-tsa̍p huè--ah iáu-koh tsiok ngē-tsiānn.",
  },
  {
    hanji: "囡仔攏出外，兩个老的感覺真稀微。",
    tailo: "Gín-á lóng tshut-guā, nn̄g ê lāu--ê kám-kak tsin hi-bî.",
  },
  {
    hanji: "聽我的，攏總硩落去就著矣啦！",
    tailo: "Thiann guá ê, lóng-tsóng teh--lo̍h-khì tō tio̍h--ah--lah!",
  },
  {
    hanji: "錢閣趁就有，你千萬毋通行短路。",
    tailo: "Tsînn koh thàn tō ū, lí tshian-bān m̄-thang kiânn-té-lōo.",
  },
  {
    hanji: "這个酒鬼若無三罐栽落去，是袂當硩嗽的。",
    tailo:
      "Tsit ê tsiú-kuí nā bô sann kuàn tsai--lo̍h-khì, sī bē-tàng teh-sàu--ê.",
  },
  {
    hanji: "這个囡仔驚著矣，緊去揣人來硩驚。",
    tailo:
      "Tsit ê gín-á kiann--tio̍h--ah, kín khì tshuē lâng lâi teh-kiann.",
  },
  {
    hanji: "提筅仔來共桌頂的塗粉筅筅咧。",
    tailo: "The̍h tshíng-á lâi kā toh-tíng ê thôo-hún tshíng-tshíng--leh.",
  },
  {
    hanji: "恁兩人的結合是我上大的願望。",
    tailo: "Lín nn̄g lâng ê kiat-ha̍p sī guá siōng tuā ê guān-bōng.",
  },
  {
    hanji: "講風颱欲來矣，結局煞無來。",
    tailo: "Kóng hong-thai beh lâi--ah, kiat-kio̍k suah bô lâi.",
  },
  {
    hanji: "你這句廢話，有講等於無講。",
    tailo: "Lí tsit kù huì-uē, ū kóng tíng-î bô kóng.",
  },
  {
    hanji: "你敢知影昨暗彼場比賽的結果按怎？",
    tailo:
      "Lí kám tsai-iánn tsa-àm hit tiûnn pí-sài ê kiat-kó án-tsuánn?",
  },
  {
    hanji: "伊昨暗去予冤仇人結果擲掉矣。",
    tailo: "I tsa-àm khì hōo uan-siû-lâng kiat-kó-tàn-tiāu--ah.",
  },
  {
    hanji: "警方咧調查死者敢有佮人結怨。",
    tailo: "Kíng-hong teh tiâu-tsa sí-tsiá kám ū kah lâng kiat-uàn.",
  },
  {
    hanji: "人猶未送到病院就已經絕氣矣。",
    tailo: "Lâng iáu-buē sàng kàu pēnn-īnn tō í-king tsua̍t-khuì--ah.",
  },
  {
    hanji: "傷久無運動，筋骨攏生鉎去矣。",
    tailo: "Siunn kú bô ūn-tōng, kin-kut lóng senn-sian--khì--ah.",
  },
  {
    hanji: "恁兩个人莫閣佇遐答喙鼓矣！",
    tailo: "Lín nn̄g ê lâng mài koh tī hia tap-tshuì-kóo--ah!",
  },
  {
    hanji: "毋知影是啥物原因，我感覺筋節痠軟。",
    tailo:
      "M̄ tsai-iánn sī siánn-mih guân-in, guá kám-kak kin-tsat sng-nńg.",
  },
  {
    hanji: "人來就好，毋免紮啥物等路啦！",
    tailo: "Lâng lâi tō hó, m̄-bián tsah siánn-mih tán-lōo--lah!",
  },
  {
    hanji: "伊絕對袂答應你的要求，你莫閣戇矣。",
    tailo: "I tsua̍t-tuì bē tah-ìng lí ê iau-kiû, lí mài koh gōng--ah.",
  },
  {
    hanji: "物件揀好去揣店員結數。",
    tailo: "Mi̍h-kiānn kíng-hó khì tshuē tiàm-uân kiat-siàu.",
  },
  {
    hanji: "古早人煎草藥仔攏嘛是用急燒仔。",
    tailo: "Kóo-tsá-lâng tsuann tsháu-io̍h-á lóng mā sī iōng kip-sio-á.",
  },
  {
    hanji: "聽你的腔口敢若是臺南人。",
    tailo: "Thiann lí ê khiunn-kháu kánn-ná sī Tâi-lâm-lâng.",
  },
  {
    hanji: "拄著一个菁仔欉，目睭一直掠我金金看。",
    tailo:
      "Tú-tio̍h tsi̍t ê tshenn-á-tsâng, ba̍k-tsiu it-ti̍t lia̍h guá kim-kim-khuànn.",
  },
  {
    hanji: "這領是舒被，彼領予你蓋。",
    tailo: "Tsit niá sī tshu-phuē, hit niá hōo lí kah.",
  },
  {
    hanji: "鞋底萎去矣，去買一雙新的。",
    tailo: "Ê-té ui--khì--ah, khì bé tsi̍t siang sin--ê.",
  },
  {
    hanji: "伊佮菜店查某同居，煞染著菜花。",
    tailo: "I kah tshài-tiàm-tsa-bóo tông-ki, suah jiám-tio̍h tshài-hue.",
  },
  {
    hanji: "伊愛食菜蔬，無愛食肉。",
    tailo: "I ài tsia̍h tshài-se, bô ài tsia̍h bah.",
  },
  {
    hanji: "阿媽叫我共食賰的菜收入去菜櫥。",
    tailo: "A-má kiò guá kā tsia̍h tshun ê tshài siu ji̍p-khì tshài-tû.",
  },
  {
    hanji: "這層是實抑是虛猶毋知，你毋通綴人烏白講。",
    tailo:
      "Tsit tsân sī si̍t ia̍h-sī hi iáu m̄ tsai, lí m̄-thang tuè lâng oo-pe̍h kóng.",
  },
  {
    hanji: "聽著債主欲揣伊，伊緊走去覕。",
    tailo: "Thiann-tio̍h tsè-tsú beh tshuē--i, i kín tsáu-khì bih.",
  },
  {
    hanji: "叫你莫佇街仔路拍球，你袂曉聽呢？",
    tailo: "Kiò lí mài tī ke-á-lōo phah-kiû, lí bē-hiáu thiann--nih?",
  },
  {
    hanji: "彼隻狗仔著生驚一直吠。",
    tailo: "Hit tsiah káu-á tio̍h-tshenn-kiann it-ti̍t puī.",
  },
  {
    hanji: "伊飼的雞仔攏著災死了了。",
    tailo: "I tshī ê ke-á lóng tio̍h-tse sí-liáu-liáu.",
  },
  {
    hanji: "這聲慘矣，予你害一下連我嘛著災矣。",
    tailo:
      "Tsit-siann tshám--ah, hōo lí hāi tsi̍t-ē liân guá mā tio̍h-tse--ah.",
  },
  {
    hanji: "伊那食物件那講話，無細膩煞著咳嗾。",
    tailo: "I ná tsia̍h mi̍h-kiānn ná kóng-uē, bô-sè-jī suah tio̍h-ka-tsa̍k.",
  },
  {
    hanji: "西瓜著愛著時才會好食。",
    tailo: "Si-kue tio̍h-ài tio̍h-sî tsiah ē hó-tsia̍h.",
  },
  {
    hanji: "這禮拜天氣轉寒，有真濟人著病。",
    tailo: "Tsit lé-pài thinn-khì tńg-kuânn, ū tsin tsē lâng tio̍h-pēnn.",
  },
  {
    hanji: "干焦共伊講兩句仔，伊就閣開始咧覕喙矣。",
    tailo:
      "Kan-na kā i kóng--nn̄g-kù-á, i tō koh khai-sí teh bih-tshuì--ah.",
  },
  {
    hanji: "以前遐衛生無好，有真濟人著寒熱仔。",
    tailo:
      "Í-tsîng hia uē-sing bô hó, ū tsin tsē lâng tio̍h kuânn-jia̍t-á.",
  },
  {
    hanji: "共你講這領褲傷絚你毋信，這馬裂開矣啦。",
    tailo:
      "Kā lí kóng tsit niá khòo siunn ân lí m̄ sìn, tsit-má li̍h--khui--ah--lah.",
  },
  {
    hanji: "伊予人拍著傷，這馬猶閣倒佇病院。",
    tailo: "I hōo lâng phah tio̍h-siong, tsit-má iáu-koh tó tī pēnn-īnn.",
  },
  {
    hanji: "工課若著頭，就會真順序。",
    tailo: "Khang-khuè nā tio̍h-thâu, tō ē tsin sūn-sī.",
  },
  {
    hanji: "你雄雄喝一聲，囡仔煞著驚！",
    tailo: "Lí hiông-hiông huah tsi̍t siann, gín-á suah tio̍h-kiann!",
  },
  {
    hanji: "較早的人相信人的命出世就註好矣。",
    tailo: "Khah-tsá ê lâng siong-sìn lâng ê miā tshut-sì tō tsù-hó--ah.",
  },
  {
    hanji: "伊串做攏是顧人怨的代誌，莫怪予人詈甲無一地好。",
    tailo:
      "I tshuàn-tsò lóng sī kòo-lâng-uàn ê tāi-tsì, bo̍k-kuài hōo lâng lé kah bô tsi̍t tè hó.",
  },
  {
    hanji: "象是陸地上上大隻的動物。",
    tailo: "Tshiūnn sī lio̍k-tē-siōng siōng tuā tsiah ê tōng-bu̍t.",
  },
  {
    hanji: "伊讀大學佇外口稅厝，提錢貼厝主蹛𪜶遐食飯。",
    tailo:
      "I tha̍k tāi-ha̍k tī guā-kháu suè-tshù, the̍h tsînn thiap tshù-tsú tuà in hia tsia̍h-pn̄g.",
  },
  {
    hanji: "遮的你總貿，我算你較俗。",
    tailo: "Tsia--ê lí tsóng-bāu, guá sǹg lí khah sio̍k.",
  },
  {
    hanji: "水電的工程貿予張的做。",
    tailo: "Tsuí-tiān ê kang-tîng bāu hōo Tiunn--ê tsò.",
  },
  {
    hanji: "你做你放心，時到一定有貴人會出現。",
    tailo: "Lí tsò lí hòng-sim, sî kàu it-tīng ū kuì-jîn ē tshut-hiān.",
  },
  {
    hanji: "開學進前愛會記得註冊。",
    tailo: "Khai-ha̍k tsìn-tsîng ài ē-kì-tit tsù-tsheh.",
  },
  {
    hanji: "伊相信人的命運早就註好好矣。",
    tailo: "I siong-sìn lâng ê miā-ūn tsá tō tsù-hó-hó--ah.",
  },
  {
    hanji: "伊佇半路仔註死去拄著債主。",
    tailo: "I tī puànn-lōo-á tsù-sí khì tú-tio̍h tsè-tsú.",
  },
  {
    hanji: "偷提物件予警察掠著，有夠註死！",
    tailo: "Thau-the̍h mi̍h-kiānn hōo kíng-tshat lia̍h--tio̍h, ū-kàu tsù-sí!",
  },
  {
    hanji: "你免佮伊講遐濟，伊早就予人買收去矣。",
    tailo:
      "Lí bián kah i kóng hiah tsē, i tsá tō hōo lâng bé-siu--khì--ah.",
  },
  {
    hanji: "你趁早去趁早轉來，較袂共人傷齪嘈。",
    tailo:
      "Lí thàn-tsá khì thàn-tsá tńg--lâi, khah bē kā lâng siunn tsak-tsō.",
  },
  {
    hanji: "趁是趁私奇，食是食阿爹。",
    tailo: "Thàn sī thàn-sai-khia, tsia̍h sī tsia̍h a-tia.",
  },
  {
    hanji: "買命喔，車欲開矣，伊猶毋來。",
    tailo: "Bé-miā--ooh, tshia beh khui--ah, i iáu m̄ lâi.",
  },
  {
    hanji: "貴重的物件愛囥予伊好。",
    tailo: "Kuì-tiōng ê mi̍h-kiānn ài khǹg hōo i hó.",
  },
  {
    hanji: "你好跤好手，哪會無欲去外面趁食？",
    tailo: "Lí hó kha hó tshiú, ná ē bô beh khì guā-bīn thàn-tsia̍h?",
  },
  {
    hanji: "查某人去趁食，會予人笑。",
    tailo: "Tsa-bóo-lâng khì thàn-tsia̍h, ē hōo lâng tshiò.",
  },
  {
    hanji: "天然的璇石無濟又閣歹挖，所以真貴氣。",
    tailo:
      "Thian-jiân ê suān-tsio̍h bô tsē iū-koh pháinn óo, sóo-í tsin kuì-khì.",
  },
  {
    hanji: "這款蘭花真貴氣，無好種。",
    tailo: "Tsit khuán lân-hue tsin kuì-khì, bô hó tsìng.",
  },
  {
    hanji: "按呢較費氣，你閣想看有別種方法無？",
    tailo:
      "Án-ne khah huì-khì, lí koh siūnn khuànn ū pa̍t tsióng hong-huat--bô?",
  },
  {
    hanji: "我家己想辦法，毋免你費神。",
    tailo: "Guá ka-kī siūnn pān-huat, m̄-bián lí huì-sîn.",
  },
  {
    hanji: "這款貴參參的物件你曷買會落去！",
    tailo: "Tsit khuán kuì-som-som ê mi̍h-kiānn lí a̍h bé ē lo̍h--khì!",
  },
  {
    hanji: "我來捀碗共你貯飯，你閣小等一下。",
    tailo: "Guá lâi phâng uánn kā lí té-pn̄g, lí koh sió-tán--tsi̍t-ē.",
  },
  {
    hanji: "你共這篇文章註解一下好無？",
    tailo: "Lí kā tsit phinn bûn-tsiong tsù-kái--tsi̍t-ē hó--bô?",
  },
  {
    hanji: "你罵伊是趁食查某，按呢傷超過啦！",
    tailo: "Lí mē i sī thàn-tsia̍h-tsa-bóo, án-ne siunn tshiau-kuè--lah!",
  },
  {
    hanji: "趁燒緊食，冷去就無好食矣。",
    tailo: "Thàn sio kín tsia̍h, líng--khì tō bô hó-tsia̍h--ah.",
  },
  {
    hanji: "你一工到暗干焦想欲趁錢，身體攏袂曉小顧一下。",
    tailo:
      "Lí tsi̍t-kang-kàu-àm kan-na siūnn-beh thàn-tsînn, sin-thé lóng bē-hiáu sió kòo--tsi̍t-ē.",
  },
  {
    hanji: "我越頭才看著伊徛佇後壁。",
    tailo: "Guá ua̍t-thâu tsiah khuànn-tio̍h i khiā tī āu-piah.",
  },
  {
    hanji: "這囥佇遮，越頭才來提。",
    tailo: "Tse khǹg tī tsia, ua̍t-thâu tsiah lâi the̍h.",
  },
  {
    hanji: "伊一下受氣，越頭做伊行出去。",
    tailo: "I tsi̍t-ē siū-khì, ua̍t-thâu tsò i kiânn--tshut-khì.",
  },
  {
    hanji: "你欲出門進前，愛會記得紮錢。",
    tailo: "Lí beh tshut-mn̂g tsìn-tsîng, ài ē-kì-tit tsah tsînn.",
  },
  {
    hanji: "你哪會使辜負恁爸母對你的期待咧？",
    tailo: "Lí ná ē-sái koo-hū lín pē-bú tuì lí ê kî-thāi--leh?",
  },
  {
    hanji: "學行的囡仔足𠢕跋倒。",
    tailo: "O̍h kiânn ê gín-á tsiok gâu pua̍h-tó.",
  },
  {
    hanji: "遮塗跤澹澹，我一下無細膩煞連紲跙倒三擺。",
    tailo:
      "Tsia thôo-kha tâm-tâm, guá tsi̍t-ē bô-sè-jī suah liân-suà tshū-tó sann pái.",
  },
  {
    hanji: "伊足迷信的，萬項代誌攏愛跋桮問神。",
    tailo:
      "I tsiok bê-sìn--ê, bān-hāng tāi-tsì lóng ài pua̍h-pue mn̄g sîn.",
  },
  {
    hanji: "伊閣咧跋牌仔矣，你叫伊好停睏食飯矣。",
    tailo:
      "I koh teh pua̍h-pâi-á--ah, lí kiò i hó thîng-khùn tsia̍h-pn̄g--ah.",
  },
  {
    hanji: "干焦有人跋筊了家伙，無人跋筊好額的。",
    tailo:
      "Kan-na ū lâng pua̍h-kiáu liáu ke-hué, bô lâng pua̍h-kiáu hó-gia̍h--ê.",
  },
  {
    hanji: "多謝各位鄉親對我的支持佮愛護。",
    tailo: "To-siā kok-uī hiong-tshin tuì guá ê tsi-tshî kah ài-hōo.",
  },
  {
    hanji: "看著伊我就規身軀強欲酥去。",
    tailo: "Khuànn-tio̍h i guá tō kui-sin-khu kiōng-beh soo--khì.",
  },
  {
    hanji: "提量仔來量看豬仔有偌重。",
    tailo: "The̍h niū-á lâi niū khuànn ti-á ū guā tāng.",
  },
  {
    hanji: "刀仔鈍去矣，提去磨磨咧。",
    tailo: "To-á tun--khì--ah, the̍h-khì buâ-buâ--leh.",
  },
  {
    hanji: "這支刀有夠鈍，切肉若咧鋸肉。",
    tailo: "Tsit ki to ū-kàu tun, tshiat bah ná teh kì bah.",
  },
  {
    hanji: "你遮爾鈍，欲按怎做生理？",
    tailo: "Lí tsiah-nī tūn, beh án-tsuánn tsò-sing-lí?",
  },
  {
    hanji: "頭家欲揣人開刀，你愛較細膩咧。",
    tailo: "Thâu-ke beh tshuē lâng khui-to, lí ài khah sè-jī--leh.",
  },
  {
    hanji: "伊逐工食飽睏，睏飽食，真正是一个閒人。",
    tailo:
      "I ta̍k-kang tsia̍h-pá khùn, khùn-pá tsia̍h, tsin-tsiànn sī tsi̍t ê îng-lâng.",
  },
  {
    hanji: "阮的代誌，毋免你這个閒人來管。",
    tailo: "Guán ê tāi-tsì, m̄-bián lí tsit ê îng-lâng lâi kuán.",
  },
  {
    hanji: "你若有閒工，就來共我鬥相共。",
    tailo: "Lí nā ū îng-kang, tō lâi kā guá tàu-sann-kāng.",
  },
  {
    hanji: "無愛挃的物件暫時囥佇間仔。",
    tailo: "Bô ài ti̍h ê mi̍h-kiānn tsiām-sî khǹg tī king-á.",
  },
  {
    hanji: "伊退休了後規日閒仙仙，定定四界去遊山玩水。",
    tailo:
      "I thè-hiu liáu-āu kui ji̍t îng-sian-sian, tiānn-tiānn sì-kè khì iû-san-uán-suí.",
  },
  {
    hanji: "你莫佇人的尻川後，講人的閒仔話。",
    tailo: "Lí mài tī lâng ê kha-tshng-āu, kóng lâng ê îng-á-uē.",
  },
  {
    hanji: "彼間新的賣場當時欲開市？",
    tailo: "Hit king sin ê bē-tiûnn tang-sî beh khui-tshī?",
  },
  {
    hanji: "伊逐月日攏提一寡仔錢予𪜶老爸開用。",
    tailo:
      "I ta̍k gue̍h-ji̍t lóng the̍h tsi̍t-kuá-á tsînn hōo in lāu-pē khai-īng.",
  },
  {
    hanji: "你量其約報一个價予我。",
    tailo: "Lí liōng-kî-iok pò tsi̍t ê kè hōo--guá.",
  },
  {
    hanji: "這件代誌就予你去共伊開拆一下。",
    tailo: "Tsit kiānn tāi-tsì tō hōo lí khì kā i khui-thiah--tsi̍t-ē.",
  },
  {
    hanji: "好好的代誌予你舞甲開花去。",
    tailo: "Hó-hó ê tāi-tsì hōo lí bú kah khui-hue--khì.",
  },
  {
    hanji: "阮阿兄娶某的時陣，阮兜是家己開桌請人。",
    tailo:
      "Guán a-hiann tshuā-bóo ê sî-tsūn, guán tau sī ka-kī khui-toh tshiánn--lâng.",
  },
  {
    hanji: "明仔暗七點欲開桌，你毋通傷晏到。",
    tailo: "Bîn-á-àm tshit tiám beh khui-toh, lí m̄-thang siunn uànn kàu.",
  },
  {
    hanji: "這道理較深，你就勻勻仔共伊開破。",
    tailo: "Tse tō-lí khah tshim, lí tō ûn-ûn-á kā i khui-phuà.",
  },
  {
    hanji: "阮的祖先是三百外年前來臺灣開基的。",
    tailo:
      "Guán ê tsóo-sian sī sann-pah-guā nî tsîng lâi Tâi-uân khai-ki--ê.",
  },
  {
    hanji: "伊都開喙咧講矣，咱就照伊的意思去做好矣。",
    tailo:
      "I to khui-tshuì leh kóng--ah, lán tō tsiàu i ê ì-sù khì tsò hó--ah.",
  },
  {
    hanji: "伊開喙五萬箍，我嫌傷貴無共伊買。",
    tailo: "I khui-tshuì gōo-bān khoo, guá hiâm siunn kuì bô kā i bé.",
  },
  {
    hanji: "你是家己開業抑是予人倩？",
    tailo: "Lí sī ka-kī khai-gia̍p ia̍h-sī hōo lâng tshiànn?",
  },
  {
    hanji: "我趕路趕甲強欲酥腰去矣。",
    tailo: "Guá kuánn-lōo kuánn kah kiōng-beh soo-io--khì--ah.",
  },
  {
    hanji: "這間百貨公司十點欲開幕。",
    tailo: "Tsit king pah-huè kong-si tsa̍p tiám beh khai-bōo.",
  },
  {
    hanji: "你這個月的開銷有較濟。",
    tailo: "Lí tsit kò gue̍h ê khai-siau ū khah tsē.",
  },
  {
    hanji: "伊本來食菜，最近決定欲開臊。",
    tailo: "I pún-lâi tsia̍h-tshài, tsuè-kīn kuat-tīng beh khui-tsho.",
  },
  {
    hanji: "逐禮拜五暗時七點，伊準時佇遮開講。",
    tailo:
      "Ta̍k lé-pài-gōo àm-sî tshit tiám, i tsún-sî tī tsia khai-káng.",
  },
  {
    hanji: "雞卵愛有雄提去孵才孵會出來。",
    tailo: "Ke-nn̄g ài ū-hîng the̍h-khì pū tsiah pū ē tshut--lâi.",
  },
  {
    hanji: "欲開始表演矣，逐家攏集倚過來。",
    tailo: "Beh khai-sí piáu-ián--ah, ta̍k-ke lóng tsi̍p-uá--kuè-lâi.",
  },
  {
    hanji: "你順這條路直直去，就會看著車站矣。",
    tailo:
      "Lí sūn tsit tiâu lōo ti̍t-ti̍t khì, tō ē khuànn-tio̍h tshia-tsām--ah.",
  },
  {
    hanji: "這粒檨仔黃矣，會使食矣。",
    tailo: "Tsit lia̍p suāinn-á n̂g--ah, ē-sái tsia̍h--ah.",
  },
  {
    hanji: "警察佇戲院門口掠著黃牛。",
    tailo: "Kíng-tshat tī hì-īnn mn̂g-kháu lia̍h-tio̍h n̂g-gû.",
  },
  {
    hanji: "咱明仔載六點佇車頭集合。",
    tailo: "Lán bîn-á-tsài la̍k tiám tī tshia-thâu tsi̍p-ha̍p.",
  },
  {
    hanji: "飯疕搵糖是較早的囡仔放學轉來上好的點心。",
    tailo:
      "Pn̄g-phí ùn thn̂g sī khah-tsá ê gín-á pàng-o̍h tńg--lâi siōng hó ê tiám-sim.",
  },
  {
    hanji: "代誌已經進行到咧欲收尾的階段矣。",
    tailo:
      "Tāi-tsì í-king tsìn-hîng kàu teh-beh siu-bué ê kai-tuānn--ah.",
  },
  {
    hanji: "伊順從爸母的意思，出國讀冊。",
    tailo: "I sūn-tsiông pē-bú ê ì-sù, tshut-kok tha̍k-tsheh.",
  },
  {
    hanji: "連遮爾簡單的代誌你都做袂好，真正有夠飯桶。",
    tailo:
      "Liân tsiah-nī kán-tan ê tāi-tsì lí to tsò bē hó, tsin-tsiànn ū-kàu pn̄g-tháng.",
  },
  {
    hanji: "彼个查某囡仔，我看著誠順眼。",
    tailo: "Hit ê tsa-bóo gín-á, guá khuànn tio̍h tsiânn sūn-gán.",
  },
  {
    hanji: "你若欲去買菜，順紲去共我納電火錢。",
    tailo:
      "Lí nā beh khì bé tshài, sūn-suà khì kā guá la̍p tiān-hué tsînn.",
  },
  {
    hanji: "你毋通閣提雞卵糕來，我已經飫喙矣。",
    tailo: "Lí m̄-thang koh the̍h ke-nn̄g-ko lâi, guá í-king uì-tshuì--ah.",
  },
  {
    hanji: "你叫做啥物名，我雄雄煞袂記得。",
    tailo: "Lí kiò-tsò siánn-mih miâ, guá hiông-hiông suah bē-kì--tit.",
  },
  {
    hanji: "一張紙飛過來，伊出手順勢共伊接咧。",
    tailo:
      "Tsi̍t tiunn tsuá pue--kuè-lâi, i tshut-tshiú sūn-sè kā i tsiap--leh.",
  },
  {
    hanji: "今仔日有人客欲來，你愛準備六塊飯碗才有夠。",
    tailo:
      "Kin-á-ji̍t ū lâng-kheh beh lâi, lí ài tsún-pī la̍k tè pn̄g-uánn tsiah ū-kàu.",
  },
  {
    hanji: "伊偷用公家的錢予頭家發現，就按呢摃破家己的飯碗。",
    tailo:
      "I thau iōng kong-ka ê tsînn hōo thâu-ke huat-hiān, tsiū-án-ne kòng-phuà ka-kī ê pn̄g-uánn.",
  },
  {
    hanji: "彼个囡仔黃酸黃酸，敢若飼無啥會大漢。",
    tailo: "Hit ê gín-á n̂g-sng-n̂g-sng, kánn-ná tshī bô siánn ē tuā-hàn.",
  },
  {
    hanji: "彼欉樹仔花開甲黃錦錦。",
    tailo: "Hit tsâng tshiū-á hue khui kah n̂g-gìm-gìm.",
  },
  {
    hanji: "古早人煮飯攏用飯篱撈飯。",
    tailo: "Kóo-tsá-lâng tsú pn̄g lóng iōng pn̄g-lē hôo pn̄g.",
  },
  {
    hanji: "我共伊催幾若擺，伊就是毋還錢。",
    tailo: "Guá kā i tshui kuí-nā pái, i tō sī m̄ hîng tsînn.",
  },
  {
    hanji: "感冒猶未好，毋通出去剾風。",
    tailo: "Kám-mōo iáu-buē hó, m̄-thang tshut-khì khau-hong.",
  },
  {
    hanji: "伊真勥，逐家攏真呵咾。",
    tailo: "I tsin khiàng, ta̍k-ke lóng tsin o-ló.",
  },
  {
    hanji: "我下晡會共錢匯入去你的戶頭。",
    tailo: "Guá ē-poo ē kā tsînn huē ji̍p-khì lí ê hōo-thâu.",
  },
  {
    hanji: "人都已經死去矣，你莫閣傷心矣。",
    tailo: "Lâng to í-king sí--khì--ah, lí mài koh siong-sim--ah.",
  },
  {
    hanji: "這款傷天害理的代誌，你曷敢做？",
    tailo: "Tsit khuán siong-thian-hāi-lí ê tāi-tsì, lí a̍h kánn tsò?",
  },
  {
    hanji: "伊欠人誠濟錢，不時有債主來𪜶兜討錢。",
    tailo:
      "I khiàm lâng tsiânn tsē tsînn, put-sî ū tsè-tsú lâi in tau thó-tsînn.",
  },
  {
    hanji: "印彩色的加真傷本，印烏白的就好。",
    tailo: "Ìn tshái-sik--ê ke tsin siong-pún, ìn oo-pe̍h--ê tō hó.",
  },
  {
    hanji: "𪜶老爸若佇咧，伊就毋敢亂來！",
    tailo: "In lāu-pē nā tī--leh, i tō m̄ kánn luān-lâi!",
  },
  {
    hanji: "伊講遐的話是咧共你剾洗。",
    tailo: "I kóng hia-ê uē sī teh kā lí khau-sé.",
  },
  {
    hanji: "伊佇外位讀冊，所費一定較傷重。",
    tailo: "I tī guā-uī tha̍k-tsheh, sóo-huì it-tīng khah siong-tiōng.",
  },
  {
    hanji: "伊病甲真傷重，這馬猶蹛佇加護病房。",
    tailo:
      "I pēnn kah tsin siong-tiōng, tsit-má iáu tuà tī ka-hōo pēnn-pâng.",
  },
  {
    hanji: "你寒著才好爾爾，毋通出去外口剾風。",
    tailo:
      "Lí kuânn--tio̍h tsiah hó niā-niā, m̄-thang tshut-khì guā-kháu khau-hong.",
  },
  {
    hanji: "看這个勢面，伊欲贏就愛誠拚咧。",
    tailo: "Khuànn tsit ê sè-bīn, i beh iânn tō ài tsiânn piànn--leh.",
  },
  {
    hanji: "伊不時為著工作的問題咧傷腦筋。",
    tailo: "I put-sî uī-tio̍h kang-tsok ê būn-tê teh siong-náu-kin.",
  },
  {
    hanji: "阿嬌𪜶大漢新婦誠勥跤。",
    tailo: "A-kiau in tuā-hàn sin-pū tsiânn khiàng-kha.",
  },
  {
    hanji: "伊一世人勤儉，食老日子才會遮好過。",
    tailo:
      "I tsi̍t-sì-lâng khîn-khiām, tsia̍h-lāu ji̍t-tsí tsiah ē tsiah hó-kuè.",
  },
  {
    hanji: "食肉食三層，看戲看亂彈。",
    tailo: "Tsia̍h bah tsia̍h sam-tsân, khuànn hì khuànn lān-thân.",
  },
  {
    hanji: "伊欠人一筆數，這馬才咧四界傱錢。",
    tailo:
      "I khiàm lâng tsi̍t pit siàu, tsit-má tsiah teh sì-kè tsông-tsînn.",
  },
  {
    hanji: "無，你這馬是倚靠啥人的勢頭？敢侵門踏戶來亂？",
    tailo:
      "Bô, lí tsit-má sī uá-khò siánn-lâng ê sè-thâu? Kánn tshim-mn̂g-ta̍h-hōo lâi luān?",
  },
  {
    hanji: "飯會使烏白食，話毋通亂講！",
    tailo: "Pn̄g ē-sái oo-pe̍h tsia̍h, uē m̄-thang luān-kóng!",
  },
  {
    hanji: "你若無做彼款顧人怨的代誌就袂予人嗙。",
    tailo:
      "Lí nā bô tsò hit khuán kòo-lâng-uàn ê tāi-tsì tō bē hōo lâng phngh.",
  },
  {
    hanji: "伊自做生理到今一直咧塌本。",
    tailo: "I tsū tsò-sing-lí kàu-tann it-ti̍t teh thap-pún.",
  },
  {
    hanji: "這个生理按呢一直填本，欲哪會用得？",
    tailo: "Tsit ê sing-lí án-ne it-ti̍t thiām-pún, beh ná ē-īng--tit?",
  },
  {
    hanji: "伊彼雙鞋穿甲塌底才擲掉。",
    tailo: "I hit siang ê tshīng kah lap-té tsiah tàn-tiāu.",
  },
  {
    hanji: "用塌空的題型來測驗學生的語詞。",
    tailo: "Iōng thap-khang ê tê-hîng lâi tshik-giām ha̍k-sing ê gí-sû.",
  },
  {
    hanji: "這條路塌空的所在真濟。",
    tailo: "Tsit tiâu lōo thap-khang ê sóo-tsāi tsin tsē.",
  },
  {
    hanji: "較早真濟人用塗炭燃火。",
    tailo: "Khah-tsá tsin tsē lâng iōng thôo-thuànn hiânn-hué.",
  },
  {
    hanji: "草蓆仔頂的塗粉拭拭咧才去睏。",
    tailo:
      "Tsháu-tshio̍h-á-tíng ê thôo-hún tshit-tshit--leh tsiah khì khùn.",
  },
  {
    hanji: "食美國仙丹的副作用是面會圓圓。",
    tailo: "Tsia̍h Bí-kok-sian-tan ê hù-tsok-iōng sī bīn ē înn-înn.",
  },
  {
    hanji: "奕牌仔欠一跤，緊揣恁阿姨來塌跤。",
    tailo: "Ī pâi-á khiàm tsi̍t kha, kín tshuē lín a-î lâi thap-kha.",
  },
  {
    hanji: "這改的婚禮辦了真圓滿。",
    tailo: "Tsit kái ê hun-lé pān liáu tsin uân-buán.",
  },
  {
    hanji: "𪜶嗤舞嗤呲佇遐咧講人的歹話。",
    tailo: "In tshi-bú-tshi̍h-tshū tī hia teh kóng lâng ê pháinn-uē.",
  },
  {
    hanji: "做生理一直塌錢，規氣收收起來。",
    tailo: "Tsò-sing-lí it-ti̍t thap-tsînn, kui-khì siu-siu--khí-lâi.",
  },
  {
    hanji: "阿娥後禮拜欲嫁去苗栗矣！",
    tailo: "A-ngôo āu lé-pài beh kè-khì Biâu-li̍k--ah!",
  },
  {
    hanji: "嫁翁是一世人的代誌，你著毋通凊彩。",
    tailo:
      "Kè-ang sī tsi̍t-sì-lâng ê tāi-tsì, lí tio̍h m̄-thang tshìn-tshái.",
  },
  {
    hanji: "今仔日好日，真濟人嫁娶。",
    tailo: "Kin-á-ji̍t hó-ji̍t, tsin tsē lâng kè-tshuā.",
  },
  {
    hanji: "佇代誌猶未查清楚進前，咱逐家攏有嫌疑。",
    tailo:
      "Tī tāi-tsì iáu-buē tshâ tshing-tshó tsìn-tsîng, lán ta̍k-ke lóng ū hiâm-gî.",
  },
  {
    hanji: "伊閣咧想伊的未婚妻矣。",
    tailo: "I koh teh siūnn i ê bī-hun-tshe--ah.",
  },
  {
    hanji: "你莫烏白想矣，伊根本都無彼个意思。",
    tailo: "Lí mài oo-pe̍h siūnn--ah, i kin-pún to bô hit ê ì-sù.",
  },
  {
    hanji: "伊受著老師的感化了後，就變乖矣。",
    tailo: "I siū-tio̍h lāu-su ê kám-huà liáu-āu, tō piàn kuai--ah.",
  },
  {
    hanji: "你按呢四界惹事，實在真可惡。",
    tailo: "Lí án-ne sì-kè jiá-sū, si̍t-tsāi tsin khó-ònn.",
  },
  {
    hanji: "你毋通閣佇遐想東想西，趕緊做工課啦！",
    tailo:
      "Lí m̄-thang koh tī hia siūnn-tang-siūnn-sai, kuánn-kín tsò khang-khuè--lah!",
  },
  {
    hanji: "伊規工攏咧想空想縫，想欲諞人的錢。",
    tailo:
      "I kui-kang lóng teh siūnn-khang-siūnn-phāng, siūnn-beh pián lâng ê tsînn.",
  },
  {
    hanji: "你講這款話是啥物意思？",
    tailo: "Lí kóng tsit khuán uē sī siánn-mih ì-sù?",
  },
  {
    hanji: "伊予人感染著流行感冒。",
    tailo: "I hōo lâng kám-jiám-tio̍h liû-hîng kám-mōo.",
  },
  {
    hanji: "這齣電影感動真濟觀眾。",
    tailo: "Tsit tshut tiān-iánn kám-tōng tsin tsē kuan-tsiòng.",
  },
  {
    hanji: "𪜶兩个人的感情真好。",
    tailo: "In nn̄g ê lâng ê kám-tsîng tsin hó.",
  },
  {
    hanji: "昨暗睏無好，今仔日誠愛睏。",
    tailo: "Tsa-àm khùn bô hó, kin-á-ji̍t tsiânn ài-khùn.",
  },
  {
    hanji: "外口咧起風矣，你無疊衫就走出去，是會感著。",
    tailo:
      "Guā-kháu teh khí-hong--ah, lí bô tha̍h sann tō tsáu--tshut-khì, sī ē kám--tio̍h.",
  },
  {
    hanji: "少年人若有相意愛就好，咱莫插傷濟。",
    tailo: "Siàu-liân-lâng nā ū sio-ì-ài tō hó, lán mài tshap siunn tsē.",
  },
  {
    hanji: "你對這件代誌有啥物感想？",
    tailo: "Lí tuì tsit kiānn tāi-tsì ū siánn-mih kám-sióng?",
  },
  {
    hanji: "伊逐擺看著人攏微微仔笑。",
    tailo: "I ta̍k-pái khuànn-tio̍h lâng lóng bî-bî-á tshiò.",
  },
  {
    hanji: "伊愛嬌的模樣攏無改變。",
    tailo: "I ài-kiau ê bôo-iūnn lóng bô kái-piàn.",
  },
  {
    hanji: "你按呢共我鬥相共，我真感激你。",
    tailo: "Lí án-ne kā guá tàu-sann-kāng, guá tsin kám-kik--lí.",
  },
  {
    hanji: "人講雙生仔定定會互相感應。",
    tailo: "Lâng kóng siang-senn-á tiānn-tiānn ē hōo-siong kám-ìng.",
  },
  {
    hanji: "感謝你共我鬥相共，代誌才會遐爾緊就做了。",
    tailo:
      "Kám-siā lí kā guá tàu-sann-kāng, tāi-tsì tsiah ē hiah-nī kín tō tsò-liáu.",
  },
  {
    hanji: "這个所在予人的感覺真溫暖。",
    tailo: "Tsit ê sóo-tsāi hōo--lâng ê kám-kak tsin un-luán.",
  },
  {
    hanji: "這張紙哪會予你搙甲變按呢？",
    tailo: "Tsit tiunn tsuá ná ē hōo lí jio̍k kah pìnn án-ne?",
  },
  {
    hanji: "規間厝搜透透，攏揣無。",
    tailo: "Kui king tshù tshiau-thàu-thàu, lóng tshuē-bô.",
  },
  {
    hanji: "風湧大，船搟甲真厲害，莫怪伊會眩船。",
    tailo:
      "Hong-íng tuā, tsûn hián kah tsin lī-hāi, bo̍k-kuài i ē hîn-tsûn.",
  },
  {
    hanji: "這領衫袂當囥洗衫機洗，你去用手浞浞咧。",
    tailo:
      "Tsit niá sann bē-tàng khǹg sé-sann-ki sé, lí khì iōng tshiú tshio̍k-tshio̍k--leh.",
  },
  {
    hanji: "你看你浞甲規雙鞋仔專塗。",
    tailo: "Lí khuànn lí tshio̍k kah kui siang ê-á tsuan thôo.",
  },
  {
    hanji: "跤手遮緊，隨予你搩幾若塊去。",
    tailo: "Kha-tshiú tsiah kín, suî hōo lí kiat kuí-nā tè--khì.",
  },
  {
    hanji: "這个物件無遐貴，你去予人搧大耳矣。",
    tailo:
      "Tsit ê mi̍h-kiānn bô hiah kuì, lí khì hōo lâng siàn-tuā-hīnn--ah.",
  },
  {
    hanji: "𪜶彼班搝大索搝贏，逐家攏足歡喜的。",
    tailo:
      "In hit pan khiú-tuā-soh khiú-iânn, ta̍k-ke lóng tsiok huann-hí--ê.",
  },
  {
    hanji: "這擺風颱損失足濟財產。",
    tailo: "Tsit pái hong-thai sún-sit tsiok tsē tsâi-sán.",
  },
  {
    hanji: "伊逐擺轉來攏若像咧搵豆油，無一時仔就閣走矣。",
    tailo:
      "I ta̍k-pái tńg--lâi lóng ná-tshiūnn teh ùn-tāu-iû, bô tsi̍t-sî-á tō koh tsáu--ah.",
  },
  {
    hanji: "警察懷疑伊有紮毒品，共伊搜身軀。",
    tailo: "Kíng-tshat huâi-gî i ū tsah to̍k-phín, kā i tshiau sin-khu.",
  },
  {
    hanji: "自細漢共伊搦屎搦尿晟養大漢，想袂到伊遮爾不孝。",
    tailo:
      "Tsū sè-hàn kā i la̍k-sái-la̍k-jiō tshiânn-ióng tuā-hàn, siūnn-bē-kàu i tsiah-nī put-hàu.",
  },
  {
    hanji: "欲漆懸的所在就愛搭架。",
    tailo: "Beh tshat kuân ê sóo-tsāi tō ài tah-kè.",
  },
  {
    hanji: "你共烘爐提去外口搧風，按呢火才會較炎。",
    tailo:
      "Lí kā hang-lôo the̍h-khì guā-kháu siàn-hong, án-ne hué tsiah ē khah iām.",
  },
  {
    hanji: "伊可能是昨暝有搧風，所以才會發燒。",
    tailo: "I khó-lîng sī tsa-mê ū siàn-hong, sóo-í tsiah ē huat-sio.",
  },
  {
    hanji: "因為伊不時換頭路，所以定定咧搬厝。",
    tailo:
      "In-uī i put-sî uānn thâu-lōo, sóo-í tiānn-tiānn teh puann-tshù.",
  },
  {
    hanji: "食薰毋但了錢閣會損害身體。",
    tailo: "Tsia̍h-hun m̄-nā liáu-tsînn koh ē sún-hāi sin-thé.",
  },
  {
    hanji: "我這禮拜為著伊的代誌，無眠閣損神。",
    tailo: "Guá tsit lé-pài uī-tio̍h i ê tāi-tsì, bô-bîn koh sńg-sîn.",
  },
  {
    hanji: "這件代誌你愛想予斟酌。",
    tailo: "Tsit kiānn tāi-tsì lí ài siūnn hōo tsim-tsiok.",
  },
  {
    hanji: "這件代誌請逐家斟酌一下，毋通凊彩就決定。",
    tailo:
      "Tsit kiānn tāi-tsì tshiánn ta̍k-ke tsim-tsiok--tsi̍t-ē, m̄-thang tshìn-tshái tō kuat-tīng.",
  },
  {
    hanji: "你斟酌一下，應該聽會著。",
    tailo: "Lí tsim-tsiok--tsi̍t-ē, ing-kai thiann ē tio̍h.",
  },
  {
    hanji: "斟酒愛細膩，毋通斟傷滇。",
    tailo: "Thîn tsiú ài sè-jī, m̄-thang thîn siunn tīnn.",
  },
  {
    hanji: "伊萬項代誌攏欲搢做前。",
    tailo: "I bān-hāng tāi-tsì lóng beh tsìnn-tsò-tsîng.",
  },
  {
    hanji: "阿滿仔，你當時欲娶新婦？",
    tailo: "A-buán--á, lí tang-sî beh tshuā-sin-pū?",
  },
  {
    hanji: "伊講白賊去予阿母搧喙䫌。",
    tailo: "I kóng-pe̍h-tsha̍t khì hōo a-bú siàn-tshuì-phué.",
  },
  {
    hanji: "伊定定來遮，我不時佇路裡搪著。",
    tailo: "I tiānn-tiānn lâi tsia, guá put-sî tī lōo--lí  tn̄g--tio̍h.",
  },
  {
    hanji: "這擺的地動佳哉攏無造成損傷。",
    tailo: "Tsit pái ê tē-tāng ka-tsài lóng bô tsō-sîng sún-siong.",
  },
  {
    hanji: "為著一屑仔錢佇街仔路搝搝搦搦，敢會看口得？",
    tailo:
      "Uī-tio̍h tsi̍t-sut-á tsînn tī ke-á-lōo khiú-khiú-la̍k-la̍k, kám ē-khuànn-kháu--tit?",
  },
  {
    hanji: "你毋通烏白搬話，害人拍歹感情。",
    tailo: "Lí m̄-thang oo-pe̍h puann-uē, hāi lâng phah-pháinn kám-tsîng.",
  },
  {
    hanji: "這个問題真專業，愛搬請專家來提供意見。",
    tailo:
      "Tsit ê būn-tê tsin tsuan-gia̍p, ài puann-tshiánn tsuan-ka lâi thê-kiong ì-kiàn.",
  },
  {
    hanji: "山頂彼陣猴定定落山來損蕩人的果子園。",
    tailo:
      "Suann-tíng hit tīn kâu tiānn-tiānn lo̍h-suann lâi sńg-tn̄g lâng ê kué-tsí-hn̂g.",
  },
  {
    hanji: "伊半暝就去排隊，想欲搶頭香買著上新型的手機仔。",
    tailo:
      "I puànn-mê tō khì pâi-tuī, siūnn-beh tshiúnn-thâu-hiunn bé-tio̍h siōng sin-hîng ê tshiú-ki-á.",
  },
  {
    hanji: "買彩券摃龜的比著獎的較濟。",
    tailo: "Bé tshái-kuàn kòng-ku--ê pí tio̍h-tsióng--ê khah tsē.",
  },
  {
    hanji: "囡仔若搭嚇就會吼袂煞。",
    tailo: "Gín-á nā tah-hiannh tō ē háu bē suah.",
  },
  {
    hanji: "伊閣咧搬戲矣，你毋通予伊騙去！",
    tailo: "I koh teh puann-hì--ah, lí m̄-thang hōo i  phiàn--khì!",
  },
  {
    hanji: "伊穿一軀新點點的洋裝來食喜酒。",
    tailo:
      "I tshīng tsi̍t su sin-tiám-tiám ê iûnn-tsong lâi tsia̍h hí-tsiú.",
  },
  {
    hanji: "人老矣，喙齒攏搖櫓矣。",
    tailo: "Lâng lāu--ah, tshuì-khí lóng iô-lóo--ah.",
  },
  {
    hanji: "若予伊搦權，咱就無伊法。",
    tailo: "Nā hōo i la̍k-khuân, lán tō bô-i-huat.",
  },
  {
    hanji: "伊會食會睏，你免煩惱。",
    tailo: "I ē tsia̍h ē khùn, lí bián huân-ló.",
  },
  {
    hanji: "逐家攏咧會，你敢攏毋知？",
    tailo: "Ta̍k-ke lóng teh huē, lí kám lóng m̄ tsai?",
  },
  {
    hanji: "你去提杉仔柴來共門小楗一下。",
    tailo: "Lí khì the̍h sam-á-tshâ lâi kā mn̂g sió kīng--tsi̍t-ē.",
  },
  {
    hanji: "隔壁的地界一直楦過來。",
    tailo: "Keh-piah ê tē-kài it-ti̍t hùn--kuè-lâi.",
  },
  {
    hanji: "你遮的錢，閣無夠我楔手縫。",
    tailo: "Lí tsia-ê tsînn, koh bô-kàu guá seh-tshiú-phāng.",
  },
  {
    hanji: "伊共你𥍉目，就是暗示你毋通加講話。",
    tailo: "I kā lí nih-ba̍k, tō sī àm-sī lí m̄-thang ke kóng-uē.",
  },
  {
    hanji: "功課寫完，咱就會用得看電視。",
    tailo: "Kong-khò siá-uân, lán tō ē-īng-tit khuànn tiān-sī.",
  },
  {
    hanji: "你這隻暗光鳥，三更半暝矣猶毋睏。",
    tailo:
      "Lí tsit tsiah àm-kong-tsiáu, sann-kenn-puànn-mê--ah iáu m̄ khùn.",
  },
  {
    hanji: "我約伊今仔日中晝佇公園會合，做伙去看櫻花。",
    tailo:
      "Guá iok i kin-á-ji̍t tiong-tàu tī kong-hn̂g huē-ha̍p, tsò-hué khì khuànn ing-hue.",
  },
  {
    hanji: "伊定定用暗步欲陷害人。",
    tailo: "I tiānn-tiānn iōng àm-pōo beh hām-hāi--lâng.",
  },
  {
    hanji: "我功課若寫好就會使去看電影矣。",
    tailo: "Guá kong-khò nā siá-hó tō ē-sái khì khuànn tiān-iánn--ah.",
  },
  {
    hanji: "這項物件閣會使得用，毋通擲掉。",
    tailo: "Tsit hāng mi̍h-kiānn koh ē-sái-tit īng, m̄-thang tàn-tiāu.",
  },
  {
    hanji: "伊提錢欲共警察楔空，警察顛倒共罰較濟錢。",
    tailo:
      "I the̍h tsînn beh kā kíng-tshat seh-khang, kíng-tshat tian-tò kā hua̍t khah tsē tsînn.",
  },
  {
    hanji: "愈落伍的國家，楔後手的現象愈普遍。",
    tailo:
      "Jú lo̍k-ngóo ê kok-ka, seh-āu-tshiú ê hiān-siōng jú phóo-phiàn.",
  },
  {
    hanji: "伊暗崁足濟外路仔做私奇，無予𪜶某知。",
    tailo:
      "I àm-khàm tsiok tsē guā-lōo-á tsò sai-khia, bô hōo in bóo tsai.",
  },
  {
    hanji: "暗時你莫佇外口拋拋走。",
    tailo: "Àm-sî lí mài tī guā-kháu pha-pha-tsáu.",
  },
  {
    hanji: "這馬外口暗眠摸，你閣欲出去？",
    tailo: "Tsit-má guā-kháu àm-bîn-bong, lí koh beh tshut--khì?",
  },
  {
    hanji: "會得過日就好矣，毋免欣羨別人好額。",
    tailo: "Ē-tit kuè-ji̍t tō hó--ah, m̄-bián him-siān pa̍t-lâng hó-gia̍h.",
  },
  {
    hanji: "是伊共我暗示，我才會得通過關。",
    tailo: "Sī i kā guá àm-sī, guá tsiah ē-tit-thang kuè-kuan.",
  },
  {
    hanji: "伊的身體敢會堪得這款粗重的工課？",
    tailo:
      "I ê sin-thé kám ē-kham-tit tsit khuán tshoo-tāng ê khang-khuè?",
  },
  {
    hanji: "第一个要求我會當答應你，第二个我就愛閣考慮一下。",
    tailo:
      "Tē-it ê iau-kiû guá ē-tàng tah-ìng--lí, tē-jī ê guá tō ài koh khó-lī--tsi̍t-ē.",
  },
  {
    hanji: "古董的價數暗漠漠，毋是內行人看無。",
    tailo: "Kóo-tóng ê kè-siàu àm-bo̍k-bo̍k, m̄ sī lāi-hâng-lâng khuànn-bô.",
  },
  {
    hanji: "公園內暗趖趖，看著足恐怖。",
    tailo: "Kong-hn̂g-lāi àm-sô-sô, khuànn tio̍h tsiok khióng-pòo.",
  },
  {
    hanji: "彼種暗毿所在你上好莫去。",
    tailo: "Hit tsióng àm-sàm sóo-tsāi lí siōng-hó mài khì.",
  },
  {
    hanji: "伊有僫對人講起的暗毿病。",
    tailo: "I ū oh tuì lâng kóng-khí ê àm-sàm-pēnn.",
  },
  {
    hanji: "阮翁差不多暗頭仔就會轉來，你閣等一下。",
    tailo:
      "Guán ang tsha-put-to àm-thâu-á tō ē tńg--lâi, lí koh tán--tsi̍t-ē.",
  },
  {
    hanji: "做咧歇咧，欲做到當時？",
    tailo: "Tsò--leh hioh--leh, beh tsò kàu tang-sî?",
  },
  {
    hanji: "目鏡的螺絲溜去，愛去揣螺絲來鎖絚。",
    tailo: "Ba̍k-kiànn ê lôo-si liu--khì, ài khì tshuē lôo-si lâi só-ân.",
  },
  {
    hanji: "這幾日仔落雨，厝內塗跤溡溡。",
    tailo: "Tsit kuí-ji̍t-á lo̍h-hōo, tshù-lāi thôo-kha tshî-tshî.",
  },
  {
    hanji: "溝仔若無清，落大雨的時就會積水。",
    tailo: "Kau-á nā bô tshing, lo̍h tuā-hōo ê sî tō ē tsik-tsuí.",
  },
  {
    hanji: "我的苦勸你若毋聽，就準做我無交你這个朋友。",
    tailo:
      "Guá ê khóo-khǹg lí nā m̄ thiann, tō tsún-tsò guá bô kau lí tsit ê pîng-iú.",
  },
  {
    hanji: "準做你無佮意，嘛毋免共人嫌甲按呢。",
    tailo: "Tsún-tsò lí bô kah-ì, mā m̄-bián kā lâng hiâm kah án-ne.",
  },
  {
    hanji: "等一下歇晝，咱做伙去食飯好無？",
    tailo: "Tán--tsi̍t-ē hioh-tàu, lán tsò-hué khì tsia̍h-pn̄g hó--bô?",
  },
  {
    hanji: "伊佇房間溫習功課，莫共伊吵。",
    tailo: "I tī pâng-king un-si̍p kong-khò, mài kā i tshá.",
  },
  {
    hanji: "我愛準備明仔載的考試。",
    tailo: "Guá ài tsún-pī bîn-á-tsài ê khó-tshì.",
  },
  {
    hanji: "小歇喘一下，我忝甲行袂去矣。",
    tailo: "Sió hioh-tshuán--tsi̍t-ē, guá thiám kah kiânn bē khì--ah.",
  },
  {
    hanji: "阮明仔載就開始歇寒，免去學校上課矣。",
    tailo:
      "Guán bîn-á-tsài tō khai-sí hioh-kuânn, bián khì ha̍k-hāu siōng-khò--ah.",
  },
  {
    hanji: "你歁歁呢，敢佇伊的面頭前講白賊。",
    tailo:
      "Lí khám-khám--neh, kánn tī i ê bīn-thâu-tsîng kóng-pe̍h-tsha̍t.",
  },
  {
    hanji: "這馬的人歲壽加真長，真濟人食甲八、九十歲。",
    tailo:
      "Tsit-má ê lâng huè-siū ke tsin tn̂g, tsin tsē lâng tsia̍h kah peh, káu-tsa̍p huè.",
  },
  {
    hanji: "歲頭遐濟矣，閣遮爾歹性地。",
    tailo: "Huè-thâu hiah tsē--ah, koh tsiah-nī pháinn-sìng-tē.",
  },
  {
    hanji: "伊逐工花天酒地，無偌久就共𪜶老爸放予伊的錢溶了了矣。",
    tailo:
      "I ta̍k-kang hua-thian-tsiú-tē, bô-guā-kú tō kā in lāu-pē pàng hōo--i ê tsînn iûnn-liáu-liáu--ah.",
  },
  {
    hanji: "塗跤真滑，行路愛細膩。",
    tailo: "Thôo-kha tsin ku̍t, kiânn-lōo ài sè-jī.",
  },
  {
    hanji: "氣象報告講會好天煞咧落雨。",
    tailo: "Khì-siōng pò-kò kóng ē hó-thinn suah teh lo̍h-hōo.",
  },
  {
    hanji: "伊走一下傷緊，去煞著矣。",
    tailo: "I tsáu tsi̍t-ē siunn kín, khì sannh--tio̍h--ah.",
  },
  {
    hanji: "伊去煞著彼个查某囡仔。",
    tailo: "I khì sannh-tio̍h hit ê tsa-bóo gín-á.",
  },
  {
    hanji: "蓮藕粉摻糖煡煡咧，真好食。",
    tailo: "Liân-ngāu-hún tsham thn̂g khi̍t-khi̍t--leh, tsin hó-tsia̍h.",
  },
  {
    hanji: "看著貴重的物件伊就煞心。",
    tailo: "Khuànn-tio̍h kuì-tiōng ê mi̍h-kiānn i tō sannh-sim.",
  },
  {
    hanji: "過去的代誌就準煞去，你莫閣想矣。",
    tailo: "Kuè-khì ê tāi-tsì tō tsún suah--khì, lí mài koh siūnn--ah.",
  },
  {
    hanji: "你若有代誌你先走，遮予我來煞尾。",
    tailo: "Lí nā ū tāi-tsì lí sing tsáu, tsia hōo guá lâi suah-bué.",
  },
  {
    hanji: "較早的人定定用肥豬肉來煏油。",
    tailo: "Khah-tsá ê lâng tiānn-tiānn īng puî ti-bah lâi piak-iû.",
  },
  {
    hanji: "你較細膩咧，毋通滑倒。",
    tailo: "Lí khah sè-jī--leh, m̄-thang ku̍t--tó.",
  },
  {
    hanji: "伊人面闊，交陪濟，結婚的時辦百二桌竟然閣煏桌。",
    tailo:
      "I lâng-bīn khuah, kau-puê tsē, kiat-hun ê sî pān pah-jī toh kìng-jiân koh piak-toh.",
  },
  {
    hanji: "古早有人認為破病是因為犯著煞神。",
    tailo: "Kóo-tsá ū lâng jīn-uî phuà-pēnn sī in-uī huān-tio̍h suah-sîn.",
  },
  {
    hanji: "人客欲來矣，你緊去煎茶來款待。",
    tailo: "Lâng-kheh beh lâi--ah, lí kín khì tsuann tê lâi khuán-thāi.",
  },
  {
    hanji: "囡仔煞著就愛𤆬去予人收驚。",
    tailo: "Gín-á suah--tio̍h tō ài tshuā-khì hōo lâng siu-kiann.",
  },
  {
    hanji: "你行路愛細膩，塗跤滑溜溜。",
    tailo: "Lí kiânn-lōo ài sè-jī, thôo-kha ku̍t-liu-liu.",
  },
  {
    hanji: "等戲煞鼓咱來去食宵夜。",
    tailo: "Tán hì suah-kóo lán lâi-khì tsia̍h siau-iā.",
  },
  {
    hanji: "𪜶煞鼓了後就無閣見面。",
    tailo: "In suah-kóo liáu-āu tō bô koh kìnn-bīn.",
  },
  {
    hanji: "煞戲了後，我就送你轉去。",
    tailo: "Suah-hì liáu-āu, guá tō sàng lí tńg--khì.",
  },
  {
    hanji: "若照按呢落去，代誌就毋好矣。",
    tailo: "Nā tsiàu án-ne lo̍h--khì, tāi-tsì tō m̄ hó--ah.",
  },
  {
    hanji: "你罰款無繳，會予人吊照。",
    tailo: "Lí hua̍t-khuán bô kiáu, ē hōo lâng tiàu tsiàu.",
  },
  {
    hanji: "咱照呼照行，你莫想欲變鬼變怪。",
    tailo:
      "Lán tsiàu-hoo-tsiàu-kiânn, lí mài siūnn-beh pìnn-kuí-pìnn-kuài.",
  },
  {
    hanji: "你做代誌嘛較照起工咧，莫定定想欲偷食步。",
    tailo:
      "Lí tsò tāi-tsì mā khah tsiàu-khí-kang--leh, mài tiānn-tiānn siūnn-beh thau-tsia̍h-pōo.",
  },
  {
    hanji: "過年時仔這間店照常營業。",
    tailo: "Kuè-nî-sî-á tsit king tiàm tsiàu-siông îng-gia̍p.",
  },
  {
    hanji: "醫生講伊無要緊，你毋免煩惱啦！",
    tailo: "I-sing kóng i bô iàu-kín, lí m̄-bián huân-ló--lah!",
  },
  {
    hanji: "這件代誌你著愛照實講。",
    tailo: "Tsit kiānn tāi-tsì lí tio̍h-ài tsiàu-si̍t kóng.",
  },
  {
    hanji: "照講我按呢做應該無毋著，哪會失敗咧？",
    tailo:
      "Tsiàu-kóng guá án-ne tsò ing-kai bô m̄-tio̍h, ná ē sit-pāi--leh?",
  },
  {
    hanji: "出門進前先照鏡，看衫穿有好勢無。",
    tailo:
      "Tshut-mn̂g tsìn-tsîng sing tsiò-kiànn, khuànn sann tshīng ū hó-sè--bô.",
  },
  {
    hanji: "家己先照鏡看覓咧，才袂卸世眾。",
    tailo:
      "Ka-kī sing tsiò-kiànn khuànn-māi--leh, tsiah bē sià-sì-tsìng.",
  },
  {
    hanji: "幼囡仔需要爸母全心的照顧。",
    tailo: "Iù-gín-á su-iàu pē-bú tsuân-sim ê tsiàu-kòo.",
  },
  {
    hanji: "我當天咒誓，絕對無騙你。",
    tailo: "Guá tng thinn tsiù-tsuā, tsua̍t-tuì bô phiàn--lí.",
  },
  {
    hanji: "你敢敢當我的面佮伊對指？",
    tailo: "Lí kám kánn tng guá ê bīn kah i tuì-tsí?",
  },
  {
    hanji: "你是對伊按怎？伊哪會一直共你睨？",
    tailo: "Lí sī tuì i án-tsuánn? I ná ē it-ti̍t kā lí gîn?",
  },
  {
    hanji: "伊生做矮矮，袂講蓋懸。",
    tailo: "I senn-tsò é-é, bē kóng kài kuân.",
  },
  {
    hanji: "彼个囡仔規身軀攏生痱仔。",
    tailo: "Hit ê gín-á kui-sin-khu lóng senn puì-á.",
  },
  {
    hanji: "花蓮當地的風景袂䆀，咱另工做伙來去𨑨迌。",
    tailo:
      "Hua-liân tong-tē ê hong-kíng bē-bái, lán līng-kang tsò-hué lâi-khì tshit-thô.",
  },
  {
    hanji: "當年恁阿爸做生理趁足濟錢。",
    tailo: "Tong-nî lín a-pah tsò-sing-lí thàn tsiok tsē tsînn.",
  },
  {
    hanji: "當初遮一片攏是田，這馬攏起樓仔厝矣！",
    tailo:
      "Tong-tshoo tsia tsi̍t phiàn lóng sī tshân, tsit-má lóng khí lâu-á-tshù--ah!",
  },
  {
    hanji: "我若毋是欠錢，哪著行當店？",
    tailo: "Guá nā m̄ sī khiàm tsînn, ná-tio̍h kiânn tǹg-tiàm?",
  },
  {
    hanji: "伊雖然人生做矮肥矮肥，毋過跤手真扭掠。",
    tailo:
      "I sui-jiân lâng senn-tsò é-puî-é-puî, m̄-koh kha-tshiú tsin liú-lia̍h.",
  },
  {
    hanji: "我當咧無閒，你莫共我吵。",
    tailo: "Guá tng-teh bô-îng, lí mài kā guá tshá.",
  },
  {
    hanji: "我會當面共物件交予伊。",
    tailo: "Guá ē tng-bīn kā mi̍h-kiānn kau hōo--i.",
  },
  {
    hanji: "你穿甲遐清涼，毋驚去拄著痴哥？",
    tailo:
      "Lí tshīng kah hiah tshing-liâng, m̄ kiann khì tú-tio̍h tshi-ko?",
  },
  {
    hanji: "當時囡仔攏猶細漢，愛搦屎搦尿。",
    tailo: "Tong-sî gín-á lóng iáu sè-hàn, ài la̍k-sái-la̍k-jiō.",
  },
  {
    hanji: "阿麗生做遐妖嬌，真濟人為伊痴迷。",
    tailo: "A-lē senn-tsò hiah iau-kiau, tsin tsē lâng uī i tshi-bê.",
  },
  {
    hanji: "我共你當做是上好的朋友。",
    tailo: "Guá kā lí tòng-tsò sī siōng hó ê pîng-iú.",
  },
  {
    hanji: "伊古意煞予人當做戇呆。",
    tailo: "I kóo-ì suah hōo lâng tòng-tsò gōng-tai.",
  },
  {
    hanji: "阿英予伊的痴情感動，尾仔決定欲嫁伊。",
    tailo:
      "A-ing hōo i ê tshi-tsîng kám-tōng, bué--á kuat-tīng beh kè--i.",
  },
  {
    hanji: "當票若無去，你的金鍊仔就提袂轉來矣。",
    tailo:
      "Tǹg-phiò nā bô--khì, lí ê kim-liān-á tō the̍h bē tńg--lâi--ah.",
  },
  {
    hanji: "我當場就佮伊大細聲嚷。",
    tailo: "Guá tong-tiûnn tō kah i tuā-sè-siann jiáng.",
  },
  {
    hanji: "用心拍拚做生理，久來當然趁大錢。",
    tailo:
      "Iōng-sim phah-piànn tsò-sing-lí, kú--lâi tong-jiân thàn-tuā-tsînn.",
  },
  {
    hanji: "當頭白日你就毋通講白賊。",
    tailo: "Tng-thâu-pe̍h-ji̍t lí tō m̄-thang kóng-pe̍h-tsha̍t.",
  },
  {
    hanji: "逐家當頭對面共話講予清楚！",
    tailo: "Ta̍k-ke tng-thâu-tuì-bīn kā uē kóng hōo tshing-tshó!",
  },
  {
    hanji: "去提一塊碗公來貯菜頭湯。",
    tailo: "Khì the̍h tsi̍t tè uánn-kong lâi té tshài-thâu-thng.",
  },
  {
    hanji: "學泅水進前愛先學禁氣。",
    tailo: "O̍h siû-tsuí tsìn-tsîng ài sing o̍h kìm-khuì.",
  },
  {
    hanji: "叫你較細膩咧你就無愛，這馬食碰釘矣乎。",
    tailo:
      "Kiò lí khah sè-jī--leh lí tō bô ài, tsit-má tsia̍h-phòng-ting--ah--honnh.",
  },
  {
    hanji: "這擺的代誌做了無啥順利，才會去予人碰釘。",
    tailo:
      "Tsit pái ê tāi-tsì tsò liáu bô siánn sūn-lī, tsiah ē khì hōo lâng phòng-ting.",
  },
  {
    hanji: "你身體無蓋好，有一寡物件著愛較禁喙咧。",
    tailo:
      "Lí sin-thé bô kài hó, ū tsi̍t-kuá mi̍h-kiānn tio̍h-ài khah kìm-tshuì--leh.",
  },
  {
    hanji: "兩翁仔某冤家，碗盤摔甲碎糊糊。",
    tailo: "Nn̄g ang-á-bóo uan-ke, uánn-puânn siak kah tshuì-kôo-kôo.",
  },
  {
    hanji: "你驚碰壁毋敢開喙求人，按呢永遠都袂成功。",
    tailo:
      "Lí kiann pōng-piah m̄ kánn khui-tshuì kiû--lâng, án-ne íng-uán to bē sîng-kong.",
  },
  {
    hanji: "你是咧講啥物碗糕？我哪會聽攏無？",
    tailo: "Lí sī teh kóng siánn-mih uánn-ko? Guá ná ē thiann lóng bô?",
  },
  {
    hanji: "伊竟然做出這款代誌，實在是禽獸不如。",
    tailo:
      "I kìng-jiân tsò-tshut tsit khuán tāi-tsì, si̍t-tsāi sī khîm-siù put-jû.",
  },
  {
    hanji: "風吹線經佇電火柱仔頂懸。",
    tailo: "Hong-tshue suànn kenn tī tiān-hué-thiāu-á tíng-kuân.",
  },
  {
    hanji: "開門愛小節力一下，毋通傷大聲。",
    tailo: "Khui-mn̂g ài sió tsat-la̍t--tsi̍t-ē, m̄-thang siunn tuā-siann.",
  },
  {
    hanji: "有囡仔佇身軀邊經跤經手欲哪做有工課？",
    tailo:
      "Ū gín-á tī sin-khu-pinn kenn-kha-kenn-tshiú beh ná tsò ū khang-khuè?",
  },
  {
    hanji: "經過這擺的車禍，伊這馬出門加足斟酌的。",
    tailo:
      "King-kuè tsit pái ê tshia-hō, i tsit-má tshut-mn̂g ke tsiok tsim-tsiok--ê.",
  },
  {
    hanji: "你愛共代誌的經過詳細講予我知。",
    tailo: "Lí ài kā tāi-tsì ê king-kuè siông-sè kóng hōo guá tsai.",
  },
  {
    hanji: "一屑仔工課做甲艱苦罪過。",
    tailo: "Tsi̍t-sut-á khang-khuè tsò kah kan-khóo-tsē-kuà.",
  },
  {
    hanji: "透早就罩霧，駛車愛細膩。",
    tailo: "Thàu-tsá tō tà-bū, sái-tshia ài sè-jī.",
  },
  {
    hanji: "我無這款經驗，請你共我指教。",
    tailo: "Guá bô tsit khuán king-giām, tshiánn lí kā guá tsí-kàu.",
  },
  {
    hanji: "伊的喙真聖，見講見對。",
    tailo: "I ê tshuì tsin siànn, kiàn kóng kiàn tuì.",
  },
  {
    hanji: "你的手指頭仔有幾个腡？",
    tailo: "Lí ê tshiú-tsíng-thâu-á ū kuí ê lê?",
  },
  {
    hanji: "伊的頭挵著壁，腫一癗。",
    tailo: "I ê thâu lòng-tio̍h piah, tsíng tsi̍t luî.",
  },
  {
    hanji: "伊這擺的考試落幾若名。",
    tailo: "I tsit pái ê khó-tshì lak kuí-nā miâ.",
  },
  {
    hanji: "我的錢毋知落去佗位矣？",
    tailo: "Guá ê tsînn m̄ tsai lak-khì tó-uī--ah?",
  },
  {
    hanji: "伊逐改佮我講話攏愛落英語。",
    tailo: "I ta̍k kái kah guá kóng-uē lóng ài làu Ing-gí.",
  },
  {
    hanji: "伊食歹腹肚，落甲足嚴重的。",
    tailo: "I tsia̍h pháinn pak-tóo, làu kah tsiok giâm-tiōng--ê.",
  },
  {
    hanji: "伊予人欺負，毋甘願，就轉去落人來報冤。",
    tailo:
      "I hōo lâng khi-hū, m̄ kam-guān, tō tńg-khì làu-lâng lâi pò-uan.",
  },
  {
    hanji: "萬一伊若知影這件代誌，一定會起性地。",
    tailo:
      "Bān-it i nā tsai-iánn tsit kiānn tāi-tsì, it-tīng ē khí-sìng-tē.",
  },
  {
    hanji: "我聽你咧落下頦，錢明明就是你提的，閣諍無。",
    tailo:
      "Guá thiann lí teh làu-ē-hâi, tsînn bîng-bîng tō sī lí the̍h--ê, koh tsènn bô.",
  },
  {
    hanji: "伊干焦會曉臭彈，其實腹內無膏。",
    tailo: "I kan-na ē-hiáu tshàu-tuānn, kî-si̍t pak-lāi bô ko.",
  },
  {
    hanji: "我是萬不得已，才會來拜託你。",
    tailo: "Guá sī bān-put-tik-í, tsiah ē lâi pài-thok--lí.",
  },
  {
    hanji: "代誌欲對佗位落手才好？",
    tailo: "Tāi-tsì beh tuì tó-uī lo̍h-tshiú tsiah hó?",
  },
  {
    hanji: "落水平平沉，全無重頭輕。",
    tailo: "Lo̍h-tsuí pênn-pênn tîm, tsuân bô tāng-thâu-khin.",
  },
  {
    hanji: "做歹代誌會萬世袂當超生。",
    tailo: "Tsò pháinn tāi-tsì ē bān-sè bē-tàng tshiau-sing.",
  },
  {
    hanji: "這副金框的目鏡煞會落色。",
    tailo: "Tsit hù kim khing ê ba̍k-kiànn suah ē lak-sik.",
  },
  {
    hanji: "這本冊一千箍無人買，落尾手開七百箍才賣出去。",
    tailo:
      "Tsit pún tsheh tsi̍t-tshing khoo bô lâng bé, lo̍h-bué-tshiú khui tshit-pah khoo tsiah bē--tshut-khì.",
  },
  {
    hanji: "你無代無誌哪會腹肚疼？",
    tailo: "Lí bô-tāi-bô-tsì ná ē pak-tóo thiànn?",
  },
  {
    hanji: "物件囥咧，人落來就好。",
    tailo: "Mi̍h-kiānn khǹg--leh, lâng lo̍h--lâi tō hó.",
  },
  {
    hanji: "這頁落來就毋免閣看矣。",
    tailo: "Tsit ia̍h lo̍h--lâi tō m̄-bián koh khuànn--ah.",
  },
  {
    hanji: "伊跋落去山跤閣無死，真正是萬幸！",
    tailo: "I pua̍h lo̍h-khì suann-kha koh bô sí, tsin-tsiànn sī bān-hīng!",
  },
  {
    hanji: "我才臆伊無欲來，聖拄聖，伊就敲電話講欲請假矣。",
    tailo:
      "Guá tsiah ioh i bô beh lâi, siànn-tú-siànn, i tō khà tiān-uē kóng beh tshíng-ká--ah.",
  },
  {
    hanji: "我已經派一台車落空逝去接貨矣。",
    tailo:
      "Guá í-king phài tsi̍t tâi tshia làu-khang-tsuā khì tsiap huè--ah.",
  },
  {
    hanji: "果子欉無落肥收成袂好。",
    tailo: "Kué-tsí-tsâng bô lo̍h-puî siu-sîng bē hó.",
  },
  {
    hanji: "外口咧落雨，等雨停才來去。",
    tailo: "Guā-kháu teh lo̍h-hōo, tán hōo thîng tsiah lâi-khì.",
  },
  {
    hanji: "你是食歹腹肚呢？無，哪會一直落屎？",
    tailo: "Lí sī tsia̍h pháinn pak-tóo--nih? Bô, ná ē it-ti̍t làu-sái?",
  },
  {
    hanji: "伊哪會遐爾仔落屎馬，連這件代誌嘛做袂好。",
    tailo:
      "I ná ē hiah-nī-á làu-sái-bé, liân tsit kiānn tāi-tsì mā tsò bē hó.",
  },
  {
    hanji: "阮落後日欲來去下港𨑨迌。",
    tailo: "Guán loh-āu--ji̍t beh lâi-khì ē-káng tshit-thô.",
  },
  {
    hanji: "𪜶按算落後年欲出國留學。",
    tailo: "In àn-sǹg loh-āu--nî beh tshut-kok liû-ha̍k.",
  },
  {
    hanji: "伊落昨日才對歐洲轉來。",
    tailo: "I loh-tso̍h--ji̍t tsiah tuì Au-tsiu tńg--lâi.",
  },
  {
    hanji: "有身的人愛細膩，才袂落胎。",
    tailo: "Ū-sin ê lâng ài sè-jī, tsiah bē làu-the.",
  },
  {
    hanji: "毋知佗一个夭壽人共我的車輪落風。",
    tailo: "M̄ tsai tó tsi̍t ê iáu-siū lâng kā guá ê tshia-lián làu-hong.",
  },
  {
    hanji: "萬般皆是命，半點不由人。",
    tailo: "Bān-puann kai sī miā, puàn-tiám put iû jîn.",
  },
  {
    hanji: "逐日作穡作甲腰脊骨強欲折去。",
    tailo: "Ta̍k-ji̍t tsoh-sit tsoh kah io-tsiah-kut kiōng-beh tsi̍h--khì.",
  },
  {
    hanji: "伊這站仔當咧落衰，逐項代誌都做袂順。",
    tailo:
      "I tsit-tsām-á tng-teh lo̍h-sue, ta̍k hāng tāi-tsì to tsò bē sūn.",
  },
  {
    hanji: "遮的路真滑，你落崎愛較細膩咧。",
    tailo: "Tsia ê lōo tsin ku̍t, lí lo̍h-kiā ài khah sè-jī--leh.",
  },
  {
    hanji: "伊今年傷放蕩，予先生共伊落第。",
    tailo: "I kin-nî siunn hòng-tōng, hōo sian-sinn kā i lo̍k-tē.",
  },
  {
    hanji: "伊這擺大學考試落第，明年仔愛重考。",
    tailo: "I tsit pái tāi-ha̍k khó-tshì lo̍k-tē, mê-nî-á ài tîng khó.",
  },
  {
    hanji: "船到碼頭，逐家攏準備欲落船。",
    tailo: "Tsûn kàu bé-thâu, ta̍k-ke lóng tsún-pī beh lo̍h-tsûn.",
  },
  {
    hanji: "伊已經落軟矣，你就原諒伊。",
    tailo: "I í-king lo̍h-nńg--ah, lí tō guân-liōng--i.",
  },
  {
    hanji: "臺灣較懸的山頂寒天會落雪。",
    tailo: "Tâi-uân khah kuân ê suann-tíng kuânn-thinn ē lo̍h-seh.",
  },
  {
    hanji: "我去清田溝，無細膩煞落湳。",
    tailo: "Guá khì tshing tshân-kau, bô-sè-jī suah lo̍h-làm.",
  },
  {
    hanji: "你照我的話做，保證你萬無一失。",
    tailo: "Lí tsiàu guá ê uē tsò, pó-tsìng lí bān-bû-it-sit.",
  },
  {
    hanji: "我看伊的腦筋無啥清楚，莫問伊較好。",
    tailo:
      "Guá khuànn i ê náu-kin bô siánn tshing-tshó, mài mn̄g--i khah hó.",
  },
  {
    hanji: "伊車禍去挵著頭，傷著腦筋。",
    tailo: "I tshia-hō khì lòng-tio̍h thâu, siong-tio̍h náu-kin.",
  },
  {
    hanji: "伊萬項代誌攏愛人鬥相共。",
    tailo: "I bān-hāng tāi-tsì lóng ài lâng tàu-sann-kāng.",
  },
  {
    hanji: "雞屎落塗，也有三寸煙。",
    tailo: "Ke-sái lo̍h-thôo, iā ū sann tshùn ian.",
  },
  {
    hanji: "伊軟跤，無法度落塗行路。",
    tailo: "I nńg-kha, bô-huat-tōo lo̍h-thôo kiânn-lōo.",
  },
  {
    hanji: "你的褲敢是刁工穿甲落落的？",
    tailo: "Lí ê khòo kám-sī thiau-kang tshīng kah làu-làu--ê?",
  },
  {
    hanji: "阿福伯的喪事是午時弔祭，申時落葬。",
    tailo: "A-hok peh ê song-sū sī ngóo-sî tiàu-tsè, sin-sî lo̍h-tsòng.",
  },
  {
    hanji: "這馬景氣䆀，物件攏咧落價。",
    tailo: "Tsit-má kíng-khì bái, mi̍h-kiānn lóng teh lo̍h-kè.",
  },
  {
    hanji: "伊腳數袂䆀，有代誌攏伊咧出頭。",
    tailo: "I kioh-siàu bē-bái, ū tāi-tsì lóng i teh tshut-thâu.",
  },
  {
    hanji: "伊彼站仔是上落魄的時陣。",
    tailo: "I hit-tsām-á sī siōng lo̍k-phik ê sî-tsūn.",
  },
  {
    hanji: "代誌舞甲按呢，這聲腫頷矣！",
    tailo: "Tāi-tsì bú kah án-ne, tsit-siann tsíng-ām--ah!",
  },
  {
    hanji: "敢是有人客欲來？下暗哪會煮甲遮爾仔腥臊？",
    tailo:
      "Kám-sī ū lâng-kheh beh lâi? E-àm ná ē tsú kah tsiah-nī-á tshenn-tshau?",
  },
  {
    hanji: "伊當咧落難，真需要人鬥相共。",
    tailo: "I tng-teh lo̍h-lān, tsin su-iàu lâng tàu-sann-kāng.",
  },
  {
    hanji: "這馬真少人用葵扇咧擛風矣。",
    tailo: "Tsit-má tsin tsió lâng iōng khuê-sìnn teh ia̍t-hong--ah.",
  },
  {
    hanji: "我袂記得伊號做啥物名。",
    tailo: "Guá bē-kì-tit i hō-tsò siánn-mih miâ.",
  },
  {
    hanji: "今仔日是補冬，菜市仔足濟人咧買番鴨。",
    tailo:
      "Kin-á-ji̍t sī póo-tang, tshài-tshī-á tsiok tsē lâng teh bé huan-ah.",
  },
  {
    hanji: "伊不時提錢補助散赤的學生。",
    tailo: "I put-sî the̍h tsînn póo-tsōo sàn-tshiah ê ha̍k-sing.",
  },
  {
    hanji: "簾簷跤有一个蜂岫，愛想辦法共挽掉。",
    tailo:
      "Nî-tsînn-kha ū tsi̍t ê phang-siū, ài siūnn pān-huat kā bán-tiāu.",
  },
  {
    hanji: "我已經泡一杯厚茶欲予你解酒。",
    tailo: "Guá í-king phàu tsi̍t pue kāu tê beh hōo lí kái-tsiú.",
  },
  {
    hanji: "愛來去賣場補添一寡日用品！",
    tailo: "Ài lâi-khì bē-tiûnn póo-thiam tsi̍t-kuá ji̍t-iōng-phín!",
  },
  {
    hanji: "小可仔代誌莫一直詬詬唸。",
    tailo: "Sió-khuá-á tāi-tsì mài it-ti̍t kāu-kāu-liām.",
  },
  {
    hanji: "老師咧共學生囡仔解說這層歷史事件。",
    tailo:
      "Lāu-su teh kā ha̍k-sing gín-á kái-sueh tsit tsân li̍k-sú sū-kiānn.",
  },
  {
    hanji: "我已經足見笑矣，你莫閣詼矣啦！",
    tailo: "Guá í-king tsiok kiàn-siàu--ah, lí mài koh khue--ah--lah!",
  },
  {
    hanji: "毋是我咧誇口，阮阿舅佇臺中，逐个人攏捌伊。",
    tailo:
      "M̄ sī guá teh khua-kháu, guán a-kū tī Tâi-tiong, ta̍k ê lâng lóng bat--i.",
  },
  {
    hanji: "彼个賊仔予警察掠著矣。",
    tailo: "Hit ê tsha̍t-á hōo kíng-tshat lia̍h--tio̍h--ah.",
  },
  {
    hanji: "伊做人的跤仔，𪜶老大的叫伊創啥，伊就創啥。",
    tailo:
      "I tsò lâng ê kha-á, in láu-tuā--ê kiò i tshòng siannh, i tō tshòng siannh.",
  },
  {
    hanji: "看伊按呢跤尖手幼，是做無代誌的。",
    tailo: "Khuànn i án-ne kha-tsiam-tshiú-iù, sī tsò bô tāi-tsì--ê.",
  },
  {
    hanji: "該死啊！我共錢拍無去矣！",
    tailo: "Kai-sí--ah! Guá kā tsînn phah-bô--khì--ah!",
  },
  {
    hanji: "人講話頭咱著愛知話尾。",
    tailo: "Lâng kóng uē-thâu lán tio̍h-ài tsai uē-bué.",
  },
  {
    hanji: "跤步踏差啥人無？只要改過就好矣。",
    tailo: "Kha-pōo ta̍h-tsha siánn-lâng bô? Tsí-iàu kái-kò tō hó--ah.",
  },
  {
    hanji: "伊差不多五十歲彼跤兜。",
    tailo: "I tsha-put-to gōo-tsa̍p huè hit kha-tau.",
  },
  {
    hanji: "你哪會遮爾跤梢？連這曷袂曉。",
    tailo: "Lí ná ē tsiah-nī kha-sau? Liân tse a̍h bē-hiáu.",
  },
  {
    hanji: "伊遐爾跤梢，佮人袂比得。",
    tailo: "I hiah-nī kha-sau, kah lâng bē-pí--tit.",
  },
  {
    hanji: "買遮的跤梢貨，無一个會用得。",
    tailo: "Bé tsia-ê kha-sau huè, bô tsi̍t ê ē-īng--tit.",
  },
  {
    hanji: "行路毋行好勢，跋倒是該然的。",
    tailo: "Kiânn-lōo m̄ kiânn hó-sè, pua̍h-tó sī kai-jiân--ê.",
  },
  {
    hanji: "我的錯誤造成你的損失，來共你會失禮是該然的。",
    tailo:
      "Guá ê tshò-gōo tsō-sîng lí ê sún-sit, lâi kā lí huē-sit-lé sī kai-jiân--ê.",
  },
  {
    hanji: "我是真有誠意欲佮你做朋友。",
    tailo: "Guá sī tsin ū sîng-ì beh kah lí tsò pîng-iú.",
  },
  {
    hanji: "這該當是愛予你的，請毋通推辭。",
    tailo: "Tse kai-tong sī ài hōo--lí--ê, tshiánn m̄-thang the-sî.",
  },
  {
    hanji: "你講風颱欲來，敢是誠實的？",
    tailo: "Lí kóng hong-thai beh lâi, kám-sī tsiânn-si̍t--ê?",
  },
  {
    hanji: "囡仔人較𠢕纏，老母行到佗位，伊就跟綴到佗位。",
    tailo:
      "Gín-á-lâng khah gâu tînn, lāu-bú kiânn kàu tó-uī, i tō kin-tuè kàu tó-uī.",
  },
  {
    hanji: "你袂輸伊的跟綴，伊行到佗，你就綴到佗。",
    tailo: "Lí bē-su i ê kin-tuè, i kiânn kàu toh, lí tō tuè kàu toh.",
  },
  {
    hanji: "你想欲知影我佮伊是按怎熟似？這講起來就話頭長。",
    tailo:
      "Lí siūnn-beh tsai-iánn guá kah i sī án-tsuánn si̍k-sāi? Tse kóng--khí-lâi tō uē-thâu tn̂g.",
  },
  {
    hanji: "伊逐改攏愛鑽我的話縫。",
    tailo: "I ta̍k kái lóng ài tsǹg guá ê uē-phāng.",
  },
  {
    hanji: "我是按怎愛軁你的跤縫？",
    tailo: "Guá sī-án-tsuánn ài nǹg lí ê kha-phāng?",
  },
  {
    hanji: "電視頂懸的字跳咧跳咧，看袂清。",
    tailo:
      "Tiān-sī tíng-kuân ê jī thiàu--leh thiàu--leh, khuànn bē tshing.",
  },
  {
    hanji: "這枝柱仔傷細枝，載無法得。",
    tailo: "Tsit ki thiāu-á siunn sè ki, tsài bô-huat--tit.",
  },
  {
    hanji: "伊自細漢就過予𪜶阿姑。",
    tailo: "I tsū sè-hàn tō kuè hōo in a-koo.",
  },
  {
    hanji: "這擺的風颱袂來較大面。",
    tailo: "Tsit pái ê hong-thai bē lâi khah-tuā-bīn.",
  },
  {
    hanji: "物件若予伊提過手，伊就毋還人矣。",
    tailo: "Mi̍h-kiānn nā hōo i the̍h kuè-tshiú, i tō m̄ hîng--lâng--ah.",
  },
  {
    hanji: "這馬景氣無好，較歹過日。",
    tailo: "Tsit-má kíng-khì bô hó, khah pháinn kuè-ji̍t.",
  },
  {
    hanji: "果子毋採收，攏過水去矣。",
    tailo: "Kué-tsí m̄ tshái-siu, lóng kuè-tsuí--khì--ah.",
  },
  {
    hanji: "炒菜的時，毋通炒了傷過火。",
    tailo: "Tshá tshài ê sî, m̄-thang tshá liáu siunn kuè-hué.",
  },
  {
    hanji: "你寒天出門毋穿外套，較加嘛會感冒。",
    tailo:
      "Lí kuânn-thinn tshut-mn̂g m̄ tshīng guā-thò, khah-ke mā ē kám-mōo.",
  },
  {
    hanji: "代誌已經過去矣，你毋免閣問矣。",
    tailo: "Tāi-tsì í-king kuè--khì--ah, lí m̄-bián koh mn̄g--ah.",
  },
  {
    hanji: "伊遐爾仔少歲就來過身，實在予人想袂到。",
    tailo:
      "I hiah-nī-á tsió-huè tō lâi kuè-sin, si̍t-tsāi hōo lâng siūnn-bē-kàu.",
  },
  {
    hanji: "每一个人的運命攏無仝款。",
    tailo: "Muí tsi̍t ê lâng ê ūn-miā lóng bô kāng-khuán.",
  },
  {
    hanji: "過往發生的代誌，莫閣去想矣。",
    tailo: "Kuè-óng huat-sing ê tāi-tsì, mài koh khì siūnn--ah.",
  },
  {
    hanji: "恁查某囝啥物時陣欲過門？",
    tailo: "Lín tsa-bóo-kiánn siánn-mih sî-tsūn beh kuè-mn̂g?",
  },
  {
    hanji: "代誌過後，就莫閣提起。",
    tailo: "Tāi-tsì kuè-āu, tō mài koh thê-khí.",
  },
  {
    hanji: "你這个路旁屍！開車挵著人就想欲走？",
    tailo:
      "Lí tsit ê lōo-pông-si! Khui-tshia lòng-tio̍h lâng tō siūnn-beh tsáu?",
  },
  {
    hanji: "運氣若到，擋都擋袂牢。",
    tailo: "Ūn-khì nā kàu, tòng to tòng bē tiâu.",
  },
  {
    hanji: "伊較停仔若轉來，才共遮的物件交予伊。",
    tailo:
      "I khah-thîng-á nā tńg--lâi, tsiah kā tsia-ê mi̍h-kiānn kau hōo--i.",
  },
  {
    hanji: "這件代誌請你共我運動一下。",
    tailo: "Tsit kiānn tāi-tsì tshiánn lí kā guá ūn-tōng--tsi̍t-ē.",
  },
  {
    hanji: "啥物人講講話大聲就贏？無這款道理啦！",
    tailo:
      "Siánn-mih-lâng kóng kóng-uē tuā-siann tō iânn? Bô tsit khuán tō-lí--lah!",
  },
  {
    hanji: "這只是暫時過渡，逐家較忍耐咧。",
    tailo: "Tse tsí-sī tsiām-sî kuè-tōo, ta̍k-ke khah jím-nāi--leh.",
  },
  {
    hanji: "對遮到淡水有偌遠的路程？",
    tailo: "Tuì tsia kàu Tām-tsuí ū guā hn̄g ê lōo-tîng?",
  },
  {
    hanji: "𪜶昨昏佇會場遇著老朋友。",
    tailo: "In tsa-hng tī huē-tiûnn gū-tio̍h lāu-pîng-iú.",
  },
  {
    hanji: "伊就是遐爾拍拚，毋才會成功。",
    tailo: "I tō sī hiah-nī phah-piànn, m̄-tsiah ē sîng-kong.",
  },
  {
    hanji: "伊生做遐爾仔媠，逐伊的人是窒倒街。",
    tailo: "I senn-tsò hiah-nī-á suí, jiok--i ê lâng sī that-tó-ke.",
  },
  {
    hanji: "這箱梨仔愛先提去過磅。",
    tailo: "Tsit siunn lâi-á ài sing the̍h-khì kuè-pōng.",
  },
  {
    hanji: "酒若啉過磅，對身體無好。",
    tailo: "Tsiú nā lim kuè-pōng, tuì sin-thé bô hó.",
  },
  {
    hanji: "你連這點仔道理都毋捌，較輸一个無讀冊的。",
    tailo:
      "Lí liân tsit-tiám-á tō-lí to m̄ bat, khah-su tsi̍t ê bô tha̍k-tsheh--ê.",
  },
  {
    hanji: "路頭遠，你家己著愛保重。",
    tailo: "Lōo-thâu hn̄g, lí ka-kī tio̍h-ài pó-tiōng.",
  },
  {
    hanji: "路頭擔燈心，路尾擔鐵槌。",
    tailo: "Lōo-thâu tann ting-sim, lōo-bué tann thih-thuî.",
  },
  {
    hanji: "你講了傷過頭矣，伊無影遮爾歹。",
    tailo: "Lí kóng liáu siunn kuè-thâu--ah, i bô-iánn tsiah-nī pháinn.",
  },
  {
    hanji: "阿榮伯上過謙，對人有夠客氣。",
    tailo: "A-îng peh siōng kòo-khiam, tuì lâng ū-kàu kheh-khì.",
  },
  {
    hanji: "伊若無耍甲過癮是袂轉來的。",
    tailo: "I nā bô sńg kah kuè-giàn sī bē tńg--lâi--ê.",
  },
  {
    hanji: "頭前的人閘咧，啥物都看袂著。",
    tailo: "Thâu-tsîng ê lâng tsa̍h--leh, siánn-mih to khuànn bē tio̍h.",
  },
  {
    hanji: "我欲趕去車頭，你先共我閘車。",
    tailo: "Guá beh kuánn-khì tshia-thâu, lí sing kā guá tsa̍h tshia.",
  },
  {
    hanji: "伊佇閘屏後面換衫，你毋通過去。",
    tailo: "I tī tsa̍h-pîn āu-bīn uānn sann, lí m̄-thang kuè--khì.",
  },
  {
    hanji: "總統府頭前的廣場有慶祝活動，四箍圍仔幾若條路攏會閘路。",
    tailo:
      "Tsóng-thóng-hú thâu-tsîng ê kóng-tiûnn ū khìng-tsiok ua̍h-tāng, sì-khoo-uî-á kuí-nā tiâu lōo lóng ē tsa̍h-lōo.",
  },
  {
    hanji: "阮兜佮𪜶兜隔無幾間厝。",
    tailo: "Guán tau kah in tau keh bô kuí king tshù.",
  },
  {
    hanji: "這个枕頭棉仔入甲真飽。",
    tailo: "Tsit ê tsím-thâu mî-á ji̍p kah tsin pá.",
  },
  {
    hanji: "見面的時頓手是一種禮貌。",
    tailo: "Kìnn-bīn ê sî tùn-tshiú sī tsi̍t tsióng lé-māu.",
  },
  {
    hanji: "少年人當飽水，較有氣力。",
    tailo: "Siàu-liân-lâng tng pá-tsuí, khah ū khuì-la̍t.",
  },
  {
    hanji: "伊橐袋仔飽水，對朋友真慷慨。",
    tailo: "I lak-tē-á pá-tsuí, tuì pîng-iú tsin khóng-khài.",
  },
  {
    hanji: "規間厝暗摸摸，你哪會毋開電火？",
    tailo: "Kui king tshù àm-bong-bong, lí ná ē m̄ khui tiān-hué?",
  },
  {
    hanji: "睏眠若飽足人就有精神。",
    tailo: "Khùn-bîn nā pá-tsiok lâng tō ū tsing-sîn.",
  },
  {
    hanji: "伊毋知𪜶翁佇外口飼查某。",
    tailo: "I m̄ tsai in ang tī guā-kháu tshī-tsa-bóo.",
  },
  {
    hanji: "新店溪這段是臺北市佮新北市的隔界。",
    tailo:
      "Sin-tiàm-khe tsit tuānn sī Tâi-pak-tshī kah Sin-pak-tshī ê keh-kài.",
  },
  {
    hanji: "你閣按怎不滿，嘛毋免走對我遮來頓椅頓桌。",
    tailo:
      "Lí koh án-tsuánn put-buán, mā m̄-bián tsáu tuì guá tsia lâi tǹg-í-tǹg-toh.",
  },
  {
    hanji: "我感覺腹肚飽脹，可能是食傷濟番薯。",
    tailo:
      "Guá kám-kak pak-tóo pá-tiùnn, khó-lîng sī tsia̍h siunn tsē han-tsî.",
  },
  {
    hanji: "孔子公，毋敢收人隔暝帖。",
    tailo: "Khóng-tsú-kong, m̄ kánn siu lâng keh-mê thiap.",
  },
  {
    hanji: "昨昏𪜶兩个做伙去電頭毛。",
    tailo: "Tsa-hng in nn̄g ê tsò-hué khì tiān-thâu-mn̂g.",
  },
  {
    hanji: "伊予一个生狂囡仔挵一下頓龜。",
    tailo: "I hōo tsi̍t ê tshenn-kông gín-á lòng tsi̍t-ē tǹg-ku.",
  },
  {
    hanji: "這期的稻仔結甲真飽穗。",
    tailo: "Tsit kî ê tiū-á kiat kah tsin pá-suī.",
  },
  {
    hanji: "伊人艱苦厝內的人緊共送去病院，想袂到隔轉工就過身矣。",
    tailo:
      "I lâng kan-khóo tshù-lāi ê lâng kín kā sàng-khì pēnn-īnn, siūnn-bē-kàu keh-tńg-kang tō kuè-sin--ah.",
  },
  {
    hanji: "伊敲電話講欲來，隔轉日伊就來矣。",
    tailo: "I khà tiān-uē kóng beh lâi, keh-tńg-ji̍t i tō lâi--ah.",
  },
  {
    hanji: "伊2003年有來，隔轉年伊閣來一遍。",
    tailo: "I 2003 nî ū lâi, keh-tńg-nî i koh lâi tsi̍t piàn.",
  },
  {
    hanji: "想袂到你竟然會曉歕鼓吹。",
    tailo: "Siūnn-bē-kàu lí kìng-jiân ē-hiáu pûn kóo-tshue.",
  },
  {
    hanji: "你就愛較捷共伊鼓勵，伊才會進步。",
    tailo: "Lí tō ài khah tsia̍p kā i kóo-lē, i tsiah ē tsìn-pōo.",
  },
  {
    hanji: "像你講的，這味藥仔真有效。",
    tailo: "Tshiūnn lí kóng--ê, tsit bī io̍h-á tsin ū-hāu.",
  },
  {
    hanji: "伊是毋是會同意猶真僫講。",
    tailo: "I sī m̄ sī ē tông-ì iáu tsin oh kóng.",
  },
  {
    hanji: "有人佇咧呲，伊才會按呢做。",
    tailo: "Ū lâng tī-leh tshū, i tsiah ē án-ne tsò.",
  },
  {
    hanji: "我感覺足厭𤺪的，飯攏食袂落去。",
    tailo: "Guá kám-kak tsiok ià-siān--ê, pn̄g lóng tsia̍h bē lo̍h--khì.",
  },
  {
    hanji: "為著欲娶你做某，就算講嘔心血，我嘛甘願。",
    tailo:
      "Uī-tio̍h beh tshuā lí tsò bóo, tō-sǹg kóng áu-sim-hiat, guá mā kam-guān.",
  },
  {
    hanji: "你是庄跤人，我嘛是庄跤人。",
    tailo: "Lí sī tsng-kha-lâng, guá mā sī tsng-kha-lâng.",
  },
  {
    hanji: "伊是著啥物病，哪會嘔紅？",
    tailo: "I sī tio̍h siánn-mih pēnn, ná ē áu-hông?",
  },
  {
    hanji: "你做這種僥倖代，以後會袂好死。",
    tailo: "Lí tsò tsit tsióng hiau-hīng-tāi, í-āu ē bē hó-sí.",
  },
  {
    hanji: "僥倖錢，失德了；冤枉錢，跋輸筊。",
    tailo: "Hiau-hīng-tsînn, sit-tik liáu; uan-óng-tsînn, pua̍h-su kiáu.",
  },
  {
    hanji: "好心煞予雷唚，想著誠厭氣。",
    tailo: "Hó-sim suah hōo luî tsim, siūnn tio̍h tsiânn iàn-khì.",
  },
  {
    hanji: "是按怎干焦你有？我嘛欲愛！",
    tailo: "Sī-án-tsuánn kan-na lí ū? Guá mā beh ài!",
  },
  {
    hanji: "慢慢仔啉，才袂去嗾著。",
    tailo: "Bān-bān-á lim, tsiah bē khì tsa̍k--tio̍h.",
  },
  {
    hanji: "伊猶未講完，毋通僭話。",
    tailo: "I iáu-buē kóng-uân, m̄-thang tsiàm-uē.",
  },
  {
    hanji: "嬰仔咧嘛嘛吼，哪會攏無人插伊？",
    tailo: "Enn-á teh mà-mà-háu, ná ē lóng bô lâng tshap--i?",
  },
  {
    hanji: "莫聽伊咧講一寡嘐潲話。",
    tailo: "Mài thiann i teh kóng tsi̍t-kuá hau-siâu-uē.",
  },
  {
    hanji: "𪜶兩个是毋是會結婚猶真僫講。",
    tailo: "In nn̄g ê sī m̄ sī ē kiat-hun iáu tsin oh kóng.",
  },
  {
    hanji: "墓牌頂的字攏看袂明矣。",
    tailo: "Bōng-pâi-tíng ê jī lóng khuànn bē bîng--ah.",
  },
  {
    hanji: "咱愛團結，才袂予人看衰。",
    tailo: "Lán ài thuân-kiat, tsiah bē hōo lâng khuànn-sue.",
  },
  {
    hanji: "七分酒對三分水上拄好。",
    tailo: "Tshit hun tsiú tuì sann hun tsuí siōng tú-hó.",
  },
  {
    hanji: "伊共西瓜對中央破做兩爿。",
    tailo: "I kā si-kue uì tiong-ng phuà-tsò nn̄g-pîng.",
  },
  {
    hanji: "你若毋穿，無，你小幔一下。",
    tailo: "Lí nā m̄ tshīng, bô, lí sió mua--tsi̍t-ē.",
  },
  {
    hanji: "你按呢共伊幔咧，伊會歹勢。",
    tailo: "Lí án-ne kā i mua--leh , i ē pháinn-sè.",
  },
  {
    hanji: "我出本你出工，若有趁錢咱才對分。",
    tailo:
      "Guá tshut pún lí tshut kang, nā ū thàn-tsînn lán tsiah tuì-pun.",
  },
  {
    hanji: "真對不住，我無看著你。",
    tailo: "Tsin tuì-put-tsū, guá bô khuànn-tio̍h lí.",
  },
  {
    hanji: "後一場欲佮咱比賽的對手真強。",
    tailo: "Āu tsi̍t tiûnn beh kah lán pí-sài ê tuì-tshiú tsin kiông.",
  },
  {
    hanji: "我寧可去做苦工嘛無愛去做賊。",
    tailo: "Guá lîng-khó khì tsò khóo-kang mā bô ài khì tsò tsha̍t.",
  },
  {
    hanji: "寧可信其有，不可信其無。",
    tailo: "Lîng-khó sìn kî iú, put-khó sìn kî bû.",
  },
  {
    hanji: "這件代誌是實在的，毋是烏白講的。",
    tailo: "Tsit kiānn tāi-tsì sī si̍t-tsāi--ê, m̄ sī oo-pe̍h kóng--ê.",
  },
  {
    hanji: "這兩个囡仔不時咧冤家答喙鼓，可能是對沖的款。",
    tailo:
      "Tsit nn̄g ê gín-á put-sî teh uan-ke tap-tshuì-kóo, khó-lîng sī tuì-tshiong ê khuán.",
  },
  {
    hanji: "我希望共這條數佮彼條數對拄。",
    tailo: "Guá hi-bāng kā tsit tiâu siàu kah hit tiâu siàu tuì-tú.",
  },
  {
    hanji: "你共這張紙對拗閣對拗。",
    tailo: "Lí kā tsit tiunn tsuá tuì-áu koh tuì-áu.",
  },
  {
    hanji: "想袂到你會按呢對待我。",
    tailo: "Siūnn-bē-kàu lí ē án-ne tuì-thāi--guá.",
  },
  {
    hanji: "對面的樓仔厝聽講欲拆掉重起。",
    tailo: "Tuì-bīn ê lâu-á-tshù thiann-kóng beh thiah-tiāu tîng khí.",
  },
  {
    hanji: "有一个查某囡仔按對面行過來。",
    tailo: "Ū tsi̍t ê tsa-bóo gín-á àn tuì-bīn kiânn--kuè-lâi.",
  },
  {
    hanji: "兩方協議，代先愛設對喙的人。",
    tailo: "Nn̄g hong hia̍p-gī, tāi-sing ài siat tuì-tshuì ê lâng.",
  },
  {
    hanji: "樹仔是實腹的，無親像竹仔是空殼的。",
    tailo:
      "Tshiū-á sī tsa̍t-pak--ê, bô tshin-tshiūnn tik-á sī khang-khak--ê.",
  },
  {
    hanji: "逐工關店了後攏愛對數。",
    tailo: "Ta̍k-kang kuainn-tiàm liáu-āu lóng ài tuì-siàu.",
  },
  {
    hanji: "伊是刁持欲佮我做對頭。",
    tailo: "I sī tiau-tî beh kah guá tsò tuì-thâu.",
  },
  {
    hanji: "空喙無消毒就有可能會孵膿。",
    tailo: "Khang-tshuì bô siau-to̍k tō ū khó-lîng ē pū-lâng.",
  },
  {
    hanji: "這馬穿對襟仔衫的人愈來愈少矣。",
    tailo: "Tsit-má tshīng tuì-khim-á-sann ê lâng jú lâi jú tsió--ah.",
  },
  {
    hanji: "玻璃摔落塗跤，就去了了矣。",
    tailo: "Po-lê siàng-lo̍h thôo-kha, tō khì-liáu-liáu--ah.",
  },
  {
    hanji: "共頭毛摠規摠，束起來。",
    tailo: "Kā thâu-mn̂g tsáng kui tsáng, sok--khí-lâi.",
  },
  {
    hanji: "囡仔若破病，做老母的人總是會慒心。",
    tailo: "Gín-á nā phuà-pēnn, tsò lāu-bú ê lâng tsóng-sī ē tso-sim.",
  },
  {
    hanji: "頭家猶未來，咱慢且決定。",
    tailo: "Thâu-ke iáu-buē lâi, lán bān-tshiánn kuat-tīng.",
  },
  {
    hanji: "慢且是，等伊來才閣講。",
    tailo: "Bān-tshiánn-sī, tán i lâi tsiah-koh kóng.",
  },
  {
    hanji: "伊昨昏無細膩佇便所摔倒。",
    tailo: "I tsa-hng bô-sè-jī tī piān-sóo siak--tó.",
  },
  {
    hanji: "規公司的代誌攏是伊咧摠頭。",
    tailo: "Kui kong-si ê tāi-tsì lóng sī i teh tsáng-thâu.",
  },
  {
    hanji: "我予這幫車摵甲強欲吐。",
    tailo: "Guá hōo tsit pang tshia tshi̍k kah kiōng-beh thòo.",
  },
  {
    hanji: "賣摵仔麵的用麵摵仔摵麵。",
    tailo: "Bē tshi̍k-á-mī--ê īng mī-tshi̍k-á tshi̍k mī.",
  },
  {
    hanji: "曝焦收入來的衫愛摺摺咧。",
    tailo: "Pha̍k-ta siu--ji̍p-lâi ê sann ài tsih-tsih--leh.",
  },
  {
    hanji: "你若閣亂撇，就叫你重寫。",
    tailo: "Lí nā koh luān phiat, tō kiò lí tîng siá.",
  },
  {
    hanji: "你妝甲遮撇，欲去佗位？",
    tailo: "Lí tsng kah tsiah phiat, beh khì tó-uī?",
  },
  {
    hanji: "旗仔予風吹甲撇咧撇咧。",
    tailo: "Kî-á hōo hong tshue kah phiat--leh phiat--leh.",
  },
  {
    hanji: "褲跤若傷長就提去敲較短咧。",
    tailo: "Khòo-kha nā siunn tn̂g tō the̍h-khì khà khah té--leh.",
  },
  {
    hanji: "頭前路口斡正爿就到矣。",
    tailo: "Thâu-tsîng lōo-kháu uat tsiànn-pîng tō kàu--ah.",
  },
  {
    hanji: "伊毋知咧暢啥，暢甲坐袂牢。",
    tailo: "I m̄ tsai teh thiòng siannh, thiòng kah tsē bē tiâu.",
  },
  {
    hanji: "伊逐改啥物物件攏無欲紮，干焦想欲共人敲油。",
    tailo:
      "I ta̍k kái siánn-mih mi̍h-kiānn lóng bô beh tsah, kan-na siūnn-beh kā lâng khà-iû.",
  },
  {
    hanji: "伊上班的時定定揣空縫走去外口摸飛。",
    tailo:
      "I siōng-pan ê sî tiānn-tiānn tshuē khang-phāng tsáu-khì guā-kháu moo-hui.",
  },
  {
    hanji: "暝時毋睏，日時才咧盹龜。",
    tailo: "Mê--sî m̄ khùn, ji̍t--sî tsiah teh tuh-ku.",
  },
  {
    hanji: "這馬的人駛車攏用𤆬路機，免驚摸無路。",
    tailo:
      "Tsit-má ê lâng sái-tshia lóng īng tshuā-lōo-ki, bián kiann bong-bô-lōo.",
  },
  {
    hanji: "伊一箍槌槌閣揣有頭路。",
    tailo: "I tsi̍t khoo thuî-thuî koh tshuē-ū thâu-lōo.",
  },
  {
    hanji: "聽著這个歹消息，伊目屎隨滴落來。",
    tailo:
      "Thiann-tio̍h tsit ê pháinn siau-sit, i ba̍k-sái suî tih--lo̍h-lâi.",
  },
  {
    hanji: "這鼎肉我滷規下晡，保證好食。",
    tailo: "Tsit tiánn bah guá lóo kui ē-poo, pó-tsìng hó-tsia̍h.",
  },
  {
    hanji: "湯若滾，火愛關較細咧。",
    tailo: "Thng nā kún, hué ài kuainn khah sè--leh.",
  },
  {
    hanji: "𪜶後生明仔載就滿月矣。",
    tailo: "In hāu-senn bîn-á-tsài tō muá-gue̍h--ah.",
  },
  {
    hanji: "你的物件落甲滿四界矣。",
    tailo: "Lí ê mi̍h-kiānn lak kah muá-sì-kè--ah.",
  },
  {
    hanji: "老大人腸仔無力，有時會滲屎。",
    tailo: "Lāu-tuā-lâng tn̂g-á bô-la̍t, ū-sî ē siàm-sái.",
  },
  {
    hanji: "犯人聽著講欲予人銃殺，驚甲滲屎尿。",
    tailo:
      "Huān-lâng thiann-tio̍h kóng beh hōo lâng tshìng-sat, kiann kah siàm-sái-jiō.",
  },
  {
    hanji: "我共你講真的，你煞當做我咧佮你滾笑。",
    tailo:
      "Guá kā lí kóng tsin--ê, lí suah tòng-tsò guá teh kah lí kún-tshiò.",
  },
  {
    hanji: "我的腹肚疼甲若像咧滾絞。",
    tailo: "Guá ê pak-tóo thiànn kah ná-tshiūnn teh kún-ká.",
  },
  {
    hanji: "有這款的成績，我就真滿意矣。",
    tailo: "Ū tsit khuán ê sîng-tsik, guá tō tsin muá-ì--ah.",
  },
  {
    hanji: "我就愛按怎做，你才會滿意？",
    tailo: "Guá tō ài án-tsuánn tsò, lí tsiah ē muá-ì?",
  },
  {
    hanji: "孤兒的命運，親像葉仔佇水面漂。",
    tailo: "Koo-jî ê miā-ūn, tshin-tshiūnn hio̍h-á tī tsuí-bīn phiau.",
  },
  {
    hanji: "提起來漉漉咧，聽看內底是啥。",
    tailo: "The̍h khí-lâi lo̍k-lo̍k--leh, thiann khuànn lāi-té sī siannh.",
  },
  {
    hanji: "伊按呢共人漩，實在有夠無水準！",
    tailo: "I án-ne kā lâng suān, si̍t-tsāi ū-kàu bô tsuí-tsún!",
  },
  {
    hanji: "衫仔褲徙出去日頭跤小熁一下會較緊焦。",
    tailo:
      "Sann-á-khòo suá tshut-khì ji̍t-thâu-kha sió hannh--tsi̍t-ē ē khah kín ta.",
  },
  {
    hanji: "白色的衫仔褲才通提去漂白。",
    tailo: "Pe̍h-sik ê sann-á-khòo tsiah thang the̍h-khì phiò-pe̍h.",
  },
  {
    hanji: "這種漚色的衫無適合少年人穿。",
    tailo: "Tsit tsióng àu-sik ê sann bô sik-ha̍p siàu-liân-lâng tshīng.",
  },
  {
    hanji: "伊激一个漚屎面是咧無歡喜啥？",
    tailo: "I kik tsi̍t ê àu-sái-bīn sī teh bô huann-hí siannh?",
  },
  {
    hanji: "伊今仔日會做這款代誌攏是予人煽動的。",
    tailo:
      "I kin-á-ji̍t ē tsò tsit khuán tāi-tsì lóng sī hōo lâng siàn-tōng--ê.",
  },
  {
    hanji: "無紮齒抿仔，上少嘛著漉喙，無，真袂慣勢。",
    tailo:
      "Bô tsah khí-bín-á, siōng-tsió mā tio̍h lo̍k-tshuì, bô, tsin bē kuàn-sì.",
  },
  {
    hanji: "落大雨了後，田塗攏變漉糊糜。",
    tailo: "Lo̍h tuā-hōo liáu-āu, tshân-thôo lóng piàn lo̍k-kôo-muê.",
  },
  {
    hanji: "這場演講足足有三點鐘。",
    tailo: "Tsit tiûnn ián-káng tsiok-tsiok ū sann tiám-tsing.",
  },
  {
    hanji: "伊做人樸實，袂共人漲懸價。",
    tailo: "I tsò-lâng phoh-si̍t, bē kā lâng tiùnn-kuân-kè.",
  },
  {
    hanji: "眠床頂衫亂㧒，袂輸咧漚鹹菜咧。",
    tailo: "Bîn-tshn̂g-tíng sann luān hiat, bē-su teh au-kiâm-tshài--leh.",
  },
  {
    hanji: "我規身軀干焦十箍爾爾。",
    tailo: "Guá kui-sin-khu kan-na tsa̍p khoo niā-niā.",
  },
  {
    hanji: "伊的代誌講三工嘛講袂盡。",
    tailo: "I ê tāi-tsì kóng sann kang mā kóng bē tsīn.",
  },
  {
    hanji: "伊真有福氣，後生新婦攏誠有孝。",
    tailo: "I tsin ū hok-khì, hāu-senn sin-pū lóng tsiânn iú-hàu.",
  },
  {
    hanji: "伊真𠢕抾恨，你盡量莫得失伊。",
    tailo: "I tsin gâu khioh-hīn, lí tsīn-liōng mài tik-sit--i.",
  },
  {
    hanji: "你就是愛人佇邊仔監督，才會讀冊。",
    tailo: "Lí tō sī ài lâng tī pinn--á kàm-tok, tsiah ē tha̍k-tsheh.",
  },
  {
    hanji: "政府愛嚴格監督，袂當發生工業汙染。",
    tailo:
      "Tsìng-hú ài giâm-keh kàm-tok, bē-tàng huat-sing kang-gia̍p u-jiám.",
  },
  {
    hanji: "高鐵駛盡磅車速會當超過三百公里。",
    tailo:
      "Ko-thih sái tsīn-pōng tshia-sok ē-tàng tshiau-kuè sann-pah kong-lí.",
  },
  {
    hanji: "你就是種著恁老爸，才會遮緣投。",
    tailo: "Lí tō sī tsíng-tio̍h lín lāu-pē, tsiah ē tsiah iân-tâu.",
  },
  {
    hanji: "這隻烏色的是欲留落來做種的。",
    tailo: "Tsit tsiah oo-sik--ê sī beh lâu lo̍h-lâi tsò tsíng--ê.",
  },
  {
    hanji: "千算萬算，毋值天一劃。",
    tailo: "Tshian sǹg bān sǹg, m̄-ta̍t thinn tsi̍t ue̍h.",
  },
  {
    hanji: "你講的無算，愛頭家講的才有算。",
    tailo: "Lí kóng--ê bô sǹg, ài thâu-ke kóng--ê tsiah ū sǹg.",
  },
  {
    hanji: "這部份是我管的，問我就好。",
    tailo: "Tsit pōo-hūn sī guá kuán--ê, mn̄g--guá tō hó.",
  },
  {
    hanji: "這个囡仔誠精光，做代誌嘛誠骨力。",
    tailo:
      "Tsit ê gín-á tsiânn tsing-kong, tsò tāi-tsì mā tsiânn kut-la̍t.",
  },
  {
    hanji: "我會共所有的意見綜合起來做參考。",
    tailo: "Guá ē kā sóo-ū ê ì-kiàn tsong-ha̍p khí-lâi tsò tsham-khó.",
  },
  {
    hanji: "阮兜的人攏較愛食精肉。",
    tailo: "Guán tau ê lâng lóng khah ài tsia̍h tsiann-bah.",
  },
  {
    hanji: "倚海的所在鹽分重，欲種作是有較困難。",
    tailo:
      "Uá hái ê sóo-tsāi iâm-hun tāng, beh tsìng-tsoh sī ū khah khùn-lân.",
  },
  {
    hanji: "伊毋去準煞，莫管待伊矣。",
    tailo: "I m̄ khì tsún suah, mài kuán-thāi--i--ah.",
  },
  {
    hanji: "管待伊喔！叫伊家己想辦法。",
    tailo: "Kuán-thāi--i--ooh! Kiò i ka-kī siūnn pān-huat.",
  },
  {
    hanji: "這个精牲！竟然做出這款代誌！",
    tailo: "Tsit ê tsing-senn! Kìng-jiân tsò-tshut tsit khuán tāi-tsì!",
  },
  {
    hanji: "你親像管家婆，逐項代誌都欲管。",
    tailo: "Lí tshin-tshiūnn kuán-ke-pô, ta̍k hāng tāi-tsì to beh kuán.",
  },
  {
    hanji: "伊的精神無啥好，你莫閣共伊吵矣。",
    tailo: "I ê tsing-sîn bô siánn hó, lí mài koh kā i tshá--ah.",
  },
  {
    hanji: "你按呢做有淡薄仔算袂和。",
    tailo: "Lí án-ne tsò ū tām-po̍h-á sǹg-bē-hô.",
  },
  {
    hanji: "較早的人若做十六歲過就算做大人矣。",
    tailo:
      "Khah-tsá ê lâng nā tsò tsa̍p-la̍k huè kuè tō sǹg-tsò tuā-lâng--ah.",
  },
  {
    hanji: "這款生理我按怎算嘛算無盤。",
    tailo: "Tsit khuán sing-lí guá án-tsuánn sǹg mā sǹg-bô-puânn.",
  },
  {
    hanji: "過去種種的代誌，就莫閣提起來講矣。",
    tailo:
      "Kuè-khì tsióng-tsióng ê tāi-tsì, tō mài koh the̍h khí-lâi kóng--ah.",
  },
  {
    hanji: "你袂曉算數是欲按怎佮人做生理？",
    tailo: "Lí bē-hiáu sǹg-siàu sī beh án-tsuánn kah lâng tsò-sing-lí?",
  },
  {
    hanji: "你這馬拍我，後擺我會揣你算數！",
    tailo: "Lí tsit-má phah--guá, āu-pái guá ē tshuē lí sǹg-siàu!",
  },
  {
    hanji: "你欲出門做你去，囡仔交予我管顧就好。",
    tailo:
      "Lí beh tshut-mn̂g tsò lí khì, gín-á kau hōo guá kuán-kòo tō hó.",
  },
  {
    hanji: "塗豆𤉙甲又閣綿又閣鬆。",
    tailo: "Thôo-tāu kûn kah iū-koh mî iū-koh sang.",
  },
  {
    hanji: "人客遐濟，你愛較緊手咧。",
    tailo: "Lâng-kheh hiah tsē, lí ài khah kín-tshiú--leh.",
  },
  {
    hanji: "權力傷大就會造成腐化。",
    tailo: "Khuân-li̍k siunn tuā tō ē tsō-sîng hú-huà.",
  },
  {
    hanji: "阿英都無愛你矣，你猶閣綿死綿爛咧求伊，你哪會遮戇啦！",
    tailo:
      "A-ing to bô ài--lí--ah, lí iáu-koh mî-sí-mî-nuā teh kiû--i, lí ná ē tsiah gōng--lah!",
  },
  {
    hanji: "車欲來矣，無緊行會袂赴。",
    tailo: "Tshia beh lâi--ah, bô kín kiânn ē bē-hù.",
  },
  {
    hanji: "魚仔的膁肚較肥較好食。",
    tailo: "Hî-á ê liám-tóo khah puî khah hó-tsia̍h.",
  },
  {
    hanji: "緊事寬辦，較袂出代誌。",
    tailo: "Kín-sū-khuann-pān, khah bē tshut-tāi-tsì.",
  },
  {
    hanji: "伊傷緊性，才會共代誌舞甲按呢。",
    tailo: "I siunn kín-sìng, tsiah ē kā tāi-tsì bú kah án-ne.",
  },
  {
    hanji: "我欲去上班，你莫綴前綴後好無？",
    tailo: "Guá beh khì siōng-pan, lí mài tuè-tsîng-tuè-āu hó--bô?",
  },
  {
    hanji: "拄著考試逐家攏真緊張。",
    tailo: "Tú-tio̍h khó-tshì ta̍k-ke lóng tsin kín-tiunn.",
  },
  {
    hanji: "伊無寫功課，去予老師罰徛。",
    tailo: "I bô siá kong-khò, khì hōo lāu-su hua̍t-khiā.",
  },
  {
    hanji: "早起時拄起來目屎足膏的。",
    tailo: "Tsá-khí-sî tú khí--lâi ba̍k-sái tsiok ko--ê.",
  },
  {
    hanji: "𪜶兩翁仔某這馬想欲蓄厝。",
    tailo: "In nn̄g ang-á-bóo tsit-má siūnn-beh hak-tshù.",
  },
  {
    hanji: "𪜶兩个老的這馬咧為𪜶查某囝蓄嫁粧。",
    tailo: "In nn̄g ê lāu--ê tsit-má teh uī in tsa-bóo-kiánn hak-kè-tsng.",
  },
  {
    hanji: "伊做啥物生理攏蝕本，我看伊毋通做生理。",
    tailo:
      "I tsò siánn-mih sing-lí lóng si̍h-pún, guá khuànn i m̄-thang tsò-sing-lí.",
  },
  {
    hanji: "規袋的綠豆拆零星賣煞蝕重。",
    tailo: "Kui tē ê li̍k-tāu thiah lân-san bē suah si̍h-tāng.",
  },
  {
    hanji: "這層代誌攏予伊誤去矣！",
    tailo: "Tsit tsân tāi-tsì lóng hōo i gōo--khì--ah!",
  },
  {
    hanji: "這馬真少有店頭欲予人賒矣。",
    tailo: "Tsit-má tsin tsió ū tiàm-thâu beh hōo lâng sia--ah.",
  },
  {
    hanji: "阮當咧趕路，無時間通歇睏。",
    tailo: "Guán tng-teh kuánn-lōo, bô sî-kan thang hioh-khùn.",
  },
  {
    hanji: "毋免你趕，我家己會曉行。",
    tailo: "M̄-bián lí kuánn, guá ka-kī ē-hiáu kiânn.",
  },
  {
    hanji: "三工傷趕矣，交袂出來。",
    tailo: "Sann kang siunn kuánn--ah, kau bē tshut--lâi.",
  },
  {
    hanji:
      "過兩工仔可能有風颱，我看咱愛緊趕工共穡頭做予伊了，無，就袂赴矣。",
    tailo:
      "Kuè--nn̄g-kang-á khó-lîng ū hong-thai, guá khuànn lán ài kín kuánn-kang kā sit-thâu tsò hōo i liáu, bô, tō bē-hù--ah.",
  },
  {
    hanji: "是因為林先生共咱鬥相共代誌才會遮順序，你愛趕緊共人說多謝。",
    tailo:
      "Sī in-uī Lîm--sian-sinn kā lán tàu-sann-kāng tāi-tsì tsiah ē tsiah sūn-sī, lí ài kuánn-kín kā lâng sueh-to-siā.",
  },
  {
    hanji: "你是按怎認定伊就是兇手？",
    tailo: "Lí sī-án-tsuánn jīn-tīng i tō sī hiong-siú?",
  },
  {
    hanji: "你實在真𠢕製造麻煩！",
    tailo: "Lí si̍t-tsāi tsin gâu tsè-tsō mâ-huân!",
  },
  {
    hanji: "愛買臺灣製造的較耐用。",
    tailo: "Ài bé Tâi-uân tsè-tsō--ê khah nāi-iōng.",
  },
  {
    hanji: "聽你一工到暗咧誦經，實在有夠𤺪的。",
    tailo:
      "Thiann lí tsi̍t-kang-kàu-àm teh siōng-king, si̍t-tsāi ū-kàu siān--ê.",
  },
  {
    hanji: "救人的代誌就愛趕緊處理。",
    tailo: "Kiù-lâng ê tāi-tsì tō ài kuánn-kín tshú-lí.",
  },
  {
    hanji: "伊袂記得紮錢，先共頭家賒數。",
    tailo: "I bē-kì-tit tsah tsînn, sing kā thâu-ke sia-siàu.",
  },
  {
    hanji: "你無證據哪會當誣賴人。",
    tailo: "Lí bô tsìng-kì ná ē-tàng bû-luā--lâng.",
  },
  {
    hanji: "洗碗的時陣，愛較輕手咧。",
    tailo: "Sé uánn ê sî-tsūn, ài khah khin-tshiú--leh.",
  },
  {
    hanji: "阿母洗碗的時，盤仔煞遛手摔破去。",
    tailo: "A-bú sé uánn ê sî, puânn-á suah liù-tshiú siak-phuà--khì.",
  },
  {
    hanji: "伊騎車跋倒，好佳哉干焦遛皮爾爾。",
    tailo: "I khiâ-tshia pua̍h-tó, hó-ka-tsài kan-na liù-phuê niā-niā.",
  },
  {
    hanji: "鹹酸甜食起來酸甘甜仔酸甘甜。",
    tailo: "Kiâm-sng-tinn tsia̍h--khí-lâi sng-kam-tinn-á-sng-kam-tinn.",
  },
  {
    hanji: "明仔載老師欲𤆬阮去遠足。",
    tailo: "Bîn-á-tsài lāu-su beh tshuā guán khì uán-tsiok.",
  },
  {
    hanji: "𬦰山愛紮較輕便的物件。",
    tailo: "Peh-suann ài tsah khah khin-piān ê mi̍h-kiānn.",
  },
  {
    hanji: "我揣無路，一直佇這搭踅玲瑯。",
    tailo: "Guá tshuē-bô lōo, it-ti̍t tī tsit-tah se̍h-lin-long.",
  },
  {
    hanji: "你欲講就緊講，莫佇遐踅玲瑯好無？",
    tailo: "Lí beh kóng tō kín kóng, mài tī hia se̍h-lin-long hó--bô?",
  },
  {
    hanji: "你誠毋知輕重，這款話你曷講會出喙。",
    tailo:
      "Lí tsiânn m̄ tsai khin-tāng, tsit khuán uē lí a̍h kóng ē tshut-tshuì.",
  },
  {
    hanji: "伊坐佇遐踅神，昨暝睏無飽的款。",
    tailo: "I tsē tī hia se̍h-sîn, tsa-mê khùn bô pá ê khuán.",
  },
  {
    hanji: "咱來去踅街，看有啥物通好買。",
    tailo: "Lán lâi-khì se̍h-ke, khuànn ū siánn-mih thang-hó bé.",
  },
  {
    hanji: "佇公共場所講話著愛輕聲細說。",
    tailo: "Tī kong-kiōng tiûnn-sóo kóng-uē tio̍h-ài khin-siann-sè-sueh.",
  },
  {
    hanji: "麻煩你共車踅輾轉一下。",
    tailo: "Mâ-huân lí kā tshia se̍h-liàn-tńg--tsi̍t-ē.",
  },
  {
    hanji: "你著放予輕鬆，莫傷緊張。",
    tailo: "Lí tio̍h pàng hōo khin-sang, mài siunn kín-tiunn.",
  },
  {
    hanji: "伊第一擺煮的菜閣袂歹食。",
    tailo: "I tē-it pái tsú ê tshài koh bē pháinn-tsia̍h.",
  },
  {
    hanji: "自彼工了後，伊就毋捌閣再提起彼層代誌矣。",
    tailo:
      "Tsū hit kang liáu-āu, i tō m̄ bat koh-tsài thê-khí hit tsân tāi-tsì--ah.",
  },
  {
    hanji: "你莫怨嘆矣，閣較按怎講伊嘛是恁老爸。",
    tailo:
      "Lí mài uàn-thàn--ah, koh-khah án-tsuánn kóng i mā sī lín lāu-pē.",
  },
  {
    hanji: "伊頭頕咧毋知咧想啥物？",
    tailo: "I thâu tàm--leh m̄ tsai teh siūnn siánn-mih?",
  },
  {
    hanji: "伊看著我頭攏共我頕一下。",
    tailo: "I khuànn-tio̍h guá thâu lóng kā guá tàm--tsi̍t-ē.",
  },
  {
    hanji: "知影家己毋著，頭隨頕低落來。",
    tailo: "Tsai-iánn ka-kī m̄-tio̍h, thâu suî tàm-kē--lo̍h-lâi.",
  },
  {
    hanji: "桌頂毋通留餅幼仔，會唌狗蟻。",
    tailo: "Toh-tíng m̄-thang lâu piánn-iù-á, ē siânn káu-hiā.",
  },
  {
    hanji: "你的好意我真歡喜共你領受。",
    tailo: "Lí ê hó-ì guá tsin huann-hí kā lí niá-siū.",
  },
  {
    hanji: "伊的頭頕垂頕垂，我看伊一定有心事。",
    tailo: "I ê thâu tàm-suê-tàm-suê, guá khuànn i it-tīng ū sim-sū.",
  },
  {
    hanji: "你有看著伊共你頕頭無？",
    tailo: "Lí ū khuànn-tio̍h i kā lí tàm-thâu--bô?",
  },
  {
    hanji: "做散工的人趁的錢袂齊勻。",
    tailo: "Tsò suánn-kang ê lâng thàn ê tsînn bē tsiâu-ûn.",
  },
  {
    hanji: "伊準備的資料有齊全無？",
    tailo: "I tsún-pī ê tsu-liāu ū tsê-tsuân--bô?",
  },
  {
    hanji: "你欲愛的物件，我絕對共你攢予齊備。",
    tailo:
      "Lí beh ài ê mi̍h-kiānn, guá tsua̍t-tuì kā lí tshuân hōo tsê-pī.",
  },
  {
    hanji: "一百五十二箍，算齊頭，收你百五就好！",
    tailo:
      "Tsi̍t-pah gōo-tsa̍p-jī khoo, sǹg tsê-thâu, siu lí pah-gōo tō hó!",
  },
  {
    hanji: "逐月日儉萬五想欲買厝。",
    tailo: "Ta̍k gue̍h-ji̍t khiām bān-gōo siūnn-beh bé tshù.",
  },
  {
    hanji: "我儉腸凹肚，就是為著欲買厝。",
    tailo: "Guá khiām-tn̂g-neh-tōo, tō sī uī-tio̍h beh bé tshù.",
  },
  {
    hanji: "雖然月給無懸，儉儉仔用猶會當賰淡薄仔。",
    tailo:
      "Sui-jiân gue̍h-kip bô kuân, khiām-khiām-á īng iáu ē-tàng tshun--tām-po̍h-á.",
  },
  {
    hanji: "伊自細漢就真𠢕儉錢。",
    tailo: "I tsū sè-hàn tō tsin gâu khiām-tsînn.",
  },
  {
    hanji: "嘿！你烏矸仔貯豆油喔！",
    tailo: "Heh! Lí oo kan-á té tāu-iû--ooh!",
  },
  {
    hanji: "一陣人佇遐嘻嘻嘩嘩，有夠吵！",
    tailo: "Tsi̍t tīn lâng tī hia hi-hi-huā-huā, ū-kàu tshá!",
  },
  {
    hanji: "檨仔噴點矣，緊食食咧。",
    tailo: "Suāinn-á phùn-tiám--ah, kín tsia̍h-tsia̍h--leh.",
  },
  {
    hanji: "我有看著伊屧一千箍予你。",
    tailo: "Guá ū khuànn-tio̍h i siap tsi̍t-tshing khoo hōo--lí.",
  },
  {
    hanji: "我咧無閒，囡仔你共我影一下。",
    tailo: "Guá teh bô-îng, gín-á lí kā guá iánn--tsi̍t-ē.",
  },
  {
    hanji: "𪜶阿三仔是咧做廚子的。",
    tailo: "In A-sam--á sī teh tsò tôo-tsí--ê.",
  },
  {
    hanji: "毋免抄啦，提去影印較緊。",
    tailo: "M̄-bián tshau--lah, the̍h-khì iánn-ìn khah kín.",
  },
  {
    hanji: "𪜶兜的土地去予政府徵收去矣。",
    tailo: "In tau ê thóo-tē khì hōo tsìng-hú ting-siu--khì--ah.",
  },
  {
    hanji: "請你閣予我寬限一個月，時到我一定會共錢還你。",
    tailo:
      "Tshiánn lí koh hōo guá khuan-hān tsi̍t kò gue̍h, sî kàu guá it-tīng ē kā tsînn hîng--lí.",
  },
  {
    hanji: "寬寬仔是就好，毋免趕。",
    tailo: "Khuann-khuann-á-sī tō hó, m̄-bián kuánn.",
  },
  {
    hanji: "爸母的行為會影響著囝兒序細。",
    tailo: "Pē-bú ê hîng-uî ē íng-hióng-tio̍h kiánn-jî sī-sè.",
  },
  {
    hanji: "佇橐袋仔內撏規晡，撏無半仙。",
    tailo: "Tī lak-tē-á-lāi jîm kui-poo, jîm bô puànn sián.",
  },
  {
    hanji: "我做甲流汗，猶閣予人嫌甲流瀾，有夠慼心啦！",
    tailo:
      "Guá tsò kah lâu-kuānn, iáu-koh hōo lâng hiâm kah lâu-nuā, ū-kàu tsheh-sim--lah!",
  },
  {
    hanji: "代誌若有小可撞突，伊就袂食袂睏矣。",
    tailo: "Tāi-tsì nā ū sió-khuá tōng-tu̍t, i tō bē-tsia̍h-bē-khùn--ah.",
  },
  {
    hanji: "看伊規日憂悶，我心內嘛真艱苦。",
    tailo: "Khuànn i kui ji̍t iu-būn, guá sim-lāi mā tsin kan-khóo.",
  },
  {
    hanji: "這條代誌我聽了誠憤慨。",
    tailo: "Tsit tiâu tāi-tsì guá thiann-liáu tsiânn hùn-khài.",
  },
  {
    hanji: "伊一个面仔憂結結，毋知咧煩惱啥？",
    tailo: "I tsi̍t ê bīn-á iu-kat-kat, m̄ tsai teh huân-ló siannh?",
  },
  {
    hanji: "你共物件囥蹛遮，會去予人撞著。",
    tailo: "Lí kā mi̍h-kiānn khǹg tuà tsia, ē khì hōo lâng tōng--tio̍h.",
  },
  {
    hanji: "你做代誌著較撙節咧，毋通傷超過。",
    tailo:
      "Lí tsò tāi-tsì tio̍h khah tsún-tsat--leh, m̄-thang siunn tshiau-kuè.",
  },
  {
    hanji: "你毋通憢疑我對你的感情。",
    tailo: "Lí m̄-thang giâu-gî guá tuì lí ê kám-tsîng.",
  },
  {
    hanji: "你莫規工憂頭苦面好無？",
    tailo: "Lí mài kui-kang iu-thâu-khóo-bīn hó--bô?",
  },
  {
    hanji: "看伊規日憂頭結面，是發生啥物代誌？",
    tailo:
      "Khuànn i kui-ji̍t iu-thâu-kat-bīn, sī huat-sing siánn-mih tāi-tsì?",
  },
  {
    hanji: "你小撥幾千箍仔予我一下。",
    tailo: "Lí sió puah kuí-tshing-khoo-á hōo--guá--tsi̍t-ē.",
  },
  {
    hanji: "咱下晡撥一點仔時間來去看阿舅。",
    tailo: "Lán ē-poo puah tsi̍t-tiám-á sî-kan lâi-khì khuànn a-kū.",
  },
  {
    hanji: "恁撨好勢才共我講結果。",
    tailo: "Lín tshiâu hó-sè tsiah kā guá kóng kiat-kó.",
  },
  {
    hanji: "多謝你撥工來參加我的婚禮。",
    tailo: "To-siā lí puah-kang lâi tsham-ka guá ê hun-lé.",
  },
  {
    hanji: "你暫且留蹛遮，等咧才轉去。",
    tailo: "Lí tsiām-tshiánn lâu tuà tsia, tán--leh tsiah tńg--khì.",
  },
  {
    hanji: "這擺的數目敢若無啥著，你欲閣對一擺無？",
    tailo:
      "Tsit pái ê siàu-ba̍k kánn-ná bô siánn tio̍h, lí beh koh tuì--tsi̍t-pái--bô?",
  },
  {
    hanji: "你毋免數想我會替你寫功課。",
    tailo: "Lí m̄-bián siàu-siūnn guá ē thè lí siá kong-khò.",
  },
  {
    hanji: "所有的代誌攏交予我來撨摵。",
    tailo: "Sóo-ū ê tāi-tsì lóng kau hōo guá lâi tshiâu-tshi̍k.",
  },
  {
    hanji: "聽著伊樂暢的笑聲就知影伊來矣。",
    tailo:
      "Thiann-tio̍h i lo̍k-thiòng ê tshiò-siann tō tsai-iánn i lâi--ah.",
  },
  {
    hanji: "欲下班的時，數簿愛收好勢，鎖起來。",
    tailo: "Beh hā-pan ê sî, siàu-phōo ài siu hó-sè, só--khí-lâi.",
  },
  {
    hanji: "這款治標無治本的代誌千萬毋通做。",
    tailo:
      "Tsit khuán tī-piau bô tī-pún ê tāi-tsì tshian-bān m̄-thang tsò.",
  },
  {
    hanji: "有樣看樣，無樣家己想。",
    tailo: "Ū iūnn khuànn-iūnn, bô iūnn ka-kī siūnn.",
  },
  {
    hanji: "你去共窗仔門關起來，才袂潑雨。",
    tailo: "Lí khì kā thang-á-mn̂g kuainn--khí-lâi, tsiah bē phuah-hōo.",
  },
  {
    hanji: "這間公司的產品攏有這个標頭。",
    tailo: "Tsit king kong-si ê sán-phín lóng ū tsit ê phiau-thâu.",
  },
  {
    hanji: "餅敨開愛緊食予了，無會潤去。",
    tailo: "Piánn tháu--khui ài kín tsia̍h hōo liáu, bô ē jūn--khì.",
  },
  {
    hanji: "警察用衛生紙頂面的潲做證據。",
    tailo: "Kíng-tshat iōng uē-sing-tsuá tíng-bīn ê siâu tsò tsìng-kì.",
  },
  {
    hanji: "冰箱內面的菜若欲食愛先熥予燒。",
    tailo:
      "Ping-siunn lāi-bīn ê tshài nā beh tsia̍h ài sing thn̄g hōo sio.",
  },
  {
    hanji: "熟似人毋免行彼號生份禮。",
    tailo: "Si̍k-sāi-lâng m̄-bián kiânn hit-lō senn-hūn lé.",
  },
  {
    hanji: "伊做代誌傷潦草，定定予頭家唸。",
    tailo: "I tsò tāi-tsì siunn ló-tshó, tiānn-tiānn hōo thâu-ke liām.",
  },
  {
    hanji: "你字寫甲遮潦草，啥人看有？",
    tailo: "Lí jī siá kah tsiah ló-tshó, siánn-lâng khuànn-ū?",
  },
  {
    hanji: "這件代誌愛由你出面來澄清。",
    tailo: "Tsit kiānn tāi-tsì ài iû lí tshut-bīn lâi tîng-tshing.",
  },
  {
    hanji: "聽候鼎熱的時，才下油落去炒。",
    tailo: "Thìng-hāu tiánn jia̍t ê sî, tsiah hē iû lo̍h-khì tshá.",
  },
  {
    hanji: "麻油較熱，你若虛火大就毋通食。",
    tailo: "Muâ-iû khah jia̍t, lí nā hi-hué tuā tō m̄-thang tsia̍h.",
  },
  {
    hanji: "𪜶兩个當咧熱，無人會當共𪜶拆散。",
    tailo: "In nn̄g ê tng-teh jia̍t, bô lâng ē-tàng kā in thiah-suànn.",
  },
  {
    hanji: "熱人到矣，電風好提出來矣。",
    tailo: "Jua̍h--lâng kàu--ah, tiān-hong hó the̍h--tshut-lâi--ah.",
  },
  {
    hanji: "你若欲去南港就愛佇臺北車頭盤車。",
    tailo:
      "Lí nā beh khì Lâm-káng tō ài tī Tâi-pak Tshia-thâu puânn-tshia.",
  },
  {
    hanji: "這个囡仔腹肚內有蝒蟲，才會飼甲瘦卑巴。",
    tailo:
      "Tsit ê gín-á pak-tóo-lāi ū bīn-thâng, tsiah ē tshī kah sán-pi-pa.",
  },
  {
    hanji: "𪜶兜的人攏瘦抽瘦抽。",
    tailo: "In tau ê lâng lóng sán-thiu-sán-thiu.",
  },
  {
    hanji: "日頭遐炎無戴帽仔閣無啉水，莫怪會熱著。",
    tailo:
      "Ji̍t-thâu hiah iām bô tì bō-á koh bô lim tsuí, bo̍k-kuài ē jua̍h--tio̍h.",
  },
  {
    hanji: "做業務的就是愛會曉佮人盤撋。",
    tailo: "Tsò gia̍p-bū--ê tō sī ài ē-hiáu kah lâng puânn-nuá.",
  },
  {
    hanji: "今仔日是咱店內盤數的日子。",
    tailo: "Kin-á-ji̍t sī lán tiàm-lāi puânn-siàu ê ji̍t-tsí.",
  },
  {
    hanji: "炭空挖塗炭，著愛先用磅子磅。",
    tailo:
      "Thuànn-khang óo thôo-thuànn, tio̍h-ài sing iōng pōng-tsí pōng.",
  },
  {
    hanji: "你去提度針來磅看囡仔敢有發燒。",
    tailo: "Lí khì the̍h tōo-tsiam lâi pōng khuànn gín-á kám ū huat-sio.",
  },
  {
    hanji: "炭空挖塗炭，著愛先用磅子磅。",
    tailo:
      "Thuànn-khang óo thôo-thuànn, tio̍h-ài sing iōng pōng-tsí pōng.",
  },
  {
    hanji: "囡仔人毋通傷𠢕窮分。",
    tailo: "Gín-á-lâng m̄-thang siunn gâu khîng-hun.",
  },
  {
    hanji: "你莫攑箠仔烏白拍囡仔。",
    tailo: "Lí mài gia̍h tshuê-á oo-pe̍h phah gín-á.",
  },
  {
    hanji: "我已經確定欲來去做兵矣。",
    tailo: "Guá í-king khak-tīng beh lâi-khì tsò-ping--ah.",
  },
  {
    hanji: "你共遮的果子提去磅重。",
    tailo: "Lí kā tsia-ê kué-tsí the̍h-khì pōng-tāng.",
  },
  {
    hanji: "一隻鳥仔徛佇稻草人的頭殼頂。",
    tailo: "Tsi̍t tsiah tsiáu-á khiā tī tiū-tsháu-lâng ê thâu-khak-tíng.",
  },
  {
    hanji: "伊行路跋倒，頭去磕著。",
    tailo: "I kiânn-lōo pua̍h-tó, thâu khì kha̍p--tio̍h.",
  },
  {
    hanji: "你這款身體袂輸紙糊的。",
    tailo: "Lí tsit khuán sin-thé bē-su tsuá kôo--ê.",
  },
  {
    hanji: "我無愛的物件硬欲糊予我。",
    tailo: "Guá bô ài ê mi̍h-kiānn ngē beh kôo hōo--guá.",
  },
  {
    hanji: "代誌愛家己做，袂使干焦想欲糊人。",
    tailo: "Tāi-tsì ài ka-kī tsò, bē-sái kan-na siūnn-beh kôo--lâng.",
  },
  {
    hanji: "用這个篋仔來貯細項物件。",
    tailo: "Iōng tsit ê kheh-á lâi té sè hāng mi̍h-kiānn.",
  },
  {
    hanji: "看這个範勢，無走袂使矣！",
    tailo: "Khuànn tsit ê pān-sè, bô tsáu bē-sái--ah!",
  },
  {
    hanji: "你哪會遮糊塗，遮爾要緊的代誌竟然袂記得。",
    tailo:
      "Lí ná ē tsiah hôo-tôo, tsiah-nī iàu-kín ê tāi-tsì kìng-jiân bē-kì--tit.",
  },
  {
    hanji: "這塊原木桌仔的線路真媠。",
    tailo: "Tsit tè guân-bo̍k toh-á ê suànn-lōo tsin suí.",
  },
  {
    hanji: "交通的線路愛先安排予好。",
    tailo: "Kau-thong ê suànn-lōo ài sing an-pâi hōo hó.",
  },
  {
    hanji: "賰的線頭無夠長，無法度紩衫。",
    tailo: "Tshun ê suànn-thâu bô-kàu tn̂g, bô-huat-tōo thīnn-sann.",
  },
  {
    hanji: "這个歌星這站仔衝甲掠袂牢。",
    tailo: "Tsit ê kua-tshenn tsit-tsām-á tshìng kah lia̍h bē tiâu.",
  },
  {
    hanji: "今仔日股票衝破一萬點。",
    tailo: "Kin-á-ji̍t kóo-phiò tshiong-phuà tsi̍t-bān tiám.",
  },
  {
    hanji: "我毋知影伊唱的是啥物調。",
    tailo: "Guá m̄ tsai-iánn i tshiùnn--ê sī siánn-mih tiāu.",
  },
  {
    hanji: "伊磕袂著就愛佮人起衝突。",
    tailo: "I kha̍p-bē-tio̍h tō ài kah lâng khí tshiong-tu̍t.",
  },
  {
    hanji: "這件代誌愛慢慢仔解決，你莫傷衝碰。",
    tailo:
      "Tsit kiānn tāi-tsì ài bān-bān-á kái-kuat, lí mài siunn tshóng-pōng.",
  },
  {
    hanji: "你不時都遐衝碰，莫怪會去得失遐濟人。",
    tailo:
      "Lí put-sî to hiah tshóng-pōng, bo̍k-kuài ē khì tik-sit hiah tsē lâng.",
  },
  {
    hanji: "逐家攏遐爾衝碰，是發生啥物代誌？",
    tailo:
      "Ta̍k-ke lóng hiah-nī tshóng-pōng, sī huat-sing siánn-mih tāi-tsì?",
  },
  {
    hanji: "選舉欲到矣，逐家攏咧談論政治。",
    tailo: "Suán-kí beh kàu--ah, ta̍k-ke lóng teh tâm-lūn tsìng-tī.",
  },
  {
    hanji: "你的身體愛好好仔調養。",
    tailo: "Lí ê sin-thé ài hó-hó-á tiâu-ióng.",
  },
  {
    hanji: "你莫共這件代誌想甲遐爾仔複雜。",
    tailo: "Lí mài kā tsit kiānn tāi-tsì siūnn kah hiah-nī-á ho̍k-tsa̍p.",
  },
  {
    hanji: "請你有閒來阮遐𨑨迌。",
    tailo: "Tshiánn lí ū-îng lâi guán hia tshit-thô.",
  },
  {
    hanji: "無論代誌上尾按怎，我攏會支持你。",
    tailo: "Bô-lūn tāi-tsì siōng-bué án-tsuánn, guá lóng ē tsi-tshî--lí.",
  },
  {
    hanji: "查某囡仔人愛較定著咧，毋通烏白賤。",
    tailo:
      "Tsa-bóo gín-á-lâng ài khah tiānn-tio̍h--leh, m̄-thang oo-pe̍h tsiān.",
  },
  {
    hanji: "我話踏頭前，恁的代誌愛家己負責。",
    tailo: "Guá uē ta̍h thâu-tsîng, lín ê tāi-tsì ài ka-kī hū-tsik.",
  },
  {
    hanji: "我攏會共零星錢橐入去豬公內底。",
    tailo: "Guá lóng ē kā lân-san-tsînn lok ji̍p-khì ti-kong lāi-té.",
  },
  {
    hanji: "請你替我共恁阿姆請安。",
    tailo: "Tshiánn lí thè guá kā lín a-ḿ tshíng-an.",
  },
  {
    hanji: "工廠會趁錢，是因為有真濟工人咧為頭家賣命。",
    tailo:
      "Kang-tshiúnn ē thàn-tsînn, sī in-uī ū tsin tsē kang-lâng teh uī thâu-ke bē-miā.",
  },
  {
    hanji: "阿國仔足豬哥神的，看著媠查某喙瀾就直直流。",
    tailo:
      "A-kok--á tsiok ti-ko-sîn--ê, khuànn-tio̍h suí tsa-bóo tshuì-nuā tō ti̍t-ti̍t lâu.",
  },
  {
    hanji: "仙人拍鼓有時錯，跤步踏差啥人無？",
    tailo:
      "Sian-jîn phah kóo iú sî tshò, kha-pōo ta̍h-tsha siánn-lâng bô?",
  },
  {
    hanji: "激甲一个面懊嘟嘟，無，你這馬是咧佮我賭氣是無？",
    tailo:
      "Kik kah tsi̍t ê bīn àu-tū-tū, bô, lí tsit-má sī teh kah guá tóo-khì sī--bô?",
  },
  {
    hanji: "若無才調閣硬欲賭強，是會傷害著家己呢！",
    tailo:
      "Nā bô tsâi-tiāu koh ngē beh tóo-kiông, sī ē siong-hāi-tio̍h ka-kī--neh!",
  },
  {
    hanji: "明明是伊毋著閣敢大細聲，看著我踏硬，伊毋才肯會失禮。",
    tailo:
      "Bîng-bîng sī i m̄-tio̍h koh kánn tuā-sè-siann, khuànn-tio̍h guá ta̍h-ngē, i m̄-tsiah khíng huē-sit-lé.",
  },
  {
    hanji: "頭拄仔的代誌只是誤會爾爾，希望你會當諒解。",
    tailo:
      "Thâu-tú-á ê tāi-tsì tsí-sī gōo-huē niā-niā, hi-bāng lí ē-tàng liōng-kái.",
  },
  {
    hanji: "欲合股做生理我先踏話頭，聽了會當接受，才繼續來講。",
    tailo:
      "Beh ha̍p-kóo tsò-sing-lí guá sing ta̍h-uē-thâu, thiann-liáu ē-tàng tsiap-siū, tsiah kè-sio̍k lâi kóng.",
  },
  {
    hanji: "伊有孝大家官閣𠢕扞家，真是一个賢慧的查某人。",
    tailo:
      "I iú-hàu ta-ke-kuann koh gâu huānn-ke, tsin sī tsi̍t ê hiân-huē ê tsa-bóo-lâng.",
  },
  {
    hanji: "物件是你挵破的，你就愛賠錢。",
    tailo: "Mi̍h-kiānn sī lí lòng-phuà--ê, lí tō ài puê-tsînn.",
  },
  {
    hanji: "這擺的損失，全部由我賠償。",
    tailo: "Tsit pái ê sún-sit, tsuân-pōo iû guá puê-siông.",
  },
  {
    hanji: "這个囡仔若賤蟲咧，物件攏予伊耍歹了了。",
    tailo:
      "Tsit ê gín-á ná tsiān-thâng--leh, mi̍h-kiānn lóng hōo i sńg-pháinn-liáu-liáu.",
  },
  {
    hanji: "今仔日踮遮，明仔載才轉去。",
    tailo: "Kin-á-ji̍t tiàm tsia, bîn-á-tsài tsiah tńg--khì.",
  },
  {
    hanji: "歇睏日值班𪜶兩个咧輪。",
    tailo: "Hioh-khùn-ji̍t ti̍t-pan in nn̄g ê teh lûn.",
  },
  {
    hanji: "伊做無三月日就予人遷掉。",
    tailo: "I tsò bô sann gue̍h-ji̍t tō hōo lâng tshian-tiāu.",
  },
  {
    hanji: "阿姊攑花仔傘共彼个阿婆遮日。",
    tailo: "A-tsí gia̍h hue-á-suànn kā hit ê a-pô jia-ji̍t.",
  },
  {
    hanji: "落雨矣，緊攑雨傘出來遮雨。",
    tailo: "Lo̍h-hōo--ah, kín gia̍h hōo-suànn tshut-lâi jia-hōo.",
  },
  {
    hanji: "落雨矣，攑雨傘來遮閘一下。",
    tailo: "Lo̍h-hōo--ah, gia̍h hōo-suànn lâi jia-tsa̍h--tsi̍t-ē.",
  },
  {
    hanji: "恁阿母遮爾惜你，你敢袂當較有孝咧？",
    tailo: "Lín a-bú tsiah-nī sioh--lí, lí kám bē-tàng khah iú-hàu--leh?",
  },
  {
    hanji: "這馬菜遮爾仔貴實在買袂落手。",
    tailo: "Tsit-má tshài tsiah-nī-á kuì si̍t-tsāi bé bē lo̍h-tshiú.",
  },
  {
    hanji: "代誌已經公開矣！按怎遮瞞嘛無效。",
    tailo: "Tāi-tsì í-king kong-khai--ah! Án-tsuánn jia-muâ mā bô-hāu.",
  },
  {
    hanji: "用頭毛鋏仔共頭毛鋏予伊好。",
    tailo: "Iōng thâu-mn̂g-giap-á kā thâu-mn̂g giap hōo i hó.",
  },
  {
    hanji: "你若有閒，就愛閬工去共伊看一下。",
    tailo: "Lí nā ū-îng, tō ài làng-kang khì kā i khuànn--tsi̍t-ē.",
  },
  {
    hanji: "這跤會仔錢閬月收一擺。",
    tailo: "Tsit kha huē-á-tsînn làng-gue̍h siu tsi̍t pái.",
  },
  {
    hanji: "今仔日是恁嬸婆的生日，咱著包紅包去共伊鋪排。",
    tailo:
      "Kin-á-ji̍t sī lín tsím-pô ê senn-ji̍t, lán tio̍h pau âng-pau khì kā i phoo-pâi.",
  },
  {
    hanji: "伊愛講鋪排話，毋是真正欲共人鬥跤手。",
    tailo:
      "I ài kóng phoo-pâi-uē, m̄ sī tsin-tsiànn beh kā lâng tàu-kha-tshiú.",
  },
  {
    hanji: "咱較停仔閬縫來去食一寡仔點心。",
    tailo:
      "Lán khah-thîng-á làng-phāng lâi-khì tsia̍h tsi̍t-kuá-á tiám-sim.",
  },
  {
    hanji: "伊是靠𪜶老爸，才有今仔日。",
    tailo: "I sī khò in lāu-pē, tsiah ū kin-á-ji̍t.",
  },
  {
    hanji: "伊行路無細膩去靠著椅條。",
    tailo: "I kiânn-lōo bô-sè-jī khì khò-tio̍h í-liâu.",
  },
  {
    hanji: "阮山頂人就是靠山食山。",
    tailo: "Guán suann-tíng lâng tō sī khò suann tsia̍h suann.",
  },
  {
    hanji: "伊的靠山真有夠力，所以才會遮爾聳鬚。",
    tailo:
      "I ê khò-suann tsin ū-kàu-la̍t, sóo-í tsiah ē tsiah-nī tshàng-tshiu.",
  },
  {
    hanji: "啉酒駛車會予警察開罰單。",
    tailo: "Lim tsiú sái-tshia ē hōo kíng-tshat khui hua̍t-tuann.",
  },
  {
    hanji: "漁船欲靠岸矣，緊來去買魚。",
    tailo: "Hî-tsûn beh khò-huānn--ah, kín lâi-khì bé hî.",
  },
  {
    hanji: "養的有時仔比親生的較有孝。",
    tailo: "Ióng--ê ū-sî-á pí tshin-senn--ê khah iú-hàu.",
  },
  {
    hanji: "阿美𪜶翁真靠俗，真好鬥陣。",
    tailo: "A-bí in ang tsin khò-sio̍k, tsin hó tàu-tīn.",
  },
  {
    hanji: "伊靠勢𪜶老爸有名，四界騙食。",
    tailo: "I khò-sè in lāu-pē ū-miâ, sì-kè phiàn-tsia̍h.",
  },
  {
    hanji: "伊就是傷靠勢，才會失敗。",
    tailo: "I tō sī siunn khò-sè, tsiah ē sit-pāi.",
  },
  {
    hanji: "𪜶兩人共彼个囡仔抾轉來養飼。",
    tailo: "In nn̄g lâng kā hit ê gín-á khioh tńg-lâi ióng-tshī.",
  },
  {
    hanji: "散甲無物件通養飼囡仔。",
    tailo: "Sàn kah bô mi̍h-kiānn thang ióng-tshī gín-á.",
  },
  {
    hanji: "落西北雨的時定定會霆雷公。",
    tailo: "Lo̍h sai-pak-hōo ê sî tiānn-tiānn ē tân-luî-kong.",
  },
  {
    hanji: "你毋通走去遐共人鬧台。",
    tailo: "Lí m̄-thang tsáu-khì hia kā lâng nāu-tâi.",
  },
  {
    hanji: "囡仔用細枝齒抿仔較好勢。",
    tailo: "Gín-á iōng sè ki khí-bín-á khah hó-sè.",
  },
  {
    hanji: "今年普渡的場面真鬧熱。",
    tailo: "Kin-nî phóo-tōo ê tiûnn-bīn tsin lāu-jia̍t.",
  },
  {
    hanji: "你哪會遐儑，毋知影人咧受氣。",
    tailo: "Lí ná ē hiah gām, m̄ tsai-iánn lâng teh siū-khì.",
  },
  {
    hanji: "人咧睏晝，你莫佇遐唱歌噪人耳。",
    tailo: "Lâng teh khùn-tàu, lí mài tī hia tshiùnn-kua tshò-lâng-hīnn.",
  },
  {
    hanji: "這件代誌予伊足凝心的。",
    tailo: "Tsit kiānn tāi-tsì hōo i tsiok gîng-sim--ê.",
  },
  {
    hanji: "你有夠儑面，遐爾懸曷敢跳落去。",
    tailo: "Lí ū-kàu gām-bīn, hiah-nī kuân a̍h kánn thiàu--lo̍h-khì.",
  },
  {
    hanji: "病若欲緊好，無噤喙是袂用得。",
    tailo: "Pēnn nā beh kín hó, bô khiūnn-tshuì sī bē-īng--tit.",
  },
  {
    hanji: "你實在是儑頭儑面，伊是頭家的姨仔，你曷敢對伊大細聲。",
    tailo:
      "Lí si̍t-tsāi sī gām-thâu-gām-bīn, i sī thâu-ke ê î-á, lí a̍h kánn tuì i tuā-sè-siann.",
  },
  {
    hanji: "噯！到月底又閣無錢矣！",
    tailo: "Aih! Kàu gue̍h-té iū-koh bô tsînn--ah!",
  },
  {
    hanji: "伊學人的，毋是家己想的。",
    tailo: "I o̍h--lâng--ê, m̄ sī ka-kī siūnn--ê.",
  },
  {
    hanji: "這馬的學力測驗敢若咱較早的聯考。",
    tailo:
      "Tsit-má ê ha̍k-li̍k tshik-giām kánn-ná lán khah-tsá ê liân-khó.",
  },
  {
    hanji: "鳥鼠仔軁對壁空入去矣。",
    tailo: "Niáu-tshí-á nǹg tuì piah-khang ji̍p--khì--ah.",
  },
  {
    hanji: "若是肯奮鬥，一定會出頭。",
    tailo: "Nā-sī khíng hùn-tàu, it-tīng ē tshut-thâu.",
  },
  {
    hanji: "壁堵是枋仔的，隔壁講話聽現現。",
    tailo: "Piah-tóo sī pang-á--ê, keh-piah kóng-uē thiann-hiān-hiān.",
  },
  {
    hanji: "每一門科學攏有相關的學理。",
    tailo: "Muí tsi̍t mn̂g kho-ha̍k lóng ū siong-kuan ê ha̍k-lí.",
  },
  {
    hanji: "入學的時陣著愛繳學費。",
    tailo: "Ji̍p-o̍h ê sî-tsūn tio̍h-ài kiáu ha̍k-huì.",
  },
  {
    hanji: "囡仔人毋通遐𠢕學話。",
    tailo: "Gín-á-lâng m̄-thang hiah gâu o̍h-uē.",
  },
  {
    hanji: "伊本成就按呢噷噷，無愛佮人相借問。",
    tailo: "I pún-tsiânn tō án-ne hm̍h-hm̍h, bô ài kah lâng sio-tsioh-mn̄g.",
  },
  {
    hanji: "壁櫥做予倚壁較袂占所在。",
    tailo: "Piah-tû tsò hōo uá piah khah bē tsiàm sóo-tsāi.",
  },
  {
    hanji: "逐暗攏愛加班，實在真操。",
    tailo: "Ta̍k àm lóng ài ka-pan, si̍t-tsāi tsin tshau.",
  },
  {
    hanji: "伊做伊看報紙，頭攏無擔起來。",
    tailo: "I tsò i khuànn pò-tsuá, thâu lóng bô tann--khí-lâi.",
  },
  {
    hanji: "做人的囝兒毋通予爸母操心。",
    tailo: "Tsò lâng ê kiánn-jî m̄-thang hōo pē-bú tshau-sim.",
  },
  {
    hanji: "伊擔任公司高級的主管。",
    tailo: "I tam-jīm kong-si ko-kip ê tsú-kuán.",
  },
  {
    hanji: "這件代誌欲按怎做據在你。",
    tailo: "Tsit kiānn tāi-tsì beh án-tsuánn tsò kì-tsāi--lí.",
  },
  {
    hanji: "戰爭會破壞辛苦建設的成果。",
    tailo: "Tsiàn-tsing ē phò-huāi sin-khóo kiàn-siat ê sîng-kó.",
  },
  {
    hanji: "以早種菜的人攏愛擔肥去沃菜。",
    tailo: "Í-tsá tsìng tshài ê lâng lóng ài tann-puî khì ak tshài.",
  },
  {
    hanji: "這件代誌我會當共你擔保。",
    tailo: "Tsit kiānn tāi-tsì guá ē-tàng kā lí tam-pó.",
  },
  {
    hanji: "這馬的野球攏真注重戰術。",
    tailo: "Tsit-má ê iá-kiû lóng tsin tsù-tiōng tsiàn-su̍t.",
  },
  {
    hanji: "伊若欲上台演講攏會懍場。",
    tailo: "I nā beh tsiūnn-tâi ián-káng lóng ē lún-tiûnn.",
  },
  {
    hanji: "你毋免為著小可代誌佇遮懊惱。",
    tailo: "Lí m̄-bián uī-tio̍h sió-khuá tāi-tsì tī tsia àu-náu.",
  },
  {
    hanji: "空喙哺舌無路用，白紙烏字才有憑準。",
    tailo:
      "Khang-tshuì-pōo-tsi̍h bô-lōo-īng, pe̍h-tsuá-oo-jī tsiah ū pîn-tsún.",
  },
  {
    hanji: "你免操煩囡仔的代誌，𪜶家己有拍算啦！",
    tailo:
      "Lí bián tshau-huân gín-á ê tāi-tsì, in ka-kī ū phah-sǹg--lah!",
  },
  {
    hanji: "做一个查埔囝愛有擔當。",
    tailo: "Tsò tsi̍t ê tsa-poo-kiánn ài ū tam-tng.",
  },
  {
    hanji: "這間公司的財務需要整頓一下。",
    tailo: "Tsit king kong-si ê tsâi-bū su-iàu tsíng-tùn--tsi̍t-ē.",
  },
  {
    hanji: "伊的面懊嘟嘟，看範勢是予𪜶頭家罵。",
    tailo: "I ê bīn àu-tū-tū, khuànn-pān-sè sī hōo in thâu-ke mē.",
  },
  {
    hanji: "你都大人大種矣，閣遮擂槌。",
    tailo: "Lí to tuā-lâng-tuā-tsíng--ah, koh tsiah luî-thuî.",
  },
  {
    hanji: "伊誠𠢕擉算盤，逐項都算甲著。",
    tailo: "I tsiânn gâu tia̍k-sǹg-puânn, ta̍k hāng to sǹg kah tio̍h.",
  },
  {
    hanji: "代誌做袂完，我實在真擔憂。",
    tailo: "Tāi-tsì tsò bē uân, guá si̍t-tsāi tsin tam-iu.",
  },
  {
    hanji: "你有啥物憑據講這種話？",
    tailo: "Lí ū siánn-mih pîn-kì kóng tsit tsióng uē?",
  },
  {
    hanji: "阿菊真擔輸贏，𪜶翁欠錢走路，伊家己拍拚趁錢替𪜶翁還數。",
    tailo:
      "A-kiok tsin tam-su-iânn, in ang khiàm tsînn tsáu-lōo, i ka-kī phah-piànn thàn-tsînn thè in ang hîng siàu.",
  },
  {
    hanji: "想著厝內囡仔的註冊錢，就感覺擔頭真重。",
    tailo:
      "Siūnn-tio̍h tshù-lāi gín-á ê tsù-tsheh-tsînn, tō kám-kak tànn-thâu tsin tāng.",
  },
  {
    hanji: "物件攏橐入去紙橐仔內面。",
    tailo: "Mi̍h-kiānn lóng lok ji̍p-khì tsuá-lok-á lāi-bīn.",
  },
  {
    hanji: "風颱連樹根規个挽起來。",
    tailo: "Hong-thai liân tshiū-kin kui-ê bán--khí-lâi.",
  },
  {
    hanji: "樹頭徛予伊在，毋驚樹尾做風颱。",
    tailo: "Tshiū-thâu khiā hōo i tsāi, m̄ kiann tshiū-bué tsò-hong-thai.",
  },
  {
    hanji: "伊彼支喙佮機關銃仝款，講袂煞。",
    tailo: "I hit ki tshuì kah ki-kuan-tshìng kāng-khuán, kóng bē suah.",
  },
  {
    hanji: "伊激力激甲規个面紅記記。",
    tailo: "I kik-la̍t kik kah kui-ê bīn âng-kì-kì.",
  },
  {
    hanji: "伊誠𠢕激五仁，激甲逐家笑咍咍。",
    tailo: "I tsiânn gâu kik-ngóo-jîn, kik kah ta̍k-ke tshiò-hai-hai.",
  },
  {
    hanji: "予老母為著這件代誌佇遐激心煩惱，實在是太不應該。",
    tailo:
      "Hōo lāu-bú uī-tio̍h tsit kiānn tāi-tsì tī hia kik-sim huân-ló, si̍t-tsāi sī thài put ing-kai.",
  },
  {
    hanji: "伊大細項代誌攏激外外，毋肯共人鬥相共。",
    tailo:
      "I tuā-sè hāng tāi-tsì lóng kik-guā-guā, m̄ khíng kā lâng tàu-sann-kāng.",
  },
  {
    hanji: "毋管你按怎講，橫直我毋信。",
    tailo: "M̄-kuán lí án-tsuánn kóng, huâinn-ti̍t guá m̄ sìn.",
  },
  {
    hanji: "伊愛激派頭就予伊去激，莫插伊。",
    tailo: "I ài kik-phài-thâu tō hōo i khì kik, mài tshap--i.",
  },
  {
    hanji: "這个囡仔袂輸咧歕風咧，大甲遮爾緊。",
    tailo: "Tsit ê gín-á bē-su teh pûn-hong--leh, tuā kah tsiah-nī kín.",
  },
  {
    hanji: "恁毋通激氣，有話好好仔講。",
    tailo: "Lín m̄-thang kik-khì, ū uē hó-hó-á kóng.",
  },
  {
    hanji: "伊真𠢕激氣，一身敢若王爺公咧。",
    tailo: "I tsin gâu kik-khuì, tsi̍t sian kánn-ná ông-iâ-kong--leh.",
  },
  {
    hanji: "伊攏是靠橫財才會遐好額。",
    tailo: "I lóng sī khò huâinn-tsâi tsiah ē hiah hó-gia̍h.",
  },
  {
    hanji: "伊彼个人有夠橫逆，竟然連老爸都敢拍。",
    tailo:
      "I hit ê lâng ū-kàu hîng-gi̍k, kìng-jiân liân lāu-pē to kánn phah.",
  },
  {
    hanji: "雄雄落雨閣無位通覕雨，規身軀沃甲澹漉漉。",
    tailo:
      "Hiông-hiông lo̍h-hōo koh bô uī thang bih hōo, kui-sin-khu ak kah tâm-lok-lok.",
  },
  {
    hanji: "彼个人橫霸霸，你毋通去惹伊。",
    tailo: "Hit ê lâng huâinn-pà-pà, lí m̄-thang khì jiá--i.",
  },
  {
    hanji: "𪜶同事大部份攏結婚矣，獨身的無幾个。",
    tailo:
      "In tông-sū tuā-pōo-hūn lóng kiat-hun--ah, to̍k-sin--ê bô kuí ê.",
  },
  {
    hanji: "深坑的豆腐是燃柴煮的，所以較芳。",
    tailo: "Tshim-khenn ê tāu-hū sī hiânn-tshâ tsú--ê, sóo-í khah phang.",
  },
  {
    hanji: "這个物件是我臆著燈猜的獎品。",
    tailo: "Tsit ê mi̍h-kiānn sī guá ioh-tio̍h ting-tshai ê tsióng-phín.",
  },
  {
    hanji: "有燈塔的指引，船仔才會當平安入港。",
    tailo: "Ū ting-thah ê tsí-ín, tsûn-á tsiah ē-tàng pîng-an ji̍p káng.",
  },
  {
    hanji: "湯拄𣁳起來爾爾，猶燒滾滾，毋好燙著。",
    tailo:
      "Thng tú khat--khí-lâi niā-niā, iáu sio-kún-kún, m̄-hó thǹg--tio̍h.",
  },
  {
    hanji: "伊筊跋輸愈濟，心內就愈燒熱。",
    tailo: "I kiáu pua̍h-su jú tsē, sim-lāi tō jú sio-jua̍h.",
  },
  {
    hanji: "發炎的空喙感覺會燒熱。",
    tailo: "Huat-iām ê khang-tshuì kám-kak ē sio-jua̍h.",
  },
  {
    hanji: "逐个囡仔攏足乖的，獨獨伊特別狡怪。",
    tailo: "Ta̍k ê gín-á lóng tsiok kuai--ê, to̍k-to̍k i ti̍k-pia̍t káu-kuài.",
  },
  {
    hanji: "物件積傷濟，無所在通囥。",
    tailo: "Mi̍h-kiānn tsik siunn tsē, bô sóo-tsāi thang khǹg.",
  },
  {
    hanji: "積一寡仔錢，以後就用會著。",
    tailo: "Tsik tsi̍t-kuá-á tsînn, í-āu tō iōng ē tio̍h.",
  },
  {
    hanji: "食落去的物件攏積牢咧。",
    tailo: "Tsia̍h--lo̍h-khì ê mi̍h-kiānn lóng tsik-tiâu--leh.",
  },
  {
    hanji: "你是瘸手是無？物件提甲落落去。",
    tailo: "Lí sī khuê-tshiú sī--bô? Mi̍h-kiānn the̍h kah lak-lak--khì.",
  },
  {
    hanji: "想欲瞞天過海無遐簡單。",
    tailo: "Siūnn-beh muâ-thinn-kuè-hái bô hiah kán-tan.",
  },
  {
    hanji: "好積德的人才會有好囝孫。",
    tailo: "Hó tsik-tik ê lâng tsiah ē ū hó kiánn-sun.",
  },
  {
    hanji: "你敢講欲瞞騙伊一世人？",
    tailo: "Lí kám-kóng beh muâ-phiàn i tsi̍t-sì-lâng?",
  },
  {
    hanji: "予囡仔縛牢咧袂當出門。",
    tailo: "Hōo gín-á pa̍k-tiâu--leh bē-tàng tshut-mn̂g.",
  },
  {
    hanji: "𪜶兩个人講甲糖甘蜜甜，敢若當咧戀愛的款。",
    tailo:
      "In nn̄g ê lâng kóng kah thn̂g-kam-bi̍t-tinn, kánn-ná tng-teh luân-ài ê khuán.",
  },
  {
    hanji: "伊佇內底縖裙，小等就出來矣。",
    tailo: "I tī lāi-té hâ kûn, sió-tán tō tshut--lâi--ah.",
  },
  {
    hanji: "五月節有真濟人家己縛粽。",
    tailo: "Gōo-gue̍h-tseh ū tsin tsē lâng ka-kī pa̍k tsàng.",
  },
  {
    hanji: "彼个囡仔生做膨皮膨皮誠古錐。",
    tailo: "Hit ê gín-á senn-tsò phòng-phuê-phòng-phuê tsiânn kóo-tsui.",
  },
  {
    hanji: "我予滾水燙一下膨疱，足疼的。",
    tailo: "Guá hōo kún-tsuí thǹg tsi̍t-ē phòng-phā, tsiok thiànn--ê.",
  },
  {
    hanji: "伊上愛膨風，你毋好予伊騙去。",
    tailo: "I siōng ài phòng-hong, lí m̄-hó hōo i phiàn--khì.",
  },
  {
    hanji: "這領膨紗衫是阿媽共你刺的。",
    tailo: "Tsit niá phòng-se-sann sī a-má kā lí tshiah--ê.",
  },
  {
    hanji: "伊足興酒的，較無興跋。",
    tailo: "I tsiok hìng tsiú--ê, khah bô hìng pua̍h.",
  },
  {
    hanji: "你毋通佇塗跤翱翱輾，衫會垃圾。",
    tailo: "Lí m̄-thang tī thôo-kha kō-kō-liàn, sann ē lah-sap.",
  },
  {
    hanji: "伊對逐項代誌攏無興頭。",
    tailo: "I tuì ta̍k hāng tāi-tsì lóng bô hìng-thâu.",
  },
  {
    hanji: "落雨矣，緊共雨傘褫開。",
    tailo: "Lo̍h-hōo--ah, kín kā hōo-suànn thí--khui.",
  },
  {
    hanji: "褲跤放放咧，褲才袂傷短。",
    tailo: "Khòo-kha pàng-pàng--leh, khòo tsiah bē siunn té.",
  },
  {
    hanji: "屎緊甲險仔袂赴通褪褲。",
    tailo: "Sái kín kah hiám-á bē-hù thang thǹg-khòo.",
  },
  {
    hanji: "較早的細漢囡仔毋是褪褲𡳞，就是穿開跤褲仔。",
    tailo:
      "Khah-tsá ê sè-hàn gín-á m̄ sī thǹg-khòo-lān, tō sī tshīng khui-kha-khòo-á.",
  },
  {
    hanji: "伊人無爽快，行路會蹁。",
    tailo: "I lâng bô sóng-khuài, kiânn-lōo ē phîn.",
  },
  {
    hanji: "伊講這件代誌是伊親目看著的。",
    tailo: "I kóng tsit kiānn tāi-tsì sī i tshin-ba̍k khuànn--tio̍h--ê.",
  },
  {
    hanji: "遮的資料愛親身交予伊。",
    tailo: "Tsia-ê tsu-liāu ài tshin-sin kau hōo--i.",
  },
  {
    hanji: "親事講袂成，免想欲結婚。",
    tailo: "Tshin-sū kóng bē sîng, bián siūnn-beh kiat-hun.",
  },
  {
    hanji: "阮小妹欲嫁，親堂攏來鬧熱。",
    tailo: "Guán sió-muē beh kè, tshin-tông lóng lâi lāu-jia̍t.",
  },
  {
    hanji: "咱是親情，煞為著金錢拍歹感情。",
    tailo:
      "Lán sī tshin-tsiânn, suah uī-tio̍h kim-tsînn phah-pháinn kám-tsîng.",
  },
  {
    hanji: "𪜶兩个好甲親像兄弟仔仝款。",
    tailo: "In nn̄g ê hó kah tshin-tshiūnn hiann-tī-á kāng-khuán.",
  },
  {
    hanji: "伊的面貓貓，規面專𤶃仔子。",
    tailo: "I ê bīn niau-niau, kui bīn tsuan thiāu-á-tsí.",
  },
  {
    hanji: "你提一千箍出去，有賰錢轉來無？",
    tailo:
      "Lí the̍h tsi̍t-tshing khoo tshut--khì, ū tshun-tsînn tńg--lâi--bô?",
  },
  {
    hanji: "身軀邊若無賰錢，欲用的時陣就愛共人伸長手。",
    tailo:
      "Sin-khu-pinn nā bô tshun-tsînn, beh īng ê sî-tsūn tō ài kā lâng tshun-tn̂g-tshiú.",
  },
  {
    hanji: "天貓霧仔光伊就起來矣。",
    tailo: "Thinn bâ-bū-á-kng i tō khí--lâi--ah.",
  },
  {
    hanji: "我佮阿珠仔咧扮公伙仔。",
    tailo: "Guá kah A-tsu--á teh pān-kong-hué-á.",
  },
  {
    hanji: "無論我按怎苦勸，伊就是袂醒悟。",
    tailo: "Bô-lūn guá án-tsuánn khóo-khǹg, i tō sī bē síng-ngōo.",
  },
  {
    hanji: "這擺請人客是欲辦桌，抑是欲去食餐廳？",
    tailo:
      "Tsit pái tshiánn-lâng-kheh sī beh pān-toh, ia̍h-sī beh khì tsia̍h-tshan-thiann?",
  },
  {
    hanji: "去大賣辦貨是用割價，有較俗。",
    tailo: "Khì tuā-bē pān-huè sī iōng kuah-kè, ū khah sio̍k.",
  },
  {
    hanji: "比賽愛注意風度，毋通干焦關心輸贏。",
    tailo: "Pí-sài ài tsù-ì hong-tōo, m̄-thang kan-na kuan-sim su-iânn.",
  },
  {
    hanji: "咱來輸贏，看啥人講的較著。",
    tailo: "Lán lâi su-iânn, khuànn siánn-lâng kóng--ê khah tio̍h.",
  },
  {
    hanji: "伊見若出門攏雕一軀西裝。",
    tailo: "I kiàn-nā tshut-mn̂g lóng tiau tsi̍t su se-tsong.",
  },
  {
    hanji: "物件囥佇遮，欲食毋食隨在伊。",
    tailo: "Mi̍h-kiānn khǹg tī tsia, beh tsia̍h m̄ tsia̍h suî-tsāi--i.",
  },
  {
    hanji: "三義彼搭的雕刻誠出名。",
    tailo: "Sam-gī hit-tah ê tiau-khik tsiânn tshut-miâ.",
  },
  {
    hanji: "你袂使隨便入去人的厝內。",
    tailo: "Lí bē-sái suî-piān ji̍p-khì lâng ê tshù-lāi.",
  },
  {
    hanji: "行路的時，隨時愛注意車。",
    tailo: "Kiânn-lōo ê sî, suî-sî ài tsù-ì tshia.",
  },
  {
    hanji: "你莫閣催矣，我隨時到。",
    tailo: "Lí mài koh tshui--ah, guá suî-sî kàu.",
  },
  {
    hanji: "銀行共這間工廠的錢根抽轉去。",
    tailo:
      "Gîn-hâng kā tsit king kang-tshiúnn ê tsînn-kin thiu--tńg-khì.",
  },
  {
    hanji: "你敢若錢鬼咧，共你借一屑仔錢閣著算利息。",
    tailo:
      "Lí kánn-ná tsînn-kuí--leh, kā lí tsioh tsi̍t-sut-á tsînn koh tio̍h sǹg lī-sik.",
  },
  {
    hanji: "地下錢莊是咧放重利的。",
    tailo: "Tē-hā tsînn-tsng sī teh pàng-tāng-lāi--ê.",
  },
  {
    hanji: "食人的頭路，錢項的代誌愛較細膩咧。",
    tailo:
      "Tsia̍h lâng ê thâu-lōo, tsînn-hāng ê tāi-tsì ài khah sè-jī--leh.",
  },
  {
    hanji: "請逐家隨意，毋通拘禮。",
    tailo: "Tshiánn ta̍k-ke suî-ì, m̄-thang khu lé.",
  },
  {
    hanji: "伊雄雄走出來，我險險共伊挵著。",
    tailo:
      "I hiông-hiông tsáu--tshut-lâi, guá hiám-hiám kā i lòng--tio̍h.",
  },
  {
    hanji: "這項買賣，一頭欲，一頭毋。",
    tailo: "Tsit hāng bé-bē, tsi̍t thâu beh, tsi̍t thâu m̄.",
  },
  {
    hanji: "𪜶新婦咧欲生頭上仔矣。",
    tailo: "In sin-pū teh-beh senn thâu-tsiūnn-á--ah.",
  },
  {
    hanji: "今年頭水的柚仔真好食。",
    tailo: "Kin-nî thâu-tsuí ê iū-á tsin hó-tsia̍h.",
  },
  {
    hanji: "講著臺北，伊真是頭目鳥。",
    tailo: "Kóng-tio̍h Tâi-pak, i tsin sī thâu-ba̍k-tsiáu.",
  },
  {
    hanji: "我頭先是去彼爿，後來才來遮的。",
    tailo: "Guá thâu-sing sī khì hit pîng, āu--lâi tsiah lâi tsia--ê.",
  },
  {
    hanji: "伊逐擺考試攏想欲得頭名。",
    tailo: "I ta̍k-pái khó-tshì lóng siūnn-beh tit thâu-miâ.",
  },
  {
    hanji: "你毋知頭尾毋通烏白講話。",
    tailo: "Lí m̄ tsai thâu-bué m̄-thang oo-pe̍h kóng-uē.",
  },
  {
    hanji: "我蹛遮頭尾嘛已經有兩冬矣。",
    tailo: "Guá tuà tsia thâu-bué mā í-king ū nn̄g tang--ah.",
  },
  {
    hanji: "這條路頭到彼間是醫生館。",
    tailo: "Tsit tiâu lōo thâu-kàu hit king sī i-sing-kuán.",
  },
  {
    hanji: "家己出來做頭家，較免看人的頭面。",
    tailo:
      "Ka-kī tshut-lâi tsò thâu-ke, khah bián khuànn lâng ê thâu-bīn.",
  },
  {
    hanji: "阿娥佮𪜶頭家攏佇菜市仔賣物件。",
    tailo: "A-ngôo kah in thâu-ke lóng tī tshài-tshī-á bē mi̍h-kiānn.",
  },
  {
    hanji: "彼个頭家娘對人客誠好禮。",
    tailo: "Hit ê thâu-ke-niû tuì lâng-kheh tsiânn hó-lé.",
  },
  {
    hanji: "我感覺頭眩目暗，人無爽快。",
    tailo: "Guá kám-kak thâu-hîn-ba̍k-àm, lâng bô sóng-khuài.",
  },
  {
    hanji: "伊頭起先無想欲投資，聽我說明了後才決定欲加入。",
    tailo:
      "I thâu-khí-sing bô siūnn-beh tâu-tsu, thiann guá suat-bîng liáu-āu tsiah kuat-tīng beh ka-ji̍p.",
  },
  {
    hanji: "頭家呵咾伊的頭殼好，想欲共伊升起來做主管。",
    tailo:
      "Thâu-ke o-ló i ê thâu-khak hó, siūnn-beh kā i sing khí-lâi tsò tsú-kuán.",
  },
  {
    hanji: "一暝全頭路，天光無半步。",
    tailo: "Tsi̍t mê tsuân thâu-lōo, thinn-kng bô-puànn-pōo.",
  },
  {
    hanji: "這層代誌到今我猶捎無頭摠。",
    tailo: "Tsit tsân tāi-tsì kàu-tann guá iáu sa-bô thâu-tsáng.",
  },
  {
    hanji: "一甌茶連鞭嫌燒，連鞭嫌冷，你實在有夠龜毛。",
    tailo:
      "Tsi̍t au tê liâm-mi hiâm sio, liâm-mi hiâm líng, lí si̍t-tsāi ū-kàu ku-moo.",
  },
  {
    hanji: "𪜶兩个袂輸一對鴛鴦，出入攏做陣。",
    tailo: "In nn̄g ê  bē-su tsi̍t tuì uan-iunn, tshut-ji̍p lóng tsò-tīn.",
  },
  {
    hanji: "伊知影考牢矣，就暢甲嚓嚓趒！",
    tailo: "I tsai-iánn khó-tiâu--ah, tō thiòng kah tshia̍k-tshia̍k-tiô!",
  },
  {
    hanji: "伊的優點就是對人真有禮貌。",
    tailo: "I ê iu-tiám tō sī tuì lâng tsin ū-lé-māu.",
  },
  {
    hanji: "恁阿兄佇便所內底擠𤶃仔。",
    tailo: "Lín a-hiann tī piān-sóo lāi-té tsik thiāu-á.",
  },
  {
    hanji: "今仔日這棚戲是搬啥物戲文？",
    tailo: "Kin-á-ji̍t tsit pênn hì sī puann siánn-mih hì-bûn?",
  },
  {
    hanji: "這款小可仔代誌我來應付就好。",
    tailo: "Tsit khuán sió-khuá-á tāi-tsì guá lâi ìng-hù tō hó.",
  },
  {
    hanji: "戲弄別人嘛是對家己無尊重。",
    tailo: "Hì-lāng pa̍t-lâng mā sī tuì ka-kī bô tsun-tiōng.",
  },
  {
    hanji: "伊定定共阿生戲弄，講伊是一个大箍呆。",
    tailo:
      "I tiānn-tiānn kā A-sing hì-lāng, kóng i sī tsi̍t ê tuā-khoo-tai.",
  },
  {
    hanji: "我懇求你，原諒伊的過失。",
    tailo: "Guá khún-kiû--lí, guân-liōng i ê kuè-sit.",
  },
  {
    hanji: "煮魚仔湯愛用燒酒壓味。",
    tailo: "Tsú hî-á-thng ài īng sio-tsiú ah-bī.",
  },
  {
    hanji: "這種藥仔食了敢有應效？",
    tailo: "Tsit tsióng io̍h-á tsia̍h-liáu kám ū ìng-hāu?",
  },
  {
    hanji: "戲班走江湖，四界表演。",
    tailo: "Hì-pan tsáu-kang-ôo, sì-kè piáu-ián.",
  },
  {
    hanji: "叫你莫佮序大人應喙，你是無聽著呢？",
    tailo:
      "Kiò lí mài kah sī-tuā-lâng ìn-tshuì, lí sī bô thiann--tio̍h--nih?",
  },
  {
    hanji: "做序細的無應該佮序大人應喙應舌。",
    tailo: "Tsò sī-sè--ê bô ing-kai kah sī-tuā-lâng ìn-tshuì-ìn-tsi̍h.",
  },
  {
    hanji: "你共柑仔擘開分予逐家食。",
    tailo: "Lí kā kam-á peh-khui pun hōo ta̍k-ke tsia̍h.",
  },
  {
    hanji: "我佮伊約佇戲園門口見面。",
    tailo: "Guá kah i iok tī hì-hn̂g mn̂g-kháu kìnn-bīn.",
  },
  {
    hanji: "我咧佮你講話，你是按怎攏毋應話？",
    tailo: "Guá teh kah lí kóng-uē, lí sī-án-tsuánn lóng m̄ ìn-uē?",
  },
  {
    hanji: "你這个囡仔愈來愈𠢕應話矣。",
    tailo: "Lí tsit ê gín-á jú lâi jú gâu ìn-uē--ah.",
  },
  {
    hanji: "叫你莫去你毋聽，有這種結果，應該啦！",
    tailo:
      "Kiò lí mài khì lí m̄ thiann, ū tsit tsióng kiat-kó, ing-kai--lah!",
  },
  {
    hanji: "所費逐家公開這是應該然的。",
    tailo: "Sóo-huì ta̍k-ke kong-khui tse sī ing-kai-jiân--ê.",
  },
  {
    hanji: "伊今仔日有應酬，會較晏轉來。",
    tailo: "I kin-á-ji̍t ū ìng-siû, ē khah uànn tńg--lâi.",
  },
  {
    hanji: "鼻仔都擤甲紅絳絳矣你閣一直擤鼻。",
    tailo:
      "Phīnn-á to tshìng kah âng-kòng-kòng--ah lí koh it-ti̍t tshìng-phīnn.",
  },
  {
    hanji: "老的老步定，少年的較懂嚇。",
    tailo: "Lāu--ê lāu-pōo-tiānn, siàu-liân--ê khah táng-hiannh.",
  },
  {
    hanji: "人咧叫你，你嘛共人應聲一下。",
    tailo: "Lâng teh kiò--lí, lí mā kā lâng ìn-siann--tsi̍t-ē.",
  },
  {
    hanji: "伊就是傷壓霸，才會遐顧人怨。",
    tailo: "I tō sī siunn ah-pà, tsiah ē hiah kòo-lâng-uàn.",
  },
  {
    hanji: "檢采赴袂著尾幫車，你就留蹛𪜶兜隔暝好矣。",
    tailo:
      "Kiám-tshái hù bē tio̍h bué-pang-tshia, lí tō lâu tuà in tau keh-mê hó--ah.",
  },
  {
    hanji: "𪜶兩个人一定有曖昧。",
    tailo: "In nn̄g ê lâng it-tīng ū ài-māi.",
  },
  {
    hanji: "遐的物件予警察提去檢驗，看是毋是毒品。",
    tailo:
      "Hia-ê mi̍h-kiānn hōo kíng-tshat the̍h-khì kiám-giām, khuànn sī m̄ sī to̍k-phín.",
  },
  {
    hanji: "素色的衫佮有色的衫毋通濫做伙洗。",
    tailo: "Sòo-sik ê sann kah ū sik ê sann m̄-thang lām tsò-hué sé.",
  },
  {
    hanji: "龍眼乾較燥，毋通食濟。",
    tailo: "Lîng-gíng-kuann khah sò, m̄-thang tsia̍h tsē.",
  },
  {
    hanji: "濟少你嘛共伊贊助一下。",
    tailo: "Tsē-tsió lí mā kā i tsàn-tsōo--tsi̍t-ē.",
  },
  {
    hanji: "這領衫猶閣溼溼，猶未真焦。",
    tailo: "Tsit niá sann iáu-koh sip-sip, iáu-buē tsin ta.",
  },
  {
    hanji: "過年時濟濟人無法度轉去圍爐。",
    tailo: "Kuè-nî sî tsē-tsē lâng bô-huat-tōo tńg-khì uî-lôo.",
  },
  {
    hanji: "你定定按呢濫糝開，莫怪會喝無錢。",
    tailo: "Lí tiānn-tiānn án-ne lām-sám khai, bo̍k-kuài ē huah bô tsînn.",
  },
  {
    hanji: "茶甌仔先用滾水盪一下。",
    tailo: "Tê-au-á sing iōng kún-tsuí tn̄g--tsi̍t-ē.",
  },
  {
    hanji: "我瞭過爾爾，無看清楚。",
    tailo: "Guá lió--kuè niā-niā, bô khuànn tshing-tshó.",
  },
  {
    hanji: "門傷重，愛瞪力才捒會開。",
    tailo: "Mn̂g siunn tāng, ài tènn-la̍t tsiah sak ē khui.",
  },
  {
    hanji: "開刀了後需要療養一段時間。",
    tailo: "Khui-to liáu-āu su-iàu liâu-ióng tsi̍t tuānn sî-kan.",
  },
  {
    hanji: "你的褲裂開矣，緊褪起來縫一下。",
    tailo: "Lí ê khòo li̍h--khui--ah, kín thǹg khí-lâi pâng--tsi̍t-ē.",
  },
  {
    hanji: "窗仔有縫，風攏對遐貫入來。",
    tailo: "Thang-á ū phāng, hong lóng tuì hia kǹg--ji̍p-lâi.",
  },
  {
    hanji: "當咧嗽閣食冰，嚨喉會縮起來。",
    tailo: "Tng-teh sàu koh tsia̍h ping, nâ-âu ē sok--khí-lâi.",
  },
  {
    hanji: "遮的物件總共愛偌濟錢？",
    tailo: "Tsia-ê mi̍h-kiānn tsóng-kiōng ài guā-tsē tsînn?",
  },
  {
    hanji: "咱總是愛想辦法解決這件代誌。",
    tailo: "Lán tsóng--sī ài siūnn pān-huat kái-kuat tsit kiānn tāi-tsì.",
  },
  {
    hanji: "伊的性地是袂䆀，總是袂曉扞家就毋好。",
    tailo: "I ê sìng-tē sī bē-bái, tsóng--sī bē-hiáu huānn-ke tō m̄ hó.",
  },
  {
    hanji: "總計需要五十箱才有夠。",
    tailo: "Tsóng-kè su-iàu gōo-tsa̍p siunn tsiah ū-kàu.",
  },
  {
    hanji: "麻糍做好愛糝粉才袂黏做伙。",
    tailo: "Muâ-tsî tsò-hó ài sám-hún tsiah bē liâm tsò-hué.",
  },
  {
    hanji: "伊是公司的總裁，當然愛聽伊的。",
    tailo: "I sī kong-si ê tsóng-tshâi, tong-jiân ài thiann i ê.",
  },
  {
    hanji: "頭家，賰的我總貿，你算我較俗咧。",
    tailo: "Thâu-ke, tshun--ê guá tsóng-bāu, lí sǹg guá khah sio̍k--leh.",
  },
  {
    hanji: "囡仔若毋食糜飯，爸母會煩惱伊飼袂大漢。",
    tailo: "Gín-á nā m̄ tsia̍h muê-pn̄g, pē-bú ē huân-ló i tshī bē tuā-hàn.",
  },
  {
    hanji: "彼台車予人挵甲糜糜卯卯。",
    tailo: "Hit tâi tshia hōo lâng lòng kah mi-mi-mauh-mauh.",
  },
  {
    hanji: "彼件代誌予伊創甲糜糜卯卯。",
    tailo: "Hit kiānn tāi-tsì hōo i tshòng kah mi-mi-mauh-mauh.",
  },
  {
    hanji: "講來講去，總講一句是你毋著。",
    tailo: "Kóng lâi kóng khì, tsóng-kóng--tsi̍t-kù sī lí m̄-tio̍h.",
  },
  {
    hanji: "你若閣予我掠著，皮就繃較絚咧。",
    tailo: "Lí nā koh hōo guá lia̍h--tio̍h, phuê tō penn khah ân--leh.",
  },
  {
    hanji: "這領衫料無好，穿著繃繃。",
    tailo: "Tsit niá sann liāu bô hó, tshīng tio̍h penn-penn.",
  },
  {
    hanji: "若講著無頭神，你佮伊有繃。",
    tailo: "Nā kóng-tio̍h bô-thâu-sîn, lí kah i ū penn.",
  },
  {
    hanji: "伊真𠢕變竅，這方面你佮伊無繃。",
    tailo: "I tsin gâu piàn-khiàu, tsit hong-bīn lí kah i bô penn.",
  },
  {
    hanji: "伊想欲創啥，早就予逐家臆出出矣。",
    tailo:
      "I siūnn-beh tshòng siannh, tsá tō hōo ta̍k-ke ioh-tshut-tshut--ah.",
  },
  {
    hanji: "規庄的人聯合起來對付伊。",
    tailo: "Kui tsng ê lâng liân-ha̍p khí-lâi tuì-hù--i.",
  },
  {
    hanji: "聰明的人學啥物攏真簡單。",
    tailo: "Tshong-bîng ê lâng o̍h siánn-mih lóng tsin kán-tan.",
  },
  {
    hanji: "伊的身材瘦閣兼薄板，敢搬有法？",
    tailo: "I ê sin-tsâi sán koh kiam po̍h-pán, kám puann ū huat?",
  },
  {
    hanji: "我心肝內的艱苦啥人知？",
    tailo: "Guá sim-kuann-lāi ê kan-khóo siánn-lâng tsai?",
  },
  {
    hanji: "伊今仔日人艱苦，無來上課。",
    tailo: "I kin-á-ji̍t lâng kan-khóo, bô lâi siōng-khò.",
  },
  {
    hanji: "做工課做甲艱苦罪過，規氣莫做。",
    tailo: "Tsò khang-khuè tsò kah kan-khóo-tsē-kuà, kui-khì mài tsò.",
  },
  {
    hanji: "頭家臨時講欲開會，我無時間通攢資料。",
    tailo:
      "Thâu-ke lîm-sî kóng beh khui-huē, guá bô sî-kan thang tshuân tsu-liāu.",
  },
  {
    hanji: "伊這个工課是臨時的，毋是在額的。",
    tailo: "I tsit ê khang-khuè sī lîm-sî--ê, m̄ sī tsāi-gia̍h--ê.",
  },
  {
    hanji: "伊怨嘆家己愛著薄情的人。",
    tailo: "I uàn-thàn ka-kī ài-tio̍h po̍k-tsîng ê lâng.",
  },
  {
    hanji: "伊臨終的時陣，交代我愛好好照顧你。",
    tailo: "I lîm-tsiong ê sî-tsūn, kau-tài guá ài hó-hó tsiàu-kòo--lí.",
  },
  {
    hanji: "伊真有膽量，啥物攏毋驚。",
    tailo: "I tsin ū tám-liōng, siánn-mih lóng m̄ kiann.",
  },
  {
    hanji: "這个候選人聲勢有夠大。",
    tailo: "Tsit ê hāu-suán-jîn siann-sè ū-kàu tuā.",
  },
  {
    hanji: "伊有錢有地位，莫怪伊咧聳勢。",
    tailo: "I ū tsînn ū tē-uī, bo̍k-kuài i teh sáng-sè.",
  },
  {
    hanji: "伊出門攏有司機，真聳勢。",
    tailo: "I tshut-mn̂g lóng ū su-ki, tsin sáng-sè.",
  },
  {
    hanji: "伊佮下跤手人講話嘛真好聲說。",
    tailo: "I kah ē-kha-tshiú-lâng kóng-uē mā tsin hó siann-sueh.",
  },
  {
    hanji: "伊家己一个人敢行暗路，膽頭真在。",
    tailo: "I ka-kī tsi̍t ê lâng kánn kiânn àm-lōo, tánn-thâu tsin tsāi.",
  },
  {
    hanji: "天氣變涼矣，你閣穿甲薄縭絲。",
    tailo: "Thinn-khì piàn liâng--ah, lí koh tshīng kah po̍h-li-si.",
  },
  {
    hanji: "半暝仔一个人行路轉去，心肝內小可膽膽。",
    tailo:
      "Puànn-mê-á tsi̍t ê lâng kiânn-lōo tńg--khì, sim-kuann-lāi sió-khuá tám-tám.",
  },
  {
    hanji: "閣差臨臨仔就會跋落去溝仔底。",
    tailo: "Koh tsha lím-lím--á tō ē pua̍h lo̍h-khì kau-á-té.",
  },
  {
    hanji: "聲聲句句講欲做好囝，串做攏予人受氣的歹代誌。",
    tailo:
      "Siann-siann-kù-kù kóng beh tsò hó-kiánn, tshuàn tsò lóng hōo lâng siū-khì ê pháinn tāi-tsì.",
  },
  {
    hanji: "明明知影伊的病無藥醫，欲放棄治療心內嘛是真艱難。",
    tailo:
      "Bîng-bîng tsai-iánn i ê pēnn bô io̍h i, beh hòng-khì tī-liâu sim-lāi mā sī tsin kan-lân.",
  },
  {
    hanji: "你免聳鬚，連鞭警察就來矣。",
    tailo: "Lí bián tshàng-tshiu, liâm-mi kíng-tshat tō lâi--ah.",
  },
  {
    hanji: "番薑真薟，食著會凍舌。",
    tailo: "Huan-kiunn tsin hiam, tsia̍h tio̍h ē tàng-tsi̍h.",
  },
  {
    hanji: "蔥頭味真薟，予人切甲流目屎。",
    tailo: "Tshang-thâu bī tsin hiam, hōo lâng tshiat kah lâu ba̍k-sái.",
  },
  {
    hanji: "伊對我遮爾好，我煞無法度共伊鬥相共，心內感覺真虧欠。",
    tailo:
      "I tuì guá tsiah-nī hó, guá suah bô-huat-tōo kā i tàu-sann-kāng, sim-lāi kám-kak tsin khui-khiàm.",
  },
  {
    hanji: "煮麻油雞一定愛先用薑母落去炒。",
    tailo: "Tsú muâ-iû-ke it-tīng ài sing īng kiunn-bó lo̍h-khì tshá.",
  },
  {
    hanji: "伊共公司的錢虧空了了。",
    tailo: "I kā kong-si ê tsînn khui-khong-liáu-liáu.",
  },
  {
    hanji: "我若講伊幾句仔伊就無歡喜。",
    tailo: "Guá nā kóng--i--kuí-kù-á i tō bô huann-hí.",
  },
  {
    hanji: "你共遮的物件囥入去觳仔內底。",
    tailo: "Lí kā tsia-ê mi̍h-kiānn khǹg ji̍p-khì khok-á lāi-té.",
  },
  {
    hanji: "這件代誌我代先佮伊講好矣。",
    tailo: "Tsit kiānn tāi-tsì guá tāi-sing kah i kóng-hó--ah.",
  },
  {
    hanji: "你生理欲做，衛生嘛愛講究。",
    tailo: "Lí sing-lí beh tsò, uē-sing mā ài káng-kiù.",
  },
  {
    hanji: "彼攏是謠言，你毋通相信。",
    tailo: "He lóng sī iâu-giân, lí m̄-thang siong-sìn.",
  },
  {
    hanji: "𪜶兩个人已經講和矣。",
    tailo: "In nn̄g ê lâng í-king kóng-hô--ah.",
  },
  {
    hanji: "這馬這个時勢真歹賺食。",
    tailo: "Tsit-má tsit ê sî-sè tsin pháinn tsuán-tsia̍h.",
  },
  {
    hanji: "你莫閣講笑矣，緊去做代誌。",
    tailo: "Lí mài koh kóng-tshiò--ah, kín khì tsò tāi-tsì.",
  },
  {
    hanji: "無，你是佇咧講笑詼是毋？",
    tailo: "Bô, lí sī tī-leh kóng-tshiò-khue sī--m̄?",
  },
  {
    hanji: "講起阮細漢的時，生活真艱苦。",
    tailo: "Kóng-khí guán sè-hàn ê sî, sing-ua̍h tsin kan-khóo.",
  },
  {
    hanji: "這擺你做甲遐爾仔超過，我看是無人會閣替你講情矣。",
    tailo:
      "Tsit pái lí tsò kah hiah-nī-á tshiau-kuè, guá khuànn sī bô lâng ē koh thè lí kóng-tsîng--ah.",
  },
  {
    hanji: "這幾工仔伊攏毋講話，是有啥物蹊蹺無？",
    tailo:
      "Tsit kuí-kang-á i lóng m̄ kóng-uē, sī ū siánn-mih khi-khiau--bô?",
  },
  {
    hanji: "伊決定欲刣一隻豬去謝願。",
    tailo: "I kuat-tīng beh thâi tsi̍t tsiah ti khì siā-guān.",
  },
  {
    hanji: "這我昨昏共你借的，還你。",
    tailo: "Tse guá tsa-hng kā lí tsioh--ê, hîng--lí.",
  },
  {
    hanji: "白米還白米，糙米還糙米，愛分開囥，毋通相濫。",
    tailo:
      "Pe̍h-bí huān pe̍h-bí, tshò-bí huān tshò-bí, ài hun-khui khǹg, m̄-thang sio-lām.",
  },
  {
    hanji: "伊大舌所以講話袂輾轉。",
    tailo: "I tuā-tsi̍h sóo-í kóng-uē bē liàn-tńg.",
  },
  {
    hanji: "食人頭鍾酒，講人頭句話。",
    tailo: "Tsia̍h lâng thâu tsing tsiú, kóng lâng thâu kù uē.",
  },
  {
    hanji: "雖然風颱已經轉向矣，毋過也愛預防做大水。",
    tailo:
      "Sui-jiân hong-thai í-king tsuán hiòng--ah, m̄-koh iā ài ī-hông tsò-tuā-tsuí.",
  },
  {
    hanji: "這號代誌你拍算欲隱瞞伊偌久？",
    tailo: "Tsit-lō tāi-tsì lí phah-sǹg beh ún-muâ i guā-kú?",
  },
  {
    hanji: "伊不管時都穿甲真鮮沢。",
    tailo: "I put-kuán-sî to tshīng kah tsin tshinn-tshioh.",
  },
  {
    hanji: "我的衫予人黜一空真大空。",
    tailo: "Guá ê sann hōo lâng thuh tsi̍t khang tsin tuā khang.",
  },
  {
    hanji: "索仔愛拍死結才袂甪去。",
    tailo: "Soh-á ài phah sí-kat tsiah bē lut--khì.",
  },
  {
    hanji: "伊咧睏會鼾，佮伊睏足吵的。",
    tailo: "I teh khùn ē kônn, kah i khùn tsiok tshá--ê.",
  },
  {
    hanji: "伊真愛歕雞胿，總有一工會予人黜破。",
    tailo:
      "I tsin ài pûn-ke-kui, tsóng ū tsi̍t kang ē hōo lâng thuh-phuà.",
  },
  {
    hanji: "彼號代誌若去予人點破，你會足落氣的。",
    tailo:
      "Hit-lō tāi-tsì nā khì hōo lâng tiám-phuà, lí ē tsiok làu-khuì--ê.",
  },
  {
    hanji: "阮阿母欲𤆬我去點痣。",
    tailo: "Guán a-bú beh tshuā guá khì tiám-kì.",
  },
  {
    hanji: "包裹愛用黏膠黏咧，才袂開去。",
    tailo: "Pau-kó ài īng liâm-ka liâm--leh, tsiah bē khui--khì.",
  },
  {
    hanji: "無伊共你點醒，你較想嘛想袂清楚。",
    tailo:
      "Bô i kā lí tiám-tshénn, lí khah siūnn mā siūnn bē tshing-tshó.",
  },
  {
    hanji: "伊帶痚呴，睏甲鼾鼾叫，足吵的。",
    tailo: "I tài he-ku, khùn kah huânn-huânn-kiò, tsiok tshá--ê.",
  },
  {
    hanji: "我已經坐三點鐘久的車矣。",
    tailo: "Guá í-king tsē sann tiám-tsing kú ê tshia--ah.",
  },
  {
    hanji: "風吹去經著樹椏，一下出力掣，線煞斷去矣。",
    tailo:
      "Hong-tshue khì kenn-tio̍h tshiū-ue, tsi̍t-ē tshut-la̍t tshuah, suànn suah tn̄g--khì--ah.",
  },
  {
    hanji: "門跤口彼袋糞埽順紲提出去擲㧒捔。",
    tailo:
      "Mn̂g-kha-kháu hit tē pùn-sò sūn-suà the̍h tshut-khì tàn-hiat-ka̍k.",
  },
  {
    hanji: "醫生講伊這个病會好也袂斷根。",
    tailo: "I-sing kóng i tsit ê pēnn ē hó iā bē tn̄g-kin.",
  },
  {
    hanji: "伊話猶未講煞就斷氣矣。",
    tailo: "I uē iáu-buē kóng-suah tō tn̄g-khuì--ah.",
  },
  {
    hanji: "斷掌查埔做相公，斷掌查某守空房。",
    tailo:
      "Tn̄g-tsiúnn tsa-poo tsò siùnn-kang, tn̄g-tsiúnn tsa-bóo tsiú khang-pâng.",
  },
  {
    hanji: "伊因為擾亂治安，予警察掠去。",
    tailo: "I in-uī jiáu-luān tī-an, hōo kíng-tshat lia̍h--khì.",
  },
  {
    hanji: "水溝仔窒牢咧，落大雨的時水瀉袂出去。",
    tailo:
      "Tsuí-kau-á that-tiâu--leh, lo̍h tuā-hōo ê sî tsuí sià bē tshut--khì.",
  },
  {
    hanji: "提去外口予日頭爁一下。",
    tailo: "The̍h-khì guā-kháu hōo ji̍t-thâu nah--tsi̍t-ē.",
  },
  {
    hanji: "九月狗爁日，頇顢查某理袂直。",
    tailo: "Káu--gue̍h káu nah-ji̍t, hân-bān tsa-bóo lí bē-ti̍t.",
  },
  {
    hanji: "早就共你講，無彼號尻川就毋通食彼號瀉藥仔。",
    tailo:
      "Tsá tō kā lí kóng, bô hit-lō kha-tshng tō m̄-thang tsia̍h hit lō sià-io̍h-á.",
  },
  {
    hanji: "伊酒癖無好，啉酒了後會亂罵人。",
    tailo: "I tsiú-phiah bô hó, lim tsiú liáu-āu ē luān mē--lâng.",
  },
  {
    hanji: "伊頭殼去挵著桌角煞腫一癗。",
    tailo: "I thâu-khak khì lòng-tio̍h toh-kak suah tsíng tsi̍t luî.",
  },
  {
    hanji: "伊彼个人誠甕肚，有好空的攏毋共人講。",
    tailo:
      "I hit ê lâng tsiânn àng-tōo, ū hó-khang--ê lóng m̄ kā lâng kóng.",
  },
  {
    hanji: "伊真甕肚，我真驚會去予伊害著。",
    tailo: "I tsin àng-tōo, guá tsin kiann ē khì hōo i hāi--tio̍h.",
  },
  {
    hanji: "伊一个癖性佮人無仝款。",
    tailo: "I tsi̍t ê phiah-sìng kah lâng bô kāng-khuán.",
  },
  {
    hanji: "這批貨應該後禮拜就會到矣。",
    tailo: "Tsit phue huè ing-kai āu lé-pài tō ē kàu--ah.",
  },
  {
    hanji: "禮拜咱才做伙來去看電影。",
    tailo: "Lé-pài lán tsiah tsò-hué lâi-khì khuànn tiān-iánn.",
  },
  {
    hanji: "𪜶兩个決定欲佇禮拜堂結婚。",
    tailo: "In nn̄g ê kuat-tīng beh tī lé-pài-tn̂g kiat-hun.",
  },
  {
    hanji: "咱攏是家己的人，毋免遮爾仔厚禮數。",
    tailo: "Lán lóng sī ka-kī ê lâng, m̄-bián tsiah-nī-á kāu-lé-sòo.",
  },
  {
    hanji: "景氣誠䆀，真濟人揣無穡頭通好做。",
    tailo:
      "Kíng-khì tsiânn bái, tsin tsē lâng tshuē-bô sit-thâu thang-hó tsò.",
  },
  {
    hanji: "領帶傷絚，繏甲我強欲袂喘氣。",
    tailo: "Niá-tuà siunn ân, sǹg kah guá kiōng-beh bē tshuán-khuì.",
  },
  {
    hanji: "𪜶兜的祖產予伊翸了了。",
    tailo: "In tau ê tsóo-sán hōo i phún-liáu-liáu.",
  },
  {
    hanji: "佇眠床頂翻來翻去，睏袂去。",
    tailo: "Tī bîn-tshn̂g-tíng huan-lâi-huan-khì, khùn bē khì.",
  },
  {
    hanji: "千途萬途，毋值得翻田塗。",
    tailo: "Tshian tôo bān tôo, m̄ ta̍t-tit huan tshân-thôo.",
  },
  {
    hanji: "這句話翻做英語欲按怎講？",
    tailo: "Tsit kù uē huan-tsò Ing-gí beh án-tsuánn kóng?",
  },
  {
    hanji: "牛郎織女每年七夕相會。",
    tailo: "Gû-nn̂g Tsit-lí muí-nî tshit-sia̍h siong-huē.",
  },
  {
    hanji: "伊舊年考無牢，今年閣考，考了真好。",
    tailo: "I kū-nî khó bô tiâu, kin-nî koh khó, khó liáu tsin hó.",
  },
  {
    hanji: "這个職位對你來講有較委屈。",
    tailo: "Tsit ê tsit-uī tuì lí lâi kóng ū khah uí-khut.",
  },
  {
    hanji: "這个所在傷狹，攏袂翻身得。",
    tailo: "Tsit ê sóo-tsāi siunn e̍h, lóng bē-huan-sin--tit.",
  },
  {
    hanji: "阮兜舊年翻厝開袂少錢。",
    tailo: "Guán tau kū-nî huan-tshù khai bē tsió tsînn.",
  },
  {
    hanji: "做職員領薪水，趁無偌濟錢。",
    tailo: "Tsò tsit-uân niá sin-suí, thàn bô guā-tsē tsînn.",
  },
  {
    hanji: "明仔載無來翻草袂用得。",
    tailo: "Bîn-á-tsài bô lâi huan-tsháu bē-īng--tit.",
  },
  {
    hanji: "伊薰喙仔歹去，閣買一枝新的薰吹。",
    tailo: "I hun-tshuì-á pháinn--khì, koh bé tsi̍t ki sin ê hun-tshue.",
  },
  {
    hanji: "你講較簡單咧，伊才聽有。",
    tailo: "Lí kóng khah kán-tan--leh, i tsiah thiann-ū.",
  },
  {
    hanji: "無論職業是啥，攏愛認真拍拚。",
    tailo: "Bô-lūn tsit-gia̍p sī siannh, lóng ài jīn-tsin phah-piànn.",
  },
  {
    hanji: "舊數無還，免想欲閣借錢。",
    tailo: "Kū-siàu bô hîng, bián siūnn-beh koh tsioh tsînn.",
  },
  {
    hanji: "舊曆過年公司歇差不多一禮拜。",
    tailo: "Kū-li̍k kuè-nî kong-si hioh tsha-put-to tsi̍t lé-pài.",
  },
  {
    hanji: "這改的風颱走了後又閣翻頭矣。",
    tailo: "Tsit kái ê hong-thai tsáu liáu-āu iū-koh huan-thâu--ah.",
  },
  {
    hanji: "伊翻頭過來欲佮我講話。",
    tailo: "I huan-thâu--kuè-lâi beh kah guá kóng-uē.",
  },
  {
    hanji: "叫你做一个工課爾爾就喙翹翹，袂輸我欠你偌濟錢咧。",
    tailo:
      "Kiò lí tsò tsi̍t ê khang-khuè niā-niā tō tshuì khiàu-khiàu, bē-su guá khiàm lí guā-tsē tsînn--leh.",
  },
  {
    hanji: "咧耍的時陣毋通共人繏嚨喉，真危險。",
    tailo: "Teh sńg ê sî-tsūn m̄-thang kā lâng sǹg nâ-âu, tsin guî-hiám.",
  },
  {
    hanji: "利用伊的職權做私人的代誌。",
    tailo: "Lī-iōng i ê tsit-khuân tsò su-jîn ê tāi-tsì.",
  },
  {
    hanji: "樹林仔、草埔仔攏有真濟蟲豸。",
    tailo: "Tshiū-nâ-á, tsháu-poo-á lóng ū tsin tsē thâng-thuā.",
  },
  {
    hanji: "雖然是小人物，嘛袂使藐視。",
    tailo: "Sui-jiân sī sió jîn-bu̍t, mā bē-sái biáu-sī.",
  },
  {
    hanji: "我看著蟲蟯蟯趖會起雞母皮。",
    tailo: "Guá khuànn-tio̍h thâng ngia̍uh-ngia̍uh-sô ē khí-ke-bó-phuê.",
  },
  {
    hanji: "阿母叫你莫佇塗跤蟯蟯趖，你無聽著是毋？",
    tailo:
      "A-bú kiò lí mài tī thôo-kha ngia̍uh-ngia̍uh-sô, lí bô thiann--tio̍h sī--m̄?",
  },
  {
    hanji: "這搭會洩水，貼佇頂頭的紙久來就會藃蟶。",
    tailo:
      "Tsit-tah ē sia̍p-tsuí, tah tī tíng-thâu ê tsuá kú--lâi tō ē hiauh-than.",
  },
  {
    hanji: "謼，好啦，你講的準算。",
    tailo: "Hooh, hó--lah, lí kóng--ê tsún-sǹg.",
  },
  {
    hanji: "惡毒老爸，竟然共家己的囝蹔甲跤骨斷去。",
    tailo:
      "Ok-to̍k lāu-pē, kìng-jiân kā ka-kī ê kiánn tsàm kah kha-kut tn̄g--khì.",
  },
  {
    hanji: "手䘼傷束，我的手軁袂過。",
    tailo: "Tshiú-ńg siunn sok, guá ê tshiú nng bē kuè.",
  },
  {
    hanji: "咱等一下轉去的時陣，你愛會記得買豆油喔！",
    tailo:
      "Lán tán--tsi̍t-ē tńg--khì ê sî-tsūn, lí ài ē-kì-tit bé tāu-iû--ooh!",
  },
  {
    hanji: "恁這馬結婚矣，愛轉喙叫伊大伯毋才著。",
    tailo:
      "Lín tsit-má kiat-hun--ah, ài tńg-tshuì kiò i tuā-peh m̄-tsiah tio̍h.",
  },
  {
    hanji: "你對這條路直直行，攏免轉斡，行成十分鐘就會到。",
    tailo:
      "Lí tuì tsit tiâu lōo ti̍t-ti̍t kiânn, lóng bián tńg-uat, kiânn tsiânn tsa̍p hun-tsing tō ē kàu.",
  },
  {
    hanji: "這个所在誠狹，真歹轉踅，你轉踅的時陣著細膩。",
    tailo:
      "Tsit ê sóo-tsāi tsiânn e̍h, tsin pháinn tńg-se̍h, lí tńg-se̍h ê sî-tsūn tio̍h sè-jī.",
  },
  {
    hanji: "最近手頭真絚，愛去揣朋友轉踅一下。",
    tailo:
      "Tsuè-kīn tshiú-thâu tsin ân, ài khì tshuē pîng-iú tńg-se̍h--tsi̍t-ē.",
  },
  {
    hanji: "伊愛錢無惜性命，規工咧軁錢空。",
    tailo: "I ài tsînn bô sioh sènn-miā, kui-kang teh nǹg-tsînn-khang.",
  },
  {
    hanji: "伊猶細漢，猶未轉聲，會使扮祝英台。",
    tailo: "I iáu sè-hàn, iáu-buē tńg-siann, ē-sái pān Tsiok Ing-tâi.",
  },
  {
    hanji: "一个好好的查某囡仔煞去予你蹧躂。",
    tailo: "Tsi̍t ê hó-hó ê tsa-bóo gín-á suah khì hōo lí tsau-that.",
  },
  {
    hanji: "新新的物件毋通按呢蹧躂。",
    tailo: "Sin-sin ê mi̍h-kiānn m̄-thang án-ne tsau-that.",
  },
  {
    hanji: "欲講就直接講，莫佇遐轉彎踅角。",
    tailo: "Beh kóng tō ti̍t-tsiap kóng, mài tī hia tńg-uan-se̍h-kak.",
  },
  {
    hanji: "這幾年來，社會一直咧轉變。",
    tailo: "Tsit kuí nî lâi, siā-huē it-ti̍t teh tsuán-piàn.",
  },
  {
    hanji: "伊真𠢕軁鑽，隨揣著頭路。",
    tailo: "I tsin gâu nǹg-tsǹg, suî tshuē-tio̍h thâu-lōo.",
  },
  {
    hanji: "落雨了後，田岸路醬醬醬。",
    tailo: "Lo̍h-hōo liáu-āu, tshân-huānn-lōo tsiùnn-tsiùnn-tsiùnn.",
  },
  {
    hanji: "市場離遮真遠，愛行真久。",
    tailo: "Tshī-tiûnn lī tsia tsin hn̄g, ài kiânn tsin kú.",
  },
  {
    hanji: "行到雙叉路口，毋知愛按怎行。",
    tailo: "Kiânn kàu siang-tshe-lōo-kháu, m̄ tsai ài án-tsuánn kiânn.",
  },
  {
    hanji: "這條路雙爿攏有種樹仔。",
    tailo: "Tsit tiâu lōo siang-pîng lóng ū tsìng tshiū-á.",
  },
  {
    hanji: "醬瓜仔配糜真好食，毋過毋好食傷濟。",
    tailo:
      "Tsiùnn-kue-á phuè muê tsin hó-tsia̍h, m̄-koh m̄-hó tsia̍h siunn tsē.",
  },
  {
    hanji: "伊佮𪜶小弟是雙生仔。",
    tailo: "I kah in sió-tī sī siang-senn-á.",
  },
  {
    hanji: "是啥人共物件囥佇遮鎮地？",
    tailo: "Sī siánn-lâng kā mi̍h-kiānn khǹg tī tsia tìn-tè?",
  },
  {
    hanji: "我當咧無閒，你莫徛佇遮鎮地。",
    tailo: "Guá tng-teh bô-îng, lí mài khiā tī tsia tìn-tè.",
  },
  {
    hanji: "這隻椅仔囥佇遮誠鎮位。",
    tailo: "Tsit tsiah í-á khǹg tī tsia tsiânn tìn-uī.",
  },
  {
    hanji: "佮愛人仔離別是真痛苦的代誌。",
    tailo: "Kah ài-lîn-á lī-pia̍t sī tsin thòng-khóo ê tāi-tsì.",
  },
  {
    hanji: "小病無醫治，會變做大病。",
    tailo: "Sió pēnn bô i-tī, ē piàn-tsò tuā pēnn.",
  },
  {
    hanji: "雞胘滷來食，滋味真好。",
    tailo: "Ke-kiān lóo lâi tsia̍h, tsu-bī tsin hó.",
  },
  {
    hanji: "伊按呢做根本就是「一隻牛剝雙重皮」，實在誠可惡！",
    tailo:
      "I án-ne tsò kin-pún tō sī “tsi̍t tsiah gû pak siang-tîng phuê”, si̍t-tsāi tsiânn khó-ònn!",
  },
  {
    hanji: "伊是雙面刀鬼，你毋通傷過相信伊。",
    tailo: "I sī siang-bīn-to-kuí, lí m̄-thang siunn kuè siong-sìn--i.",
  },
  {
    hanji: "醬料對人體健康加減有妨害。",
    tailo: "Tsiùnn-liāu tuì jîn-thé kiān-khong ke-kiám ū hông-hāi.",
  },
  {
    hanji: "離婚是大代誌，愛慎重考慮佮處理。",
    tailo: "Lī-hun sī  tuā  tāi-tsì, ài sīn-tiōng khó-lī kah tshú-lí.",
  },
  {
    hanji: "伊的人真雜插，啥物代誌都欲管。",
    tailo: "I ê lâng tsin tsa̍p-tshap, siánn-mih tāi-tsì to beh kuán.",
  },
  {
    hanji: "雙棚鬥往往雙方攏會受著傷害。",
    tailo: "Siang-pênn-tàu íng-íng siang-hong lóng ē siū-tio̍h siong-hāi.",
  },
  {
    hanji: "離開教室愛會記得關電火。",
    tailo: "Lī-khui kàu-sik ài ē-kì-tit kuainn tiān-hué.",
  },
  {
    hanji: "飼雞的人差不多攏會用著雞罩。",
    tailo: "Tshī ke ê lâng tsha-put-to lóng ē iōng-tio̍h ke-tà.",
  },
  {
    hanji: "𪜶爸母兩年前就離緣矣。",
    tailo: "In pē-bú nn̄g nî tsîng tō lī-iân--ah.",
  },
  {
    hanji: "醫學進步，人的性命較有保障。",
    tailo: "I-ha̍k tsìn-pōo, lâng ê sènn-miā khah ū pó-tsiong.",
  },
  {
    hanji: "雞髻大塊看起來真威風。",
    tailo: "Ke-kuè tuā tè khuànn--khí-lâi tsin ui-hong.",
  },
  {
    hanji: "我口試講甲離離落落，一定考袂牢。",
    tailo: "Guá kháu-tshì kóng kah li-li-lak-lak, it-tīng khó bē tiâu.",
  },
  {
    hanji: "今年聯考英文的題目真簡單。",
    tailo: "Kin-nî liân-khó Ing-bûn ê tê-bo̍k tsin kán-tan.",
  },
  {
    hanji: "為著欲幫助彼个囡仔，伊四界去題緣。",
    tailo: "Uī-tio̍h beh pang-tsōo hit ê gín-á, i sì-kè khì tê-iân.",
  },
  {
    hanji: "額頭開闊的人看起來較開朗。",
    tailo: "Hia̍h-thâu khui-khuah ê lâng khuànn--khí-lâi khah khai-lóng.",
  },
  {
    hanji: "拜一來上課，逐家攏足懶的。",
    tailo: "Pài-it lâi siōng-khò, ta̍k-ke lóng tsiok lán--ê.",
  },
  {
    hanji: "伊攏大權，我惹伊袂起。",
    tailo: "I láng tuā khuân, guá jiá i bē khí.",
  },
  {
    hanji: "有風毋駛船，無風才欲激櫓。",
    tailo: "Ū hong m̄ sái tsûn, bô hong tsiah beh kik-lóo.",
  },
  {
    hanji: "外口日頭遐爾大，你毋通佇遐曝日，緊入來！",
    tailo:
      "Guā-kháu ji̍t-thâu hiah-nī tuā, lí m̄-thang tī hia pha̍k-ji̍t, kín ji̍p--lâi!",
  },
  {
    hanji: "你代誌毋通交代予彼箍懵仙。",
    tailo: "Lí tāi-tsì m̄-thang kau-tài hōo hit khoo bòng-sian.",
  },
  {
    hanji: "物件收入去櫥仔內囥予伊好。",
    tailo: "Mi̍h-kiānn siu ji̍p-khì tû-á-lāi khǹg hōo i hó.",
  },
  {
    hanji: "伊這站仔誠懶屍，啥物代誌攏無欲做。",
    tailo:
      "I tsit-tsām-á tsiânn lán-si, siánn-mih tāi-tsì lóng bô beh tsò.",
  },
  {
    hanji: "彼个人真懶屍，欲食毋振動。",
    tailo: "Hit ê lâng tsin lán-si, beh tsia̍h m̄ tín-tāng.",
  },
  {
    hanji: "這班的學生攏是一等一的。",
    tailo: "Tsit pan ê ha̍k-sing lóng sī it-tíng-it--ê.",
  },
  {
    hanji: "恁查某囝會對你大細聲，攏是你共伊寵倖的！",
    tailo:
      "Lín tsa-bóo-kiánn ē tuì lí tuā-sè-siann, lóng sī lí kā i thíng-sīng--ê!",
  },
  {
    hanji: "生食都無夠，哪有通曝乾？",
    tailo: "Tshenn tsia̍h to bô-kàu, ná ū thang pha̍k-kuann?",
  },
  {
    hanji: "心肝內懷疑，但是毋敢講。",
    tailo: "Sim-kuann-lāi huâi-gî, tān-sī m̄ kánn kóng.",
  },
  {
    hanji: "你就是褲帶縖無絚才會一直佇遐攏褲。",
    tailo: "Lí tō sī khòo-tuà hâ bô ân tsiah ē it-ti̍t tī hia láng khòo.",
  },
  {
    hanji: "遮的物件我攏總共你買，你愛算我較俗。",
    tailo:
      "Tsia-ê mi̍h-kiānn guá lóng-tsóng kā lí bé, lí ài sǹg guá khah sio̍k.",
  },
  {
    hanji: "我買的物件攏總偌濟錢？",
    tailo: "Guá bé ê mi̍h-kiānn lóng-tsóng guā-tsē tsînn?",
  },
  {
    hanji: "伊看著懶懶，是毋是人無爽快？",
    tailo: "I khuànn tio̍h lán-lán, sī m̄ sī lâng bô sóng-khuài?",
  },
  {
    hanji: "阮兜是阮某咧攏權的，有啥物代誌麻煩你共阮某講。",
    tailo:
      "Guán tau sī guán bóo teh láng-khuân--ê, ū siánn-mih tāi-tsì mâ-huân lí kā guán bóo kóng.",
  },
  {
    hanji: "臺南有所在專門咧曝鹽。",
    tailo: "Tâi-lâm ū sóo-tsāi tsuan-bûn teh pha̍k iâm.",
  },
  {
    hanji: "電火爍一下，就熄去矣。",
    tailo: "Tiān-hué sih--tsi̍t-ē, tō sit--khì--ah.",
  },
  {
    hanji: "炮仔工場爆炸，員工受傷嚴重。",
    tailo: "Phàu-á kang-tiûnn po̍k-tsà, uân-kang siū-siong giâm-tiōng.",
  },
  {
    hanji: "伊今仔日的穿插，我看著真礙虐。",
    tailo: "I kin-á-ji̍t ê tshīng-tshah, guá khuànn tio̍h tsin gāi-gio̍h.",
  },
  {
    hanji: "伊獸醫系畢業了後就開始做獸醫。",
    tailo: "I siù-i-hē pit-gia̍p liáu-āu tō khai-sí tsò siù-i.",
  },
  {
    hanji: "這隻椅仔無啥穩，毋通坐。",
    tailo: "Tsit tsiah í-á bô siánn ún, m̄-thang tsē.",
  },
  {
    hanji: "這份文件真要緊，你愛沓沓仔繩，檢查看有錯誤無。",
    tailo:
      "Tsit hūn bûn-kiānn tsin iàu-kín, lí ài ta̍uh-ta̍uh-á tsîn, kiám-tsa khuànn ū tshò-gōo--bô.",
  },
  {
    hanji: "伊無愛洗身軀，定定嘛有一个羶。",
    tailo: "I bô ài sé-sin-khu, tiānn-tiānn mā ū tsi̍t ê hiàn.",
  },
  {
    hanji: "明仔載免上班，會使穩心仔睏。",
    tailo: "Bîn-á-tsài bián siōng-pan, ē-sái ún-sim-á khùn.",
  },
  {
    hanji: "你愛共重要的代誌記佇簿仔紙頂頭。",
    tailo: "Lí ài kā tiōng-iàu ê tāi-tsì kì tī phōo-á-tsuá tíng-thâu.",
  },
  {
    hanji: "簽字進前，著先看予伊清楚。",
    tailo: "Tshiam-jī tsìn-tsîng, tio̍h sing khuànn hōo i tshing-tshó.",
  },
  {
    hanji: "看這个範勢，今仔日穩當會落雨。",
    tailo: "Khuànn tsit ê pān-sè, kin-á-ji̍t ún-tàng ē lo̍h-hōo.",
  },
  {
    hanji: "今仔日烏陰天，你上好紮雨傘出門較穩當。",
    tailo:
      "Kin-á-ji̍t oo-im-thinn, lí siōng-hó tsah hōo-suànn tshut-mn̂g khah ún-tàng.",
  },
  {
    hanji: "彼个公園有真濟羅漢跤仔。",
    tailo: "Hit ê kong-hn̂g ū tsin tsē lô-hàn-kha-á.",
  },
  {
    hanji: "𪜶阿祖較早做過藝旦。",
    tailo: "In a-tsóo khah-tsá tsò-kuè gē-tuànn.",
  },
  {
    hanji: "路口彼間藥局生理真好。",
    tailo: "Lōo-kháu hit king io̍h-kio̍k sing-lí tsin hó.",
  },
  {
    hanji: "伊毋去病院予醫生看，甘願買藥草仔烏白食。",
    tailo:
      "I m̄ khì pēnn-īnn hōo i-sing khuànn, kam-guān bé io̍h-tsháu-á oo-pe̍h tsia̍h.",
  },
  {
    hanji: "伊相信食藥酒會補身體。",
    tailo: "I siong-sìn tsia̍h io̍h-tsiú ē póo sin-thé.",
  },
  {
    hanji: "藥粕無啥物藥效，會使擲掉矣。",
    tailo: "Io̍h-phoh bô siánn-mih io̍h-hāu, ē-sái tàn-tiāu--ah.",
  },
  {
    hanji: "這个先生開藥單真小心。",
    tailo: "Tsit ê sian-sinn khui io̍h-tuann tsin sió-sim.",
  },
  {
    hanji: "用藥渣會使閣煎第二擺。",
    tailo: "Iōng io̍h-tse ē-sái koh tsuann tē-jī pái.",
  },
  {
    hanji: "藥頭仔煎好，藥渣留咧會使閣煎一擺。",
    tailo:
      "Io̍h-thâu-á tsuann-hó, io̍h-tse lâu--leh ē-sái koh tsuann tsi̍t pái.",
  },
  {
    hanji: "我會曉彈琴，袂曉看譜。",
    tailo: "Guá ē-hiáu tuânn-khîm, bē-hiáu khuànn phóo.",
  },
  {
    hanji: "欲按怎做，我心內有譜。",
    tailo: "Beh án-tsuánn tsò, guá sim-lāi ū phóo.",
  },
  {
    hanji: "有兩間廠商欲來贊助這擺的表演。",
    tailo:
      "Ū nn̄g king tshiúnn-siong beh lâi tsàn-tsōo tsit pái ê piáu-ián.",
  },
  {
    hanji: "伊出國以前有向逐家辭別。",
    tailo: "I tshut-kok í-tsîng ū hiòng ta̍k-ke sî-pia̍t.",
  },
  {
    hanji: "有厝有轎車，生活就真安定方便。",
    tailo: "Ū tshù ū kiau-tshia, sing-ua̍h tō tsin an-tīng hong-piān.",
  },
  {
    hanji: "股票、債券攏是有價值的證券。",
    tailo: "Kóo-phiò, tsè-kuàn lóng sī ū kè-ta̍t ê tsìng-kuàn.",
  },
  {
    hanji: "辭典是真重要的工具冊。",
    tailo: "Sû-tián sī tsin tiōng-iàu ê kang-kū-tsheh.",
  },
  {
    hanji: "伊講的話譀呱呱，敢有人會相信？",
    tailo: "I kóng ê uē hàm-kuā-kuā, kám ū lâng ē siong-sìn?",
  },
  {
    hanji: "伊的面看起來譀浡譀浡。",
    tailo: "I ê bīn khuànn--khí-lâi hàm-phu̍h-hàm-phu̍h.",
  },
  {
    hanji: "伊去予頭家共伊辭頭路矣。",
    tailo: "I khì hōo thâu-ke kā i sî thâu-lōo--ah.",
  },
  {
    hanji: "人生譀譀，咱著愛看較開咧。",
    tailo: "Jîn-sing hàm-hàm, lán tio̍h-ài khuànn khah khui--leh.",
  },
  {
    hanji: "老大人看報紙愛用譀鏡。",
    tailo: "Lāu-tuā-lâng khuànn pò-tsuá ài īng hàm-kiànn.",
  },
  {
    hanji: "咱來比賽射鏢，看啥人較準。",
    tailo: "Lán lâi pí-sài siā-pio, khuànn siánn-lâng khah tsún.",
  },
  {
    hanji: "超過暗時十點，店就關矣。",
    tailo: "Tshiau-kuè àm-sî tsa̍p tiám, tiàm tō kuainn--ah.",
  },
  {
    hanji: "湯欲霧出來矣，緊共鼎蓋掀起來。",
    tailo: "Thng beh bū--tshut-lâi--ah, kín kā tiánn-kuà hian--khí-lâi.",
  },
  {
    hanji: "關公攑關刀，過五關，斬六將。",
    tailo: "Kuan-kong gia̍h kuan-to, kuè ngóo kuan, tsám lio̍k tsiòng.",
  },
  {
    hanji: "伊真關心老大人，定定去養老院拜訪。",
    tailo:
      "I tsin kuan-sim lāu-tuā-lâng, tiānn-tiānn khì ióng-ló-īnn pài-hóng.",
  },
  {
    hanji: "拄著淹水這種代誌，受災戶難免會受氣。",
    tailo:
      "Tú-tio̍h im-tsuí tsit tsióng tāi-tsì, siū-tsai-hōo lân-bián ē siū-khì.",
  },
  {
    hanji: "你入來的時，紲手關門。",
    tailo: "Lí ji̍p--lâi ê sî, suà-tshiú kuainn-mn̂g.",
  },
  {
    hanji: "這件代誌關係真重大，恁一定愛好好仔處理。",
    tailo:
      "Tsit kiānn tāi-tsì kuan-hē tsin tiōng-tāi, lín it-tīng ài hó-hó-á tshú-lí.",
  },
  {
    hanji: "鏡框有雕刻花樣，看起來真媠款。",
    tailo:
      "Kiànn-khing ū tiau-khik hue-iūnn, khuànn--khí-lâi tsin suí-khuán.",
  },
  {
    hanji: "你會當按呢想，實在真難得。",
    tailo: "Lí ē-tàng án-ne siūnn, si̍t-tsāi tsin lân-tit.",
  },
  {
    hanji: "關稅減輕，生理有較好做。",
    tailo: "Kuan-suè kiám-khin, sing-lí ū khah hó tsò.",
  },
  {
    hanji: "你講遐爾濟，害我聽甲霧嗄嗄。",
    tailo: "Lí kóng hiah-nī tsē, hāi guá thiann kah bū-sà-sà.",
  },
  {
    hanji: "這个鏡頭共伊活潑的模樣攏表現出來矣。",
    tailo:
      "Tsit ê kiànn-thâu kā i hua̍t-phuat ê bôo-iūnn lóng piáu-hiān--tshut-lâi--ah.",
  },
  {
    hanji: "年歲有矣，目睭霧霧，物件攏看袂清楚。",
    tailo:
      "Nî-huè ū--ah, ba̍k-tsiu bū-bū, mi̍h-kiānn lóng khuànn bē tshing-tshó.",
  },
  {
    hanji: "你看我殕殕，我看你霧霧。",
    tailo: "Lí khuànn guá phú-phú, guá khuànn lí bū-bū.",
  },
  {
    hanji: "一兩日無剃，規面就鬍鬍。",
    tailo: "Tsi̍t nn̄g ji̍t bô thì, kui bīn tō hôo-hôo.",
  },
  {
    hanji: "伊無欲來，阮顛倒較歡喜。",
    tailo: "I bô beh lâi, guán tian-tò khah huann-hí.",
  },
  {
    hanji: "金光黨的騙術真高明，巧巧人嘛會去予伊騙去。",
    tailo:
      "Kim-kong-tóng ê phiàn-su̍t tsin ko-bîng, khiáu-khiáu-lâng mā ē khì hōo i phiàn--khì.",
  },
  {
    hanji: "伊生本鬍鬚，若無逐工剾喙鬚就規面鬍鬍。",
    tailo:
      "I senn-pún hôo-tshiu, nā bô ta̍k-kang khau tshuì-tshiu tō kui bīn hôo-hôo.",
  },
  {
    hanji: "眾人一直共伊苦勸伊才落軟。",
    tailo: "Tsìng-lâng it-ti̍t kā i khóo-khǹg i tsiah lo̍h-nńg.",
  },
  {
    hanji: "是你毋著呢，閣敢來嚷！",
    tailo: "Sī lí m̄-tio̍h--neh, koh kánn lâi jiáng!",
  },
  {
    hanji: "伊是我的心肝寶貝，啥人都袂使共伊欺負。",
    tailo:
      "I sī guá ê sim-kuann pó-puè, siánn-lâng to bē-sái kā i khi-hū.",
  },
  {
    hanji: "評審嚴格，逐家就無話講。",
    tailo: "Phîng-sím giâm-keh, ta̍k-ke tō bô uē kóng.",
  },
  {
    hanji: "彼个囡仔真寶惜𪜶阿母留予伊的相片。",
    tailo: "Hit ê gín-á tsin pó-sioh in a-bú lâu hōo i ê siòng-phìnn.",
  },
  {
    hanji: "逐家講笑爾爾，你莫遐爾嚴肅啦！",
    tailo: "Ta̍k-ke kóng-tshiò niā-niā, lí mài hiah-nī giâm-siok--lah!",
  },
  {
    hanji: "逐擺𪜶兩翁仔某冤家，攏著我去共𪜶勸解。",
    tailo:
      "Ta̍k-pái in nn̄g ang-á-bóo uan-ke, lóng tio̍h guá khì kā in khuàn-kái.",
  },
  {
    hanji: "兩角找五分，覺悟。這是一句孽譎仔話。",
    tailo:
      "Nn̄g kak tsāu gōo hun, kak-ngōo. Tse sī tsi̍t kù gia̍t-khiat-á-uē.",
  },
  {
    hanji: "阮兜的祖產攏予大伯攔去。",
    tailo: "Guán tau ê tsóo-sán lóng hōo tuā-peh ânn--khì.",
  },
  {
    hanji: "這本冊欲獻予我的爸母。",
    tailo: "Tsit pún tsheh beh hiàn hōo guá ê pē-bú.",
  },
  {
    hanji: "我一定欲佮你拚一下懸低！",
    tailo: "Guá it-tīng beh kah lí piànn tsi̍t-ē kuân-kē!",
  },
  {
    hanji: "犯罪的人會予人掠入去櫳仔內。",
    tailo: "Huān-tsuē ê lâng ē hōo lâng lia̍h ji̍p-khì lông-á-lāi.",
  },
  {
    hanji: "今年的大考競爭甲真劇烈。",
    tailo: "Kin-nî ê tuā-khó kīng-tsing kah tsin ki̍k-lia̍t.",
  },
  {
    hanji: "伊對籃球運動真有興趣。",
    tailo: "I tuì nâ-kiû ūn-tōng tsin ū hìng-tshù.",
  },
  {
    hanji: "代先籌備好勢，代誌才好做。",
    tailo: "Tāi-sing tiû-pī hó-sè, tāi-tsì tsiah hó tsò.",
  },
  {
    hanji: "歇十分鐘了，逐家繼續開會。",
    tailo: "Hioh tsa̍p hun-tsing liáu, ta̍k-ke kè-sio̍k khui-huē.",
  },
  {
    hanji: "走運動埕我攏贏伊，考試伊攏贏我。",
    tailo:
      "Tsáu ūn-tōng-tiânn guá lóng iânn--i, khó-tshì i lóng iânn--guá.",
  },
  {
    hanji: "毋通去觸犯著伊的禁忌。",
    tailo: "M̄-thang khì tshiok-huān-tio̍h i ê kìm-khī.",
  },
  {
    hanji: "我警告你，這馬上好莫惹我！",
    tailo: "Guá kíng-kò--lí, tsit-má siōng-hó mài jiá--guá!",
  },
  {
    hanji: "學生若做毋著代誌會去予學校記警告。",
    tailo: "Ha̍k-sing nā tsò m̄-tio̍h tāi-tsì ē khì hōo ha̍k-hāu kì kíng-kò.",
  },
  {
    hanji: "風颱欲來矣，咱著愛提高警戒。",
    tailo: "Hong-thai beh lâi--ah, lán tio̍h-ài thê-ko kíng-kài.",
  },
  {
    hanji: "伊共我譬相甲無一地好。",
    tailo: "I kā guá phì-siùnn kah bô tsi̍t tè hó.",
  },
  {
    hanji: "若照按呢看來，伊較占贏面。",
    tailo: "Nā tsiàu án-ne khuànn--lâi, i khah tsiàm iânn-bīn.",
  },
  {
    hanji: "這改的議案真重要，你一定愛來開會。",
    tailo: "Tsit kái ê gī-àn tsin tiōng-iàu, lí it-tīng ài lâi khui-huē.",
  },
  {
    hanji: "這馬罕得看著人用蠓捽仔咧趕胡蠅矣。",
    tailo:
      "Tsit-má hán-tit khuànn-tio̍h lâng īng báng-sut-á teh kuánn hôo-sîn--ah.",
  },
  {
    hanji: "講伊規工若干樂是一个譬喻。",
    tailo: "Kóng i kui-kang ná kan-lo̍k sī tsi̍t ê phì-jū.",
  },
  {
    hanji: "議場內逐家輪流表示家己的意見。",
    tailo: "Gī-tiûnn-lāi ta̍k-ke lûn-liû piáu-sī ka-kī ê ì-kiàn.",
  },
  {
    hanji: "議會是民意代表開會的場所。",
    tailo: "Gī-huē sī bîn-ì tāi-piáu khui-huē ê tiûnn-sóo.",
  },
  {
    hanji: "熱天用蠓罩才袂予蠓仔叮。",
    tailo: "Jua̍h-thinn īng báng-tà tsiah bē hōo báng-á tìng.",
  },
  {
    hanji: "人民有議論政府的政策的自由。",
    tailo: "Jîn-bîn ū gī-lūn tsìng-hú ê tsìng-tshik ê tsū-iû.",
  },
  {
    hanji: "譬論講你若做市長，你欲按怎來改革市政。",
    tailo:
      "Phì-lūn-kóng lí nā tsò tshī-tiúnn, lí beh án-tsuánn lâi kái-kik tshī-tsìng.",
  },
  {
    hanji: "伊根本都無愛你，是按怎你到今仔日猶未覺醒？",
    tailo:
      "I kin-pún to bô ài--lí, sī-án-tsuánn lí kàu kin-á-ji̍t iáu-buē kak-tshénn?",
  },
  {
    hanji: "彼个少年的看著誠飄撇。",
    tailo: "Hit ê siàu-liân--ê khuànn tio̍h tsiânn phiau-phiat.",
  },
  {
    hanji: "湯煮甲鹹篤篤，是欲按怎食？",
    tailo: "Thng tsú kah kiâm-tok-tok, sī beh án-tsuánn tsia̍h?",
  },
  {
    hanji: "今仔日毋知欲搬啥物齣頭。",
    tailo: "Kin-á-ji̍t m̄ tsai beh puann siánn-mih tshut-thâu.",
  },
  {
    hanji: "你這个癩𰣻鬼，彼遐垃圾你曷去摸。",
    tailo: "Lí tsit ê thái-ko-kuí, he hiah lah-sap lí a̍h khì bong.",
  },
  {
    hanji: "彼个人規身軀癩𰣻爛癆，無人敢倚去伊遐。",
    tailo:
      "Hit ê lâng kui-sin-khu thái-ko-nuā-lô, bô lâng kánn uá-khì i hia.",
  },
  {
    hanji: "生理人賣灌水豬肉，實在無天良。",
    tailo: "Sing-lí-lâng bē kuàn-tsuí ti-bah, si̍t-tsāi bô-thian-liông.",
  },
  {
    hanji: "這間公司的數目有灌水，𪜶的股票咱毋通買。",
    tailo:
      "Tsit king kong-si ê siàu-ba̍k ū kuàn-tsuí, in ê kóo-phiò lán m̄-thang bé.",
  },
  {
    hanji: "有屎緊去放，毋通攝屎。",
    tailo: "Ū sái kín khì pàng, m̄-thang liap-sái.",
  },
  {
    hanji: "阿仁仔真攝屎，才幾箍銀仔爾爾都毋甘出。",
    tailo:
      "A-jîn--á tsin liap-sái, tsiah kuí-khoo-gîn-á niā-niā to m̄-kam tshut.",
  },
  {
    hanji: "有人願意為理想來犧牲家己的性命。",
    tailo: "Ū lâng guān-ì uī lí-sióng lâi hi-sing ka-kī ê sènn-miā.",
  },
  {
    hanji: "伊去外口耍，糊甲規身軀攏爛塗糜。",
    tailo: "I khì guā-kháu sńg, kôo kah kui-sin-khu lóng nuā-thôo-muê.",
  },
  {
    hanji: "電火攑懸會當炤著較闊的範圍。",
    tailo: "Tiān-hué gia̍h-kuân ē-tàng tshiō-tio̍h khah khuah ê huān-uî.",
  },
  {
    hanji: "有囡仔佇身軀邊纏跤絆手，做無工課。",
    tailo:
      "Ū gín-á tī sin-khu-pinn tînn-kha-puànn-tshiú, tsò bô khang-khuè.",
  },
  {
    hanji: "厝內有老人、囡仔愛纏綴，逐工嘛無閒甲若干樂咧。",
    tailo:
      "Tshù-lāi ū lāu-lâng, gín-á ài tînn-tuè, ta̍k-kang mā bô-îng kah ná kan-lo̍k--leh.",
  },
  {
    hanji: "趁都無夠用矣，閣愛纏綴人，哪有錢通買厝。",
    tailo:
      "Thàn to bô-kàu īng--ah, koh ài tînn-tuè--lâng, ná ū tsînn thang bé tshù.",
  },
  {
    hanji: "伊是阮這搭的霸王，無人敢得失伊。",
    tailo: "I sī guán tsit-tah ê pà-ông, bô lâng kánn tik-sit--i.",
  },
  {
    hanji: "你免數想欲霸占阮兜的財產！",
    tailo: "Lí bián siàu-siūnn beh pà-tsiàm guán tau ê tsâi-sán!",
  },
  {
    hanji: "你毋通看伊生做細粒子，伊是鐵骨仔生。",
    tailo:
      "Lí m̄-thang khuànn i senn-tsò sè-lia̍p-tsí, i sī thih-kut-á-senn.",
  },
  {
    hanji: "你毋通遮爾鐵齒！聽老大人的話就無毋著。",
    tailo:
      "Lí m̄-thang tsiah-nī thih-khí! Thiann lāu-tuā-lâng ê uē tō bô m̄-tio̍h.",
  },
  {
    hanji: "遮爾好的機會，你是閣咧躊躇啥物？",
    tailo: "Tsiah-nī hó ê ki-huē, lí sī koh teh tiû-tû siánn-mih?",
  },
  {
    hanji: "我的面子你嘛共我顧一下。",
    tailo: "Guá ê bīn-tsú lí mā kā guá kòo--tsi̍t-ē.",
  },
  {
    hanji: "囡仔人顧耍，連飯都毋食。",
    tailo: "Gín-á-lâng kòo sńg, liân pn̄g to m̄ tsia̍h.",
  },
  {
    hanji: "我欲來去轉矣！才免佇遮顧人怨。",
    tailo: "Guá beh lâi-khì tńg--ah! Tsiah bián tī tsia kòo-lâng-uàn.",
  },
  {
    hanji: "為著欲顧三頓，閣較艱苦嘛毋驚。",
    tailo: "Uī-tio̍h beh kòo-sann-tǹg, koh-khah kan-khóo mā m̄ kiann.",
  },
  {
    hanji: "逐擺攏是我顧門，𪜶去𨑨迌，誠無公平。",
    tailo:
      "Ta̍k-pái lóng sī guá kòo-mn̂g, in khì tshit-thô, tsiânn bô kong-pênn.",
  },
  {
    hanji: "𪜶攏走出去𨑨迌矣，留我一个人顧厝。",
    tailo:
      "In lóng tsáu tshut-khì tshit-thô--ah, lâu guá tsi̍t ê lâng kòo-tshù.",
  },
  {
    hanji: "阿芬誠顧家，事事項項攏為厝內咧拍算。",
    tailo:
      "A-hun tsiânn kòo-ke, sū-sū-hāng-hāng lóng uī tshù-lāi teh phah-sǹg.",
  },
  {
    hanji: "聽講深山林內有足濟魔神仔。",
    tailo: "Thiann-kóng tshim-suann-nâ-lāi ū tsiok tsē môo-sîn-á.",
  },
  {
    hanji: "這領衫手䘼傷狹，我的手囊袂入去。",
    tailo:
      "Tsit niá sann tshiú-ńg siunn e̍h, guá ê tshiú long bē ji̍p--khì.",
  },
  {
    hanji: "駛車欲行彼條彎曲的路，你著細膩！",
    tailo: "Sái-tshia beh kiânn hit tiâu uan-khiau ê lōo, lí tio̍h sè-jī!",
  },
  {
    hanji: "這條路彎來斡去，真歹駛。",
    tailo: "Tsit tiâu lōo uan-lâi-uat-khì, tsin pháinn sái.",
  },
  {
    hanji: "伊講話攏彎來斡去咧共人罵。",
    tailo: "I kóng-uē lóng uan-lâi-uat-khì teh kā lâng mē.",
  },
  {
    hanji: "彼个人看起來誠有權威。",
    tailo: "Hit ê lâng khuànn--khí-lâi tsiânn ū khuân-ui.",
  },
  {
    hanji: "今仔日親情族孫攏來矣，阿媽足歡喜的。",
    tailo:
      "Kin-á-ji̍t tshin-tsiânn tso̍k-sun lóng lâi--ah, a-má tsiok huann-hí--ê.",
  },
  {
    hanji: "伊是中大獎呢？無，哪會歡頭喜面。",
    tailo: "I sī tiòng tuā tsióng--nih? Bô, ná ē huann-thâu-hí-bīn.",
  },
  {
    hanji: "這山路細條閣彎彎斡斡，車有夠歹駛。",
    tailo:
      "Tse suann-lōo sè tiâu koh uan-uan-uat-uat, tshia ū-kàu pháinn sái.",
  },
  {
    hanji: "有啥物話你就直接講，莫按呢彎彎斡斡。",
    tailo:
      "Ū siánn-mih uē lí tō ti̍t-tsiap kóng, mài án-ne uan-uan-uat-uat.",
  },
  {
    hanji: "你閣加疊一寡錢，這項物件就賣你。",
    tailo:
      "Lí koh ke tha̍h tsi̍t-kuá tsînn, tsit hāng mi̍h-kiānn tō bē--lí.",
  },
  {
    hanji: "伊叫我錢借伊，我袂癮。",
    tailo: "I kiò guá tsînn tsioh--i, guá bē giàn.",
  },
  {
    hanji: "天氣冷矣，你著愛加籠一領衫。",
    tailo: "Thinn-khì líng--ah, lí tio̍h-ài ke lam tsi̍t niá sann.",
  },
  {
    hanji: "咱讀冊就毋通讀對尻脊骿去。",
    tailo: "Lán tha̍k-tsheh tō m̄-thang tha̍k tuì kha-tsiah-phiann--khì.",
  },
  {
    hanji: "你今仔日按怎無去讀冊？",
    tailo: "Lí kin-á-ji̍t án-tsuánn bô khì tha̍k-tsheh?",
  },
  {
    hanji: "你愛知影變竅，毋通讀死冊。",
    tailo: "Lí ài tsai-iánn piàn-khiàu, m̄-thang tha̍k-sí-tsheh.",
  },
  {
    hanji: "趁俗先去買裘仔，聽候較寒的時陣才提出來穿。",
    tailo:
      "Thàn sio̍k sing khì bé hiû-á, thìng-hāu khah kuânn ê sî-tsūn tsiah the̍h tshut-lâi tshīng.",
  },
  {
    hanji: "囡仔人就愛聽喙，序大人才袂操心。",
    tailo:
      "Gín-á-lâng tō ài thiann-tshuì, sī-tuā-lâng tsiah bē tshau-sim.",
  },
  {
    hanji: "我頭拄仔去剃頭，這馬看著癮頭癮頭。",
    tailo:
      "Guá thâu-tú-á khì thì-thâu, tsit-má khuànn tio̍h giàn-thâu-giàn-thâu.",
  },
  {
    hanji: "伊真正是一个大癮頭，我暗示伊遐久猶閣無感覺！",
    tailo:
      "I tsin-tsiànn sī tsi̍t ê tuā giàn-thâu, guá àm-sī i hiah kú iáu-koh bô kám-kak!",
  },
  {
    hanji: "我聽講恁查某囝欲予人送定矣，敢有影？",
    tailo:
      "Guá thiann-kóng lín tsa-bóo-kiánn beh hōo lâng sàng-tiānn--ah, kám ū-iánn?",
  },
  {
    hanji: "伊欲共這幅圖提去予人鑑定。",
    tailo: "I beh kā tsit pak tôo the̍h-khì hōo lâng kàm-tīng.",
  },
  {
    hanji: "囡仔的成就是爸母的驕傲。",
    tailo: "Gín-á ê sîng-tsiū sī pē-bú ê kiau-ngōo.",
  },
  {
    hanji: "阮規家伙仔不時都來共你齪嘈，實在真歹勢。",
    tailo:
      "Guán kui-ke-hué-á put-sî to lâi kā lí tsak-tsō, si̍t-tsāi tsin pháinn-sè.",
  },
  {
    hanji: "伊當咧無閒，你莫去共伊攪吵。",
    tailo: "I tng-teh bô-îng, lí mài khì kā i kiáu-tshá.",
  },
  {
    hanji: "伊佇房間看冊，你莫去共伊攪擾。",
    tailo: "I tī pâng-king khuànn tsheh, lí mài khì kā i kiáu-jiáu.",
  },
  {
    hanji: "歹勢，閣來恁兜共你攪擾。",
    tailo: "Pháinn-sè, koh lâi lín tau kā lí kiáu-jiáu.",
  },
  {
    hanji: "佇遐變規晡，毋知伊咧變啥物魍？",
    tailo: "Tī hia pìnn kui-poo, m̄ tsai i teh pìnn siánn-mih báng?",
  },
  {
    hanji: "柴做的物件愛鑢予伊平才好看。",
    tailo: "Tshâ tsò ê mi̍h-kiānn ài lù hōo i pênn tsiah hó-khuànn.",
  },
  {
    hanji: "彼个歹人定定出來刣人，實在真驚人。",
    tailo:
      "Hit ê pháinn-lâng tiānn-tiānn tshut-lâi thâi--lâng, si̍t-tsāi tsin kiann--lâng.",
  },
  {
    hanji: "愛人仔變心，予伊十分的失志。",
    tailo: "Ài-jîn-á piàn-sim, hōo i tsa̍p-hun ê sit-tsì.",
  },
  {
    hanji: "你遮爾驚死，是欲按怎做代誌？",
    tailo: "Lí tsiah-nī kiann-sí, sī beh án-tsuánn tsò tāi-tsì?",
  },
  {
    hanji: "風颱天的菜價有影貴甲驚死人！",
    tailo: "Hong-thai-thinn ê tshài-kè ū-iánn kuì kah kiann-sí-lâng!",
  },
  {
    hanji: "代誌到遮來，我嘛無變步矣。",
    tailo: "Tāi-tsì kàu tsia lâi, guá mā bô piàn-pōo--ah.",
  },
  {
    hanji: "伊真驚見笑，你愛較捷共鼓勵咧。",
    tailo: "I tsin kiann-kiàn-siàu, lí ài khah tsia̍p kā kóo-lē--leh.",
  },
  {
    hanji: "你這擺會去予𪜶刁難，我看可能是伊咧變空。",
    tailo:
      "Lí tsit pái ē khì hōo in thiau-lân, guá khuànn khó-lîng sī i teh pìnn-khang.",
  },
  {
    hanji:
      "人講：「驚某大丈夫，拍某豬狗牛。」你著愛好好仔疼惜恁牽手才著。",
    tailo:
      "Lâng kóng, “Kiann bóo tāi-tiōng-hu, phah bóo ti-káu-gû.” Lí tio̍h-ài hó-hó-á thiànn-sioh lín khan-tshiú tsiah tio̍h.",
  },
  {
    hanji: "伊真𠢕變面，你毋通佮伊講耍笑。",
    tailo: "I tsin gâu pìnn-bīn, lí m̄-thang kah i kóng-sńg-tshiò.",
  },
  {
    hanji: "原來這層代誌是你咧變鬼。",
    tailo: "Guân-lâi tsit tsân tāi-tsì sī lí teh pìnn-kuí.",
  },
  {
    hanji: "𪜶兩人佇街仔路相攬相唚，真無體統。",
    tailo: "In nn̄g lâng tī ke-á-lōo sio-lám sio-tsim, tsin bô thé-thóng.",
  },
  {
    hanji: "是發生啥物代誌，你哪會遮驚惶？",
    tailo: "Sī huat-sing siánn-mih tāi-tsì, lí ná ē tsiah kiann-hiânn?",
  },
  {
    hanji: "伊自對美國轉來了後就變款矣。",
    tailo: "I tsū tuì Bí-kok tńg--lâi liáu-āu tō piàn-khuán--ah.",
  },
  {
    hanji: "伊正經工課毋做，規日就佇遐變猴弄。",
    tailo:
      "I tsìng-king khang-khuè m̄ tsò, kui ji̍t tō tī hia pìnn-kâu-lāng.",
  },
  {
    hanji: "恁翁真體貼你，真𠢕共你照顧。",
    tailo: "Lín ang tsin thé-thiap--lí, tsin gâu kā lí tsiàu-kòo.",
  },
  {
    hanji: "你愛去驗傷，保險公司才會賠償。",
    tailo: "Lí ài khì giām siong, pó-hiám kong-si tsiah ē puê-siông.",
  },
  {
    hanji: "逐家著愛互相體諒，毋通計較。",
    tailo: "Ta̍k-ke tio̍h-ài hōo-siong thé-liōng, m̄-thang kè-kàu.",
  },
  {
    hanji: "伊今仔日的穿插誠顯頭。",
    tailo: "I kin-á-ji̍t ê tshīng-tshah tsiânn hiánn-thâu.",
  },
  {
    hanji: "代誌遐濟，你毋通想欲總攬。",
    tailo: "Tāi-tsì hiah tsē, lí m̄-thang siūnn-beh tsóng lám.",
  },
  {
    hanji: "人講這个神壇的符仔真靈。",
    tailo: "Lâng kóng tsit ê sîn-tuânn ê hû-á tsin lîng.",
  },
  {
    hanji: "我較頇顢，請你小可讓手咧！",
    tailo: "Guá khah hân-bān, tshiánn lí sió-khuá niū-tshiú--leh!",
  },
  {
    hanji: "咱等一下就愛燒靈厝矣。",
    tailo: "Lán tán--tsi̍t-ē tō ài sio lîng-tshù--ah.",
  },
  {
    hanji: "聽人講這間媽祖廟的神明真有靈聖。",
    tailo:
      "Thiann lâng kóng tsit king Má-tsóo-biō ê sîn-bîng tsin ū lîng-siànn.",
  },
  {
    hanji: "你閣佇遐齴牙，早慢會去予人推。",
    tailo: "Lí koh tī hia giàng-gê, tsá-bān ē khì hōo lâng thui.",
  },
  {
    hanji: "摻一寡鹽花仔就免摻豆油矣。",
    tailo: "Tsham tsi̍t-kuá iâm-hue-á tō bián tsham tāu-iû--ah.",
  },
  {
    hanji: "熱天的時人較𠢕齷齪。",
    tailo: "Jua̍h-thinn ê sî lâng khah gâu ak-tsak.",
  },
  {
    hanji: "你愛學較巧咧，毋通糶米換番薯。",
    tailo: "Lí ài o̍h khah khiáu--leh, m̄-thang thiò-bí uānn han-tsî.",
  },
  {
    hanji: "足饞的，咱來食四秀仔好無？",
    tailo: "Tsiok sâi--ê, lán lâi tsia̍h sì-siù-á hó--bô?",
  },
  {
    hanji: "這个囡仔誠蠻皮，無論你按怎拍攏袂驚。",
    tailo:
      "Tsit ê gín-á tsiânn bân-phuê, bô-lūn lí án-tsuánn phah lóng bē kiann.",
  },
  {
    hanji: "咱做代誌著觀前顧後才袂失覺察。",
    tailo:
      "Lán tsò tāi-tsì tio̍h kuan-tsîng-kòo-āu tsiah bē sit-kak-tshat.",
  },
  {
    hanji: "有人講躡跤尾行路會減肥呢。",
    tailo: "Ū lâng kóng neh-kha-bué kiânn-lōo ē kiám-puî--neh.",
  },
  {
    hanji: "這台跤踏車真正有夠讚。",
    tailo: "Tsit tâi kha-ta̍h-tshia tsin-tsiànn ū-kàu tsán.",
  },
  {
    hanji: "頭殼挲尖尖，專門咧鑽。",
    tailo: "Thâu-khak so tsiam-tsiam, tsuan-bûn teh tsǹg.",
  },
  {
    hanji: "明知影做袂到閣硬欲做，你敢毋是戇人？",
    tailo:
      "Bîng tsai-iánn tsò bē kàu koh ngē beh tsò, lí kám m̄ sī gōng-lâng?",
  },
  {
    hanji: "伊是好心欲幫助人，煞予人笑講是戇大呆。",
    tailo:
      "I sī hó-sim beh pang-tsōo--lâng, suah hōo lâng tshiò kóng sī gōng-tuā-tai.",
  },
  {
    hanji: "看了鑿目，規氣莫看就無代誌。",
    tailo: "Khuànn liáu tsha̍k-ba̍k, kui-khì mài khuànn tō bô tāi-tsì.",
  },
  {
    hanji: "哪會遐戇呆，一點仔代誌都做袂好。",
    tailo: "Ná ē hiah gōng-tai, tsi̍t-tiám-á tāi-tsì to tsò bē hó.",
  },
  {
    hanji: "伊看著戇神戇神，到底是發生啥物代誌？",
    tailo:
      "I khuànn tio̍h gōng-sîn-gōng-sîn, tàu-té sī huat-sing siánn-mih tāi-tsì?",
  },
  {
    hanji: "你莫佇遐戇想矣，緊去做代誌較要緊。",
    tailo:
      "Lí mài tī hia gōng-siūnn--ah, kín khì tsò tāi-tsì khah iàu-kín.",
  },
  {
    hanji: "你見擺都開彼號戇錢，實在有夠冤枉。",
    tailo:
      "Lí kiàn-pái to khai hit-lō gōng-tsînn, si̍t-tsāi ū-kàu uan-óng.",
  },
  {
    hanji: "伊雖然生做戇頭戇面，毋過心肝真善良。",
    tailo:
      "I sui-jiân senn-tsò gōng-thâu-gōng-bīn, m̄-koh sim-kuann tsin siān-liông.",
  },
  {
    hanji: "無靠戇膽，哪會敢去啊！",
    tailo: "Bô khò gōng-tánn, ná ē kánn khì--ah!",
  },
  {
    hanji: "伊戇戇坐佇遐，毋知咧想啥。",
    tailo: "I gōng-gōng tsē tī hia, m̄ tsai teh siūnn siannh.",
  },
  {
    hanji: "目睭鑿鑿，若像是生目針。",
    tailo: "Ba̍k-tsiu tsha̍k-tsha̍k, ná-tshiūnn sī senn ba̍k-tsiam.",
  },
  {
    hanji: "心事無人知，我鬱甲足艱苦的。",
    tailo: "Sim-sū bô lâng tsai, guá ut kah tsiok kan-khóo--ê.",
  },
  {
    hanji: "已經幾若個月矣攏揣無頭路，心情誠鬱卒！",
    tailo:
      "Í-king kuí-nā kò gue̍h--ah lóng tshuē-bô thâu-lōo, sim-tsîng tsiânn ut-tsut!",
  },
  {
    hanji: "遮有一个砛仔，你著細膩毋通跋倒。",
    tailo: "Tsia ū tsi̍t ê gîm-á, lí tio̍h sè-jī m̄-thang pua̍h-tó.",
  },
  {
    hanji: "伊贌一片果子園種果子趁錢。",
    tailo: "I pa̍k tsi̍t phiàn kué-tsí-hn̂g tsìng kué-tsí thàn-tsînn.",
  },
  {
    hanji: "這項生理風險真懸，你毋通無斟酌想就蹽落去。",
    tailo:
      "Tsit hāng sing-lí hong-hiám tsin kuân, lí m̄-thang bô tsim-tsiok siūnn tō liâu--lo̍h-khì.",
  },
  {
    hanji: "這搭無橋，愛蹽溪仔過去。",
    tailo: "Tsit-tah bô kiô, ài liâu khe-á kuè--khì.",
  },
  {
    hanji: "明明知影代誌真嚴重，伊嘛是蹽落去。",
    tailo:
      "Bîng-bîng tsai-iánn tāi-tsì tsin giâm-tiōng, i mā sī liâu--lo̍h-khì.",
  },
  {
    hanji: "伊是阮這班上躼的學生。",
    tailo: "I sī guán tsit pan siōng lò ê ha̍k-sing.",
  },
  {
    hanji: "阿忠生做誠懸，人攏叫伊躼跤忠仔。",
    tailo:
      "A-tiong senn-tsò tsiânn kuân, lâng lóng kiò i lò-kha Tiong--á.",
  },
  {
    hanji: "我的嚨喉㧎著一枝魚刺。",
    tailo: "Guá ê nâ-âu khê-tio̍h tsi̍t ki hî-tshì.",
  },
  {
    hanji: "人共伊歹，伊毋但毋驚，閣敢佮人㧣。",
    tailo: "Lâng kā i pháinn, i m̄-nā m̄ kiann, koh kánn kah lâng tu.",
  },
  {
    hanji: "𠯗一喙就好，莫啉傷濟。",
    tailo: "Tsi̍p--tsi̍t-tshuì tō hó, mài lim siunn tsē.",
  },
  {
    hanji: "咱來去彼間麵店仔小𠯗一下。",
    tailo: "Lán lâi-khì hit king mī-tiàm-á sió tsi̍p--tsi̍t-ē.",
  },
  {
    hanji: "我誠㤉潲伊彼款做代誌的態度。",
    tailo: "Guá tsiânn gê-siâu i hit khuán tsò tāi-tsì ê thāi-tōo.",
  },
  {
    hanji: "你去房間䀐看覓，看伊敢有咧讀冊。",
    tailo:
      "Lí khì pâng-king siam khuànn-māi, khuànn i kám ū teh tha̍k-tsheh.",
  },
  {
    hanji: "狗無嫌主人窮，囝無嫌爸母㾀勢。",
    tailo: "Káu bô hiâm tsú-lâng kîng, kiánn bô hiâm pē-bú khiap-sì.",
  },
  {
    hanji: "伊徛佇遐無聲無說，袂輸𢯾壁鬼咧。",
    tailo: "I khiā tī hia bô-siann-bô-sueh, bē-su mooh-piah-kuí--leh.",
  },
  {
    hanji: "伊真正是一个𠢕人，莫怪逐家攏遮爾仔尊敬伊。",
    tailo:
      "I tsin-tsiànn sī tsi̍t ê gâu-lâng, bo̍k-kuài ta̍k-ke lóng tsiah-nī-á tsun-kìng--i.",
  },
  {
    hanji: "你今仔日哪會遐𠢕早？",
    tailo: "Lí kin-á-ji̍t ná ē hiah gâu-tsá?",
  },
  {
    hanji: "我的跤𨂿一下誠嚴重。",
    tailo: "Guá ê kha uáinn tsi̍t-ē tsiânn giâm-tiōng.",
  },
  {
    hanji: "伊行路無注意煞去𨂿著。",
    tailo: "I kiânn-lōo bô tsù-ì suah khì uáinn--tio̍h.",
  },
  {
    hanji: "你毋通遐爾仔𪁎哥，無，早慢會出代誌。",
    tailo: "Lí m̄-thang hiah-nī-á tshio-ko, bô, tsá-bān ē tshut-tāi-tsì.",
  },
  {
    hanji: "伊誠𪁎趒，早慢會予人教示。",
    tailo: "I tsiânn tshio-tiô, tsá-bān ē hōo lâng kà-sī.",
  },
  {
    hanji: "桌布澹澹𩛩咧會臭臭。",
    tailo: "Toh-pòo tâm-tâm kauh--leh ē tshàu-tshàu.",
  },
  {
    hanji: "阮細漢的時上愛去𥴊仔店買糖仔。",
    tailo: "Guán sè-hàn ê sî siōng ài khì kám-á-tiàm bé thn̂g-á.",
  },
  {
    hanji: "你若無爽快，就緊去䖙一下。",
    tailo: "Lí nā bô sóng-khuài, tō kín khì the--tsi̍t-ē.",
  },
  {
    hanji: "伊偷𤆬人的囡仔去賣。",
    tailo: "I thau tshuā lâng ê gín-á khì bē.",
  },
  {
    hanji: "恁若欲去𬦰山，上好有人𤆬路。",
    tailo: "Lín nā beh khì peh-suann, siōng-hó ū lâng tshuā-lōo.",
  },
  {
    hanji: "是恁後生𤆬頭去佮人相拍的。",
    tailo: "Sī lín hāu-senn tshuā-thâu khì kah lâng sio-phah--ê.",
  },
  {
    hanji: "你𤆬頭，我綴你後壁行。",
    tailo: "Lí tshuā-thâu, guá tuè lí āu-piah kiânn.",
  },
  {
    hanji: "你明仔載欲佮阮去𨑨迌無？",
    tailo: "Lí bîn-á-tsài beh kah guán khì tshit-thô--bô?",
  },
  {
    hanji: "你對伊的感情是認真的抑是𨑨迌爾爾？",
    tailo:
      "Lí tuì i ê kám-tsîng sī jīn-tsin--ê ia̍h-sī tshit-thô niā-niā?",
  },
  {
    hanji: "驚死就毋通出來𨑨迌。",
    tailo: "Kiann-sí tō m̄-thang tshut-lâi tshit-thô.",
  },
  {
    hanji: "囡仔人愛耍𨑨迌物仔。",
    tailo: "Gín-á-lâng ài sńg tshit-thô-mih-á.",
  },
  {
    hanji: "伊目睭𥍉𥍉看，向望𪜶老母會轉來𤆬伊。",
    tailo:
      "I ba̍k-tsiu nih-nih-khuànn, ǹg-bāng in lāu-bú ē tńg-lâi tshuā--i.",
  },
  {
    hanji: "伊共我𥍉目叫我毋通講。",
    tailo: "I kā guá nih-ba̍k kiò guá m̄-thang kóng.",
  },
  {
    hanji: "豬跤𤉙爛爛，真好食。",
    tailo: "Ti-kha kûn nuā-nuā, tsin hó-tsia̍h.",
  },
  {
    hanji: "伊做歹代誌去予我㨑著。",
    tailo: "I tsò pháinn tāi-tsì khì hōo guá tsang--tio̍h.",
  },
  {
    hanji: "共烏墨𪐞開佇紙頂嘛是一種畫圖的手法。",
    tailo:
      "Kā oo-ba̍k tòo-khui tī tsuá tíng mā sī tsi̍t tsióng uē-tôo ê tshiú-huat.",
  },
  {
    hanji: "我袂曉畫，無，我𪐞一張予你。",
    tailo: "Guá bē-hiáu uē, bô, guá tòo tsi̍t tiunn hōo--lí.",
  },
  {
    hanji: "今仔日的火車實在有夠𤲍。",
    tailo: "Kin-á-ji̍t ê hué-tshia si̍t-tsāi ū-kàu kheh.",
  },
  {
    hanji: "柿粿𩚨嗲嗲、甜粅粅，真好食。",
    tailo: "Khī-kué khiū-teh-teh, tinn-but-but, tsin hó-tsia̍h.",
  },
  {
    hanji: "講無兩句話伊就共對方㧌落去矣。",
    tailo: "Kóng bô nn̄g kù uē i tō kā tuì-hong mau--lo̍h-khì--ah.",
  },
  {
    hanji: "阮母仔予我氣甲𧿳𧿳跳。",
    tailo: "Guán bú--á hōo guá khì kah phu̍t-phu̍t-thiàu.",
  },
  {
    hanji: "這尾魚仔頭拄仔猶閣𧿳𧿳跳。",
    tailo: "Tsit bué hî-á thâu-tú-á iáu-koh phu̍t-phu̍t-thiàu.",
  },
  {
    hanji: "這塊杯仔有必痕，毋通閣用矣。",
    tailo: "Tsit tè pue-á ū pit-hûn, m̄-thang koh īng--ah.",
  },
  {
    hanji: "天氣傷冷，跤攏必開矣。",
    tailo: "Thinn-khì siunn líng, kha lóng pit--khui--ah.",
  },
  {
    hanji: "我有代誌想欲佮你參詳，䢢拄䢢去拄著你。",
    tailo:
      "Guá ū tāi-tsì siūnn-beh kah lí tsham-siông, tshiāng-tú-tshiāng khì tú-tio̍h lí.",
  },
  {
    hanji: "這粒菝仔傷𠕇，我咬袂落去。",
    tailo: "Tsit lia̍p pua̍t-á siunn tīng, guá kā bē lo̍h--khì.",
  },
  {
    hanji: "這隻椅仔做甲不止仔𠕇篤。",
    tailo: "Tsit tsiah í-á tsò kah put-tsí-á tīng-tauh.",
  },
  {
    hanji: "伊比𪜶阿兄較𠕇篤。",
    tailo: "I pí in a-hiann khah tīng-tauh.",
  },
  {
    hanji: "逐日煮仝款的菜，食甲真𤺪。",
    tailo: "Ta̍k-ji̍t tsú kāng-khuán ê tshài, tsia̍h kah tsin siān.",
  },
  {
    hanji: "眠床予囡仔𧿬甲歹去。",
    tailo: "Bîn-tshn̂g hōo gín-á thún kah pháinn--khì.",
  },
  {
    hanji: "遮爾媠的花到底是啥人共伊𧿬踏甲按呢？",
    tailo:
      "Tsiah-nī suí ê hue tàu-té sī siánn-lâng kā i thún-ta̍h kah án-ne?",
  },
  {
    hanji: "你敢走來阮兜共我𧿬踏？",
    tailo: "Lí kánn tsáu-lâi guán tau kā guá thún-ta̍h?",
  },
  {
    hanji: "攑棍仔對頭殼共伊𢪱落去。",
    tailo: "Gia̍h kùn-á tuì thâu-khak kā i bu̍t--lo̍h-khì.",
  },
  {
    hanji: "鐵仔愛𫝏鋼過才會𠕇。",
    tailo: "Thih-á ài gàn-kǹg--kuè tsiah ē tīng.",
  },
  {
    hanji: "彼箍講的話我攏無咧共𫝺。",
    tailo: "Hit khoo kóng ê uē guá lóng bô teh kā hiù.",
  },
  {
    hanji: "彼兩个囡仔咧相霧水，足癩𰣻的。",
    tailo: "Hit nn̄g ê gín-á teh sio-bū-tsuí, tsiok thái-ko--ê.",
  },
  {
    hanji: "今仔日來的佮頂過彼个敢𫝛人？",
    tailo: "Kin-á-ji̍t lâi--ê kah tíng-kuè hit ê kám siāng-lâng?",
  },
  {
    hanji: "我佮阿仁是𫝛勻的叔伯兄弟。",
    tailo: "Guá kah A-jîn sī siāng-ûn ê tsik-peh-hiann-tī.",
  },
  {
    hanji: "阮兩个是𫝛年生的，攏相龍。",
    tailo: "Guán nn̄g ê sī siāng-nî senn--ê, lóng siùnn lîng.",
  },
  {
    hanji: "真拄好，𪜶兩个𫝛時到位。",
    tailo: "Tsin-tú-hó, in nn̄g ê siāng-sî kàu-uī.",
  },
  {
    hanji: "逐个人的興趣攏無𫝛款。",
    tailo: "Ta̍k ê lâng ê hìng-tshù lóng bô siāng-khuán.",
  },
  {
    hanji: "禮拜才做伙來去𬦰山。",
    tailo: "Lé-pài tsiah tsò-hué lâi-khì peh-suann.",
  },
  {
    hanji: "毋通𬦰懸𬦰低，真危險。",
    tailo: "M̄-thang peh-kuân-peh-kē, tsin guî-hiám.",
  },
  {
    hanji: "這个風景區真揜貼，內行的才揣有。",
    tailo:
      "Tsit ê hong-kíng-khu tsin iap-thiap, lāi-hâng--ê tsiah tshuē-ū.",
  },
  {
    hanji: "出日的時，佇水沖邊仔有可能會看著虹。",
    tailo:
      "Tshut-ji̍t ê sî, tī tsuí-tshiâng pinn--á ū khó-lîng ē khuànn-tio̍h khīng.",
  },
  {
    hanji: "伊的豬仔，逐隻都飼甲肥朒朒。",
    tailo: "I ê ti-á, ta̍k tsiah to tshī kah puî-tsut-tsut.",
  },
  {
    hanji: "咱廟裡做醮的紅龜粿，每一口灶分一个。",
    tailo:
      "Lán biō--lí tsò-tsiò ê âng-ku-kué,  muí tsi̍t kháu tsàu pun tsi̍t ê.",
  },
  {
    hanji: "你講甲一大拖，伊根本都聽袂落去。",
    tailo: "Lí kóng kah tsi̍t-tuā-thua, i kin-pún to thiann bē lo̍h--khì.",
  },
  {
    hanji: "這个囡仔無開脾，真小食。",
    tailo: "Tsit ê gín-á bô khui-pî, tsin sió-tsia̍h.",
  },
  {
    hanji: "阮蹛佇內山斗底，交通真無利便。",
    tailo: "Guán tuà tī lāi-suann-táu-té, kau-thong tsin bô lī-piān.",
  },
  {
    hanji: "關佇內籬仔的犯人並毋是以後就攏無前途。",
    tailo:
      "Kuainn tī lāi-lî-á ê huān-lâng pīng m̄ sī í-āu tō lóng bô tsiân-tôo.",
  },
  {
    hanji: "你著細膩，毋通欲做公道人煞變事主。",
    tailo:
      "Lí tio̍h sè-jī, m̄-thang beh tsò kong-tō-lâng suah piàn sū-tsú.",
  },
  {
    hanji: "做生理愛敢，勼跤勼手做袂行。",
    tailo: "Tsò-sing-lí ài kánn, kiu-kha-kiu-tshiú tsò bē kiânn.",
  },
  {
    hanji: "伊講話反起反倒，莫插伊。",
    tailo: "I kóng-uē huán-khí-huán-tó, mài tshap--i.",
  },
  {
    hanji: "我想欲共伊講心內話，毋過，見擺看著伊就講袂出喙。",
    tailo:
      "Guá siūnn-beh kā i kóng sim-lāi-uē, m̄-koh, kiàn-pái khuànn-tio̍h i tō kóng bē tshut-tshuì.",
  },
  {
    hanji: "伊開一張十萬箍的手形予我做定金。",
    tailo:
      "I khui tsi̍t tiunn tsa̍p-bān khoo ê tshiú-hîng hōo guá tsò tiānn-kim.",
  },
  {
    hanji: "請你手梳攑懸，原諒伊這遍的不是。",
    tailo:
      "Tshiánn lí tshiú-se-gia̍h-kuân, guân-liōng i tsit piàn ê put-sī.",
  },
  {
    hanji: "囡仔人無規矩真正毋是款，無好好仔管教袂使得。",
    tailo:
      "Gín-á-lâng bô kui-kí tsin-tsiànn m̄-sī-khuán, bô hó-hó-á kuán-kà bē-sái--tit.",
  },
  {
    hanji: "欲好，龜𬦰壁；欲敗，水崩山。",
    tailo: "Beh hó, ku peh piah; beh pāi, tsuí-pang-suann.",
  },
  {
    hanji: "鰇魚螺肉蒜內面愛有冬筍才好食。",
    tailo: "Jiû-hî lê-bah-suàn lāi-bīn ài ū tang-sún tsiah hó-tsia̍h.",
  },
  {
    hanji: "阮遮賣枷車藤的店，口味有無仝款的變化，生理誠交易。",
    tailo:
      "Guán tsia bē kha-tshia-tîn ê tiàm, kháu-bī ū bô kāng-khuán ê piàn-huà, sing-lí tsiânn ka-ia̍h.",
  },
  {
    hanji: "行到半中央煞斡倒轉去。",
    tailo: "Kiânn kàu puànn-tiong-ng suah uat tò-tńg--khì.",
  },
  {
    hanji: "經濟變好了後，誠濟平階攏拆掉換起樓仔厝。",
    tailo:
      "King-tsè piàn hó liáu-āu, tsiânn tsē pênn-kai lóng thiah-tiāu uānn khí lâu-á-tshù.",
  },
  {
    hanji: "碗若是必巡，就毋通貯湯。",
    tailo: "Uánn nā-sī pit-sûn, tō m̄-thang té thng.",
  },
  {
    hanji: "辜顯榮的本居地是佇鹿港。",
    tailo: "Koo Hián-îng ê pún-ki-tē sī tī Lo̍k-káng.",
  },
  {
    hanji: "你定定散散，阿爸的代誌欲按怎交仗予你。",
    tailo:
      "Lí tiānn-tiānn suànn-suànn, a-pah ê tāi-tsì beh án-tsuánn kau-tiōng hōo--lí.",
  },
  {
    hanji: "三月三，桃仔李仔伨頭擔。",
    tailo: "Sann-gue̍h-sann, thô-á lí-á thīn-thâu tann.",
  },
  {
    hanji: "錢額無啥夠，眾人逐个出寡來伨頭。",
    tailo:
      "Tsînn-gia̍h bô siánn kàu, tsìng-lâng ta̍k ê tshut--kuá lâi thīn-thâu.",
  },
  {
    hanji: "好得無去，無，煞加走一逝。",
    tailo: "Hó-tit bô khì, bô, suah ke tsáu tsi̍t tsuā.",
  },
  {
    hanji: "竹管仔飯上早是原住民的一種食物。",
    tailo:
      "Tik-kóng-á-pn̄g siōng tsá sī guân-tsū-bîn ê tsi̍t tsióng si̍t-bu̍t.",
  },
  {
    hanji: "伊看見細隻雞囝一隻閣一隻對卵殼出來，就真歡喜。",
    tailo:
      "I khuànn-kìnn sè tsiah ke-kiánn tsi̍t tsiah koh tsi̍t tsiah tuì nn̄g-khak tshut--lâi, tō tsin huann-hí.",
  },
  {
    hanji: "講話著伸手摸心肝，毋通含血霧天誣賴人。",
    tailo:
      "Kóng-uē tio̍h tshun tshiú bong sim-kuann, m̄-thang kâm-hueh-bū-thinn bû-luā--lâng.",
  },
  {
    hanji: "你若是無法度一擺總納，抑無，看欲分做幾期？",
    tailo:
      "Lí nā-sī bô-huat-tōo tsi̍t pái tsóng la̍p, iah-bô, khuànn beh hun-tsò kuí kî?",
  },
  {
    hanji: "你去攑沙耙共跳遠場地整予平。",
    tailo: "Lí khì gia̍h sua-pê kā thiàu-hn̄g tiûnn-tē tsíng hōo pênn.",
  },
  {
    hanji: "伊拄咧學煎魚仔的時，定定煎甲牢鼎。",
    tailo:
      "I tú-teh o̍h tsian hî-á ê sî, tiānn-tiānn tsian kah tiâu-tiánn.",
  },
  {
    hanji: "四月芒種雨，六月火燒埔。",
    tailo: "Sì--gue̍h bông-tsíng-hōo, la̍k--gue̍h hué-sio-poo.",
  },
  {
    hanji: "做人囝兒，就愛奉待爸母。",
    tailo: "Tsò lâng kiánn-jî, tō ài hōng-thāi pē-bú.",
  },
  {
    hanji: "伊是𪜶厝裡的孤查某囝。",
    tailo: "I sī in tshù--lí ê koo-tsa-bóo-kiánn.",
  },
  {
    hanji: "逐冬媽祖生，廟裡攏會抾丁錢。",
    tailo: "Ta̍k tang Má-tsóo-senn, biō--lí lóng ē khioh-ting-tsînn.",
  },
  {
    hanji: "咱先明品一下，講過就準算，毋免保家。",
    tailo:
      "Lán sing bîng-phín--tsi̍t-ē, kóng--kuè tō tsún-sǹg, m̄-bián pó-ke.",
  },
  {
    hanji: "拄才風一下吹，門雄雄迸一聲，原來是門後的門擋仔歹去矣。",
    tailo:
      "Tú-tsiah hong tsi̍t-ē tshue, mn̂g hiông-hiông piàng tsi̍t siann, guân-lâi sī mn̂g-āu ê mn̂g-tòng-á pháinn--khì--ah.",
  },
  {
    hanji: "阮兜的巷仔口有一間金紙店。",
    tailo: "Guán tau ê hāng-á-kháu ū tsi̍t king kim-tsuá-tiàm.",
  },
  {
    hanji: "家己拍拚較要緊，怨天怨地敢有路用？",
    tailo:
      "Ka-kī phah-piànn khah iàu-kín, uàn-thinn-uàn-tē kám ū-lōo-īng?",
  },
  {
    hanji: "伊一領外衫穿幾若十年，補了閣補，毋甘挕捒。",
    tailo:
      "I tsi̍t niá guā-sann tshīng kuí-nā tsa̍p nî, póo-liáu koh póo, m̄-kam hìnn-sak.",
  },
  {
    hanji: "這塊田是活賣的，等十年後序細有法度做的時才閣買轉來。",
    tailo:
      "Tsit tè tshân sī ua̍h-bē--ê, tán tsa̍p nî āu sī-sè ū-huat-tōo tsò ê sî tsiah-koh bé--tńg-lâi.",
  },
  {
    hanji: "阿姊佮小弟相𤆬去讀冊。",
    tailo: "A-tsí kah sió-tī sio-tshuā khì tha̍k-tsheh.",
  },
  {
    hanji: "伊有一寡話囥咧，欲留咧做相罵本。",
    tailo: "I ū tsi̍t-kuá uē khǹg--leh, beh lâu leh tsò sio-mē-pún.",
  },
  {
    hanji: "猶未到食飯時間就胃慒慒，毋知胃有問題無？",
    tailo:
      "Iáu-buē kàu tsia̍h-pn̄g sî-kan tō uī tso-tso, m̄ tsai uī ū būn-tê--bô?",
  },
  {
    hanji: "彼種生理遐重本，我看咱毋通做。",
    tailo:
      "Hit tsióng sing-lí hiah tāng-pún, guá khuànn lán m̄-thang tsò.",
  },
  {
    hanji: "禮拜時仔，朋友相招出去食好料。",
    tailo: "Lé-pài-sî-á, pîng-iú sio-tsio tshut-khì tsia̍h hó-liāu.",
  },
  {
    hanji: "張總的頂擺出張，去巡視海外的工場，佇遐蹛個外月。",
    tailo:
      "Tiunn tsóng--ê tíng-pái tshut-tiunn, khì sûn-sī hái-guā ê kang-tiûnn, tī hia tuà kò-guā-gue̍h.",
  },
  {
    hanji: "上崎的時若雄雄熄火，車會倒退攄。",
    tailo: "Tsiūnn-kiā ê sî nā hiông-hiông sit-hué, tshia ē tò-thè-lu.",
  },
  {
    hanji: "你若閣講袂聽，原性不改，以後食苦的是家己。",
    tailo:
      "Lí nā koh kóng bē thiann, guân-sìng put kái, í-āu tsia̍h-khóo--ê sī ka-kī.",
  },
  {
    hanji: "今年的義賣會，有真濟人鬥捀場。",
    tailo: "Kin-nî ê gī-bē-huē, ū tsin tsē lâng tàu phâng-tiûnn.",
  },
  {
    hanji: "包紙敬予喪家，是為著欲共喪家鬥相楗。",
    tailo:
      "Pau tsuá-kìng hōo song-ka, sī uī-tio̍h beh kā song-ka tàu-sio-kīng.",
  },
  {
    hanji: "早前連番薯臭香，嘛礤簽來食。",
    tailo:
      "Tsá-tsîng liân han-tsî tshàu-hiunn, mā tshuah-tshiam lâi tsia̍h.",
  },
  {
    hanji: "天欲暗矣，無較緊咧，就袂赴市矣。",
    tailo: "Thinn beh àm--ah, bô khah kín--leh, tō  bē-hù-tshī--ah.",
  },
  {
    hanji: "因為落大雨，才袂得去。",
    tailo: "In-uī lo̍h tuā-hōo, tsiah bē-tit khì.",
  },
  {
    hanji: "火車欲起磅矣，毋通倚去！",
    tailo: "Hué-tshia beh khí-pōng--ah, m̄-thang uá--khì!",
  },
  {
    hanji: "東部營業處後個月月初起磅，逐家加油！",
    tailo:
      "Tang-pōo îng-gia̍p-tshù āu kò gue̍h gue̍h-tshe khí-pōng, ta̍k-ke ka-iû!",
  },
  {
    hanji: "才啉這點仔酒爾爾，猶未起磅咧啦！",
    tailo:
      "Tsiah lim tsit-tiám-á tsiú niā-niā,  iáu-buē khí-pōng--leh--lah!",
  },
  {
    hanji: "募款的代誌略仔起磅矣。",
    tailo: "Bōo-khuán ê tāi-tsì lio̍h-á khí-pōng--ah.",
  },
  {
    hanji: "伊一下聽著著大獎，煞徛踮遐起戇。",
    tailo:
      "I tsi̍t-ē thiann-tio̍h tio̍h tuā-tsióng, suah khiā tiàm hia khí-gōng.",
  },
  {
    hanji: "伊若啉酒醉，攏講伊無醉。",
    tailo: "I nā lim-tsiú-tsuì, lóng kóng i bô tsuì.",
  },
  {
    hanji: "伊出來選立委的時，有真濟好名聲的人共伊徛台。",
    tailo:
      "I tshut-lâi suán li̍p-uí ê sî, ū tsin tsē hó miâ-siann ê lâng kā i khiā-tâi.",
  },
  {
    hanji: "彼間百年老店到今猶是第三代的老頭家咧徛台扞店。",
    tailo:
      "Hit king pah-nî lāu-tiàm kàu-tann iáu-sī tē-sann tāi ê lāu thâu-ke teh khiā-tâi huānn-tiàm.",
  },
  {
    hanji: "你胃腸無好，涼的毋通食傷濟。",
    tailo: "Lí uī-tn̂g bô hó, liâng--ê m̄-thang tsia̍h siunn tsē.",
  },
  {
    hanji: "做粗瓷仔若無先淋碭，等燒好了後，貯水恐驚會洩出來。",
    tailo:
      "Tsò tshoo-huî-á nā bô sing lâm-thn̄g, tán sio-hó liáu-āu, té tsuí khióng-kiann ē sia̍p--tshut-lâi.",
  },
  {
    hanji: "伊規年迵天攏佇深山林內燒瓷仔，罕得轉來一逝。",
    tailo:
      "I kui-nî-thàng-thinn lóng tī tshim-suann-nâ-lāi sio huî-á, hán-tit tńg-lâi tsi̍t tsuā.",
  },
  {
    hanji: "伊做代誌真猛掠，一睏仔就做好矣。",
    tailo: "I tsò tāi-tsì tsin mé-lia̍h, tsi̍t-khùn-á tō tsò-hó--ah.",
  },
  {
    hanji: "終其尾伊嘛是提無著半項。",
    tailo: "Tsiong-kî-bué i mā sī the̍h bô tio̍h puànn hāng.",
  },
  {
    hanji: "韭菜花炒透抽，真佮喙。",
    tailo: "Kú-tshài-hue tshá thàu-thiu,  tsin kah-tshuì.",
  },
  {
    hanji: "選舉買票真厲害，這是通人知的代誌。",
    tailo:
      "Suán-kí bé-phiò tsin lī-hāi, tse sī thong-lâng-tsai ê tāi-tsì.",
  },
  {
    hanji: "排長訓練兵仔，共兵仔喝起喝倒。",
    tailo: "Pâi-tiúnn hùn-liān ping-á, kā ping-á huah-khí-huah-tó.",
  },
  {
    hanji: "伊是這角勢的老大，逐家攏予伊喝起喝倒。",
    tailo:
      "I sī tsit kak-sì ê láu-tuā, ta̍k-ke lóng hōo i huah-khí-huah-tó.",
  },
  {
    hanji: "人欲請你，你都無咧媠面閣！",
    tailo: "Lâng beh tshiánn--lí, lí to bô teh suí-bīn--koh!",
  },
  {
    hanji:
      "你欲出去做生理，無愛閣蹛厝內，著愛尊存作穡的老爸，先佮伊參詳。",
    tailo:
      "Lí beh tshut-khì tsò-sing-lí, bô ài koh tuà tshù-lāi, tio̍h-ài tsun-tshûn tsoh-sit ê lāu-pē, sing kah i tsham-siông.",
  },
  {
    hanji: "伊雄雄傱出來，害我掣一趒。",
    tailo: "I hiông-hiông tsông--tshut-lâi, hāi guá tshuah tsi̍t tiô.",
  },
  {
    hanji: "咱咧講話，有時會插濫幾若種語言。",
    tailo: "Lán teh kóng-uē, ū-sî ē tshap-lām kuí-nā tsióng gí-giân.",
  },
  {
    hanji: "彼个監工真𠢕共人欹空。",
    tailo: "Hit ê kàm-kang tsin gâu kā lâng khia-khang.",
  },
  {
    hanji: "無天良的人敢會有好尾？",
    tailo: "Bô-thian-liông ê lâng kám ē ū hó-bué?",
  },
  {
    hanji: "爸母無捨施，送囝去學戲。",
    tailo: "Pē-bú bô-siá-sì, sàng kiánn khì o̍h hì.",
  },
  {
    hanji: "遮細漢就無爸無母，真無捨施。",
    tailo: "Tsiah sè-hàn tō bô pē bô bú, tsin bô-siá-sì.",
  },
  {
    hanji: "價數若落，囤貨就無盤。",
    tailo: "Kè-siàu nā lak, tún-huè tō bô-puânn.",
  },
  {
    hanji: "這个琴子害去矣，彈袂出聲音，愛揣人來修理。",
    tailo:
      "Tsit ê khîm-jí hāi--khì--ah, tuânn bē tshut siann-im, ài tshuē lâng lâi siu-lí.",
  },
  {
    hanji: "種番薯著愛培番薯稜，才會生番薯。",
    tailo:
      "Tsìng han-tsî tio̍h-ài puē han-tsî-lîng, tsiah ē senn han-tsî.",
  },
  {
    hanji: "我睏一醒矣，你哪會閣毋去睏？",
    tailo: "Guá khùn-tsi̍t-tshénn--ah, lí ná ē koh m̄ khì khùn?",
  },
  {
    hanji: "較早的計程車，有的較無愛載短站的人客。",
    tailo:
      "Khah-tsá ê kè-thîng-tshia, ū ê khah bô ài tsài té-tsām ê lâng-kheh.",
  },
  {
    hanji: "事業交予後生了後，就是閒身矣。",
    tailo: "Sū-gia̍p kau hōo hāu-senn liáu-āu, tō sī îng-sin--ah.",
  },
  {
    hanji: "退休以後，伊是閒身的人。",
    tailo: "Thè-hiu í-āu, i sī îng-sin ê lâng.",
  },
  {
    hanji: "選舉的時，候選人愛靠伊的柱仔跤來鬥搝票。",
    tailo:
      "Suán-kí ê sî, hāu-suán-jîn ài khò i ê thiāu-á-kha lâi tàu khiú-phiò.",
  },
  {
    hanji: "有明星咧鬥宣傳，這支胭脂加足搶市。",
    tailo:
      "Ū bîng-tshenn teh tàu suan-thuân, tsit ki ian-tsi ke tsiok tshiúnn-tshī.",
  },
  {
    hanji: "新正年頭見面攏會講好話。",
    tailo: "Sin-tsiann-nî-thâu kìnn-bīn lóng ē kóng hó-uē.",
  },
  {
    hanji: "你講過的話，敢閣會記得？",
    tailo: "Lí kóng--kuè ê uē, kám koh ē-kì--tit?",
  },
  {
    hanji: "會記得細漢的時，捌去彼間媽祖廟拜拜。",
    tailo: "Ē-kì-tit sè-hàn ê sî, bat khì hit king Má-tsóo-biō pài-pài.",
  },
  {
    hanji: "人若有歲，目睭就煙暈。",
    tailo: "Lâng nā ū-huè, ba̍k-tsiu tō ian-n̄g.",
  },
  {
    hanji: "伊跋倒，雖然人無按怎，醫生講猶是照電光確定骨頭無含梢較好。",
    tailo:
      "I pua̍h-tó, sui-jiân lâng bô án-tsuánn, i-sing kóng iáu-sī tsiò-tiān-kong khak-tīng kut-thâu bô hâm-sau khah hó.",
  },
  {
    hanji: "為著維護空氣的品質，車廂內全面禁薰。",
    tailo:
      "Uī-tio̍h uî-hōo khong-khì ê phín-tsit, tshia-siunn-lāi tsuân-bīn kìm-hun.",
  },
  {
    hanji: "兩爿咧冤家，一爿看毋是勢，緊閣落人來。",
    tailo:
      "Nn̄g-pîng teh uan-ke, tsi̍t-pîng khuànn m̄-sī-sè, kín koh làu-lâng lâi.",
  },
  {
    hanji: "落台的時愛共觀眾行禮。",
    tailo: "Lo̍h-tâi ê sî ài kā kuan-tsiòng kiânn-lé.",
  },
  {
    hanji: "政治人物奢颺上台的真濟，光榮落台的較少。",
    tailo:
      "Tsìng-tī jîn-bu̍t tshia-iānn tsiūnn-tâi--ê tsin tsē, kong-îng lo̍h-tâi--ê khah tsió.",
  },
  {
    hanji: "我跤捗比人較大，真歹買鞋仔。",
    tailo: "Guá kha-pôo pí lâng khah tuā, tsin pháinn bé ê-á.",
  },
  {
    hanji: "警方根據現場留落來的跤捗號，才掠著犯人。",
    tailo:
      "Kíng-hong kin-kì hiān-tiûnn lâu--lo̍h-lâi ê kha-pôo hō,  tsiah lia̍h-tio̍h huān-lâng.",
  },
  {
    hanji: "血氣袂順的人，較會跤麻手痺。",
    tailo: "Hueh-khì bē sūn ê lâng, khah ē kha-bâ-tshiú-pì.",
  },
  {
    hanji: "直直行到路尾就會看著彼坎店。",
    tailo: "Ti̍t-ti̍t kiânn kàu lōo-bué tō ē khuànn-tio̍h hit khám tiàm.",
  },
  {
    hanji: "駛車欲通過斑馬線，著愛讓予過路人先過。",
    tailo:
      "Sái-tshia beh thong-kuè pan-má-suànn, tio̍h-ài niū hōo kuè-lōo-lâng sing kuè.",
  },
  {
    hanji: "我是過路人，毋敢對這項代誌表示意見。",
    tailo:
      "Guá sī kuè-lōo-lâng, m̄ kánn tuì tsit hāng tāi-tsì piáu-sī ì-kiàn.",
  },
  {
    hanji: "大通路的十字路頭，一般攏有電眼咧翕。",
    tailo:
      "Tuā-thong-lōo ê si̍p-jī-lōo-thâu, it-puann lóng ū tiān-gán teh hip.",
  },
  {
    hanji: "伊有夠實頭，袂曉變竅。",
    tailo: "I ū-kàu tsa̍t-thâu, bē-hiáu piàn-khiàu.",
  },
  {
    hanji: "彼兩間便利商店相對相，毋過生理差真濟。",
    tailo:
      "Hit nn̄g king piān-lī siong-tiàm sio-tuì-siòng, m̄-koh sing-lí tsha tsin tsē.",
  },
  {
    hanji: "伊佮人對相十外回，相無一个有佮意的。",
    tailo:
      "I kah lâng tuì-siòng tsa̍p-guā huê, siòng bô tsi̍t ê ū kah-ì--ê.",
  },
  {
    hanji: "佮你滾耍笑的，莫受氣啦！",
    tailo: "Kah lí kún-sńg-tshiò--ê, mài siū-khì--lah!",
  },
  {
    hanji: "海產食了，腹肚煞滾絞疼，上好緊去看醫生。",
    tailo:
      "Hái-sán tsia̍h-liáu, pak-tóo suah kún-ká-thiànn, siōng-hó kín khì khuànn-i-sing.",
  },
  {
    hanji: "共袂食得的菜葉仔揀掉，提去漚肥。",
    tailo: "Kā bē-tsia̍h--tit ê tshài-hio̍h-á kíng-tiāu, the̍h-khì au-puî.",
  },
  {
    hanji: "彼號漚屎議員，專門咧共人貿工程。",
    tailo: "Hit-lō àu-sái gī-uân, tsuan-bûn teh kā lâng bāu kang-tîng.",
  },
  {
    hanji: "阮阿公較早是漢學仔先。",
    tailo: "Guán a-kong khah-tsá sī hàn-o̍h-á-sian.",
  },
  {
    hanji: "生理著愛算會和才通做。",
    tailo: "Sing-lí tio̍h-ài sǹg-ē-hô tsiah thang tsò.",
  },
  {
    hanji: "網仔門破去矣，會走蠓仔入來，愛緊修理予好。",
    tailo:
      "Bāng-á-mn̂g phuà--khì--ah, ē tsáu báng-á ji̍p--lâi, ài kín siu-lí hōo hó.",
  },
  {
    hanji: "伊雖然是散赤家庭出身，毋過伊無認命，拚到最後出頭天。",
    tailo:
      "I sui-jiân sī sàn-tshiah ka-tîng tshut-sin, m̄-koh i bô jīn-miā, piànn kàu tsuè-āu tshut-thâu-thinn.",
  },
  {
    hanji: "這塊桌仔著愛踅頭，讀冊才食會著光。",
    tailo:
      "Tsit tè toh-á tio̍h-ài se̍h-thâu, tha̍k-tsheh tsiah tsia̍h ē tio̍h kng.",
  },
  {
    hanji: "這个十字路口車袂使踅頭。",
    tailo: "Tsit ê si̍p-jī-lōo-kháu tshia bē-sái se̍h-thâu.",
  },
  {
    hanji: "叫伊來鬥顧擔，煞走甲無看見影跡。",
    tailo:
      "Kiò i lâi tàu kòo-tànn, suah tsáu kah bô khuànn-kìnn iánn-tsiah.",
  },
  {
    hanji: "伊講當選了後，欲整頓市場，結果攏無影跡。",
    tailo:
      "I kóng tòng-suán liáu-āu, beh tsíng-tùn tshī-tiûnn, kiat-kó lóng bô iánn-tsiah.",
  },
  {
    hanji: "這个撐渡伯仔真𠢕和人客唱褒歌。",
    tailo: "Tsit ê the-tōo peh--á tsin gâu hām lâng-kheh tshiùnn po-kua.",
  },
  {
    hanji: "你毋轉去食暗，是欲閣去佗位樂跎？",
    tailo: "Lí m̄ tńg-khì tsia̍h-àm, sī beh koh khì tó-uī lo̍k-tô?",
  },
  {
    hanji: "樓栱去予蛀蟲蛀幾若穿。",
    tailo: "Lâu-kông khì hōo tsiù-thâng tsiù kuí-nā tshng.",
  },
  {
    hanji: "樓栱會使囥一寡仔物件。",
    tailo: "Lâu-kông ē-sái khǹg tsi̍t-kuá-á mi̍h-kiānn.",
  },
  {
    hanji: "箭竹仔筍炒肉絲，好食甲。",
    tailo: "Tsìnn-tik-á-sún tshá bah-si, hó-tsia̍h kah.",
  },
  {
    hanji: "共遮的蝦笱下蹛溪裡，掠看有蝦仔無。",
    tailo: "Kā tsia-ê hê-kô hē tuà khe--lí, lia̍h khuànn ū hê-á--bô.",
  },
  {
    hanji: "伊替人擔罪，才會去坐監。",
    tailo: "I thè lâng tann-tsuē, tsiah ē khì tsē-kann.",
  },
  {
    hanji: "食雄，睏重，作穡貓貓相。",
    tailo: "Tsia̍h hiông, khùn tiōng, tsoh-sit niau-niau-siòng.",
  },
  {
    hanji: "現代時行佇結婚的隔轉日頭轉客，順紲請人客。",
    tailo:
      "Hiān-tāi sî-kiânn tī kiat-hun ê keh-tńg-ji̍t thâu-tńg-kheh, sūn-suà tshiánn-lâng-kheh.",
  },
  {
    hanji: "外口嚇嚇叫是咧創啥物？",
    tailo: "Guā-kháu heh-heh-kiò sī teh tshòng siánn-mih?",
  },
  {
    hanji: "戲台小人生，人生大戲台。",
    tailo: "Hì-tâi sió jîn-sing, jîn-sing tuā hì-tâi.",
  },
  {
    hanji: "總講一句，是你家己做得來的，毋免去怪別人。",
    tailo:
      "Tsóng-kóng--tsi̍t-kù, sī lí ka-kī tsò-tit-lâi--ê, m̄-bián khì kuài pa̍t-lâng.",
  },
  {
    hanji: "便若神明生，神轎攏會繞境驅煞。",
    tailo: "Piān-nā sîn-bîng-senn, sîn-kiō lóng ē jiàu-kíng khu suah.",
  },
  {
    hanji: "遮的物件舊漚舊臭，閣毋甘擲㧒捔。",
    tailo: "Tsia-ê mi̍h-kiānn kū-àu-kū-tshàu, koh m̄-kam tàn-hiat-ka̍k.",
  },
  {
    hanji: "會曉煮雜菜麵的麵擔仔愈來愈少矣。",
    tailo: "Ē-hiáu tsú tsa̍p-tshài-mī ê  mī-tànn-á jú lâi jú tsió--ah.",
  },
  {
    hanji: "伊是一个雜菜麵的跤數。",
    tailo: "I sī tsi̍t ê tsa̍p-tshài-mī ê kha-siàu.",
  },
  {
    hanji: "今囡仔離跤手矣，你會使去四界遊矣。",
    tailo: "Tann gín-á lī-kha-tshiú--ah, lí ē-sái khì sì-kè iû--ah.",
  },
  {
    hanji: "懶性的人做代誌無要無緊，定定會誤著代誌。",
    tailo:
      "Nuā-sìng ê lâng tsò tāi-tsì bô-iàu-bô-kín, tiānn-tiānn ē gōo-tio̍h tāi-tsì.",
  },
  {
    hanji: "空喙著用藥水布包咧，才袂發癀。",
    tailo:
      "Khang-tshuì tio̍h īng io̍h-tsuí-pòo pau--leh, tsiah bē huat-hông.",
  },
  {
    hanji: "鰇魚鬚就是鰇魚的跤佮手。",
    tailo: "Jiû-hî-tshiu tō sī jiû-hî ê kha kah tshiú.",
  },
  {
    hanji: "鹹水魚若是現流仔加足貴的。",
    tailo: "Kiâm-tsuí-hî nā-sī hiān-lâu-á ke tsiok kuì--ê.",
  },
  {
    hanji: "有當時仔食一屑仔鹹梅，會幫助消化。",
    tailo: "Ū-tang-sî-á tsia̍h tsi̍t-sut-á kiâm-muê, ē pang-tsōo siau-huà.",
  },
  {
    hanji: "有的人誠厚譴損，做啥物代誌攏著閣看日。",
    tailo:
      "Ū ê lâng tsiânn kāu-khiàn-sńg, tsò siánn-mih tāi-tsì lóng tio̍h koh khuànn-ji̍t.",
  },
  {
    hanji: "醫生共聽筒囥佇我的胸坎，聽看我的肺部有各樣無。",
    tailo:
      "I-sing kā thiann-tâng khǹg tī guá ê hing-khám, thiann khuànn guá ê hì-pōo ū koh-iūnn--bô.",
  },
  {
    hanji: "竹仔愛略仔烘一下，才有法度鬱拗。",
    tailo: "Tik-á ài lio̍h-á hang--tsi̍t-ē, tsiah ū-huat-tōo ut-áu.",
  },
  {
    hanji: "六月天火燒埔，規日攏誠鬱熱。",
    tailo: "La̍k-gue̍h-thinn hué-sio-poo, kui-ji̍t lóng tsiânn ut-jua̍h.",
  },
  {
    hanji: "最近咧落𤺪雨，衫仔褲披較久都袂焦。",
    tailo: "Tsuè-kīn teh lo̍h siān-hōo, sann-á-khòo phi khah kú to bē ta.",
  },
  {
    hanji: "老人驚跋倒，毋好𬦰山崎。",
    tailo: "Lāu-lâng kiann pua̍h-tó, m̄-hó peh suann-kiā.",
  },
  {
    hanji: "一人才分一疕仔，連楔喙齒縫都無夠。",
    tailo:
      "Tsi̍t lâng tsiah pun tsi̍t-phí-á, liân seh tshuì-khí-phāng to bô-kàu.",
  },
  {
    hanji: "你莫看伊人一疕仔囝，伊力頭真飽喔！",
    tailo:
      "Lí mài khuànn i lâng tsi̍t-phí-á-kiánn, i la̍t-thâu tsin pá--ooh!",
  },
  {
    hanji: "這个師傅的寸步，逐過攏嘛做甲一必一中。",
    tailo:
      "Tsit ê sai-hū ê tshùn-pōo, ta̍k-kuè lóng mā tsò kah it-pit-it-tiòng.",
  },
  {
    hanji: "咱七月半普渡彼工，菜碗著攢較腥臊咧，來拜好兄弟仔。",
    tailo:
      "Lán Tshit-gue̍h-puànn phóo-tōo hit kang, tshài-uánn tio̍h tshuân khah tshenn-tshau--leh, lâi pài hó-hiann-tī-á.",
  },
  {
    hanji: "拚暝工，七晏八晏才去睏。",
    tailo: "Piànn-mê-kang, tshit-uànn-peh-uànn tsiah khì khùn.",
  },
  {
    hanji: "人額有夠，才會用得買團體票。",
    tailo: "Lâng-gia̍h ū-kàu, tsiah ē-īng-tit bé thuân-thé-phiò.",
  },
  {
    hanji: "咱遮有八个人，遐的物件才五人額，猶無夠三个人額。",
    tailo:
      "Lán tsia ū peh ê lâng, hia-ê mi̍h-kiānn tsiah gōo lâng-gia̍h, iáu bô-kàu sann ê lâng-gia̍h.",
  },
  {
    hanji: "伊生做人懸漢大，氣力飽，夯的貨自然比人較濟。",
    tailo:
      "I senn-tsò lâng-kuân-hàn-tuā, khuì-la̍t pá, giâ ê huè tsū-jiân pí lâng khah tsē.",
  },
  {
    hanji: "拜託伊做代誌，伊攏做甲真入心。",
    tailo: "Pài-thok i tsò tāi-tsì, i lóng tsò kah tsin ji̍p-sim.",
  },
  {
    hanji: "教示的話伊攏會記入心。",
    tailo: "Kà-sī ê uē i lóng ē kì ji̍p-sim.",
  },
  {
    hanji: "攑刀的時愛攑刀柄，毋通去捎刀鋩。",
    tailo: "Gia̍h to ê sî ài gia̍h to-pènn, m̄-thang khì sa to-mê.",
  },
  {
    hanji: "伊力草真飽，工課做規工嘛袂忝。",
    tailo: "I la̍t-tsháu tsin pá, khang-khuè tsò kui-kang mā bē thiám.",
  },
  {
    hanji: "彼箍行路使三角六肩，袂輸𨑨迌人。",
    tailo:
      "Hit khoo kiânn-lōo sái sann-kak-la̍k-king, bē-su tshit-thô-lâng.",
  },
  {
    hanji: "報名到昨昏是上尾工，今仔日才欲報就袂赴矣。",
    tailo:
      "Pò-miâ kàu tsa-hng sī siōng-bué kang, kin-á-ji̍t tsiah beh pò tō bē-hù--ah.",
  },
  {
    hanji: "這个囡仔誠袂上教，較教都教袂曉。",
    tailo: "Tsit ê gín-á tsiânn bē tsiūnn-kà, khah kà to kà bē-hiáu.",
  },
  {
    hanji: "這尾魚仔上無有三斤重。",
    tailo: "Tsit bué hî-á siōng-bô ū sann kin tāng.",
  },
  {
    hanji: "我轉來欲攢下晝頓，行入灶跤就看著大漢查某囝當咧煮矣。",
    tailo:
      "Guá tńg-lâi beh tshuân ē-tàu-tǹg, kiânn-ji̍p tsàu-kha tō khuànn-tio̍h tuā-hàn tsa-bóo-kiánn tng-teh tsú--ah.",
  },
  {
    hanji: "這久年症頭矣，著愛耐心治療，沓沓仔調養，才會見效。",
    tailo:
      "Tse kú-nî tsìng-thâu--ah, tio̍h-ài nāi-sim tī-liâu, ta̍uh-ta̍uh-á tiâu-ióng, tsiah ē kiàn-hāu.",
  },
  {
    hanji: "大人大種矣，著較會曉想咧，毋通閣予序大人操煩。",
    tailo:
      "Tuā-lâng-tuā-tsíng--ah, tio̍h khah ē-hiáu siūnn--leh, m̄-thang koh hōo sī-tuā-lâng tshau-huân.",
  },
  {
    hanji: "大人大種矣，磕袂著就起跤動手，有夠卸世眾。",
    tailo:
      "Tuā-lâng-tuā-tsíng--ah, kha̍p-bē-tio̍h tō khí-kha-tāng-tshiú, ū-kàu sià-sì-tsìng.",
  },
  {
    hanji: "風颱過了後，欲去抾大水柴著愛遵守法規。",
    tailo:
      "Hong-thai kuè liáu-āu, beh khì khioh tuā-tsuí-tshâ tio̍h-ài tsun-siú huat-kui.",
  },
  {
    hanji: "舊曆十二月，芥菜大出。",
    tailo: "Kū-li̍k tsa̍p-jī--gue̍h, kuà-tshài tuā-tshut.",
  },
  {
    hanji: "果子大出的時上好食，價數閣俗。",
    tailo: "Kué-tsí tuā-tshut ê sî siōng hó-tsia̍h, kè-siàu koh sio̍k.",
  },
  {
    hanji: "伊逐改送禮，攏是大出手，毋是大鮑魚就是高麗參。",
    tailo:
      "I ta̍k-kái sàng-lé, lóng sī tuā-tshut-tshiú, m̄ sī tuā pau-hî tō sī ko-lê-sim.",
  },
  {
    hanji: "我感覺做人毋通傷大目孔。",
    tailo: "Guá kám-kak tsò-lâng m̄-thang siunn tuā-ba̍k-khóng.",
  },
  {
    hanji: "你有夠大目孔，兩个人食飯買遮濟菜。",
    tailo:
      "Lí ū-kàu tuā-ba̍k-khóng, nn̄g ê lâng tsia̍h-pn̄g bé tsiah tsē tshài.",
  },
  {
    hanji: "𪜶兜是大家口，三頓煮食攏用大灶。",
    tailo: "In tau sī tuā-ke-kháu, sann tǹg tsú-tsia̍h lóng īng tuā-tsàu.",
  },
  {
    hanji: "你大身大命，出入行踏愛細膩喔！",
    tailo: "Lí tuā-sin-tuā-miā, tshut-ji̍p kiânn-ta̍h ài sè-jī--ooh!",
  },
  {
    hanji: "做彼款生理，毋是趁大錢，就是了大注。",
    tailo:
      "Tsò hit khuán sing-lí, m̄ sī thàn-tuā-tsînn, tō sī liáu tuā-tù.",
  },
  {
    hanji: "看兩个大肥相偃，實在真古錐，尻川䫌予人看現現。",
    tailo:
      "Khuànn nn̄g ê tuā-puî sio-ián, si̍t-tsāi tsin kóo-tsui, kha-tshng-phué hōo lâng khuànn-hiān-hiān.",
  },
  {
    hanji:
      "以前的人對屎礐仔舀屎尿起來，囥予伊發酵過，變做大肥，就聽好沃菜。",
    tailo:
      "Í-tsîng ê lâng tuì sái-ha̍k-á iúnn sái-jiō khí--lâi, khǹg hōo i huat-kànn--kuè, piàn-tsò tuā-puî, tō thìng-hó ak-tshài.",
  },
  {
    hanji: "我這陣拄好無散票，大張的予你找敢好？",
    tailo:
      "Guá tsit-tsūn tú-hó bô suánn-phiò, tuā-tiunn--ê hōo lí tsāu kám hó?",
  },
  {
    hanji: "咱明仔早起招恁大細腎來去𬦰山。",
    tailo: "Lán bîn-á-tsá-khí tsio lín tuā-sè-siān lâi-khì peh-suann.",
  },
  {
    hanji: "伊是大漢囝，愛照顧小弟、小妹。",
    tailo: "I sī tuā-hàn-kiánn, ài tsiàu-kòo sió-tī, sió-muē.",
  },
  {
    hanji: "你開毋著向矣啦！緊大翻頭斡倒轉來。",
    tailo:
      "Lí khui m̄-tio̍h hiòng--ah--lah! Kín tuā-huan-thâu uat tò-tńg--lâi.",
  },
  {
    hanji: "頭前地場較闊，你車開去遐大翻頭，按呢較好轉踅。",
    tailo:
      "Thâu-tsîng tē-tiûnn khah khuah, lí tshia khui-khì hia tuā-huan-thâu, án-ne khah hó tńg-se̍h.",
  },
  {
    hanji: "囡仔咧睏晝，你毋通遐爾大嚨喉空。",
    tailo: "Gín-á teh khùn-tàu, lí m̄-thang hiah-nī tuā-nâ-âu-khang.",
  },
  {
    hanji: "伊是咱遮出名的大嚨喉空，遠遠就會當聽著伊講話的聲矣。",
    tailo:
      "I sī lán tsia tshut-miâ ê tuā-nâ-âu-khang, hn̄g-hn̄g tō ē-tàng thiann-tio̍h i kóng-uē ê siann--ah.",
  },
  {
    hanji: "伊的成績佇𪜶彼班干焦算中中仔爾爾。",
    tailo:
      "I ê sîng-tsik tī in hit pan kan-na sǹg tiong-tiong--á niā-niā.",
  },
  {
    hanji: "阿爸的身材中範中範，看起來袂肥嘛無偌瘦。",
    tailo:
      "A-pah ê sin-tsâi tiong-pān-tiong-pān, khuànn--khí-lâi bē puî mā bô guā sán.",
  },
  {
    hanji: "作穡人共採收了的荷蘭豆分做三級：䆀的、中範的、媠的。",
    tailo:
      "Tsoh-sit-lâng kā tshái-siu liáu ê huê-liân-tāu hun-tsò sann kip, bái--ê, tiong-pān--ê, suí--ê.",
  },
  {
    hanji: "教囡仔行五子直，會當提升𪜶的智力。",
    tailo: "Kà gín-á kiânn gōo-jí-ti̍t, ē-tàng thê-sing in ê tì-li̍k.",
  },
  {
    hanji: "這擔的炒塗豆，逐粒都仁仁仁。",
    tailo: "Tsit tànn ê tshá thôo-tāu, ta̍k lia̍p to jîn-jîn-jîn.",
  },
  {
    hanji: "伊有咧練走標，跤肚肉仁仁仁。",
    tailo: "I ū teh liān tsáu-pio, kha-tóo-bah jîn-jîn-jîn.",
  },
  {
    hanji: "這本冊收的諺語，逐句都仁仁仁。",
    tailo: "Tsit pún tsheh siu ê gān-gí, ta̍k kù to jîn-jîn-jîn.",
  },
  {
    hanji: "粗糠還粗糠，冇粟還冇粟。",
    tailo: "Tshoo-khng huān tshoo-khng, phànn-tshik huān phànn-tshik.",
  },
  {
    hanji: "伊進前都已經認罪矣，這馬煞來反口供。",
    tailo:
      "I tsìn-tsîng to í-king jīn-tsuē--ah, tsit-má suah lâi huán-kháu-king.",
  },
  {
    hanji: "塗面快收成，人面快反形。",
    tailo: "Thôo-bīn khuài siu-sîng, lâng-bīn khuài huán-hîng.",
  },
  {
    hanji: "伊最近咧反形，加真荏懶。",
    tailo: "I tsuè-kīn teh huán-hîng, ke tsin lám-nuā.",
  },
  {
    hanji:
      "這馬的臺灣囡仔袂曉講母語，毋是𪜶反種去矣，是𪜶的爸母毋肯對𪜶講母語。",
    tailo:
      "Tsit-má ê Tâi-uân gín-á bē-hiáu kóng bú-gí, m̄ sī in huán-tsíng--khì--ah, sī in ê pē-bú m̄ khíng tuì in kóng bú-gí.",
  },
  {
    hanji: "拄著困難，若袂曉反變，就踅袂過。",
    tailo: "Tú-tio̍h khùn-lân, nā bē-hiáu píng-pìnn, tō se̍h bē kuè.",
  },
  {
    hanji: "欠錢還數是天公地道的代誌。",
    tailo: "Khiàm tsînn hîng siàu sī thinn-kong-tē-tō ê tāi-tsì.",
  },
  {
    hanji: "初九天公生，咱做伙求天公伯仔保庇咱一家口仔平安順序。",
    tailo:
      "Tshe-káu Thinn-kong-senn, lán tsò-hué kiû Thinn-kong-peh--á pó-pì lán tsi̍t-ke-kháu-á pîng-an sūn-sī.",
  },
  {
    hanji: "少年人愛較拍拚咧，才袂食老毋成樣。",
    tailo:
      "Siàu-liân-lâng ài khah phah-piànn--leh, tsiah bē tsia̍h-lāu m̄-tsiânn-iūnn.",
  },
  {
    hanji: "學工夫，若有人引𤆬，較緊學上手。",
    tailo: "O̍h kang-hu, nā ū lâng ín-tshuā, khah kín o̍h tsiūnn-tshiú.",
  },
  {
    hanji: "伊心狂火熱，趕欲赴銀行三點半。",
    tailo: "I sim-kông-hué-jia̍t, kuánn beh hù gîn-hâng sann tiám puànn.",
  },
  {
    hanji: "伊簽六合彩，痟甲心狂火熱。",
    tailo: "I tshiam lio̍k-ha̍p-tshái, siáu kah sim-kông-hué-jia̍t.",
  },
  {
    hanji: "伊聽甲心花開，隨就笑咍咍。",
    tailo: "I thiann kah sim-hue-khui, suî tō tshiò-hai-hai.",
  },
  {
    hanji: "頭家今仔日心花開，講年底獎金欲發三個月。",
    tailo:
      "Thâu-ke kin-á-ji̍t sim-hue-khui, kóng nî-té tsióng-kim beh huat sann kò gue̍h.",
  },
  {
    hanji: "伊拄失戀，逐工攏心慒慒。",
    tailo: "I tú sit-luân, ta̍k-kang lóng sim tso-tso.",
  },
  {
    hanji: "這个人手爪賤，咱物件愛較斟酌咧。",
    tailo:
      "Tsit ê lâng tshiú-jiáu-tsiān, lán mi̍h-kiānn ài khah tsim-tsiok--leh.",
  },
  {
    hanji: "伊的手股頭有刺字，穿吊䘥仔就看現現。",
    tailo:
      "I ê tshiú-kóo-thâu ū tshiah-jī, tshīng tiàu-kah-á tō khuànn-hiān-hiān.",
  },
  {
    hanji: "伊用手後曲共我㧎撞一下，暗示我伊欲先離開一下。",
    tailo:
      "I īng tshiú-āu-khiau kā guá khê tōng--tsi̍t-ē, àm-sī guá i beh sing lī-khui--tsi̍t-ē.",
  },
  {
    hanji: "阮出外人手面趁食，逐日著做粗工來度三頓。",
    tailo:
      "Guán tshut-guā-lâng tshiú-bīn-thàn-tsia̍h, ta̍k-ji̍t tio̍h tsò tshoo-kang lâi tōo sann tǹg.",
  },
  {
    hanji: "咱是手面趁食的，哪有彼號冗剩錢通出國觀光？",
    tailo:
      "Lán sī tshiú-bīn-thàn-tsia̍h--ê, ná ū hit-lō liōng-siōng tsînn thang tshut-kok kuan-kong?",
  },
  {
    hanji: "看展覽的時，千萬莫手賤去摸展覽品。",
    tailo:
      "Khuànn tián-lám ê sî, tshian-bān mài tshiú-tsiān khì bong tián-lám-phín.",
  },
  {
    hanji: "伊講白賊，予𪜶老爸拍手蹄仔。",
    tailo: "I kóng-pe̍h-tsha̍t, hōo in lāu-pē phah tshiú-tê-á.",
  },
  {
    hanji: "真濟人相信烏鴉咧吼表示歹吉兆。",
    tailo:
      "Tsin tsē lâng siong-sìn oo-a teh háu piáu-sī pháinn-kiat-tiāu.",
  },
  {
    hanji: "透早就聽著遮爾歹吉兆的話，實在有夠衰。",
    tailo:
      "Thàu-tsá tō thiann-tio̍h tsiah-nī pháinn-kiat-tiāu ê uē, si̍t-tsāi ū-kàu sue.",
  },
  {
    hanji: "三更半暝走去墓仔埔，你敢毋驚去看著歹物仔？",
    tailo:
      "Sann-kenn-puànn-mê tsáu-khì bōng-á-poo, lí kám m̄ kiann khì khuànn-tio̍h pháinn-mih-á?",
  },
  {
    hanji: "醫生檢查出伊腹肚內有生歹物仔。",
    tailo: "I-sing kiám-tsa-tshut i pak-tóo-lāi ū senn pháinn-mih-á.",
  },
  {
    hanji: "伊無因為我生做較歹看面就棄嫌我。",
    tailo:
      "I bô in-uī guá senn-tsò khah pháinn-khuànn-bīn tō khì-hiâm--guá.",
  },
  {
    hanji: "人講「輸人毋輸陣，輸陣歹看面」，咱著愛較拍拚咧。",
    tailo:
      "Lâng kóng “su lâng m̄ su tīn, su tīn pháinn-khuànn-bīn”, lán tio̍h-ài khah phah-piànn--leh.",
  },
  {
    hanji: "人情留一線，日後才袂歹面相看。",
    tailo:
      "Jîn-tsîng lâu tsi̍t suànn, ji̍t-āu tsiah bē pháinn-bīn-sio-khuànn.",
  },
  {
    hanji: "𪜶兩个門扇枋鬥袂峇，見擺見面攏歹面相看。",
    tailo:
      "In nn̄g ê mn̂g-sìnn-pang tàu bē bā, kiàn-pái kìnn-bīn lóng pháinn-bīn-sio-khuànn.",
  },
  {
    hanji: "作穡人生活無好過，豐收的時農產品歹價，歹年冬閣收無通食。",
    tailo:
      "Tsoh-sit-lâng sing-ua̍h bô hó-kuè, hong-siu ê sî lông-sán-phín pháinn-kè, pháinn-nî-tang koh siu bô thang tsia̍h.",
  },
  {
    hanji: "這个囡仔歹喙斗，真揀食，飼甲強欲變毋成囡仔。",
    tailo:
      "Tsit ê gín-á pháinn-tshuì-táu, tsin kíng-tsia̍h, tshī kah kiōng-beh piàn m̄-tsiânn-gín-á.",
  },
  {
    hanji: "你這个毋成囡仔，食飽取跋筊，枉費恁爸母共你晟養甲遮大漢。",
    tailo:
      "Lí tsit ê m̄-tsiânn-gín-á, tsia̍h-pá tshú pua̍h-kiáu, óng-huì lín pē-bú kā lí tshiânn-ióng kah tsiah tuā-hàn.",
  },
  {
    hanji: "公證人看水尺來計算貨船的載貨量。",
    tailo:
      "Kong-tsìng-jîn khuànn tsuí-tshioh lâi kè-sǹg huè-tsûn ê tsài-huè-liōng.",
  },
  {
    hanji: "這馬咱攏無咧納水租矣，攏嘛政府替咱納的。",
    tailo:
      "Tsit-má lán lóng bô teh la̍p tsuí-tsoo--ah, lóng mā tsìng-hú thè lán la̍p--ê.",
  },
  {
    hanji: "咱兄弟姊妹就像仝一條水脈流出來的啦。",
    tailo:
      "Lán hiann-tī-tsí-muē tō tshiūnn kāng tsi̍t tiâu tsuí-me̍h lâu--tshut-lâi--ê--lah.",
  },
  {
    hanji: "水牛上愛佇水窟仔滒浴。",
    tailo: "Tsuí-gû siōng ài tī tsuí-khut-á kō-i̍k.",
  },
  {
    hanji: "車囥佇外口，落雨了後煞卡一沿水鉎。",
    tailo:
      "Tshia khǹg tī guā-kháu, lo̍h-hōo liáu-āu suah kha̍h tsi̍t iân tsuí-sian.",
  },
  {
    hanji: "等咧咱佇火車頭的前驛相等，做伙坐後一幫火車上北。",
    tailo:
      "Tán--leh lán tī hué-tshia-thâu ê tsîng-ia̍h sio-tán, tsò-hué tsē āu tsi̍t pang hué-tshia tsiūnn-pak.",
  },
  {
    hanji: "熱天暗時佇山頂看火金星閃閃爍爍的光景是一款享受。",
    tailo:
      "Jua̍h-thinn àm-sî tī suann-tíng khuànn hué-kim-tshenn siám-siám-sih-sih ê kong-kíng sī tsi̍t khuán hiáng-siū.",
  },
  {
    hanji: "兩條電線相拍電，出火金星。",
    tailo: "Nn̄g tiâu tiān-suànn sio-phah-tiān, tshut hué-kim-tshenn.",
  },
  {
    hanji: "我無細膩去跋一倒，目睭出火金星，差一屑仔就昏倒。",
    tailo:
      "Guá bô-sè-jī khì pua̍h tsi̍t tó, ba̍k-tsiu tshut hué-kim-tshenn, tsha tsi̍t-sut-á tō hūn--tó.",
  },
  {
    hanji: "這个人是火烌性，較會得失人。",
    tailo: "Tsit ê lâng sī hué-hu-sìng, khah ē tik-sit--lâng.",
  },
  {
    hanji: "有貫牛貫的牛才會乖乖仔照主人的意思作穡。",
    tailo:
      "Ū kǹg gû-kǹg ê gû tsiah ē kuai-kuai-á tsiàu tsú-lâng ê ì-sù tsoh-sit.",
  },
  {
    hanji: "我唱歌若牛聲馬喉，毋敢唱予人聽。",
    tailo:
      "Guá tshiùnn-kua ná gû-siann-bé-âu, m̄ kánn tshiùnn hōo lâng thiann.",
  },
  {
    hanji: "你佇遐牛聲馬喉，有夠噪人耳，較細聲咧。",
    tailo:
      "Lí tī hia gû-siann-bé-âu, ū-kàu tshò-lâng-hīnn, khah sè-siann--leh.",
  },
  {
    hanji: "散會的時，阮有攢三、四百塊王梨酥，佇大門口送予人客。",
    tailo:
      "Suànn-huē ê sî, guán ū tshuân sann, sì-pah tè ông-lâi-soo, tī tuā-mn̂g-kháu sàng hōo lâng-kheh.",
  },
  {
    hanji: "咱店的生理，攏是主顧客鬥捀場，才有穩定的收入。",
    tailo:
      "Lán tiàm ê sing-lí, lóng sī tsú-kòo-kheh tàu phâng-tiûnn, tsiah ū ún-tīng ê siu-ji̍p.",
  },
  {
    hanji: "兄弟若仝心，烏塗變成金。",
    tailo: "Hiann-tī nā kāng-sim, oo-thôo piàn-sîng kim.",
  },
  {
    hanji: "咱兩个人差無幾歲，算起來是仝沿的。",
    tailo: "Lán nn̄g ê lâng tsha bô kuí huè, sǹg--khí-lâi sī kāng-iân--ê.",
  },
  {
    hanji:
      "雖然我佮恁阿爸平歲，毋過論輩無論歲，咱算仝沿的，叫我阿兄就好。",
    tailo:
      "Sui-jiân guá kah lín a-pah pênn huè, m̄-koh lūn puè bô lūn huè, lán sǹg kāng-iân--ê, kiò guá a-hiann tō hó.",
  },
  {
    hanji: "欲開學矣，咱等一下來去冊局買新的參考冊。",
    tailo:
      "Beh khai-ha̍k--ah, lán tán--tsi̍t-ē lâi-khì tsheh-kio̍k bé sin ê tsham-khó-tsheh.",
  },
  {
    hanji: "若講著鵝肉冬粉料理，我就會流喙瀾。",
    tailo:
      "Nā kóng-tio̍h gô-bah tang-hún liāu-lí, guá tō ē lâu tshuì-nuā.",
  },
  {
    hanji: "這口灶的囝孫仔，逐个都真出擢。",
    tailo: "Tsit kháu-tsàu ê kiánn-sun-á, ta̍k ê to tsin tshut-tioh.",
  },
  {
    hanji: "叫甲這號半丁袂做工課。",
    tailo: "Kiò kah tsit-lō puànn-ting bē tsò khang-khuè.",
  },
  {
    hanji: "秦假仙是電視布袋戲內底出名的半奸忠。",
    tailo:
      "Tsîn Ké-sian sī tiān-sī pòo-tē-hì lāi-té tshut-miâ ê puànn-kan-tiong.",
  },
  {
    hanji: "食甲半老老才開始學電腦。",
    tailo: "Tsia̍h kah puànn-ló-lāu tsiah khai-sí o̍h tiān-náu.",
  },
  {
    hanji: "半遂的會行，臭耳的會聽。",
    tailo: "Puàn-suī--ê ē kiânn, tshàu-hīnn--ê ē thiann.",
  },
  {
    hanji: "曷無咧半遂，著閣人扛！",
    tailo: "A̍h bô teh puàn-suī, tio̍h koh lâng kng!",
  },
  {
    hanji: "無做無代誌，若做毋好去倒害。",
    tailo: "Bô tsò bô tāi-tsì, nā tsò m̄ hó khì-tò hāi.",
  },
  {
    hanji: "伊做代誌足工夫，真可取。",
    tailo: "I tsò tāi-tsì tsiok kang-hu, tsin khó-tshú.",
  },
  {
    hanji: "𪜶兩个若司公仔象桮咧。",
    tailo: "In nn̄g ê ná sai-kong-á-siūnn-pue--leh.",
  },
  {
    hanji: "去外埠頭趁食，著較保重咧。",
    tailo: "Khì guā-poo-thâu thàn-tsia̍h, tio̍h khah pó-tiōng--leh.",
  },
  {
    hanji: "選舉的時，逐个候選人都講伊上好央教的。",
    tailo:
      "Suán-kí ê sî, ta̍k ê hāu-suán-jîn to kóng i siōng hó iang-kah--ê.",
  },
  {
    hanji: "布幼仔抾倚來，會使車做桌布。",
    tailo: "Pòo-iù-á khioh uá--lâi, ē-sái tshia-tsò toh-pòo.",
  },
  {
    hanji: "山頂一蕊花，毋值平洋一枝草。",
    tailo: "Suann-tíng tsi̍t luí hue, m̄-ta̍t pênn-iûnn tsi̍t ki tsháu.",
  },
  {
    hanji: "伊賣的貨，正範假範相濫，你毋通予伊唬去。",
    tailo:
      "I bē ê huè, tsiànn-pān ké-pān sio-lām, lí m̄-thang hōo i hóo--khì.",
  },
  {
    hanji: "伊生本就無愛佮人嘻嘻嘩嘩。",
    tailo: "I senn-pún tō bô ài kah lâng hi-hi-huā-huā.",
  },
  {
    hanji: "伊走甲傷生真，煞跋倒。",
    tailo: "I tsáu kah siunn tshenn-tsin, suah pua̍h-tó.",
  },
  {
    hanji: "你按呢生頭凊面大聲嚷是咧創啥物？",
    tailo:
      "Lí án-ne tshenn-thâu-tshìn-bīn tuā-siann jiáng sī teh tshòng siánn-mih?",
  },
  {
    hanji: "伊都咧受氣矣，你閣刁工剾洗伊，有夠白目！",
    tailo:
      "I to teh siū-khì--ah, lí koh thiau-kang khau-sé--i, ū-kàu pe̍h-ba̍k!",
  },
  {
    hanji: "白菜滷是阮大家的手路菜，阮兜逐家攏真愛食。",
    tailo:
      "Pe̍h-tshài-lóo sī guán ta-ke ê tshiú-lōo-tshài, guán tau ta̍k-ke lóng tsin ài tsia̍h.",
  },
  {
    hanji: "毋通看人好額就目空赤。",
    tailo: "M̄-thang khuànn lâng hó-gia̍h tō ba̍k-khang-tshiah.",
  },
  {
    hanji: "𪜶老母佮𪜶某袂合，伊做石磨仔心，毋知欲按怎才好。",
    tailo:
      "In lāu-bú kah in bóo bē ha̍h, i tsò tsio̍h-bō-á-sim, m̄ tsai beh án-tsuánn tsiah hó.",
  },
  {
    hanji: "伊拄仔交落身，著愛好好仔侹身體。",
    tailo: "I tú-á ka-la̍uh-sin, tio̍h-ài hó-hó-á thiānn sin-thé.",
  },
  {
    hanji: "伊真交繃，正經叫伊主意伊閣毋敢。",
    tailo: "I tsin kau-penn, tsìng-king kiò i tsú-ì i koh m̄ kánn.",
  },
  {
    hanji: "頂日仔阮捌得失伊，伊毋才定定來咧交繃。",
    tailo:
      "Tíng-ji̍t-á guán bat tik-sit--i, i m̄-tsiah tiānn-tiānn lâi teh kau-penn.",
  },
  {
    hanji: "死都死囉！毋通閣來交纏。",
    tailo: "Sí to sí--looh! M̄-thang koh lâi kau-tînn.",
  },
  {
    hanji: "查某人做月內的時，若無細膩著著月內風，是會交纏一世人喔！",
    tailo:
      "Tsa-bóo-lâng tsò-gue̍h-lāi ê sî, nā bô-sè-jī tio̍h-tio̍h gue̍h-lāi-hong, sī ē kau-tînn tsi̍t-sì-lâng--ooh!",
  },
  {
    hanji: "伊是𪜶彼班的囡仔頭王。",
    tailo: "I sī in hit pan ê gín-á-thâu-ông.",
  },
  {
    hanji: "未嫁娶以前，攏是在室的。",
    tailo: "Buē kè-tshuā í-tsîng, lóng sī tsāi-sik--ê.",
  },
  {
    hanji: "月暗暝行路，有人陪伴，就較在膽。",
    tailo: "Gue̍h-àm-mê kiânn-lōo, ū lâng puê-phuānn, tō khah tsāi-tánn.",
  },
  {
    hanji: "菝仔在欉的，誠脆當甜。",
    tailo: "Pua̍t-á tsāi-tsâng--ê, tsiânn tshè tng tinn.",
  },
  {
    hanji: "今仔日誠好日，幾若口灶咧嫁娶。",
    tailo: "Kin-á-ji̍t tsiânn hó-ji̍t, kuí-nā kháu-tsàu teh kè-tshuā.",
  },
  {
    hanji: "這是好代，趕緊講予眾人知。",
    tailo: "Tse sī hó-tāi, kuánn-kín kóng hōo tsìng-lâng tsai.",
  },
  {
    hanji: "頭家，豬肉較好份的切一塊予我。",
    tailo: "Thâu-ke, ti-bah khah hó-hūn--ê tshiat tsi̍t tè hōo--guá.",
  },
  {
    hanji: "伊上班時間走出去摸飛，好死毋死去予頭家㨑著。",
    tailo:
      "I siōng-pan sî-kan tsáu tshut-khì moo-hui, hó-sí-m̄-sí khì hōo thâu-ke tsang--tio̍h.",
  },
  {
    hanji: "這塑膠做的好看頭爾爾，用無偌久就害去矣。",
    tailo:
      "Tse sok-ka tsò--ê hó-khuànn-thâu niā-niā, īng bô-guā-kú tō hāi--khì--ah.",
  },
  {
    hanji: "親情條直好唯是，聘金濟少由在伊。",
    tailo:
      "Tshin-tsiânn tiâu-ti̍t hó-bî-sī, phìng-kim tsē-tsió iû-tsāi--i.",
  },
  {
    hanji: "𪜶家族的查埔囡仔有照字勻號名，查某囡仔無。",
    tailo:
      "In ka-tso̍k ê tsa-poo gín-á ū tsiàu jī-ûn hō-miâ, tsa-bóo gín-á bô.",
  },
  {
    hanji: "閣來是雞年，你犯太歲，過年著愛去廟裡安太歲。",
    tailo:
      "Koh lâi sī ke-nî, lí huān Thài-suè, kuè-nî tio̍h-ài khì biō--lí an Thài-suè.",
  },
  {
    hanji: "我有代誌愛先走，賰的工課，麻煩你鬥收煞。",
    tailo:
      "Guá ū tāi-tsì ài sing tsáu, tshun ê khang-khuè, mâ-huân lí tàu siu-suah.",
  },
  {
    hanji: "伊掠做是囡仔去沖犯著，想欲請司公來收煞。",
    tailo:
      "I lia̍h-tsò sī gín-á khì tshiong-huān--tio̍h, siūnn-beh tshiánn sai-kong lâi siu-suah.",
  },
  {
    hanji:
      "伊少年的時傷過匪類，厝內一寡財產予伊敗了了，致使這馬有路無厝。",
    tailo:
      "I siàu-liân ê sî siunn kuè huí-luī, tshù-lāi tsi̍t-kuá tsâi-sán hōo i pāi-liáu-liáu, tì-sú tsit-má ū-lōo-bô-tshù.",
  },
  {
    hanji: "相分，食有賰；相搶，食無份。",
    tailo: "Sio-pun, tsia̍h ū tshun; sio-tshiúnn, tsia̍h bô hūn.",
  },
  {
    hanji: "伊足久無頭路矣，規个人看著死殗殗。",
    tailo:
      "I tsiok kú bô thâu-lōo--ah, kui-ê lâng khuànn tio̍h sí-giān-giān.",
  },
  {
    hanji: "伊毋聽爸母苦勸，走去佮人較車，煞摔一下死殗殗。",
    tailo:
      "I m̄ thiann pē-bú khóo-khǹg, tsáu-khì kah lâng kà-tshia, suah siak tsi̍t-ē sí-giān-giān.",
  },
  {
    hanji: "你炒菜鹽下傷濟，會變甲誠死鹹。",
    tailo: "Lí tshá tshài iâm hē siunn tsē, ē piàn kah tsiânn sí-kiâm.",
  },
  {
    hanji: "這起命案，警方真無簡單才揣著被害者的死體。",
    tailo:
      "Tsit khí miā-àn, kíng-hong tsin bô kán-tan tsiah tshuē-tio̍h pī-hāi-tsiá ê sí-thé.",
  },
  {
    hanji: "你遐𠢕，若參加比賽，百面贏的。",
    tailo: "Lí hiah gâu, nā tsham-ka pí-sài, pah-bīn iânn--ê.",
  },
  {
    hanji: "以早的囡仔攏會曉做竹田嬰耍。",
    tailo: "Í-tsá ê gín-á lóng ē-hiáu tsò tik-tshân-enn sńg.",
  },
  {
    hanji: "阿公定定佇阮厝後的竹模跤歇涼。",
    tailo: "A-kong tiānn-tiānn tī guán tshù-āu ê tik-bôo-kha hioh-liâng.",
  },
  {
    hanji: "坐竹雞仔車雖然較俗，毋過較無保險。",
    tailo:
      "Tsē tik-ke-á-tshia sui-jiân khah sio̍k, m̄-koh khah bô pó-hiám.",
  },
  {
    hanji: "地動了後，規家死甲賰伊一个老孤𣮈。",
    tailo: "Tē-tāng liáu-āu, kui-ke sí kah tshun i tsi̍t ê lāu-koo-khu̍t.",
  },
  {
    hanji: "人若有歲閣孤獨，人會叫伊老孤𣮈。",
    tailo: "Lâng nā ū-huè koh koo-ta̍k, lâng ē kiò i lāu-koo-khu̍t.",
  },
  {
    hanji: "賰一寡肉幼仔，你毋就共伊窮窮咧，閣留咧創啥物！",
    tailo:
      "Tshun tsi̍t-kuá bah-iù-á, lí m̄-tō kā i khîng-khîng--leh, koh lâu leh tshòng siánn-mih!",
  },
  {
    hanji: "塑膠射出的成品脫模了後，邊仔一寡肉幼仔愛閣抾抾咧！",
    tailo:
      "Sok-ka siā-tshut ê sîng-phín thuat-bôo liáu-āu, pinn--á tsi̍t-kuá bah-iù-á ài koh khioh-khioh--leh!",
  },
  {
    hanji: "肉糋著糋甲拄仔好才好食。",
    tailo: "Bah-tsìnn tio̍h tsìnn kah tú-á-hó tsiah hó-tsia̍h.",
  },
  {
    hanji: "這台車是自家用的，無營業牌。",
    tailo: "Tsit tâi tshia sī tsū-ka-iōng--ê, bô îng-gia̍p-pâi.",
  },
  {
    hanji: "婦人人難產的時，有時陣會血崩山。",
    tailo: "Hū-jîn-lâng lân-sán ê sî, ū-sî-tsūn ē hueh-pang-suann.",
  },
  {
    hanji: "伊欲出門去做工，煞臨時接著電話，行袂開跤。",
    tailo:
      "I beh tshut-mn̂g khì tsò-kang, suah lîm-sî tsiap-tio̍h tiān-uē, kiânn-bē-khui-kha.",
  },
  {
    hanji: "行船人佇海上作業，風險真大。",
    tailo: "Kiânn-tsûn-lâng tī hái-siōng tsok-gia̍p, hong-hiám tsin tuā.",
  },
  {
    hanji: "免佮伊講，佮伊講，講袂伸捙。",
    tailo: "Bián kah i kóng,  kah i kóng, kóng bē tshun-tshia.",
  },
  {
    hanji: "幼路工課低路師做無路來。",
    tailo: "Iù-lōo khang-khuè kē-lōo-sai tsò bô-lōo-lâi.",
  },
  {
    hanji: "佗落是我好徛起的所在？",
    tailo: "Tó-lo̍h sī guá hó khiā-khí ê sóo-tsāi?",
  },
  {
    hanji: "卵、牛奶、肉類、豆仔類是咱人的食食當中重要的卵白質來源。",
    tailo:
      "Nn̄g, gû-ling, bah-luī, tāu-á-luī sī lán-lâng ê tsia̍h-si̍t tang-tiong tiōng-iàu ê nn̄g-pe̍h-tsit lâi-guân.",
  },
  {
    hanji: "物價一直起，囤貨的生理人趁甲笑咍咍。",
    tailo:
      "Bu̍t-kè it-ti̍t khí, tún-huè ê sing-lí-lâng thàn kah tshiò-hai-hai.",
  },
  {
    hanji: "伊的人袂囥話，你莫啥物代誌攏講予伊聽。",
    tailo:
      "I ê lâng bē khǹg-uē, lí mài siánn-mih tāi-tsì lóng kóng hōo i thiann.",
  },
  {
    hanji: "欲完成這條高速鐵路，著閣坉錢。",
    tailo: "Beh uân-sîng tsit tiâu ko-sok thih-lōo, tio̍h koh thūn-tsînn.",
  },
  {
    hanji: "是你得失人，愛去共人坐毋著。",
    tailo: "Sī lí tik-sit--lâng, ài khì kā lâng tshē-m̄-tio̍h.",
  },
  {
    hanji: "洗藕粉，著等藕粉坐底。",
    tailo: "Sé ngāu-hún, tio̍h tán ngāu-hún tshē-té.",
  },
  {
    hanji: "欲去食桌，著愛小妝娗一下，才袂失人的禮。",
    tailo:
      "Beh khì tsia̍h-toh, tio̍h-ài sió tsng-thānn--tsi̍t-ē, tsiah bē sit lâng ê lé.",
  },
  {
    hanji: "恁爸母生甲你這个孝尾囝，有夠了然。",
    tailo: "Lín pē-bú senn kah lí tsit ê hà-bué-kiánn, ū-kàu liáu-jiân.",
  },
  {
    hanji: "頭先都講好勢矣，尾來煞來反僥。",
    tailo: "Thâu-sing to kóng hó-sè--ah, bué--lâi suah lâi huán-hiau.",
  },
  {
    hanji: "尿桶有足濟尿滓，毋就摖摖咧。",
    tailo: "Jiō-tháng ū tsiok tsē jiō-tái, m̄-tō tshè-tshè--leh.",
  },
  {
    hanji: "咱若做一擺忘恩背義的代誌，後擺就無人敢佮咱做朋友矣。",
    tailo:
      "Lán nā tsò tsi̍t pái bōng-un-puē-gī ê tāi-tsì, āu-pái tō bô lâng kánn kah lán tsò pîng-iú--ah.",
  },
  {
    hanji: "伊共藥仔啉落去，煞袂牢腹，又閣吐出來。",
    tailo:
      "I kā io̍h-á lim--lo̍h-khì, suah bē tiâu-pak, iū-koh thòo--tshut-lâi.",
  },
  {
    hanji: "放學轉來，伊就閣餾，遮爾認真，一定會讀甲牢腹。",
    tailo:
      "Pàng-o̍h tńg--lâi, i tō koh liū, tsiah-nī jīn-tsin, it-tīng ē tha̍k kah tiâu-pak.",
  },
  {
    hanji: "阮阿母最近攏咧共人育𤆬囡仔，加減趁寡私奇。",
    tailo:
      "Guán a-bú tsuè-kīn lóng teh kā lâng io-tshuā gín-á, ke-kiám thàn kuá sai-khia.",
  },
  {
    hanji: "這帖漢藥食落去，真緊就見效。",
    tailo: "Tsit thiap hàn-io̍h tsia̍h--lo̍h-khì, tsin kín tō kiàn-hāu.",
  },
  {
    hanji: "日頭赤焱焱，隨人顧性命。",
    tailo: "Ji̍t-thâu tshiah-iānn-iānn, suî-lâng kòo sènn-miā.",
  },
  {
    hanji: "滿街路攏是人，真鬧熱。",
    tailo: "Muá ke-lōo lóng sī lâng, tsin lāu-jia̍t.",
  },
  {
    hanji: "雄雄一陣西北雨，眾人一時煞走無路。",
    tailo:
      "Hiông-hiông tsi̍t tsūn sai-pak-hōo, tsìng-lâng tsi̍t-sî suah tsáu-bô-lōo.",
  },
  {
    hanji: "食著無清氣的物件煞走腹。",
    tailo: "Tsia̍h-tio̍h bô tshing-khì ê mi̍h-kiānn suah tsáu-pak.",
  },
  {
    hanji: "這遍一百公尺走標，阮彼班的阿明得著第一名。",
    tailo:
      "Tsit piàn tsi̍t-pah kong-tshioh tsáu-pio, guán hit pan ê A-bîng tit-tio̍h tē-it miâ.",
  },
  {
    hanji: "阿公逐工透早起來，攏會佇稻埕走標。",
    tailo:
      "A-kong ta̍k-kang thàu-tsá khí--lâi, lóng ē tī tiū-tiânn tsáu-pio.",
  },
  {
    hanji: "伊不時走學，莫怪功課無好。",
    tailo: "I put-sî tsáu-o̍h, bo̍k-kuài kong-khò bô hó.",
  },
  {
    hanji: "機器有佗位仔走縒，才袂振動。",
    tailo: "Ki-khì ū tó-uī-á tsáu-tsua̍h, tsiah bē tín-tāng.",
  },
  {
    hanji: "身體有走縒，才袂食飯。",
    tailo: "Sin-thé ū tsáu-tsua̍h, tsiah bē tsia̍h-pn̄g.",
  },
  {
    hanji: "千斤重擔有人擔，辛苦病疼無人擔。",
    tailo:
      "Tshian kin tāng-tànn ū lâng tann, sin-khóo-pēnn-thiànn bô lâng tann.",
  },
  {
    hanji: "車斗有張升降尾門，較好起落貨。",
    tailo: "Tshia-táu ū tiunn sing-kàng-bué-mn̂g, khah hó khí-lo̍h-huè.",
  },
  {
    hanji: "你共車斗開開通好來囥行李。",
    tailo: "Lí kā tshia-táu khui--khui thang-hó lâi khǹg hîng-lí.",
  },
  {
    hanji: "你共雨幔囥蹛車斗，落雨天就會使幔咧騎車。",
    tailo:
      "Lí kā hōo-mua khǹg tuà tshia-táu, lo̍h-hōo-thinn tō ē-sái mua leh khiâ-tshia.",
  },
  {
    hanji: "上下班時間，oo-tóo-bái佮自動車蓋濟，欲行過車路著特別細膩。",
    tailo:
      "Siōng-hā-pan sî-kan, oo-tóo-bái kah tsū-tōng-tshia kài tsē, beh kiânn-kuè tshia-lōo tio̍h ti̍k-pia̍t sè-jī.",
  },
  {
    hanji: "世界杯跤球比賽，戰況變化真大，著愛到尾才知輸贏。",
    tailo:
      "Sè-kài-pue kha-kiû pí-sài, tsiàn-hóng piàn-huà tsin tuā, tio̍h-ài kàu-bué tsiah tsai su-iânn.",
  },
  {
    hanji: "伊為著欲簽六合彩，遮問神，遐拜佛，到尾嘛是輸了了。",
    tailo:
      "I uī-tio̍h beh tshiam lio̍k-ha̍p-tshái, tsia mn̄g sîn, hia pài-pu̍t, kàu-bué mā sī su-liáu-liáu.",
  },
  {
    hanji: "翁仔某佇大路頭冤家，真正是卸世卸眾。",
    tailo:
      "Ang-á-bóo tī tuā-lōo-thâu uan-ke, tsin-tsiànn sī sià-sì-sià-tsìng.",
  },
  {
    hanji: "呼請彼爿溪的阿伯來府城。",
    tailo: "Hoo-tshiánn hit pîng khe ê a-peh lâi Hú-siânn.",
  },
  {
    hanji: "這項代誌誠要緊，你緊呼請南北二路眾兄弟過來。",
    tailo:
      "Tsit hāng tāi-tsì tsiânn iàu-kín, lí kín hoo-tshiánn lâm-pak-jī-lōo tsiòng hiann-tī kuè--lâi.",
  },
  {
    hanji: "道士作法，呼請天兵天將鬥相共。",
    tailo:
      "Tō-sū tsok-huat, hoo-tshiánn thian-ping thian-tsiòng tàu-sann-kāng.",
  },
  {
    hanji: "公媽做忌，咱著點香呼請𪜶來享用酒菜。",
    tailo:
      "Kong-má tsò-kī, lán tio̍h tiám-hiunn hoo-tshiánn in lâi hiáng-iōng tsiú-tshài.",
  },
  {
    hanji: "我緊張甲心肝頭咇噗跳。",
    tailo: "Guá kín-tiunn kah sim-kuann-thâu phi̍h-pho̍k-thiàu.",
  },
  {
    hanji: "逐家愛和齊，才會成功。",
    tailo: "Ta̍k-ke ài hô-tsê,  tsiah ē sîng-kong.",
  },
  {
    hanji: "伊真孤佬，無愛佮人交陪。",
    tailo: "I tsin koo-láu, bô ài kah lâng kau-puê.",
  },
  {
    hanji: "你嘛毋通遐孤佬，諒情一下也無通。",
    tailo: "Lí mā m̄-thang hiah koo-láu, liōng-tsîng--tsi̍t-ē iā bô thang.",
  },
  {
    hanji: "我干焦孤跤手，無人鬥相共，所以，代誌才會做遐慢。",
    tailo:
      "Guá kan-na koo-kha-tshiú, bô lâng tàu-sann-kāng, sóo-í, tāi-tsì tsiah ē tsò hiah bān.",
  },
  {
    hanji: "你莫閣宕矣，咱坐火車欲袂赴矣。",
    tailo: "Lí mài koh thōng--ah, lán tsē hué-tshia beh bē-hù--ah.",
  },
  {
    hanji: "這馬誠利便，佇網路頂就會用得定貨囉！",
    tailo:
      "Tsit-má tsiânn lī-piān, tī bāng-lōo-tíng tō ē-īng-tit tiānn-huè--looh!",
  },
  {
    hanji: "讀國中彼當陣伊就帶痚呴。",
    tailo: "Tha̍k kok-tiong hit-tang-tsūn i tō tài he-ku.",
  },
  {
    hanji: "有一寡無法度來病院看病的人，就需要醫生往診。",
    tailo:
      "Ū tsi̍t-kuá bô-huat-tōo lâi pēnn-īnn khuànn-pēnn ê lâng, tō su-iàu i-sing óng-tsín.",
  },
  {
    hanji: "選舉的時，定定有候選人出漚步，欲共對手抹烏。",
    tailo:
      "Suán-kí ê sî, tiānn-tiānn ū hāu-suán-jîn tshut àu-pōo, beh kā tuì-tshiú buah-oo.",
  },
  {
    hanji: "伊囡仔時較大箍，國中了後抽懸起來，體格好看甲！",
    tailo:
      "I gín-á-sî khah tuā-khoo, kok-tiong liáu-āu thiu-kuân--khí-lâi, thé-keh hó-khuànn kah!",
  },
  {
    hanji: "這桌菜閣有賰，予你抾肉幼仔，包包轉去。",
    tailo:
      "Tsit toh tshài koh ū tshun, hōo lí khioh-bah-iù-á, pau-pau--tńg-khì.",
  },
  {
    hanji: "趁人冤家相拍，伊也倚去抾肉幼仔鬥拍。",
    tailo:
      "Thàn lâng uan-ke sio-phah, i iā uá-khì khioh-bah-iù-á tàu phah.",
  },
  {
    hanji: "家己毋認真拍拚，干焦想欲抾肉幼仔。",
    tailo:
      "Ka-kī m̄ jīn-tsin phah-piànn, kan-na siūnn-beh khioh-bah-iù-á.",
  },
  {
    hanji: "你頭拄仔敲電話來的時，我拄咧洗身軀。",
    tailo: "Lí thâu-tú-á khà tiān-uē lâi ê sî, guá tú-teh sé-sin-khu.",
  },
  {
    hanji: "咱做生理欲簽合約，條件攏愛拆白講才會清楚。",
    tailo:
      "Lán tsò-sing-lí beh tshiam ha̍p-iok, tiâu-kiānn lóng ài thiah-pe̍h-kóng tsiah ē tshing-tshó.",
  },
  {
    hanji: "拍火兄弟主要的工課就是便若佗位火燒厝就愛去拍火。",
    tailo:
      "Phah-hué-hiann-tī tsú-iàu ê khang-khuè tō sī piān-nā tó-uī hué-sio-tshù tō ài khì phah-hué.",
  },
  {
    hanji: "這馬代課足僫揣會著人，拜託你來拍火一下，暫代一禮拜的課。",
    tailo:
      "Tsit-má tāi-khò tsiok oh tshuē ē tio̍h lâng, pài-thok lí lâi phah-hué--tsi̍t-ē, tsiām tāi tsi̍t lé-pài ê khò.",
  },
  {
    hanji: "這陣的車攏自排的較濟，較毋免定定拍速矣。",
    tailo:
      "Tsit-tsūn ê tshia lóng tsū-pâi--ê khah tsē, khah m̄-bián tiānn-tiānn phah-sok--ah.",
  },
  {
    hanji: "這馬一寡文藝青年真愛戴復古的拍鳥帽。",
    tailo:
      "Tsit-má tsi̍t-kuá bûn-gē tshing-liân tsin ài tì ho̍k-kóo ê phah-tsiáu-bō.",
  },
  {
    hanji: "我是放目，毋是無看見。",
    tailo: "Guá sī pàng-ba̍k, m̄ sī bô khuànn--kìnn.",
  },
  {
    hanji: "人總是會做毋著去，你就大事化小，小事化無，放目諒情伊。",
    tailo:
      "Lâng tsóng--sī ē tsò m̄-tio̍h--khì, lí tō tuā-sū huà sió, sió-sū huà bô, pàng-ba̍k liōng-tsîng--i.",
  },
  {
    hanji:
      "選舉的時，候選人定會予對頭陣營的人放紙虎，致使影響著伊的選情。",
    tailo:
      "Suán-kí ê sî, hāu-suán-jîn tiānn ē hōo tuì-thâu tīn-iânn ê lâng pàng-tsuá-hóo, tì-sú íng-hióng-tio̍h i ê suán-tsîng.",
  },
  {
    hanji: "廟埕咧做戲，放送頭的聲音傳甲足遠。",
    tailo:
      "Biō-tiânn teh tsò-hì, hòng-sàng-thâu ê siann-im thuân kah tsiok hn̄g.",
  },
  {
    hanji:
      "這種代誌，你毋通予彼个放送頭知影，若無，規庄仔內的人就隨攏知矣！",
    tailo:
      "Tsit tsióng tāi-tsì, lí m̄-thang hōo hit ê hòng-sàng-thâu tsai-iánn, nā-bô, kui tsng-á-lāi ê  lâng tō suî lóng tsai--ah!",
  },
  {
    hanji: "彼个嫌疑犯想欲逃走，警察先對天頂放銃警告。",
    tailo:
      "Hit ê hiâm-gî-huān siūnn-beh tô-tsáu, kíng-tshat sing tuì thinn-tíng pàng-tshìng kíng-kò.",
  },
  {
    hanji: "因為無啥會曉拍麻雀，我定定放銃去予人到。",
    tailo:
      "In-uī bô siánn ē-hiáu phah-muâ-tshiok, guá tiānn-tiānn pàng-tshìng khì hōo lâng kàu.",
  },
  {
    hanji: "臺南地區欲考試的囡仔會買狀元粿來食，希望會當考牢理想的學校。",
    tailo:
      "Tâi-lâm tē-khu beh khó-tshì ê gín-á ē bé tsiōng-guân-kué lâi tsia̍h, hi-bāng ē-tàng khó-tiâu lí-sióng ê ha̍k-hāu.",
  },
  {
    hanji: "狗鯊上適合的料理方式就是做魚漿佮魚丸。",
    tailo:
      "Káu-sua siōng sik-ha̍p ê liāu-lí hong-sik tō sī tsò hî-tsiunn kah hî-uân.",
  },
  {
    hanji: "阿三上愛佮婦人人狗鯊，實在有夠顧人怨的。",
    tailo:
      "A-sam siōng ài kah hū-jîn-lâng káu-sua, si̍t-tsāi ū-kàu kòo-lâng-uàn--ê.",
  },
  {
    hanji: "看伊愣愣佇遐攏直目去，踅神踅神，心事重重的款。",
    tailo:
      "Khuànn i gāng-gāng tī hia lóng ti̍t-ba̍k--khì, se̍h-sîn-se̍h-sîn, sim-sū tiông-tiông ê khuán.",
  },
  {
    hanji: "醫生看伊攏直目去矣，嘛無放棄，繼續共伊急救。",
    tailo:
      "I-sing khuànn i lóng ti̍t-ba̍k--khì--ah, mā bô hòng-khì, kè-sio̍k kā i kip-kiù.",
  },
  {
    hanji: "伊正經頭路無愛做，干焦空思夢想有一日會大趁錢。",
    tailo:
      "I tsìng-king thâu-lōo bô ài tsò, kan-na khong-su-bōng-sióng ū tsi̍t ji̍t ē tuā-thàn-tsînn.",
  },
  {
    hanji: "伊有一間空殼厝欲稅人。",
    tailo: "I ū tsi̍t king khang-khak-tshù beh suè--lâng.",
  },
  {
    hanji: "空殼厝拄才起好，猶未成格，袂蹛得。",
    tailo:
      "Khang-khak-tshù tú-tsiah khí hó, iáu-buē tshiânn-kik, bē-tuà--tit.",
  },
  {
    hanji: "阮兜捌飼過花眉，歡喜的時就一直叫，若咧唱歌咧。",
    tailo:
      "Guán tau bat tshī-kuè hue-bî, huann-hí ê sî tō it-ti̍t kiò, ná teh tshiùnn-kua--leh.",
  },
  {
    hanji: "小說人物玉卿嫂就是佇外口飼花眉，心甘情願共伊照顧。",
    tailo:
      "Sió-suat jîn-bu̍t Gio̍k-khing-só tō sī tī guā-kháu tshī hue-bî, sim-kam-tsîng-guān kā i tsiàu-kòo.",
  },
  {
    hanji: "花飛上捷予人提來做魚罐頭。",
    tailo: "Hue-hui siōng tsia̍p hōo lâng the̍h-lâi tsò hî kuàn-thâu.",
  },
  {
    hanji: "囡仔看著花條馬，就喙笑目笑。",
    tailo: "Gín-á khuànn-tio̍h hue-tiâu-bé, tō tshuì-tshiò-ba̍k-tshiò.",
  },
  {
    hanji: "花蛤仔炒麵，氣味讚，大人囡仔攏愛食。",
    tailo:
      "Hue-kap-á tshá mī, khì-bī tsán, tuā-lâng gín-á lóng ài tsia̍h.",
  },
  {
    hanji: "伊去拄著金光黨，一寡錢攏予人騙了了去。",
    tailo:
      "I khì tú-tio̍h kim-kong-tóng, tsi̍t-kuá tsînn lóng hōo lâng phiàn-liáu-liáu--khì.",
  },
  {
    hanji: "伊掠我金金相，講我佮𪜶查某囝生做仝款仔仝款。",
    tailo:
      "I lia̍h guá kim-kim-siòng, kóng guá kah in tsa-bóo-kiánn senn-tsò kāng-khuán-á-kāng-khuán.",
  },
  {
    hanji: "今仔日酒樓來一隻金絲猴。",
    tailo: "Kin-á-ji̍t tsiú-lâu lâi tsi̍t tsiah kim-si-kâu.",
  },
  {
    hanji: "頭家急欲愛的報表，你毋緊做出來，時到你會予伊揲甲金鑠鑠。",
    tailo:
      "Thâu-ke kip beh ài ê pò-pió, lí m̄ kín tsò--tshut-lâi, sî kàu lí ē hōo i tia̍p kah kim-siak-siak.",
  },
  {
    hanji: "人若長志，就有機會出脫。",
    tailo: "Lâng nā tsiáng-tsì, tō ū ki-huē tshut-thuat.",
  },
  {
    hanji: "今仔日隔壁的門口埕停幾若台高級轎車，毋知有啥物大代誌。",
    tailo:
      "Kin-á-ji̍t keh-piah ê mn̂g-kháu-tiânn thîng kuí-nā tâi ko-kip kiau-tshia, m̄ tsai ū siánn-mih tuā tāi-tsì.",
  },
  {
    hanji: "心聲合唱團攏是張先生咧𤆬領。",
    tailo:
      "Sim-siann ha̍p-tshiùnn-thuân lóng sī Tiunn--sian-sinn teh tshuā-niá.",
  },
  {
    hanji: "咱稅厝的契約用𨑨迌印仔頓就會使矣。",
    tailo: "Lán suè-tshù ê khè-iok iōng tshit-thô-ìn-á tǹg tō ē-sái--ah.",
  },
  {
    hanji: "你無應該侵門踏戶去揣人算數。",
    tailo: "Lí bô ing-kai tshim-mn̂g-ta̍h-hōo khì tshuē lâng sǹg-siàu.",
  },
  {
    hanji: "保領入房，無保領一世人。",
    tailo: "Pó-niá ji̍p-pâng, bô pó-niá tsi̍t-sì-lâng.",
  },
  {
    hanji: "元宵節的時，南北二路的人攏來看「臺灣燈會」。",
    tailo:
      "Guân-siau-tseh ê sî, lâm-pak-jī-lōo ê lâng lóng lâi khuànn “Tâi-uân ting-huē”.",
  },
  {
    hanji: "伊毋願予人冤枉坐監，佇監獄咬舌自殺。",
    tailo:
      "I m̄-guān hōo lâng uan-óng tsē-kann, tī kann-ga̍k kā-tsi̍h tsū-sat.",
  },
  {
    hanji: "弓蕉猶無到分，食著會咬舌。",
    tailo: "King-tsio iáu bô kàu-hun, tsia̍h tio̍h ē kā-tsi̍h.",
  },
  {
    hanji: "咱人三月二三是媽祖生，臺灣逐所在攏有人咧迎媽祖。",
    tailo:
      "Lán-lâng sann-gue̍h jī-sann sī Má-tsóo-senn, Tâi-uân ta̍k sóo-tsāi lóng ū lâng teh ngiâ Má-tsóo.",
  },
  {
    hanji: "咱人著愛存天良、做好代。",
    tailo: "Lán-lâng tio̍h-ài tshûn thian-liông, tsò hó-tāi.",
  },
  {
    hanji: "咱家己的母語著愛咱人拍拚教咱的囡仔來學。",
    tailo:
      "Lán ka-kī ê bú-gí tio̍h-ài lán-lâng phah-piànn kà lán ê gín-á lâi o̍h.",
  },
  {
    hanji: "豬屎籃仔也提出來品並。",
    tailo: "Ti-sái nâ-á iā the̍h tshut-lâi phín-phīng.",
  },
  {
    hanji: "若拄著大節日，有名的餐廳定定攏客滿。",
    tailo:
      "Nā tú-tio̍h tuā tseh-ji̍t, ū-miâ ê tshan-thiann tiānn-tiānn lóng kheh-buán.",
  },
  {
    hanji: "透早起來就激一个屎面。",
    tailo: "Thàu-tsá khí--lâi tō kik tsi̍t ê sái-bīn.",
  },
  {
    hanji: "這間店著愛巷仔內的才會知。",
    tailo: "Tsit king tiàm tio̍h-ài hāng-á-lāi--ê tsiah ē tsai.",
  },
  {
    hanji: "大學的時，便若放假有閒，阮就會去學校的後壁山運動。",
    tailo:
      "Tāi-ha̍k ê sî, piān-nā pàng-ká ū-îng, guán tō ē khì ha̍k-hāu ê āu-piah-suann ūn-tōng.",
  },
  {
    hanji: "聽講伊的後壁山誠崎，上好莫去得失伊。",
    tailo:
      "Thiann-kóng i ê āu-piah-suann tsiânn kiā, siōng-hó mài khì tik-sit--i.",
  },
  {
    hanji: "欲拜託伊辦，也著前金，也著後謝。",
    tailo: "Beh pài-thok i pān, iā tio̍h tsiân-kim, iā tio̍h āu-siā.",
  },
  {
    hanji: "投票的時，若無紮印仔，會使簽名抑是頓指模。",
    tailo:
      "Tâu-phiò ê sî, nā bô tsah ìn-á, ē-sái tshiam-miâ ia̍h-sī tǹg tsí-bôo.",
  },
  {
    hanji: "古早的小姐，攏著學挑花刺繡。",
    tailo: "Kóo-tsá ê sió-tsiá, lóng tio̍h o̍h thio-hue-tshiah-siù.",
  },
  {
    hanji: "你是咧挑花刺繡是毋？哪會摸遐久？",
    tailo: "Lí sī teh thio-hue-tshiah-siù sī--m̄? Ná ē bong hiah kú?",
  },
  {
    hanji: "這袂歹啉，是講，啉了對身體敢無敗害？",
    tailo:
      "Tse bē pháinn lim, sī-kóng, lim-liáu tuì sin-thé kám bô pāi-hāi?",
  },
  {
    hanji: "伊生理做了失敗，致使規家伙仔定定枵飢失頓。",
    tailo:
      "I sing-lí tsò liáu sit-pāi, tì-sú kui-ke-hué-á tiānn-tiānn iau-ki-sit-tǹg.",
  },
  {
    hanji: "伊幾若頓無食，枵過飢，無體力煞昏倒。",
    tailo: "I kuí-nā tǹg bô tsia̍h, iau-kuè-ki, bô thé-la̍t suah hūn--tó.",
  },
  {
    hanji: "做粗工食體力，到食飯的時，腹肚就足枵燥矣。",
    tailo:
      "Tsò tshoo-kang tsia̍h thé-la̍t, kàu tsia̍h-pn̄g ê sî, pak-tóo tō tsiok iau-sò--ah.",
  },
  {
    hanji: "伊誠枵燥，連紲食三碗飯。",
    tailo: "I tsiânn iau-sò, liân-suà tsia̍h sann uánn pn̄g.",
  },
  {
    hanji: "彼个柝仔頭！叫伊請一頓，袂輸欲共割肉咧。",
    tailo:
      "Hit ê kho̍k-á-thâu! Kiò i tshiánn--tsi̍t-tǹg, bē-su beh kā kuah-bah--leh.",
  },
  {
    hanji: "過年初二是查某囝日，嫁出去的查某囝攏會佇這工轉去後頭厝。",
    tailo:
      "Kuè-nî tshe-jī sī tsa-bóo-kiánn-ji̍t, kè--tshut-khì ê tsa-bóo-kiánn lóng ē tī tsit kang tńg-khì āu-thâu-tshù.",
  },
  {
    hanji: "六月天火燒埔，踮外口一時仔久隨流汗流洘。",
    tailo:
      "La̍k-gue̍h-thinn hué-sio-poo, tiàm guā-kháu tsi̍t-sî-á-kú suî lâu-kuānn-lâu-khó.",
  },
  {
    hanji: "若有代誌，兄弟愛相伨。",
    tailo: "Nā ū tāi-tsì,  hiann-tī ài sio-thīn.",
  },
  {
    hanji: "親情有禮數相伨，較會親。",
    tailo: "Tshin-tsiânn ū lé-sòo sio-thīn, khah ē tshin.",
  },
  {
    hanji: "這軀衫仔褲，色水袂相伨。",
    tailo: "Tsit su sann-á-khòo, sik-tsuí bē sann-thīn.",
  },
  {
    hanji: "伊搬走了後阮就毋捌相揣矣。",
    tailo: "I puann-tsáu liáu-āu guán tō m̄ bat sio-tshuē--ah.",
  },
  {
    hanji: "好朋友結婚，你才包一千箍，袂看口得啦！",
    tailo:
      "Hó-pîng-iú kiat-hun, lí tsiah pau tsi̍t-tshing khoo, bē-khuànn-kháu--tit--lah!",
  },
  {
    hanji: "伊想欲騙我，毋過早就予我看破跤手矣。",
    tailo:
      "I siūnn-beh phiàn--guá, m̄-koh tsá tō hōo guá khuànn-phuà-kha-tshiú--ah.",
  },
  {
    hanji: "人講：「食佇面裡，穿佇身裡」，穿插若傷凊彩，人看袂上目。",
    tailo:
      "Lâng kóng, “Tsia̍h tī bīn--lí, tshīng tī sin--lí”, tshīng-tshah nā siunn tshìn-tshái, lâng khuànn-bē-tsiūnn-ba̍k.",
  },
  {
    hanji: "伊遐爾好額，這種俗物伊看袂上目。",
    tailo:
      "I hiah-nī hó-gia̍h, tsit tsióng sio̍k-mi̍h i khuànn-bē-tsiūnn-ba̍k.",
  },
  {
    hanji: "伊有科學的才能，佇國小一年的時陣，就突顯出來矣。",
    tailo:
      "I ū kho-ha̍k ê tsâi-lîng, tī kok-sió it nî ê sî-tsūn, tō tu̍t-hián--tshut-lâi--ah.",
  },
  {
    hanji: "我佮阮大姊攏相兔，伊足足大我一紀年。",
    tailo:
      "Guá kah guán tuā-tsí lóng siùnn thòo, i tsiok-tsiok tuā guá tsi̍t khí-nî.",
  },
  {
    hanji: "日出紅霞，水淋頭額；日落紅霞，曝死老爺。",
    tailo:
      "Ji̍t tshut âng-hê, tsuí lâm thâu-hia̍h; ji̍t lo̍h âng-hê, pha̍k-sí lāu-iâ.",
  },
  {
    hanji: "電台節目咧推銷健康食品，定定講甲比美國仙丹閣較好用。",
    tailo:
      "Tiān-tâi tsiat-bo̍k teh thui-siau kiān-khong si̍t-phín, tiānn-tiānn kóng kah pí Bí-kok-sian-tan koh-khah hó-īng.",
  },
  {
    hanji: "無彼个美國時間佮你咧捙盤。",
    tailo: "Bô hit ê Bí-kok-sî-kan kah lí teh tshia-puânn.",
  },
  {
    hanji: "美國塗豆又閣叫做發財樹，人兜的盆栽定看會著。",
    tailo:
      "Bí-kok-thôo-tāu iū-koh kiò-tsò huat-tsâi-tshiū, lâng tau ê phûn-tsai tiānn khuànn ē tio̍h.",
  },
  {
    hanji: "我看這个人有帶背骨，你毋通傷信用伊。",
    tailo:
      "Guá khuànn tsit ê lâng ū tài puē-kut, lí m̄-thang siunn sìn-iōng--i.",
  },
  {
    hanji: "閣來這齣戲是苦齣，逐家手巾仔著愛攢予伊好。",
    tailo:
      "Koh lâi tsit tshut hì sī khóo-tshut, ta̍k-ke tshiú-kin-á tio̍h-ài tshuân hōo i hó.",
  },
  {
    hanji: "伊生成較懶性，若無較捷共迫促咧，工課進度會去予誤著。",
    tailo:
      "I senn-sîng khah nuā-sìng, nā bô khah tsia̍p kā pik-tshik--leh, khang-khuè tsìn-tōo ē khì hōo gōo--tio̍h.",
  },
  {
    hanji: "這件代誌較迫促，愛先處理。",
    tailo: "Tsit kiānn tāi-tsì khah pik-tshik, ài sing tshú-lí.",
  },
  {
    hanji: "城市愈來愈楦大，市郊嘛愈來愈鬧熱。",
    tailo:
      "Siânn-tshī jú lâi jú hùn-tuā, tshī-kau mā jú lâi jú lāu-jia̍t.",
  },
  {
    hanji: "歇睏日伊常在𤆬一家伙仔去郊外𨑨迌。",
    tailo:
      "Hioh-khùn-ji̍t i tshiâng-tsāi tshuā tsi̍t-ke-hué-á khì kau-guā tshit-thô.",
  },
  {
    hanji: "進前這條街仔有足濟米郊，人攏叫這條街仔米街。",
    tailo:
      "Tsìn-tsîng tsit tiâu ke-á ū tsiok tsē bí-kau, lâng lóng kiò tsit tiâu ke-á bí-ke.",
  },
  {
    hanji: "現代網路方便進步，有足濟人是佇面冊頂懸佮人相捌、盤撋。",
    tailo:
      "Hiān-tāi bāng-lōo hong-piān tsìn-pōo, ū tsiok tsē lâng sī tī Bīn-tsheh tíng-kuân kah lâng sio-bat, puânn-nuá.",
  },
  {
    hanji: "我看伊面腔無偌好，毋敢加講話。",
    tailo: "Guá khuànn i bīn-tshiunn bô guā hó, m̄ kánn ke kóng-uē.",
  },
  {
    hanji: "原本會贏的比賽煞輸輸去，逐个人攏面漚面臭。",
    tailo:
      "Guân-pún ē iânn ê pí-sài suah su-su--khì, ta̍k ê lâng lóng bīn-àu-bīn-tshàu.",
  },
  {
    hanji: "若毋是伊食人夠夠，逐家嘛袂佮伊計較。",
    tailo: "Nā m̄ sī i tsia̍h-lâng-kàu-kàu, ta̍k-ke mā bē kah i kè-kàu.",
  },
  {
    hanji: "靠勢伊是大官虎，食人夠夠。",
    tailo: "Khò-sè i sī tuā-kuann-hóo, tsia̍h-lâng-kàu-kàu.",
  },
  {
    hanji: "伊做十一哥五十冬矣，這馬才想欲娶某，人講伊是食老出癖。",
    tailo:
      "I tsò tsa̍p-it-ko gōo-tsa̍p tang--ah, tsit-má tsiah siūnn-beh tshuā-bóo, lâng kóng i sī tsia̍h-lāu-tshut-phia̍h.",
  },
  {
    hanji: "你腰子無好，著比正常人食閣較汫，袂使像往過遐愛食重鹹。",
    tailo:
      "Lí io-tsí bô hó, tio̍h pí tsìng-siông-lâng tsia̍h koh-khah tsiánn, bē-sái tshiūnn íng-kuè hiah ài tsia̍h-tāng-kiâm.",
  },
  {
    hanji: "彼箍食重鹹，工程過伊的手攏愛抽百分之十。",
    tailo:
      "Hit khoo tsia̍h-tāng-kiâm, kang-tîng kuè i ê tshiú lóng ài thiu pah hun tsi tsa̍p.",
  },
  {
    hanji: "欲設風力發電機，就愛佇較食風的所在。",
    tailo:
      "Beh siat hong-li̍k huat-tiān-ki, tō ài tī khah tsia̍h-hong ê sóo-tsāi.",
  },
  {
    hanji: "一陣少年仔相招去海墘𨑨迌，干焦食風嘛暢甲。",
    tailo:
      "Tsi̍t tīn siàu-liân-á sio-tsio khì hái-kînn tshit-thô, kan-na tsia̍h-hong mā thiòng kah.",
  },
  {
    hanji: "廳堂專人客，男女數千个，喜酒食真濟，聽候閣食茶。",
    tailo:
      "Thiann-tn̂g tsuan lâng-kheh, lâm-lí sòo tshing ê, hí-tsiú tsia̍h tsin tsē, thìng-hāu koh tsia̍h-tê.",
  },
  {
    hanji: "犯法的人，隨時愛準備食罪。",
    tailo: "Huān-huat ê lâng, suî-sî ài tsún-pī tsia̍h-tsuē.",
  },
  {
    hanji: "代誌這馬出破矣，家己毋食認，閣硬欲賴予別人，實在無理。",
    tailo:
      "Tāi-tsì tsit-má tshut-phuà--ah, ka-kī m̄ tsia̍h-jīn, koh ngē beh luā hōo pa̍t-lâng, si̍t-tsāi bô-lí.",
  },
  {
    hanji: "伊食銅食鐵，莫去惹伊。",
    tailo: "I tsia̍h-tâng-tsia̍h-thih, mài khì jiá--i.",
  },
  {
    hanji:
      "這个狗官啥物khoo-mí-sióng都敢提，真正是食銅食鐵食到a-lú-mih。",
    tailo:
      "Tsit ê káu-kuann siánn-mih khoo-mí-sióng to kánn the̍h, tsin-tsiànn sī tsia̍h-tâng-tsia̍h-thih tsia̍h kàu a-lú-mih.",
  },
  {
    hanji: "這擺請人客是欲辦桌，抑是欲去食餐廳？",
    tailo:
      "Tsit pái tshiánn-lâng-kheh sī beh pān-toh, ia̍h-sī beh khì tsia̍h-tshan-thiann?",
  },
  {
    hanji: "伊其實啥代誌攏袂曉，怙一支喙咧食聲爾爾。",
    tailo:
      "I kî-si̍t siánn tāi-tsì lóng bē-hiáu, kōo tsi̍t ki tshuì teh tsia̍h-siann niā-niā.",
  },
  {
    hanji: "你講手指月娘會予月娘割耳仔，彼是欲騙囡仔的，我予你袂食聲得。",
    tailo:
      "Lí kóng tshiú kí gue̍h-niû ē hōo gue̍h-niû kuah hīnn-á, he sī beh phiàn gín-á--ê, guá hōo lí bē-tsia̍h-siann--tit.",
  },
  {
    hanji: "香櫞瓜佇阮庄跤捷有通食。",
    tailo: "Hiunn-înn-kue tī guán tsng-kha tsia̍p ū thang tsia̍h.",
  },
  {
    hanji: "新聞有咧報，興食檳榔的人，若去食著倒吊子中毒，有時會無命。",
    tailo:
      "Sin-bûn ū teh pò, hìng tsia̍h pin-nn̂g ê lâng, nā khì tsia̍h-tio̍h tò-tiàu-tsí tiòng-to̍k, ū-sî ē bô-miā.",
  },
  {
    hanji: "犯人的手骨予刑警倒拗去尻脊後。",
    tailo: "Huān-lâng ê tshiú-kut hōo hîng-kíng tò-áu khì kha-tsiah-āu.",
  },
  {
    hanji:
      "官司來到尾站，較輸面的使倒頭槌，提出新證據，勢面反輾轉，倒贏。",
    tailo:
      "Kuann-si lâi-kàu bué-tsām, khah su-bīn--ê sái tò-thâu-thuî, thê-tshut sin tsìng-kì, sè-bīn píng-liàn-tńg,  tò-iânn.",
  },
  {
    hanji: "厝裡敲電話來，叫伊趕緊倒轉去。",
    tailo: "Tshù--lí khà tiān-uē lâi, kiò i kuánn-kín tò-tńg--khì.",
  },
  {
    hanji: "你過年敢有欲倒轉去南投？",
    tailo: "Lí kuè-nî kám ū beh tò-tńg-khì Lâm-tâu?",
  },
  {
    hanji: "這兩个證人所講的話真倚意。",
    tailo: "Tsit nn̄g ê tsìng-jîn sóo kóng ê uē tsin uá-ì.",
  },
  {
    hanji: "伊解說先生傳授的道理，攏講了有倚意。",
    tailo:
      "I kái-sueh sian-sinn thuân-siū ê tō-lí, lóng kóng liáu ū uá-ì.",
  },
  {
    hanji: "咱出外較無方便，若會當凊彩揣一个所在倚蹛就好矣。",
    tailo:
      "Lán tshut-guā khah bô hong-piān, nā ē-tàng tshìn-tshái tshuē tsi̍t ê sóo-tsāi uá-tuà tō hó--ah.",
  },
  {
    hanji:
      "愈來愈濟人佇厝尾頂搭棚仔種花、種菜，會使遮日、看媠，閣有通食。",
    tailo:
      "Jú lâi jú tsē lâng tī tshù-bué-tíng tah pênn-á tsìng hue, tsìng tshài, ē-sái jia-ji̍t, khuànn-suí, koh ū thang tsia̍h.",
  },
  {
    hanji: "厝場好不如肚腸好，墳地好不如心地好。",
    tailo:
      "Tshù-tiûnn hó put-jû tōo-tn̂g hó, phûn-tē hó put-jû sim-tē hó.",
  },
  {
    hanji: "這塊寶石經過規千年，猶閣保存了真原全，無一屑仔缺角。",
    tailo:
      "Tsit tè pó-tsio̍h king-kuè kui tshing nî, iáu-koh pó-tsûn liáu tsin guân-tsuân, bô tsi̍t-sut-á khih-kak.",
  },
  {
    hanji: "伊𠢕講套頭話，人緣袂䆀。",
    tailo: "I gâu kóng thò-thâu-uē, lâng-iân bē-bái.",
  },
  {
    hanji: "咱著教囡仔，去便所了後，挩鍊仔著愛挩予好勢。",
    tailo:
      "Lán tio̍h kà gín-á, khì piān-sóo liáu-āu, thuah-liān-á tio̍h-ài thuah hōo hó-sè.",
  },
  {
    hanji: "檢方挽瓜揫藤，共所有的嫌犯攏㨑著，才做一睏總共𪜶起訴。",
    tailo:
      "Kiám-hong bán-kue-tshiû-tîn, kā sóo-ū ê hiâm-huān lóng tsang--tio̍h, tsiah tsò-tsi̍t-khùn tsóng kā in khí-sòo.",
  },
  {
    hanji: "伊無細膩甌仔捙倒，煞予燒茶燙著。",
    tailo: "I bô-sè-jī au-á tshia--tó, suah hōo sio tê thǹg--tio̍h.",
  },
  {
    hanji: "人民捙倒獨裁者的銅像。",
    tailo: "Jîn-bîn tshia-tó to̍k-tshâi-tsiá ê tâng-siōng.",
  },
  {
    hanji: "你做這个架仔傷料小，物件囥濟囥重就會崩去。",
    tailo:
      "Lí tsò tsit ê kè-á siunn liāu-siáu, mi̍h-kiānn khǹg tsē khǹg tāng tō ē pang--khì.",
  },
  {
    hanji: "送彼做禮物傷料小，恐驚無夠看。",
    tailo:
      "Sàng he tsò lé-bu̍t siunn liāu-siáu, khióng-kiann bô-kàu-khuànn.",
  },
  {
    hanji: "歹勢，我較柴目，袂記得咱是啥人，咱敢有相捌？",
    tailo:
      "Pháinn-sè, guá khah tshâ-ba̍k, bē-kì-tit lán sī siánn-lâng, lán kám ū sio-bat?",
  },
  {
    hanji: "大柴鋸做柴箍較好燃火。",
    tailo: "Tuā tshâ kì-tsò tshâ-khoo khah hó hiânn-hué.",
  },
  {
    hanji: "欲去予人請食喜酒，嘛著梳妝打扮一下。",
    tailo:
      "Beh khì hōo lâng tshiánn tsia̍h hí-tsiú, mā tio̍h se-tsng-tánn-pān--tsi̍t-ē.",
  },
  {
    hanji: "拄著歹人客來咧花，咱雖然氣暢忍，嘛著好禮仔共伊安搭。",
    tailo:
      "Tú-tio̍h pháinn lâng-kheh lâi teh hue, lán sui-jiân khì-thiòng-lún, mā tio̍h hó-lé-á kā i an-tah.",
  },
  {
    hanji: "見擺落大雨，阮遮的溝仔水就消敨袂離。",
    tailo:
      "Kiàn-pái lo̍h tuā-hōo, guán tsia ê kau-á-tsuí tō siau-tháu bē lī.",
  },
  {
    hanji: "窗仔門關甲密喌喌，萬一gá-suh洩漏，消敨袂出去，彼就危險矣！",
    tailo:
      "Thang-á-mn̂g kuainn kah ba̍t-tsiuh-tsiuh, bān-it gá-suh sia̍p-lāu, siau-tháu bē tshut--khì, he tō guî-hiám--ah!",
  },
  {
    hanji: "逐工上班屈牢牢，趁歇睏日出去𬦰山，消敨一下。",
    tailo:
      "Ta̍k-kang siōng-pan khut-tiâu-tiâu, thàn hioh-khùn-ji̍t tshut-khì peh-suann, siau-tháu--tsi̍t-ē.",
  },
  {
    hanji:
      "烏子仔菜除了做野菜以外，伊結的果到分變烏了後，嘛是阮的四秀仔。",
    tailo:
      "Oo-tsí-á-tshài tû-liáu tsò iá-tshài í-guā, i kiat ê kó kàu-hun piàn oo liáu-āu, mā sī guán ê sì-siù-á.",
  },
  {
    hanji: "臺北人講烏白切，嘉義人講滷熟肉。",
    tailo:
      "Tâi-pak-lâng kóng oo-pe̍h-tshiat, Ka-gī-lâng kóng lóo-sio̍k-bah.",
  },
  {
    hanji: "「烏面賊，拍袂死，埋袂密。」予你臆一款自然現象。",
    tailo:
      "“Oo-bīn-tsha̍t, phah bē sí, tâi bē ba̍t.”  Hōo lí ioh tsi̍t khuán tsū-jiân hiān-siōng.",
  },
  {
    hanji: "人參是烏面賊，咱無內行，若拄著生份人來推銷，毋通買。",
    tailo:
      "Jîn-sim sī oo-bīn-tsha̍t, lán bô lāi-hâng, nā tú-tio̍h senn-hūn-lâng lâi thui-siau, m̄-thang bé.",
  },
  {
    hanji: "這枝鐵仔，卡一沿烏鉎。",
    tailo: "Tsit-ki thih-á, kha̍h tsi̍t iân oo-sian.",
  },
  {
    hanji: "這支茶罐看著烏鉎烏鉎，泡出來的茶煞真好啉。",
    tailo:
      "Tsit ki tê-kuàn khuànn tio̍h oo-sian-oo-sian, phàu--tshut-lâi ê tê suah tsin hó-lim.",
  },
  {
    hanji: "三年前破病了後，煞留一个病母。",
    tailo: "Sann nî tsîng phuà-pēnn liáu-āu, suah lâu tsi̍t ê pēnn-bó.",
  },
  {
    hanji: "上車進前半點鐘上好先食一粒眩車丹就較袂眩車。",
    tailo:
      "Tsiūnn-tshia tsìn-tsîng puànn tiám-tsing siōng-hó sing tsia̍h tsi̍t lia̍p hîn-tshia-tan tō khah bē hîn-tshia.",
  },
  {
    hanji: "講伊是留美的博士，偌𠢕拄偌𠢕，予人黜一下隨破功。",
    tailo:
      "Kóng i sī liû Bí ê phok-sū, guā gâu tú guā gâu, hōo lâng thuh tsi̍t-ē suî phò-kong.",
  },
  {
    hanji: "伊生做斯文斯文，真有內涵的款，毋過一下開喙就破功矣。",
    tailo:
      "I senn-tsò su-bûn-su-bûn, tsin ū luē-hâm ê khuán, m̄-koh tsi̍t-ē khui-tshuì tō phò-kong--ah.",
  },
  {
    hanji: "予史豔文的純陽掌拍著，一甲子的修煉現破功。",
    tailo:
      "Hōo Sú Iām-bûn ê Sûn-iâng-tsiáng phah--tio̍h, tsi̍t kah-tsí ê siu-liān hiān phò-kong.",
  },
  {
    hanji: "咱誠久無見面矣，有閒就加減來阮兜坐坐咧，罔破豆一下啦。",
    tailo:
      "Lán tsiânn kú bô kìnn-bīn--ah, ū-îng tō ke-kiám lâi guán tau tsē-tsē--leh, bóng phò-tāu--tsi̍t-ē--lah.",
  },
  {
    hanji: "較早定定聽會著人喝欲補破鼎，這馬攏聽袂著矣。",
    tailo:
      "Khah-tsá tiānn-tiānn thiann ē tio̍h lâng huah beh póo phuà-tiánn, tsit-má lóng thiann bē tio̍h--ah.",
  },
  {
    hanji: "伊運動傷過激烈，無細膩煞破鼎去。",
    tailo: "I ūn-tōng siunn kuè kik-lia̍t, bô-sè-jī suah phuà-tiánn--khì.",
  },
  {
    hanji: "王家兄弟為著祖公仔產冤家相告。",
    tailo: "Ông--ka hiann-tī uī-tio̍h tsóo-kong-á-sán uan-ke sio-kò.",
  },
  {
    hanji: "這个嬰仔好育飼，閣不時笑微微，古錐甲！",
    tailo:
      "Tsit ê enn-á hó-io-tshī, koh put-sî tshiò-bi-bi, kóo-tsui kah!",
  },
  {
    hanji: "伊真𠢕搬笑詼齣，毋過伊平常時罕得講耍笑。",
    tailo:
      "I tsin gâu puann tshiò-khue-tshut, m̄-koh i pîng-siông-sî hán-tit kóng-sńg-tshiò.",
  },
  {
    hanji: "你等咧出去，愛會記得去便利商店納錢喔！",
    tailo:
      "Lí tán--leh tshut--khì, ài ē-kì-tit khì piān-lī siong-tiàm la̍p-tsînn--ooh!",
  },
  {
    hanji: "欲買的衫揀好矣未？我欲來去納錢矣喔！",
    tailo:
      "Beh bé ê sann kíng-hó--ah--buē? Guá beh lâi-khì la̍p-tsînn--ah--ooh!",
  },
  {
    hanji: "遮的香油囥傷久，鼻著臭油餲臭油餲。",
    tailo:
      "Tsia-ê hiang-iû khǹg siunn kú, phīnn tio̍h tshàu-iû-ai tshàu-iû-ai.",
  },
  {
    hanji: "人生茫茫渺渺，毋知影對佗位來，嘛毋知影對佗位去。",
    tailo:
      "Jîn-sing bông-bông-biáu-biáu, m̄ tsai-iánn tuì tó-uī lâi, mā m̄ tsai-iánn tuì tó-uī khì.",
  },
  {
    hanji: "人客來，用茶米茶招待。",
    tailo: "Lâng-kheh lâi, īng tê-bí-tê tsiau-thāi.",
  },
  {
    hanji: "伊泡茶，著用茶洗洗茶甌，有夠工夫。",
    tailo: "I phàu tê, tio̍h īng tê-sé sé tê-au, ū-kàu kang-hu.",
  },
  {
    hanji: "手捾茶籗六角扁，緊緊捾來身軀邊。",
    tailo:
      "Tshiú kuānn tê-khah la̍k kak pínn, kín-kín kuānn-lâi sin-khu-pinn.",
  },
  {
    hanji: "啊阮都草地倯，毋才袂曉坐捷運！",
    tailo: "Ah guán to tsháu-tē-sông, m̄-tsiah bē-hiáu tsē tsia̍t-ūn!",
  },
  {
    hanji: "荏身命的人較快感著，早暗著注意疊衫。",
    tailo:
      "Lám-sin-miā ê lâng khah khuài kám--tio̍h, tsá-àm tio̍h tsù-ì tha̍h sann.",
  },
  {
    hanji: "因為時間袂拄好，我才無去聽伊演講。",
    tailo: "In-uī sî-kan bē-tú-hó, guá tsiah bô khì thiann i ián-káng.",
  },
  {
    hanji: "景氣真䆀，我手頭袂拄好，你遐敢有冗？先共你壘一寡。",
    tailo:
      "Kíng-khì tsin bái, guá tshiú-thâu bē-tú-hó, lí hia kám ū liōng? Sing kā lí luí--tsi̍t-kuá.",
  },
  {
    hanji: "毋知這个嬰仔是佗位仔咧袂拄好，騙攏袂恬。",
    tailo:
      "M̄ tsai tsit ê enn-á sī tó-uī-á teh bē-tú-hó, phiàn lóng bē tiām.",
  },
  {
    hanji: "定定來共恁攪擾，我感覺對恁真袂做得。",
    tailo:
      "Tiānn-tiānn lâi kā lín kiáu-jiáu, guá kám-kak tuì lín tsin bē-tsò--tit.",
  },
  {
    hanji: "袂曉就講袂曉，毋通袂博假博。",
    tailo: "Bē-hiáu tō kóng bē-hiáu, m̄-thang bē-phok-ké-phok.",
  },
  {
    hanji: "豆腐佮石頭──袂磕得。",
    tailo: "Tāu-hū kah tsio̍h-thâu──bē-kha̍p--tit.",
  },
  {
    hanji: "伊看著查某囡仔，就欲佮人膏膏纏，莫怪予人罵伊袂曉衰。",
    tailo:
      "I khuànn-tio̍h tsa-bóo gín-á, tō beh kah lâng ko-ko-tînn, bo̍k-kuài hōo lâng mē i bē-hiáu-sue.",
  },
  {
    hanji: "團體生活，各人的用品著做記認，才袂提毋著去。",
    tailo:
      "Thuân-thé sing-ua̍h, kok-lâng ê iōng-phín tio̍h tsò kì-jīn, tsiah bē the̍h m̄-tio̍h--khì.",
  },
  {
    hanji: "看著警察，彼陣毋成囡仔隨起豹飆，走甲無看見影。",
    tailo:
      "Khuànn-tio̍h kíng-tshat, hit tīn m̄-tsiânn-gín-á suî khí-pà-pio, tsáu kah bô khuànn-kìnn iánn.",
  },
  {
    hanji: "伊酒癖䆀，酒啉啉咧定定起酒痟。",
    tailo:
      "I tsiú-phiah bái, tsiú lim-lim--leh tiānn-tiānn khí-tsiú-siáu.",
  },
  {
    hanji: "對火車頭出去，直行就迵海矣。",
    tailo: "Tuì hué-tshia-thâu tshut--khì, ti̍t kiânn tō thàng-hái--ah.",
  },
  {
    hanji: "彼間新開的海產店，麥仔酒予你啉迵海的。",
    tailo:
      "Hit king sin khui ê hái-sán-tiàm, be̍h-á-tsiú hōo lí lim thàng-hái--ê.",
  },
  {
    hanji: "荔枝這陣退時矣，較無水分，也較袂甜。",
    tailo:
      "Nāi-tsi tsit-tsūn thè-sî--ah, khah bô tsuí-hun, iā khah bē tinn.",
  },
  {
    hanji: "馬花糋是用麵粉做的閣糋過的物件，毋通食傷濟。",
    tailo:
      "Bé-hue-tsìnn sī iōng mī-hún tsò--ê koh tsìnn--kuè ê mi̍h-kiānn, m̄-thang tsia̍h siunn tsē.",
  },
  {
    hanji: "逐家較鬥搭咧，緊做予煞。",
    tailo: "Ta̍k-ke khah tàu-tah--leh, kín tsò hōo suah.",
  },
  {
    hanji: "逐家鬥陣做工課，著較鬥搭咧，才會緊氣。",
    tailo:
      "Ta̍k-ke tàu-tīn tsò khang-khuè, tio̍h khah tàu-tah--leh, tsiah ē kín-khuì.",
  },
  {
    hanji: "婚禮愛用紅布，氣氛才會鬥搭。",
    tailo: "Hun-lé ài īng âng pòo, khì-hun tsiah ē tàu-tah.",
  },
  {
    hanji: "菝仔有到分無，共伊㨂甲一下就知。",
    tailo: "Pua̍t-á ū kàu-hun--bô, kā i tàng-kah--tsi̍t-ē tō tsai.",
  },
  {
    hanji: "雞母欲生卵的時，咱先提一粒卵囥踮一跡做囮，伊就會過來生蹛遐。",
    tailo:
      "Ke-bó beh senn-nn̄g ê sî, lán sing the̍h tsi̍t lia̍p nn̄g khǹg tiàm tsi̍t jiah tsò-buê, i tō ē kuè-lâi senn tuà hia.",
  },
  {
    hanji: "金光黨一个做囮，假做有錢的戇囝，一个就鼓舞受害者去佮伊換錢。",
    tailo:
      "Kim-kong-tóng tsi̍t ê tsò-buê, ké-tsò ū-tsînn ê gōng-kiánn, tsi̍t ê tō kóo-bú siū-hāi-tsiá khì kah i uānn tsînn.",
  },
  {
    hanji: "伊會做竅害人，結局家己無好尾。",
    tailo: "I ē tsò-khiò hāi--lâng, kiat-kio̍k ka-kī bô hó-bué.",
  },
  {
    hanji: "教會佇老母日攏會準備剪絨仔花，予會友結佇胸前。",
    tailo:
      "Kàu-huē tī Lāu-bú-ji̍t lóng ē tsún-pī tsián-jiông-á-hue, hōo huē-iú kat tī hing-tsîng.",
  },
  {
    hanji: "我有三本古冊予剪蟲咬甲烌烌去。",
    tailo: "Guá ū sann pún kóo-tsheh hōo tsián-thâng kā kah hu-hu--khì.",
  },
  {
    hanji: "𪜶董的趁有錢了後，就激甲一个參仔氣，講話攏對鼻空出來。",
    tailo:
      "In táng--ê thàn ū tsînn liáu-āu, tō kik kah tsi̍t ê sim-á-khuì, kóng-uē lóng tuì phīnn-khang tshut--lâi.",
  },
  {
    hanji: "我國校出業，考牢初中，可惜無錢通註冊，就去學做師仔。",
    tailo:
      "Guá kok-hāu tshut-gia̍p, khó-tiâu tshoo-tiong, khó-sioh bô tsînn thang tsù-tsheh, tō khì o̍h tsò sai-á.",
  },
  {
    hanji: "夠月欲生矣，準備好未？",
    tailo: "Kàu-gue̍h beh senn--ah, tsún-pī hó--buē?",
  },
  {
    hanji: "以早老師派的宿題較死板，這馬的較活潑、較心適。",
    tailo:
      "Í-tsá lāu-su phài ê siok-tê khah sí-pán, tsit-má--ê khah hua̍t-phuat, khah sim-sik.",
  },
  {
    hanji:
      "伊駛車去共人挵著，煞做伊閬港，好佳哉尾仔有佮人和解，法官才予伊寄罪。",
    tailo:
      "I sái-tshia khì kā lâng lòng--tio̍h, suah tsò i làng-káng, hó-ka-tsài bué--á ū kah lâng hô-kái, huat-kuann tsiah hōo i kià-tsuē.",
  },
  {
    hanji: "人生在世，親像出外寄跤的旅客。",
    tailo: "Jîn-sing tsāi-sè, tshin-tshiūnn tshut-guā kià-kha ê lí-kheh.",
  },
  {
    hanji: "一塊糖仔落佇塗跤，連鞭狗蟻就生甲密密是。",
    tailo:
      "Tsi̍t tè thn̂g-á lak tī thôo-kha, liâm-mi káu-hiā tō senn kah ba̍t-ba̍t-sī.",
  },
  {
    hanji: "你真愛徙岫呢！桌仔位撨攏袂好勢。",
    tailo: "Lí tsin ài suá-siū--neh! Toh-á uī tshiâu lóng bē hó-sè.",
  },
  {
    hanji: "逐年徛秋的時溪水就漲起來。",
    tailo: "Ta̍k-nî khiā-tshiu ê sî khe-tsuí tō tiòng--khí-lâi.",
  },
  {
    hanji: "這間是徛家厝，毋是店頭。",
    tailo: "Tsit king sī khiā-ke-tshù, m̄ sī tiàm-thâu.",
  },
  {
    hanji: "李家明仔載欲來捾定，咱著辦腥臊請人。",
    tailo:
      "Lí--ka bîn-á-tsài beh lâi kuānn-tiānn, lán tio̍h pān tshenn-tshau tshiánn--lâng.",
  },
  {
    hanji: "朋友有代誌來央託，伊若做會到的，攏毋捌共人推捒。",
    tailo:
      "Pîng-iú ū tāi-tsì lâi iang-thok, i nā tsò ē kàu--ê, lóng m̄ bat kā lâng the-sak.",
  },
  {
    hanji: "火車敗馬去，死傷真濟人。",
    tailo: "Hué-tshia pāi-bé--khì, sí-siong tsin tsē lâng.",
  },
  {
    hanji: "事業若做了敗馬，毋免失志。",
    tailo: "Sū-gia̍p nā tsò liáu pāi-bé, m̄-bián sit-tsì.",
  },
  {
    hanji: "熱人啉梅仔茶，會止喙焦。",
    tailo: "Jua̍h--lâng lim muê-á-tê, ē tsí tshuì-ta.",
  },
  {
    hanji: "伊規日勼踮厝內，袂輸涵空龜咧，時勢啥款攏毋知。",
    tailo:
      "I kui-ji̍t kiu tiàm tshù-lāi, bē-su âm-khang-ku--leh, sî-sè siánn-khuán lóng m̄ tsai.",
  },
  {
    hanji: "伊串講攏講涼腔，免聽啦！",
    tailo: "I tshuàn-kóng lóng kóng liâng-khiang, bián thiann--lah!",
  },
  {
    hanji: "原住民通常比漢人較深目。",
    tailo: "Guân-tsū-bîn thong-siông pí Hàn-jîn khah tshim-ba̍k.",
  },
  {
    hanji: "伊古意閣好笑神，真深緣，予人愈看愈中意。",
    tailo:
      "I kóo-ì koh hó-tshiò-sîn, tsin tshim-iân, hōo lâng jú khuànn jú tìng-ì.",
  },
  {
    hanji: "天氣清彩，兩人相招去行春。",
    tailo: "Thinn-khì tshing-tshái, nn̄g lâng sio-tsio khì kiânn-tshun.",
  },
  {
    hanji: "伊病好矣，早起看著有較清彩。",
    tailo: "I pēnn hó--ah, tsá-khí khuànn tio̍h ū khah tshing-tshái.",
  },
  {
    hanji: "伊真好喙斗，連清飯攪豆油都食甲窣窣叫。",
    tailo:
      "I tsin hó-tshuì-táu, liân tshing-pn̄g kiáu tāu-iû to tsia̍h kah su̍t-su̍t-kiò.",
  },
  {
    hanji: "𪜶一陣查埔囡仔歇熱有去水上樂園，耍甲爽歪歪。",
    tailo:
      "In tsi̍t tīn tsa-poo gín-á hioh-jua̍h ū khì tsuí-siōng lo̍k-hn̂g, sńg kah sóng-uainn-uainn.",
  },
  {
    hanji: "伊想欲牽龜落湳，你莫予伊騙去。",
    tailo: "I siūnn-beh khan-ku-lo̍h-làm, lí mài hōo i phiàn--khì.",
  },
  {
    hanji: "年節時仔，高速公路定定窒車。",
    tailo: "Nî-tseh-sî-á, ko-sok kong-lōo tiānn-tiānn that-tshia.",
  },
  {
    hanji: "雖然伊笨跤笨手，咱沓沓仔共教，這款工課伊嘛是做會來。",
    tailo:
      "Sui-jiân i pūn-kha-pūn-tshiú, lán ta̍uh-ta̍uh-á kā kà, tsit khuán khang-khuè i mā sī tsò ē lâi.",
  },
  {
    hanji: "專制政府刑罰政治犯的手段真粗殘。",
    tailo:
      "Tsuan-tsè tsìng-hú hîng-hua̍t tsìng-tī-huān ê tshiú-tuānn tsin tshoo-tshân.",
  },
  {
    hanji: "這條提案逐家已經討論好勢，紲落來咱就來表決。",
    tailo:
      "Tsit tiâu thê-àn ta̍k-ke í-king thó-lūn hó-sè, suà--lo̍h-lâi lán tō lâi piáu-kuat.",
  },
  {
    hanji: "宿題傷濟，禮拜日寫規工嘛寫袂了。",
    tailo: "Siok-tê siunn tsē, lé-pài-ji̍t siá kui-kang mā siá bē liáu.",
  },
  {
    hanji: "伊規工攏佇外口拜訪客戶。",
    tailo: "I kui-kang lóng tī guā-kháu pài-hóng kheh-hōo.",
  },
  {
    hanji: "阮規家伙仔不時趁歇睏日去海邊仔抾糞埽，做環保志工。",
    tailo:
      "Guán kui-ke-hué-á put-sî thàn hioh-khùn-ji̍t khì hái-pinn-á khioh pùn-sò, tsò khuân-pó tsì-kang.",
  },
  {
    hanji: "逐家合股做生理，趁的錢伊袂使規碗捀。",
    tailo:
      "Ta̍k-ke ha̍p-kóo tsò-sing-lí, thàn ê tsînn i bē-sái kui-uánn-phâng.",
  },
  {
    hanji: "伊考牢好學校毋去讀，煞佮人規嚾規黨做𨑨迌仔。",
    tailo:
      "I khó-tiâu hó ha̍k-hāu m̄ khì tha̍k, suah kah lâng kui-uang-kui-tóng tsò tshit-thô-á.",
  },
  {
    hanji: "設使會當自由行徙，毋知有偌好咧！",
    tailo: "Siat-sú ē-tàng tsū-iû kiânn-suá, m̄ tsai ū guā hó--leh!",
  },
  {
    hanji: "菜市仔到欲晝仔較軟市。",
    tailo: "Tshài-tshī-á kàu beh-tàu-á khah nńg-tshī.",
  },
  {
    hanji: "這个案件愛調查予透底。",
    tailo: "Tsit ê àn-kiānn ài tiâu-tsa hōo thàu-té.",
  },
  {
    hanji: "這味產品是純天然成分煉成的，無透濫一寡有的無的。",
    tailo:
      "Tsit bī sán-phín sī sûn thian-jiân sîng-hun liān-sîng--ê, bô thàu-lām tsi̍t-kuá ū--ê-bô--ê.",
  },
  {
    hanji: "家己做魚酥，會使穩心仔食。",
    tailo: "Ka-kī tsò hî-soo, ē-sái ún-sim-á tsia̍h.",
  },
  {
    hanji: "淡水咧賣的魚酥真好食。",
    tailo: "Tām-tsuí teh bē ê hî-soo tsin hó-tsia̍h.",
  },
  {
    hanji: "田園若有收，鳥隻食得偌？",
    tailo: "Tshân-hn̂g nā ū siu, tsiáu-tsiah tsia̍h-tit guā?",
  },
  {
    hanji: "阿公去新港遊覽，有買鳥鼠仔糖做等路欲予孫仔食。",
    tailo:
      "A-kong khì Sin-káng iû-lám, ū bé niáu-tshí-á-thn̂g tsò tán-lōo beh hōo sun-á tsia̍h.",
  },
  {
    hanji: "嬰仔滿月，阿媽真歡喜，備辦雞酒來請親情、厝邊。",
    tailo:
      "Enn-á muá-gue̍h, a-má tsin huann-hí, pī-pān ke-tsiú lâi tshiánn tshin-tsiânn, tshù-pinn.",
  },
  {
    hanji: "阮阿公是青草仔的博士博。",
    tailo: "Guán a-kong sī tshenn-tsháu-á ê phok-sū-phok.",
  },
  {
    hanji: "無影跡的代誌，也佇網路頂咧喊。",
    tailo: "Bô iánn-tsiah ê tāi-tsì, iā tī bāng-lōo-tíng teh hán.",
  },
  {
    hanji: "我顧佮厝邊喋詳，煞袂赴煮晝。",
    tailo: "Guá kòo kah tshù-pinn thi̍h-siông, suah bē-hù tsú-tàu.",
  },
  {
    hanji: "伊看著人攏喙笑目笑，真有人緣。",
    tailo:
      "I khuànn-tio̍h lâng lóng tshuì-tshiò-ba̍k-tshiò, tsin ū-lâng-iân.",
  },
  {
    hanji: "今年弓蕉產量穩定、價數好，蕉農逐个攏喙笑目笑。",
    tailo:
      "Kin-nî king-tsio sán-liōng ún-tīng, kè-siàu hó, tsio-lông ta̍k ê lóng tshuì-tshiò-ba̍k-tshiò.",
  },
  {
    hanji: "一屑仔無夠通楔喙齒縫啦！",
    tailo: "Tsi̍t-sut-á bô-kàu thang seh tshuì-khí-phāng--lah!",
  },
  {
    hanji: "年歲有矣，喙齒縫愈來愈櫳，食物件定定楔咧，真礙虐。",
    tailo:
      "Nî-huè ū--ah, tshuì-khí-phāng jú lâi jú lang, tsia̍h mi̍h-kiānn tiānn-tiānn seh--leh, tsin gāi-gio̍h.",
  },
  {
    hanji: "往過的人晏報戶口是誠四常的代誌。",
    tailo:
      "Íng-kuè ê lâng uànn pò-hōo-kháu sī tsiânn sù-siông ê tāi-tsì.",
  },
  {
    hanji: "無彩伊家財萬貫，煞顛倒寒酸，一箍銀都毋肯寄付。",
    tailo:
      "Bô-tshái i ka-tsâi bān-kuàn, suah tian-tò hân-suan, tsi̍t khoo gîn to m̄ khíng kià-hù.",
  },
  {
    hanji: "伊惡人無膽，你免驚伊。",
    tailo: "I ok-lâng bô-tánn, lí bián kiann--i.",
  },
  {
    hanji: "彼个頭家蓋惡質，工廠刁工放予倒，家己走去外國享受。",
    tailo:
      "Hit ê thâu-ke kài ok-tsit, kang-tshiúnn thiau-kang pàng hōo tó, ka-kī tsáu-khì guā-kok hiáng-siū.",
  },
  {
    hanji: "醫生理解𪜶的掛慮，徛佇同情的立場，答應共𪜶提囡仔。",
    tailo:
      "I-sing lí-kái in ê kuà-lī, khiā tī tông-tsîng ê li̍p-tiûnn, tah-ìng kā in the̍h-gín-á.",
  },
  {
    hanji: "伊敢是有啥物不得已的苦衷，才會做出這種代誌。",
    tailo:
      "I kánn-sī ū siánn-mih put-tik-í ê khóo-thiong, tsiah ē tsò-tshut tsit tsióng tāi-tsì.",
  },
  {
    hanji: "伊偷提厝裡的錢，予阿公縛咧，啥人敢共伊敨放？",
    tailo:
      "I thau-the̍h tshù--lí ê tsînn, hōo a-kong pa̍k--leh, siánn-lâng kánn kā i tháu-pàng?",
  },
  {
    hanji: "臺灣人的想法敢有得著敨放？",
    tailo: "Tâi-uân-lâng ê siūnn-huat kám ū tit-tio̍h tháu-pàng?",
  },
  {
    hanji: "𪜶翁佇外口有查某，伊攏無智覺著。",
    tailo: "In ang tī guā-kháu ū tsa-bóo, i lóng bô tì-kak--tio̍h.",
  },
  {
    hanji: "你最近面色誠䆀，敢是身體佗位有各樣，你無智覺著是毋？",
    tailo:
      "Lí tsuè-kīn bīn-sik tsiânn bái, kánn-sī sin-thé tó-uī ū koh-iūnn, lí bô tì-kak--tio̍h sī--m̄?",
  },
  {
    hanji: "伊做人欺貧重富，佇庄仔頭名聲誠䆀。",
    tailo:
      "I tsò-lâng khi-pîn-tiōng-hù, tī tsng-á-thâu miâ-siann tsiânn bái.",
  },
  {
    hanji: "毋通閣躊躇矣，殘殘共決落去！",
    tailo: "M̄-thang koh tiû-tû--ah, tshân-tshân kā kuat--lo̍h-khì!",
  },
  {
    hanji: "番薯𠢕湠根，真好種。",
    tailo: "Han-tsî gâu thuànn-kin, tsin hó tsìng.",
  },
  {
    hanji: "原始的湳仔地，生態非常豐富，咱著愛好好仔保護。",
    tailo:
      "Guân-sí ê làm-á-tē, sing-thài hui-siông hong-hù, lán tio̍h-ài hó-hó-á pó-hōo.",
  },
  {
    hanji: "牛車駛入湳塗，駛袂行。",
    tailo: "Gû-tshia sái-ji̍p làm-thôo, sái bē kiânn.",
  },
  {
    hanji: "較正經咧，毋通遐無才。",
    tailo: "Khah tsìng-king--leh, m̄-thang hiah bô-tsâi.",
  },
  {
    hanji: "開喙就𧮙，有夠無品。",
    tailo: "Khui-tshuì tō tshoh, ū-kàu bô-phín.",
  },
  {
    hanji: "無大條番薯通炰，炰番薯仔囝嘛好。",
    tailo: "Bô tuā tiâu han-tsî thang pû, pû han-tsî-á-kiánn mā hó.",
  },
  {
    hanji: "臺灣人有時會稱呼家己是番薯仔囝。",
    tailo: "Tâi-uân-lâng ū-sî ē tshing-hoo ka-kī sī han-tsî-á-kiánn.",
  },
  {
    hanji: "工課做規工，規身軀痛疼。",
    tailo: "Khang-khuè tsò kui-kang, kui-sin-khu thàng-thiànn.",
  },
  {
    hanji: "工課到睏尾，人雖然誠忝，嘛是袂使凊彩做做咧。",
    tailo:
      "Khang-khuè kàu khùn-bué, lâng sui-jiân tsiânn thiám, mā sī bē-sái tshìn-tshái tsò-tsò--leh.",
  },
  {
    hanji: "伊睏癖真䆀，規暝反來反去。",
    tailo: "I khùn-phiah tsin bái, kui mê píng-lâi-píng-khì.",
  },
  {
    hanji: "人硩番薯拋過溝，咱硩番薯毋落頭。",
    tailo: "Lâng teh han-tsî pha-kuè kau, lán teh han-tsî m̄ lo̍h thâu.",
  },
  {
    hanji: "代誌明明都伊做的，伊硬拗講是別人。",
    tailo: "Tāi-tsì bîng-bîng to i tsò--ê, i ngē-áu kóng sī pa̍t-lâng.",
  },
  {
    hanji: "彼手機仔都已經有打對折矣，伊閣硬拗，叫店員送伊電池佮配件。",
    tailo:
      "He tshiú-ki-á to í-king ū tánn tuì-tsiat--ah, i koh ngē-áu, kiò tiàm-uân sàng i tiān-tî kah phuè-kiānn.",
  },
  {
    hanji: "伊力頭誠飽，遐粗的鐵枝會使硬拗做九十度。",
    tailo:
      "I la̍t-thâu tsiânn pá, hiah tshoo ê thih-ki ē-sái ngē-áu tsò káu-tsa̍p tōo.",
  },
  {
    hanji: "這个囡仔四個月爾爾就真硬插，足好抱。",
    tailo:
      "Tsit ê gín-á sì kò gue̍h niā-niā tō tsin ngē-tshah, tsiok hó phō.",
  },
  {
    hanji: "伊食甲八十外仔外矣，猶閣誠硬插，𬦰懸𬦰低真扭掠。",
    tailo:
      "I tsia̍h kah peh-tsa̍p guā-á-guā--ah, iáu-koh tsiânn ngē-tshah, peh-kuân-peh-kē tsin liú-lia̍h.",
  },
  {
    hanji: "新聞報講有一个老阿婆有夠硬插，靠家己一雙手骨咧晟三个孫仔。",
    tailo:
      "Sin-bûn pò kóng ū tsi̍t ê lāu-a-pô ū-kàu ngē-tshah, khò ka-kī tsi̍t siang tshiú-kut teh tshiânn sann ê sun-á.",
  },
  {
    hanji: "筅黗以後，就準備過年。",
    tailo: "Tshíng-thûn í-āu, tō tsún-pī kuè-nî.",
  },
  {
    hanji: "這坵田的粟仔較媠，留起來做粟種。",
    tailo:
      "Tsit khu tshân ê tshik-á khah suí, lâu khí-lâi tsò tshik-tsíng.",
  },
  {
    hanji: "寒著蓋被翕汗，較緊好。",
    tailo: "Kuânn--tio̍h kah-phuē hip-kuānn, khah kín hó.",
  },
  {
    hanji: "家豪佮淑芬是這馬真流行的菜市仔名。",
    tailo:
      "Ka-hô kap Siok-hun sī tsit-má tsin liû-hîng ê tshài-tshī-á-miâ.",
  },
  {
    hanji: "用菜砧切肉以後，愛洗清氣。",
    tailo: "Īng tshài-tiam tshiat bah í-āu, ài sé tshing-khì.",
  },
  {
    hanji: "菜金菜塗，攏搦佇菜蟲的手裡。",
    tailo: "Tshài-kim tshài-thôo, lóng la̍k tī tshài-thâng ê tshiú--lí.",
  },
  {
    hanji: "伊去參加朗讀比賽，有著獎呢！",
    tailo: "I khì tsham-ka lóng-tho̍k pí-sài, ū tio̍h-tsióng--neh!",
  },
  {
    hanji: "伊買彩券著獎，同事攏叫伊愛請。",
    tailo: "I bé tshái-kuàn tio̍h-tsióng, tông-sū lóng kiò i ài tshiánn.",
  },
  {
    hanji: "馬四跤，有時也會著觸。",
    tailo: "Bé sì kha, ū-sî iā ē tio̍h-tak.",
  },
  {
    hanji: "伊拄創業的時，雖然定定著觸，猶原堅持理想。",
    tailo:
      "I tú tshòng-gia̍p ê sî, sui-jiân tiānn-tiānn tio̍h-tak, iu-guân kian-tshî lí-sióng.",
  },
  {
    hanji: "伊袂堪得歹朋友唌，才會著觸。",
    tailo: "I bē-kham-tit pháinn pîng-iú siânn, tsiah ē tio̍h-tak.",
  },
  {
    hanji: "𪜶頭家若較歹咧，伊就較覕鬚。",
    tailo: "In thâu-ke nā khah pháinn--leh, i tō khah bih-tshiu.",
  },
  {
    hanji: "𪜶老爸若對伊變面，伊就覕鬚。",
    tailo: "In lāu-pē nā tuì i pìnn-bīn, i tō bih-tshiu.",
  },
  {
    hanji: "語言的詞彙消失愈濟，這个語言就愈緊死去。",
    tailo:
      "Gí-giân ê sû-luī siau-sit jú tsē, tsit ê gí-giân tō jú kín sí--khì.",
  },
  {
    hanji: "買手閣加疊一成，就成交矣。",
    tailo: "Bé-tshiú koh ke tha̍h tsi̍t siânn, tō sîng-kau--ah.",
  },
  {
    hanji: "伊拄咧排路邊擔仔的時，因為欠本錢，就去共人貿貨底來賣。",
    tailo:
      "I tú-teh pâi lōo-pinn-tànn-á ê sî, in-uī khiàm pún-tsînn, tō khì kā lâng bāu-huè-té lâi bē.",
  },
  {
    hanji: "有一寡政治人物，干焦佇選舉的時，才較捷講母語來佮民眾跋感情。",
    tailo:
      "Ū tsi̍t-kuá tsìng-tī jîn-bu̍t, kan-na tī suán-kí ê sî, tsiah khah tsia̍p kóng bú-gí lâi kah bîn-tsiòng pua̍h-kám-tsîng.",
  },
  {
    hanji: "恁欲跙流籠，著愛照排列，按呢才有公平。",
    tailo:
      "Lín beh tshū-liû-lông, tio̍h-ài tsiàu pâi-lia̍t, án-ne tsiah ū kong-pênn.",
  },
  {
    hanji: "伊真鈍目，看物件攏看袂清楚。",
    tailo: "I tsin tūn-ba̍k, khuànn mi̍h-kiānn lóng khuànn bē tshing-tshó.",
  },
  {
    hanji: "伊實在足鈍目，看過就隨袂記得。",
    tailo: "I si̍t-tsāi tsiok tūn-ba̍k, khuànn--kuè tō suî bē-kì--tit.",
  },
  {
    hanji: "這是阮的代誌，免你閒煩。",
    tailo: "Tse sī guán ê tāi-tsì, bián lí îng-huân.",
  },
  {
    hanji: "杜蚓仔真韌命，伊的後半段若斷去，家己會閣生出來。",
    tailo:
      "Tōo-kún-á tsin jūn-miā, i ê āu puànn tuānn nā tn̄g--khì, ka-kī ē koh senn--tshut-lâi.",
  },
  {
    hanji: "阿公真韌命，細漢的時拄著幾若擺空襲攏無代誌。",
    tailo:
      "A-kong tsin jūn-miā, sè-hàn ê sî tú-tio̍h kuí-nā pái khong-si̍p lóng bô tāi-tsì.",
  },
  {
    hanji: "黃目子會使用來做雪文。",
    tailo: "N̂g-ba̍k-tsí ē-sái īng-lâi tsò sap-bûn.",
  },
  {
    hanji: "𬦰懸崎，車著愛催油才𬦰會起去。",
    tailo: "Peh kuân kiā, tshia tio̍h-ài tshui-iû tsiah peh ē khí--khì.",
  },
  {
    hanji: "見若做風颱、落大雨，就有塗石流造成災害。",
    tailo:
      "Kiàn-nā tsò-hong-thai, lo̍h tuā-hōo, tō ū thôo-tsio̍h-lâu tsō-sîng tsai-hāi.",
  },
  {
    hanji: "嘉南平原的塗肉厚，足好種作。",
    tailo: "Ka-lâm Pîng-guân ê thôo-bah kāu, tsiok hó tsìng-tsoh.",
  },
  {
    hanji: "逐家攏叫厝主「媽祖婆」，有伊佇咧，絕對袂枵著！",
    tailo:
      "Ta̍k-ke lóng kiò tshù-tsú  “Má-tsóo-pô”, ū i tī--leh, tsua̍t-tuì bē iau--tio̍h!",
  },
  {
    hanji: "阿爸幌頭表示無同意這件代誌。",
    tailo: "A-pah hàinn-thâu piáu-sī bô tông-ì tsit kiānn tāi-tsì.",
  },
  {
    hanji: "阿虎足愛上台唱歌，毋過逐家聽了攏幌頭。",
    tailo:
      "A-hóo tsiok ài tsiūnn-tâi tshiùnn-kua, m̄-koh ta̍k-ke thiann-liáu lóng hàinn-thâu.",
  },
  {
    hanji: "伊毋是無才情才做袂成，是有人咧共伊搝後跤。",
    tailo:
      "I m̄ sī bô tsâi-tsîng tsiah tsò bē sîng, sī ū lâng teh kā i khiú-āu-kha.",
  },
  {
    hanji: "伊驚一趒，那搭胸坎，那問講是按怎樣。",
    tailo:
      "I kiann tsi̍t tiô, ná tah hing-khám, ná mn̄g kóng sī án-tsuánn-iūnn.",
  },
  {
    hanji: "這間海產店就是搵料咧出名啦！",
    tailo: "Tsit king hái-sán-tiàm tō sī ùn-liāu teh tshut-miâ--lah!",
  },
  {
    hanji: "予槌仔摁著，會著內傷。",
    tailo: "Hōo thuî-á hmh--tio̍h, ē tio̍h lāi-siong.",
  },
  {
    hanji: "伊當咧大，一頓摁著三四碗飯。",
    tailo: "I tng-teh tuā, tsi̍t tǹg hmh tio̍h sann sì uánn pn̄g.",
  },
  {
    hanji: "拜六禮拜，伊上愛去看摃球比賽。",
    tailo: "Pài-la̍k lé-pài, i siōng ài khì khuànn kòng-kiû pí-sài.",
  },
  {
    hanji: "我細漢的時，序大人有教我用母語暗唸三字經。",
    tailo:
      "Guá sè-hàn ê sî, sī-tuā-lâng ū kà guá iōng bú-gí àm-liām Sam-jī-king.",
  },
  {
    hanji: "這幾年，一寡大公司攏時行舉辦尾牙的暗會。",
    tailo:
      "Tsit kuí nî, tsi̍t-kuá tuā kong-si lóng sî-kiânn kí-pān bué-gê ê àm-huē.",
  },
  {
    hanji: "這條巷仔看都細細狹狹，二十噸的拖車竟然駛會得過。",
    tailo:
      "Tsit tiâu hāng-á khuànn to sè-sè e̍h-e̍h, jī-tsa̍p tòng ê thua-tshia kìng-jiân sái ē-tit-kuè.",
  },
  {
    hanji: "伊一个查某人飼兩个囡仔，雖然艱苦，生活猶會得過。",
    tailo:
      "I tsi̍t ê tsa-bóo-lâng tshī nn̄g ê gín-á, sui-jiân kan-khóo, sing-ua̍h iáu ē-tit-kuè.",
  },
  {
    hanji: "這佇音韻學上完全解說會得過。",
    tailo: "Tse tī im-ūn-ha̍k siōng uân-tsuân kái-sueh ē-tit-kuè.",
  },
  {
    hanji: "你按呢對待伊，你的心肝敢會得過？",
    tailo: "Lí án-ne tuì-thāi--i, lí ê sim-kuann kám ē-tit-kuè?",
  },
  {
    hanji: "我啉咖啡，一工極加兩杯。",
    tailo: "Guá lim ka-pi, tsi̍t kang ki̍k-ke nn̄g pue.",
  },
  {
    hanji: "蠓仔會傳播疾病，毋通想講予蠓叮著，極加是足癢爾爾。",
    tailo:
      "Báng-á ē thuân-pòo tsi̍t-pēnn, m̄-thang siūnn-kóng hōo báng tìng--tio̍h, ki̍k-ke sī tsiok tsiūnn niā-niā.",
  },
  {
    hanji: "樹仔跤有真濟過路人來歇涼。",
    tailo: "Tshiū-á-kha ū tsin tsē kuè-lōo-lâng lâi hioh-liâng.",
  },
  {
    hanji: "歇睏日毋免上班，你按算欲去佗位𨑨迌？",
    tailo:
      "Hioh-khùn-ji̍t m̄-bián siōng-pan, lí àn-sǹg beh khì tó-uī tshit-thô?",
  },
  {
    hanji: "歇睏時仔伊上愛去𬦰山。",
    tailo: "Hioh-khùn-sî-á i siōng ài khì peh-suann.",
  },
  {
    hanji: "過去的代誌就按呢準拄煞。",
    tailo: "Kuè-khì ê tāi-tsì tsiū-án-ne tsún-tú-suah.",
  },
  {
    hanji: "你欲來就來，毋來準拄煞。",
    tailo: "Lí beh lâi tō lâi, m̄ lâi tsún-tú-suah.",
  },
  {
    hanji: "伊食人夠夠，欠人兩萬箍，干焦還人萬五就欲準拄煞。",
    tailo:
      "I tsia̍h-lâng-kàu-kàu, khiàm lâng nn̄g-bān khoo, kan-na hîng lâng bān-gōo tō beh tsún-tú-suah.",
  },
  {
    hanji: "討功勞的時伊搶做前，欲做苦工的時就溜旋。",
    tailo:
      "Thó kong-lô ê sî i tshiúnn tsò-tsîng, beh tsò khóo-kang ê sî tō liu-suan.",
  },
  {
    hanji: "我看著煎粿，一定會叫一盤來食。",
    tailo:
      "Guá khuànn-tio̍h tsian-kué, it-tīng ē kiò tsi̍t puânn lâi tsia̍h.",
  },
  {
    hanji: "跤後肚無細膩去焐著煙筒管。",
    tailo: "Kha-āu-tóo bô-sè-jī khì ù-tio̍h ian-tâng-kóng.",
  },
  {
    hanji: "佇遠遠的所在，就看會著臺中火力發電廠彼四支煙筒管矣。",
    tailo:
      "Tī hn̄g-hn̄g ê sóo-tsāi, tō khuànn ē tio̍h Tâi-tiong hué-li̍k huat-tiān-tshiúnn hit sì ki ian-tâng-kóng--ah.",
  },
  {
    hanji: "小可仔代誌逐家煞煞去，莫閣冤矣。",
    tailo: "Sió-khuá-á tāi-tsì ta̍k-ke suah-suah--khì, mài koh uan--ah.",
  },
  {
    hanji: "禁尿是傷身體的歹習慣，會引起腰子病。",
    tailo:
      "Kìm-jiō sī siong sin-thé ê pháinn si̍p-kuàn, ē ín-khí io-tsí-pēnn.",
  },
  {
    hanji: "我毋捌向咧揉塗跤，揉無一時仔就腰痠背疼。",
    tailo:
      "Guá m̄ bat ànn leh jiû thôo-kha, jiû bô tsi̍t-sî-á tō io-sng-puē-thiànn.",
  },
  {
    hanji: "𪜶兩个是仝腹腸生的。",
    tailo: "In nn̄g ê sī kāng pak-tn̂g senn--ê.",
  },
  {
    hanji: "伊腹腸闊，袂佮人計較。",
    tailo: "I pak-tn̂g khuah, bē kah lâng kè-kàu.",
  },
  {
    hanji: "茈雞無卵，茈囝無腹腸。",
    tailo: "Tsínn ke bô nn̄g, tsínn kiánn bô pak-tn̂g.",
  },
  {
    hanji: "工夫是萬丈深坑，一世人嘛學袂透。",
    tailo: "Kang-hu sī bān-tn̄g-tshim-khenn, tsi̍t-sì-lâng mā o̍h bē thàu.",
  },
  {
    hanji: "食老嘛著儉寡錢銀，萬不幸若破病，才有通去予醫生看。",
    tailo:
      "Tsia̍h-lāu mā tio̍h khiām kuá tsînn-gîn, bān-put-hīng nā phuà-pēnn, tsiah ū thang khì hōo i-sing khuànn.",
  },
  {
    hanji: "欲落山著冗早，若開始罩雺，看袂著路就危險。",
    tailo:
      "Beh lo̍h-suann tio̍h liōng-tsá, nā khai-sí tà-bông, khuànn bē tio̍h lōo tō guî-hiám.",
  },
  {
    hanji: "大貨車敢會當入去巷仔底落貨？",
    tailo: "Tuā huè-tshia kám ē-tàng ji̍p-khì hāng-á-té lo̍h-huè?",
  },
  {
    hanji: "我規塊歌攏唱甲誠好，結果上尾句煞必叉，有夠落漆！",
    tailo:
      "Guá kui tè kua lóng tshiùnn kah tsiânn hó, kiat-kó siōng-bué kù suah pit-tshe, ū-kàu lak-tshat!",
  },
  {
    hanji: "照咱的例，囡仔佇五月節的時愛挂香芳。",
    tailo:
      "Tsiàu lán ê lē, gín-á tī Gōo-gue̍h-tseh ê sî ài kuì hiunn-phang.",
  },
  {
    hanji: "家己的工課拖甲欲袂赴矣才欲哭賴人是袂使得喔！",
    tailo:
      "Ka-kī ê khang-khuè thua kah beh bē-hù--ah tsiah beh khàu-luā--lâng sī bē-sái--tit--ooh!",
  },
  {
    hanji: "我會當有今仔日的成就，著愛感謝當初時恩情人的牽成。",
    tailo:
      "Guá ē-tàng ū kin-á-ji̍t ê sîng-tsiū, tio̍h-ài kám-siā tong-tshe-sî un-tsîng-lâng ê khan-sîng.",
  },
  {
    hanji: "五日節舉辦扒龍船比賽，來看鬧熱的民眾挨挨陣陣，人插插插。",
    tailo:
      "Gōo-ji̍t-tseh kí-pān pê-lîng-tsûn pí-sài, lâi khuànn lāu-jia̍t ê bîn-tsiòng e-e-tīn-tīn, lâng tshah-tshah-tshah.",
  },
  {
    hanji: "這箍浮浪貢，食飯食碗公，做工課閃西風。",
    tailo:
      "Tsit khoo phû-lōng-kòng, tsia̍h-pn̄g tsia̍h uánn-kong, tsò khang-khuè siám sai-hong.",
  },
  {
    hanji: "柑仔蜜欲食的時，蒂頭愛捻起來。",
    tailo: "Kam-á-bi̍t beh tsia̍h ê sî, tì-thâu ài liàm--khí-lâi.",
  },
  {
    hanji: "蔗尾拍結做號頭，千萬毋通敨。",
    tailo: "Tsià-bué phah-kat tsò hō-thâu, tshian-bān m̄-thang tháu.",
  },
  {
    hanji: "若欲聚集會眾，恁著歕號頭，總是毋通傷大聲。",
    tailo:
      "Nā beh tsū-tsi̍p huē-tsiòng, lín tio̍h pûn hō-thâu, tsóng--sī m̄-thang siunn tuā-siann.",
  },
  {
    hanji: "連鞭寒，連鞭熱，蜂蝦生真少。",
    tailo: "Liâm-mi kuânn, liâm-mi jua̍h, phang-hê senn tsin tsió.",
  },
  {
    hanji: "媽祖廟埕的榕仔跤不時有老大人坐佇遐話仙。",
    tailo:
      "Má-tsóo-biō-tiânn ê tshîng-á-kha put-sî ū lāu-tuā-lâng tsē tī hia uē-sian.",
  },
  {
    hanji: "伊真詼諧，真濟人愛佮伊鬥陣。",
    tailo: "I tsin khue-hâi, tsin tsē lâng ài kah i tàu-tīn.",
  },
  {
    hanji: "尾牙有的公司辦桌請員工，攏愛倩𠢕詼諧的歌星來鬥鬧熱。",
    tailo:
      "Bué-gê ū ê kong-si pān-toh tshiánn uân-kang, lóng ài tshiànn gâu khue-hâi ê kua-tshenn lâi tàu-lāu-jia̍t.",
  },
  {
    hanji: "不時走便所，專是你的詼諧。",
    tailo: "Put-sî tsáu piān-sóo, tsuan sī lí ê khue-hâi.",
  },
  {
    hanji: "我𬦰樓梯無細膩，靠著跤胴，疼甲欲死！",
    tailo:
      "Guá peh lâu-thui bô-sè-jī, khò-tio̍h kha-tâng, thiànn kah beh-sí!",
  },
  {
    hanji: "路草無熟，毋通𤆬人𬦰山。",
    tailo: "Lōo-tsháu bô si̍k, m̄-thang tshuā lâng peh-suann.",
  },
  {
    hanji: "伊是過鹹水的，加捌真濟代誌。",
    tailo: "I sī kuè-kiâm-tsuí--ê, ke bat tsin tsē tāi-tsì.",
  },
  {
    hanji: "伊規身軀的穿插攏是過鹹水的。",
    tailo: "I kui-sin-khu ê tshīng-tshah lóng sī kuè-kiâm-tsuí--ê.",
  },
  {
    hanji: "我干焦欲蹛一暝爾爾，隔工我就欲走矣。",
    tailo:
      "Guá kan-na beh tuà tsi̍t mê niā-niā, keh-kang guá tō beh tsáu--ah.",
  },
  {
    hanji: "稻仔飽漿，今年一定大收。",
    tailo: "Tiū-á pá-tsiunn, kin-nî it-tīng tuā-siu.",
  },
  {
    hanji: "伊食暗頓的時，攏會嗺一下。",
    tailo: "I tsia̍h àm-tǹg ê sî, lóng ē sui--tsi̍t-ē.",
  },
  {
    hanji: "寢頭伊講好欲來，到落尾又閣毋來。",
    tailo: "Tshím-thâu i kóng-hó beh lâi, kàu lo̍h-bué iū-koh m̄ lâi.",
  },
  {
    hanji: "代誌攏予你講甲對同仔對同。",
    tailo: "Tāi-tsì lóng hōo lí kóng kah tuì-tâng-á-tuì-tâng.",
  },
  {
    hanji: "我愈看愈無對同，恐驚是騙局。",
    tailo: "Guá jú khuànn jú bô tuì-tâng, khióng-kiann sī phiàn-kio̍k.",
  },
  {
    hanji: "毋通傷對重學歷，著對重學習能力較實在。",
    tailo:
      "M̄-thang siunn tuì-tiōng ha̍k-li̍k, tio̍h tuì-tiōng ha̍k-si̍p lîng-li̍k khah si̍t-tsāi.",
  },
  {
    hanji: "我想講伊有做，伊也掠準我會做，雙方煞對頭誤。",
    tailo:
      "Guá siūnn-kóng i ū tsò, i iā lia̍h-tsún guá ē tsò, siang-hong suah tuì-thâu-gōo.",
  },
  {
    hanji: "伊話講煞，隨越頭做伊去摔大眠。",
    tailo: "I uē kóng-suah, suî ua̍t-thâu tsò i khì siàng-tuā-bîn.",
  },
  {
    hanji: "歌仔冊是臺灣俗文學的寶藏。",
    tailo: "Kua-á-tsheh sī Tâi-uân sio̍k-bûn-ha̍k ê pó-tsōng.",
  },
  {
    hanji: "早前歌仔先常在去廟埕唸歌。",
    tailo: "Tsá-tsîng kua-á-sian tshiâng-tsāi khì biō-tiânn liām-kua.",
  },
  {
    hanji: "這明明是滸苔，你硬欲死諍是頭毛菜。",
    tailo:
      "Tse bîng-bîng sī hóo-thî, lí ngē beh sí-tsènn sī thâu-mn̂g-tshài.",
  },
  {
    hanji: "這古董予你看做漚古物！",
    tailo: "Tse kóo-tóng hōo lí khuànn-tsò àu-kóo mi̍h!",
  },
  {
    hanji: "跤球比賽著照君子步數，袂使出漚步來害人著傷。",
    tailo:
      "Kha-kiû pí-sài tio̍h tsiàu kun-tsú pōo-sòo, bē-sái tshut àu-pōo lâi hāi lâng tio̍h-siong.",
  },
  {
    hanji: "一寡八點檔的連續劇，拄開始真精彩，路尾就漚戲拖棚。",
    tailo:
      "Tsi̍t-kuá peh-tiám-tóng ê liân-sio̍k-kio̍k, tú-khai-sí tsin tsing-tshái, lōo-bué tō àu-hì-thua-pênn.",
  },
  {
    hanji: "彼个部長嚴重失職，煞毋肯落台負責，佇遐咧漚戲拖棚。",
    tailo:
      "Hit ê pōo-tiúnn giâm-tiōng sit-tsit, suah m̄ khíng lo̍h-tâi hū-tsik, tī hia teh àu-hì-thua-pênn.",
  },
  {
    hanji: "佇臺灣，漳泉濫已經真普遍，四界攏聽會著。",
    tailo:
      "Tī Tâi-uân, Tsiang-Tsuân-lām í-king tsin phóo-phiàn, sì-kè lóng thiann ē tio̍h.",
  },
  {
    hanji: "阮孫誠有粿路，甜的、鹹的伊攏好。",
    tailo: "Guán sun tsiânn ū kué-lōo, tinn--ê, kiâm--ê i lóng hó.",
  },
  {
    hanji: "伊的人真綿精，一仙五厘也佮人算甲到。",
    tailo:
      "I ê lâng tsin mî-tsinn, tsi̍t sián gōo lî iā kah lâng sǹg kah kàu.",
  },
  {
    hanji: "伊彼步咧做較緊氣，你毋小學一下？",
    tailo: "I hit pōo teh tsò khah kín-khuì, lí m̄ sió o̍h--tsi̍t-ē?",
  },
  {
    hanji: "你定定愛家己一个走去無救生員的海邊泅水，緊縒慢會出代誌。",
    tailo:
      "Lí tiānn-tiānn ài ka-kī tsi̍t ê tsáu-khì bô kiù-sing-uân ê hái-pinn siû-tsuí, kín-tsua̍h-bān ē tshut-tāi-tsì.",
  },
  {
    hanji: "進口的蘋果通常攏有蓋蠟。",
    tailo: "Tsìn-kháu ê phông-kó thong-siông lóng ū kài-la̍h.",
  },
  {
    hanji: "愛先學咱的母語，才閣認捌別種的話語。",
    tailo:
      "Ài sing o̍h lán ê bú-gí, tsiah-koh jīn-bat pa̍t tsióng ê uē-gí.",
  },
  {
    hanji: "你趖跤趖手，排路邊擔仔無合啦。",
    tailo: "Lí sô-kha-sô-tshiú, pâi lōo-pinn-tànn-á bô ha̍h--lah.",
  },
  {
    hanji: "囡仔墜腸，有的家己會好去，大部份攏愛去開刀治療。",
    tailo:
      "Gín-á tuī-tiông, ū ê ka-kī ē hó--khì, tuā-pōo-hūn lóng ài khì khui-to tī-liâu.",
  },
  {
    hanji: "這塊桌仔共撨徙去彼爿倚壁。",
    tailo: "Tsit tè toh-á kā tshiâu-suá-khì hit pîng uá-piah.",
  },
  {
    hanji: "校長步頻是開車來上班的，今仔日哪會騎鐵馬來學校？",
    tailo:
      "Hāu-tiúnn pōo-pîn sī khui-tshia lâi siōng-pan--ê, kin-á-ji̍t ná ē khiâ thih-bé lâi ha̍k-hāu?",
  },
  {
    hanji: "阿公步頻毋捌攑筆，欲叫伊寫批，是並攑鋤頭較食力喔！",
    tailo:
      "A-kong pōo-pîn m̄ bat gia̍h pit, beh kiò i siá phue, sī phīng gia̍h tî-thâu khah tsia̍h-la̍t--ooh!",
  },
  {
    hanji: "步頻欲叫我做編輯的工課，我做無路來。",
    tailo:
      "Pōo-pîn beh kiò guá tsò pian-tsi̍p ê khang-khuè, guá tsò bô-lōo-lâi.",
  },
  {
    hanji: "早前槺榔是做掃帚的主要材料。",
    tailo: "Tsá-tsîng khong-lông sī tsò sàu-tshiú ê tsú-iàu tsâi-liāu.",
  },
  {
    hanji: "這个地名按怎來的，已經無才調稽考矣。",
    tailo:
      "Tsit ê tē-miâ án-tsuánn lâi--ê, í-king bô tsâi-tiāu khe-khó--ah.",
  },
  {
    hanji: "家己管教好，毋驚別人來稽考。",
    tailo: "Ka-kī kuán-kà hó, m̄ kiann pa̍t-lâng lâi khe-khó.",
  },
  {
    hanji: "伊有共咱坐毋著就好，過去的代誌莫閣稽考矣。",
    tailo:
      "I ū kā lán tshē-m̄-tio̍h tō hó, kuè-khì ê tāi-tsì mài koh khe-khó--ah.",
  },
  {
    hanji: "蓮花頭窒咧，著愛清清咧。",
    tailo: "Liân-hue-thâu that--leh, tio̍h-ài tshing-tshing--leh.",
  },
  {
    hanji: "我去臺南，攏會去買蝦卷來食。",
    tailo: "Guá khì Tâi-lâm, lóng ē khì bé hê-kńg lâi tsia̍h.",
  },
  {
    hanji: "蝦蛄頭食起來無較輸龍蝦。",
    tailo: "Hê-koo-thâu tsia̍h--khí-lâi bô khah-su lîng-hê.",
  },
  {
    hanji: "囡仔少歲較袂曉，請你諒情。",
    tailo: "Gín-á tsió-huè khah bē-hiáu, tshiánn lí liōng-tsîng.",
  },
  {
    hanji: "論真來講，你嘛有毋著，著共伊會失禮。",
    tailo: "Lūn-tsin lâi kóng, lí mā ū m̄-tio̍h, tio̍h kā i huē-sit-lé.",
  },
  {
    hanji: "趁閬雨縫，我欲先來去矣。",
    tailo: "Thàn làng hōo-phāng, guá beh sing lâi-khì--ah.",
  },
  {
    hanji: "便若拄著戰爭，有錢人攏先閬港。",
    tailo:
      "Piān-nā tú-tio̍h tsiàn-tsing, ū-tsînn-lâng lóng sing làng-káng.",
  },
  {
    hanji: "我叫阮囝共我鬥顧擔，伊煞閬港去佮人撞球。",
    tailo:
      "Guá kiò guán kiánn kā guá tàu kòo-tànn, i suah làng-káng khì kah lâng tōng-kiû.",
  },
  {
    hanji: "果子若靠傷，就賣較無價。",
    tailo: "Kué-tsí nā khò-siong, tō bē khah bô-kè.",
  },
  {
    hanji: "蔥仔著愛駐水才會較鮮脆。",
    tailo: "Tshang-á tio̍h-ài tū-tsuí tsiah ē khah tshinn-tshè.",
  },
  {
    hanji: "溝仔窒牢咧，較加嘛會駐水。",
    tailo: "Kau-á that-tiâu--leh, khah-ke mā ē tū-tsuí.",
  },
  {
    hanji: "逐家相招來弄獅，大鑼大鼓鬧猜猜。",
    tailo:
      "Ta̍k-ke sio-tsio lâi lāng-sai, tuā-lô tuā-kóo nāu-tshai-tshai.",
  },
  {
    hanji: "傳統嫁娶愛點燈結綵，親情朋友來祝賀，規廳堂鬧猜猜。",
    tailo:
      "Thuân-thóng kè-tshuā ài tiám ting kat-tshái, tshin-tsiânn pîng-iú lâi tsiok-hō, kui thiann-tn̂g nāu-tshai-tshai.",
  },
  {
    hanji: "三噸半的貨車扣除車身重量，會使載大約一千五百公斤的貨。",
    tailo:
      "Sann tòng puànn ê huè-tshia khàu-tû tshia-sin tāng-liōng, ē-sái tsài tāi-iok tsi̍t-tshing gōo-pah kong-kin ê huè.",
  },
  {
    hanji: "看見樹梅，就會止喙焦。",
    tailo: "Khuànn-kìnn tshiū-m̂, tō ē tsí tshuì-ta.",
  },
  {
    hanji: "激骨話刁工共話意藏佇話裡，予聽的人去掠話骨。",
    tailo:
      "Kik-kut-uē thiau-kang kā uē-ì tshàng tī uē--lí, hōo thiann ê lâng khì lia̍h uē-kut.",
  },
  {
    hanji: "人一下衰，燃水也焦鍋。",
    tailo: "Lâng tsi̍t-ē sue, hiânn-tsuí iā ta ue.",
  },
  {
    hanji: "除了竹仔佮七里香以外，燈仔花嘛是上捷種來做籬笆的樹仔。",
    tailo:
      "Tû-liáu tik-á kah tshit-lí-hiong í-guā, ting-á-hue mā sī siōng tsia̍p tsìng-lâi tsò lî-pa ê tshiū-á.",
  },
  {
    hanji: "伊發燒，頭殼摸著燒烘烘。",
    tailo: "I huat-sio, thâu-khak bong tio̍h sio-hōng-hōng.",
  },
  {
    hanji: "包仔拄炊好的，猶燒唿唿。",
    tailo: "Pau-á tú tshue-hó--ê, iáu sio-hut-hut.",
  },
  {
    hanji: "浸溫泉起來，規身軀燒唿唿。",
    tailo: "Tsìm un-tsuânn khí--lâi, kui-sin-khu sio-hut-hut.",
  },
  {
    hanji: "立冬燖補，共序大人侹身體。",
    tailo: "Li̍p-tang tīm-póo, kā sī-tuā-lâng thiānn sin-thé.",
  },
  {
    hanji: "這馬真少用磚仔起厝，磚仔窯一間仔一間攏關起來矣。",
    tailo:
      "Tsit-má tsin tsió īng tsng-á khí-tshù, tsng-á-iô tsi̍t-king-á-tsi̍t-king lóng kuainn--khí-lâi--ah.",
  },
  {
    hanji: "一个起酒痟的烏白拍人，予人縛跤縛手，袂振袂動。",
    tailo:
      "Tsi̍t ê khí-tsiú-siáu--ê oo-pe̍h phah--lâng, hōo lâng pa̍k-kha-pa̍k-tshiú, bē-tín-bē-tāng.",
  },
  {
    hanji: "這个贊助廠商有私心，共導演縛跤縛手，害伊袂當照理想去拍片。",
    tailo:
      "Tsit ê tsàn-tsōo tshiúnn-siong ū su-sim, kā tō-ián pa̍k-kha-pa̍k-tshiú, hāi i bē-tàng tsiàu lí-sióng khì phah-phìnn.",
  },
  {
    hanji: "連參詳一下都無通，閣欲講東講西，你實在真聬儱。",
    tailo:
      "Liân tsham-siông--tsi̍t-ē to bô thang, koh beh kóng-tang-kóng-sai, lí si̍t-tsāi tsin áng-láng.",
  },
  {
    hanji: "伊較講都講袂翻捙，有夠聬儱。",
    tailo: "I khah kóng to kóng bē-huan-tshia, ū-kàu áng-láng.",
  },
  {
    hanji: "交秋的時粉鳥就會褪毛。",
    tailo: "Kau-tshiu ê sî hún-tsiáu tō ē thǹg-mn̂g.",
  },
  {
    hanji: "古早人講：「姑表相伨，親疊親。」這馬袂使矣。",
    tailo:
      "Kóo-tsá-lâng kóng, “Koo-piáu sio-thīn, tshin-tha̍h-tshin.” Tsit-má  bē-sái--ah.",
  },
  {
    hanji: "救蟲，賴賴趖；救人，無功勞。",
    tailo: "Kiù thâng, luā-luā-sô; kiù lâng, bô kong-lô.",
  },
  {
    hanji: "伊予人𤆬歹去，不時走學，佇外口賴賴趖。",
    tailo:
      "I hōo lâng tshuā-pháinn--khì, put-sî tsáu-o̍h, tī guā-kháu luā-luā-sô.",
  },
  {
    hanji: "伊定定去杉仔行抔鋸屑烌轉來燃。",
    tailo: "I tiānn-tiānn khì sam-á-hâng put kì-sut-hu tńg-lâi hiânn.",
  },
  {
    hanji: "較算，也是賰一條錢貫。",
    tailo: "Khah sǹg, iā sī tshun tsi̍t tiâu tsînn-kǹg.",
  },
  {
    hanji: "無你是錢貫喔？一仙五厘都袂出得！",
    tailo: "Bô lí sī tsînn-kǹg--ooh? Tsi̍t sián gōo lî to bē-tshut--tit!",
  },
  {
    hanji: "見若拜六，伊就走去踮沬。",
    tailo: "Kiàn-nā pài-la̍k, i tō tsáu-khì tiàm-bī.",
  },
  {
    hanji: "煮菜進前，著愛先擇菜。",
    tailo: "Tsú tshài tsìn-tsîng, tio̍h-ài sing to̍h tshài.",
  },
  {
    hanji: "隔壁歕燈火，佮你無底代。",
    tailo: "Keh-piah pûn ting-hué, kah lí bô-tī-tāi.",
  },
  {
    hanji: "厝邊咧凌治某囝，咱著通報一一三專線，毋通想講佮咱無底代。",
    tailo:
      "Tshù-pinn teh lîng-tī bóo-kiánn, lán tio̍h thong-pò it it sam tsuan-suànn, m̄-thang siūnn-kóng kah lán bô-tī-tāi.",
  },
  {
    hanji: "伊是咱工會的頭兄，對外的重大事件攏央伊出頭處理。",
    tailo:
      "I sī lán kang-huē ê thâu-hiann, tuì guā ê tiōng-tāi sū-kiānn lóng iang i tshut-thâu tshú-lí.",
  },
  {
    hanji: "我買一支手機仔八千，煞著開萬二箍去修理，真正是頭較大身。",
    tailo:
      "Guá bé tsi̍t ki tshiú-ki-á peh-tshing, suah tio̍h khai bān-jī khoo khì siu-lí, tsin-tsiànn sī thâu-khah-tuā-sin.",
  },
  {
    hanji: "這件代誌予伊舞甲按呢，有影是頭較大身，歹收尾喔！",
    tailo:
      "Tsit kiānn tāi-tsì hōo i bú kah án-ne, ū-iánn sī thâu-khah-tuā-sin, pháinn siu-bué--ooh!",
  },
  {
    hanji: "遮的蓮霧攏是頭篩仔，寄予行口賣，價數一定誠好。",
    tailo:
      "Tsia-ê lián-bū lóng sī thâu-thai-á, kià hōo hâng-kháu bē, kè-siàu it-tīng tsiânn hó.",
  },
  {
    hanji: "頷頸珠是查埔人才有的。",
    tailo: "Ām-kún-tsu sī tsa-poo-lâng tsiah ū--ê.",
  },
  {
    hanji: "阿榮當咧轉大人，講話鴨雄仔聲。",
    tailo: "A-îng tng-teh tńg-tuā-lâng, kóng-uē ah-hîng-á-siann.",
  },
  {
    hanji: "這个人客龜龜鱉鱉，買一種物件轉來換三逝。",
    tailo:
      "Tsit ê lâng-kheh ku-ku-pih-pih, bé tsi̍t tsióng mi̍h-kiānn tńg-lâi uānn sann tsuā.",
  },
  {
    hanji: "伊最近變甲龜龜鱉鱉，問伊按怎，閣吞吞吐吐，毋知咧變啥魍。",
    tailo:
      "I tsuè-kīn piàn kah ku-ku-pih-pih, mn̄g i án-tsuánn, koh thun-thun-thòo-thòo, m̄ tsai teh pìnn-siánn-báng.",
  },
  {
    hanji: "近來真䆀氣，凡事著愛較細膩咧。",
    tailo: "Kīn-lâi tsin bái-khuì, huân-sū tio̍h-ài khah sè-jī--leh.",
  },
  {
    hanji: "下昏真䆀氣，拍麻雀一直放銃。",
    tailo: "E-hng tsin bái-khuì, phah-muâ-tshiok it-ti̍t pàng-tshìng.",
  },
  {
    hanji: "我若做彼種代誌，後擺出門毋就愛戴小鬼仔殼。",
    tailo:
      "Guá nā tsò hit tsióng tāi-tsì, āu-pái tshut-mn̂g m̄-tō ài tì siáu-kuí-á-khak.",
  },
  {
    hanji: "伊戴小鬼仔殼咧做人，喙無迵心肝，袂信用得。",
    tailo:
      "I tì siáu-kuí-á-khak teh tsò-lâng, tshuì bô thàng sim-kuann, bē-sìn-iōng--tit.",
  },
  {
    hanji: "遐圍一簇人，毋知咧創啥？",
    tailo: "Hia uî tsi̍t tshok lâng, m̄ tsai teh tshòng siannh?",
  },
  {
    hanji: "阮總的透早先來巡工廠，了後才去拜訪客戶。",
    tailo:
      "Guán tsóng--ê thàu-tsá sing lâi sûn kang-tshiúnn, liáu-āu tsiah khì pài-hóng kheh-hōo.",
  },
  {
    hanji: "臨時臨曜，我哪有遐濟錢通借你？",
    tailo: "Lîm-sî-lîm-iāu, guá ná ū hiah tsē tsînn thang tsioh--lí?",
  },
  {
    hanji: "外地的朋友來相揣，我𤆬伊出去附近四界蹓蹓咧。",
    tailo:
      "Guā-tē ê pîng-iú lâi sio-tshuē, guá tshuā i tshut-khì hù-kīn sì-kè lau-lau--leh.",
  },
  {
    hanji: "香林隱痀橋是阿里山的新八景之一。",
    tailo: "Hiong-lîm ún-ku-kiô sī A-lí-san ê sin pat kíng tsi it.",
  },
  {
    hanji: "你若看伊做了毋著，著共伊點拄一下。",
    tailo: "Lí nā khuànn i tsò liáu m̄-tio̍h, tio̍h kā i tiám-tuh--tsi̍t-ē.",
  },
  {
    hanji: "好事來，歹事煞，觀音佛祖來擺撥。",
    tailo: "Hó-sū lâi, pháinn-sū suah, Kuan-im-pu̍t-tsóo lâi pái-puah.",
  },
  {
    hanji: "朋友財務有困難，逐家相擺撥一下。",
    tailo: "Pîng-iú tsâi-bū ū khùn-lân, ta̍k-ke sio-pái-puah--tsi̍t-ē.",
  },
  {
    hanji: "舊底阮無熟似，舊年才相捌。",
    tailo: "Kū-té guán bô si̍k-sāi, kū-nî tsiah sio-bat.",
  },
  {
    hanji: "伊舊底佇金仔店食頭路。",
    tailo: "I kū-té tī kim-á-tiàm tsia̍h-thâu-lōo.",
  },
  {
    hanji: "伊的舊症頭又閣夯起來矣。",
    tailo: "I ê kū-tsìng-thâu iū-koh giâ--khí-lâi--ah.",
  },
  {
    hanji: "薰觳仔滇矣，著清清咧。",
    tailo: "Hun-khok-á tīnn--ah, tio̍h tshing-tshing--leh.",
  },
  {
    hanji: "警方推測這件命案可能有幕後的藏鏡人。",
    tailo:
      "Kíng-hong thui-tshik tsit kiānn miā-àn khó-lîng ū bōo-āu ê tsông-kiànn-jîn.",
  },
  {
    hanji: "伊這站仔因為胃破空手術，當咧蹛院。",
    tailo:
      "I tsit-tsām-á in-uī uī-phuà-khang tshiú-su̍t, tng-teh tuà-īnn.",
  },
  {
    hanji: "新的總經理真𠢕轉錢空，順利解決公司的財務危機。",
    tailo:
      "Sin ê tsóng-king-lí tsin gâu tńg-tsînn-khang, sūn-lī kái-kuat kong-si ê tsâi-bū guî-ki.",
  },
  {
    hanji: "雜貨仔店的生理攏去予大賣場搶去矣。",
    tailo:
      "Tsa̍p-huè-á-tiàm ê sing-lí lóng khì hōo tuā-bē-tiûnn tshiúnn--khì--ah.",
  },
  {
    hanji: "話講了傷離經，會予人笑。",
    tailo: "Uē kóng liáu siunn lī-king, ē hōo lâng tshiò.",
  },
  {
    hanji: "一千箍的貨刣甲賰三百，傷離經啦！",
    tailo:
      "Tsi̍t-tshing khoo ê huè thâi kah tshun sann-pah, siunn lī-king--lah!",
  },
  {
    hanji: "這過做風颱，真濟田園攏予大水淹去，作穡人誠離經。",
    tailo:
      "Tsit-kuè tsò-hong-thai, tsin tsē tshân-hn̂g lóng hōo tuā-tsuí im--khì, tsoh-sit-lâng tsiânn lī-king.",
  },
  {
    hanji: "神明生欲到進前，爐主著愛去家己庄仔內的每一口灶題緣金。",
    tailo:
      "Sîn-bîng-senn beh kàu tsìn-tsîng, lôo-tsú tio̍h-ài khì ka-kī tsng-á-lāi ê muí tsi̍t kháu-tsàu tê-iân-kim.",
  },
  {
    hanji: "伊做代誌懵膽懵膽，咱著閣替伊收尾。",
    tailo:
      "I tsò tāi-tsì bòng-tánn-bòng-tánn, lán tio̍h koh thè i siu-bué.",
  },
  {
    hanji: "藥頭兩碗水煎做八分就好。",
    tailo: "Io̍h-thâu nn̄g uánn tsuí tsuann-tsò peh hun tō hó.",
  },
  {
    hanji: "鏨頭短命，莫掠我金金相啦。",
    tailo: "Tsām-thâu-té-miā, mài lia̍h guá kim-kim-siòng--lah.",
  },
  {
    hanji: "囡仔佇動物園看著麒麟鹿，就歡喜甲跳起來。",
    tailo:
      "Gín-á tī tōng-bu̍t-hn̂g khuànn-tio̍h kî-lîn-lo̍k, tō huann-hí kah thiàu--khí-lâi.",
  },
  {
    hanji: "熱人蠓仔厚，著用蠓仔薰來趕蠓。",
    tailo: "Jua̍h--lâng báng-á kāu, tio̍h īng báng-á-hun lâi kuánn báng.",
  },
  {
    hanji: "就是有鹹酸苦汫，才會當體會人生的滋味。",
    tailo:
      "Tō sī ū kiâm-sng-khóo-tsiánn, tsiah ē-tàng thé-huē jîn-sing ê tsu-bī.",
  },
  {
    hanji: "毋通攑香綴拜，予人牽咧烏白踅。",
    tailo: "M̄-thang gia̍h-hiunn-tuè-pài, hōo lâng khan leh oo-pe̍h se̍h.",
  },
  {
    hanji: "大腳數共攑旗軍仔借錢。",
    tailo: "Tuā kioh-siàu kā gia̍h-kî-kun-á tsioh tsînn.",
  },
  {
    hanji: "熱人豬哥愛灇水，才袂熱著。",
    tailo: "Jua̍h--lâng ti-ko ài tsâng-tsuí, tsiah bē jua̍h--tio̍h.",
  },
  {
    hanji: "青春期的囡仔較會生爛𤶃仔，面愛洗予清氣。",
    tailo:
      "Tshing-tshun-kî ê gín-á khah ē senn nuā-thiāu-á, bīn ài sé hōo tshing-khì.",
  },
  {
    hanji: "早前若致著癩𰣻病，無藥醫。",
    tailo: "Tsá-tsîng nā tì-tio̍h thái-ko-pēnn, bô io̍h i.",
  },
  {
    hanji: "暗時路燈跤癩𰣻蛾仔颺颺飛。",
    tailo: "Àm-sî lōo-ting-kha thái-ko-ia̍h-á iānn-iānn-pue.",
  },
  {
    hanji: "這隻雞豚仔咧欲起𪁎矣。",
    tailo: "Tsit tsiah ke-thûn-á teh-beh khí-tshio--ah.",
  },
  {
    hanji: "釘毋著所在的鐵釘仔著用鐵釘挽挽起來。",
    tailo:
      "Tìng m̄-tio̍h sóo-tsāi ê thih-ting-á tio̍h īng thih-ting-bán bán--khí-lâi.",
  },
  {
    hanji: "厝頂崁鐵鉼，熱人會傷熱。",
    tailo: "Tshù-tíng khàm thih-phiánn, jua̍h--lâng ē siunn jua̍h.",
  },
  {
    hanji: "石頭傷大粒，著用鐵撬才撬會起來。",
    tailo:
      "Tsio̍h-thâu siunn tuā lia̍p, tio̍h īng thih-kiāu tsiah kiāu ē khí--lâi.",
  },
  {
    hanji: "弓蕉當貴，無倩人來園裡顧暝袂使得。",
    tailo:
      "King-tsio tng kuì, bô tshiànn lâng lâi hn̂g--lí kòo-mê bē-sái--tit.",
  },
  {
    hanji: "昨暝輪著我顧暝，下早仔著愛補眠。",
    tailo: "Tsa-mê lûn-tio̍h guá kòo-mê, e-tsái-á tio̍h-ài póo-bîn.",
  },
  {
    hanji: "弓蕉去予風颱掃倒了了，咱著較儼硬咧，重來。",
    tailo:
      "King-tsio khì hōo hong-thai sàu-tó-liáu-liáu, lán tio̍h khah giám-ngē--leh, tîng-lâi.",
  },
  {
    hanji: "我老罔老，跤手猶真儼硬。",
    tailo: "Guá lāu bóng lāu, kha-tshiú iáu tsin giám-ngē.",
  },
  {
    hanji: "有話聽好講，毋通囥佇心肝內。",
    tailo: "Ū uē thìng-hó kóng, m̄-thang khǹg tī sim-kuann-lāi.",
  },
  {
    hanji: "手去洗洗咧，聽好食飯。",
    tailo: "Tshiú khì sé-sé--leh, thìng-hó tsia̍h-pn̄g.",
  },
  {
    hanji: "無聊的時陣，就來變工藝。",
    tailo: "Bô-liâu ê sî-tsūn, tō lâi pìnn-kang-gē.",
  },
  {
    hanji: "逐家攏真無閒，干焦你咧變工藝，按呢敢會使得？",
    tailo:
      "Ta̍k-ke lóng tsin bô-îng, kan-na lí teh pìnn-kang-gē, án-ne kám ē-sái--tit?",
  },
  {
    hanji: "一人占一項，閒閒罔變弄。",
    tailo: "Tsi̍t lâng tsiàm tsi̍t hāng, îng-îng bóng pìnn-lāng.",
  },
  {
    hanji: "一粒好好的錶仔變弄甲害害去。",
    tailo: "Tsi̍t lia̍p hó-hó ê pió-á pìnn-lāng kah hāi-hāi--khì.",
  },
  {
    hanji: "較早伊定定出去拍球，最近煞變相，毋愛出門。",
    tailo:
      "Khah-tsá i tiānn-tiānn tshut-khì phah-kiû, tsuè-kīn suah piàn-siòng, m̄ ài tshut-mn̂g.",
  },
  {
    hanji: "伊鬼鬼祟祟，毋知閣欲變啥魍矣。",
    tailo: "I kuí-kuí-suī-suī, m̄ tsai koh beh pìnn-siánn-báng--ah.",
  },
  {
    hanji: "現代人買物件的時，真濟人是用鑢卡的。",
    tailo:
      "Hiān-tāi-lâng bé mi̍h-kiānn ê sî, tsin tsē lâng sī īng lù-khah--ê.",
  },
  {
    hanji: "彼領衫殕殕，這領較豔色。",
    tailo: "Hit niá sann phú-phú, tsit niá khah iām-sik.",
  },
  {
    hanji: "鹽桑仔大出的時，挽袂赴，落甲規塗跤。",
    tailo: "Iâm-sng-á tuā-tshut ê sî, bán bē-hù, lak kah kui thôo-kha.",
  },
  {
    hanji: "鹽酸仔足臭賤的，真𠢕生湠。",
    tailo: "Iâm-sng-á tsiok tshàu-tsiān--ê, tsin gâu senn-thuànn.",
  },
  {
    hanji: "你是阿榮喔！歹勢，我真戇目。",
    tailo: "Lí sī A-îng--ooh! Pháinn-sè, guá tsin gōng-ba̍k.",
  },
  {
    hanji: "彼間餐廳，椅桌、塗跤一四界𣻸塌塌，真無衛生。",
    tailo:
      "Hit king tshan-thiann, í-toh, thôo-kha tsi̍t-sì-kè siûnn-lap-lap, tsin bô uē-sing.",
  },
  {
    hanji: "這幾日雨澹水滴，路不時攏𣻸塌塌。",
    tailo:
      "Tsit kuí ji̍t hōo-tâm-tsuí-tih, lōo put-sî lóng siûnn-lap-lap.",
  },
  {
    hanji: "下昏我有一个食飯會，無欲轉去食暗矣。",
    tailo:
      "E-hng guá ū tsi̍t ê tsia̍h-pn̄g-huē, bô beh tńg-khì tsia̍h-àm--ah.",
  },
  {
    hanji: "阮阿媽雖然毋捌字，毋過伊講出喙的話攏是金言玉語。",
    tailo:
      "Guán a-má sui-jiân m̄ bat-jī, m̄-koh i kóng tshut-tshuì ê uē lóng sī kim-giân-gio̍k-gí.",
  },
  {
    hanji: "伊共我害甲悽慘落魄，我也袂當予伊好食睏。",
    tailo:
      "I kā guá hāi kah tshi-tshám-lo̍k-phik, guá iā bē-tàng hōo i  hó-tsia̍h-khùn.",
  },
  {
    hanji: "兄弟仔大漢著愛隨人食矣。",
    tailo: "Hiann-tī-á tuā-hàn tio̍h-ài suî-lâng-tsia̍h--ah.",
  },
  {
    hanji: "逐年寒人攏有真濟渡鳥來臺灣過冬。",
    tailo:
      "Ta̍k-nî kuânn--lâng lóng ū tsin tsē tōo-tsiáu lâi Tâi-uân kuè-tang.",
  },
  {
    hanji: "向望今年風調雨順，予咱逐家大趁錢。",
    tailo:
      "Ǹg-bāng kin-nî hong-tiâu-ú-sūn, hōo lán ta̍k-ke tuā-thàn-tsînn.",
  },
  {
    hanji: "公司一堆狗肉數，按怎掠都掠袂直。",
    tailo:
      "Kong-si tsi̍t tui káu-bah-siàu, án-tsuánn lia̍h to lia̍h bē-ti̍t.",
  },
  {
    hanji: "計程車司機足無愛落空車。",
    tailo: "Kè-thîng-tshia su-ki tsiok bô ài làu-khang-tshia.",
  },
  {
    hanji: "臺灣人予人召去南洋戰場做肉餅，真濟無轉來。",
    tailo:
      "Tâi-uân-lâng hōo lâng tiàu-khì Lâm-iûnn tsiàn-tiûnn tsò-bah-piánn, tsin tsē bô tńg--lâi.",
  },
  {
    hanji: "無代誌通做，顛倒無局。",
    tailo: "Bô tāi-tsì thang tsò, tian-tò bô-kio̍k.",
  },
  {
    hanji: "開十萬箍買這軀衫實在真無局。",
    tailo: "Khai tsa̍p-bān khoo bé tsit su sann si̍t-tsāi tsin bô-kio̍k.",
  },
  {
    hanji: "虹誠媠，毋過一時仔就無去矣。",
    tailo: "Khīng tsiânn suí, m̄-koh tsi̍t-sî-á tō bô--khì--ah.",
  },
  {
    hanji: "你先入去餐廳，我來去停車。",
    tailo: "Lí sing ji̍p-khì tshan-thiann, guá lâi-khì thîng-tshia.",
  },
  {
    hanji: "入來內面等，毋通佇外口曝日。",
    tailo: "Ji̍p-lâi lāi-bīn tán, m̄-thang tī guā-kháu pha̍k-ji̍t.",
  },
  {
    hanji: "這改的風颱，害阿伯的田園予大水流去矣。",
    tailo:
      "Tsit kái ê hong-thai, hāi a-peh ê tshân-hn̂g hōo tuā-tsuí lâu--khì--ah.",
  },
  {
    hanji: "阮大的對細漢的真照顧。",
    tailo: "Guán tuā--ê tuì sè-hàn--ê tsin tsiàu-kòo.",
  },
  {
    hanji: "伊真為家己人，所以遐的細的攏足敬重伊。",
    tailo:
      "I tsin uī ka-kī-lâng, sóo-í hia-ê sè--ê lóng tsiok kìng-tiōng--i.",
  },
  {
    hanji: "阮兜較早佇咧山內種果子。",
    tailo: "Guán tau khah-tsá tī-leh suann-lāi tsìng kué-tsí.",
  },
  {
    hanji: "伊毋講，人哪會知影伊心內咧想啥。",
    tailo: "I m̄ kóng, lâng ná ē tsai-iánn i sim-lāi teh siūnn siannh.",
  },
  {
    hanji: "你直接提去予伊毋就好矣，哪著閣用寄的？",
    tailo:
      "Lí ti̍t-tsiap the̍h-khì hōo--i m̄-tō hó--ah, ná-tio̍h koh īng kià--ê?",
  },
  {
    hanji: "以早遮是田，這馬做停車場，聽講以後欲起厝。",
    tailo:
      "Í-tsá tsia sī tshân, tsit-má tsò thîng-tshia-tiûnn, thiann-kóng í-āu beh khí-tshù.",
  },
  {
    hanji: "欲答應毋答應是出在你的意思，我袂共你干涉。",
    tailo:
      "Beh tah-ìng m̄ tah-ìng sī tshut-tsāi lí ê ì-sù, guá bē kā lí kan-sia̍p.",
  },
  {
    hanji: "看起來是大姊較巧神，小妹較頇顢。",
    tailo:
      "Khuànn--khí-lâi sī tuā-tsí khah khiáu-sîn, sió-muē khah hân-bān.",
  },
  {
    hanji: "我的目尾開始有皺痕矣。",
    tailo: "Guá ê ba̍k-bué khai-sí ū jiâu-hûn--ah.",
  },
  {
    hanji: "伊毋敢直接看，干焦用目尾偷䀐。",
    tailo: "I m̄ kánn ti̍t-tsiap khuànn, kan-na iōng ba̍k-bué thau siam.",
  },
  {
    hanji: "無閒遮久矣，你著好好仔歇睏。",
    tailo: "Bô-îng tsiah kú--ah, lí tio̍h hó-hó-á hioh-khùn.",
  },
  {
    hanji: "人攏講伊食好做輕可，實在真好命。",
    tailo:
      "Lâng lóng kóng i tsia̍h hó tsò khin-khó, si̍t-tsāi tsin hó-miā.",
  },
  {
    hanji: "縣爺先去官廳辦公，才去巡視。",
    tailo: "Kuān-iâ sing khì kuann-thiann pān-kong, tsiah khì sûn-sī.",
  },
  {
    hanji: "遮咧欠跤手，伊拄拄有閒，就請伊來鬥相共。",
    tailo:
      "Tsia teh khiàm kha-tshiú, i tú-tú ū-îng, tō tshiánn i lâi tàu-sann-kāng.",
  },
  {
    hanji: "無彩拄拄落肥爾爾，隨就做大水。",
    tailo: "Bô-tshái tú-tú lo̍h-puî niā-niā, suî tō tsò-tuā-tsuí.",
  },
  {
    hanji: "𪜶某真早就過身，賰爸仔囝兩人做伙過日子。",
    tailo:
      "In bóo tsin tsá tō kuè-sin, tshun pē-á-kiánn nn̄g lâng tsò-hué kuè ji̍t-tsí.",
  },
  {
    hanji: "陳三五娘相𤆬走的故事，佇臺灣真受歡迎。",
    tailo:
      "Tân-sann-Gōo-niû sio-tshuā-tsáu ê kòo-sū, tī Tâi-uân tsin siū huan-gîng.",
  },
  {
    hanji: "腹肚枵無才調做工課，愛食飽才有氣力。",
    tailo:
      "Pak-tóo-iau bô tsâi-tiāu tsò khang-khuè, ài tsia̍h-pá tsiah ū khuì-la̍t.",
  },
  {
    hanji: "伊規工攏佇厝裡無出去。",
    tailo: "I kui-kang lóng tī tshù--lí bô tshut--khì.",
  },
  {
    hanji: "看恁翁仔某感情遮好，實在予人欣羨。",
    tailo:
      "Khuànn lín ang-á-bóo kám-tsîng tsiah hó, si̍t-tsāi hōo lâng him-siān.",
  },
  {
    hanji: "阿母想欲飼一隻狗仔佮伊做伴。",
    tailo: "A-bú siūnn-beh tshī tsi̍t tsiah káu-á kah i tsò-phuānn.",
  },
  {
    hanji: "你偷偷仔共物件提入去，毋通予人看著。",
    tailo:
      "Lí thau-thau-á kā mi̍h-kiānn the̍h--ji̍p-khì, m̄-thang hōo lâng khuànn--tio̍h.",
  },
  {
    hanji: "阿公那挨二絃那唸歌，足好聽的。",
    tailo: "A-kong ná e jī-hiân ná liām-kua, tsiok hó-thiann--ê.",
  },
  {
    hanji: "伊這改是堅心欲拍拚，無成功就毋轉去故鄉。",
    tailo:
      "I tsit kái sī kian-sim beh phah-piànn, bô sîng-kong tō m̄ tńg-khì kòo-hiong.",
  },
  {
    hanji: "伊的能力是通人知、通人呵咾的。",
    tailo: "I ê lîng-li̍k sī thong-lâng-tsai, thong-lâng o-ló--ê.",
  },
  {
    hanji: "伊足歹奉待，逐項伊都無滿意。",
    tailo: "I tsiok pháinn hōng-thāi, ta̍k hāng i to bô muá-ì.",
  },
  {
    hanji: "恁阿母遮爾辛苦，你著愛較會曉想咧。",
    tailo:
      "Lín a-bú tsiah-nī sin-khóo, lí tio̍h-ài khah ē-hiáu siūnn--leh.",
  },
  {
    hanji: "我想講已經暗矣，歹勢共你攪吵。",
    tailo: "Guá siūnn-kóng í-king àm--ah, pháinn-sè kā lí kiáu-tshá.",
  },
  {
    hanji: "逐家攏想講伊應該會贏，早就準備欲共伊恭喜矣。",
    tailo:
      "Ta̍k-ke lóng siūnn-kóng i ing-kai ē iânn, tsá tō tsún-pī beh kā i kiong-hí--ah.",
  },
  {
    hanji: "我才想講欲去揣你，你就敲電話來矣。",
    tailo:
      "Guá tsiah siūnn-kóng beh khì tshuē--lí, lí tō khà tiān-uē lâi--ah.",
  },
  {
    hanji: "去宜蘭，著買膽肝轉來做等路。",
    tailo: "Khì Gî-lân, tio̍h bé tám-kuann tńg-lâi tsò tán-lōo.",
  },
  {
    hanji: "這窟魚池仔活足濟魚仔栽。",
    tailo: "Tsit khut hî-tî-á hua̍t tsiok tsē hî-á-tsai.",
  },
  {
    hanji: "甭閣啉矣啦，酒啉傷濟會醉呢！",
    tailo: "Bàng koh lim--ah--lah, tsiú lim siunn tsē ē tsuì--neh!",
  },
  {
    hanji: "阿瑋共你招遐濟擺，你煞按呢直直挨推，無的確會去觸著人的好意。",
    tailo:
      "A-uí kā lí tsio hiah tsē pái, lí suah án-ne ti̍t-ti̍t e-the, bô-tik-khak ē khì tshik-tio̍h lâng ê hó-ì.",
  },
  {
    hanji: "這款歹吉兆的代誌，觸著的人攏會衰甲頭殼滴著鳥仔屎。",
    tailo:
      "Tsit khuán pháinn-kiat-tiāu ê tāi-tsì, tshik--tio̍h ê lâng lóng ē sue kah thâu-khak tih-tio̍h tsiáu-á-sái.",
  },
  {
    hanji: "老師叫學生徛予騰排做一列，準備欲上台表演。",
    tailo:
      "Lāu-su kiò ha̍k-sing khiā hōo thîng pâi-tsò tsi̍t lia̍t, tsún-pī beh tsiūnn-tâi piáu-ián.",
  },
  {
    hanji: "我都毋是仙講會騰雲駕霧。",
    tailo: "Guá to m̄ sī sian kóng ē thîng-hûn-kà-bū.",
  },
  {
    hanji: "透早騎跤踏車去學校的時，拄好咧𬦰崎閣著㧣風，騎甲怦怦喘。",
    tailo:
      "Thàu-tsá khiâ kha-ta̍h-tshia khì ha̍k-hāu ê sî, tú-hó teh peh-kiā koh tio̍h tu-hong, khiâ kah phēnn-phēnn-tshuán.",
  },
  {
    hanji: "你發遐濟𤶃仔子，著較莫食傷燥的物件。",
    tailo:
      "Lí puh hiah tsē thiāu-á-tsí, tio̍h khah mài tsia̍h siunn sò ê mi̍h-kiānn.",
  },
  {
    hanji: "物件㧒甲規四界攏毋整理，看著真袂爽。",
    tailo:
      "Mi̍h-kiānn hiat kah kui-sì-kè lóng m̄ tsíng-lí, khuànn tio̍h tsin bē-sóng.",
  },
  {
    hanji: "因為有抾恨佇咧，我袂爽佮伊坐仝桌。",
    tailo: "In-uī ū khioh-hīn tī--leh, guá bē-sóng kah i tsē kāng toh.",
  },
  {
    hanji: "一下仔無斟酌，囡仔煞走無去。",
    tailo: "Tsi̍t-ē-á bô tsim-tsiok, gín-á suah tsáu bô--khì.",
  },
  {
    hanji: "伊跤手真猛掠，遮爾濟工課一下仔就完成矣。",
    tailo:
      "I kha-tshiú tsin mé-lia̍h, tsiah-nī tsē khang-khuè tsi̍t-ē-á tō uân-sîng--ah.",
  },
  {
    hanji: "今年的八月半，阮規陣人相招欲來去烘肉佮賞月。",
    tailo:
      "Kin-nî ê Peh-gue̍h-puànn, guán kui-tīn lâng sio-tsio beh lâi-khì hang-bah kah siúnn-gue̍h.",
  },
  {
    hanji: "這層代誌僫處理，等下日才寬寬仔講予你知。",
    tailo:
      "Tsit tsân tāi-tsì oh tshú-lí, tán ē-ji̍t tsiah khuann-khuann-á kóng hōo lí tsai.",
  },
  {
    hanji: "伊出業到今猶揣無頭路，臨時跔佇里長伯仔遐做小使仔。",
    tailo:
      "I tshut-gia̍p kàu-tann iáu tshuē-bô thâu-lōo, lîm-sî ku tī lí-tiúnn peh--á hia tsò siáu-sú-á.",
  },
  {
    hanji: "外口一陣人喝甲大細聲，毋知出啥物代誌？",
    tailo:
      "Guā-kháu tsi̍t tīn lâng huah kah tuā-sè-siann, m̄ tsai tshut siánn-mih tāi-tsì?",
  },
  {
    hanji: "彼對翁仔某定定為著錢咧大細聲。",
    tailo:
      "Hit tuì ang-á-bóo tiānn-tiānn uī-tio̍h tsînn teh tuā-sè-siann.",
  },
  {
    hanji:
      "這馬佇新北市土城區的大墓公聽講佮早前的林爽文事件、漳泉拚攏有關係。",
    tailo:
      "Tsit-má tī Sin-pak-tshī Thôo-siânn-khu ê tuā-bōng-kong thiann-kóng kah tsá-tsîng ê Lîm Sóng-bûn sū-kiānn, Tsiang-Tsuân-piànn lóng ū kuan-hē.",
  },
  {
    hanji: "阮去公園散步，行到中站，看著人咧弄布袋戲尪仔，有影誠心適。",
    tailo:
      "Guán khì kong-hn̂g sàn-pōo, kiânn kàu tiong-tsām, khuànn-tio̍h lâng teh lāng pòo-tē-hì ang-á, ū-iánn tsiânn sim-sik.",
  },
  {
    hanji:
      "會開到中站的時，董事長宣佈明年薪水加五pha，逐家聽了攏誠歡喜。",
    tailo:
      "Huē khui kàu tiong-tsām ê sî, táng-sū-tiúnn suan-pòo mê-nî sin-suí ke gōo pha, ta̍k-ke thiann-liáu lóng tsiânn huann-hí.",
  },
  {
    hanji: "月底通常是阮公司無閒咧出貨的日子。",
    tailo:
      "Gue̍h-té thong-siông sī guán kong-si bô-îng teh tshut-huè ê ji̍t-tsí.",
  },
  {
    hanji: "水洘了後，海埔頂四常看會著螺仔。",
    tailo: "Tsuí-khó liáu-āu, hái-poo-tíng sù-siông khuànn ē tio̍h lê-á.",
  },
  {
    hanji: "這陣囡仔會遮挐，攏嘛是伊咧歹鬼𤆬頭。",
    tailo:
      "Tsit tīn gín-á ē tsiah jû, lóng mā sī i teh pháinn-kuí-tshuā-thâu.",
  },
  {
    hanji: "今年市草䆀，日子加誠歹過。",
    tailo: "Kin-nî tshī-tsháu bái, ji̍t-tsí ke tsiânn pháinn-kuè.",
  },
  {
    hanji: "你這个夭壽骨，規工啉酒毋去作穡，欲哪會有通食。",
    tailo:
      "Lí tsit ê iáu-siū-kut, kui-kang lim tsiú m̄ khì tsoh-sit, beh ná ē ū thang tsia̍h.",
  },
  {
    hanji: "這箍人真夭壽骨，物件共我變害去煞做伊走。",
    tailo:
      "Tsit khoo lâng tsin iáu-siū-kut, mi̍h-kiānn kā guá pìnn-hāi--khì suah tsò i tsáu.",
  },
  {
    hanji: "錢銀幾萬千，毋值囝孫出人前。",
    tailo: "Tsînn-gîn kuí-bān tshian, m̄-ta̍t kiánn-sun tshut-lâng-tsîng.",
  },
  {
    hanji: "這个囡仔上台演講真在，有影出人前。",
    tailo:
      "Tsit ê gín-á tsiūnn-tâi ián-káng tsin tsāi, ū-iánn tshut-lâng-tsîng.",
  },
  {
    hanji: "另工有閒才閣來揣你開講。",
    tailo: "Līng-kang ū-îng tsiah-koh lâi tshuē lí khai-káng.",
  },
  {
    hanji: "伊做的歹代一下出破，就隨走路矣。",
    tailo: "I tsò ê pháinn-tāi tsi̍t-ē tshut-phuà, tō suî tsáu-lōo--ah.",
  },
  {
    hanji: "伊間諜的身份已經出破矣。",
    tailo: "I kàn-tia̍p ê sin-hūn í-king tshut-phuà--ah.",
  },
  {
    hanji:
      "伊這站仔外務真濟，除去正職的頭路，閣有足濟社團的工課，較加嘛無閒𩑾𩑾。",
    tailo:
      "I tsit-tsām-á guā-bū tsin tsē, tû-khì tsiànn-tsit ê thâu-lōo, koh ū tsiok tsē siā-thuân ê khang-khuè, khah-ke mā bô-îng-tshih-tshih.",
  },
  {
    hanji: "阮阿姊的工課是咧招保險的外務，定定著四界去走傱。",
    tailo:
      "Guán a-tsí ê khang-khuè sī teh tsio pó-hiám ê guā-bū, tiānn-tiānn tio̍h sì-kè khì tsáu-tsông.",
  },
  {
    hanji: "三層半精肥，上合我的氣口。",
    tailo: "Sam-tsân puànn-tsiann-puî, siōng ha̍h guá ê khuì-kháu.",
  },
  {
    hanji: "𪜶囝娶彼个某，毋但媠閣巧氣。",
    tailo: "In kiánn tshuā hit ê bóo, m̄-nā suí koh khiáu-khì.",
  },
  {
    hanji: "阮阿公講伊食到這號歲，今都目花矣，著愛用譀鏡看報紙才看有。",
    tailo:
      "Guán a-kong kóng i tsia̍h kàu tsit-lō huè, tann to ba̍k-hue--ah, tio̍h-ài  iōng hàm-kiànn khuànn pò-tsuá tsiah khuànn-ū.",
  },
  {
    hanji: "雄雄目花看袂明，毋才佇路裡認毋著人。",
    tailo:
      "Hiông-hiông ba̍k-hue khuànn bē bîng, m̄-tsiah tī lōo--lí jīn m̄-tio̍h lâng.",
  },
  {
    hanji: "伊的個性誠生猴，處理代誌予人袂放心。",
    tailo:
      "I ê kò-sìng tsiânn tshenn-kâu, tshú-lí tāi-tsì hōo lâng bē hòng-sim.",
  },
  {
    hanji: "做代誌毋通傷生猴，勻勻仔做較袂脫箠。",
    tailo:
      "Tsò tāi-tsì m̄-thang siunn tshenn-kâu, ûn-ûn-á tsò khah bē thut-tshuê.",
  },
  {
    hanji: "頭家叫我牽彼个拄來上班的生猴，講著愛較有耐心咧。",
    tailo:
      "Thâu-ke kiò guá khan hit ê tú lâi siōng-pan ê tshenn-kâu, kóng tio̍h-ài khah ū nāi-sim--leh.",
  },
  {
    hanji: "專工出國去買一跤皮包仔轉來，煞去買著仿仔，想著誠厭氣。",
    tailo:
      "Tsuan-kang tshut-kok khì bé tsi̍t kha phuê-pau-á tńg--lâi, suah khì bé-tio̍h hóng-á, siūnn tio̍h tsiânn iàn-khì.",
  },
  {
    hanji: "聽講這个網站咧賣的鞋仔，有寡是仿仔，你著較細膩咧！",
    tailo:
      "Thiann-kóng tsit ê bāng-tsām teh bē ê ê-á, ū kuá sī hóng-á, lí tio̍h khah sè-jī--leh!",
  },
  {
    hanji: "若想欲共人買較貴的物件，愛先交定才有準算。",
    tailo:
      "Nā siūnn-beh kā lâng bé khah kuì ê mi̍h-kiānn, ài sing kau-tiānn tsiah ū tsún-sǹg.",
  },
  {
    hanji:
      "佮「外家」意思相仝，字目無仝的有「後頭厝」、「後頭」佮「外家厝」。",
    tailo:
      "Kah “guā-ke” ì-sù sio-kāng, jī-ba̍k bô kāng--ê ū “āu-thâu-tshù”, “āu-thâu” kah “guā-ke-tshù”.",
  },
  {
    hanji: "伊冊讀比人較濟，字目也確實捌比人較深。",
    tailo:
      "I tsheh tha̍k pí lâng khah tsē, jī-ba̍k iā khak-si̍t bat pí lâng khah tshim.",
  },
  {
    hanji: "坐傷久腰脊骨會痠，上無嘛半點鐘就起來伸輪一下。",
    tailo:
      "Tsē siunn kú io-tsiah-kut ē sng, siōng-bô mā puànn tiám-tsing tō khí-lâi tshun-lûn--tsi̍t-ē.",
  },
  {
    hanji: "你今仔日誠無閒的款，規氣我別工才閣來揣你。",
    tailo:
      "Lí kin-á-ji̍t tsiânn bô-îng ê khuán, kui-khì guá pa̍t-kang tsiah-koh lâi tshuē--lí.",
  },
  {
    hanji: "會議都欲起鼓矣，伊呔會猶未到位？",
    tailo: "Huē-gī to beh khí-kóo--ah, i thài ē iáu-buē kàu-uī?",
  },
  {
    hanji: "老師若講你，你千萬毋通扴話。",
    tailo: "Lāu-su nā kóng--lí, lí tshian-bān m̄-thang ke̍h-uē.",
  },
  {
    hanji: "見擺𪜶老爸若咧講伊，伊就直直扴話，兩人講甲咧欲冤家。",
    tailo:
      "Kiàn-pái in lāu-pē nā teh kóng--i, i tō ti̍t-ti̍t ke̍h-uē, nn̄g lâng kóng kah teh-beh uan-ke.",
  },
  {
    hanji: "塗水師無下心神咧捽繩，較加壁堵嘛疊甲走斜去。",
    tailo:
      "Thôo-tsuí-sai bô hē sim-sîn teh sut-tsîn, khah-ke piah-tóo mā thia̍p kah tsáu-tshua̍h--khì.",
  },
  {
    hanji: "小弟定定睏坦斜，規頂眠床攏予伊占去。",
    tailo:
      "Sió-tī tiānn-tiānn khùn thán-tshua̍h, kui tíng bîn-tshn̂g lóng hōo i tsiàm--khì.",
  },
  {
    hanji: "囡仔出癖，姑不將予伊佇厝裡歇睏。",
    tailo:
      "Gín-á tshut-phia̍h, koo-put-tsiong hōo i tī tshù--lí hioh-khùn.",
  },
  {
    hanji: "伊逐工都攏笑頭笑面，拄才哪會聽著伊佮厝邊咧大細聲，真怪奇呢！",
    tailo:
      "I ta̍k-kang to lóng tshiò-thâu-tshiò-bīn, tú-tsiah ná ē thiann-tio̍h i kah tshù-pinn teh tuā-sè-siann, tsin kuài-kî--neh!",
  },
  {
    hanji: "拄仔有人敲電話來，講欲揣你。",
    tailo: "Tú-á ū lâng khà tiān-uē lâi, kóng beh tshuē--lí.",
  },
  {
    hanji: "伊拄仔出門就隨落雨，趕緊傱轉來厝裡攑雨傘。",
    tailo:
      "I tú-á tshut-mn̂g tō suî lo̍h-hōo, kuánn-kín tsông tńg-lâi tshù--lí gia̍h hōo-suànn.",
  },
  {
    hanji: "阮兜種的檨仔拄仔黃，你這站仔來上拄好。",
    tailo:
      "Guán tau tsìng ê suāinn-á tú-á n̂g, lí tsit-tsām-á lâi siōng tú-hó.",
  },
  {
    hanji: "若欲睏愛先去放尿，半暝仔才袂泄尿。",
    tailo:
      "Nā beh khùn ài sing khì pàng-jiō, puànn-mê-á tsiah bē tshuā-jiō.",
  },
  {
    hanji: "阿公往生六冬矣，今年著愛抾金囉。",
    tailo:
      "A-kong óng-sing la̍k tang--ah, kin-nî tio̍h-ài khioh-kim--looh.",
  },
  {
    hanji: "你衫穿甲花貓貓，敢會看口得？",
    tailo: "Lí sann tshīng kah hue-niau-niau, kám ē khuànn-kháu--tit?",
  },
  {
    hanji: "細漢囡仔食飯定定嘛舞甲規面花貓貓。",
    tailo:
      "Sè-hàn gín-á tsia̍h-pn̄g tiānn-tiānn mā bú kah kui bīn hue-niau-niau.",
  },
  {
    hanji: "咱是欲去共恁阿妗送山，你穿甲規身軀花彔彔，敢有合？",
    tailo:
      "Lán sī beh khì kā lín a-kīm sàng-suann, lí tshīng kah kui-sin-khu hue-lok-lok, kám ū ha̍h?",
  },
  {
    hanji: "你共數記甲花彔彔，啥人看有？",
    tailo: "Lí kā siàu kì kah hue-lok-lok, siánn-lâng khuànn-ū?",
  },
  {
    hanji: "你共這堵壁畫甲花哩囉，敢會看口得！",
    tailo:
      "Lí kā tsit tóo piah uē kah hue-li-lo, kám ē-khuànn-kháu--tit!",
  },
  {
    hanji: "一項簡單的代誌講甲花哩囉，啥人聽有咧？",
    tailo:
      "Tsi̍t hāng kán-tan ê tāi-tsì kóng kah hue-li-lo, siánn-lâng thiann-ū--leh?",
  },
  {
    hanji: "食頭路這號代誌定著愛想較斟酌咧，較免後日仔才來後悔。",
    tailo:
      "Tsia̍h-thâu-lōo tsit-lō tāi-tsì tiānn-tio̍h ài siūnn khah tsim-tsiok--leh, khah bián āu-ji̍t-á tsiah lâi hiō-hué.",
  },
  {
    hanji: "這改考題攏看毋捌，後改我一定欲好好仔讀冊矣！",
    tailo:
      "Tsit kái khó-tê lóng khuànn m̄ bat, āu-kái guá it-tīng beh hó-hó-á tha̍k-tsheh--ah!",
  },
  {
    hanji: "這台oo-tóo-bái的ia̋n-jín愛拆，你去共我遐的家私頭仔提來。",
    tailo:
      "Tsit tâi oo-tóo-bái ê ia̋n-jín ài thiah, lí khì kā guá hia-ê ke-si-thâu-á the̍h--lâi.",
  },
  {
    hanji: "恁共厝內舞甲挐絞絞，恁老母若轉來恁就害。",
    tailo:
      "Lín kā tshù-lāi bú kah jû-ká-ká, lín lāu-bú nā tńg--lâi lín tō hāi.",
  },
  {
    hanji: "這軀洋裝的料身袂䆀，色水閣真媠，價數應該無俗。",
    tailo:
      "Tsit su iûnn-tsong ê liāu-sin bē-bái, sik-tsuí koh tsin suí, kè-siàu ing-kai bô sio̍k.",
  },
  {
    hanji: "無證據的代誌毋通佇遐烏白講。",
    tailo: "Bô tsìng-kì ê tāi-tsì m̄-thang tī hia oo-pe̍h-kóng.",
  },
  {
    hanji: "你若猶閣有缺欠啥，不管時攏通來共我講。",
    tailo:
      "Lí nā iáu-koh ū khueh-khiàm siannh, put-kuán-sî lóng thang lâi kā guá kóng.",
  },
  {
    hanji: "戰後經濟無好，逐項物資攏真缺欠。",
    tailo:
      "Tsiàn-āu king-tsè bô hó, ta̍k hāng bu̍t-tsu lóng tsin khueh-khiàm.",
  },
  {
    hanji: "伊留一張紙條仔，講無欲轉來食暗頓。",
    tailo:
      "I lâu tsi̍t tiunn tsuá-tiâu-á, kóng bô beh tńg-lâi tsia̍h àm-tǹg.",
  },
  {
    hanji: "阿芬共臭礬囥佇衫櫥內，按呢虼蚻才袂走入去。",
    tailo:
      "A-hun kā tshàu-huân khǹg tī sann-tû-lāi, án-ne ka-tsua̍h tsiah bē tsáu--ji̍p-khì.",
  },
  {
    hanji: "落遐大的雨閣拄著滇流，莫怪會做大水。",
    tailo:
      "Lo̍h hiah tuā ê hōo koh tú-tio̍h tīnn-lâu, bo̍k-kuài ē tsò-tuā-tsuí.",
  },
  {
    hanji: "阮細漢的今年欲讀大學矣。",
    tailo: "Guán sè-hàn--ê kin-nî beh tha̍k tāi-ha̍k--ah.",
  },
  {
    hanji: "這个人明明都做人的細漢的爾爾，煞有夠囂俳呢。",
    tailo:
      "Tsit ê lâng bîng-bîng to tsò lâng ê sè-hàn--ê niā-niā, suah ū-kàu hiau-pai--neh.",
  },
  {
    hanji:
      "阮遮的人較早攏坐竹棑仔過溪，有的人會用船篙撐，有的人會用船桮划。",
    tailo:
      "Guán tsia ê lâng khah-tsá lóng tsē tik-pâi-á kuè khe, ū ê lâng ē īng tsûn-ko the, ū ê lâng ē īng tsûn-pue kò.",
  },
  {
    hanji: "真濟庄跤人為著生活，來佇都市趁食。",
    tailo:
      "Tsin tsē tsng-kha-lâng uī-tio̍h sing-ua̍h, lâi tī too-tshī thàn-tsia̍h.",
  },
  {
    hanji:
      "因為我惜皮驚疼，閣煩惱空喙會患動孵膿，毋才袂愛烏白去外口貫耳。",
    tailo:
      "In-uī guá sioh-phuê kiann thiànn, koh huân-ló khang-tshuì ē huān-tōng pū-lâng, m̄-tsiah bē ài oo-pe̍h khì guā-kháu kǹg-hīnn.",
  },
  {
    hanji: "頂回去買物件無紮錢，佳哉頭家肯予我賒。",
    tailo:
      "Tíng-huê khì bé mi̍h-kiānn bô tsah tsînn, ka-tsài thâu-ke khíng hōo guá sia.",
  },
  {
    hanji: "頂改差你五百箍，這馬還你。",
    tailo: "Tíng-kái tsha lí gōo-pah khoo, tsit-má hîng--lí.",
  },
  {
    hanji: "𪜶兜今仔日鬧熱滾滾，規家伙仔閣穿甲媠噹噹，毋知有啥物喜事？",
    tailo:
      "In tau kin-á-ji̍t lāu-jia̍t-kún-kún, kui-ke-hué-á koh tshīng kah suí-tang-tang, m̄ tsai ū siánn-mih hí-sū?",
  },
  {
    hanji: "人散食免失志，拍拚才會出頭天。",
    tailo:
      "Lâng sàn-tsia̍h bián sit-tsì, phah-piànn tsiah ē tshut-thâu-thinn.",
  },
  {
    hanji: "猴死囡仔，你哪會閣共玻璃掔破去！",
    tailo: "Kâu-sí-gín-á, lí ná ē koh kā po-lê khian-phuà--khì!",
  },
  {
    hanji: "921彼擺塗牛翻身，幌甲真嚴重，連臺北的大樓都搖甲倒去。",
    tailo:
      "921 hit pái thôo-gû-huan-sin, hàinn kah tsin giâm-tiōng, liân Tâi-pak ê tuā-lâu to iô kah tó--khì.",
  },
  {
    hanji: "牆圍仔破一空，這塊磚仔拄好通提來塌縫。",
    tailo:
      "Tshiûnn-uî-á phuà tsi̍t khang, tsit tè tsng-á tú-hó thang the̍h-lâi thap-phāng.",
  },
  {
    hanji: "阮這擺的旅行團都猶有一个位，你的都合若會拄好就招你來塌縫。",
    tailo:
      "Guán tsit pái ê lí-hîng-thuân to iáu-ū tsi̍t ê uī, lí ê too-ha̍p nā ē tú-hó tō tsio lí lâi thap-phāng.",
  },
  {
    hanji: "外口風透，偝囡仔出門愛幔一領幔被仔，較袂予囡仔寒著。",
    tailo:
      "Guā-kháu hong thàu, āinn gín-á tshut-mn̂g ài mua tsi̍t niá mua-phuē-á, khah bē hōo gín-á kuânn--tio̍h.",
  },
  {
    hanji: "細漢的時陣，我會共幔被仔幔佇身軀頂來咧搬歌仔戲演小旦。",
    tailo:
      "Sè-hàn ê sî-tsūn, guá ē kā mua-phuē-á mua tī sin-khu-tíng lâi teh puann kua-á-hì ián sió-tuànn.",
  },
  {
    hanji: "今仔日天氣較秋凊，欲睏晝著會記得幔被仔小蓋咧。",
    tailo:
      "Kin-á-ji̍t thinn-khì khah tshiu-tshìn, beh khùn-tàu tio̍h ē-kì-tit mua-phuē-á sió kah--leh.",
  },
  {
    hanji: "廟口的榕樹跤不時都有一寡人佇遐泡茶、開講。",
    tailo:
      "Biō-kháu ê tshîng-tshiū-kha put-sî to ū tsi̍t-kuá lâng tī hia phàu tê, khai-káng.",
  },
  {
    hanji: "伊定定佇電視節目講耍笑，足好笑的。",
    tailo:
      "I tiānn-tiānn tī tiān-sī tsiat-bo̍k kóng-sńg-tshiò, tsiok hó-tshiò--ê.",
  },
  {
    hanji: "你莫閣講耍笑矣，若無阮某真正掠準我有著頭獎。",
    tailo:
      "Lí mài koh kóng-sńg-tshiò--ah, nā-bô guán bóo tsin-tsiànn lia̍h-tsún guá ū tio̍h thâu-tsióng.",
  },
  {
    hanji: "這間冰店攏用在地清氣的山泉水佮各種口味的果子來做霜仔枝。",
    tailo:
      "Tsit king ping-tiàm lóng iōng tsāi-tē tshing-khì ê suann-tsuânn-tsuí kah kok-tsióng kháu-bī ê kué-tsí lâi tsò sng-á-ki.",
  },
  {
    hanji: "伊傷過抾拾，明其都無路用的物件，嘛毋甘擲捒。",
    tailo:
      "I siunn kuè khioh-si̍p, bîng-ki to bô-lōo-īng ê mi̍h-kiānn, mā m̄-kam tàn-sak.",
  },
  {
    hanji: "囡仔豚當咧轉成，莫怪一頓食幾若碗飯。",
    tailo:
      "Gín-á-thûn tng-teh tńg-tsiânn, bo̍k-kuài tsi̍t tǹg tsia̍h kuí-nā uánn pn̄g.",
  },
  {
    hanji:
      "襟胸的油質較低，閣有豐富的卵白質，是真濟選手運動了後的食物選擇。",
    tailo:
      "Khim-hing ê iû-tsit khah kē, koh ū hong-hù ê nn̄g-pe̍h-tsit, sī tsin tsē suán-tshiú ūn-tōng liáu-āu ê si̍t-bu̍t suán-ti̍k.",
  },
  {
    hanji: "因為骿支骨噗起來，若親像雞的襟胸，所以醫生共這種病號做襟胸。",
    tailo:
      "In-uī phiann-ki-kut phok--khí-lâi, ná-tshin-tshiūnn ke ê khim-hing, sóo-í i-sing kā tsit tsióng pēnn hō-tsò khim-hing.",
  },
  {
    hanji: "騙痟的！騙人攏毋捌出過社會。",
    tailo: "Phiàn-siáu--ê! Phiàn lâng lóng m̄ bat tshut-kuè siā-huē.",
  },
  {
    hanji: "臺灣熱人出產真濟芳甜的果子，譬論檨仔、荔枝佮芳瓜。",
    tailo:
      "Tâi-uân jua̍h--lâng tshut-sán tsin tsē phang-tinn ê kué-tsí, phì-lūn suāinn-á, nāi-tsi kah phang-kue.",
  },
  {
    hanji: "阮老爸咧做義警，倚年的前後一月日常在愛佇阮這里遮鬥顧更。",
    tailo:
      "Guán lāu-pē teh tsò gī-kíng, uá-nî ê tsîng-āu tsi̍t gue̍h-ji̍t tshiâng-tsāi ài tī guán tsit lí tsia tàu kòo-kenn.",
  },
  {
    hanji:
      "較早作田人攏放伴割稻仔，人若來鬥相共，愛攢三頓佮點心予人食，閣袂使驚人大食。",
    tailo:
      "Khah-tsá tsoh-tshân-lâng lóng pàng-phuānn kuah-tiū-á, lâng nā lâi tàu-sann-kāng, ài tshuân sann tǹg kah tiám-sim hōo lâng tsia̍h, koh bē-sái kiann lâng tuā-tsia̍h.",
  },
  {
    hanji: "巷仔頭的阿婆有飼一隻土狗仔，看著誠歹。",
    tailo:
      "Hāng-á-thâu ê a-pô ū tshī tsi̍t tsiah thóo-káu-á, khuànn tio̍h tsiânn pháinn.",
  },
  {
    hanji: "感謝恁今仔日的招待，後回來阮遐就予我請。",
    tailo:
      "Kám-siā lín kin-á-ji̍t ê tsiau-thāi, āu-huê lâi guán hia tō hōo guá tshiánn.",
  },
  {
    hanji:
      "早市的生理極加是做到九點爾爾，欲賣遮的菜著緊來去才會赴市，若無就愛留咧家己食。",
    tailo:
      "Tsá-tshī ê sing-lí ki̍k-ke sī tsò kàu káu tiám niā-niā, beh bē tsia-ê tshài tio̍h kín lâi-khì tsiah ē-hù-tshī, nā-bô tō ài lâu leh ka-kī tsia̍h.",
  },
  {
    hanji: "你這馬看著高麗菜的價數好，才欲攢落去種，敢會赴市？",
    tailo:
      "Lí tsit-má khuànn-tio̍h ko-lê-tshài ê kè-siàu hó, tsiah beh tshuân lo̍h-khì tsìng, kám ē-hù-tshī?",
  },
  {
    hanji: "一百箍通買遐大堆，算誠會和。",
    tailo: "Tsi̍t-pah khoo thang bé hiah tuā tui, sǹg tsiânn ē-hô.",
  },
  {
    hanji: "我上愛食巷仔口阿婆咧賣的米血，食著芳閣𩚨。",
    tailo:
      "Guá siōng ài tsia̍h hāng-á-kháu a-pô teh bē ê bí-hueh, tsia̍h tio̍h phang koh khiū.",
  },
  {
    hanji:
      "啉甲起酒痟的阿義，規暝佇巷仔口唏嚇叫，聽候警察來矣，人煞走甲無看見影。",
    tailo:
      "Lim kah khí-tsiú-siáu ê A-gī, kui mê tī hāng-á-kháu hì-heh-kiò, thìng-hāu kíng-tshat lâi--ah, lâng suah tsáu kah bô khuànn-kìnn iánn.",
  },
  {
    hanji: "外口規大陣人佇遐唏嚇叫，到底是發生啥物代誌？",
    tailo:
      "Guā-kháu kui tuā tīn lâng tī hia hì-heh-kiò, tàu-té sī huat-sing siánn-mih tāi-tsì?",
  },
  {
    hanji: "天氣遐漚翕，覕佇房間吹冷氣上好啦。",
    tailo:
      "Thinn-khì hiah àu-hip, bih tī pâng-king tshue líng-khì siōng hó--lah.",
  },
  {
    hanji: "叫伊落雨天莫出門，伊干仔欲，實在無伊法。",
    tailo:
      "Kiò i lo̍h-hōo-thinn mài tshut-mn̂g, i kan-á beh, si̍t-tsāi bô i huat.",
  },
  {
    hanji: "𪜶阿母叫伊愛加食寡果子佮菜蔬，伊干仔毋。",
    tailo:
      "In a-bú kiò i ài ke tsia̍h kuá kué-tsí kah tshài-se, i kan-á m̄.",
  },
  {
    hanji: "牛犅𨂿會損蕩柑仔欉、柳丁欉、檸檬欉佮木瓜欉等果子欉。",
    tailo:
      "Gû-káng-uainnh ē sńg-tn̄g kam-á tsâng, liú-ting tsâng, lê-bóng tsâng kah bo̍k-kue tsâng tíng kué-tsí tsâng.",
  },
  {
    hanji:
      "伊大學出業了後，佇厝裡誠拚勢讀冊，無偌久就考牢司法官，這陣出腳矣。",
    tailo:
      "I tāi-ha̍k tshut-gia̍p liáu-āu, tī tshù--lí tsiânn piànn-sè tha̍k-tsheh, bô-guā-kú tō khó-tiâu su-huat-kuann, tsit-tsūn tshut-kioh--ah.",
  },
  {
    hanji: "伊讀冊的時不時偷走學，予爸母、老師真頭疼。",
    tailo:
      "I tha̍k-tsheh ê sî put-sî thau-tsáu-o̍h, hōo pē-bú, lāu-su tsin thâu-thiànn.",
  },
  {
    hanji: "膨紗衫過洗了後，加減會倒勼寡。",
    tailo: "Phòng-se-sann kuè sé liáu-āu, ke-kiám ē tò-kiu--kuá.",
  },
  {
    hanji: "做代誌愛有頭有尾，袂使拄著歹撚的工課，就隨欲倒勼轉來。",
    tailo:
      "Tsò tāi-tsì ài ū-thâu-ū-bué, bē-sái tú-tio̍h pháinn-lián ê khang-khuè, tō suî beh tò-kiu--tńg-lâi.",
  },
  {
    hanji: "伊這站當咧拔骨，大甲有看著。",
    tailo: "I tsit-tsām tng-teh pue̍h-kut, tuā kah ū khuànn--tio̍h.",
  },
  {
    hanji: "毋通提你的過去出來品捧，無人會相信你。",
    tailo:
      "M̄-thang the̍h lí ê kuè-khì tshut-lâi phín-phóng, bô lâng ē siong-sìn--lí.",
  },
  {
    hanji: "伊品捧家己有偌好額拄偌好額，根本都無影。",
    tailo:
      "I phín-phóng ka-kī ū guā hó-gia̍h tú guā hó-gia̍h, kin-pún to bô-iánn.",
  },
  {
    hanji: "伊靠祖公仔屎過日，攏免討趁。",
    tailo: "I khò tsóo-kong-á-sái kuè-ji̍t, lóng bián thó-thàn.",
  },
  {
    hanji: "石滬利用飽流、洘流掠海產，予魚蝦會得入來，袂得出去。",
    tailo:
      "Tsio̍h-hōo lī-iōng pá-lâu, khó-lâu lia̍h hái-sán, hōo hî-hê ē-tit ji̍p--lâi, bē-tit tshut--khì.",
  },
  {
    hanji: "伊拄學電腦的時鈍跤鈍手，不而過這馬已經學甲真老矣。",
    tailo:
      "I tú o̍h tiān-náu ê sî tūn-kha-tūn-tshiú, put-jî-kò tsit-má í-king o̍h kah tsin láu--ah.",
  },
  {
    hanji: "伊中風了後就鈍跤鈍手，行動真無方便。",
    tailo:
      "I tiòng-hong liáu-āu tō tūn-kha-tūn-tshiú, hîng-tōng tsin bô hong-piān.",
  },
  {
    hanji: "爸母攏無希望囡仔佇外口佮人結嚾結黨。",
    tailo:
      "Pē-bú lóng bô hi-bāng gín-á tī guā-kháu kah lâng kiat-uang-kiat-tóng.",
  },
  {
    hanji: "今年咱種的果子都攏採收矣，準若風颱來嘛無要緊。",
    tailo:
      "Kin-nî lán tsìng ê kué-tsí to lóng tshái-siu--ah, tsún-nā hong-thai lâi mā bô iàu-kín.",
  },
  {
    hanji: "準講是伊來，我嘛無咧共信篤。",
    tailo: "Tsún-kóng sī i lâi, guá mā bô teh kā sìn-táu.",
  },
  {
    hanji: "伊這幅圖捌佇國際比賽著等過，提著第六名。",
    tailo:
      "I tsit pak tôo bat tī kok-tsè pí-sài tio̍h-tíng--kuè, the̍h-tio̍h tē-la̍k miâ.",
  },
  {
    hanji: "這改的國際標準舞比賽，伊有著等，毋但有獎牌閣有獎金一百萬。",
    tailo:
      "Tsit kái ê kok-tsè piau-tsún-bú pí-sài, i ū tio̍h-tíng, m̄-nā ū tsióng-pâi koh ū tsióng-kim tsi̍t-pah bān.",
  },
  {
    hanji: "狗蟻足脆命，無細膩就予人踏死。",
    tailo: "Káu-hiā tsiok tshè-miā, bô-sè-jī tō hōo lâng ta̍h--sí.",
  },
  {
    hanji: "伊彼工騎鐵馬去挵著電火柱，醫生仙救都救袂轉來，實在有夠脆命。",
    tailo:
      "I hit kang khiâ thih-bé khì lòng-tio̍h tiān-hué-thiāu, i-sing sian kiù to kiù bē tńg--lâi, si̍t-tsāi ū-kàu tshè-miā.",
  },
  {
    hanji: "你共私奇攏囥踮厝裡，萬不二若著賊偷欲按怎？",
    tailo:
      "Lí kā sai-khia lóng khǹg tiàm tshù--lí, bān-put-jī nā tio̍h-tsha̍t-thau beh án-tsuánn?",
  },
  {
    hanji: "現此時欲買鹹水貨加誠利便。",
    tailo: "Hiān-tshú-sî beh bé kiâm-tsuí-huè ke tsiânn lī-piān.",
  },
  {
    hanji: "雄雄一陣對面風搧來，害我強欲徛袂在。",
    tailo:
      "Hiông-hiông tsi̍t tsūn tuì-bīn-hong siàn--lâi, hāi guá kiōng-beh khiā bē tsāi.",
  },
  {
    hanji: "騎鐵馬的時若拄好搪著咧透對面風，有影誠食力！",
    tailo:
      "Khiâ thih-bé ê sî nā tú-hó tn̄g-tio̍h teh thàu tuì-bīn-hong, ū-iánn tsiânn tsia̍h-la̍t!",
  },
  {
    hanji: "伊寫功課緊跤緊手，逐擺攏是頭一个完成的。",
    tailo:
      "I siá kong-khò kín-kha-kín-tshiú, ta̍k-pái lóng sī thâu tsi̍t ê uân-sîng--ê.",
  },
  {
    hanji: "窮真是你毋著，生成愛去共伊會失禮。",
    tailo: "Khîng-tsin sī lí m̄-tio̍h, senn-sîng ài khì kā i huē-sit-lé.",
  },
  {
    hanji: "三月痟媽祖，一四界的媽祖宮攏鬧熱滾滾。",
    tailo:
      "Sann--gue̍h siáu Má-tsóo, tsi̍t-sì-kè ê Má-tsóo-king lóng lāu-jia̍t-kún-kún.",
  },
  {
    hanji: "臺灣規年迵天攏看會著大紅花。",
    tailo: "Tâi-uân kui-nî-thàng-thinn lóng khuànn ē tio̍h tuā-âng-hue.",
  },
  {
    hanji: "圓仔花毋知䆀，大紅花䆀毋知。",
    tailo: "Înn-á-hue m̄ tsai bái, tuā-âng-hue bái m̄ tsai.",
  },
  {
    hanji: "一般來講，查埔囡仔轉大人的時會變聲，是因為頷珠開始發育矣。",
    tailo:
      "It-puann lâi kóng, tsa-poo gín-á tńg-tuā-lâng ê sî ē piàn-siann, sī in-uī ām-tsu khai-sí huat-io̍k--ah.",
  },
  {
    hanji: "手面去洗洗咧，通好食飯。",
    tailo: "Tshiú-bīn khì sé-sé--leh, thang-hó tsia̍h-pn̄g.",
  },
  {
    hanji: "今開始食頭路矣，月給著愛儉一寡仔起來通好娶某。",
    tailo:
      "Tann khai-sí tsia̍h-thâu-lōo--ah, gue̍h-kip tio̍h-ài khiām tsi̍t-kuá-á khí-lâi thang-hó tshuā-bóo.",
  },
  {
    hanji: "逐家攏莫插伊，伊就變無撚。",
    tailo: "Ta̍k-ke lóng mài tshap--i, i tō piàn-bô-lián.",
  },
  {
    hanji: "咱人總是想欲預測當時會大地動，毋過到今猶是變無撚。",
    tailo:
      "Lán-lâng tsóng-sī siūnn-beh ī-tshik tang-sî ē tuā tē-tāng, m̄-koh kàu-tann iáu-sī piàn-bô-lián.",
  },
  {
    hanji: "桑椹會使通血路，促進胃腸運動，改善祕結。",
    tailo:
      "Sng-suî ē-sái thong hueh-lōo, tshiok-tsìn uī-tn̂g ūn-tōng, kái-siān pì-kiat.",
  },
  {
    hanji: "六月天講咧落大雪，實在誠有局。",
    tailo: "La̍k-gue̍h-thinn kóng teh lo̍h tuā-seh, si̍t-tsāi tsiânn ū-kio̍k.",
  },
  {
    hanji:
      "頭擺露營誠有局，毋但暗時欲蹛的布棚愛家己搭，煮食嘛愛先學會曉燃柴起火。",
    tailo:
      "Thâu-pái lōo-iânn tsiânn ū-kio̍k, m̄-nā àm-sî beh tuà ê pòo-pênn ài ka-kī tah, tsú-tsia̍h mā ài sing o̍h ē-hiáu hiânn-tshâ khí-hué.",
  },
  {
    hanji: "用鹹草織的大甲蓆，睏著軟略閣袂翕熱，品質真讚！",
    tailo:
      "Iōng kiâm-tsháu tsit ê Tāi-kah-tshio̍h, khùn tio̍h nńg-lio̍h koh bē hip-jua̍h, phín-tsit tsin tsán!",
  },
  {
    hanji: "伊做茶米的中盤欲成十冬矣。",
    tailo: "I tsò tê-bí ê tiong-puânn beh tsiânn tsa̍p tang--ah.",
  },
  {
    hanji: "以早蹛山邊的人，著愛鬥水筧引山水入來厝裡。",
    tailo:
      "Í-tsá tuà suann-pinn ê lâng, tio̍h-ài tàu tsuí-kíng ín suann-tsuí ji̍p-lâi tshù--lí.",
  },
  {
    hanji: "咱明仔載欲上台表演，定著袂使失氣。",
    tailo:
      "Lán bîn-á-tsài beh tsiūnn-tâi piáu-ián, tiānn-tio̍h bē-sái sit-khuì.",
  },
  {
    hanji:
      "阮母仔真儼硬，毋但洗衫、煮飯、飼精牲仔，嘛愛佈田、挲草、鬥割稻仔，逐項都做甲齊著。",
    tailo:
      "Guán bú--á tsin giám-ngē, m̄-nā sé-sann, tsú-pn̄g, tshī tsing-senn-á, mā ài pòo-tshân, so-tsháu, tàu kuah-tiū-á, ta̍k hāng to tsò kah tsiâu tio̍h.",
  },
  {
    hanji: "𪜶翁仔某自離緣了後就無交葛矣。",
    tailo: "In ang-á-bóo tsū lī-iân liáu-āu tō bô kau-kat--ah.",
  },
  {
    hanji: "這齣戲咧搬三代之間的感情交葛，予人看甲霧嗄嗄。",
    tailo:
      "Tsit tshut hì teh puann sann tāi tsi-kan ê kám-tsîng kau-kat, hōo lâng khuànn kah bū-sà-sà.",
  },
  {
    hanji: "石距是我上愛食的海味。",
    tailo: "Tsio̍h-kī sī guá siōng ài tsia̍h ê hái-bī.",
  },
  {
    hanji: "這支刀仔利劍劍，細膩，毋通切著手。",
    tailo:
      "Tsit ki to-á lāi-kiàm-kiàm, sè-jī, m̄-thang tshiat-tio̍h tshiú.",
  },
  {
    hanji: "狗母鮻誠少排佇魚架仔賣，上捷提來做魚丸、魚酥抑是魚拊。",
    tailo:
      "Káu-bó-so tsiânn tsió pâi tī hî-kè-á bē, siōng tsia̍p the̍h-lâi tsò hî-uân, hî-soo ia̍h-sī hî-hú.",
  },
  {
    hanji: "烏肉底的阿雪穿素色的衫，看著誠蔭肉。",
    tailo:
      "Oo-bah-té ê A-suat tshīng sòo-sik ê sann, khuànn tio̍h tsiânn ìm bah.",
  },
  {
    hanji: "𪜶兩同姒仔感情真峇，連顧囝都相放伴，嘛會相替換載囡仔去讀冊。",
    tailo:
      "In nn̄g tâng-sāi-á kám-tsîng tsin bā, liân kòo kiánn to sio-pàng-phuānn, mā ē sio-thè-uānn tsài gín-á khì tha̍k-tsheh.",
  },
  {
    hanji: "關節炎若夯起來，骨目就會痠軟疼。",
    tailo: "Kuan-tsat-iām nā giâ--khí-lâi, kut-ba̍k tō ē sng-nńg-thiànn.",
  },
  {
    hanji: "尿酸若躘懸，就較會著疼風，傷重的連骨節都變形去。",
    tailo:
      "Jiō-sng nā liòng kuân, tō khah ē tio̍h thiànn-hong, siong-tiōng--ê liân kut-tsat to piàn-hîng--khì.",
  },
  {
    hanji: "網路頂有誠濟騙錢、拐人的術仔，咱著愛較斟酌咧。",
    tailo:
      "Bāng-lōo-tíng ū tsiânn tsē phiàn tsînn, kuái--lâng ê su̍t-á, lán tio̍h-ài khah tsim-tsiok--leh.",
  },
  {
    hanji: "你這箍術仔，敢講毋敢做。",
    tailo: "Lí tsit khoo su̍t-á, kánn kóng m̄ kánn tsò.",
  },
  {
    hanji: "換一領衫換規半晡，啊是當時才會當出門唅？",
    tailo:
      "Uānn tsi̍t niá sann uānn kui-puànn-poo, ah sī tang-sî tsiah ē-tàng tshut-mn̂g--hannh?",
  },
  {
    hanji: "我等規晡矣，伊猶未來。",
    tailo: "Guá tán kui-poo--ah, i iáu-buē lâi.",
  },
  {
    hanji: "早若知影會著賊偷，當初時就毋通共遮濟會仔錢留佇厝裡。",
    tailo:
      "Tsá nā tsai-iánn ē tio̍h-tsha̍t-thau, tong-tshe-sî tō m̄-thang kā tsiah tsē huē-á-tsînn lâu tī tshù--lí.",
  },
  {
    hanji: "斯當時你若聽我的話，就袂舞甲遮爾歹收山。",
    tailo:
      "Su-tong-sî lí nā thiann guá ê uē, tō bē bú kah tsiah-nī pháinn-siu-suann.",
  },
  {
    hanji: "公司接著一張大訂單，生產線趕貨趕甲無閒𩑾𩑾。",
    tailo:
      "Kong-si tsiap-tio̍h tsi̍t tiunn tuā tīng-tuann, sing-sán-suànn kuánn huè kuánn kah bô-îng-tshih-tshih.",
  },
  {
    hanji: "𪜶老爸聽著好消息，笑甲喙仔裂獅獅。",
    tailo:
      "In lāu-pē thiann-tio̍h hó siau-sit, tshiò kah tshuì-á li̍h-sai-sai.",
  },
  {
    hanji: "我明仔載歇假，欲來去𬦰山。",
    tailo: "Guá bîn-á-tsài hioh-ká, beh lâi-khì peh-suann.",
  },
  {
    hanji: "舊曆過年有連紲一禮拜的歇假，阮規家伙仔欲來去環島旅行。",
    tailo:
      "Kū-li̍k kuè-nî ū liân-suà tsi̍t lé-pài ê hioh-ká, guán kui-ke-hué-á beh lâi-khì khuân-tó lí-hîng.",
  },
  {
    hanji:
      "今仔日並昨昏較生冷，你欲去公園散步，著共袚巾幔佇肩胛頭才出門。",
    tailo:
      "Kin-á-ji̍t phīng tsa-hng khah tshenn-líng, lí beh khì kong-hn̂g sàn-pōo, tio̍h kā phua̍h-kin mua tī king-kah-thâu tsiah tshut-mn̂g.",
  },
  {
    hanji: "農民足注意照時間共雞仔注預防射來防止𪜶著雞災。",
    tailo:
      "Lông-bîn tsiok tsù-ì tsiàu sî-kan kā ke-á tsù ī-hông-siā lâi hông-tsí in tio̍h ke-tse.",
  },
  {
    hanji: "宮廟做醮乞龜保平安的時，阿爸跋上濟桮，乞著彼隻上大隻的米龜。",
    tailo:
      "King-biō tsò-tsiò khit-ku pó-pîng-an ê sî, a-pah pua̍h siōng tsē pue, khit-tio̍h hit tsiah siōng tuā tsiah ê bí-ku.",
  },
  {
    hanji: "彼張銀票毋但舊爾爾，閣皺襞襞，專拗痕。",
    tailo:
      "Hit tiunn gîn-phiò m̄-nā kū niā-niā, koh jiâu-phé-phé, tsuan áu-hûn.",
  },
  {
    hanji: "伊已經予人縛咧矣，閣按怎滾躘嘛無效。",
    tailo:
      "I í-king hōo lâng pa̍k--leh--ah, koh án-tsuánn kún-liòng mā bô-hāu.",
  },
  {
    hanji: "彼个嬰仔真𠢕滾躘，愛小顧咧，毋通予伊摔落去眠床跤。",
    tailo:
      "Hit ê enn-á tsin gâu kún-liòng, ài sió kòo--leh, m̄-thang hōo i siak lo̍h-khì bîn-tshn̂g-kha.",
  },
  {
    hanji: "老師指導學生朗讀，要求聲音愛讀予清、讀予明。",
    tailo:
      "Lāu-su tsí-tō ha̍k-sing lóng-tho̍k, iau-kiû siann-im ài tha̍k hōo tshing, tha̍k hōo bîng.",
  },
  {
    hanji: "伊英語講甲足端的的，所以予電視台倩去報英語新聞。",
    tailo:
      "I Ing-gí kóng kah tsiok tuan-tiah--ê, sóo-í hōo tiān-sī-tâi tshiànn khì pò Ing-gí sin-bûn.",
  },
  {
    hanji:
      "以早稻稿曝焦做稻稿草，會使𩛩肥、飼牛、燃火、崁草厝……，真有路用。",
    tailo:
      "Í-tsá tiū-kó pha̍k-ta tsò tiū-kó-tsháu, ē-sái kauh-puî, tshī gû, hiânn-hué, khàm tsháu-tshù......, tsin ū-lōo-īng.",
  },
  {
    hanji: "頭幫車是透早五點半起行，若欲坐跤手愛較緊咧。",
    tailo:
      "Thâu-pang-tshia sī thàu-tsá gōo tiám puànn khí-kiânn, nā beh tsē kha-tshiú ài khah kín--leh.",
  },
  {
    hanji: "逐冬上元暝的時，有真濟人攏會去鹽水看蜂仔炮。",
    tailo:
      "Ta̍k tang Siōng-guân-mê ê sî, ū tsin tsē lâng lóng ē khì Kiâm-tsuí khuànn phang-á-phàu.",
  },
  {
    hanji: "伊猶佇線頂等欲佮你講話。",
    tailo: "I iáu tī suànn-tíng tán beh kah lí kóng-uē.",
  },
  {
    hanji: "這擺的花燈真趣味，線頂有真濟人咧討論。",
    tailo:
      "Tsit pái ê hue-ting tsin tshù-bī, suànn-tíng ū tsin tsē lâng teh thó-lūn.",
  },
  {
    hanji: "你無必要為著這款小可代誌就遐煩惱。",
    tailo:
      "Lí bô pit-iàu uī-tio̍h tsit khuán sió-khuá tāi-tsì tō hiah huân-ló.",
  },
  {
    hanji: "伊算是阮公司的大姊頭仔，萬項代誌攏伊咧發落。",
    tailo:
      "I sǹg-sī guán kong-si ê tuā-tsí-thâu-á, bān-hāng tāi-tsì lóng i teh hua̍t-lo̍h.",
  },
  {
    hanji: "這搭是彼个大姊頭仔的地頭，你著較細膩咧。",
    tailo:
      "Tsit-tah sī hit ê tuā-tsí-thâu-á ê tē-thâu, lí tio̍h khah sè-jī--leh.",
  },
  {
    hanji: "時間無早矣，咱好轉來去矣。",
    tailo: "Sî-kan bô tsá--ah, lán hó tńg--lâi-khì--ah.",
  },
  {
    hanji:
      "俗語講：「七坐八爬九發牙」，毋過這馬的囡仔六個月就咧發奶齒矣。",
    tailo:
      "Sio̍k-gí kóng, “tshit tsē peh pê káu huat-gê”, m̄-koh tsit-má ê gín-á la̍k kò gue̍h tō teh huat ling-khí--ah.",
  },
  {
    hanji: "這欉玉蘭已經咧拍莓矣，免偌久花就會一蕊一蕊相紲開。",
    tailo:
      "Tsit tsâng gio̍k-lân í-king teh phah-m̂--ah, bián guā-kú hue tō ē tsi̍t luí tsi̍t luí sio-suà khui.",
  },
  {
    hanji: "誠久無落雨矣，水庫的水一直消蝕落去。",
    tailo:
      "Tsiânn kú bô lo̍h-hōo--ah, tsuí-khòo ê tsuí it-ti̍t siau-si̍h--lo̍h-khì.",
  },
  {
    hanji: "你愛把握這擺的機會，這號好空的毋是定定有的。",
    tailo:
      "Lí ài pá-ak tsit pái ê ki-huē, tsit-lō hó-khang--ê m̄ sī tiānn-tiānn ū--ê.",
  },
  {
    hanji: "新聞報講半暝仔監獄有犯人偷走出去，今警方當咧四界搜揣。",
    tailo:
      "Sin-bûn pò kóng puànn-mê-á kann-ga̍k ū huān-lâng thau tsáu--tshut-khì, tann kíng-hong tng-teh sì-kè tshiau-tshuē.",
  },
  {
    hanji: "欲了解這个議題，你聽好先上網搜揣相關的資料。",
    tailo:
      "Beh liáu-kái tsit ê gī-tê, lí thìng-hó sing tsiūnn-bāng tshiau-tshuē siong-kuan ê tsu-liāu.",
  },
  {
    hanji: "古早人欲有一領仔衫通穿，著家己經布來做，真誠費氣。",
    tailo:
      "Kóo-tsá-lâng beh ū tsi̍t-niá-á sann thang tshīng, tio̍h ka-kī kenn-pòo lâi tsò, tsin-tsiânn huì-khì.",
  },
  {
    hanji: "咱作穡人著儼硬，雖罔剾風曝日，閣較艱苦嘛著拚。",
    tailo:
      "Lán tsoh-sit-lâng tio̍h giám-ngē, sui-bóng khau-hong pha̍k-ji̍t, koh-khah kan-khóo mā tio̍h piànn.",
  },
  {
    hanji: "賣這合仔趁，本錢二五賣五十。",
    tailo: "Bē tse ha̍p-á-thàn, pún-tsînn jī gōo bē gōo-tsa̍p.",
  },
  {
    hanji: "阮這个孫新婦，人生做真媠，嘛足有孝。",
    tailo:
      "Guán tsit ê sun-sin-pū, lâng senn-tsò tsin suí, mā tsiok iú-hàu.",
  },
  {
    hanji: "阮姪仔咧欲娶某矣，厝裡加一个孫新婦，阮小弟足歡喜的。",
    tailo:
      "Guán ti̍t-á teh-beh tshuā-bóo--ah, tshù--lí ke tsi̍t ê sun-sin-pū, guán sió-tī tsiok huann-hí--ê.",
  },
  {
    hanji: "賣這雖然較末趁，毋過若有銷是猶會做得。",
    tailo:
      "Bē tse sui-jiân khah bua̍t-thàn, m̄-koh nā ū-siau sī iáu ē-tsò--tit.",
  },
  {
    hanji: "伊見若開喙就無好話，袂輸古早人咧講的「大妗喙，拭屎桮」。",
    tailo:
      "I kiàn-nā khui-tshuì tō bô hó-uē, bē-su kóo-tsá-lâng teh kóng--ê “tuā-kīm-tshuì, tshit sái-pue”.",
  },
  {
    hanji: "𪜶囝都讀大學矣，猶閣咧煩惱伊有食飯無，真正是著囝甘。",
    tailo:
      "In kiánn to tha̍k tāi-ha̍k--ah, iáu-koh teh huân-ló i ū tsia̍h-pn̄g--bô, tsin-tsiànn sī tio̍h-kiánn-kam.",
  },
  {
    hanji: "𪜶序大人年歲有矣，這馬兄弟仔輪火鬮咧共照顧。",
    tailo:
      "In sī-tuā-lâng nî-huè ū--ah, tsit-má hiann-tī-á lûn-hué-khau teh kā tsiàu-kòo.",
  },
  {
    hanji: "地基愛拍予平棒，厝起了才會在。",
    tailo: "Tē-ki ài phah hōo pênn-pāng, tshù khí liáu tsiah ē tsāi.",
  },
  {
    hanji: "家伙若是分了有平棒，就無尻川後話通講。",
    tailo:
      "Ke-hué nā-sī pun liáu ū pênn-pāng, tō bô kha-tshng-āu-uē thang kóng.",
  },
  {
    hanji: "你若欲去參加演講比賽，想欲講甲會平棒閣紲拍，著愛下工夫。",
    tailo:
      "Lí nā beh khì tsham-ka ián-káng pí-sài, siūnn-beh kóng kah ē pênn-pāng koh suà-phah, tio̍h-ài hē kang-hu.",
  },
  {
    hanji: "擔頭兩爿著囥予四伨，才袂重頭輕。",
    tailo:
      "Tànn-thâu nn̄g-pîng tio̍h khǹg hōo sì-thīn, tsiah bē tāng-thâu-khin.",
  },
  {
    hanji: "𪜶兩个個性會合，閣誠四伨，後個月就欲結婚矣。",
    tailo:
      "In nn̄g ê kò-sìng ē ha̍h, koh tsiânn sì-thīn, āu kò gue̍h tō beh kiat-hun--ah.",
  },
  {
    hanji: "公車佇車牌仔跤擋恬，予人客落車。",
    tailo:
      "Kong-tshia tī tshia-pâi-á-kha tòng-tiām, hōo lâng-kheh lo̍h-tshia.",
  },
  {
    hanji: "躼跤蠓雖然袂叮人，毋過看著真驚人。",
    tailo:
      "Lò-kha-báng sui-jiân bē tìng--lâng, m̄-koh khuànn tio̍h tsin kiann--lâng.",
  },
  {
    hanji: "伊種著𪜶阿公，跤躼手躼，朋友攏叫伊躼跤蠓。",
    tailo:
      "I tsíng-tio̍h in a-kong, kha lò tshiú lò, pîng-iú lóng kiò i lò-kha-báng.",
  },
  {
    hanji: "這粒銃子根本都無入銃藥，莫怪會彈袂出去。",
    tailo:
      "Tsit lia̍p tshìng-tsí kin-pún to bô ji̍p tshìng-io̍h, bo̍k-kuài ē tuānn bē tshut--khì.",
  },
  {
    hanji: "兵營的軍火庫囤真濟銃藥。",
    tailo: "Ping-iânn ê kun-hué-khòo tún tsin tsē tshìng-io̍h.",
  },
  {
    hanji: "毋但過冬鳥會綴季節固定遷徙，有一寡蟲豸佮魚仔嘛會按呢。",
    tailo:
      "M̄-nā kuè-tang-tsiáu ē tuè kuì-tseh kòo-tīng tshian-suá, ū tsi̍t-kuá thâng-thuā kah hî-á mā ē án-ne.",
  },
  {
    hanji: "逐冬正月初二阮細姑仔攏會轉來做客。",
    tailo:
      "Ta̍k tang tsiann-gue̍h tshe-jī guán sè-koo-á lóng ē tńg-lâi tsò-kheh.",
  },
  {
    hanji: "新娘花真受歡迎，致使有真濟人活無仝的品種出來。",
    tailo:
      "Sin-niû-hue tsin siū huan-gîng, tì-sú ū tsin tsē lâng hua̍t bô kāng ê phín-tsíng tshut--lâi.",
  },
  {
    hanji: "古早人結婚，新娘攏會結紅絳絳的新娘花。",
    tailo:
      "Kóo-tsá-lâng kiat-hun, sin-niû lóng ē kat âng-kòng-kòng ê sin-niû-hue.",
  },
  {
    hanji: "阿姊結婚彼工，捧的彼束新娘花看著誠媠。",
    tailo:
      "A-tsí kiat-hun hit kang, phóng ê hit sok sin-niû-hue khuànn tio̍h tsiânn suí.",
  },
  {
    hanji:
      "伊做人真公道，自來毋捌傍官靠勢，嘛無咧看大官虎的面色來做代誌。",
    tailo:
      "I tsò-lâng tsin kong-tō, tsū-lâi m̄ bat pn̄g-kuann-khò-sè, mā bô teh khuànn tuā-kuann-hóo ê bīn-sik lâi tsò tāi-tsì.",
  },
  {
    hanji: "做生理難免有大小月，總是，掩來扯去猶會得過。",
    tailo:
      "Tsò-sing-lí lân-bián ū tuā-sió-gue̍h, tsóng--sī, am-lâi-tshé-khì iáu ē-tit-kuè.",
  },
  {
    hanji: "查某人上驚去拄著採花蜂。",
    tailo: "Tsa-bóo-lâng siōng kiann khì tú-tio̍h tshái-hue-phang.",
  },
  {
    hanji: "彼條溪有捲螺仔水，毋通落去耍。",
    tailo: "Hit tiâu khe ū kńg-lê-á-tsuí, m̄-thang lo̍h-khì sńg.",
  },
  {
    hanji: "練武的人工夫好䆀，看伊徛馬勢就知。",
    tailo: "Liān-bú ê lâng kang-hu hó bái, khuànn i khiā-bé-sè tō tsai.",
  },
  {
    hanji: "阮阿伯是做木的，𪜶厝裡的成格攏家己創的。",
    tailo:
      "Guán a-peh sī tsò-ba̍k--ê, in tshù--lí ê tshiânn-kik lóng ka-kī tshòng--ê.",
  },
  {
    hanji: "伊閣咧起番矣，咱就先莫插伊。",
    tailo: "I koh teh khí-huan--ah, lán tō sing mài tshap--i.",
  },
  {
    hanji: "你毋通逐項代誌攏放外外。",
    tailo: "Lí m̄-thang ta̍k hāng tāi-tsì lóng pàng-guā-guā.",
  },
  {
    hanji: "媠，媠無十全；䆀，䆀無加圇。",
    tailo: "Suí, suí bô tsa̍p-tsn̂g; bái, bái bô ka-nn̂g.",
  },
  {
    hanji: "童乩上童，就會那唸咒語那畫符仔。",
    tailo: "Tâng-ki tsiūnn-tâng, tō ē ná liām tsiù-gí ná uē hû-á.",
  },
  {
    hanji: "佇韓國娘仔豆是好食物，佇臺灣無幾个人敢食。",
    tailo:
      "Tī Hân-kok niû-á-tāu sī hó-tsia̍h mi̍h, tī Tâi-uân bô kuí ê lâng kánn tsia̍h.",
  },
  {
    hanji: "若欲共環保做予好，塑膠橐仔著愛先減量。",
    tailo:
      "Nā beh kā khuân-pó tsò hōo hó, sok-ka-lok-á tio̍h-ài sing kiám liōng.",
  },
  {
    hanji: "阿母用珠仔釘共褲跤的拗裒鉼予好，才用裁縫車共車予好勢。",
    tailo:
      "A-bú iōng tsu-á-ting kā khòo-kha ê áu-pôo pín hōo hó, tsiah iōng tshâi-hông-tshia kā tshia hōo hó-sè.",
  },
  {
    hanji: "做人愛平正，袂當有私心。",
    tailo: "Tsò-lâng ài pênn-tsiànn, bē-tàng ū su-sim.",
  },
  {
    hanji: "我徛佇山頂看山跤的車陣，一台一台相接寬寬仔行，袂輸一尾蟲咧。",
    tailo:
      "Guá khiā tī suann-tíng khuànn suann-kha ê tshia-tīn, tsi̍t tâi tsi̍t tâi sio-tsiap khuann-khuann-á kiânn, bē-su tsi̍t bué thâng--leh.",
  },
  {
    hanji: "軍中的班長號令落去，所有的阿兵哥攏徛騰騰。",
    tailo:
      "Kun-tiong ê pan-tiúnn hō-līng--lo̍h-khì, sóo-ū ê a-ping-ko lóng khiā-thîng-thîng.",
  },
  {
    hanji: "這擺的計畫，只要李校長號令落去，逐家就開始進行。",
    tailo:
      "Tsit pái ê kè-uē, tsí-iàu Lí hāu-tiúnn hō-līng--lo̍h-khì, ta̍k-ke tō khai-sí tsìn-hîng.",
  },
  {
    hanji: "這个人真有本等，連虎也乖乖仔聽伊的號令。",
    tailo:
      "Tsit ê lâng tsin ū pún-tíng, liân hóo iā kuai-kuai-á thiann i ê hō-līng.",
  },
  {
    hanji: "𪜶兜的電火點甲光焱焱，毋過佇咧外口叫門，煞攏無人應。",
    tailo:
      "In tau ê tiān-hué tiám kah kng-iānn-iānn, m̄-koh tī-leh guā-kháu kiò-mn̂g, suah lóng bô lâng ìn.",
  },
  {
    hanji: "倚晝的日頭光爍爍，照甲目睭強欲擘袂開。",
    tailo:
      "Uá-tàu ê ji̍t-thâu kng-sih-sih, tsiò kah ba̍k-tsiu kiōng-beh peh bē khui.",
  },
  {
    hanji: "阮囝上饞食，看著好食物目睭就光爍爍。",
    tailo:
      "Guán kiánn siōng sâi-tsia̍h, khuànn-tio̍h hó-tsia̍h mi̍h ba̍k-tsiu tō kng-sih-sih.",
  },
  {
    hanji: "房間內暗摸摸，你欲看冊毋著愛共電火開開。",
    tailo:
      "Pâng-king-lāi àm-bong-bong, lí beh khuànn tsheh m̄ tio̍h-ài kā tiān-hué khui--khui.",
  },
  {
    hanji: "都遮爾暗矣，有啥物代誌等明仔載才閣講。",
    tailo:
      "To tsiah-nī àm--ah, ū siánn-mih tāi-tsì tán bîn-á-tsài tsiah-koh kóng.",
  },
  {
    hanji: "咱先坐高鐵來去臺中，才閣盤火車去大肚參觀磺溪書院。",
    tailo:
      "Lán sing tsē ko-thih lâi-khì Tâi-tiong, tsiah-koh puânn hué-tshia khì Tuā-tōo tsham-kuan Hông-khe Su-īnn.",
  },
  {
    hanji: "聽講𪜶公司出代誌矣，去予人倒一條數，閣真大條呢！",
    tailo:
      "Thiann-kóng in kong-si tshut-tāi-tsì--ah, khì hōo lâng tó tsi̍t tiâu siàu, koh tsin tuā tiâu--neh!",
  },
  {
    hanji: "伊那行那耍手機仔，無細膩踢著石頭，險險仔栽落去圳溝仔底。",
    tailo:
      "I ná kiânn ná sńg tshiú-ki-á, bô-sè-jī that-tio̍h tsio̍h-thâu, hiám-hiám-á tsai lo̍h-khì tsùn-kau-á-té.",
  },
  {
    hanji: "伊那行那耍手機仔，攏無斟酌咧看路，險仔去予車挵著。",
    tailo:
      "I ná kiânn ná sńg tshiú-ki-á, lóng bô tsim-tsiok teh khuànn lōo, hiám-á khì hōo tshia lòng--tio̍h.",
  },
  {
    hanji: "美國的中西部不時有絞螺仔風的危害，造成性命、財產真大的損失。",
    tailo:
      "Bí-kok ê tiong-se-pōo put-sî ū ká-lê-á-hong ê guî-hāi, tsō-sîng sènn-miā, tsâi-sán tsin tuā ê sún-sit.",
  },
  {
    hanji: "當今的臺北所在徛的人猶是出外人較濟。",
    tailo:
      "Tong-kim ê Tâi-pak sóo-tsāi khiā ê lâng iáu-sī tshut-guā-lâng khah tsē.",
  },
  {
    hanji: "阿兄𤆬阮去園裡起塗窯，準備炕番薯來食。",
    tailo:
      "A-hiann tshuā guán khì hn̂g--lí khí thôo-iô, tsún-pī khòng han-tsî lâi tsia̍h.",
  },
  {
    hanji:
      "古早味的塗窯雞人人愛，這馬店面是開甲窒倒街，欲食隨時嘛有通買。",
    tailo:
      "Kóo-tsá-bī ê thôo-iô-ke lâng-lâng ài, tsit-má tiàm-bīn sī khui kah that-tó-ke, beh tsia̍h suî-sî mā ū thang bé.",
  },
  {
    hanji: "生理人錢水才會較活，若阮作穡人就較乏。",
    tailo:
      "Sing-lí-lâng tsînn-tsuí tsiah ē khah ua̍h, nā guán tsoh-sit-lâng tō khah ha̍t.",
  },
  {
    hanji: "阮董事長的錢水真飽足。",
    tailo: "Guán táng-sū-tiúnn ê tsînn-tsuí tsin pá-tsiok.",
  },
  {
    hanji: "跳菜股，娶媠某；偷挽蔥，嫁好翁。",
    tailo: "Thiàu tshài-kóo, tshuā suí bóo; thau bán tshang, kè hó ang.",
  },
  {
    hanji: "阿媽佇田裡拍菜股，一股一股的菜蔬攏成做飯桌頂的好料理。",
    tailo:
      "A-má tī tshân--lí phah tshài-kóo, tsi̍t kóo tsi̍t kóo ê tshài-se lóng tsiânn-tsò pn̄g-toh-tíng ê hó liāu-lí.",
  },
  {
    hanji: "金光黨假做𪜶後生的同窗，共伊拐真濟錢去。",
    tailo:
      "Kim-kong-tóng ké-tsò in hāu-senn ê tông-tshong, kā i kuái tsin tsē tsînn--khì.",
  },
  {
    hanji: "你明明都知影伊無欲來，閣假做毋知。",
    tailo: "Lí bîng-bîng to tsai-iánn i bô beh lâi, koh ké-tsò m̄ tsai.",
  },
  {
    hanji: "紅嬰仔腹肚枵矣，緊提牛奶粉來泡予伊食。",
    tailo:
      "Âng-enn-á pak-tóo-iau--ah, kín the̍h gû-ling-hún lâi phàu hōo i tsia̍h.",
  },
  {
    hanji: "我無細膩共稅金單仔拍毋見矣，著閣來去申請一張。",
    tailo:
      "Guá bô-sè-jī kā suè-kim tuann-á phah-m̄-kìnn--ah, tio̍h koh lâi-khì sin-tshíng--tsi̍t-tiunn.",
  },
  {
    hanji: "風颱咧欲上陸矣，沿海的庄民攏掣咧等。",
    tailo:
      "Hong-thai teh-beh tsiūnn-lio̍k--ah, iân-hái ê tsng-bîn lóng tshuah leh tán.",
  },
  {
    hanji: "這陣腹肚真枵，緊叫一碗麵來掠枵。",
    tailo:
      "Tsit-tsūn pak-tóo tsin iau, kín kiò tsi̍t uánn mī lâi lia̍h-iau.",
  },
  {
    hanji: "先食寡四秀仔小止飢一下，才有氣力通繼續做工課。",
    tailo:
      "Sing tsia̍h kuá sì-siù-á sió tsí-ki--tsi̍t-ē, tsiah ū khuì-la̍t thang kè-sio̍k tsò khang-khuè.",
  },
  {
    hanji: "細漢愛認真學，大漢才會成樣。",
    tailo: "Sè-hàn ài jīn-tsin o̍h, tuā-hàn tsiah ē tsiânn-iūnn.",
  },
  {
    hanji: "早起去園裡作穡，煞去予痴哥草黏甲規褲跤。",
    tailo:
      "Tsá-khí khì hn̂g--lí tsoh-sit, suah khì hōo tshi-ko-tsháu liâm kah kui khòo-kha.",
  },
  {
    hanji: "會記得伊細漢的時都真細粒子，想袂到大漢了後變甲遮勇壯。",
    tailo:
      "Ē-kì-tit i sè-hàn ê sî to tsin sè-lia̍p-tsí, siūnn-bē-kàu tuā-hàn liáu-āu piàn kah tsiah ióng-tsòng.",
  },
  {
    hanji: "咱厝內逐工攏著摒盪保持衛生。",
    tailo: "Lán tshù-lāi ta̍k-kang lóng tio̍h piànn-tn̄g pó-tshî uē-sing.",
  },
  {
    hanji: "阮舅公食甲百外歲矣，是正港好命的老長壽。",
    tailo:
      "Guán kū-kong tsia̍h kah pah-guā huè--ah, sī tsiànn-káng hó-miā ê lāu-tiông-siū.",
  },
  {
    hanji: "雨落規禮拜，真無簡單出日頭矣，趁這个流擺緊共棉襀被挔出來曝。",
    tailo:
      "Hōo lo̍h kui lé-pài, tsin bô kán-tan tshut-ji̍t-thâu--ah, thàn tsit ê lâu-pái kín kā mî-tsioh-phuē hiannh tshut-lâi pha̍k.",
  },
  {
    hanji: "你敢知影雞母蟲就是龜仔的囝？",
    tailo: "Lí kám tsai-iánn ke-bó-thâng tō sī ku-á ê kiánn?",
  },
  {
    hanji: "農藥佮肥料下了過頭是茶樹敗欉的主要原因。",
    tailo:
      "Lông-io̍h kah puî-liāu hē liáu kuè-thâu sī tê-tshiū pāi-tsâng ê tsú-iàu guân-in.",
  },
  {
    hanji: "公園的樹仔攏照顧甲真好，逐欉都足健欉。",
    tailo:
      "Kong-hn̂g ê tshiū-á lóng tsiàu-kòo kah tsin hó, ta̍k tsâng to tsiok kiānn-tsâng.",
  },
  {
    hanji: "隔壁阿婆拄往生，𪜶孫用小銀燒跤尾錢，一張一張寬寬仔燒。",
    tailo:
      "Keh-piah a-pô tú óng-sing, in sun īng sió-gîn sio kha-bué-tsînn, tsi̍t tiunn tsi̍t tiunn khuann-khuann-á sio.",
  },
  {
    hanji: "聽講彼間廟的神明誠靈聖，發爐連香跤都燒了了。",
    tailo:
      "Thiann-kóng hit king biō ê sîn-bîng tsiânn lîng-siànn, huat-lôo liân hiunn-kha to sio-liáu-liáu.",
  },
  {
    hanji: "天寢放雨白，應該是風颱欲來矣。",
    tailo: "Thinn tshím pàng-hōo-pe̍h, ing-kai sī hong-thai beh lâi--ah.",
  },
  {
    hanji: "伊誠愛講人的尻川後話。",
    tailo: "I tsiânn ài kóng lâng ê kha-tshng-āu-uē.",
  },
  {
    hanji: "這个囡仔生做圓棍棍，肨奶肨奶有夠古錐。",
    tailo:
      "Tsit ê gín-á senn-tsò înn-kùn-kùn, hàng-ling-hàng-ling ū-kàu kóo-tsui.",
  },
  {
    hanji: "阮兜門口有種一欉月來香，天一下暗就規厝間芳貢貢。",
    tailo:
      "Guán tau mn̂g-kháu ū tsìng tsi̍t tsâng gue̍h-lâi-hiong, thinn tsi̍t-ē àm tō kui tshù-king phang-kòng-kòng.",
  },
  {
    hanji: "你按呢食甲肥朒朒，身軀圓輾輾，愛較捷運動咧喔！",
    tailo:
      "Lí án-ne tsia̍h kah puî-tsut-tsut, sin-khu înn-liàn-liàn, ài khah tsia̍p ūn-tōng--leh--ooh!",
  },
  {
    hanji: "為著欲飼這陣囡仔，伊無暝無日四界去做工課趁錢，正港是業命。",
    tailo:
      "Uī-tio̍h beh tshī tsit tīn gín-á, i bô-mê-bô-ji̍t sì-kè khì tsò khang-khuè thàn-tsînn, tsiànn-káng sī gia̍p-miā.",
  },
  {
    hanji: "兩爿房間中央的巷路誠狹，干焦會當相閃身爾爾。",
    tailo:
      "Nn̄g-pîng pâng-king tiong-ng ê hāng-lōo tsiânn e̍h, kan-na ē-tàng sio-siám-sin niā-niā.",
  },
  {
    hanji:
      "夜市仔咧賣的物件是三不等，有好有䆀，有貴有俗，目睭著擘予金才通買。",
    tailo:
      "Iā-tshī-á teh bē ê mi̍h-kiānn sī sam-put-tíng, ū hó ū bái, ū kuì ū sio̍k, ba̍k-tsiu tio̍h peh hōo kim tsiah thang bé.",
  },
  {
    hanji: "臺中女中是中部足濟學生想欲讀的學校。",
    tailo:
      "Tâi-tiong Lí-tiong sī tiong-pōo tsiok tsē ha̍k-sing siūnn-beh tha̍k ê ha̍k-hāu.",
  },
  {
    hanji: "這間飯店的女中真𠢕案內人客，較加嘛生理好。",
    tailo:
      "Tsit king pn̄g-tiàm ê lí-tiong tsin gâu àn-nāi lâng-kheh, khah-ke mā sing-lí hó.",
  },
  {
    hanji: "這个女中誠骨力，共頭家𪜶厝裡摒甲誠清氣。",
    tailo:
      "Tsit ê lí-tiong tsiânn kut-la̍t, kā thâu-ke in tshù--lí piànn kah tsiânn tshing-khì.",
  },
  {
    hanji: "你的目神明明都咧愛睏矣，猶毋緊去睏？",
    tailo:
      "Lí ê ba̍k-sîn bîng-bîng to teh ài-khùn--ah, iáu m̄ kín khì khùn?",
  },
  {
    hanji: "彼个人真孤毛，無愛佮人相交插。",
    tailo: "Hit ê lâng tsin koo-moo, bô ài kah lâng sio-kau-tshap.",
  },
  {
    hanji:
      "放孔明燈是誠好的民俗活動，毋過欲放著愛張持是毋是會造成火燒山。",
    tailo:
      "Pàng khóng-bîng-ting sī tsiânn hó ê bîn-sio̍k ua̍h-tāng, m̄-koh beh pàng tio̍h-ài tiunn-tî sī m̄ sī ē tsō-sîng hué-sio-suann.",
  },
  {
    hanji: "有遮爾濟朋友相疼痛，我才有今仔日。",
    tailo:
      "Ū tsiah-nī tsē pîng-iú sio-thiànn-thàng, guá tsiah ū kin-á-ji̍t.",
  },
  {
    hanji: "伊雖然有較少歲，毋過上台表演袂懍場，足有範的。",
    tailo:
      "I sui-jiân ū khah tsió-huè, m̄-koh tsiūnn-tâi piáu-ián bē lún-tiûnn, tsiok ū-pān--ê.",
  },
  {
    hanji: "你穿這軀衫毋但時行閣不止仔有範呢。",
    tailo:
      "Lí tshīng tsit su sann m̄-nā sî-kiânn koh put-tsí-á ū-pān--neh.",
  },
  {
    hanji: "花仔和尚的毛誠媠款，叫聲親像和尚咧硞木魚。",
    tailo:
      "Hue-á-huê-siūnn ê mn̂g tsiânn suí-khuán, kiò-siann tshin-tshiūnn huê-siūnn teh kho̍k bo̍k-hî.",
  },
  {
    hanji: "透中晝的時陣拄欲做工課，人煞喙焦喉渴，強強欲昏去。",
    tailo:
      "Thàu-tiong-tàu ê sî-tsūn tú beh tsò khang-khuè, lâng suah tshuì-ta-âu-khuah, kiōng-kiōng beh hūn--khì.",
  },
  {
    hanji: "你就是傷過順伊，伊才會共你食死死。",
    tailo: "Lí tō sī siunn kuè sūn--i, i tsiah ē kā lí tsia̍h-sí-sí.",
  },
  {
    hanji: "遮的蔥仔珠欲提來煎蔥仔卵。",
    tailo: "Tsia-ê tshang-á-tsu beh the̍h-lâi tsian tshang-á nn̄g.",
  },
  {
    hanji: "毋通規工屈佇厝裡，佮我出來去外口行行咧，對身體嘛較好。",
    tailo:
      "M̄-thang kui-kang khut tī tshù--lí, kah guá tshut-lâi-khì guā-kháu kiânn-kiânn--leh, tuì sin-thé mā khah hó.",
  },
  {
    hanji: "講著以早的可憐代，嚨喉管就滇。",
    tailo: "Kóng-tio̍h í-tsá ê khó-liân-tāi, nâ-âu-kńg tō tīnn.",
  },
  {
    hanji:
      "大水蟻就是覕佇漚柴內底作岫的白蟻，定定佇落黃酸雨做大水的時陣，會發翼飛出來相偝拍雄。",
    tailo:
      "Tuā-tsuí-hiā  tō sī bih tī àu-tshâ lāi-té tsoh-siū ê pe̍h-hiā, tiānn-tiānn tī lo̍h n̂g-sng-hōo tsò-tuā-tsuí ê sî-tsūn, ē huat si̍t pue tshut-lâi sio-āinn phah-hîng.",
  },
  {
    hanji: "這个囡仔真不受教，予人真頭疼。",
    tailo: "Tsit ê gín-á tsin put siū-kàu, hōo lâng tsin thâu-thiànn.",
  },
  {
    hanji: "你這句話拄好講對伊的心肝穎仔入去。",
    tailo: "Lí tsit kù uē tú-hó kóng tuì i ê sim-kuann-ínn-á ji̍p--khì.",
  },
  {
    hanji: "看你寒甲規身軀爍爍顫，毋就緊提一領較厚的衫來穿，才袂去寒著。",
    tailo:
      "Khuànn lí kuânn kah kui-sin-khu sih-sih-tsùn, m̄-tō kín the̍h tsi̍t niá khah kāu ê sann lâi tshīng, tsiah bē khì kuânn--tio̍h.",
  },
  {
    hanji: "伊見若聽鬼仔古就驚甲爍爍顫。",
    tailo: "I kiàn-nā thiann kuí-á-kóo tō kiann kah sih-sih-tsùn.",
  },
  {
    hanji: "這雙布鞋予狗仔咬甲破糊糊。",
    tailo: "Tsit siang pòo-ê hōo káu-á kā kah phuà-kôo-kôo.",
  },
  {
    hanji: "咱會當飼孔雀魚抑是大肚魚仔來食水蛆。",
    tailo:
      "Lán ē-tàng tshī khóng-tshiok-hî ia̍h-sī tuā-tōo-hî-á lâi tsia̍h tsuí-tshi.",
  },
  {
    hanji: "定定穿布鞋共跤蹄仔包牢牢，指頭仔縫較會著水蛆。",
    tailo:
      "Tiānn-tiānn tshīng pòo-ê kā kha-tê-á pau-tiâu-tiâu, tsíng-thâu-á phāng khah ē tio̍h tsuí-tshi.",
  },
  {
    hanji: "阿舅的診所拄開業，阿爸送一塊牌匾共𪜶祝賀。",
    tailo:
      "A-kū ê tsín-sóo tú khai-gia̍p, a-pah sàng tsi̍t tè pâi-pián kā in tsiok-hō.",
  },
  {
    hanji: "七爺八爺攏會綴城隍爺出巡。",
    tailo: "Tshit-iâ Peh-iâ lóng ē tuè Sîng-hông-iâ tshut-sûn.",
  },
  {
    hanji: "恁兩个懸低差遐濟，袂輸七爺八爺咧。",
    tailo: "Lín nn̄g ê kuân-kē tsha hiah tsē, bē-su Tshit-iâ Peh-iâ--leh.",
  },
  {
    hanji: "阿兄佇全國運動會提著跳懸比賽的冠軍。",
    tailo:
      "A-hiann tī tsuân-kok ūn-tōng-huē the̍h-tio̍h thiàu-kuân pí-sài ê kuan-kun.",
  },
  {
    hanji: "暗時欲睏進前茶湯莫啉傷濟，半暝才免起來放尿。",
    tailo:
      "Àm-sî beh khùn tsìn-tsîng tê-thng mài lim siunn tsē, puànn-mê tsiah bián khí-lâi pàng-jiō.",
  },
  {
    hanji: "古早對唐山渡烏水溝來臺灣的人，總扯十个死六个，實在真無捨施。",
    tailo:
      "Kóo-tsá tuì Tn̂g-suann tōo Oo-tsuí-kau lâi Tâi-uân ê lâng, tsóng-tshé tsa̍p ê sí la̍k ê, si̍t-tsāi tsin bô-siá-sì.",
  },
  {
    hanji: "「人間條件」是一齣會當予外國人認捌臺灣文化的新劇。",
    tailo:
      "“Jîn-kan Tiâu-kiānn” sī tsi̍t tshut ē-tàng hōo guā-kok-lâng jīn-bat Tâi-uân bûn-huà ê sin-kio̍k.",
  },
  {
    hanji: "𪜶兩媽孫仔手牽手欲去公園散步。",
    tailo: "In nn̄g má-sun-á tshiú khan tshiú beh khì kong-hn̂g sàn-pōo.",
  },
  {
    hanji: "阿母攏用芳雪文咧洗身軀。",
    tailo: "A-bú lóng iōng phang-sap-bûn teh sé-sin-khu.",
  },
  {
    hanji: "佇日本時代，一箍的龍銀會當捾十斤的三層仔肉。",
    tailo:
      "Tī Ji̍t-pún sî-tāi, tsi̍t khoo ê liông-gîn ē-tàng kuānn tsa̍p kin ê sam-tsân-á-bah.",
  },
  {
    hanji: "桌頂的玻璃杯仔上好徙較內角咧，才袂無張持摔破去。",
    tailo:
      "Toh-tíng ê po-lê pue-á siōng-hó suá khah lāi-kak--leh, tsiah bē bô-tiunn-tî siak-phuà--khì.",
  },
  {
    hanji: "長篙形的內角加起來總共是三百六十度。",
    tailo:
      "Tn̂g-ko-hîng ê lāi-kak ka--khí-lâi tsóng-kiōng sī sann-pah la̍k-tsa̍p tōo.",
  },
  {
    hanji: "這是伊規暝無睏，激頭腦才寫出來的計畫書。",
    tailo:
      "Tse sī i kui mê bô khùn, kik-thâu-náu tsiah siá--tshut-lâi ê kè-uē-su.",
  },
  {
    hanji: "科學研究需要團隊合作，逐家相激頭腦，工課才做會媠氣。",
    tailo:
      "Kho-ha̍k gián-kiù su-iàu thuân-tuī ha̍p-tsok, ta̍k-ke sio-kik-thâu-náu, khang-khuè tsiah tsò ē suí-khuì.",
  },
  {
    hanji: "咱人四月初八是佛祖生，濟濟廟寺攏會舉辦浴佛法會。",
    tailo:
      "Lán-lâng sì-gue̍h tshe-peh sī Pu̍t-tsóo-senn, tsē-tsē biō-sī lóng ē kí-pān io̍k-pu̍t huat-huē.",
  },
  {
    hanji:
      "有人抾雨傘樹拄落落來的葉仔來治肝病，毋過有病應該愛去予醫生看才著。",
    tailo:
      "Ū lâng khioh hōo-suànn-tshiū tú lak--lo̍h-lâi ê hio̍h-á lâi tī kuann-pēnn, m̄-koh ū pēnn ing-kai ài khì hōo i-sing khuànn tsiah tio̍h.",
  },
  {
    hanji: "因為細葉欖仁樹的樹形親像雨傘，有人就共叫做雨傘樹。",
    tailo:
      "In-uī sè-hio̍h-lám-jîn-tshiū ê tshiū-hîng tshin-tshiūnn hōo-suànn, ū lâng tō kā kiò-tsò hōo-suànn-tshiū.",
  },
  {
    hanji:
      "「望冬生鵝卵」是咧講，做人阿母的雖然生做細粒子，毋過𪜶後生煞生做高長大漢。",
    tailo:
      "“Bāng-tang senn gô-nn̄g” sī teh kóng, tsò lâng a-bú--ê sui-jiân senn-tsò sè-lia̍p-tsí, m̄-koh in hāu-senn suah senn-tsò kau-tshiâng tuā-hàn.",
  },
  {
    hanji: "用𠕇柴做的鼓箸摃鼓，鼓聲響閣脆。",
    tailo:
      "Īng tīng-tshâ tsò ê kóo-tī kòng kóo, kóo-siann hiáng koh tshè.",
  },
  {
    hanji: "𪜶囝佇市內做生理，三時有陣才會轉來庄跤看序大人一擺。",
    tailo:
      "In kiánn tī tshī-lāi tsò-sing-lí, sam-sî-iú-tsūn tsiah ē tńg-lâi tsng-kha khuànn sī-tuā-lâng tsi̍t pái.",
  },
  {
    hanji: "恆春佮頭城佇七月半攏會搭孤棚，舉辦搶孤的活動。",
    tailo:
      "Hîng-tshun kah Thâu-siânn tī tshit-gue̍h-puànn lóng ē tah koo-pênn, kí-pān tshiúnn-koo ê ua̍h-tāng.",
  },
  {
    hanji: "伊搬的猴齊天通臺灣算上上腳的。",
    tailo:
      "I puann ê Kâu-Tsê-thian thong Tâi-uân sǹg siōng tsiūnn-kioh--ê.",
  },
  {
    hanji: "頂輩著愛牽教下輩，予𪜶知影做人做事的道理。",
    tailo:
      "Tíng-puè tio̍h-ài khan-kà ē-puè, hōo in tsai-iánn tsò-lâng tsò-sū ê tō-lí.",
  },
  {
    hanji: "伊今會予人掠入去關，煞毋知都你𠢕牽教來致蔭的。",
    tailo:
      "I tann ē hōo lâng lia̍h ji̍p-khì kuainn, suah m̄ tsai to lí gâu khan-kà lâi tì-ìm--ê.",
  },
  {
    hanji: "一年三節，攏有真濟社團會去軍中犒軍。",
    tailo:
      "Tsi̍t nî sann tseh, lóng ū tsin tsē siā-thuân ē khì kun-tiong khò-kun.",
  },
  {
    hanji: "今仔日是初一，拜拜的物件攢攢咧，愛來犒軍。",
    tailo:
      "Kin-á-ji̍t sī tshe-it, pài-pài ê mi̍h-kiānn tshuân-tshuân--leh, ài lâi khò-kun.",
  },
  {
    hanji: "新竹米粉佮柿餅是用九降風共水分吹予焦，氣味較好閣加真有囥。",
    tailo:
      "Sin-tik bí-hún kah khī-piánn sī iōng káu-kàng-hong kā tsuí-hun tshue hōo ta, khì-bī khah hó koh ke tsin ū khǹg.",
  },
  {
    hanji: "臺南的虱目魚足出名，聽講國姓爺嘛真愛食。",
    tailo:
      "Tâi-lâm ê sat-ba̍k-hî tsiok tshut-miâ, thiann-kóng Kok-sìng-iâ mā tsin ài tsia̍h.",
  },
  {
    hanji: "你這領衫的頷仔領會使紩一粒觸鈕仔共鈕起來，按呢看著會較撆紮。",
    tailo:
      "Lí tsit niá sann ê ām-á-niá ē-sái thīnn tsi̍t lia̍p tak-liú-á kā liú--khí-lâi, án-ne khuànn tio̍h ē khah pih-tsah.",
  },
  {
    hanji: "代誌舞甲亂操操閣袂得收山，就準倩仙來嘛無變撚。",
    tailo:
      "Tāi-tsì bú kah luān-tshau-tshau koh bē-tit siu-suann, tō tsún tshiànn sian lâi mā bô piàn-lián.",
  },
  {
    hanji: "時機䆀生理無蓋好做，毋過會曉變撚的人嘛是有才調趁大錢。",
    tailo:
      "Sî-ki bái sing-lí bô kài hó tsò, m̄-koh ē-hiáu piàn-lián ê lâng mā sī ū tsâi-tiāu thàn-tuā-tsînn.",
  },
  {
    hanji:
      "有人感覺運途袂順，會去請紅頭司公來制煞，其實認真做頭路才會有幫助。",
    tailo:
      "Ū lâng kám-kak ūn-tôo bē sūn, ē khì tshiánn âng-thâu sai-kong lâi tsè-suah, kî-si̍t jīn-tsin tsò-thâu-lōo tsiah ē ū pang-tsōo.",
  },
  {
    hanji: "日本人比賽相偃的時陣為著欲辟邪，會先搣鹽四界掖。",
    tailo:
      "Ji̍t-pún-lâng pí-sài sio-ián ê sî-tsūn uī-tio̍h beh phik-siâ, ē sing me iâm sì-kè iā.",
  },
  {
    hanji: "古早人時行用辟邪符來鎮煞保平安。",
    tailo:
      "Kóo-tsá-lâng sî-kiânn īng phik-siâ-hû lâi tìn-suah pó pîng-an.",
  },
  {
    hanji: "做人著愛留好名聲，百歲年老了後才會予人數念。",
    tailo:
      "Tsò-lâng tio̍h-ài lâu hó miâ-siann, pah-huè-nî-lāu liáu-āu tsiah ē hōo lâng siàu-liām.",
  },
  {
    hanji: "規山坪攏是菁仔欉，莫怪不時咧水崩山。",
    tailo:
      "Kui-suann-phiânn lóng sī tshenn-á-tsâng, bo̍k-kuài put-sî teh tsuí-pang-suann.",
  },
  {
    hanji: "這號物件佇阮庄跤是規山坪，無咧稀罕啦！",
    tailo:
      "Tsit-lō mi̍h-kiānn tī guán tsng-kha sī kui-suann-phiânn, bô teh hi-hán--lah!",
  },
  {
    hanji: "𪜶兩人講通和，想欲來拐我的退休金。",
    tailo:
      "In nn̄g lâng kóng-thong-hô, siūnn-beh lâi kuái guá ê thè-hiu-kim.",
  },
  {
    hanji: "阮後生今年予七娘媽做契囝，順紲共貫捾乞轉來通予伊保平安。",
    tailo:
      "Guán hāu-senn kin-nî hōo Tshit-niû-má tsò khè-kiánn, sūn-suà kā kǹg-kuānn khit tńg-lâi thang hōo i pó pîng-an.",
  },
  {
    hanji: "彼間餐廳的電火點甲光炎炎，煞無幾个人客來交關。",
    tailo:
      "Hit king tshan-thiann ê tiān-hué tiám kah kng-iām-iām, suah bô kuí ê lâng-kheh lâi kau-kuan.",
  },
  {
    hanji: "棒球場下昏暗的電火點甲光映映，檢采閣有精彩的比賽通好看矣。",
    tailo:
      "Pāng-kiû-tiûnn ē-hng-àm ê tiān-hué tiám kah kng-iànn-iànn, kiám-tshái koh ū tsing-tshái ê pí-sài thang-hó khuànn--ah.",
  },
  {
    hanji: "熱人下晡，若是熱翕翕閣烏天暗地，連鞭就會落大雨。",
    tailo:
      "Jua̍h--lâng ē-poo, nā-sī jua̍h-hip-hip koh oo-thinn-àm-tē, liâm-mi tō ē lo̍h tuā-hōo.",
  },
  {
    hanji: "伊有影好狗運，連行路都抾會著錢，提去買彩券嘛閣予伊著大獎。",
    tailo:
      "I ū-iánn hó-káu-ūn, liân kiânn-lōo to khioh ē tio̍h tsînn, the̍h-khì bé tshái-kuàn mā koh hōo i tio̍h tuā-tsióng.",
  },
  {
    hanji: "精肉豉好，滒魚漿落去煠，就是咱咧食的肉羹。",
    tailo:
      "Tsiann-bah sīnn hó, kō hî-tsiunn lo̍h-khì sa̍h, tō sī lán teh tsia̍h ê bah-kenn.",
  },
  {
    hanji: "油蔥粿搵蒜茸豆油食著上合味。",
    tailo: "Iû-tshang-kué ùn suàn-jiông tāu-iû tsia̍h tio̍h siōng ha̍h-bī.",
  },
  {
    hanji: "不管彼間餐廳的菜單閣較按怎換，我都感覺𪜶的菜毋捌合味過。",
    tailo:
      "Put-kuán hit king tshan-thiann ê tshài-tuann koh-khah án-tsuánn uānn, guá to kám-kak in ê tshài m̄ bat ha̍h-bī--kuè.",
  },
  {
    hanji: "伊真愛耍，風颱天走去海墘仔𨑨迌，去予湧絞落海，險險仔無命。",
    tailo:
      "I tsin ài sńg, hong-thai-thinn tsáu-khì hái-kînn-á tshit-thô, khì hōo íng ká lo̍h hái, hiám-hiám-á bô-miā.",
  },
  {
    hanji: "種作的收入真僫得料，定定大出的時會有物賣無價。",
    tailo:
      "Tsìng-tsoh ê siu-ji̍p tsin oh-tit liāu, tiānn-tiānn tuā-tshut ê sî ē ū mi̍h bē bô-kè.",
  },
  {
    hanji: "莫看水毋值錢，若洘旱一下久，水就是無價寶。",
    tailo:
      "Mài khuànn tsuí m̄ ta̍t-tsînn, nā khó-huānn tsi̍t-ē kú, tsuí tō sī bô-kè-pó.",
  },
  {
    hanji: "青苔仔是一種細隻鳥仔，佇都市的公園抑是學校攏看會著伊的影跡。",
    tailo:
      "Tshenn-tî-á sī tsi̍t tsióng sè tsiah tsiáu-á, tī too-tshī ê kong-hn̂g ia̍h-sī ha̍k-hāu lóng khuànn ē tio̍h i ê iánn-tsiah.",
  },
  {
    hanji: "厝內頭喙若濟，生活壓力加減會較重。",
    tailo:
      "Tshù-lāi thâu-tshuì nā tsē, sing-ua̍h ap-li̍k ke-kiám ē khah tāng.",
  },
  {
    hanji: "以早臺灣捌有幾若間報社出暗報，毋過到尾仔賰無半間。",
    tailo:
      "Í-tsá Tâi-uân bat ū kuí-nā king pò-siā tshut àm-pò, m̄-koh kàu bué--á  tshun bô puànn king.",
  },
  {
    hanji: "火鍋湯燒燙燙，若欲啉著愛細膩。",
    tailo: "Hué-ko-thng sio-thǹg-thǹg, nā beh lim tio̍h-ài sè-jī.",
  },
  {
    hanji: "所在無夠闊，物件愛相疊才袂鎮位。",
    tailo:
      "Sóo-tsāi bô-kàu khuah, mi̍h-kiānn ài sio-tha̍h tsiah bē tìn-uī.",
  },
  {
    hanji: "雖罔電子產品普及，咱人消磨紙的量都也無較減，猶原咧增加。",
    tailo:
      "Sui-bóng tiān-tsú sán-phín phóo-ki̍p, lán-lâng siau-môo tsuá ê liōng to iā bô khah kiám, iu-guân teh tsing-ka.",
  },
  {
    hanji: "回收若做了好，就會當減少資源的消磨。",
    tailo:
      "Huê-siu nā tsò liáu hó, tō ē-tàng kiám-tsió tsu-guân ê siau-môo.",
  },
  {
    hanji: "阿爸退休了後定定佇公園佮人泡茶、行棋咧消磨時間。",
    tailo:
      "A-pah thè-hiu liáu-āu tiānn-tiānn tī kong-hn̂g kah lâng phàu tê, kiânn-kî teh siau-môo sî-kan.",
  },
  {
    hanji:
      "趁秋天的流擺來去烏來𨑨迌，通看著規山坪誠媠款的楓仔葉當咧轉紅的光景。",
    tailo:
      "Thàn tshiu-thinn ê lâu-pái lâi-khì U-lai tshit-thô, thang khuànn-tio̍h kui-suann-phiânn tsiânn suí-khuán ê png-á-hio̍h tng-teh tńg âng ê kong-kíng.",
  },
  {
    hanji: "臺北一月時仔不時烏寒，罕得出日。",
    tailo: "Tâi-pak it-gue̍h-sî-á put-sî oo-kuânn, hán-tit tshut-ji̍t.",
  },
  {
    hanji: "討海人攏佇十二月到二月上烏寒的時陣去海墘撈鰻仔栽。",
    tailo:
      "Thó-hái-lâng lóng tī tsa̍p-jī--gue̍h kàu jī--gue̍h siōng oo-kuânn ê sî-tsūn khì hái-kînn hôo muâ-á-tsai.",
  },
  {
    hanji: "逐年十月中旬是臺東洛神花大出的流擺。",
    tailo:
      "Ta̍k-nî tsa̍p-gue̍h tiong-sûn sī Tâi-tang lo̍k-sîn-hue tuā-tshut ê lâu-pái.",
  },
  {
    hanji: "洛神花泡茶，食著酸微仔酸微，誠濟人愛啉。",
    tailo:
      "Lo̍k-sîn-hue phàu tê, tsia̍h tio̍h sng-bui-á-sng-bui, tsiânn tsē lâng ài lim.",
  },
  {
    hanji: "這站仔定定歹天，幾若工無出日矣。",
    tailo:
      "Tsit-tsām-á tiānn-tiānn pháinn-thinn, kuí-nā kang bô tshut-ji̍t--ah.",
  },
  {
    hanji: "冰櫥內底有一鼎綠豆湯，你去𣁳一碗來食。",
    tailo:
      "Ping-tû lāi-té ū tsi̍t tiánn li̍k-tāu-thng, lí khì khat tsi̍t uánn lâi tsia̍h.",
  },
  {
    hanji: "貨船若倚岸，工人就隨走過去運搬。",
    tailo:
      "Huè-tsûn nā uá-huānn, kang-lâng tō suî tsáu kuè-khì ūn-puann.",
  },
  {
    hanji: "古早交通無利便，若欲臺灣頭尾踅一輾，著盤山過嶺行幾若個月。",
    tailo:
      "Kóo-tsá kau-thong bô lī-piān, nā beh Tâi-uân thâu-bué se̍h tsi̍t liàn, tio̍h puânn-suann-kuè-niá kiânn kuí-nā kò gue̍h.",
  },
  {
    hanji: "塗水師共用賰的磚仔角載去糞埽場倒挕捒。",
    tailo:
      "Thôo-tsuí-sai kā iōng tshun ê tsng-á-kak tsài-khì pùn-sò-tiûnn tò-hìnn-sak.",
  },
  {
    hanji: "這項代誌愛留予組長家己來決定，你袂使僭權。",
    tailo:
      "Tsit hāng tāi-tsì ài lâu hōo tsoo-tiúnn ka-kī lâi kuat-tīng, lí bē-sái tsiàm-khuân.",
  },
  {
    hanji: "七里香的枝椏耐剪閣𠢕發新穎，種來做圍籬仔上合。",
    tailo:
      "Tshit-lí-hiong ê ki-ue nāi tsián koh gâu huat sin ínn, tsìng lâi tsò uî-lî-á siōng ha̍h.",
  },
  {
    hanji: "七里香的果黃黃閣芳芳，定定有鳥仔會飛來啄。",
    tailo:
      "Tshit-lí-hiong ê kó n̂g-n̂g koh phang-phang, tiānn-tiānn ū tsiáu-á ē pue lâi tok.",
  },
  {
    hanji: "破柴著對千對中央破，若無檢采柴箍會彈出去。",
    tailo:
      "Phuà-tshâ tio̍h tuì-tshian uì tiong-ng phuà, nā-bô kiám-tshái tshâ-khoo ē tuānn--tshut-khì.",
  },
  {
    hanji: "彼个賊仔入去人兜想欲共人偷提錢，對千主人轉來予人㨑著。",
    tailo:
      "Hit ê tsha̍t-á ji̍p-khì lâng tau siūnn-beh kā lâng thau-the̍h tsînn, tuì-tshian tsú-lâng tńg--lâi hōo lâng tsang--tio̍h.",
  },
  {
    hanji: "透早有出日，毋過阿義顛倒講會變天，千拄千下晡一點真正摔大雨。",
    tailo:
      "Thàu-tsá ū tshut-ji̍t, m̄-koh A-gī tian-tò kóng ē piàn-thinn, tshian-tú-tshian ē-poo tsi̍t tiám tsin-tsiànn siàng-tuā-hōo.",
  },
  {
    hanji: "雨若落會齊勻，山頭的柴樹仔看著就青蘢蘢。",
    tailo:
      "Hōo nā lo̍h ē tsiâu-ûn, suann-thâu ê tshâ-tshiū-á khuànn tio̍h tō tshenn-lìng-lìng.",
  },
  {
    hanji: "若欲治荔枝欉頂懸的臭腥龜仔，用雪文水共噴，不止仔有應效。",
    tailo:
      "Nā beh tī nāi-tsi-tsâng tíng-kuân ê tshàu-tshènn-ku-á, iōng sap-bûn-tsuí kā phùn, put-tsí-á ū ìng-hāu.",
  },
  {
    hanji: "坐著愛坐予好勢，跤按呢相袚袂看口得。",
    tailo:
      "Tsē tio̍h-ài tsē hōo hó-sè, kha án-ne sio-phua̍h bē-khuànn-kháu--tit.",
  },
  {
    hanji: "你是腦筋相袚是無，一人千一，四个人煞算做三千四。",
    tailo:
      "Lí sī náu-kin sio-phua̍h sī--bô, tsi̍t lâng tshing it, sì ê lâng suah sǹg-tsò sann-tshing sì.",
  },
  {
    hanji: "畫地形圖的三角點石杙仔攏會𫞼佇山尖。",
    tailo:
      "Uē tē-hîng-tôo ê sann-kak-tiám tsio̍h-khi̍t-á lóng ē tshāi tī suann-tsiam.",
  },
  {
    hanji: "傳統建築的山尖攏會做一寡好吉兆抑是辟邪的造作。",
    tailo:
      "Thuân-thóng kiàn-tio̍k ê suann-tsiam lóng ē tsò tsi̍t-kuá hó-kiat-tiāu ia̍h-sī phik-siâ ê tsō-tsok.",
  },
  {
    hanji: "伊不時都去有粉味的所在行踏，較加嘛致著歹囝症。",
    tailo:
      "I put-sî to khì ū hún-bī ê sóo-tsāi kiânn-ta̍h, khah-ke mā tì-tio̍h pháinn-kiánn-tsìng.",
  },
  {
    hanji: "你愛會記得吩咐剃頭師傅，毛繐莫閣鉸甲遐短矣。",
    tailo:
      "Lí ài ē-kì-tit huan-hù thì-thâu sai-hū, mn̂g-sui mài koh ka kah hiah té--ah.",
  },
  {
    hanji: "我這馬歲頭都食甲七、八十矣，鬢跤的毛繐攏齊白矣。",
    tailo:
      "Guá tsit-má huè-thâu to tsia̍h kah tshit, peh-tsa̍p--ah, pìn-kha ê mn̂g-sui lóng tsiâu pe̍h--ah.",
  },
  {
    hanji: "有真濟人會佇肉粽節彼工的正中晝，共生雞卵𫞼佇塗跤兜。",
    tailo:
      "Ū tsin tsē lâng ē tī Bah-tsàng-tseh hit kang ê tsiànn-tiong-tàu, kā tshenn ke-nn̄g tshāi tī thôo-kha-tau.",
  },
  {
    hanji: "伊是出名的生理虎，一寡細間的店攏去予伊接收去。",
    tailo:
      "I sī tshut-miâ ê sing-lí-hóo, tsi̍t-kuá sè king ê tiàm lóng khì hōo i tsiap-siu--khì.",
  },
  {
    hanji: "伊人破病蹛院，規个面仔白死殺，攏無血氣。",
    tailo:
      "I lâng phuà-pēnn tuà-īnn, kui-ê bīn-á pe̍h-sí-sat, lóng bô hueh-khì.",
  },
  {
    hanji: "你一定有掩崁啥物代誌，才會一直佇遐奸臣仔笑。",
    tailo:
      "Lí it-tīng ū am-khàm siánn-mih tāi-tsì, tsiah ē it-ti̍t tī hia kan-sîn-á-tshiò.",
  },
  {
    hanji: "伊替人坐罪，才會去內籬仔食免錢飯。",
    tailo:
      "I thè lâng tsē-tsuē, tsiah ē khì lāi-lî-á tsia̍h bián-tsînn-pn̄g.",
  },
  {
    hanji: "天拄拆箬，作穡人就已經起來巡田水矣。",
    tailo:
      "Thinn tú thiah-ha̍h, tsoh-sit-lâng tō í-king khí-lâi sûn-tshân-tsuí--ah.",
  },
  {
    hanji: "煮貢丸湯的時陣，摻一搣仔芹菜珠，不止仔合味。",
    tailo:
      "Tsú kòng-uân-thng ê sî-tsūn, tsham tsi̍t-me-á khîn-tshài-tsu, put-tsí-á ha̍h-bī.",
  },
  {
    hanji: "欲交論文彼站，伊苦無一工有四十八點鐘通用。",
    tailo:
      "Beh kau lūn-bûn hit-tsām, i khóo-bô tsi̍t kang ū sì-tsa̍p-peh tiám-tsing thang īng.",
  },
  {
    hanji: "天氣涼冷仔涼冷，出門愛加疊一領風幔。",
    tailo:
      "Thinn-khì liâng-líng-á-liâng-líng, tshut-mn̂g ài ke tha̍h tsi̍t niá hong-mua.",
  },
  {
    hanji: "該當然開就愛開，做人毋通遐㾀屎。",
    tailo:
      "Kai-tong-jiân khai tō ài khai, tsò-lâng m̄-thang hiah khiap-sái.",
  },
  {
    hanji: "我用罐仔倒匼，掠著一隻虼蚻。",
    tailo: "Guá iōng kuàn-á tò-khap, lia̍h-tio̍h tsi̍t tsiah ka-tsua̍h.",
  },
  {
    hanji: "借人錢銀抑是物件，若有寫借字會較有憑據。",
    tailo:
      "Tsioh lâng tsînn-gîn ia̍h-sī mi̍h-kiānn, nā ū siá tsioh-jī ē khah ū pîn-kì.",
  },
  {
    hanji: "布攄仔都烏汁汁矣，你閣提來攄塗跤。",
    tailo: "Pòo-lu-á to oo-tsiap-tsiap--ah, lí koh the̍h-lâi lu thôo-kha.",
  },
  {
    hanji: "臺南是臺灣烏麻仔的主要產地。",
    tailo: "Tâi-lâm sī Tâi-uân oo-muâ-á ê tsú-iàu sán-tē.",
  },
  {
    hanji: "用烏麻仔去櫼的油，號做「烏麻油」。",
    tailo: "Iōng oo-muâ-á khì tsinn ê iû, hō-tsò “oo-muâ-iû”.",
  },
  {
    hanji: "我睏甲眠眠，若像有聽著人咧挵門的聲。",
    tailo:
      "Guá khùn kah bîn-bîn, ná-tshiūnn ū thiann-tio̍h lâng teh lòng mn̂g ê siann.",
  },
  {
    hanji: "人年歲一下濟，新陳代謝變較慢，身軀加減會有臭老羶。",
    tailo:
      "Lâng nî-huè tsi̍t-ē tsē, sin-tîn-tāi-siā piàn khah bān, sin-khu ke-kiám ē ū tshàu-lāu-hiàn.",
  },
  {
    hanji: "這聲銃子去彈著肚臍空，穩死的！",
    tailo:
      "Tsit-siann tshìng-tsí khì tuānn-tio̍h tōo-tsâi-khang, ún sí--ê!",
  },
  {
    hanji: "冊若無欲閣看就綴手共囥起去冊櫥仔。",
    tailo:
      "Tsheh nā bô beh koh khuànn tō tuè-tshiú kā khǹg khí-khì tsheh-tû-á.",
  },
  {
    hanji: "臺灣民間會佇厝後壁囥一盆仔蓮蕉向望會當添丁。",
    tailo:
      "Tâi-uân bîn-kan ē tī tshù āu-piah khǹg tsi̍t-phûn-á liân-tsiau ǹg-bāng ē-tàng thiam-ting.",
  },
  {
    hanji: "老師教的道理著愛記入心，毋通按呢激皮皮當做馬耳東風。",
    tailo:
      "Lāu-su kà ê tō-lí tio̍h-ài kì ji̍p-sim, m̄-thang án-ne kik-phî-phî tòng-tsò má-ní-tong-hong.",
  },
  {
    hanji: "老師見若問問題，伊就激槌槌，假做攏袂曉。",
    tailo:
      "Lāu-su kiàn-nā mn̄g būn-tê, i tō kik-thuî-thuî, ké-tsò lóng bē-hiáu.",
  },
  {
    hanji: "這間冰果室賣的霜仔真衛生。",
    tailo: "Tsit king ping-kó-sik bē ê sng-á tsin uē-sing.",
  },
  {
    hanji: "橋咧起造是萬年久遠的代誌，萬項工事著斟酌細膩。",
    tailo:
      "Kiô teh khí-tsō sī bān-nî-kiú-uán ê tāi-tsì, bān-hāng kang-sū tio̍h tsim-tsiok sè-jī.",
  },
  {
    hanji: "彼層代誌逐家都想欲共伊放予袂記得，你是閣餾彼欲死？",
    tailo:
      "Hit tsân tāi-tsì ta̍k-ke to siūnn-beh kā i pàng hōo bē-kì--tit, lí sī koh liū he beh-sí?",
  },
  {
    hanji: "伊見若做著工課就按呢欲死欲死。",
    tailo: "I kiàn-nā tsò-tio̍h khang-khuè tō án-ne beh-sí-beh-sí.",
  },
  {
    hanji: "風颱天海水倒激的時會做大水。",
    tailo: "Hong-thai-thinn hái-tsuí tò-kik ê sî ē tsò-tuā-tsuí.",
  },
  {
    hanji: "我足愛去阮阿舅𪜶兜𨑨迌，遐定定都有好料的通食。",
    tailo:
      "Guá tsiok ài khì guán a-kū in tau tshit-thô, hia tiānn-tiānn to ū hó-liāu--ê thang tsia̍h.",
  },
  {
    hanji: "老大人身體虛荏，有時若穢著感冒就真嚴重。",
    tailo:
      "Lāu-tuā-lâng sin-thé hi-lám, ū-sî nā uè-tio̍h kám-mōo tō tsin giâm-tiōng.",
  },
  {
    hanji: "阿福伯仔食甲七十外猶真勇跤，定定參加馬拉松比賽。",
    tailo:
      "A-hok-peh--á tsia̍h kah tshit-tsa̍p-guā iáu tsin ióng-kha, tiānn-tiānn tsham-ka ma-lá-sóng pí-sài.",
  },
  {
    hanji: "你若毋是真正的勇跤，免數想欲綴伊的會仔。",
    tailo:
      "Lí nā m̄ sī tsin-tsiànn ê ióng-kha, bián siàu-siūnn beh tuè i ê huē-á.",
  },
  {
    hanji: "這塊豬母肉韌布布，毋但僫哺閣強欲吞袂落去。",
    tailo:
      "Tsit tè ti-bó-bah jūn-pòo-pòo, m̄-nā oh pōo koh kiōng-beh thun bē lo̍h-khì.",
  },
  {
    hanji: "學生囡仔佇運動埕徛騰騰，聽教練宣佈比賽的代誌。",
    tailo:
      "Ha̍k-sing gín-á tī ūn-tōng-tiânn khiā-thîng-thîng, thiann kàu-liān suan-pòo pí-sài ê tāi-tsì.",
  },
  {
    hanji: "老師吩咐講昨昏的宿題有徛叉仔的所在，攏愛重寫過。",
    tailo:
      "Lāu-su huan-hù kóng tsa-hng ê siok-tê ū khiā-tshe-á ê sóo-tsāi, lóng ài tîng siá--kuè.",
  },
  {
    hanji: "𪜶兩人為著欲結婚食袂少苦湯。",
    tailo: "In nn̄g lâng uī-tio̍h beh kiat-hun tsia̍h bē tsió khóo-thng.",
  },
  {
    hanji: "你起去樓頂共恁阿爸鬥晾衫。",
    tailo: "Lí khí-khì lâu-tíng kā lín a-pah tàu nê sann.",
  },
  {
    hanji: "西元1940年起去的臺灣人差不多攏有受日本教育。",
    tailo:
      "Se-guân 1940 nî khí-khì ê Tâi-uân-lâng tsha-put-to lóng ū siū Ji̍t-pún kàu-io̍k.",
  },
  {
    hanji: "這棟樓仔厝一樓家己做店面，二樓起去就攏稅人矣。",
    tailo:
      "Tsit tòng lâu-á-tshù it lâu ka-kī tsò tiàm-bīn, jī lâu khí-khì tō lóng suè--lâng--ah.",
  },
  {
    hanji: "枋仔剾無釉，愛用沙紙閣磨過。",
    tailo: "Pang-á khau bô iu, ài iōng sua-tsuá koh buâ--kuè.",
  },
  {
    hanji: "爸仔，你敢有欲出國去日本𨑨迌？",
    tailo: "Pâ--á, lí kám ū beh tshut-kok khì Ji̍t-pún tshit-thô?",
  },
  {
    hanji: "阮爸仔是一个古意閣骨力的塗水師。",
    tailo: "Guán pâ--á sī tsi̍t ê kóo-ì koh kut-la̍t ê thôo-tsuí-sai.",
  },
  {
    hanji: "阮做小盤的不比大盤的生理做遐大，愛薄利多銷才較有利純通趁。",
    tailo:
      "Guán tsò sió-puânn--ê put-pí tuā-puânn--ê sing-lí tsò hiah tuā, ài po̍h-lī to siau tsiah khah ū lī-sûn thang thàn.",
  },
  {
    hanji: "你死好啦！叫你莫耍股票，你就干干仔欲，今輸甲褪褲矣乎。",
    tailo:
      "Lí sí-hó--lah! Kiò lí mài sńg kóo-phiò, lí tō kan-kan-á beh, tann su kah thǹg-khòo--ah--honnh.",
  },
  {
    hanji:
      "若招親情五十來厝裡拍麻雀做議量，仙都毋通跋歹筊，才袂共親堂、朋友總得失了了。",
    tailo:
      "Nā tsio tshin-tsiânn-gōo-tsa̍p lâi tshù--lí phah-muâ-tshiok tsò-gī-niū, sian to m̄-thang pua̍h-pháinn-kiáu, tsiah bē kā tshin-tông, pîng-iú tsóng tik-sit-liáu-liáu.",
  },
  {
    hanji:
      "若欲和朋友佇生份所在佮無熟似的人拍麻雀，著愛斟酌是毋是會予人剪筊去。",
    tailo:
      "Nā beh hām pîng-iú tī senn-hūn sóo-tsāi kah bô si̍k-sāi ê lâng phah-muâ-tshiok, tio̍h-ài tsim-tsiok sī m̄ sī ē hōo lâng tsián-kiáu--khì.",
  },
  {
    hanji: "伊少年袂曉想，整筊行歹路，佳哉這陣收跤洗手，做正當的頭路矣。",
    tailo:
      "I siàu-liân bē-hiáu siūnn, tsíng-kiáu kiânn pháinn-lōo, ka-tsài tsit-tsūn siu-kha-sé-tshiú, tsò tsìng-tong ê thâu-lōo--ah.",
  },
  {
    hanji: "𪜶兩个一下見面就表現甲親戽戽，毋知是咧搬佗一齣？",
    tailo:
      "In nn̄g ê tsi̍t-ē kìnn-bīn tō piáu-hiān kah tshin-hòo-hòo, m̄ tsai sī teh puann tó tsi̍t tshut?",
  },
  {
    hanji: "阮三叔公誠有親，定定辦桌請阮，予阮遮的序細仔足感心的。",
    tailo:
      "Guán sann-tsik-kong tsiânn ū-tshin, tiānn-tiānn pān-toh tshiánn--guán, hōo guán tsia-ê sī-sè-á tsiok kám-sim--ê.",
  },
  {
    hanji:
      "老歲仔人若身體勇健、心情樂暢，手頭閣有寡，就較有才調踏入到食清、睏宮、人精英的坎站。",
    tailo:
      "Lāu-huè-á-lâng nā sin-thé ióng-kiānn, sim-tsîng lo̍k-thiòng, tshiú-thâu koh ū--kuá, tō khah ū tsâi-tiāu ta̍h-ji̍p kàu tsia̍h-tshing, khùn-king, lâng tsing-ing ê khám-tsām.",
  },
  {
    hanji:
      "小弟無細膩感著矣，醫生共伊吩咐頭額燒熱的時著愛食清，人會加較爽快。",
    tailo:
      "Sió-tī bô-sè-jī kám--tio̍h--ah, i-sing kā i huan-hù thâu-hia̍h sio-jua̍h ê sî tio̍h-ài tsia̍h-tshing, lâng ē ke khah sóng-khuài.",
  },
  {
    hanji:
      "看著𪜶阿爸坐佇客廳的膨椅盹龜，伊跕跤勻勻仔行過去，驚共𪜶阿爸吵精神。",
    tailo:
      "Khuànn-tio̍h in a-pah tsē tī kheh-thiann ê phòng-í tuh-ku, i liam-kha ûn-ûn-á kiânn--kuè-khì, kiann kā in a-pah tshá tsing-sîn.",
  },
  {
    hanji: "阮牽的少年真好枝骨，可惜中年以後無咧保養，身材煞走精去。",
    tailo:
      "Guán  khan--ê siàu-liân tsin hó-ki-kut, khó-sioh tiong-liân í-āu bô teh pó-ióng, sin-tsâi suah tsáu-tsing--khì.",
  },
  {
    hanji: "做服務業，對人客著較好笑神咧，毋通定定激一个烏昏面。",
    tailo:
      "Tsò ho̍k-bū-gia̍p, tuì lâng-kheh tio̍h khah hó-tshiò-sîn--leh, m̄-thang tiānn-tiānn  kik tsi̍t ê oo-hng bīn.",
  },
  {
    hanji: "行路拄著烏昏，著愛閃開。",
    tailo: "Kiânn-lōo tú-tio̍h oo-hng, tio̍h-ài siám--khui.",
  },
  {
    hanji: "食抗生素治療細菌感染，的確著按時服藥，好原全才會使停藥。",
    tailo:
      "Tsia̍h khòng-sing-sòo tī-liâu sè-khún kám-jiám, tik-khak tio̍h àn-sî ho̍k-io̍h, hó guân-tsuân tsiah ē-sái thîng io̍h.",
  },
  {
    hanji: "你駛車共人挨著，本成就愛提寡錢共人服藥。",
    tailo:
      "Lí sái-tshia kā lâng e--tio̍h, pún-tsiânn tō ài the̍h kuá tsînn kā lâng ho̍k-io̍h.",
  },
  {
    hanji: "咱的意見差傷濟，規氣兩爿攏退一步，掠中和敢好？",
    tailo:
      "Lán ê ì-kiàn tsha siunn tsē, kui-khì nn̄g-pîng lóng thè tsi̍t pōo, lia̍h-tiong-hô kám hó?",
  },
  {
    hanji: "這隻牛規工佇田裡作穡，跤骨纘袂牢，蝹佇塗跤𬦰袂起來。",
    tailo:
      "Tsit tsiah gû kui-kang tī tshân--lí tsoh-sit, kha-kut tsàn bē tiâu, un tī thôo-kha peh bē khí--lâi.",
  },
  {
    hanji:
      "我提一千箍去𥴊仔店買五十箍的物件，頭家娘找我四百五。我講伊找毋著，伊一直諍講我予伊五百箍。等錄影看了，伊隨雞喙變鴨喙。",
    tailo:
      "Guá the̍h tsi̍t-tshing khoo khì kám-á-tiàm bé gōo-tsa̍p khoo ê mi̍h-kiānn, thâu-ke-niû tsāu guá sì-pah-gōo. Guá kóng i tsāu m̄-tio̍h, i it-ti̍t tsènn kóng guá hōo i gōo-pah khoo. Tán lo̍k-iánn khuànn-liáu, i suî ke-tshuì piàn ah-tshuì.",
  },
  {
    hanji: "你若定定抱心，心臟跳了無正常，著愛緊去予醫生看！",
    tailo:
      "Lí nā tiānn-tiānn phō-sim, sim-tsōng thiàu liáu bô tsìng-siông, tio̍h-ài kín khì hōo i-sing khuànn!",
  },
  {
    hanji: "我的名上尾彼字「怡」，倒爿抱心，正爿才閣一字台字。",
    tailo:
      "Guá ê miâ siōng-bué hit jī “î”, tò-pîng phō-sim, tsiànn-pîng tsiah-koh tsi̍t jī tâi--jī.",
  },
  {
    hanji: "伊欲出國是看心情，見若心適興，飛行機票買落就出去。",
    tailo:
      "I beh tshut-kok sī khuànn sim-tsîng, kiàn-nā sim-sik-hìng, hue-lîng-ki-phiò bé--lo̍h tō tshut--khì.",
  },
  {
    hanji: "若是無久長的計畫，干焦欲做心適興的，就毋通落重本做生理。",
    tailo:
      "Nā-sī bô kú-tn̂g ê kè-uē, kan-na beh tsò sim-sik-hìng--ê, tō m̄-thang lo̍h tāng-pún tsò-sing-lí.",
  },
  {
    hanji: "論真畫圖真食天份，毋是一時的心適興，欲畫就畫有路來。",
    tailo:
      "Lūn-tsin uē-tôo tsin tsia̍h thian-hūn, m̄ sī tsi̍t-sî ê sim-sik-hìng, beh uē tō uē ū-lōo-lâi.",
  },
  {
    hanji:
      "我見擺都共這間冊店交關，這擺一下手就買欲五千，結局嘛是無割引。",
    tailo:
      "Guá kiàn-pái to kā tsit king tsheh-tiàm kau-kuan, tsit pái tsi̍t-ē-tshiú tō bé beh gōo-tshing, kiat-kio̍k mā sī bô kuah-ín.",
  },
  {
    hanji: "這新品種的蓮霧一斤著兩百，你若交關兩斤，共你三割引就好。",
    tailo:
      "Tse sin phín-tsíng ê lián-bū tsi̍t kin tio̍h nn̄g-pah, lí nā kau-kuan--nn̄g-kin, kā lí sann kuah-ín tō hó.",
  },
  {
    hanji: "你都也不時共我交關，這塊後坐就算我割引的。",
    tailo:
      "Lí to iā put-sî kā guá kau-kuan, tsit tè āu-tsē tō sǹg guá kuah-ín--ê.",
  },
  {
    hanji: "阮阿公定講日本時代的錢加真大圓。",
    tailo:
      "Guán a-kong tiānn kóng Ji̍t-pún sî-tāi ê tsînn ke tsin tuā-înn.",
  },
  {
    hanji: "囡仔人毋捌，五十箍就看甲遐大圓，拍毋見爾爾就按呢毋甘搐搐。",
    tailo:
      "Gín-á-lâng m̄ bat, gōo-tsa̍p khoo tō khuànn kah hiah tuā-înn, phah-m̄-kìnn niā-niā tō án-ne m̄-kam-tiuh-tiuh.",
  },
  {
    hanji: "拄開始學做生理，毋好傷痟貪，先對細條來窮，毋通大圓才欲趁。",
    tailo:
      "Tú-khai-sí o̍h tsò-sing-lí, m̄-hó siunn siáu-tham, sing uì sè tiâu lâi khîng, m̄-thang tuā-înn tsiah beh thàn.",
  },
  {
    hanji: "趁今仔日大晡日，棉襀被緊挔出來曝曝咧。",
    tailo:
      "Thàn kin-á-ji̍t tuā-poo-ji̍t, mî-tsioh-phuē kín hiannh tshut-lâi pha̍k-pha̍k--leh.",
  },
  {
    hanji: "笑色的衫略仔沐著垃圾就看現現。",
    tailo:
      "Tshiò-sik ê sann lio̍h-á bak-tio̍h lah-sap tō khuànn-hiān-hiān.",
  },
  {
    hanji: "伊中風了後就半身不隨矣。",
    tailo: "I tiòng-hong liáu-āu tō puàn-sin-put-suî--ah.",
  },
  {
    hanji: "有人講半仿仔頭腦會較好，身體嘛會較健康。",
    tailo:
      "Ū lâng kóng puànn-hóng-á thâu-náu ē khah hó, sin-thé mā ē khah kiān-khong.",
  },
  {
    hanji: "囡仔冊攏會寫甲真淺現，若用傷深的詞，驚囡仔人較僫理解。",
    tailo:
      "Gín-á-tsheh lóng ē siá kah tsin tshián-hiān, nā īng siunn tshim ê sû, kiann gín-á-lâng khah oh lí-kái.",
  },
  {
    hanji: "爛蜞會食青菜、果子的幼葉仔，是農業的害蟲。",
    tailo:
      "Nuā-khî ē tsia̍h tshenn-tshài, kué-tsí ê iù-hio̍h-á, sī lông-gia̍p ê hāi-thâng.",
  },
  {
    hanji: "軟蜞生活佇陰暗溼氣重的所在。",
    tailo: "Nńg-khî sing-ua̍h tī im-àm sip-khì tāng ê sóo-tsāi.",
  },
  {
    hanji: "較早的人感覺查某人愛過家毋是好代誌。",
    tailo:
      "Khah-tsá ê lâng kám-kak tsa-bóo-lâng ài kuè-ke m̄ sī hó tāi-tsì.",
  },
  {
    hanji: "伊食到六十外矣，猶閣咧蹔酒家、揣粉味，實在是老風騷。",
    tailo:
      "I tsia̍h kàu la̍k-tsa̍p-guā--ah, iáu-koh teh tsàm tsiú-ka, tshuē hún-bī, si̍t-tsāi sī lāu-hong-so.",
  },
  {
    hanji: "伊雖然個性較白直，毋過心肝真善良，袂去害人。",
    tailo:
      "I sui-jiân kò-sìng khah pe̍h-ti̍t, m̄-koh sim-kuann tsin siān-liông, bē khì hāi--lâng.",
  },
  {
    hanji: "拍乒乓需要有場地佮對手。",
    tailo: "Phah phi̋n-phóng su-iàu ū tiûnn-tē kah tuì-tshiú.",
  },
  {
    hanji: "伊跟做木師傅都學猶未一冬咧，工夫皮皮仔爾爾！",
    tailo:
      "I kin tsò-ba̍k sai-hū to o̍h iáu-buē tsi̍t tang--leh, kang-hu phuê-phuê-á niā-niā!",
  },
  {
    hanji: "這件代誌的因端，我皮皮仔知影。",
    tailo: "Tsit kiānn tāi-tsì ê in-tuann, guá phuê-phuê-á tsai-iánn.",
  },
  {
    hanji: "較早作穡人會共稻草摠做稻草囷用來燃火。",
    tailo:
      "Khah-tsá tsoh-sit-lâng ē kā tiū-tsháu tsáng-tsò tiū-tsháu-khûn iōng-lâi hiânn-hué.",
  },
  {
    hanji: "伊做代誌實在傷過貓神，一點點仔缺點都袂使有。",
    tailo:
      "I tsò tāi-tsì si̍t-tsāi siunn kuè niau-sîn, tsi̍t-tiám-tiám-á khuat-tiám to bē-sái ū.",
  },
  {
    hanji: "這个查埔人講話、動作有淡薄仔貓神。",
    tailo: "Tsit ê tsa-poo-lâng kóng-uē, tōng-tsok ū tām-po̍h-á niau-sîn.",
  },
  {
    hanji: "我若喙凊，就緊含一粒鹹梅仔。",
    tailo: "Guá nā tshuì-tshìn, tō kín kâm tsi̍t lia̍p kiâm-muê-á.",
  },
  {
    hanji: "大官共阮翁仔某講甲無一地好，予我聽甲喙凊。",
    tailo:
      "Ta-kuann kā guán ang-á-bóo kóng kah bô-tsi̍t-tè-hó, hōo guá thiann kah tshuì-tshìn.",
  },
  {
    hanji: "咧欲割稻仔矣，咱來相換工，我先共你鬥割。",
    tailo:
      "Teh-beh kuah-tiū-á--ah, lán lâi sio-uānn-kang, guá sing kā lí tàu kuah.",
  },
  {
    hanji: "你跤手毋就較猛掠咧，傷慢手就做無工課。",
    tailo:
      "Lí kha-tshiú m̄-tō khah mé-lia̍h--leh, siunn bān-tshiú tō tsò bô khang-khuè.",
  },
  {
    hanji: "雞母愛予雞公拍雄過，生出來的卵孵雞仔囝才孵會出來。",
    tailo:
      "Ke-bó ài hōo ke-kang phah-hîng--kuè, senn--tshut-lâi ê nn̄g pū ke-á-kiánn tsiah pū ē tshut--lâi.",
  },
  {
    hanji: "人咧相拍，你莫徛踮邊頭較安全。",
    tailo:
      "Lâng teh sio-phah, lí mài khiā tiàm pinn--thâu khah an-tsuân.",
  },
  {
    hanji: "伊宿題攏烏白寫，凊彩撇撇咧，若親像咧畫土符仔。",
    tailo:
      "I siok-tê lóng oo-pe̍h siá, tshìn-tshái phiat-phiat--leh, ná-tshin-tshiūnn teh uē thóo-hû-á.",
  },
  {
    hanji: "這馬的人注重養生，所以真濟人食素，四界攏有賣素料的店頭。",
    tailo:
      "Tsit-má ê lâng tsù-tiōng ióng-sing, sóo-í tsin tsē lâng tsia̍h-sòo, sì-kè lóng ū bē sòo-liāu ê tiàm-thâu.",
  },
  {
    hanji: "阿美仔𠢕妝娗，目彩畫甲足有神的。",
    tailo: "A-bí--á gâu tsng-thānn, ba̍k-tshái uē kah tsiok ū-sîn--ê.",
  },
  {
    hanji: "這跤皮箱捾著輕兩想，應該無貯啥物物件才著。",
    tailo:
      "Tsit kha phuê-siunn kuānn tio̍h khin-niú-siúnn, ing-kai bô té siánn-mih mi̍h-kiānn tsiah tio̍h.",
  },
  {
    hanji: "囡仔的冊包攏是冊，逐跤都足掂篤。",
    tailo: "Gín-á ê tsheh-pau lóng sī tsheh, ta̍k kha to tsiok tìm-táu.",
  },
  {
    hanji: "這間店無接受信用卡，欲買物件攏愛納現仔。",
    tailo:
      "Tsit king tiàm bô tsiap-siū sìn-iōng-khah, beh bé mi̍h-kiānn lóng ài la̍p hiān-á.",
  },
  {
    hanji: "聽講廟埕這陣當咧做鬧熱，你敢欲同齊來去看？",
    tailo:
      "Thiann-kóng biō-tiânn tsit-tsūn tng-teh tsò-lāu-jia̍t, lí kám beh tâng-tsê lâi-khì khuànn?",
  },
  {
    hanji: "這馬公司在庫的便貨已經無夠，愛緊聯絡工廠隨生產來補貨。",
    tailo:
      "Tsit-má kong-si tsāi-khòo ê piān-huè í-king bô-kàu, ài kín liân-lo̍k kang-tshiúnn suî sing-sán lâi póo huè.",
  },
  {
    hanji: "遮的是阮店裡賰的現貨，看你佮意佗一雙，我會當俗俗仔賣予你喔！",
    tailo:
      "Tsia--ê sī guán tiàm--lí tshun ê hiān-huè, khuànn lí kah-ì tó tsi̍t siang, guá ē-tàng sio̍k-sio̍k-á bē hōo--lí--ooh!",
  },
  {
    hanji:
      "古早人講：「蜈蚣、蛤仔、蛇，三不服。」是咧講這三種動物毋但相忌爾爾，閣會相剋。",
    tailo:
      "Kóo-tsá-lâng kóng, “Giâ-kang, kap-á, tsuâ, sam-put-ho̍k.” Sī teh kóng tsit sann tsióng tōng-bu̍t m̄-nā sio-khī niā-niā, koh ē sio-khik.",
  },
  {
    hanji:
      "𪜶三个姊妹仔正正是三不服，隨个仔管一个，萬項代誌都欲插甲齊著。",
    tailo:
      "In sann ê tsí-muē-á tsiànn-tsiànn sī sam-put-ho̍k, suî-ê-á kuán tsi̍t ê, bān-hāng tāi-tsì to beh tshap kah tsiâu tio̍h.",
  },
  {
    hanji:
      "伊用一百萬起底去做生理，料袂到這馬煞變做一个億來億去的好額人。",
    tailo:
      "I īng tsi̍t-pah bān khí-té khì tsò-sing-lí, liāu-bē-kàu tsit-má suah piàn-tsò tsi̍t ê ik-lâi-ik-khì ê hó-gia̍h-lâng.",
  },
  {
    hanji:
      "伊是烏手起底的，毋過目識利閣𠢕變竅，誠緊就趁著大錢，現此時是工商界的頭人。",
    tailo:
      "I sī oo-tshiú khí-té--ê, m̄-koh ba̍k-sik lāi koh gâu piàn-khiàu, tsiânn kín tō thàn-tio̍h tuā-tsînn, hiān-tshú-sî sī kang-siong-kài ê thâu-lâng.",
  },
  {
    hanji: "捾佇手裡的一袋麵粉一直窞倕落來。",
    tailo:
      "Kuānn tī tshiú--lí ê tsi̍t tē mī-hún it-ti̍t thām-thuī--lo̍h-lâi.",
  },
  {
    hanji: "伊生理失敗，這幾年真窞倕。",
    tailo: "I sing-lí sit-pāi, tsit kuí nî tsin thām-thuī.",
  },
  {
    hanji: "你做這號代誌，會窞倕著親情朋友。",
    tailo:
      "Lí tsò tsit-lō tāi-tsì, ē thām-thuī-tio̍h tshin-tsiânn pîng-iú.",
  },
  {
    hanji: "這陣的時景佮較早袂比得矣。",
    tailo: "Tsit-tsūn ê sî-kíng kah khah-tsá bē-pí--tit--ah.",
  },
  {
    hanji: "人客有共阮品講這批甘蔗，粗幼袂使精差傷濟。",
    tailo:
      "Lâng-kheh ū kā guán phín kóng tsit phue kam-tsià, tshoo-iù bē-sái tsing-tsha siunn tsē.",
  },
  {
    hanji: "這个查某人真勥跤，粗幼的工課攏有才調做。",
    tailo:
      "Tsit ê tsa-bóo-lâng tsin khiàng-kha, tshoo-iù ê khang-khuè lóng ū tsâi-tiāu tsò.",
  },
  {
    hanji: "囡仔偷走厝的原因真複雜，有真濟是因為家庭失能造成的。",
    tailo:
      "Gín-á thau-tsáu-tshù ê guân-in tsin ho̍k-tsa̍p, ū tsin tsē sī in-uī ka-tîng sit-lîng tsō-sîng--ê.",
  },
  {
    hanji: "看伊攑菜刀剁肉、切菜的款勢誠熟手，對煮食應該真有經驗。",
    tailo:
      "Khuànn i gia̍h tshài-to tok bah, tshiat tshài ê khuán-sè tsiânn si̍k-tshiú, tuì tsú-tsia̍h ing-kai tsin ū king-giām.",
  },
  {
    hanji: "這位作者寫的這篇小說的款勢，若像咧學歐洲寫實主義的風格。",
    tailo:
      "Tsit uī tsok-tsiá siá ê tsit phinn siáu-suat ê khuán-sè, ná-tshiūnn teh o̍h Au-tsiu Siá-si̍t tsú-gī ê hong-keh.",
  },
  {
    hanji: "彼个囡仔磕袂著就挐頭使性地，實在足毋是款！",
    tailo:
      "Hit ê gín-á kha̍p-bē-tio̍h tō jû-thâu sái-sìng-tē, si̍t-tsāi tsiok m̄-sī-khuán!",
  },
  {
    hanji: "拄著挐頭的學生，做老師的愛想辦法共引𤆬。",
    tailo:
      "Tú-tio̍h jû-thâu ê ha̍k-sing, tsò lāu-su--ê ài siūnn pān-huat kā ín-tshuā.",
  },
  {
    hanji: "少年顧𨑨迌，食老顧退悔。",
    tailo: "Siàu-liân kòo tshit-thô, tsia̍h-lāu kòo thè-hué.",
  },
  {
    hanji: "今伊都表示退悔矣，咱就放伊煞啦！",
    tailo: "Tann i to piáu-sī thè-hué--ah, lán tō pàng i suah--lah!",
  },
  {
    hanji: "阿華痟跋筊，一四界欠數，攏嘛𪜶翁咧共伊帕尾。",
    tailo:
      "A-huâ siáu pua̍h-kiáu, tsi̍t-sì-kè khiàm-siàu, lóng mā in ang teh kā i phè-bué.",
  },
  {
    hanji: "免細膩，欲愛啥據在恁叫，今仔日食的、啉的攏我來帕尾。",
    tailo:
      "Bián sè-jī, beh ài siannh kì-tsāi lín kiò, kin-á-ji̍t tsia̍h--ê, lim--ê lóng guá lâi phè-bué.",
  },
  {
    hanji: "雞著災了後，雖罔無死，煞圇痀去，飼攏袂大格。",
    tailo:
      "Ke tio̍h-tse liáu-āu, sui-bóng bô sí, suah lun-ku--khì, tshī lóng bē tuā-keh.",
  },
  {
    hanji:
      "下昏暗干焦𪜶兩姊妹仔顧厝，半暝雄雄聽著客廳有跤步聲，兩人驚甲圇痀去。",
    tailo:
      "E-hng-àm kan-na in nn̄g tsí-muē-á kòo-tshù, puànn-mê hiông-hiông thiann-tio̍h kheh-thiann ū kha-pōo-siann, nn̄g lâng kiann kah lun-ku--khì.",
  },
  {
    hanji:
      "佇庄跤所在，毋管好額抑散赤，是年是節攏愛趁人的樣做粿、刣精牲仔，才袂予人看衰。",
    tailo:
      "Tī tsng-kha sóo-tsāi, m̄-kuán hó-gia̍h ia̍h sàn-tshiah, sī-nî-sī-tseh lóng ài thàn lâng ê iūnn tsò kué, thâi tsing-senn-á, tsiah bē hōo lâng khuànn-sue.",
  },
  {
    hanji:
      "咱人的心臟佮紅筋連做伙，成做血路循環的系統，若出問題，健康就會有影響。",
    tailo:
      "Lán-lâng ê sim-tsōng kah âng-kin liân tsò-hué, tsiânn-tsò hueh-lōo sûn-khuân ê hē-thóng, nā tshut būn-tê, kiān-khong tō ē ū íng-hióng.",
  },
  {
    hanji: "阿月仔頂擺車厄了後，人就略略仔錦痀，行路嘛加較慢淡薄。",
    tailo:
      "A-gua̍t-á tíng-pái tshia-eh liáu-āu, lâng tō lio̍h-lio̍h-á gìm-ku, kiânn-lōo mā ke khah bān--tām-po̍h.",
  },
  {
    hanji:
      "阿龍自彼陣著癌幾若冬矣，這陣人病甲錦痀去，連手都攑袂過肩胛頭。",
    tailo:
      "A-liông tsū hit-tsūn tio̍h-gâm kuí-nā tang--ah, tsit-tsūn lâng pēnn kah gìm-ku--khì, liân tshiú to gia̍h bē kuè king-kah-thâu.",
  },
  {
    hanji: "這種藥粉有摻黃連，共伊做成雞毛管仔，較袂食著苦苦。",
    tailo:
      "Tsit tsióng io̍h-hún ū tsham n̂g-nî, kā i tsò-sîng ke-mn̂g-kóng-á, khah bē tsia̍h tio̍h khóo-khóo.",
  },
  {
    hanji: "𪜶兩个兄弟仔自細漢就做伙食、做伙睏，感情上搭粒，予人真欣羨。",
    tailo:
      "In nn̄g ê hiann-tī-á tsū sè-hàn tō tsò-hué tsia̍h, tsò-hué khùn, kám-tsîng siōng tah-lia̍p, hōo lâng tsin him-siān.",
  },
  {
    hanji:
      "阮阿媽上惜我，不時都驚我枵、驚我寒，伊攏講我是伊上搭粒的糖霜丸。",
    tailo:
      "Guán a-má siōng sioh--guá, put-sî to kiann guá iau, kiann guá kuânn, i lóng kóng guá sī i siōng tah-lia̍p ê thn̂g-sng-uân.",
  },
  {
    hanji: "阮大家官欲來阮兜看孫攏無時無陣，我定定都袂赴通準備。",
    tailo:
      "Guán ta-ke-kuann beh lâi guán tau khuànn sun lóng bô-sî-bô-tsūn, guá tiānn-tiānn to bē-hù thang tsún-pī.",
  },
  {
    hanji: "教練叫我佮阿明練閹雞行，阿明忝跤我忝手。",
    tailo:
      "Kàu-liān kiò guá kah A-bîng liān iam-ke-kiânn, A-bîng thiám kha guá thiám tshiú.",
  },
  {
    hanji:
      "老師叫阮兩肢手共身軀牚咧，頭向下跤，兩肢跤腿向頂懸伸直直，試看阮有法度閹雞行無。",
    tailo:
      "Lāu-su kiò guán nn̄g ki tshiú kā sin-khu thènn--leh, thâu ǹg ē-kha, nn̄g ki kha-thuí hiòng tíng-kuân tshun ti̍t-ti̍t, tshì khuànn guán ū-huat-tōo iam-ke-kiânn--bô.",
  },
  {
    hanji: "去宜蘭看本地歌仔，若看著三花搬閹雞行上趣味。",
    tailo:
      "Khì Gî-lân khuànn pún-tē-kua-á, nā khuànn-tio̍h sann-hue puann iam-ke-kiânn siōng tshù-bī.",
  },
  {
    hanji:
      "伊做人真漚搭，人也無去得失伊，伊煞一四界去烏白呾，講人攏對伊有偌䆀。",
    tailo:
      "I tsò-lâng tsin àu-tah, lâng iā bô khì tik-sit--i, i suah tsi̍t-sì-kè khì oo-pe̍h tànn, kóng lâng lóng tuì i ū guā bái.",
  },
  {
    hanji:
      "逐家攏知影伊是漚搭，四十外歲矣猶欲食毋討趁，共𪜶序大叨無錢閣會起跤動手。",
    tailo:
      "Ta̍k-ke lóng tsai-iánn i sī àu-tah, sì-tsa̍p-guā huè--ah iáu beh tsia̍h m̄ thó-thàn, kā in sī-tuā lo bô tsînn koh ē khí-kha-tāng-tshiú.",
  },
  {
    hanji: "伊車禍傷著龍骨去開刀，了後著愛穿鐵衫來固定。",
    tailo:
      "I tshia-hō siong-tio̍h liông-kut khì khui-to, liáu-āu tio̍h-ài tshīng thih-sann lâi kòo-tīng.",
  },
  {
    hanji: "阿媽食老定定腰痠背疼，醫生建議伊著縖鐵衫來保護腰骨。",
    tailo:
      "A-má tsia̍h-lāu tiānn-tiānn io-sng-puē-thiànn, i-sing kiàn-gī i tio̍h hâ thih-sann lâi pó-hōo io-kut.",
  },
  {
    hanji: "伊是一个負責任的人，交代予伊的代誌攏攢辦甲足周至的。",
    tailo:
      "I sī tsi̍t ê hū-tsik-jīm ê lâng, kau-tài hōo i ê tāi-tsì lóng tshuân-pān kah tsiok tsiu-tsì--ê.",
  },
  {
    hanji: "咱來攘，贏的人會使先騎車仔。",
    tailo: "Lán lâi jiāng, iânn ê lâng ē-sái sing khiâ tshia-á.",
  },
  {
    hanji: "上課若閬站，我才敲電話予你。",
    tailo: "Siōng-khò nā làng-tsām, guá tsiah khà tiān-uē hōo--lí.",
  },
  {
    hanji: "有一寡相命仙璇石喙，講甲糊瘰瘰，愛細膩。",
    tailo:
      "Ū tsi̍t-kuá siòng-miā-sian suān-tsio̍h-tshuì, kóng kah hôo-luì-luì, ài sè-jī.",
  },
  {
    hanji: "阿母講我較冷底，袂堪得食冰水佮西瓜這款的物件。",
    tailo:
      "A-bú kóng guá khah líng-té, bē-kham-tit tsia̍h ping-tsuí kah si-kue tsit khuán ê mi̍h-kiānn.",
  },
  {
    hanji: "阮翁熱底的，𠢕流汗、不時喝喙焦，閣定定大便祕結。",
    tailo:
      "Guán ang jia̍t-té--ê, gâu lâu-kuānn, put-sî huah tshuì-ta, koh tiānn-tiānn tāi-piān pì-kiat.",
  },
  {
    hanji: "這馬有的人嫌家己的鼻刀傷凹，想欲去手術。",
    tailo:
      "Tsit-má ū ê lâng hiâm ka-kī ê phīnn-to siunn nah, siūnn-beh khì tshiú-su̍t.",
  },
  {
    hanji: "這个計畫照原就好，毋通閣改矣。",
    tailo: "Tsit ê kè-uē tsiàu-guân tō hó, m̄-thang koh kái--ah.",
  },
  {
    hanji: "進仔干焦會對厝裡的人大細聲，拄著外人攏嘛毋敢嗤噌。",
    tailo:
      "Tsìn--á kan-na ē tuì tshù--lí ê lâng tuā-sè-siann, tú-tio̍h guā-lâng lóng mā m̄ kánn tshi̍h-tshn̍gh.",
  },
  {
    hanji: "咱對序大袂使摘名摘姓，愛共人照輩份來稱呼才有禮貌。",
    tailo:
      "Lán tuì sī-tuā bē-sái tiah-miâ-tiah-sènn, ài kā lâng tsiàu puè-hūn lâi tshing-hoo tsiah ū-lé-māu.",
  },
  {
    hanji: "十一點上北的火車慢分，愛閣二十分鐘才會到站。",
    tailo:
      "Tsa̍p-it tiám tsiūnn-pak ê hué-tshia bān-hun, ài koh jī-tsa̍p hun-tsing tsiah ē kàu-tsām.",
  },
  {
    hanji: "阿娟的別莊整理甲嶄然四序。",
    tailo: "A-kuan ê pia̍t-tsong tsíng-lí kah tsám-jiân sù-sī.",
  },
  {
    hanji: "彼个囡仔真厲害，逐項比賽攏有法度過通關。",
    tailo:
      "Hit ê gín-á tsin lī-hāi, ta̍k hāng pí-sài lóng ū-huat-tōo kuè-thong-kuan.",
  },
  {
    hanji: "若有愛喝拳啉酒，過通關的場合，興酒的阿貴定著走第一的。",
    tailo:
      "Nā ū ài huah-kûn lim tsiú, kuè-thong-kuan ê tiûnn-ha̍p, hìng tsiú ê A-kuì tiānn-tio̍h tsáu tē-it--ê.",
  },
  {
    hanji: "伊是一个真愛烏白共人詼的詼仙，做人閣袂正經，逐家攏誠慼伊。",
    tailo:
      "I sī tsi̍t ê tsin ài oo-pe̍h kā lâng khue ê khue-sian, tsò-lâng koh bē tsìng-king, ta̍k-ke lóng tsiânn tsheh--i.",
  },
  {
    hanji: "電梯一時仔櫼遐濟人入來煞超磅，門關袂起來。",
    tailo:
      "Tiān-thui tsi̍t-sî-á tsinn hiah tsē lâng ji̍p--lâi suah tshiau-pōng, mn̂g kuainn bē khí--lâi.",
  },
  {
    hanji: "詐騙案件的受害者真濟攏是因為貪心才會著吊。",
    tailo:
      "Tsà-phiàn àn-kiānn ê siū-hāi-tsiá tsin tsē lóng sī in-uī tham-sim tsiah ē tio̍h-tiàu.",
  },
  {
    hanji:
      "阿文見若來咱遮標工課，你定定共掩護，閣予伊方便，緊縒慢你會著吊。",
    tailo:
      "A-bûn kiàn-nā lâi lán tsia pio khang-khuè, lí tiānn-tiānn kā iám-hōo, koh hōo i hong-piān, kín-tsua̍h-bān lí ē tio̍h-tiàu.",
  },
  {
    hanji: "𪜶兩个較早有冤仇，這馬見若相拄就目降鬚聳。",
    tailo:
      "In nn̄g ê khah-tsá ū uan-siû, tsit-má kiàn-nā sio-tú tō ba̍k-kàng-tshiu-tshàng.",
  },
  {
    hanji: "佇都會區，徛家若倚捷運站近兜，厝價攏會較懸。",
    tailo:
      "Tī too-huē-khu, khiā-ke nā uá tsia̍t-ūn-tsām kīn-tau, tshù-kè lóng ē khah kuân.",
  },
  {
    hanji: "伊拄對銀行領錢出來，雄雄一个強徒出手共伊的皮包仔搶去。",
    tailo:
      "I tú tuì gîn-hâng niá tsînn tshut--lâi, hiông-hiông tsi̍t ê kiông-tôo tshut-tshiú kā i ê phuê-pau-á tshiúnn--khì.",
  },
  {
    hanji: "你著較認真學咧，後擺才會較有路長。",
    tailo:
      "Lí tio̍h khah jīn-tsin o̍h--leh, āu-pái tsiah ē khah ū lōo-tn̂g.",
  },
  {
    hanji: "阿英對鹿港嫁去新竹，所以伊外家佇鹿港，內家佇新竹。",
    tailo:
      "A-ing tuì Lo̍k-káng kè-khì Sin-tik, sóo-í i guā-ke tī Lo̍k-káng, lāi-ke tī Sin-tik.",
  },
  {
    hanji: "伊開喙就欲共人體剔，莫怪無人愛佮伊來去。",
    tailo:
      "I khui-tshuì tō beh kā lâng thé-thak, bo̍k-kuài bô lâng ài kah i lâi-khì.",
  },
  {
    hanji: "數佻別人的差錯較緊，改變家己的欠點較僫。",
    tailo:
      "Siàu-tiáu pa̍t-lâng ê tsha-tshò khah kín, kái-piàn ka-kī ê khiàm-tiám khah oh.",
  },
  {
    hanji: "你就照這个課程聊聊仔綴老師學，準做無底，久來嘛會熟手。",
    tailo:
      "Lí tō tsiàu tsit ê khò-tîng liâu-liâu-á tuè lāu-su o̍h, tsún-tsò bô-té, kú--lâi mā ē si̍k-tshiú.",
  },
  {
    hanji: "佮人比並起來，伊是較無底，當然愛愈拍拚。",
    tailo:
      "Kah lâng pí-phīng--khí-lâi, i sī khah bô-té, tong-jiân ài jú phah-piànn.",
  },
  {
    hanji: "出國讀冊這件代誌，我心內猶是無底。",
    tailo:
      "Tshut-kok tha̍k-tsheh tsit kiānn tāi-tsì, guá sim-lāi iáu-sī bô-té.",
  },
  {
    hanji: "膨風無底，勤儉較實在。",
    tailo: "Phòng-hong bô-té, khîn-khiām khah si̍t-tsāi.",
  },
  {
    hanji: "爸母過身才幾冬爾爾，𪜶兜的爸公業就予伊開了了去矣。",
    tailo:
      "Pē-bú kuè-sin tsiah kuí tang niā-niā, in tau ê pē-kong-gia̍p tō hōo i khai-liáu-liáu--khì--ah.",
  },
  {
    hanji: "曷有一个叫囡仔莫去讀冊的。",
    tailo: "A̍h-ū-tsi̍t-ê kiò gín-á mài khì tha̍k-tsheh--ê.",
  },
  {
    hanji: "逐工加班，厝內攏無掛摒掃。",
    tailo: "Ta̍k-kang ka-pan, tshù-lāi lóng bô-khuà piànn-sàu.",
  },
  {
    hanji: "逐工趕車幫，早頓攏無掛食。",
    tailo: "Ta̍k-kang kuánn tshia-pang, tsá-tǹg lóng bô-khuà tsia̍h.",
  },
  {
    hanji: "我看愛提寡定金較定當。",
    tailo: "Guá khuànn ài the̍h kuá tiānn-kim khah tīng-tòng.",
  },
  {
    hanji: "現交關的減趁寡較贏賒數的。",
    tailo: "Hiān-kau-kuan--ê kiám thàn--kuá khah iânn sia-siàu--ê.",
  },
  {
    hanji:
      "阿媽共燃好的青草仔茶，用漏仔貯入去玻璃矸仔，冰佇冰箱予逐家啉。",
    tailo:
      "A-má kā hiânn-hó ê tshenn-tsháu-á-tê, iōng lāu-á té ji̍p-khì po-lê kan-á, ping tī ping-siunn hōo ta̍k-ke lim.",
  },
  {
    hanji: "𪜶兜的生活真饒裕，自來就免煩惱食穿。",
    tailo:
      "In tau ê sing-ua̍h tsin jiâu-jū, tsū-lâi tō bián huân-ló tsia̍h-tshīng.",
  },
  {
    hanji: "柑仔蜜的食路百百款，我上愛切做一周一周搵豆油糖。",
    tailo:
      "Kam-á-bi̍t ê tsia̍h-lōo pah-pah-khuán, guá siōng ài tshiat-tsò tsi̍t tsiu tsi̍t tsiu ùn tāu-iû-thn̂g.",
  },
  {
    hanji: "咱對所有的食路，愛注重營養佮衛生，才袂拍歹身體。",
    tailo:
      "Lán tuì sóo-ū ê tsia̍h-lōo, ài tsù-tiōng îng-ióng kah uē-sing, tsiah bē phah-pháinn sin-thé.",
  },
  {
    hanji: "若講著鼻趖的工夫，無人綴伊會著，莫怪這馬食甲油洗洗。",
    tailo:
      "Nā kóng-tio̍h phīnn-sô ê kang-hu, bô lâng tuè i ē tio̍h, bo̍k-kuài tsit-má tsia̍h kah iû-sé-sé.",
  },
  {
    hanji: "伊若看著媠姑娘仔，就直直共人鼻趖，有夠不死鬼。",
    tailo:
      "I nā khuànn-tio̍h suí koo-niû-á, tō ti̍t-ti̍t kā lâng phīnn-sô, ū-kàu put-sú-kuí.",
  },
  {
    hanji: "伊彼號鼻趖的款，予人看甲強強欲反腹。",
    tailo:
      "I hit-lō phīnn-sô ê khuán, hōo lâng khuànn kah kiōng-kiōng beh píng-pak.",
  },
  {
    hanji: "你昨昏穿的彼領褲褲跤有一寡線屎，提來予我鉸鉸咧。",
    tailo:
      "Lí tsa-hng tshīng ê hit niá khòo khòo-kha ū tsi̍t-kuá suànn-sái, the̍h-lâi hōo guá ka-ka--leh.",
  },
  {
    hanji: "阿宏仔等咧欲上台，緊張甲一直拚汗。",
    tailo:
      "A-hông--á tán--leh beh tsiūnn-tâi, kín-tiunn kah it-ti̍t piànn-kuānn.",
  },
  {
    hanji: "食燒酒雞我上愛啉彼厚味的湯頭。",
    tailo: "Tsia̍h sio-tsiú-ke guá siōng ài lim he kāu-bī ê thng-thâu.",
  },
  {
    hanji:
      "伊食火鍋搵料愛濫醋、蒜茸、番薑仔、蔥仔、豆乳、香油，伊講愛較厚味才會好食。",
    tailo:
      "I tsia̍h hué-ko ùn-liāu ài lām tshòo, suàn-jiông, huan-kiunn-á, tshang-á, tāu-jú, hiang-iû, i kóng ài khah kāu-bī tsiah ē hó-tsia̍h.",
  },
  {
    hanji:
      "我毋知按怎去得失著伊，無伊哪會無因無端佇眾人面頭前共我罵甲遐歹聽。",
    tailo:
      "Guá m̄ tsai án-tsuánn khì tik-sit-tio̍h i, bô i ná ē bô-in-bô-tuann tī tsìng-lâng bīn-thâu-tsîng kā guá mē kah hiah pháinn-thiann.",
  },
  {
    hanji: "這間餐廳實在袂䆀，咱下日仔會用得𤆬阿母做伙來。",
    tailo:
      "Tsit king tshan-thiann si̍t-tsāi bē-bái, lán ē-ji̍t-á ē-īng-tit tshuā a-bú tsò-hué lâi.",
  },
  {
    hanji: "這遍的比賽咱較有卜面。",
    tailo: "Tsit piàn ê pí-sài lán khah ū poh-bīn.",
  },
  {
    hanji: "都市的厝邊兜，就準講佇電梯間搪著，嘛無的確會相借喙。",
    tailo:
      "Too-tshī ê tshù-pinn-tau, tō tsún-kóng tī tiān-thui-king tn̄g--tio̍h, mā bô-tik-khak ē sio-tsioh-tshuì.",
  },
  {
    hanji: "拄著時機當好的流擺，伊整本想欲開餐廳。",
    tailo:
      "Tú-tio̍h sî-ki tng hó ê lâu-pái, i tsíng-pún siūnn-beh khui tshan-thiann.",
  },
  {
    hanji: "伊見若開講就欲佮人辯話骨，莫怪無人欲佮伊交陪。",
    tailo:
      "I kiàn-nā khai-káng tō beh kah lâng piān-uē-kut, bo̍k-kuài bô lâng beh kah i kau-puê.",
  },
  {
    hanji: "這領被輕蠓蠓，毋過蓋著閣誠燒。",
    tailo: "Tsit niá phuē khin-báng-báng, m̄-koh kah tio̍h koh tsiânn sio.",
  },
  {
    hanji: "後個月過愛安排一下仔時間共阿公抾骨頭，紲落來才閣囥入去塔裡。",
    tailo:
      "Āu kò gue̍h kuè ài an-pâi tsi̍t-ē-á sî-kan kā a-kong khioh-kut-thâu, suà--lo̍h-lâi tsiah-koh khǹg ji̍p-khì thah--lí.",
  },
  {
    hanji: "阿公抾風水的日仔若確定矣，就愛通知逐家轉來鬥相共。",
    tailo:
      "A-kong khioh-hong-suí ê ji̍t-á nā khak-tīng--ah, tō ài thong-ti ta̍k-ke tńg-lâi tàu-sann-kāng.",
  },
  {
    hanji: "若欲𬦰山愛有人做頭前𤆬路，嘛著有內行的押尾，較袂出代誌。",
    tailo:
      "Nā beh peh-suann ài ū lâng tsò thâu-tsîng tshuā-lōo, mā tio̍h ū lāi-hâng--ê ah-bué, khah bē tshut-tāi-tsì.",
  },
  {
    hanji: "老師這改歇熱出的宿題，作文上簡單，我押尾才寫就好。",
    tailo:
      "Lāu-su tsit kái hioh-jua̍h tshut ê siok-tê, tsok-bûn siōng kán-tan, guá ah-bué tsiah siá tō hó.",
  },
  {
    hanji: "我先踏話頭，共逐家說明一下，要緊的代誌予你押尾手講。",
    tailo:
      "Guá sing ta̍h-uē-thâu, kā ta̍k-ke sueh-bîng--tsi̍t-ē, iàu-kín ê tāi-tsì hōo lí ah-bué-tshiú kóng.",
  },
  {
    hanji: "你做工課跤手慢鈍，是欲按怎綴人會著咧！",
    tailo:
      "Lí tsò khang-khuè kha-tshiú bān-tūn, sī beh án-tsuánn tuè lâng ē tio̍h--leh!",
  },
  {
    hanji: "伊咧做工課慢死趖，一屑仔工課愛做規晡久。",
    tailo:
      "I teh tsò khang-khuè bān-sí-sô, tsi̍t-sut-á khang-khuè ài tsò kui-poo kú.",
  },
  {
    hanji: "伊毋好好仔讀冊，煞走學綴人絞群絞黨四界去𨑨迌。",
    tailo:
      "I m̄ hó-hó-á tha̍k tsheh, suah tsáu-o̍h tuè lâng ká-kûn-ká-tóng sì-kè khì tshit-thô.",
  },
  {
    hanji: "伊是𫞼諍王，會當共死龜諍甲變活鱉。",
    tailo:
      "I sī tshāi-tsènn-ông, ē-tàng kā sí ku tsènn kah piàn ua̍h pih.",
  },
  {
    hanji: "食毒毋但拍歹身體閣會舞甲弄家散宅，毒品實在袂沐得。",
    tailo:
      "Tsia̍h-to̍k m̄-nā phah-pháinn sin-thé koh ē bú kah lōng-ke-suànn-the̍h, to̍k-phín si̍t-tsāi bē-bak--tit.",
  },
  {
    hanji: "做這死訣的，學予熟手就出師矣。",
    tailo: "Tsò tse sí-kuat--ê, o̍h hōo si̍k-tshiú tō tshut-sai--ah.",
  },
  {
    hanji: "鱸鰻萬仔早起去予職業殺手結果擲捒矣。",
    tailo:
      "Lôo-muâ Bān--á tsá-khí khì hōo tsit-gia̍p sat-tshiú kiat-kó-tàn-sak--ah.",
  },
  {
    hanji: "伊散學轉來，就激一个懊嘟面，看範勢是佮同學冤家的款。",
    tailo:
      "I suànn-o̍h tńg--lâi, tō kik tsi̍t ê àu-tū-bīn, khuànn pān-sè sī kah tông-ha̍k uan-ke ê khuán.",
  },
  {
    hanji: "聽你講甲親像誠簡單，我是聽甲花嗄嗄。",
    tailo:
      "Thiann lí kóng kah tshin-tshiūnn tsiânn kán-tan, guá sī thiann kah hue-sà-sà.",
  },
  {
    hanji: "伊不時來揣你寫宿題，是憶著恁兜定定有點心通食。",
    tailo:
      "I put-sî lâi tshuē lí siá siok-tê, sī it-tio̍h lín tau tiānn-tiānn ū tiám-sim thang tsia̍h.",
  },
  {
    hanji: "伊是一个誠骨力的人，若有穡頭，免人交代，隨抾起跤做。",
    tailo:
      "I sī tsi̍t ê tsiânn kut-la̍t ê lâng, nā ū sit-thâu, bián lâng kau-tài, suî khioh-khí-kha tsò.",
  },
  {
    hanji: "一下看著警察來，彼陣𨑨迌囡仔隨就抾起跤，走甲無看見人。",
    tailo:
      "Tsi̍t-ē khuànn-tio̍h kíng-tshat lâi, hit tīn tshit-thô gín-á suî tō khioh-khí-kha, tsáu kah bô khuànn-kìnn lâng.",
  },
  {
    hanji: "伊䀐著警察對巷仔頭行來，面隨慄色，即時就起跤走甲無看見影去。",
    tailo:
      "I siam-tio̍h kíng-tshat tuì hāng-á-thâu kiânn--lâi, bīn suî lik-sik, tsik-sî tō khí-kha tsáu kah bô khuànn-kìnn iánn--khì.",
  },
  {
    hanji: "伊佇路裡拄䢢佮伊的冤仇人相搪，無講無呾一下起跤就共蹔落去。",
    tailo:
      "I tī lōo--lí tú-tshiāng kah i ê uan-siû-lâng sio-tn̄g, bô-kóng-bô-tànn tsi̍t-ē khí-kha tō kā tsàm--lo̍h-khì.",
  },
  {
    hanji: "黃金博物館彼塊金仔角重篤篤，到今猶無人搬會振動得。",
    tailo:
      "N̂g-kim Phok-bu̍t-kuán hit tè kim-á-kak tāng-tauh-tauh, kàu-tann iáu bô lâng puann ē-tín-tāng--tit.",
  },
  {
    hanji: "你若敢閣共我恐喝，我就叫警察來。",
    tailo: "Lí nā kánn koh kā guá khióng-hat, guá tō kiò kíng-tshat lâi.",
  },
  {
    hanji:
      "苦楝舅春天的新葉是笑青色，開花是黃色，漸漸轉紅，結子的時閣變咖啡色，所以嘛予人叫做四色樹。",
    tailo:
      "Khóo-līng-kū tshun-thinn ê sin hio̍h sī tshiò-tshenn-sik, khui-hue sī n̂g-sik, tsiām-tsiām tńg-âng, kiat-tsí ê sî koh piàn ka-pi-sik, sóo-í mā hōo lâng kiò-tsò sì-sik-tshiū.",
  },
  {
    hanji: "阮兄弟仔隨人攏有家己的苦衷，才會拆伙鼎輪鬮飼爸母。",
    tailo:
      "Guán hiann-tī-á suî-lâng lóng ū ka-kī ê khóo-thiong, tsiah ē thiah-hué-tiánn lûn-khau tshī pē-bú.",
  },
  {
    hanji: "這種布料會過風閣會欶汗，做熱天衫真好穿。",
    tailo:
      "Tsit tsióng pòo-liāu ē kuè-hong koh ē suh-kuānn, tsò jua̍h-thinn sann tsin hó-tshīng.",
  },
  {
    hanji: "老骨𠕇砊砊，老皮袂過風。",
    tailo: "Lāu kut tīng-khong-khong, lāu phuê bē kuè-hong.",
  },
  {
    hanji: "人曷無請你，你煞家己坐起去大位，你是咧討衰是無？",
    tailo:
      "Lâng a̍h bô tshiánn--lí, lí suah ka-kī tsē khí-khì tuā-uī, lí sī teh thó-sue sī--bô?",
  },
  {
    hanji: "都叫你毋通遐痟貪，今錢予人騙了了，攏是你家己做得來的。",
    tailo:
      "To kiò lí m̄-thang hiah siáu-tham, tann tsînn hōo lâng phiàn-liáu-liáu, lóng sī lí ka-kī tsò-tit-lâi--ê.",
  },
  {
    hanji: "阮先行，你押尾後鬥顧一下。",
    tailo: "Guán sing kiânn, lí ah-bué-āu tàu kòo--tsi̍t-ē.",
  },
  {
    hanji: "予知路的人做前，咱綴尾後。",
    tailo: "Hōo tsai lōo ê lâng tsò-tsîng, lán tuè bué-āu.",
  },
  {
    hanji: "好空的伊攏搶做前，若歹空的伊就覕甲無看見影。",
    tailo:
      "Hó-khang--ê i lóng tshiúnn tsò-tsîng, nā pháinn-khang--ê i tō bih kah bô khuànn-kìnn iánn.",
  },
  {
    hanji: "翁仔某著相體諒，毋通串想就是欲共對方壓落底。",
    tailo:
      "Ang-á-bóo tio̍h sio-thé-liōng, m̄-thang tshuàn siūnn tō sī beh kā tuì-hong ah-lo̍h-té.",
  },
  {
    hanji: "天跤下敢誠實有天會落紅雨、馬會發角彼號譀古代？",
    tailo:
      "Thinn-kha-ē kám tsiânn-si̍t ū thinn ē lo̍h âng hōo, bé ē huat-kak hit-lō hàm-kóo tāi?",
  },
  {
    hanji: "咱做代誌仙都毋通趕狂，著緊事寬辦較妥當。",
    tailo:
      "Lán tsò tāi-tsì sian to m̄-thang kuánn-kông, tio̍h kín-sū-khuann-pān khah thò-tòng.",
  },
  {
    hanji: "我寢頭仔穿懸踏真袂慣勢，險險仔就跋跋倒。",
    tailo:
      "Guá tshím-thâu-á tshīng kuân-ta̍h tsin bē kuàn-sì, hiám-hiám-á tō pua̍h-pua̍h--tó.",
  },
  {
    hanji: "雨傘囥佇門喙，莫提入來，厝內才袂澹糊糊。",
    tailo:
      "Hōo-suànn khǹg tī mn̂g-tshuì, mài the̍h--ji̍p-lâi, tshù-lāi tsiah bē tâm-kôo-kôo.",
  },
  {
    hanji:
      "食人頭路著存久長心，毋通在職怨職，磕袂著就換頭路，袂輸貓徙岫咧。",
    tailo:
      "Tsia̍h lâng thâu-lōo tio̍h tsûn kú-tn̂g-sim, m̄-thang tsāi-tsit-uàn-tsit, kha̍p-bē-tio̍h tō uānn thâu-lōo, bē-su niau-suá-siū--leh.",
  },
  {
    hanji: "伊正港是一个歹星，拄搬來，這个庄頭就做大水。",
    tailo:
      "I tsiànn-káng sī tsi̍t ê pháinn-tshenn, tú puann--lâi, tsit ê tsng-thâu tō tsò-tuā-tsuí.",
  },
  {
    hanji: "頭家人若欲揣辛勞著愛細膩，若倩著歹星就費氣矣。",
    tailo:
      "Thâu-ke-lâng nā beh tshuē sin-lô tio̍h-ài sè-jī, nā tshiànn-tio̍h pháinn-tshenn tō huì-khì--ah.",
  },
  {
    hanji: "這个竹雞仔真歹星，毋但食跋𨑨三字全，閣會四界共人敲油才是害。",
    tailo:
      "Tsit ê tik-ke-á tsin pháinn-tshenn, m̄-nā tsia̍h pua̍h tshit sann-jī-tsuân, koh ē sì-kè kā lâng khà-iû tsiah-sī hāi.",
  },
  {
    hanji: "阮叔伯小弟佮我仝公族仔的，伊今欲選里長，免講嘛愛共伨。",
    tailo:
      "Guán tsik-peh-sió-tī kah guá kāng kong-tso̍k-á--ê, i tann beh suán lí-tiúnn, bián-kóng mā ài kā thīn.",
  },
  {
    hanji: "這條山路有袂少懸低坎，若欲行，愛較斟酌咧。",
    tailo:
      "Tsit tiâu suann-lōo ū bē tsió kuân-kē-khám, nā beh kiânn, ài khah tsim-tsiok--leh.",
  },
  {
    hanji: "夜市有人咧賣規攕的卵蛋，阮阿姊上愛食。",
    tailo:
      "Iā-tshī ū lâng teh bē kui tshiám ê nn̄g-tuann, guán a-tsí siōng ài tsia̍h.",
  },
  {
    hanji: "倩人來做工，有當時仔算日的比算件的較省本。",
    tailo:
      "Tshiànn lâng lâi tsò-kang, ū-tang-sî-á sǹg ji̍t--ê pí sǹg kiānn--ê khah síng-pún.",
  },
  {
    hanji: "咱佇車裡共頭殼探出去真危險。",
    tailo: "Lán tī tshia--lí kā thâu-khak tham--tshut-khì tsin guî-hiám.",
  },
  {
    hanji: "伊手探出去欲挽牆圍仔邊的荔枝。",
    tailo: "I tshiú tham tshut-khì beh bán tshiûnn-uî-á-pinn ê nāi-tsi.",
  },
  {
    hanji: "恁厝起甲按呢會去探著人的路。",
    tailo: "Lín tshù khí kah án-ne ē khì tham-tio̍h lâng ê lōo.",
  },
  {
    hanji: "恁老母就因為生恁小弟的時陣坦橫生才無去的。",
    tailo:
      "Lín lāu-bú tō in-uī senn lín sió-tī ê sî-tsūn thán-huâinn-senn tsiah bô--khì--ê.",
  },
  {
    hanji: "伊確實坦橫生，人矮罔矮，閣真勇壯。",
    tailo:
      "I khak-si̍t thán-huâinn-senn, lâng é bóng é, koh tsin ióng-tsòng.",
  },
  {
    hanji: "阮老爸牽阿明做師仔，伊也確實出眾，學都無兩冬半就出師矣。",
    tailo:
      "Guán lāu-pē khan A-bîng tsò sai-á, i iā khak-si̍t tshut-tsìng, o̍h to bô nn̄g tang puànn tō tshut-sai--ah.",
  },
  {
    hanji: "你莫看伊大箍把，不時嘛咧破病。",
    tailo: "Lí mài khuànn i tuā-khoo-pé, put-sî mā teh phuà-pēnn.",
  },
  {
    hanji: "我看你咧起愛睏神矣，無先入去䖙一下。",
    tailo:
      "Guá khuànn lí teh khí ài-khùn-sîn--ah, bô sing ji̍p-khì the--tsi̍t-ē.",
  },
  {
    hanji: "明其都你毋著，今你煞拍人喝救人，是咧哭予啥人聽。",
    tailo:
      "Bîng-ki to lí m̄-tio̍h, tann lí suah phah lâng huah-kiù-lâng, sī teh khàu hōo siánn-lâng thiann.",
  },
  {
    hanji: "這間廟起甲遮爾大間，門跤口有𫞼石獅嘛有𫞼石鼓，真誠氣派。",
    tailo:
      "Tsit king biō khí kah tsiah-nī tuā king, mn̂g-kha-kháu ū tshāi tsio̍h-sai mā ū tshāi tsio̍h-kóo, tsin-tsiânn khì-phài.",
  },
  {
    hanji: "這條山路行到半中站拄好有一塊大石鼓，咱會當坐佇遐小歇睏一下。",
    tailo:
      "Tsit tiâu suann-lōo kiânn kàu puànn-tiong-tsām tú-hó ū tsi̍t tè tuā tsio̍h-kóo, lán ē-tàng tsē tī hia sió hioh-khùn--tsi̍t-ē.",
  },
  {
    hanji:
      "食甲這个歲矣，無氣力通佮人掰會遮的政治問題，寧可加讀寡冊較直。",
    tailo:
      "Tsia̍h kah tsit ê huè--ah, bô khuì-la̍t thang kah lâng pué-huē tsia-ê tsìng-tī būn-tê, lîng-khó ke tha̍k kuá tsheh khah ti̍t.",
  },
  {
    hanji: "伊都感覺家己𢯾鼻𢯾鼻，較無遐嫣，按算歇熱欲去美容。",
    tailo:
      "I to kám-kak ka-kī mooh-phīnn-mooh-phīnn, khah bô hiah ian, àn-sǹg hioh-jua̍h beh khì bí-iông.",
  },
  {
    hanji: "布袋戲的小丑仔定會揀𢯾鼻的，予𪜶講著話就齆聲齆聲真笑詼。",
    tailo:
      "Pòo-tē-hì ê siáu-thiú-á tiānn ē kíng mooh-phīnn--ê, hōo in kóng-tio̍h uē tō àng-siann-àng-siann tsin tshiò-khue.",
  },
  {
    hanji: "定定欲共人偏，有時陣嘛會食鹼。",
    tailo: "Tiānn-tiānn beh kā lâng phinn, ū-sî-tsūn mā ē tsia̍h-kinn.",
  },
  {
    hanji:
      "伊是在地選出來的議員，不三時都有選民會來揣伊做服務選區的工課。",
    tailo:
      "I sī tsāi-tē suán--tshut-lâi ê gī-uân, put-sam-sî to ū suán-bîn ē lâi tshuē i tsò ho̍k-bū suán-khu ê khang-khuè.",
  },
  {
    hanji: "歲頭食甲三十外，毋出去討趁，閣不時共序大人伸長手，真正卸衰。",
    tailo:
      "Huè-thâu tsia̍h kah sann-tsa̍p-guā, m̄ tshut-khì thó-thàn, koh put-sî kā sī-tuā-lâng tshun-tn̂g-tshiú, tsin-tsiànn sià-sue.",
  },
  {
    hanji: "看伊人都勇勇，煞雄雄入院，呔討會按呢？",
    tailo:
      "Khuànn i lâng to ióng-ióng, suah hiông-hiông ji̍p-īnn, thài-thó ē án-ne?",
  },
  {
    hanji: "食奶嬰仔的身軀加減攏會有臭奶羶。",
    tailo: "Tsia̍h ling enn-á ê sin-khu ke-kiám lóng ē ū tshàu-ling-hiàn.",
  },
  {
    hanji: "你臭奶羶都猶未甪咧，就想欲飛上天矣喔！",
    tailo:
      "Lí tshàu-ling-hiàn to iáu-buē lut--leh, tō siūnn-beh pue tsiūnn thinn--ah--ooh!",
  },
  {
    hanji: "嬰仔拄才溢奶，身軀真臭奶羶。",
    tailo: "Enn-á tú-tsiah ik-ling, sin-khu tsin tshàu-ling-hiàn.",
  },
  {
    hanji: "恁吵甲遐大聲，厝蓋強欲予恁夯起來矣啦。",
    tailo:
      "Lín tshá kah hiah tuā-siann, tshù-kuà kiōng-beh hōo lín giâ--khí-lâi--ah--lah.",
  },
  {
    hanji: "頭家派予伊遐濟工課，伊一下手就做甲好勢溜溜。",
    tailo:
      "Thâu-ke phài hōo i hiah tsē khang-khuè, i tsi̍t-ē-tshiú tō tsò kah hó-sè-liu-liu.",
  },
  {
    hanji:
      "糋的物件較厚油，食一半擺仔是無要緊，若傷捷食對健康會有影響喔！",
    tailo:
      "Tsìnn ê mi̍h-kiānn khah kāu iû, tsia̍h--tsi̍t-puànn-pái-á sī bô iàu-kín, nā siunn tsia̍p tsia̍h tuì kiān-khong ē ū íng-hióng--ooh!",
  },
  {
    hanji: "就是生理失敗起致，伊這陣毋才四界咧走路閃債。",
    tailo:
      "Tō sī sing-lí sit-pāi khí-tì, i tsit-tsūn m̄-tsiah sì-kè teh tsáu-lōo siám-tsè.",
  },
  {
    hanji: "我無啥清楚代誌的起致。",
    tailo: "Guá bô siánn tshing-tshó tāi-tsì ê khí-tì.",
  },
  {
    hanji: "欲起造一間電子工廠，資金掠外，猶需要真濟科技人員。",
    tailo:
      "Beh khí-tsō tsi̍t king tiān-tsú kang-tshiúnn, tsu-kim lia̍h-guā, iáu su-iàu tsin tsē kho-ki jîn-uân.",
  },
  {
    hanji: "伊欲食毋討趁，攏共𪜶序大人叨錢來開。",
    tailo:
      "I beh tsia̍h m̄ thó-thàn, lóng kā in sī-tuā-lâng lo tsînn lâi khai.",
  },
  {
    hanji: "阿母素常佇食暗飽會去外口行行踅踅咧。",
    tailo:
      "A-bú sòo-siông tī tsia̍h-àm pá ē khì guā-kháu kiânn-kiânn se̍h-se̍h--leh.",
  },
  {
    hanji: "伊平素時有咧食臊，是初一十五才食菜。",
    tailo:
      "I pîng-sòo-sî ū teh tsia̍h-tsho, sī tshe-it tsa̍p-gōo tsiah tsia̍h-tshài.",
  },
  {
    hanji: "𪜶兩姊妹仔坐相向，恬恬佇遐咧讀冊。",
    tailo:
      "In nn̄g tsí-muē-á tsē sio-hiòng, tiām-tiām tī hia teh tha̍k-tsheh.",
  },
  {
    hanji: "當當伊欲過車路，雄雄一台車挵紅燈傱出來，險仔就去予挵著。",
    tailo:
      "Tng-tong i beh kuè tshia-lōo, hiông-hiông tsi̍t tâi tshia lòng-âng-ting tsông--tshut-lâi, hiám-á tō khì hōo lòng--tio̍h.",
  },
  {
    hanji: "人客一下入門，厝內人攏愛緊出來佮伊相借問。",
    tailo:
      "Lâng-kheh tsi̍t-ē ji̍p-mn̂g, tshù-lāi-lâng lóng ài kín tshut-lâi kah i sio-tsioh-mn̄g.",
  },
  {
    hanji: "彼兩个人佇巷仔內相掩揜，毋知欲創啥物歹代。",
    tailo:
      "Hit nn̄g ê lâng tī hāng-á-lāi sio-ng-iap, m̄ tsai beh tshòng siánn-mih pháinn-tāi.",
  },
  {
    hanji: "彼箍歹手爪，不時偷掩揜人的物件。",
    tailo:
      "Hit khoo pháinn-tshiú-jiáu, put-sî thau ng-iap lâng ê mi̍h-kiānn.",
  },
  {
    hanji: "𪜶兩翁仔姐感情誠好，逐暗食飯飽，就手牽咧做伙去公園散步。",
    tailo:
      "In nn̄g ang-á-tsiá kám-tsîng tsiânn hó, ta̍k-àm tsia̍h-pn̄g pá, tō tshiú khan--leh tsò-hué khì kong-hn̂g sàn-pōo.",
  },
  {
    hanji: "遮的古董你就好禮仔提，無若落落去，仙賠你都賠袂起。",
    tailo:
      "Tsia-ê kóo-tóng lí tō hó-lé-á the̍h, bô nā lak--lo̍h-khì, sian puê lí to puê bē khí.",
  },
  {
    hanji: "頭家若受氣起來，員工就攏恬喌喌出在伊罵。",
    tailo:
      "Thâu-ke nā siū-khì--khí-lâi, uân-kang tō lóng tiām-tsiuh-tsiuh tshut-tsāi i mē.",
  },
  {
    hanji: "學生一下聽著上課鐘仔聲霆，隨个仔恬喌喌轉去伊的位坐予好。",
    tailo:
      "Ha̍k-sing tsi̍t-ē thiann-tio̍h siōng-khò tsing-á-siann tân, suî-ê-á tiām-tsiuh-tsiuh tńg-khì i ê uī tsē hōo hó.",
  },
  {
    hanji: "恁囝真乖，規工恬喌喌坐佇膨椅看尪仔冊，攏袂吵人。",
    tailo:
      "Lín kiánn tsin kuai, kui-kang tiām-tsiuh-tsiuh tsē tī phòng-í khuànn ang-á-tsheh, lóng bē tshá--lâng.",
  },
  {
    hanji: "逐家毋通激恬恬，欲抑毋，恁嘛喝聲一下。",
    tailo:
      "Ta̍k-ke m̄-thang kik-tiām-tiām, beh ia̍h m̄, lín mā huah-siann--tsi̍t-ē.",
  },
  {
    hanji: "我逐月日都愛納一萬箍的會仔錢。",
    tailo: "Guá ta̍k gue̍h-ji̍t to ài la̍p tsi̍t-bān khoo ê huē-á-tsînn.",
  },
  {
    hanji: "伊的外套洗甲勼水去，內裾煞看現現。",
    tailo:
      "I ê guā-thò sé kah kiu-tsuí--khì, lāi-ki suah khuànn-hiān-hiān.",
  },
  {
    hanji: "這馬天氣較涼冷矣，出門著加疊一領衫。",
    tailo:
      "Tsit-má thinn-khì khah liâng-líng--ah, tshut-mn̂g tio̍h ke tha̍h tsi̍t niá sann.",
  },
  {
    hanji: "伊出車禍著傷，跤煞袂行，予人用軟床扛起去救護車送去病院。",
    tailo:
      "I tshut tshia-hō tio̍h-siong, kha suah bē kiânn, hōo lâng iōng nńg-tshn̂g kng khí-khì kiù-hōo-tshia sàng-khì pēnn-īnn.",
  },
  {
    hanji: "古早人無電，暗時愛點燈膋。",
    tailo: "Kóo-tsá-lâng bô tiān, àm-sî ài tiám ting-lâ.",
  },
  {
    hanji: "阮學校彼欉茄苳樹，規百冬矣，樹箍是粗閣勇。",
    tailo:
      "Guán ha̍k-hāu hit tsâng ka-tang-tshiū, kui pah tang--ah, tshiū-khoo sī tshoo koh ióng.",
  },
  {
    hanji: "阿母留一張字條仔予我，吩咐講愛會記得去納電火錢。",
    tailo:
      "A-bú lâu tsi̍t tiunn jī-tiâu-á hōo--guá, huan-hù kóng ài ē-kì-tit khì la̍p tiān-hué-tsînn.",
  },
  {
    hanji: "這擺是欲𬦰淺山仔，咱空身來去就好。",
    tailo:
      "Tsit pái sī beh peh tshián-suann-á, lán khang-sin lâi-khì tō hó.",
  },
  {
    hanji: "阿英規年迵天拍拚做工課，到今猶原空身。",
    tailo:
      "A-ing kui-nî-thàng-thinn phah-piànn tsò khang-khuè, kàu-tann iu-guân khang-sin.",
  },
  {
    hanji: "過年的時陣，𪜶家族仔攏會去公廳拜祖先。",
    tailo:
      "Kuè-nî ê sî-tsūn, in ka-tso̍k-á lóng ē khì kong-thiann pài tsóo-sian.",
  },
  {
    hanji: "凡若麵粉做的我攏真有路，特別是麵粉粿仔我上愛食。",
    tailo:
      "Huān-nā mī-hún tsò--ê guá lóng tsin ū-lōo, ti̍k-pia̍t sī mī-hún-kué-á guá siōng ài tsia̍h.",
  },
  {
    hanji: "這塊桌仔無欲用矣，先共搬去邊仔角囥。",
    tailo:
      "Tsit tè toh-á bô beh īng--ah, sing kā puann-khì pinn-á-kak khǹg.",
  },
  {
    hanji: "這个囡仔誠無時定，一睏仔久就隨走甲無看著人影去。",
    tailo:
      "Tsit ê gín-á tsiânn bô-sî-tiānn, tsi̍t-khùn-á-kú tō suî tsáu kah bô khuànn-tio̍h lâng-iánn--khì.",
  },
  {
    hanji: "當咧大的囡仔人，較加嘛無時定，予伊耍一時仔無要緊。",
    tailo:
      "Tng-teh tuā ê gín-á-lâng, khah-ke mā bô-sî-tiānn, hōo i sńg--tsi̍t-sî-á bô iàu-kín.",
  },
  {
    hanji: "這个囡仔真孽呢，坐徛袂牢無時得定。",
    tailo:
      "Tsit ê gín-á tsin gia̍t--neh, tsē khiā bē tiâu bô-sî tik-tiānn.",
  },
  {
    hanji: "恁囡仔的尿苴仔愛換矣喔，有鼻著臭尿破味。",
    tailo:
      "Lín gín-á ê jiō-tsū-á ài uānn--ah--ooh, ū phīnn-tio̍h tshàu-jiō-phuà-bī.",
  },
  {
    hanji: "你這馬的圖畫甲閣略仔有臭尿破味矣喔。",
    tailo:
      "Lí tsit-má ê tôo uē kah koh lio̍h-á ū tshàu-jiō-phuà-bī--ah--ooh.",
  },
  {
    hanji: "伊的店按算欲開佇大通遐，講遐會較食市。",
    tailo:
      "I ê tiàm àn-sǹg beh khui tī tuā-thong hia, kóng hia ē khah tsia̍h-tshī.",
  },
  {
    hanji: "𪜶兄妹仔真會曉想，毋捌因為厝裡散食就來失志。",
    tailo:
      "In hiann-muē-á tsin ē-hiáu siūnn, m̄ bat in-uī tshù--lí sàn-tsia̍h tō lâi sit-tsì.",
  },
  {
    hanji: "根據犯案的時間，我人都無佇現場，這嘛是我無可能犯罪的干證。",
    tailo:
      "Kin-kì huān-àn ê sî-kan, guá lâng to bô tī hiān-tiûnn, tse mā sī guá bô khó-lîng huān-tsuē ê kan-tsìng.",
  },
  {
    hanji:
      "「有理無理，干證先拍起。」對這句話會使看出古早時官府辦案的無合理。",
    tailo:
      "“Ū lí bô lí, kan-tsìng sing phah-khí.” Uì tsit kù uē ē-sái khuànn-tshut kóo-tsá-sî kuann-hú pān-àn ê bô ha̍p-lí.",
  },
  {
    hanji: "學術界已經接受伊提出的新理論，也通干證伊的看法有一定的道理。",
    tailo:
      "Ha̍k-su̍t-kài í-king tsiap-siū i thê-tshut ê sin lí-lūn, iā thang kan-tsìng i ê khuànn-huat ū it-tīng ê tō-lí.",
  },
  {
    hanji: "阿媽去園裡薅番薯，我綴佇邊仔鬥共根頭的塗敲挕捒。",
    tailo:
      "A-má khì hn̂g--lí khau han-tsî, guá tuè tī pinn--á tàu kā kin-thâu ê thôo khà hìnn-sak.",
  },
  {
    hanji:
      "你定定頭疼，著愛緊去予先生看，對根頭落手，毋通一直食止疼藥仔。",
    tailo:
      "Lí tiānn-tiānn thâu-thiànn, tio̍h-ài kín khì hōo sian-sinn khuànn, uì kin-thâu lo̍h-tshiú, m̄-thang it-ti̍t tsia̍h tsí-thiànn-io̍h-á.",
  },
  {
    hanji: "臺灣的平埔族屬於南島語族，嘛予人稱呼做平埔族群。",
    tailo:
      "Tâi-uân ê Pênn-poo-tso̍k sio̍k-î Lâm-tó Gí-tso̍k, mā hōo lâng tshing-hoo tsò Pênn-poo tso̍k-kûn.",
  },
  {
    hanji: "若欲招伴去𬦰懸山，物件佮裝備愛攢有齊透才通出門，較袂有代誌。",
    tailo:
      "Nā beh tsio phuānn khì peh kuân suann, mi̍h-kiānn kah tsong-pī ài tshuân ū tsiâu-thàu tsiah thang tshut-mn̂g, khah bē ū tāi-tsì.",
  },
  {
    hanji: "欲做科技創新，理論愛先學予齊透才有可能達成目標。",
    tailo:
      "Beh tsò kho-ki tshòng-sin, lí-lūn ài sing o̍h hōo tsiâu-thàu tsiah ū khó-lîng ta̍t-sîng bo̍k-piau.",
  },
  {
    hanji: "我話若欲講透機，你目屎會掰袂離。",
    tailo: "Guá uē nā beh kóng thàu-ki, lí ba̍k-sái ē pué bē lī.",
  },
  {
    hanji: "工課等一下主任會來拍派，你毋通先偷走。",
    tailo:
      "Khang-khuè tán--tsi̍t-ē tsú-jīm ē lâi phah-phài, lí m̄-thang sing thau-tsáu.",
  },
  {
    hanji: "彼个經濟犯去予人限制出境，結局猶是去予伊偷走過手。",
    tailo:
      "Hit ê king-tsè-huān khì hōo lâng hān-tsè tshut-kíng, kiat-kio̍k iáu-sī khì hōo i thau-tsáu kuè-tshiú.",
  },
  {
    hanji: "咱的想法佮做法，著愛綴會著時世，才袂予人講是老古董。",
    tailo:
      "Lán ê siūnn-huat kah tsò-huat, tio̍h-ài tuè ē tio̍h sî-sè, tsiah bē hōo lâng kóng sī lāu-kóo-tóng.",
  },
  {
    hanji: "好心的倒咧餓，歹心的戴王帽，這到底是啥物款的天年？",
    tailo:
      "Hó-sim--ê tó leh gō, pháinn-sim--ê tì ông-bō, tse tàu-té sī siánn-mih khuán ê thinn-nî?",
  },
  {
    hanji:
      "伊想講這馬是伊的天年就為非糝做，早慢會知影囂俳無落魄的久是啥物意思。",
    tailo:
      "I siūnn-kóng tsit-má sī i ê thinn-nî tō uî-hui-sám-tsò, tsá-bān ē tsai-iánn hiau-pai bô lo̍k-phik ê kú sī siánn-mih ì-sù.",
  },
  {
    hanji: "伊這擺的比賽拄著頂擺的金牌選手，真正是愛拚硬仔矣。",
    tailo:
      "I tsit pái ê pí-sài tú-tio̍h tíng-pái ê kim-pâi suán-tshiú, tsin-tsiànn sī ài piànn-ngē-á--ah.",
  },
  {
    hanji: "聽講今仔日的穡頭真歹做，我看愛拚硬仔矣。",
    tailo:
      "Thiann-kóng kin-á-ji̍t ê sit-thâu tsin pháinn tsò, guá khuànn ài piànn-ngē-á--ah.",
  },
  {
    hanji: "做人心肝愛平棒，袂使攏推軟仔，串欲欺負古意人。",
    tailo:
      "Tsò-lâng sim-kuann ài pênn-pāng, bē-sái lóng thui-nńg-á, tshuàn beh khi-hū kóo-ì-lâng.",
  },
  {
    hanji:
      "伊咧做代誌見擺都攏推軟仔，串揀一寡無挑戰性的工課，較加嘛袂進步。",
    tailo:
      "I teh tsò tāi-tsì kiàn-pái to lóng thui-nńg-á, tshuàn kíng tsi̍t-kuá bô thiáu-tsiàn-sìng ê khang-khuè, khah-ke mā bē tsìn-pōo.",
  },
  {
    hanji: "下班時間，逐幫車攏櫼甲實捅捅。",
    tailo:
      "Hā-pan sî-kan, ta̍k pang tshia lóng tsinn kah tsa̍t-thóng-thóng.",
  },
  {
    hanji: "伊的頭殼實捅捅，做代誌定定袂曉變通。",
    tailo:
      "I ê thâu-khak tsa̍t-thóng-thóng, tsò tāi-tsì tiānn-tiānn bē-hiáu piàn-thong.",
  },
  {
    hanji: "伊想甲心肝實捅捅，毋知欲按怎才好。",
    tailo:
      "I siūnn kah sim-kuann tsa̍t-thóng-thóng, m̄ tsai beh án-tsuánn tsiah hó.",
  },
  {
    hanji: "這間倉庫的貨疊甲實實，欲過連甲一个跤路都無。",
    tailo:
      "Tsit king tshng-khòo ê huè thia̍p kah tsa̍t-tsa̍t, beh kuè liân kah tsi̍t ê kha-lōo to bô.",
  },
  {
    hanji:
      "我從少年做工就擔擔硩重，操了過頭去，今胸坎定定實實，中氣袂順。",
    tailo:
      "Guá tsîng siàu-liân tsò-kang tō tann-tànn teh-tāng, tshau liáu kuè-thâu--khì, tann hing-khám tiānn-tiānn tsa̍t-tsa̍t, tiong-khuì bē sūn.",
  },
  {
    hanji: "較早佇阮庄裡都歹討趁，姑不將才著走徙去海口拋魚罔趁食。",
    tailo:
      "Khah-tsá tī guán tsng--lí to pháinn thó-thàn, koo-put-tsiong tsiah tio̍h tsáu-suá khì hái-kháu pha-hî bóng thàn-tsia̍h.",
  },
  {
    hanji: "彼對姐弟仔是雙生仔，感情真誠峇，連開店做生理都開踮相隔壁。",
    tailo:
      "Hit tuì tsiá-tē-á sī siang-senn-á, kám-tsîng tsin-tsiânn bā, liân khui-tiàm tsò-sing-lí to khui tiàm sio-keh-piah.",
  },
  {
    hanji: "泅水掛水鏡，毋但保護目睭，水底的物件閣會當看甲足清楚的。",
    tailo:
      "Siû-tsuí kuà tsuí-kiànn, m̄-nā pó-hōo ba̍k-tsiu, tsuí-té ê mi̍h-kiānn koh ē-tàng khuànn kah tsiok tshing-tshó--ê.",
  },
  {
    hanji: "這擺地動遐爾大，彼間規百年的舊厝講連顫悶著都無。",
    tailo:
      "Tsit pái tē-tāng hiah-nī tuā, hit king kui pah nî ê kū-tshù kóng liân tsùn-būn--tio̍h to bô.",
  },
  {
    hanji: "伊遐爾好額的人，損失幾百萬仔伊攏無顫悶著。",
    tailo:
      "I hiah-nī hó-gia̍h ê lâng, sún-sit--kuí-pah-bān-á i lóng bô tsùn-būn--tio̍h.",
  },
  {
    hanji: "注心去做你的穡，別人的閒仔代莫插較無魍。",
    tailo:
      "Tsù-sim khì tsò lí ê sit, pa̍t-lâng ê îng-á-tāi mài tshap khah bô báng.",
  },
  {
    hanji: "熱天時仔麥仔酒、汽水是𥴊仔店的大色貨。",
    tailo:
      "Jua̍h-thinn-sî-á be̍h-á-tsiú, khì-tsuí sī kám-á-tiàm ê tuā-sik-huè.",
  },
  {
    hanji: "逐年媽祖生的時，阿媽攏會佇案桌頂排誠濟祭品拜拜求平安。",
    tailo:
      "Ta̍k-nî Má-tsóo-senn ê sî, a-má lóng ē tī àn-toh-tíng pâi tsiânn tsē tsè-phín pài-pài kiû-pîng-an.",
  },
  {
    hanji: "遐爾花血的布提來做洋裝你敢敢穿？",
    tailo:
      "Hiah-nī hue-hiat ê pòo the̍h-lâi tsò iûnn-tsong lí kám kánn tshīng?",
  },
  {
    hanji: "欲去予人請，你穿甲彼領破一空的褲，敢會見眾得？",
    tailo:
      "Beh khì hōo lâng tshiánn, lí tshīng kah hit niá phuà tsi̍t khang ê khòo, kám ē-kìnn-tsìng--tit?",
  },
  {
    hanji: "你食甲七十外矣，才做這號代誌，實在袂見眾得。",
    tailo:
      "Lí tsia̍h kah tshit-tsa̍p-guā--ah, tsiah tsò tsit-lō tāi-tsì, si̍t-tsāi bē-kìnn-tsìng--tit.",
  },
  {
    hanji: "阿媽八十外歲矣，猶誠精光，一屑仔都袂老頹。",
    tailo:
      "A-má peh-tsa̍p-guā huè--ah, iáu tsiânn tsing-kong, tsi̍t-sut-á to bē lāu-thuē.",
  },
  {
    hanji: "做公親愛公平，袂使攔孤爿。",
    tailo: "Tsò kong-tshin ài kong-pênn, bē-sái ânn-koo-pîng.",
  },
  {
    hanji: "我看結婚的禮數簡單就好，省事事省，才袂費氣。",
    tailo:
      "Guá khuànn kiat-hun ê lé-sòo kán-tan tō hó, síng-sū-sū-síng, tsiah bē huì-khì.",
  },
  {
    hanji: "你今仔日穿甲遮新嫣，敢是欲去相親？",
    tailo:
      "Lí kin-á-ji̍t tshīng kah tsiah sin-ian, kám-sī beh khì siòng-tshin?",
  },
  {
    hanji: "這馬的囡仔傷好命，物件攏毋知好惜略。",
    tailo:
      "Tsit-má ê gín-á siunn hó-miā, mi̍h-kiānn lóng m̄ tsai hó sioh-lio̍h.",
  },
  {
    hanji: "油蔥粿濫蒜茸豆油上著味。",
    tailo: "Iû-tshang-kué lām suàn-jiông tāu-iû siōng tio̍h-bī.",
  },
  {
    hanji: "阿仁佇工地縛鐵仔，較加手肚仁嘛結結結。",
    tailo:
      "A-jîn tī kang-tē pa̍k thih-á, khah-ke tshiú-tóo-jîn mā kiat-kiat-kiat.",
  },
  {
    hanji: "你莫見擺攏欲佮人夯硬篙，較袂顧人怨。",
    tailo:
      "Lí mài kiàn-pái lóng beh kah lâng giâ-ngē-ko, khah bē kòo-lâng-uàn.",
  },
  {
    hanji: "伊這个人誠狡怪，逐項代誌都欲佮人對扴。",
    tailo:
      "I tsit ê lâng tsiânn káu-kuài, ta̍k hāng tāi-tsì to beh kah lâng tuì-ke̍h.",
  },
  {
    hanji: "酸雨會造成農作物的損害，年久月深了後連咱的健康嘛會受著影響。",
    tailo:
      "Sng-hōo ē tsō-sîng lông-tsok-bu̍t ê sún-hāi, nî-kú-gue̍h-tshim liáu-āu liân lán ê kiān-khong mā ē siū-tio̍h íng-hióng.",
  },
  {
    hanji: "伊為著欲做生理，全世界逐跡都去，傱甲無底止。",
    tailo:
      "I uī-tio̍h beh tsò-sing-lí, tsuân sè-kài ta̍k jiah to khì, tsông kah bô-tí-tsí.",
  },
  {
    hanji: "情份算來無底止，親像無底的深坑。",
    tailo:
      "Tsîng-hūn sǹg--lâi bô-tí-tsí, tshin-tshiūnn bô-té ê tshim-khenn.",
  },
  {
    hanji: "伊是我的囡仔伴，我捌伊捌甲有賰矣。",
    tailo: "I sī guá ê gín-á-phuānn, guá bat i bat kah ū-tshun--ah.",
  },
  {
    hanji: "人阿姑有紮等路來，咱合該然嘛著攢寡伴手予伊紮轉去。",
    tailo:
      "Lâng a-koo ū tsah tán-lōo lâi, lán ha̍p-kai-jiân mā tio̍h tshuân kuá phuānn-tshiú hōo i tsah--tńg-khì.",
  },
  {
    hanji: "阿明誠好頭喙，人閣真好生張，較加人緣嘛好。",
    tailo:
      "A-bîng tsiânn hó-thâu-tshuì, lâng koh tsin hó senn-tiunn, khah-ke lâng-iân mā hó.",
  },
  {
    hanji: "這兩件代誌無牽磕，你毋通濫濫做一伙。",
    tailo:
      "Tsit nn̄g kiānn tāi-tsì bô khan-kha̍p, lí m̄-thang lām-lām tsò-tsi̍t-hué.",
  },
  {
    hanji: "伊不時都揣空揣縫欲參人輸贏，你閃較遠咧較袂予伊牽闔著。",
    tailo:
      "I put-sî to tshuē-khang-tshuē-phāng beh tsham lâng su-iânn, lí siám khah hn̄g--leh khah bē hōo i khan-kha̍h--tio̍h.",
  },
  {
    hanji: "伊定定咧運動，所以筋肉加真結實，人誠粗勇。",
    tailo:
      "I tiānn-tiānn teh ūn-tōng, sóo-í kin-bah ke tsin kiat-si̍t, lâng tsiânn tshoo-ióng.",
  },
  {
    hanji: "伊用斧頭銎共柴箱的鎖頭摃歹，才通共內底的物件提出來。",
    tailo:
      "I iōng póo-thâu-khing kā tshâ-siunn ê só-thâu kòng pháinn, tsiah thang kā lāi-té ê mi̍h-kiānn the̍h--tshut-lâi.",
  },
  {
    hanji: "咱逐家隨人出寡本錢，相倚傍來做生理。",
    tailo:
      "Lán ta̍k-ke suî-lâng tshut kuá pún-tsînn, sio-uá-pn̄g lâi tsò-sing-lí.",
  },
  {
    hanji: "法律著愛替守法的人主持公道，好人哪會使白白予歹人草踏去？",
    tailo:
      "Huat-lu̍t tio̍h-ài thè siú-huat ê lâng tsú-tshî kong-tō, hó-lâng ná ē-sái pe̍h-pe̍h hōo pháinn-lâng tsháu-ta̍h--khì?",
  },
  {
    hanji: "人較有歲了後，皮膚會變較薄，跤腿的青筋攏看現現。",
    tailo:
      "Lâng khah ū-huè liáu-āu, phuê-hu ē piàn khah po̍h, kha-thuí ê tshenn-kin lóng khuànn-hiān-hiān.",
  },
  {
    hanji: "我最近較捷咧運動，營養嘛加減有咧顧，人加真精英。",
    tailo:
      "Guá tsuè-kīn khah tsia̍p teh ūn-tōng, îng-ióng mā ke-kiám ū teh kòo, lâng ke tsin tsing-ing.",
  },
  {
    hanji:
      "伊真𠢕看面色聽話意，若看著對方面捋落來，就隨知影愛轉話關，袂去得失人。",
    tailo:
      "I tsin gâu khuànn bīn-sik thiann uē-ì, nā khuànn-tio̍h tuì-hong bīn lua̍h--lo̍h-lâi, tō suî tsai-iánn ài tńg uē-kuan, bē khì tik-sit--lâng.",
  },
  {
    hanji: "逐工天色都猶暗殕暗殕，伊就愛坐頭幫車去學校讀冊。",
    tailo:
      "Ta̍k-kang thinn-sik to iáu àm-phú-àm-phú, i tō ài tsē thâu-pang-tshia khì ha̍k-hāu tha̍k-tsheh.",
  },
  {
    hanji: "阮阿媽見若滷滷卵，攏會佮肉燥做伙炕。",
    tailo:
      "Guán a-má kiàn-nā lóo lóo-nn̄g, lóng ē kah bah-sò tsò-hué khòng.",
  },
  {
    hanji: "熱人的時食一粒仔芳甜的梨仔瓜，毋但止喙焦閣助消化。",
    tailo:
      "Jua̍h--lâng ê sî tsia̍h tsi̍t-lia̍p-á phang-tinn ê lâi-á-kue, m̄-nā tsí tshuì-ta koh tsōo siau-huà.",
  },
  {
    hanji: "久無落雨，門口埕彼欉桂花煞家己焦蔫去。",
    tailo:
      "Kú bô lo̍h-hōo, mn̂g-kháu-tiânn hit tsâng kuì-hue suah ka-kī ta-lian--khì.",
  },
  {
    hanji: "若欲共窗仔子刻甲有花有草，著愛倩會曉幼工的木匠來創才會媠。",
    tailo:
      "Nā beh kā thang-á-tsí khik kah ū hue ū tsháu, tio̍h-ài tshiànn ē-hiáu iù-kang ê ba̍k-tshiūnn lâi tshòng tsiah ē suí.",
  },
  {
    hanji: "常在運動的人跤肚仁會較結實。",
    tailo: "Tshiâng-tsāi ūn-tōng ê lâng kha-tóo-jîn ē khah kiat-si̍t.",
  },
  {
    hanji: "伊病甲賰一屑仔氣絲仔爾爾。",
    tailo: "I pēnn kah tshun tsi̍t-sut-á khuì-si-á niā-niā.",
  },
  {
    hanji: "幾若個月無落雨，山邊的花草攏枯焦去。",
    tailo:
      "Kuí-nā kò gue̍h bô lo̍h-hōo, suann-pinn ê hue-tsháu lóng koo-ta--khì.",
  },
  {
    hanji:
      "阿義去𬦰山煞失蹤欲兩禮拜，𪜶老爸煩惱甲規身人消瘦落肉強欲枯焦去。",
    tailo:
      "A-gī khì peh-suann suah sit-tsong beh nn̄g lé-pài, in lāu-pē huân-ló kah kui sian lâng siau-sán-lo̍h-bah kiōng-beh koo-ta--khì.",
  },
  {
    hanji: "若欲買較有古早味的物件抑是四秀仔，去舊街仔揣上對路。",
    tailo:
      "Nā beh bé khah ū kóo-tsá-bī ê mi̍h-kiānn ia̍h-sī sì-siù-á, khì kū-ke-á tshuē siōng tuì-lōo.",
  },
  {
    hanji: "阿媽逐冬攏會佇媽祖生的時綴人去進香。",
    tailo:
      "A-má ta̍k-tang lóng ē tī Má-tsóo-senn ê sî tuè lâng khì tsìn-hiunn.",
  },
  {
    hanji: "前幾工為著考試睏無飽，今仔日著愛補眠。",
    tailo:
      "Tsîng kuí kang uī-tio̍h khó-tshì khùn bô pá, kin-á-ji̍t tio̍h-ài póo-bîn.",
  },
  {
    hanji: "母舅坐大位，所以著愛坐新娘桌。",
    tailo: "Bú-kū tsē tuā-uī, sóo-í tio̍h-ài tsē sin-niû-toh.",
  },
  {
    hanji: "較早阮阿媽激的梅仔酒啉著酸微、芳閣好落喉，予我到今猶足數念。",
    tailo:
      "Khah-tsá guán a-má kik ê muê-á-tsiú lim tio̍h sng-bui, phang koh hó lo̍h-âu, hōo guá kàu-tann iáu tsiok siàu-liām.",
  },
  {
    hanji: "阮阿公誠愛抾古早錢，阮厝裡猶揣會著真濟銅仙。",
    tailo:
      "Guán a-kong tsiânn ài khioh kóo-tsá tsînn, guán tshù--lí iáu tshuē ē tio̍h tsin tsē tâng-sián.",
  },
  {
    hanji: "這項工課你敢有法度佇一點鐘內共做予好勢咧？",
    tailo:
      "Tsit hāng khang-khuè lí kám ū-huat-tōo tī tsi̍t tiám-tsing lāi kā tsò hōo hó-sè--leh?",
  },
  {
    hanji: "人客到位，咱愛好好仔共案內，才袂失禮。",
    tailo: "Lâng-kheh kàu-uī, lán ài hó-hó-á kā àn-nāi, tsiah bē sit-lé.",
  },
  {
    hanji: "這站仔山頭攏烏陰烏陰，無定明仔早起會變天。",
    tailo:
      "Tsit-tsām-á suann-thâu lóng oo-im-oo-im, bô-tiānn bîn-á-tsá-khí ē piàn-thinn.",
  },
  {
    hanji: "現時時機䆀䆀，你若欲佮人學做生理著愛較綿精咧。",
    tailo:
      "Hiān-sî sî-ki bái-bái, lí nā beh kah lâng o̍h tsò-sing-lí tio̍h-ài khah mî-tsinn--leh.",
  },
  {
    hanji: "看阿義拍拳頭的屈勢，就知影伊的工夫底蒂有偌深。",
    tailo:
      "Khuànn A-gī phah kûn-thâu ê khut-sè, tō tsai-iánn i ê kang-hu té-tì ū guā tshim.",
  },
  {
    hanji: "你想欲做頭人，愛共擔重擔的屈勢表現出來。",
    tailo:
      "Lí siūnn-beh tsò thâu-lâng, ài kā tann-tāng-tànn ê khut-sè piáu-hiān--tshut-lâi.",
  },
  {
    hanji: "西瓜傷大粒就破爿賣，銷路顛倒好。",
    tailo: "Si-kue siunn tuā lia̍p tō phuà-pîng bē, siau-lōo tian-tò hó.",
  },
  {
    hanji: "你的頭毛型若破爿會較好看。",
    tailo: "Lí ê thâu-mn̂g-hîng nā phuà-pîng ē khah hó-khuànn.",
  },
  {
    hanji: "你月底欲去美國𨑨迌，愛會記得去銀行共臺票換做美金喔！",
    tailo:
      "Lí gue̍h-té beh khì Bí-kok tshit-thô, ài ē-kì-tit khì gîn-hâng kā Tâi-phiò uānn-tsò Bí-kim--ooh!",
  },
  {
    hanji: "搬遮的箱仔愛注意方向，毋通囥顛倒頭去。",
    tailo:
      "Puann tsia-ê siunn-á ài tsù-ì hong-hiòng, m̄-thang khǹg tian-tò-thâu--khì.",
  },
  {
    hanji: "你拄才斡顛倒頭去矣，較加嘛揣無路。",
    tailo:
      "Lí tú-tsiah uat tian-tò-thâu--khì--ah, khah-ke mā tshuē-bô lōo.",
  },
  {
    hanji: "遮的代誌明其都我做的，你煞顛倒頭講做是你的功勞。",
    tailo:
      "Tsia-ê tāi-tsì bîng-ki to guá tsò--ê, lí suah tian-tò-thâu kóng-tsò sī lí ê kong-lô.",
  },
  {
    hanji: "阿公見若熱人，攏穿吊䘥仔四界去行踏，講按呢較涼、較爽快。",
    tailo:
      "A-kong kiàn-nā jua̍h--lâng, lóng tshīng tiàu-kah-á sì-kè khì kiânn-ta̍h, kóng án-ne khah liâng, khah sóng-khuài.",
  },
  {
    hanji: "搬重的物件誠著力，有歲的人毋通搬。",
    tailo:
      "Puann tāng ê mi̍h-kiānn tsiânn tio̍h-la̍t, ū-huè ê lâng m̄-thang puann.",
  },
  {
    hanji: "阿義仔昨昏下晡出車禍，聽講挵一下誠著力。",
    tailo:
      "A-gī--á tsa-hng ē-poo tshut tshia-hō, thiann-kóng lòng tsi̍t-ē tsiânn tio̍h-la̍t.",
  },
  {
    hanji:
      "伊自頂月日失戀到今，袂輸有體無魂按呢欲死盪幌，予人看著真毋甘。",
    tailo:
      "I tsū tíng gue̍h-ji̍t sit-luân kàu-tann, bē-su ū-thé-bô-hûn án-ne beh-sí-tōng-hàinn, hōo lâng khuànn tio̍h tsin m̄-kam.",
  },
  {
    hanji: "落雨矣，本成欲死盪幌的樹仔，隨閣青蘢蘢矣。",
    tailo:
      "Lo̍h-hōo--ah, pún-tsiânn beh-sí-tōng-hàinn ê tshiū-á, suî koh tshenn-lìng-lìng--ah.",
  },
  {
    hanji: "架佇圳溝頂彼塊長株形的棺柴枋，暫時做橋枋。",
    tailo:
      "Khuè tī tsùn-kau-tíng hit tè tn̂g-tu-hîng ê kuann-tshâ-pang, tsiām-sî tsò kiô-pang.",
  },
  {
    hanji: "若有來臺南𨑨迌，決定愛來食阮遮出名的棺柴枋。",
    tailo:
      "Nā ū lâi Tâi-lâm tshit-thô, kuat-tīng ài lâi tsia̍h guán tsia tshut-miâ ê kuann-tshâ-pang.",
  },
  {
    hanji: "這篇文章無落名，毋知影作者是啥人？",
    tailo:
      "Tsit phinn bûn-tsiong bô lo̍h-miâ, m̄ tsai-iánn tsok-tsiá sī siánn-lâng?",
  },
  {
    hanji:
      "水彩圖的媠䆀是三不等，毋過若有出名的畫家落名，就加真有價值款。",
    tailo:
      "Tsuí-tshái tôo ê suí-bái sī sam-put-tíng, m̄-koh nā ū tshut-miâ ê uē-ka lo̍h-miâ, tō ke tsin ū kè-ta̍t-khuán.",
  },
  {
    hanji: "番薯麻穎湯氣味讚閣滋養，毋過欲做甲會好食是足厚工的。",
    tailo:
      "Han-tsî muâ-ínn-thng khì-bī tsán koh tsu-ióng, m̄-koh beh tsò kah ē hó-tsia̍h sī tsiok kāu-kang--ê.",
  },
  {
    hanji: "做人序細的，毋通定定予序大人操心擘腹。",
    tailo:
      "Tsò lâng sī-sè--ê, m̄-thang tiānn-tiānn hōo sī-tuā-lâng tshau-sim peh-pak.",
  },
  {
    hanji: "山跤規大片攏是平波波的田洋。",
    tailo: "Suann-kha kui tuā phiàn lóng sī pênn-pho-pho ê tshân-iûnn.",
  },
  {
    hanji: "圓人會扁，扁人會圓，若是心肝頭平波波，隨緣的人就無煩惱。",
    tailo:
      "Înn--lâng ē pínn, pínn--lâng ē înn, nā-sī sim-kuann-thâu pênn-pho-pho, suî-iân ê lâng tō bô huân-ló.",
  },
  {
    hanji: "壁角較會卡垃儳，摒掃的時陣著愛斟酌。",
    tailo:
      "Piah-kak khah ē kha̍h lâ-sâm, piànn-sàu ê sî-tsūn tio̍h-ài tsim-tsiok.",
  },
  {
    hanji: "伊見擺奕牌仔若咧欲輸矣就跋臭佮人花，莫怪無人愛佮伊奕。",
    tailo:
      "I kiàn-pái ī pâi-á nā teh-beh su--ah tō pua̍h-tshàu kah lâng hue, bo̍k-kuài bô lâng ài kah i ī.",
  },
  {
    hanji: "你若嫁予這號半病仔，定著一世人勞碌。",
    tailo:
      "Lí nā kè hōo tsit-lō puàn-pēnn-á, tiānn-tio̍h tsi̍t-sì-lâng lô-lo̍k.",
  },
  {
    hanji: "阿峰一下聽著組員報告煞，紲話落去補充伊拄才無講著的資料。",
    tailo:
      "A-hong tsi̍t-ē thiann-tio̍h tsoo-uân pò-kò suah, suà-uē lo̍h-khì póo-tshiong i tú-tsiah bô kóng--tio̍h ê tsu-liāu.",
  },
  {
    hanji: "我食肉燥飯上愛配白菜滷佮貢丸湯。",
    tailo:
      "Guá tsia̍h bah-sò-pn̄g siōng ài phuè pe̍h-tshài-lóo kah kòng-uân-thng.",
  },
  {
    hanji:
      "麵擔仔衛生無好害人客食了落屎猶小局，上害的是濫會傷身體的化學添加物，害主顧客帶身命才是夭壽。",
    tailo:
      "Mī-tànn-á uē-sing bô hó hāi lâng-kheh tsia̍h-liáu làu-sái iáu sió-kio̍k, siōng hāi--ê sī lām ē siong sin-thé ê huà-ha̍k thiam-ka-bu̍t, hāi tsú-kòo-kheh tài-sin-miā tsiah-sī iáu-siū.",
  },
  {
    hanji: "做人毋通傷小局，若無，會無人緣。",
    tailo: "Tsò-lâng m̄-thang siunn sió-kio̍k, nā-bô, ē bô-lâng-iân.",
  },
  {
    hanji: "你講遐濟話仁，是欲予阮逐家笑甲腹肚疼，是毋？",
    tailo:
      "Lí kóng hiah tsē uē-jîn, sī beh hōo guán ta̍k-ke tshiò kah pak-tóo thiànn, sī--m̄?",
  },
  {
    hanji: "孤伊一个人唱聲，無人贊喙。",
    tailo: "Koo i tsi̍t ê lâng tshiàng-siann, bô lâng tsàn-tshuì.",
  },
  {
    hanji: "𪜶兜上細漢的囡仔看著生份人攏較畏羞人，毋敢主動佮人相借問。",
    tailo:
      "In tau siōng sè-hàn ê gín-á khuànn-tio̍h senn-hūn-lâng lóng khah uì-siáu-jîn, m̄ kánn tsú-tōng kah lâng sio-tsioh-mn̄g.",
  },
  {
    hanji: "佳哉伊較早趁的錢有儉起來，這馬無囡仔欲共飼，猶會當食老本。",
    tailo:
      "Ka-tsài i khah-tsá thàn ê tsînn ū khiām--khí-lâi, tsit-má bô gín-á beh kā tshī, iáu ē-tàng tsia̍h-lāu-pún.",
  },
  {
    hanji: "時代一直咧進步，咱袂當無綴咧進步，干焦食老本是袂用得。",
    tailo:
      "Sî-tāi it-ti̍t teh tsìn-pōo, lán bē-tàng bô tuè leh tsìn-pōo, kan-na tsia̍h-lāu-pún sī bē-īng--tit.",
  },
  {
    hanji:
      "阿明長期佇炭空作穡，攏無照規定咧澍水、掛喙罨，年久月深就致著沙肺。",
    tailo:
      "A-bîng tn̂g-kî tī thuànn-khang tsoh-sit, lóng bô tsiàu kui-tīng teh tshū tsuí, kuà tshuì-am, nî-kú-gue̍h-tshim tō tì-tio̍h sua-hì.",
  },
  {
    hanji: "這領衫的布底是誠幼膩的棉紗，穿著袂黏身軀閣會欶汗。",
    tailo:
      "Tsit niá sann ê pòo-té sī tsiânn iù-jī ê mî-se, tshīng tio̍h bē liâm sin-khu koh ē suh-kuānn.",
  },
  {
    hanji: "彼塊田地無人種作，放咧臭生荒，誠無彩。",
    tailo:
      "Hit tè tshân-tē bô lâng tsìng-tsoh, pàng leh tshàu-tshenn-hng, tsiânn bô-tshái.",
  },
  {
    hanji: "麻煩你佇今仔日煞工進前共計畫書交予我。",
    tailo:
      "Mâ-huân lí tī kin-á-ji̍t suah-kang tsìn-tsîng kā kè-uē-su kau hōo--guá.",
  },
  {
    hanji: "頭家有吩咐咱起工、落工攏愛照時間。",
    tailo:
      "Thâu-ke ū huan-hù lán khí-kang, lo̍h-kang lóng ài tsiàu sî-kan.",
  },
  {
    hanji: "伊做代誌真有理氣，毋才逐家攏信任伊。",
    tailo: "I tsò tāi-tsì tsin ū lí-khì, m̄-tsiah ta̍k-ke lóng sìn-jīm--i.",
  },
  {
    hanji: "囡仔人毋捌代誌，若無順伊的意，隨頓落去塗跤起挐。",
    tailo:
      "Gín-á-lâng m̄ bat-tāi-tsì, nā bô sūn i ê ì, suî tǹg lo̍h-khì thôo-kha khí-jû.",
  },
  {
    hanji: "𪜶彼陣囡仔半暝猶毋睏，佇房間裡咧絞營，吵甲厝蓋強欲夯起來。",
    tailo:
      "In hit tīn gín-á puànn-mê iáu m̄ khùn, tī pâng-king--lí teh ká-iânn, tshá kah tshù-kuà kiōng-beh giâ--khí-lâi.",
  },
  {
    hanji: "伊有夠硬鼻的，別人的意見伊攏聽袂入去。",
    tailo:
      "I ū-kàu ngē-phīnn--ê, pa̍t-lâng ê ì-kiàn i lóng thiann bē ji̍p--khì.",
  },
  {
    hanji:
      "阿誠𤆬工人來厝裡成格，𪜶某怪伊攏無咧共伊尊存，就按呢使硬鼻逐項反對。",
    tailo:
      "A-sîng tshuā kang-lâng lâi tshù--lí tshiânn-kik, in bóo kuài i lóng bô teh kā i tsun-tshûn, tsiū-án-ne sái ngē-phīnn ta̍k hāng huán-tuì.",
  },
  {
    hanji: "開建設公司是粗本的投資，你嘛真冇手，一下就共答應。",
    tailo:
      "Khui kiàn-siat kong-si sī tshoo-pún ê tâu-tsu, lí mā tsin phànn-tshiú, tsi̍t-ē tō kā tah-ìng.",
  },
  {
    hanji: "伊大學出業了後，就轉來故鄉做一个薄本的小生理。",
    tailo:
      "I tāi-ha̍k tshut-gia̍p liáu-āu, tō tńg-lâi kòo-hiong tsò tsi̍t ê po̍h-pún ê sió-sing-lí.",
  },
  {
    hanji: "這擺比賽兩人攏平𠢕無輸贏。",
    tailo: "Tsit pái pí-sài nn̄g lâng lóng pênn gâu bô-su-iânn.",
  },
  {
    hanji: "講一句無輸贏的，見擺跋筊若攏輸，啥人欲閣跋？",
    tailo:
      "Kóng tsi̍t kù bô-su-iânn--ê, kiàn-pái pua̍h-kiáu nā lóng su, siánn-lâng beh koh pua̍h?",
  },
  {
    hanji: "我都共伊會失禮矣，閣毋放我煞，去四界投，實在是無臭無潲。",
    tailo:
      "Guá to kā i huē-sit-lé--ah, koh m̄ pàng guá suah, khì sì-kè tâu, si̍t-tsāi sī bô-tshàu-bô-siâu.",
  },
  {
    hanji: "規公司干焦阿瑄伨伊，伊煞共阿瑄嫌甲無一地好，正港是無臭無潲。",
    tailo:
      "Kui kong-si kan-na A-suan thīn--i, i suah kā A-suan hiâm kah bô tsi̍t tè hó, tsiànn-káng sī bô-tshàu-bô-siâu.",
  },
  {
    hanji: "溝仔愛較捷清咧，才袂積水生捙蛆。",
    tailo:
      "Kau-á ài khah tsia̍p tshing--leh, tsiah bē tsik-tsuí senn tshia-tshi.",
  },
  {
    hanji: "有一寡囡仔上課攏坐袂牢，親像一尾蟲按呢蟯蟯趖，實在足捙蛆。",
    tailo:
      "Ū tsi̍t-kuá gín-á siōng-khò lóng tsē bē tiâu, tshin-tshiūnn tsi̍t bué thâng án-ne ngia̍uh-ngia̍uh-sô, si̍t-tsāi tsiok tshia-tshi.",
  },
  {
    hanji: "阿明自透早無閒到暗，規工無時閒，實在真辛苦。",
    tailo:
      "A-bîng tsū thàu-tsá bô-îng kàu àm, kui-kang bô-sî-îng, si̍t-tsāi tsin sin-khóo.",
  },
  {
    hanji:
      "彼个囡仔規工𬦰懸𬦰低無時閒，𪜶爸母著愛共伊顧前顧後，強欲接載伊袂牢。",
    tailo:
      "Hit ê gín-á kui-kang peh-kuân-peh-kē bô-sî-îng, in pē-bú tio̍h-ài kā i kòo-tsîng-kòo-āu, kiōng-beh tsih-tsài i bē tiâu.",
  },
  {
    hanji: "拍賣會場的物件，攏是用喝價的。",
    tailo: "Phah-bē huē-tiûnn ê mi̍h-kiānn, lóng sī iōng huah-kè--ê.",
  },
  {
    hanji: "阮阿母買菜的時，誠𠢕佮人喝價。",
    tailo: "Guán a-bú bé tshài ê sî, tsiânn gâu kah lâng huah-kè.",
  },
  {
    hanji:
      "喝價閣有一種顛倒是價數愈喝愈懸，比論古董，價數定定喝甲會驚死人。",
    tailo:
      "Huah-kè koh ū tsi̍t tsióng tian-tò sī kè-siàu jú huah jú kuân, pí-lūn kóo-tóng, kè-siàu tiānn-tiānn huah kah ē kiann-sí-lâng.",
  },
  {
    hanji:
      "你就是種著恁阿母的油耳，不時都生一寡澹澹溼溼的耳屎來共你凌治。",
    tailo:
      "Lí tō sī tsíng-tio̍h lín a-bú ê iû-hīnn, put-sî to senn tsi̍t-kuá tâm-tâm-sip-sip ê hīnn-sái lâi kā lí lîng-tī.",
  },
  {
    hanji: "大多數的人攏是粗糠耳。",
    tailo: "Tuā-to-sòo ê lâng lóng sī tshoo-khng-hīnn.",
  },
  {
    hanji: "今仔日定規愛共這項代誌辦予好勢。",
    tailo: "Kin-á-ji̍t tīng-kui ài kā tsit hāng tāi-tsì pān hōo hó-sè.",
  },
  {
    hanji: "我看伊咧欲纘袂牢矣，你緊猛去共扶一下。",
    tailo:
      "Guá khuànn i teh-beh tsàn bē tiâu--ah, lí kín-mé khì kā hû--tsi̍t-ē.",
  },
  {
    hanji: "伊是較貧惰讀冊爾爾，毋過猶有一步取，就是做工課真頂真。",
    tailo:
      "I sī khah pîn-tuānn tha̍k-tsheh niā-niā, m̄-koh iáu-ū tsi̍t-pōo-tshú, tō sī tsò khang-khuè tsin tíng-tsin.",
  },
  {
    hanji:
      "你來阮兜，車愛會記得駛入來外埕，毋通擋佇路邊，警察不時都來開單。",
    tailo:
      "Lí lâi guán tau, tshia ài ē-kì-tit sái ji̍p-lâi guā-tiânn, m̄-thang tòng tī lōo-pinn, kíng-tshat put-sî to lâi khui-tuann.",
  },
  {
    hanji: "阿母講伊細漢的時，攏會佇庄跤舊厝的外埕，共𪜶阿舅鬥曝粟仔。",
    tailo:
      "A-bú kóng i sè-hàn ê sî, lóng ē tī tsng-kha kū-tshù ê guā-tiânn, kā in a-kū tàu pha̍k tshik-á.",
  },
  {
    hanji:
      "若有心欲和解，袂使干焦會失禮就準過，對方損失偌濟嘛愛賠人，較袂有事尾。",
    tailo:
      "Nā ū-sim beh hô-kái, bē-sái kan-na huē-sit-lé tō tsún--kuè, tuì-hong sún-sit guā-tsē mā ài puê--lâng, khah bē ū sū-bué.",
  },
  {
    hanji: "你按呢無事無白來共我罵，敢毋免共我會失禮？",
    tailo:
      "Lí án-ne bô-sū-bô-pe̍h lâi kā guá mē, kám m̄-bián kā guá huē-sit-lé?",
  },
  {
    hanji:
      "路頭路尾佮人相拄頭，準講是無蓋熟似的厝邊，嘛愛開喙相借問一下。",
    tailo:
      "Lōo-thâu-lōo-bué kah lâng sio-tú-thâu, tsún-kóng sī bô kài si̍k-sāi ê tshù-pinn, mā ài khui-tshuì sio-tsioh-mn̄g--tsi̍t-ē.",
  },
  {
    hanji: "嘉義市佮嘉義縣佇八掌溪相拄頭。",
    tailo: "Ka-gī-tshī kah Ka-gī-kuān tī Pat-tsiáng-khe sio-tú-thâu.",
  },
  {
    hanji:
      "聽講伊是佇火車頂生的，因由是𪜶母仔坐火車的時水帕雄雄破去，拄好有旅客是醫生，緊猛走來鬥相共，佳哉母仔囝攏平安無代誌。",
    tailo:
      "Thiann-kóng i sī tī hué-tshia-tíng senn--ê, in-iû sī in bú--á tsē hué-tshia ê sî tsuí-phè hiông-hiông phuà--khì, tú-hó ū lí-kheh sī i-sing, kín-mé tsáu-lâi tàu-sann-kāng, ka-tsài bú-á-kiánn lóng pîng-an bô tāi-tsì.",
  },
  {
    hanji:
      "聽講彼个田僑仔賣地有趁幾若億，就隨有咧走路的兄弟倚來共搧腹肚邊，敲寡所費通用。",
    tailo:
      "Thiann-kóng hit ê tshân-kiâu-á bē tē ū thàn kuí-nā ik, tō suî ū teh tsáu-lōo ê hiann-tī uá-lâi kā siàn-pak-tóo-pinn, khà kuá sóo-huì thang iōng.",
  },
  {
    hanji: "𪜶兩个袂輸犀牛照角，見面就觸，凡若看著的人攏幌頭。",
    tailo:
      "In nn̄g ê bē-su sai-gû-tsiò-kak, kìnn-bīn tō tak, huān-nā khuànn--tio̍h ê lâng lóng hàinn-thâu.",
  },
  {
    hanji:
      "彼對翁仔某出門毋但手牽手，目睭閣不時都咧犀牛照角，真正予人欣羨甲。",
    tailo:
      "Hit tuì ang-á-bóo tshut-mn̂g m̄-nā tshiú khan tshiú, ba̍k-tsiu koh put-sî to teh sai-gû-tsiò-kak, tsin-tsiànn hōo lâng him-siān kah.",
  },
  {
    hanji:
      "今仔日是𪜶阿媽敆爐的日子，毋過伊煞為著防疫愛隔離，無法度轉去拜拜。",
    tailo:
      "Kin-á-ji̍t sī in a-má kap-lôo ê ji̍t-tsí, m̄-koh i suah uī-tio̍h hông-i̍k ài keh-lī, bô-huat-tōo tńg-khì pài-pài.",
  },
  {
    hanji:
      "佇這條街仔做食食的店頭，生理攏真交易，莫怪老一輩的講同業結市才有錢通趁。",
    tailo:
      "Tī tsit tiâu ke-á tsò tsia̍h-si̍t ê tiàm-thâu, sing-lí lóng tsin ka-ia̍h, bo̍k-kuài lāu-tsi̍t-puè--ê kóng tông-gia̍p kiat-tshī tsiah ū tsînn thang thàn.",
  },
  {
    hanji: "講著偌𠢕拄偌𠢕的人，見真攏無影偌有才調。",
    tailo:
      "Kóng tio̍h guā gâu tú guā gâu ê lâng, kìnn-tsin lóng bô-iánn guā ū tsâi-tiāu.",
  },
  {
    hanji:
      "囡仔考牢大學，欲揀佗一科系來讀，序大人仙都毋通共掠跤掠手，無顧伊本人的意願。",
    tailo:
      "Gín-á khó-tiâu tāi-ha̍k, beh kíng tó tsi̍t kho-hē lâi tha̍k, sī-tuā-lâng sian to m̄-thang kā lia̍h-kha-lia̍h-tshiú, bô kòo i pún-lâng ê ì-guān.",
  },
  {
    hanji:
      "伊是拄入來咱公司的茈鳥仔，逐項猶無啥捌，勞煩逐家費神共伊照顧囉。",
    tailo:
      "I sī tú ji̍p-lâi lán kong-si ê tsínn-tsiáu-á, ta̍k hāng iáu bô siánn bat, lô-huân ta̍k-ke huì-sîn kā i tsiàu-kòo--looh.",
  },
  {
    hanji: "拄才出社會的茈鳥仔，著愛認真拍拚才有好前途。",
    tailo:
      "Tú-tsiah tshut-siā-huē ê tsínn-tsiáu-á, tio̍h-ài jīn-tsin phah-piànn tsiah ū hó tsiân-tôo.",
  },
  {
    hanji: "伊足驚注射，便若看著護士共射筒攑出來，就會驚甲咇咇掣。",
    tailo:
      "I tsiok kiann tsù-siā, piān-nā khuànn-tio̍h hōo-sū kā siā-tâng gia̍h--tshut-lâi, tō ē kiann kah phi̍h-phi̍h-tshuah.",
  },
  {
    hanji: "伊做代誌誠𠢕拖帆，定定佇交貨期限彼工才咧趕工。",
    tailo:
      "I tsò tāi-tsì tsiânn gâu thua-phâng, tiānn-tiānn tī kau-huè kî-hān hit kang tsiah teh kuánn-kang.",
  },
  {
    hanji: "買賣田地的字紙，雙方攏愛親身押名，才有準算。",
    tailo:
      "Bé-bē tshân-tē ê jī-tsuá, siang-hong lóng ài tshin-sin ah-miâ, tsiah ū tsún-sǹg.",
  },
  {
    hanji:
      "看命仙講阿義仔有居財命，毋過看伊啉酒、跋筊、𨑨迌逐項會，敢誠實守會牢？",
    tailo:
      "Khuànn-miā-sian kóng A-gī--á ū ki-tsâi miā, m̄-koh khuànn i lim tsiú, pua̍h-kiáu, tshit-thô ta̍k hāng ē, kám tsiânn-si̍t tsiú ē tiâu?",
  },
  {
    hanji:
      "警察佇彼間茶行搜著提煉毒品的原料佮家私，頭家咒死絕誓講伊是予人冤枉的。",
    tailo:
      "Kíng-tshat tī hit king tê-hâng tshiau-tio̍h thê-liān to̍k-phín ê guân-liāu kah ke-si, thâu-ke tsiù-sí-tse̍h-tsuā kóng i sī hōo lâng uan-óng--ê.",
  },
  {
    hanji:
      "選舉的時陣，電視、報紙共候選人皂烏漆白的事件不止仔濟，才予咱好歹人攏分袂清楚。",
    tailo:
      "Suán-kí ê sî-tsūn, tiān-sī, pò-tsuá kā hāu-suán-jîn tsō-oo-tshat-pe̍h ê sū-kiānn put-tsí-á tsē, tsiah hōo lán hó-pháinn lâng lóng hun bē tshing-tshó.",
  },
  {
    hanji:
      "做進出口生理的利頭袂䆀，毋過本錢誠粗，嘛有風險，欲投資著愛較斟酌咧。",
    tailo:
      "Tsò tsìn-tshut-kháu sing-lí ê lī-thâu bē-bái, m̄-koh pún-tsînn tsiânn tshoo, mā ū hong-hiám, beh tâu-tsu tio̍h-ài khah tsim-tsiok--leh.",
  },
  {
    hanji: "你開合喙攏咧講伊的話，伊到底有啥物利頭通予你食燒食冷咧？",
    tailo:
      "Lí khui-ha̍p-tshuì lóng teh kóng i ê uē, i tàu-té ū siánn-mih lī-thâu thang hōo lí tsia̍h-sio-tsia̍h-líng--leh?",
  },
  {
    hanji: "這擺車禍致使伊頭殼內有血角，愛手術共提出來。",
    tailo:
      "Tsit pái tshia-hō tì-sú i thâu-khak-lāi ū hueh-kak, ài tshiú-su̍t kā the̍h--tshut-lâi.",
  },
  {
    hanji: "醫生當咧手術，欲共窒佇患者血管的血角清出來。",
    tailo:
      "I-sing tng-teh tshiú-su̍t, beh kā that tī huān-tsiá hueh-kńg ê hueh-kak tshing--tshut-lâi.",
  },
  {
    hanji: "醫生當咧共患者開刀，欲共窒佇伊頭殼內的血凍提出來。",
    tailo:
      "I-sing tng-teh kā huān-tsiá khui-to, beh kā that tī i thâu-khak-lāi ê hueh-tàng the̍h--tshut-lâi.",
  },
  {
    hanji: "阿華佮阿明佇埤仔邊咧考水披，看啥人考較遠。",
    tailo:
      "A-huâ kah A-bîng tī pi-á-pinn teh khó-tsuí-phi, khuànn siánn-lâng khó khah hn̄g.",
  },
  {
    hanji:
      "伊手頭誠冗剩，猶算誠好額，毋過伊嘛袂提錢去考水披，四界匪類烏白開啊。",
    tailo:
      "I tshiú-thâu tsiânn liōng-siōng, iáu sǹg tsiânn hó-gia̍h, m̄-koh i mā bē the̍h tsînn khì khó-tsuí-phi, sì-kè huí-luī oo-pe̍h khai--ah.",
  },
  {
    hanji: "這陣當咧出大日虎，咱上好莫出去，較袂著痧。",
    tailo:
      "Tsit-tsūn tng-teh tshut tuā-ji̍t-hóo, lán siōng-hó mài tshut--khì, khah bē tio̍h-sua.",
  },
  {
    hanji: "小弟的面馬生做真四正，看著真古錐。",
    tailo:
      "Sió-tī ê bīn-bé senn-tsò tsin sì-tsiànn, khuànn tio̍h tsin kóo-tsui.",
  },
  {
    hanji: "阮佇阿媽遮耍，過晝才會轉去，你免攢阮的中晝頓矣。",
    tailo:
      "Guán tī A-má tsia sńg, kuè-tàu tsiah ē tńg--khì, lí bián tshuân guán ê tiong-tàu-tǹg--ah.",
  },
  {
    hanji: "囡仔人毋通佮人你兄我弟烏白牽。",
    tailo: "Gín-á-lâng m̄-thang kah lâng lí-hiann-guá-tī oo-pe̍h khan.",
  },
  {
    hanji:
      "愛有本等佮實力才有法度予眾人服你，若干焦硬喙死諍，是上無路用的步數。",
    tailo:
      "Ài ū pún-tíng kah si̍t-li̍k tsiah ū-huat-tōo hōo tsìng-lâng ho̍k--lí, nā kan-na ngē-tshuì sí-tsènn, sī siōng bô-lōo-īng ê pōo-sòo.",
  },
  {
    hanji:
      "見擺開會若聽著別人有無仝的意見，伊就誠硬喙，攏無欲讓步，真正無伊法。",
    tailo:
      "Kiàn-pái khui-huē nā thiann-tio̍h pa̍t-lâng ū bô kāng ê ì-kiàn, i tō tsiânn ngē-tshuì, lóng bô beh niū-pōo, tsin-tsiànn bô i huat.",
  },
  {
    hanji: "阮阿母買一塊新的冊桌仔，欲予我看冊佮寫宿題較利便。",
    tailo:
      "Guán a-bú bé tsi̍t tè sin ê tsheh-toh-á, beh hōo guá khuànn tsheh kah siá siok-tê khah lī-piān.",
  },
  {
    hanji: "阮老母足𠢕插車，閣較細的格仔位伊攏有才調共車停入去。",
    tailo:
      "Guán lāu-bú tsiok gâu tshah-tshia, koh-khah sè ê keh-á-uī i lóng ū tsâi-tiāu kā tshia thîng--ji̍p-khì.",
  },
  {
    hanji: "夯石碾是咱參加亞洲運動會捷著等的項目。",
    tailo:
      "Giâ-tsio̍h-lián sī lán tsham-ka A-tsiu Ūn-tōng-huē tsia̍p tio̍h-tíng ê hāng-bo̍k.",
  },
  {
    hanji: "有咧夯石碾的人手骨攏真粗勇。",
    tailo: "Ū teh giâ-tsio̍h-lián ê lâng tshiú-kut lóng tsin tshoo-ióng.",
  },
  {
    hanji: "同學選伊做班長，伊雖然半挨推，落尾猶是答應矣。",
    tailo:
      "Tông-ha̍k suán i tsò pan-tiúnn, i sui-jiân puànn-e-the, lo̍h-bué iáu-sī tah-ìng--ah.",
  },
  {
    hanji:
      "人講火燒心就敢若有石頭硩佇你的胸坎，真僫喘氣，著愛趕緊去予醫生看。",
    tailo:
      "Lâng kóng hué-sio-sim tō kánn-ná ū tsio̍h-thâu teh tī lí ê hing-khám, tsin oh tshuán-khuì, tio̍h-ài kuánn-kín khì hōo i-sing khuànn.",
  },
  {
    hanji: "人若咧火燒心，胸坎到頷頸攏會感覺燒燒，較食力的閣會疼。",
    tailo:
      "Lâng nā teh hué-sio-sim, hing-khám kàu ām-kún lóng ē kám-kak sio-sio, khah tsia̍h-la̍t--ê koh ē thiànn.",
  },
  {
    hanji: "伊咧做代誌粗跤重蹄，較幼路的工課毋通交代予伊。",
    tailo:
      "I teh tsò tāi-tsì tshoo-kha-tāng-tê, khah iù-lōo ê khang-khuè m̄-thang kau-tài hōo--i.",
  },
  {
    hanji: "伊昨昏無來上課，有請同學鬥寄聲，提醒伊後禮拜著交期尾作業。",
    tailo:
      "I tsa-hng bô lâi siōng-khò, ū tshiánn tông-ha̍k tàu kià-siann, thê-tshénn i āu lé-pài tio̍h kau kî-bué tsok-gia̍p.",
  },
  {
    hanji: "伊予人寄聲講，前數若無清，免數想欲閣佇遮做生理。",
    tailo:
      "I hōo lâng kià-siann kóng, tsîng-siàu nā bô tshing, bián siàu-siūnn beh koh tī tsia tsò-sing-lí.",
  },
  {
    hanji: "對方共我唱注，講這擺比賽𪜶一定會著冠軍。",
    tailo:
      "Tuì-hong kā guá tshiàng-tù, kóng tsit pái pí-sài in it-tīng ē tio̍h kuan-kun.",
  },
  {
    hanji: "四界攏咧窒車，做唯是用行的較緊。",
    tailo: "Sì-kè lóng teh that-tshia, tsò-bî-sī iōng kiânn--ê khah kín.",
  },
  {
    hanji: "咱這間店的生理愈來愈䆀，做唯是褪予別人去經營。",
    tailo:
      "Lán tsit king tiàm ê sing-lí jú lâi jú bái, tsò-bî-sī thǹg hōo pa̍t-lâng khì king-îng.",
  },
  {
    hanji: "我都照實講爾爾，欲哪會知影伊聽了煞起慼。",
    tailo:
      "Guá to tsiàu-si̍t kóng niā-niā, beh ná ē tsai-iánn i thiann-liáu suah khí-tsheh.",
  },
  {
    hanji: "伊本成真愛彈琴，煞因為𪜶老爸逼伊苦練，就按呢起慼，放棄音樂。",
    tailo:
      "I pún-tsiânn tsin ài tuânn-khîm, suah in-uī in lāu-pē pik i khóo-liān, tsiū-án-ne khí-tsheh, hòng-khì im-ga̍k.",
  },
  {
    hanji: "這分分仔工課爾爾，你毋通拖。",
    tailo: "Tse hun-hun-á khang-khuè niā-niā, lí m̄-thang thua.",
  },
  {
    hanji: "伊這擺比賽差分分仔就著等矣。",
    tailo: "I tsit pái pí-sài tsha hun-hun-á tō tio̍h-tíng--ah.",
  },
  {
    hanji: "有的代誌袂拖得，若傷過韌鼻，會做無工課。",
    tailo:
      "Ū ê tāi-tsì bē-thua--tit, nā siunn kuè jūn-phīnn, ē tsò bô khang-khuè.",
  },
  {
    hanji: "伊是阮公司起基的股東。",
    tailo: "I sī guán kong-si khí-ki ê kóo-tong.",
  },
  {
    hanji: "起基來到生份所在的時，事事項項攏無了解。",
    tailo:
      "Khí-ki lâi-kàu senn-hūn sóo-tsāi ê sî, sū-sū-hāng-hāng lóng bô liáu-kái.",
  },
  {
    hanji: "你銀行口座內底的錢額無夠，毋才水電錢無法度對內底扣。",
    tailo:
      "Lí gîn-hâng kháu-tsō lāi-té ê tsînn-gia̍h bô-kàu, m̄-tsiah tsuí-tiān-tsînn bô-huat-tōo tuì lāi-té khàu.",
  },
  {
    hanji: "刀仔割著的空喙若較細空，就較快堅血。",
    tailo:
      "To-á kuah--tio̍h ê khang-tshuì nā khah sè khang, tō khah khuài kian-hueh.",
  },
  {
    hanji: "伊定定激一个凊面予人看，人緣呔會好？",
    tailo:
      "I tiānn-tiānn kik tsi̍t ê tshìn-bīn hōo lâng khuànn, lâng-iân thài ē hó?",
  },
  {
    hanji: "大厝起的埕斗是以早曝粟的所在。",
    tailo: "Tuā-tshù-khí ê tiânn-táu sī í-tsá pha̍k tshik ê sóo-tsāi.",
  },
  {
    hanji: "古早時代，若是倒頭生，母仔囝定定會無性命。",
    tailo:
      "Kóo-tsá sî-tāi, nā-sī tò-thâu-senn, bú-á-kiánn tiānn-tiānn ē bô sènn-miā.",
  },
  {
    hanji: "這件代誌明明就是你毋著，你閣死毋坐認。",
    tailo:
      "Tsit kiānn tāi-tsì bîng-bîng tō sī lí m̄-tio̍h, lí koh sí-m̄-tshē-jīn.",
  },
  {
    hanji: "這領衫料身遮爾仔好，毋通烏白拍撋。",
    tailo:
      "Tsit niá sann liāu-sin tsiah-nī-á hó, m̄-thang oo-pe̍h phah-nuá.",
  },
  {
    hanji: "這領拍鐵仔褲較有拍撋。",
    tailo: "Tsit niá phah-thih-á-khòo khah ū phah-nuá.",
  },
  {
    hanji: "伊是一个有拍撋的人，毋驚任何的拖磨。",
    tailo: "I sī tsi̍t ê ū phah-nuá ê lâng, m̄ kiann jīm-hô ê thua-buâ.",
  },
  {
    hanji: "代誌會遮爾順序，攏是你𠢕推排。",
    tailo: "Tāi-tsì ē tsiah-nī sūn-sī, lóng sī lí gâu thui-pâi.",
  },
  {
    hanji: "這禮拜我欲去共許的送山，你敢是嘛欲去送伊？",
    tailo:
      "Tsit lé-pài guá beh khì kā Khóo--ê sàng-suann, lí kám-sī mā beh khì sàng--i?",
  },
  {
    hanji: "這片藥餅歹吞，會使共研做藥粉袂？",
    tailo:
      "Tsit phìnn io̍h-piánn pháinn thun, ē-sái kā gíng-tsò io̍h-hún--bē?",
  },
  {
    hanji: "熱人到矣，有真濟人紮泅水箍仔去海邊仔耍水。",
    tailo:
      "Jua̍h--lâng kàu--ah, ū tsin tsē lâng tsah siû-tsuí-khoo-á khì hái-pinn-á sńg tsuí.",
  },
  {
    hanji: "過晝無偌久，一陣西北雨捙桶倒，隨淹過較低的坑溝佮圳仔。",
    tailo:
      "Kuè tàu bô-guā-kú, tsi̍t tsūn sai-pak-hōo tshia-tháng-tò, suî im-kuè khah kē ê khenn-kau kah tsùn-á.",
  },
  {
    hanji: "豬砧賣豬肉，若無先明品，袂使掛骨賣予人客。",
    tailo:
      "Ti-tiam bē ti-bah, nā bô sing bîng-phín, bē-sái kuà-kut bē hōo lâng-kheh.",
  },
  {
    hanji: "心肝𤲍狹的人，生成較𠢕怨妒人，定定嘛講話掛骨。",
    tailo:
      "Sim-kuann kheh-e̍h ê lâng, senn-sîng khah gâu uàn-tòo--lâng, tiānn-tiānn mā kóng-uē kuà-kut.",
  },
  {
    hanji: "伊佮我是相黏蒂帶的好朋友，料袂到伊煞共我捽後炮。",
    tailo:
      "I kah guá sī sio-liâm-tì-tuà ê hó-pîng-iú, liāu-bē-kàu i suah kā guá sut-āu-phàu.",
  },
  {
    hanji: "代誌過去矣才咧捽後炮。",
    tailo: "Tāi-tsì kuè--khì--ah tsiah teh sut-āu-phàu.",
  },
  {
    hanji:
      "你都毋知咧，這棟遮挑俍的大樓，當初時欲動土進前是偌仔厚事路咧！",
    tailo:
      "Lí to m̄ tsai--leh, tsit tòng tsiah thiau-lāng ê tuā-lâu, tong-tshe-sî beh tāng-thóo tsìn-tsîng sī guā-á kāu-sū-lōo--leh!",
  },
  {
    hanji: "伊這站仔誠厚事路，定定咧走病院。",
    tailo:
      "I tsit-tsām-á tsiânn kāu-sū-lōo, tiānn-tiānn teh tsáu pēnn-īnn.",
  },
  {
    hanji: "啥物瘦啉顧肝？我看是顧山較緊啦！",
    tailo:
      "Siánn-mih sán-lim kòo kuann? Guá khuànn sī kòo-suann khah kín--lah!",
  },
  {
    hanji: "這盤芹菜柯柯，食著較粗絲。",
    tailo: "Tsit puânn khîn-tshài kua-kua, tsia̍h tio̍h khah tshoo-si.",
  },
  {
    hanji: "恬才的人才做有好頭路。",
    tailo: "Tiām-tsâi ê lâng tsiah tsò ū hó thâu-lōo.",
  },
  {
    hanji: "這个工程因為疫情的關係煞斷站去，毋知當時才會閣再振動。",
    tailo:
      "Tsit ê kang-tîng in-uī i̍k-tsîng ê kuan-hē suah tn̄g-tsām--khì, m̄ tsai tang-sî tsiah ē koh-tsài tín-tāng.",
  },
  {
    hanji: "藥仔若是有對路，一帖就會行氣。",
    tailo: "Io̍h-á nā-sī ū tuì-lōo, tsi̍t thiap tō ē kiânn-khì.",
  },
  {
    hanji: "大門對路，上適合開店做生理。",
    tailo: "Tuā-mn̂g tuì-lōo, siōng sik-ha̍p khui-tiàm tsò-sing-lí.",
  },
  {
    hanji: "若對路運貨，會並水路加較緊。",
    tailo: "Nā tuì-lōo ūn-huè, ē phīng tsuí-lōo ke khah kín.",
  },
  {
    hanji: "伊一下出世就予人放捒，佳哉有牧師佮牧師娘共伊晟持大漢。",
    tailo:
      "I tsi̍t-ē tshut-sì tō hōo lâng pàng-sak, ka-tsài ū bo̍k-su kah bo̍k-su-niû kā i tshiânn-tî tuā-hàn.",
  },
  {
    hanji: "久無運動，小可仔走一下就喘甲袂得轉氣。",
    tailo:
      "Kú bô ūn-tōng, sió-khuá-á tsáu--tsi̍t-ē tō tshuán kah bē-tit tńg-khuì.",
  },
  {
    hanji: "進前的生理真䆀，這馬總算轉氣矣。",
    tailo:
      "Tsìn-tsîng ê sing-lí tsin bái, tsit-má tsóng-sǹg tńg-khuì--ah.",
  },
  {
    hanji: "行較緊跤咧，若無會袂赴。",
    tailo: "Kiânn khah kín-kha--leh, nā-bô ē bē-hù.",
  },
  {
    hanji: "張議員服務選民緊跤袂拖沙，莫怪通人攏呵咾。",
    tailo:
      "Tiunn gī-uân ho̍k-bū suán-bîn kín-kha bē thua-sua, bo̍k-kuài thong-lâng lóng o-ló.",
  },
  {
    hanji: "阮兜彼箍圍仔有黜塗機咧挖路，一四界蓬蓬坱，厝內外專塗沙。",
    tailo:
      "Guán tau hit-khoo-uî-á ū thuh-thôo-ki teh óo lōo, tsi̍t-sì-kè phōng-phōng-ing, tshù lāi-guā tsuan thôo-sua.",
  },
  {
    hanji: "透風的時，佇海邊會當看著海湧搧佇礁石頂面的海波。",
    tailo:
      "Thàu-hong ê sî, tī hái-pinn ē-tàng khuànn-tio̍h hái-íng siàn tī ta-tsio̍h tíng-bīn ê hái-pho.",
  },
  {
    hanji: "你千萬毋通佮彼陣人群狗黨相交插。",
    tailo:
      "Lí tshian-bān m̄-thang kah hit tīn lâng-kûn-káu-tóng sio-kau-tshap.",
  },
  {
    hanji: "抐桮的喙若像飯匙，規身軀白蔥蔥足成鵝，所以閣共伊號做飯匙鵝。",
    tailo:
      "Lā-pue ê tshuì ná-tshiūnn pn̄g-sî, kui-sin-khu pe̍h-tshang-tshang tsiok sîng gô, sóo-í koh kā i hō-tsò pn̄g-sî-gô.",
  },
  {
    hanji: "伊今仔精神爾爾，閣目睭微微咧。",
    tailo: "I tann-á tsing-sîn niā-niā, koh ba̍k-tsiu bui-bui--leh.",
  },
  {
    hanji: "這是阮後的，這馬當咧做兵。",
    tailo: "Tse sī guán hāu--ê, tsit-má tng-teh tsò-ping.",
  },
  {
    hanji: "樹仔跤的樹葉仔無偌濟，用鋏仔鋏鋏咧就會用得矣。",
    tailo:
      "Tshiū-á-kha ê tshiū-hio̍h-á bô guā-tsē, iōng giap-á giap-giap--leh tō ē-īng--tit--ah.",
  },
  {
    hanji: "這馬起厝攏縛鐵仔，灌khōng-ku-lí，無人咧做大木矣。",
    tailo:
      "Tsit-má khí-tshù lóng pa̍k thih-á, kuàn khōng-ku-lí, bô lâng teh tsò tuā-ba̍k--ah.",
  },
  {
    hanji: "代誌都未曾做咧，就按呢相挨推，有影毋是款。",
    tailo:
      "Tāi-tsì to buē-tsîng tsò--leh, tsiū-án-ne sio-e-the, ū-iánn m̄-sī-khuán.",
  },
  {
    hanji: "代誌一下煏空，逐家就相挨推，按呢啥人欲負責？",
    tailo:
      "Tāi-tsì tsi̍t-ē piak-khang, ta̍k-ke tō sio-e-the, án-ne siánn-lâng beh hū-tsik?",
  },
  {
    hanji: "流感的病毒會綴瀾鬚穢人，毋才講感著的人愛掛喙罨。",
    tailo:
      "Liû-kám ê pēnn-to̍k ē tuè nuā-tshiu uè--lâng, m̄-tsiah kóng kám--tio̍h ê lâng ài kuà tshuì-am.",
  },
  {
    hanji:
      "伊出車禍傷甲真食力，醫生講流傷濟血著愛緊共伊注血，若無會無命去。",
    tailo:
      "I tshut tshia-hō siong kah tsin tsia̍h-la̍t, i-sing kóng lâu siunn tsē hueh tio̍h-ài kín kā i tsù-hueh, nā-bô ē bô-miā--khì.",
  },
  {
    hanji: "揣翁婿上要緊的是愛彼个查埔的好才閣骨力，外表無遐爾重要。",
    tailo:
      "Tshuē ang-sài siōng iàu-kín--ê sī ài hit ê tsa-poo--ê hó-tsâi koh kut-la̍t, guā-piáu bô hiah-nī tiōng-iàu.",
  },
  {
    hanji: "食魚食肉，嘛著菜佮，攏無換喙敢好？",
    tailo:
      "Tsia̍h hî tsia̍h bah, mā tio̍h tshài kah, lóng bô uānn-tshuì kám hó?",
  },
  {
    hanji: "你今都嫁予志明矣，這馬愛換喙叫𪜶兄嫂「大嫂」毋才著。",
    tailo:
      "Lí tann to kè hōo Tsì-bîng--ah, tsit-má ài uānn-tshuì kiò in hiann-só “tuā-só” m̄-tsiah tio̍h.",
  },
  {
    hanji:
      "規陣遐濟人欲去人兜食飯，才攢這點仔等路，正經是無沓無屑，卸咱家己的體面。",
    tailo:
      "Kui-tīn hiah tsē lâng beh khì lâng tau tsia̍h-pn̄g, tsiah tshuân tsit-tiám-á tán-lōo, tsìng-king sī bô-tap-bô-sap, sià lán ka-kī ê thé-biān.",
  },
  {
    hanji: "明其知這毋是穩趁的生理，閣敢投資遐濟錢想欲做董事長。",
    tailo:
      "Bîng-ki-tsai tse m̄ sī ún thàn ê sing-lí, koh kánn tâu-tsu hiah tsē tsînn siūnn-beh tsò táng-sū-tiúnn.",
  },
  {
    hanji: "你今仔日滿面春風，穿甲遮爾仔鑠奅，是欲去佗位風騷咧？",
    tailo:
      "Lí kin-á-ji̍t muá-bīn tshun-hong, tshīng kah tsiah-nī-á siak-phānn, sī beh khì tó-uī hong-so--leh?",
  },
  {
    hanji:
      "這台紅牌的重型機車是今年上好銷，閣有夠鑠奅的車型，足想欲騎看覓咧。",
    tailo:
      "Tsit tâi âng-pâi ê tāng-hîng ki-tshia sī kin-nî siōng hó-siau, koh ū-kàu siak-phānn ê tshia-hîng, tsiok siūnn-beh khiâ khuànn-māi--leh.",
  },
  {
    hanji:
      "一般的，文旦收成了後，愛閣囥一兩禮拜，聽候較消水咧就會加真好食。",
    tailo:
      "It-puann-ti̍k, bûn-tàn siu-sîng liáu-āu, ài koh khǹg--tsi̍t-nn̄g-lé-pài, thìng-hāu khah siau-tsuí--leh tō ē ke tsin hó-tsia̍h.",
  },
  {
    hanji: "老大人食麵的時愛食幼麵，按呢哺較有法。",
    tailo:
      "Lāu-tuā-lâng tsia̍h mī ê sî ài tsia̍h iù-mī, án-ne pōo khah ū-huat.",
  },
  {
    hanji: "外口天色暗摸摸，凡勢會落雨，你雨遮著紮咧。",
    tailo:
      "Guā-kháu thinn-sik àm-bong-bong, huān-sè ē lo̍h-hōo, lí hōo-jia tio̍h tsah--leh.",
  },
  {
    hanji: "二樓的雨遮害去矣，愛倩人來看覓咧。",
    tailo:
      "Jī lâu ê hōo-jia hāi--khì--ah, ài tshiànn lâng lâi khuànn-māi--leh.",
  },
  {
    hanji: "最近電腦繩傷久，目睭誠澀，愛點寡目藥水，予目睭較爽快淡薄仔。",
    tailo:
      "Tsuè-kīn tiān-náu tsîn siunn kú, ba̍k-tsiu tsiânn siap, ài tiám kuá ba̍k-io̍h-tsuí, hōo ba̍k-tsiu khah sóng-khuài--tām-po̍h-á.",
  },
  {
    hanji: "遠遠對遮看過去，山崁跤彼跡塌窩的所在，阮以早就是蹛佇遐。",
    tailo:
      "Hn̄g-hn̄g tuì tsia khuànn--kuè-khì, suann-khàm-kha hit-jiah lap-o ê sóo-tsāi, guán í-tsá tō sī tuà tī hia.",
  },
  {
    hanji:
      "彼條大路的打馬膠有足濟跡塌窩，駛車愛較慢咧，坐的人才袂趒甲艱苦罪過。",
    tailo:
      "Hit tiâu tuā-lōo ê tá-má-ka ū tsiok tsē jiah lap-o, sái-tshia ài khah bān--leh, tsē ê lâng tsiah bē tiô kah kan-khóo-tsē-kuà.",
  },
  {
    hanji:
      "伊咧做的生理孤行獨市，價數在伊喝，毋過若主顧客來交關，伊價數攏會放較軟。",
    tailo:
      "I teh tsò ê sing-lí koo-hâng-to̍k-tshī, kè-siàu tsāi i huah, m̄-koh nā tsú-kòo-kheh lâi kau-kuan, i kè-siàu lóng ē pàng khah nńg.",
  },
  {
    hanji: "稻仔開花、弄花頭尾才成禮拜，花閣細蕊，罕得有人會注意著。",
    tailo:
      "Tiū-á khui-hue, lāng-hue thâu-bué tsiah tsiânn lé-pài, hue koh sè luí, hán-tit ū lâng ē tsù-ì--tio̍h.",
  },
  {
    hanji: "伊出門的時若有化妝，轉到厝就會隨落妝。",
    tailo:
      "I tshut-mn̂g ê sî nā ū huà-tsong, tńg kàu tshù tō ē suî lo̍h-tsng.",
  },
  {
    hanji: "歌仔戲演員搬戲進前佮戲搬煞了後，攏愛用真濟時間畫妝佮落妝。",
    tailo:
      "Kua-á-hì ián-uân puann-hì tsìn-tsîng kah hì puann-suah liáu-āu, lóng ài īng tsin tsē sî-kan uē-tsng kah lo̍h-tsng.",
  },
  {
    hanji: "阿爸是一个足慷交的人，阮兜不時都有真濟人客來相揣。",
    tailo:
      "A-pah sī tsi̍t ê tsiok khóng-kau ê lâng, guán tau put-sî to ū tsin tsē lâng-kheh lâi sio-tshuē.",
  },
  {
    hanji:
      "我佇鐵工場學師仔的時陣，頭家娘定定揣空揣縫共我欹，實在真酷刑。",
    tailo:
      "Guá tī thih-kang-tiûnn o̍h sai-á ê sî-tsūn, thâu-ke-niû tiānn-tiānn tshuē-khang-tshuē-phāng kā guá khia, si̍t-tsāi tsin khok-hîng.",
  },
  {
    hanji: "咱佮一寡仔姑姨舅妗，三不五時著愛相揣，感情才會峇。",
    tailo:
      "Lán kah tsi̍t-kuá-á koo-î-kū-kīm, sam-put-gōo-sî tio̍h-ài sio-tshuē, kám-tsîng tsiah ē bā.",
  },
  {
    hanji:
      "這馬咱是咧講這件代誌，你莫去牽拖一寡往過姑姨舅妗遐的有的無的。",
    tailo:
      "Tsit-má lán sī teh kóng tsit kiānn tāi-tsì, lí mài khì khan-thua tsi̍t-kuá íng-kuè koo-î-kū-kīm hia-ê ū--ê-bô--ê.",
  },
  {
    hanji: "咱佮人鬥陣，若是講著話就刺夯夯，定定會去得失人。",
    tailo:
      "Lán kah lâng tàu-tīn, nā-sī kóng-tio̍h uē tō tshì-giâ-giâ, tiānn-tiānn ē khì tik-sit--lâng.",
  },
  {
    hanji: "𪜶兩个上算的人額無仝，愛閣重頭來算。",
    tailo:
      "In nn̄g ê tsiūnn-sǹg ê lâng-gia̍h bô kāng, ài koh tîng-thâu lâi sǹg.",
  },
  {
    hanji: "佇臺南揣會著誠濟上算的景點，咱做伙來去遐𨑨迌。",
    tailo:
      "Tī Tâi-lâm tshuē ē tio̍h tsiânn tsē tsiūnn-sǹg ê kíng-tiám, lán tsò-hué lâi-khì hia tshit-thô.",
  },
  {
    hanji: "這本出版無偌久的辭典當咧喝俗賣，現此時來買真上算。",
    tailo:
      "Tsit pún tshut-pán bô-guā-kú ê sû-tián tng-teh huah-sio̍k-bē, hiān-tshú-sî lâi bé tsin tsiūnn-sǹg.",
  },
  {
    hanji: "日鬚迵過樹葉仔縫掖佇塗跤。",
    tailo: "Ji̍t-tshiu thàng-kuè tshiū-hio̍h-á-phāng iā tī thôo-kha.",
  },
  {
    hanji: "這陣小可仔咧出日鬚矣，敢若咧欲變好天的款。",
    tailo:
      "Tsit-tsūn sió-khuá-á teh tshut ji̍t-tshiu--ah, kánn-ná teh-beh piàn hó-thinn ê khuán.",
  },
  {
    hanji: "今仔日天氣翕熱，日頭光真鑿目。",
    tailo: "Kin-á-ji̍t thinn-khì hip-jua̍h, ji̍t-thâu-kng tsin tsha̍k-ba̍k.",
  },
  {
    hanji: "細漢的時陣，我上愛聽阿母講囡仔古。",
    tailo: "Sè-hàn ê sî-tsūn, guá siōng ài thiann a-bú kóng gín-á-kóo.",
  },
  {
    hanji: "風颱天毋通出去，因為風雨大，較危險。",
    tailo:
      "Hong-thai-thinn m̄-thang tshut--khì, in-uī hong-hōo tuā, khah guî-hiám.",
  },
  {
    hanji: "風颱天會落大雨，對欠水較有幫贊。",
    tailo:
      "Hong-thai-thinn ē lo̍h tuā-hōo, tuì khiàm-tsuí khah ū pang-tsān.",
  },
  {
    hanji: "阿母的手做粗重，閣欠保養，皮膚變甲粗耙耙。",
    tailo:
      "A-bú ê tshiú tsò tshoo-tāng, koh khiàm pó-ióng, phuê-hu piàn kah tshoo-pê-pê.",
  },
  {
    hanji: "退休了後，會用得用退休金來維持後半世人的生活。",
    tailo:
      "Thè-hiu liáu-āu, ē-īng-tit iōng thè-hiu-kim lâi î-tshî āu-puànn-sì-lâng ê sing-ua̍h.",
  },
  {
    hanji: "伊趁退休進前蓄一棟樓仔厝稅人，按算後半世人攏靠收厝稅來食穿。",
    tailo:
      "I thàn thè-hiu tsìn-tsîng hak tsi̍t tòng lâu-á-tshù suè--lâng, àn-sǹg āu-puànn-sì-lâng lóng khò siu tshù-suè lâi tsia̍h-tshīng.",
  },
  {
    hanji: "這跤揹仔誠媠款，一下看就知影是下心神做的。",
    tailo:
      "Tsit kha phāinn-á tsiânn suí-khuán, tsi̍t-ē khuànn tō tsai-iánn sī hē-sim-sîn tsò--ê.",
  },
  {
    hanji: "𪜶彼个孫真可惡，竟然想欲騙老大人共棺柴本提出來予伊開。",
    tailo:
      "In hit ê sun tsin khó-ònn, kìng-jiân siūnn-beh phiàn lāu-tuā-lâng kā kuann-tshâ-pún the̍h tshut-lâi hōo i khai.",
  },
  {
    hanji: "修理電腦，伊是專門的，當然做有路來。",
    tailo: "Siu-lí tiān-náu, i sī tsuan-bûn--ê, tong-jiân tsò ū-lōo-lâi.",
  },
  {
    hanji: "規陣粟鳥仔佇草埔跳來跳去咧揣食。",
    tailo:
      "Kui-tīn tshik-tsiáu-á tī tsháu-poo thiàu lâi thiàu khì teh tshuē-tsia̍h.",
  },
  {
    hanji: "這个畫家三兩下手就共人像畫好矣。",
    tailo: "Tsit ê uē-ka sann-nn̄g-ē-tshiú tō kā jîn-siōng uē-hó--ah.",
  },
  {
    hanji: "清潔人員都免半點鐘久，三兩下手就共厝摒甲清氣tam-tam矣。",
    tailo:
      "Tshing-kiat jîn-uân to bián puànn tiám-tsing kú, sann-nn̄g-ē-tshiú tō kā tshù piànn kah tshing-khì-tam-tam--ah.",
  },
  {
    hanji: "伊食酒閣騎oo-tóo-bái，摔一下流血流滴。",
    tailo:
      "I tsia̍h tsiú koh khiâ oo-tóo-bái, siak tsi̍t-ē lâu-hueh-lâu-tih.",
  },
  {
    hanji: "若耳空吼閣會頭眩，愛去揣醫生檢查看是有啥物問題。",
    tailo:
      "Nā hīnn-khang-háu koh ē thâu-hîn, ài khì tshuē i-sing kiám-tsa khuànn sī ū siánn-mih būn-tê.",
  },
  {
    hanji: "因為伊枵過飢閣生狂食，所擺胃腸袂堪得，這陣咧喝腹肚疼矣。",
    tailo:
      "In-uī i iau-kuè-ki koh tshenn-kông tsia̍h, sóo-pái uī-tn̂g bē-kham--tit, tsit-tsūn teh huah pak-tóo thiànn--ah.",
  },
  {
    hanji: "伊生成懦懦，看伊做代誌予人活欲急死。",
    tailo:
      "I senn-sîng nōo-nōo, khuànn i tsò tāi-tsì hōo lâng ua̍h-beh kip--sí.",
  },
  {
    hanji: "伊個性懦懦，拄著僫解決的代誌，就勼轉去矣。",
    tailo:
      "I kò-sìng nōo-nōo, tú-tio̍h oh kái-kuat ê tāi-tsì, tō kiu--tńg-khì--ah.",
  },
  {
    hanji: "伊的肌膚驚曝日，一下曝就烏趖趖。",
    tailo: "I ê ki-hu kiann pha̍k-ji̍t, tsi̍t-ē pha̍k tō oo-sô-sô.",
  },
  {
    hanji: "伊本底瘦枝落葉，經過調養，這馬已經較有肌膚矣。",
    tailo:
      "I pún-té sán-ki-lo̍h-hio̍h, king-kuè tiâu-ióng, tsit-má í-king khah ū ki-hu--ah.",
  },
  {
    hanji: "有偌濟力，就做偌濟代誌，千萬毋通逞性。",
    tailo:
      "Ū guā-tsē la̍t, tō tsò guā-tsē tāi-tsì, tshian-bān m̄-thang thíng-sìng.",
  },
  {
    hanji: "你甲得著好處著愛知足矣，莫傷逞性，閣欲要求遐濟。",
    tailo:
      "Lí kah tit-tio̍h hó-tshù tio̍h-ài ti-tsiok--ah, mài siunn thíng-sìng, koh beh iau-kiû hiah tsē.",
  },
  {
    hanji: "伊頂半身穿白衫，下半身配烏裙，看著誠大範。",
    tailo:
      "I tíng-puànn-sin tshīng pe̍h sann, ē-puànn-sin phuè oo kûn, khuànn tio̍h tsiânn tuā-pān.",
  },
  {
    hanji: "物件用了愛囥轉去原位，才袂一四界散掖掖。",
    tailo:
      "Mi̍h-kiānn īng-liáu ài khǹg tńg-khì guân-uī, tsiah bē tsi̍t-sì-kè suànn-iā-iā.",
  },
  {
    hanji: "破病著愛去揣醫生，毋通想講食符仔水就會好。",
    tailo:
      "Phuà-pēnn tio̍h-ài khì tshuē i-sing, m̄-thang siūnn-kóng tsia̍h hû-á-tsuí tō ē hó.",
  },
  {
    hanji: "這氣生理歹做，這條街仔有幾若間店頭攏收起來矣。",
    tailo:
      "Tsit-khuì sing-lí pháinn tsò, tsit tiâu ke-á ū kuí-nā king tiàm-thâu lóng siu--khí-lâi--ah.",
  },
  {
    hanji: "海豬仔泅足歹學的，毋過咧泅的姿勢真媠。",
    tailo:
      "Hái-ti-á-siû tsiok pháinn o̍h--ê, m̄-koh teh siû ê tsu-sè tsin suí.",
  },
  {
    hanji: "寒人的霜風誠透，致使肉砧的肉落尾攏堅風去矣。",
    tailo:
      "Kuânn--lâng ê sng-hong tsiânn thàu, tì-sú bah-tiam ê bah lo̍h-bué lóng kian-hong--khì--ah.",
  },
  {
    hanji: "伊這擺鉸頭鬃順紲拍層，規个人看著閣較有氣質矣。",
    tailo:
      "I tsit pái ka thâu-tsang sūn-suà phah-tsân, kui-ê lâng khuànn tio̍h koh-khah ū khì-tsit--ah.",
  },
  {
    hanji: "起厝欲用的紅毛塗運到位矣，咱做伙來去共𪜶鬥起貨。",
    tailo:
      "Khí-tshù beh iōng ê âng-mn̂g-thôo ūn kàu-uī--ah, lán tsò-hué lâi-khì kā in tàu khí-huè.",
  },
  {
    hanji: "伊毋知拄著啥物代誌？規工按呢欲哭欲𥍉，看著實在足毋甘的。",
    tailo:
      "I m̄ tsai tú-tio̍h siánn-mih tāi-tsì? Kui-kang án-ne beh-khàu-beh-nih, khuànn tio̍h si̍t-tsāi tsiok m̄-kam--ê.",
  },
  {
    hanji: "伊一下入門無分無會就共我罵，實在袂堪得氣。",
    tailo:
      "I tsi̍t-ē ji̍p-mn̂g bô-hun-bô-huē tō kā guá mē, si̍t-tsāi bē-kham-tit khì.",
  },
  {
    hanji: "伊無分無會雄雄就離開，敢是發生啥物代誌矣？",
    tailo:
      "I bô-hun-bô-huē hiông-hiông tō lī-khui, kám-sī huat-sing siánn-mih tāi-tsì--ah?",
  },
  {
    hanji: "阿母當咧用伊新買來的平鼎仔炒菜。",
    tailo: "A-bú tng-teh īng i sin bé--lâi ê pênn-tiánn-á tshá tshài.",
  },
  {
    hanji: "今地球頂懸昆蟲的種類通講是百百種，咱攏捌袂了呢。",
    tailo:
      "Tann tē-kiû tíng-kuân khun-thiông ê tsióng-luī thang kóng sī pah-pah-tsióng, lán lóng bat bē liáu--neh.",
  },
  {
    hanji: "這馬鈴薯片烘甲酥酥閣芳芳，食著有夠紲喙。",
    tailo:
      "Tse má-lîng-tsî-phìnn hang kah soo-soo koh phang-phang, tsia̍h tio̍h ū-kàu suà-tshuì.",
  },
  {
    hanji: "這條新橋貫串兩个鄉鎮的交通要道，並往過加真利便。",
    tailo:
      "Tsit tiâu sin kiô kuàn-tshuàn nn̄g ê hiong-tìn ê kau-thong iàu-tō, phīng íng-kuè ke tsin lī-piān.",
  },
  {
    hanji: "這陣上衝，少年家仔上愛看的這齣新劇，自頭到尾演甲真貫串。",
    tailo:
      "Tsit-tsūn siōng tshìng, siàu-liân-ke-á siōng ài khuànn ê tsit tshut sin-kio̍k, tsū-thâu-kàu-bué ián kah tsin kuàn-tshuàn.",
  },
  {
    hanji: "張老師貫串畫水彩畫，佇學校內底無人佮伊會比得。",
    tailo:
      "Tiunn lāu-su kuàn-tshuàn uē tsuí-tshái-uē, tī ha̍k-hāu lāi-té bô lâng kah i ē-pí--tit.",
  },
  {
    hanji: "流行性感冒病毒的暗作期大約是一工到三工。",
    tailo:
      "Liû-hîng-sìng kám-mōo pēnn-to̍k ê àm-tsoh-kî tāi-iok sī tsi̍t kang kàu sann kang.",
  },
  {
    hanji: "社會愛分工，𠢕的人使喙，普通人出力，運作才會順序。",
    tailo:
      "Siā-huē ài hun-kang, gâu ê lâng sái-tshuì, phóo-thong lâng tshut-la̍t, ūn-tsok tsiah ē sūn-sī.",
  },
  {
    hanji:
      "這款細項代誌閣著愛經理出面來擔帶，今公司遐的幹部敢攏無才調解決是毋？",
    tailo:
      "Tsit khuán sè hāng tāi-tsì koh tio̍h-ài king-lí tshut-bīn lâi tam-tài, tann kong-si hia-ê kàn-pōo kám lóng bô tsâi-tiāu kái-kuat sī--m̄?",
  },
  {
    hanji: "伊講的彼件代誌傷過譀古，你莫聽伊佇遐咧敲虎𡳞。",
    tailo:
      "I kóng ê hit kiānn tāi-tsì siunn kuè hàm-kóo, lí mài thiann i tī hia teh khà-hóo-lān.",
  },
  {
    hanji: "你按呢噱噱叫會共人吵著。",
    tailo: "Lí án-ne kia̍k-kia̍k-kiò ē kā lâng tshá--tio̍h.",
  },
  {
    hanji: "彼隻蟮蟲仔佇壁頂吼甲噱噱叫。",
    tailo: "Hit tsiah siān-thâng-á tī piah-tíng háu kah kia̍k-kia̍k-kiò.",
  },
  {
    hanji: "這改風颱做大水，彼條溪仔的駁岸就按呢崩駁去。",
    tailo:
      "Tsit kái hong-thai tsò-tuā-tsuí, hit tiâu khe-á ê poh-huānn tsiū-án-ne pang-poh--khì.",
  },
  {
    hanji: "伊當咧無閒摘抄通過檢定的名單。",
    tailo: "I tng-teh bô-îng tiah-tshau thong-kuè kiám-tīng ê miâ-tuann.",
  },
  {
    hanji: "寒流一下來，生凊風鑽入骨縫，予人強欲接載袂牢。",
    tailo:
      "Hân-liû tsi̍t-ē lâi, tshenn-tshìn-hong tsǹg-ji̍p kut-phāng, hōo lâng kiōng-beh tsih-tsài bē tiâu.",
  },
  {
    hanji: "現代人講究健康佮環保，開始食清菜的人那來那濟。",
    tailo:
      "Hiān-tāi-lâng káng-kiù kiān-khong kah khuân-pó, khai-sí tsia̍h tshing-tshài ê lâng ná lâi ná tsē.",
  },
  {
    hanji:
      "頭殼若咧楞的時，共手門的穴道揤揤、掠掠咧，會當減輕無爽快的症頭。",
    tailo:
      "Thâu-khak nā teh gông ê sî, kā tshiú-mn̂g ê hia̍t-tō tshi̍h-tshi̍h, lia̍h-lia̍h--leh, ē-tàng kiám-khin bô sóng-khuài ê tsìng-thâu.",
  },
  {
    hanji: "拳頭師手門重，無細膩煞共這箍賊仔拍一下半小死。",
    tailo:
      "Kûn-thâu-sai tshiú-mn̂g tāng, bô-sè-jī suah kā tsit khoo tsha̍t-á phah tsi̍t-ē puànn-sió-sí.",
  },
  {
    hanji: "夯石碾會當練手骨的筋肉佮手門的力頭。",
    tailo:
      "Giâ-tsio̍h-lián ē-tàng liān tshiú-kut ê kin-bah kah tshiú-mn̂g ê la̍t-thâu.",
  },
  {
    hanji: "有一寡風景區對超過六十五歲的老大人，門票會當優待免支理。",
    tailo:
      "Ū tsi̍t-kuá hong-kíng-khu tuì tshiau-kuè la̍k-tsa̍p-gōo huè ê lāu-tuā-lâng, mn̂g-phiò ē-tàng iu-thāi bián tsi-lí.",
  },
  {
    hanji: "食老矣，厝裡的代誌攏放予少年的去支理矣。",
    tailo:
      "Tsia̍h-lāu--ah, tshù--lí ê tāi-tsì lóng pàng hōo siàu-liân--ê khì tsi-lí--ah.",
  },
  {
    hanji:
      "阿榮仔退休了後，逐工閒仙仙，共後生鬥顧店罔做體藝，順紲看頭看尾。",
    tailo:
      "A-îng--á thè-hiu liáu-āu, ta̍k-kang îng-sian-sian, kā hāu-senn tàu kòo tiàm bóng tsò-thé-gē, sūn-suà khuànn-thâu-khuànn-bué.",
  },
  {
    hanji:
      "見若欲選舉，畫山畫水的候選人濟甲窒倒街，咱目睭愛擘予金，毋通予𪜶騙去。",
    tailo:
      "Kiàn-nā beh suán-kí, uē-san-uē-suí ê hāu-suán-jîn tsē kah that-tó-ke, lán ba̍k-tsiu ài peh hōo kim, m̄-thang hōo in phiàn--khì.",
  },
  {
    hanji:
      "若講著選舉佮政治，伊就一支喙若機關銃，愈講愈有紲，真正無伊法。",
    tailo:
      "Nā kóng-tio̍h suán-kí kah tsìng-tī, i tō tsi̍t ki tshuì ná ki-kuan-tshìng, jú kóng jú ū-suà, tsin-tsiànn bô i huat.",
  },
  {
    hanji: "伊這款執硬的性癖若攏毋改，緊縒慢會食著鹼。",
    tailo:
      "I tsit khuán tsip-ngē ê sìng-phiah nā lóng m̄ kái, kín-tsua̍h-bān ē tsia̍h-tio̍h-kinn.",
  },
  {
    hanji: "爸母若有認真管教，囡仔一定會成款。",
    tailo: "Pē-bú nā ū jīn-tsin kuán-kà, gín-á it-tīng ē tsiânn-khuán.",
  },
  {
    hanji: "𪜶兜遐濟囡仔內底，干焦伊較上範。",
    tailo: "In tau hiah tsē gín-á lāi-té, kan-na i khah tsiūnn-pān.",
  },
  {
    hanji: "咱欲去大間公司允頭路，愛穿較成樣的西裝才會上範。",
    tailo:
      "Lán beh khì tuā king kong-si ín-thâu-lōo, ài tshīng khah tsiânn-iūnn ê se-tsong tsiah ē tsiūnn-pān.",
  },
  {
    hanji: "遐爾幼茈的囡仔，猶毋捌世事咧。",
    tailo: "Hiah-nī iù-tsínn ê gín-á, iáu m̄ bat sè-sū--leh.",
  },
  {
    hanji: "歹勢，我煮食的經驗猶真幼茈，望你多多牽教。",
    tailo:
      "Pháinn-sè, guá tsú-tsia̍h ê king-giām iáu tsin iù-tsínn, bāng lí to-to khan-kà.",
  },
  {
    hanji: "伊這改想欲出來選立法委員，我感覺猶傷幼茈，等後擺啦。",
    tailo:
      "I tsit kái siūnn-beh tshut-lâi suán li̍p-huat uí-uân, guá kám-kak iáu siunn iù-tsínn, tán āu-pái--lah.",
  },
  {
    hanji: "蹌跤雞佮覕相揣攏是較早的囡仔上愛的囡仔耍。",
    tailo:
      "Tshiáng-kha-ke kah bih-sio-tshuē lóng sī khah-tsá ê gín-á siōng ài ê gín-á-sńg.",
  },
  {
    hanji: "尪仔標、干樂佮樹奶攏是予人真數念的囡仔耍。",
    tailo:
      "Ang-á-phiau, kan-lo̍k kah tshiū-ling lóng sī hōo lâng tsin siàu-liām ê gín-á-sńg.",
  },
  {
    hanji: "彼个外國傳教士為著欲佇臺灣傳教，台語學甲端的閣滑溜。",
    tailo:
      "Hit ê guā-kok thuân-kàu-sū uī-tio̍h beh tī Tâi-uân thuân-kàu, Tâi-gí o̍h kah tuan-tiah koh ku̍t-liū.",
  },
  {
    hanji: "彼尾鰗鰡誠滑溜，若無掛手橐仔，免數想欲掠伊會著。",
    tailo:
      "Hit bué hôo-liu tsiânn ku̍t-liu, nā bô kuà tshiú-lok-á, bián siàu-siūnn beh lia̍h i ē tio̍h.",
  },
  {
    hanji:
      "王經理做人誠滑溜，攏袂得失人，彼是佇生理場練欲三十冬才有法度按呢。",
    tailo:
      "Ông king-lí tsò-lâng tsiânn ku̍t-liu, lóng bē tik-sit--lâng, he sī tī sing-lí-tiûnn liān beh sann-tsa̍p tang tsiah ū-huat-tōo án-ne.",
  },
  {
    hanji: "這隻蠘仔捏著冇心冇心，根本無肉。",
    tailo:
      "Tsit tsiah tshi̍h-á tēnn tio̍h phànn-sim-phànn-sim, kin-pún bô bah.",
  },
  {
    hanji: "原來這塊柴是冇心的，莫怪提著遮爾仔輕。",
    tailo:
      "Guân-lâi tsit tè tshâ sī phànn-sim--ê, bo̍k-kuài the̍h tio̍h tsiah-nī-á khin.",
  },
  {
    hanji: "自從老頭家過身了後，這个家族就漸漸衰頹矣。",
    tailo:
      "Tsū-tsiông lāu thâu-ke kuè-sin liáu-āu, tsit ê ka-tso̍k tō tsiām-tsiām sue-tuê--ah.",
  },
  {
    hanji: "我用米管量三管米囥落去電鍋煮。",
    tailo: "Guá īng bí-kńg niû sann kńg bí khǹg lo̍h-khì tiān-ko tsú.",
  },
  {
    hanji: "目一下𥍉，咱歲聲都六十捅矣。",
    tailo: "Ba̍k tsi̍t-ē nih, lán huè-siann to la̍k-tsa̍p-thóng--ah.",
  },
  {
    hanji: "灶跤的銅鼎仔便若用過，一定愛洗予清氣，才通收起來囥。",
    tailo:
      "Tsàu-kha ê tâng-tiánn-á piān-nā īng--kuè, it-tīng ài sé hōo tshing-khì, tsiah thang siu khí-lâi khǹg.",
  },
  {
    hanji:
      "咱敢毋是講欲隨人出寡來投資做生理，甲是攏無人欲出錢，規氣煞去莫閣講。",
    tailo:
      "Lán kám m̄ sī kóng beh suî-lâng tshut--kuá lâi tâu-tsu tsò-sing-lí, kah-sī lóng bô lâng beh tshut-tsînn, kui-khì suah--khì mài koh kóng.",
  },
  {
    hanji: "這件糾紛經過宗親序大對摵，兩爿攏有讓寡，代誌才煞去。",
    tailo:
      "Tsit kiānn kiù-hun king-kuè tsong-tshin sī-tuā tuì-tshi̍k, nn̄g-pîng lóng ū niū--kuá, tāi-tsì tsiah suah--khì.",
  },
  {
    hanji:
      "伊寢頭佇遐講大聲話，有夠臭屁，尾仔予人掠著伊講的毋是實在話才喙扁。",
    tailo:
      "I tshím-thâu tī hia kóng tuā-siann-uē, ū-kàu tshàu-phuì, bué-á hōo lâng lia̍h-tio̍h i kóng--ê m̄ sī si̍t-tsāi-uē tsiah tshuì-pínn.",
  },
  {
    hanji: "彼个外國人欲問路，那講那比手畫刀。",
    tailo: "Hit ê guā-kok-lâng beh mn̄g-lōo, ná kóng ná pí-tshiú-uē-to.",
  },
  {
    hanji: "銅會過電，塑膠袂過電。",
    tailo: "Tâng ē kuè-tiān, sok-ka bē kuè-tiān.",
  },
  {
    hanji: "吹風機無插插頭袂過電，當然嘛袂紡。",
    tailo:
      "Tshue-hong-ki bô tshah tshah-thâu bē kuè-tiān, tong-jiân mā bē pháng.",
  },
  {
    hanji: "你按呢暝日無歇咧作穡，對家己的健康哪會攏無咧要意？",
    tailo:
      "Lí án-ne mê-ji̍t bô hioh teh tsoh-sit, tuì ka-kī ê kiān-khong ná ē lóng bô teh iàu-ì?",
  },
  {
    hanji: "這是四冬才有一擺的比賽，伊毋才會真要意，逐工拚勢練習。",
    tailo:
      "Tse sī sì tang tsiah ū tsi̍t pái ê pí-sài, i m̄-tsiah ē tsin iàu-ì, ta̍k-kang piànn-sè liān-si̍p.",
  },
  {
    hanji:
      "伊畢業了後無去揣頭路，專心準備考試，翻轉年就高考及格，去做公務員矣。",
    tailo:
      "I pit-gia̍p liáu-āu bô khì tshuē thâu-lōo, tsuan-sim tsún-pī khó-tshì, huan-tńg-nî tō ko-khó ki̍p-keh, khì tsò kong-bū-uân--ah.",
  },
  {
    hanji: "三頓魚魚肉肉按呢咧食，對健康無一定真有幫贊。",
    tailo:
      "Sann tǹg hî-hî-bah-bah án-ne teh tsia̍h, tuì kiān-khong bô-it-tīng tsin ū pang-tsān.",
  },
  {
    hanji: "行路見天，莫怪會跋倒。",
    tailo: "Kiânn-lōo khiàn-thian, bo̍k-kuài ē pua̍h-tó.",
  },
  {
    hanji: "彼箍見天見天，要緊的代誌毋通交予伊做。",
    tailo:
      "Hit khoo khiàn-thian-khiàn-thian, iàu-kín ê tāi-tsì m̄-thang kau hōo i tsò.",
  },
  {
    hanji: "𪜶彼家口是大家族，仝祧仔內的攏蹛做伙。",
    tailo:
      "In hit ke-kháu sī tuā-ka-tso̍k, kāng thiāu-á-lāi--ê lóng tuà tsò-hué.",
  },
  {
    hanji: "這擺的物件，是按家口來分的。",
    tailo: "Tsit pái ê mi̍h-kiānn, sī àn ke-kháu lâi pun--ê.",
  },
  {
    hanji: "聽講這間廟服侍的尪婆真靈聖。",
    tailo: "Thiann-kóng tsit king biō ho̍k-sāi ê ang-pô tsin lîng-siànn.",
  },
  {
    hanji: "這層代誌你敢欲共尪婆問看覓？",
    tailo: "Tsit tsân tāi-tsì lí kám beh kā ang-pô mn̄g khuànn-māi?",
  },
  {
    hanji: "我聽你咧講仙古，無你提證據出來予我看。",
    tailo:
      "Guá thiann lí teh kóng-sian-kóo, bô lí the̍h tsìng-kì tshut-lâi hōo guá khuànn.",
  },
  {
    hanji: "欲解決問題，愛先揣著問題的總根頭。",
    tailo:
      "Beh kái-kuat būn-tê, ài sing tshuē-tio̍h būn-tê ê tsóng-kin-thâu.",
  },
  {
    hanji: "阮去𬦰山的時，有看著幾若隻長尾山娘。",
    tailo:
      "Guán khì peh-suann ê sî, ū khuànn-tio̍h kuí-nā tsiah tn̂g-bué-suann-niû.",
  },
  {
    hanji: "有疼風的人愛忌喙，腹內、蚶仔佮蚵仔較莫食咧。",
    tailo:
      "Ū thiànn-hong ê lâng ài khī-tshuì, pak-lāi, ham-á kah ô-á khah mài tsia̍h--leh.",
  },
  {
    hanji:
      "人到中年目睭的玻璃清有可能會退化，目睭前會有烏影。若有這種症頭，愛去揣醫生檢查。",
    tailo:
      "Lâng kàu tiong-liân ba̍k-tsiu ê po-lê-tshing ū khó-lîng ē thè-huà, ba̍k-tsiu-tsîng ē ū oo-iánn. Nā ū tsit tsióng tsìng-thâu, ài khì tshuē i-sing kiám-tsa.",
  },
  {
    hanji: "伊才二十捅歲，就規頭白頭毛，看著足老相的。",
    tailo:
      "I tsiah jī-tsa̍p-thóng huè, tō kui thâu pe̍h thâu-mn̂g, khuànn tio̍h tsiok lāu-siùnn--ê.",
  },
  {
    hanji: "𪜶爸母煩惱伊無某無猴，老相會老孤𣮈，無人通佮伊做伴。",
    tailo:
      "In pē-bú huân-ló i bô-bóo-bô-kâu, lāu-siùnn ē lāu-koo-khu̍t, bô lâng thang kah i tsò-phuānn.",
  },
  {
    hanji: "咱自少年就愛有久長的拍算，才會有老相。",
    tailo:
      "Lán tsū siàu-liân tō ài ū kú-tn̂g ê phah-sǹg, tsiah ē ū lāu-siùnn.",
  },
  {
    hanji: "海翁若欲喘氣，愛先浮頭予鼻空離開水面。",
    tailo:
      "Hái-ang nā beh tshuán-khuì, ài sing phû-thâu hōo phīnn-khang lī-khui tsuí-bīn.",
  },
  {
    hanji: "建築業若開始浮頭，其他的行業就會沓沓仔綴咧發展。",
    tailo:
      "Kiàn-tio̍k-gia̍p nā khai-sí phû-thâu, kî-thann ê hâng-gia̍p tō ē ta̍uh-ta̍uh-á tuè leh huat-tián.",
  },
  {
    hanji: "經過遐濟年注心練習，伊總算佇這改歌唱比賽浮頭矣！",
    tailo:
      "King-kuè hiah tsē nî tsù-sim liān-si̍p, i tsóng-sǹg tī tsit kái kua-tshiùnn pí-sài phû-thâu--ah!",
  },
  {
    hanji: "業務員講的話若中聽，業績一定會較好。",
    tailo:
      "Gia̍p-bū-uân kóng ê uē nā tìng-thiann, gia̍p-tsik it-tīng ē khah hó.",
  },
  {
    hanji: "受著疫情的影響，致使真濟活動緩期。",
    tailo:
      "Siū-tio̍h i̍k-tsîng ê íng-hióng, tì-sú tsin tsē ua̍h-tāng uān-kî.",
  },
  {
    hanji: "學校宣佈運動會欲緩期，講聽候運動埕整修好勢才來辦。",
    tailo:
      "Ha̍k-hāu suan-pòo ūn-tōng-huē beh uān-kî, kóng thìng-hāu ūn-tōng-tiânn tsíng-siu hó-sè tsiah lâi pān.",
  },
  {
    hanji: "伊今年若閣考袂牢大學，這聲無去做兵袂煞矣。",
    tailo:
      "I kin-nî nā koh khó bē tiâu tāi-ha̍k, tsit-siann bô khì tsò-ping bē suah--ah.",
  },
  {
    hanji: "阿媽逐擺去廟裡拜拜，攏會祈求厝裡大細漢平安順序。",
    tailo:
      "A-má ta̍k-pái khì biō--lí pài-pài, lóng ē kî-kiû tshù--lí tuā-sè-hàn pîng-an sūn-sī.",
  },
  {
    hanji: "做生理愛老實，大細漢攏袂使共人偏。",
    tailo:
      "Tsò-sing-lí ài láu-si̍t, tuā-sè-hàn lóng bē-sái kā lâng phinn.",
  },
  {
    hanji: "彼間厝真久無人蹛矣，厝頂早就爛朽朽矣！",
    tailo:
      "Hit king tshù tsin kú bô lâng tuà--ah, tshù-tíng tsá tō nuā-hiú-hiú--ah!",
  },
  {
    hanji: "這改算講是我毋著，請你寬諒。",
    tailo: "Tsit kái sǹg-kóng sī guá m̄-tio̍h, tshiánn lí khuan-liōng.",
  },
  {
    hanji:
      "細漢的時我鬥共阿爸借來的冊提去圖書館還，阿爸就會買一塊麭予我，算講是工錢。",
    tailo:
      "Sè-hàn ê sî guá tàu kā a-pah tsioh--lâi ê tsheh the̍h-khì tôo-su-kuán hîng, a-pah tō ē bé tsi̍t tè pháng hōo--guá, sǹg-kóng sī kang-tsînn.",
  },
  {
    hanji: "山路坎坎坷坷真歹行，你著勻聊仔行。",
    tailo:
      "Suann-lōo khám-khám-khia̍t-khia̍t tsin pháinn kiânn, lí tio̍h ûn-liâu-á kiânn.",
  },
  {
    hanji: "彼个乞食一身軀穿甲襤襤褸褸，予人看著真袂過心。",
    tailo:
      "Hit ê khit-tsia̍h tsi̍t-sin-khu tshīng kah lâm-lâm-luì-luì, hōo lâng khuànn tio̍h tsin bē kuè-sim.",
  },
  {
    hanji: "𪜶兜這站仔真正是襤襤褸褸，毋但生理失敗，工場閣予火燒去。",
    tailo:
      "In tau tsit-tsām-á tsin-tsiànn sī lâm-lâm-luì-luì, m̄-nā sing-lí sit-pāi, kang-tiûnn koh hōo hué sio--khì.",
  },
  {
    hanji: "阮舊厝的門口埕有種真濟佈田花。",
    tailo:
      "Guán kū-tshù ê mn̂g-kháu-tiânn ū tsìng tsin tsē pòo-tshân-hue.",
  },
  {
    hanji: "救護車沿路掠車佮爍紅火，誠緊就共病人送去病院的急診室。",
    tailo:
      "Kiù-hōo-tshia iân-lōo lia̍h-tshia kah sih âng-hué, tsiânn kín tō kā pēnn-lâng sàng-khì pēnn-īnn ê kip-tsín-sik.",
  },
  {
    hanji: "囡仔人咧講的囡仔話，聽著真古錐。",
    tailo: "Gín-á-lâng teh kóng ê gín-á-uē, thiann tio̍h tsin kóo-tsui.",
  },
  {
    hanji: "看伊都大人大種矣，哪會串講攏囡仔話咧？",
    tailo:
      "Khuànn i to tuā-lâng-tuā-tsíng--ah, ná ē tshuàn-kóng lóng gín-á-uē--leh?",
  },
  {
    hanji: "伊轉去到厝，才發見物件囥佇火車裡，煞袂記得提。",
    tailo:
      "I tńg-khì kàu tshù, tsiah huat-kiàn mi̍h-kiānn khǹg tī hué-tshia--lí, suah bē-kì-tit the̍h.",
  },
  {
    hanji: "微生物是一位荷蘭的博物學家，用伊家己製作的顯微鏡發見的。",
    tailo:
      "Bî-sing-bu̍t sī tsi̍t uī Hô-lân ê phok-bu̍t-ha̍k-ka, iōng i ka-kī tsè-tsok ê hián-bî-kiànn huat-kiàn--ê.",
  },
  {
    hanji: "伊生本就白肉底，毋管按怎曝，都曝袂烏。",
    tailo:
      "I senn-pún tō pe̍h-bah-té, m̄-kuán án-tsuánn pha̍k, to pha̍k bē oo.",
  },
  {
    hanji: "伊本成就烏肉底，毋是曝烏的。",
    tailo: "I pún-tsiânn tō oo-bah-té, m̄ sī pha̍k oo--ê.",
  },
  {
    hanji: "昨昏我轉去故鄉參加同窗會，拄著足久無聯絡的同窗的，足歡喜的！",
    tailo:
      "Tsa-hng guá tńg-khì kòo-hiong tsham-ka tông-tshong-huē, tú-tio̍h tsiok kú bô liân-lo̍k ê tông-tshong--ê, tsiok huann-hí--ê!",
  },
  {
    hanji: "這攤啉煞，咱敢欲閣紲攤？",
    tailo: "Tsit thuann lim-suah, lán kám beh koh suà-thuann?",
  },
  {
    hanji: "伊捌佇礦業公司做炭工咧挖金仔礦。",
    tailo:
      "I bat tī khòng-gia̍p kong-si tsò thuànn-kang teh óo kim-á-khòng.",
  },
  {
    hanji: "人講，「一人一家代，公媽隨人祀。」你哪著去管別人的代誌咧？",
    tailo:
      "Lâng kóng, “Tsi̍t lâng tsi̍t ke tāi, kong-má suî-lâng tshāi.” Lí ná-tio̍h khì kuán pa̍t-lâng ê tāi-tsì--leh?",
  },
  {
    hanji:
      "這个囡仔遮爾好禮，俗語講：「一人看出一家，新婦看出大家。」相信𪜶兜的家教必然嘛誠好。",
    tailo:
      "Tsit ê gín-á tsiah-nī hó-lé, sio̍k-gí kóng, “Tsi̍t lâng khuànn-tshut tsi̍t ke, sin-pū khuànn-tshut ta-ke.” Siong-sìn in tau ê ka-kàu pit-jiân mā tsiânn hó.",
  },
  {
    hanji:
      "賣雨幔的煩惱攏好天，無人欲共買；做麵的煩惱一直落雨，麵會曝袂焦，真正是「一人煩惱一樣，無人煩惱親像」。",
    tailo:
      "Bē hōo-mua--ê huân-ló lóng hó-thinn, bô lâng beh kā bé; tsò mī--ê huân-ló it-ti̍t lo̍h-hōo, mī ē pha̍k bē ta, tsin-tsiànn sī “tsi̍t lâng huân-ló tsi̍t iūnn, bô lâng huân-ló tshin-tshiūnn”.",
  },
  {
    hanji:
      "高速公路好駛車，毋過路標複雜，一下看無真，落南駛對上北去，就「一丈差九尺」，加了時間、閣加了油的。",
    tailo:
      "Ko-sok kong-lōo hó sái-tshia, m̄-koh lōo-piau ho̍k-tsa̍p, tsi̍t-ē khuànn bô tsin, lo̍h-lâm sái tuì tsiūnn-pak--khì, tō “tsi̍t tn̄g tsha káu tshioh”, ke liáu sî-kan, koh ke liáu iû--ê.",
  },
  {
    hanji:
      "菜塗菜金啦，過年前佮過年後，風颱前佮風颱後，青菜的價數是「一丈差九尺」。",
    tailo:
      "Tshài thôo tshài kim--lah, kuè-nî tsîng kah kuè-nî āu, hong-thai tsîng kah hong-thai āu, tshenn-tshài ê kè-siàu sī “tsi̍t tn̄g tsha káu tshioh”.",
  },
  {
    hanji:
      "俗語講：「一千賒毋值八百現。」甘願俗俗仔賣，提著現金，嘛無愛予人客欠數。",
    tailo:
      "Sio̍k-gí kóng, “Tsi̍t-tshing sia m̄-ta̍t peh-pah hiān.” Kam-guān sio̍k-sio̍k-á bē, the̍h-tio̍h hiān-kim, mā bô ài hōo lâng-kheh khiàm-siàu.",
  },
  {
    hanji:
      "賣物件予大單位數攏著先寄咧，月底才做一改清，是講「一千賒毋值八百現」，貨去錢無看見，總是較袂放心。",
    tailo:
      "Bē mi̍h-kiānn hōo tuā tan-uī siàu lóng tio̍h sing kià--leh, gue̍h-té tsiah tsò tsi̍t kái tshing, sī-kóng “tsi̍t-tshing sia m̄-ta̍t peh-pah hiān”, huè khì tsînn bô khuànn--kìnn, tsóng--sī khah bē hòng-sim.",
  },
  {
    hanji:
      "我去夜市仔開兩百箍買著這條椅仔，哪知坐無兩工就害去，袂輸擤鼻糊的，人講「一分錢，一分貨」，有影俗物就無好貨。",
    tailo:
      "Guá khì iā-tshī-á khai nn̄g-pah khoo bé-tio̍h tsit liâu í-á, ná tsai tsē bô nn̄g kang tō hāi--khì, bē-su tshìng-phīnn kôo--ê, lâng kóng “tsi̍t hun tsînn, tsi̍t hun huè”, ū-iánn sio̍k-mi̍h tō bô hó huè.",
  },
  {
    hanji:
      "伊做人真凍霜，「一个錢拍二十四个結」，攏干焦欲共人偏，毋捌講欲請人。",
    tailo:
      "I tsò-lâng tsin tàng-sng, “tsi̍t ê tsînn phah jī-tsa̍p-sì ê kat”, lóng kan-na beh kā lâng phinn, m̄ bat kóng beh tshiánn--lâng.",
  },
  {
    hanji:
      "金木伯的孤囝去日本留學，閣提著博士學位，這款的子弟真正是「一斗較贏九石」，通庄的人攏呵咾甲會觸舌！",
    tailo:
      "Kim-bo̍k peh ê koo-kiánn khì Ji̍t-pún liû-ha̍k, koh the̍h-tio̍h phok-sū ha̍k-uī, tsit khuán ê tsú-tē tsin-tsiànn sī “tsi̍t táu khah iânn káu tsio̍h”, thong tsng ê lâng lóng o-ló kah ē tak-tsi̍h!",
  },
  {
    hanji:
      "你這个囡仔「一日走拋拋，一暝點燈膋」，規工顧咧𨑨迌，暗時才來那寫宿題那盹龜，實在誠害。",
    tailo:
      "Lí tsit ê gín-á “tsi̍t ji̍t tsáu-pha-pha, tsi̍t mê tiám ting-lâ”, kui-kang kòo leh tshit-thô, àm-sî tsiah lâi ná siá siok-tê ná tuh-ku, si̍t-tsāi tsiânn hāi.",
  },
  {
    hanji:
      "伊講欲認真準備考試，這馬呔會閣「一日討海，三日曝網」，激放放咧。",
    tailo:
      "I kóng beh jīn-tsin tsún-pī khó-tshì, tsit-má thài ē koh “tsi̍t ji̍t thó-hái, sann ji̍t pha̍k bāng”, kik hòng-hòng--leh.",
  },
  {
    hanji:
      "人講：「一日徙栽，三日徛黃。」若不時咧換頭路，想欲高升就僫囉。",
    tailo:
      "Lâng kóng, “Tsi̍t ji̍t suá-tsai, sann ji̍t khiā-n̂g.” Nā put-sî teh uānn thâu-lōo, siūnn-beh ko-sing tō oh--looh.",
  },
  {
    hanji:
      "一寡爸母對𪜶囝兒的教育傷過關心，要求欲換班級，抑是調去別間學校，毋過「一日徙栽，三日徛黃」，囡仔人曷會堪得按呢搬徙，嘛無法度注心來讀冊。",
    tailo:
      "Tsi̍t-kuá pē-bú tuì in kiánn-jî ê kàu-io̍k siunn kuè kuan-sim, iau-kiû beh uānn pan-kip, ia̍h-sī tiàu-khì pa̍t king ha̍k-hāu, m̄-koh “tsi̍t ji̍t suá-tsai, sann ji̍t khiā-n̂g”, gín-á-lâng a̍h ē-kham-tit án-ne puann-suá, mā bô-huat-tōo tsù-sim lâi tha̍k-tsheh.",
  },
  {
    hanji:
      "咱講話氣口愛溫和，話語愛撙節，毋通像俗語講的，「一句話三角六尖」，才袂去傷著人。",
    tailo:
      "Lán kóng-uē khuì-kháu ài un-hô, uē-gí ài tsún-tsat, m̄-thang tshiūnn sio̍k-gí kóng--ê, “tsi̍t kù uē sann-kak-la̍k-tsiam”, tsiah bē khì siong-tio̍h lâng.",
  },
  {
    hanji:
      "有的人「一句話三角六尖」，出喙就去傷著人，毋過有的人就加真有外才，講著話在伊挲圓捏扁、抹壁雙面光。",
    tailo:
      "Ū ê lâng “tsi̍t kù uē sann-kak-la̍k-tsiam”, tshut-tshuì tō khì siong-tio̍h lâng, m̄-koh ū ê lâng tō ke tsin ū guā-tsâi, kóng-tio̍h uē tsāi i so-înn-tēnn-pínn, buah-piah siang-bīn kng.",
  },
  {
    hanji:
      "少年人愛有定性，毋通「一年換二十四个頭家」，定定咧換頭路，按呢欲哪會有出脫？",
    tailo:
      "Siàu-liân-lâng ài ū tīng-sìng, m̄-thang “tsi̍t nî uānn jī-tsa̍p-sì ê thâu-ke”, tiānn-tiānn teh uānn thâu-lōo, án-ne beh ná ē ū tshut-thuat?",
  },
  {
    hanji:
      "𪜶序大人不時苦勸伊食食、睏眠愛正常，伊煞「一耳空入，一耳空出」，今身體出問題矣，欲怪啥人！",
    tailo:
      "In sī-tuā-lâng put-sî khóo-khǹg i tsia̍h-si̍t, khùn-bîn ài tsìng-siông, i suah “tsi̍t hīnn-khang ji̍p, tsi̍t hīnn-khang tshut”, tann sin-thé tshut būn-tê--ah, beh kuài siánn-lâng!",
  },
  {
    hanji:
      "代誌欲做進前，愛先想予清楚，計畫予好勢，「一步棋，一步著」，跤踏實地照步來，按呢就較會順序、較會成功。",
    tailo:
      "Tāi-tsì beh tsò tsìn-tsîng, ài sing siūnn hōo tshing-tshó, kè-uē hōo hó-sè, “tsi̍t pōo kî, tsi̍t pōo tio̍h”, kha-ta̍h-si̍t-tē tsiàu-pōo-lâi, án-ne tō khah ē sūn-sī, khah ē sîng-kong.",
  },
  {
    hanji:
      "秀玲咧做代誌真謹慎，事事項項攏準備甲誠周至，就像人咧講的：「一步棋，一步著。」代誌交代伊去發落，予人足放心。",
    tailo:
      "Siù-lîng teh tsò tāi-tsì tsin kín-sīn, sū-sū-hāng-hāng lóng tsún-pī kah tsiânn tsiu-tsì, tō tshiūnn lâng teh kóng--ê, “Tsi̍t pōo kî, tsi̍t pōo tio̍h.” Tāi-tsì kau-tài i khì hua̍t-lo̍h, hōo lâng tsiok hòng-sim.",
  },
  {
    hanji:
      "毋免怨嘆家己歹命，俗語講：「一枝草，一點露。」咱若肯拍拚，就免驚袂當出頭天。",
    tailo:
      "M̄-bián uàn-thàn ka-kī pháinn-miā, sio̍k-gí kóng, “Tsi̍t ki tsháu, tsi̍t tiám lōo.” Lán nā khíng phah-piànn, tō bián kiann bē-tàng tshut-thâu-thinn.",
  },
  {
    hanji:
      "你莫嫌伊無半撇，後擺無出脫，人咧講：「一枝草，一點露。」以後的代誌啥人會知？",
    tailo:
      "Lí mài hiâm i bô-puànn-phiat, āu-pái bô tshut-thuat, lâng teh kóng, “Tsi̍t ki tsháu, tsi̍t tiám lōo.” Í-āu ê tāi-tsì siánn-lâng ē tsai?",
  },
  {
    hanji:
      "伊佇阮公司頂司誠滿意，下跤手人閣呵咾甲會觸舌，這款「一面抹壁雙面光」的工夫，一般人是無才調按呢。",
    tailo:
      "I tī guán kong-si tíng-si tsiânn muá-ì, ē-kha-tshiú-lâng koh o-ló kah ē tak-tsi̍h, tsit khuán “tsi̍t bīn buah-piah siang bīn kng” ê kang-hu, it-puann lâng sī bô tsâi-tiāu án-ne.",
  },
  {
    hanji:
      "公司派我去外地拜訪客戶，一逝路遐遠，規氣「一兼二顧，摸蜊仔兼洗褲」，客戶拜訪煞，順紲來去揣真久無見面的朋友。",
    tailo:
      "Kong-si phài guá khì guā-tē pài-hóng kheh-hōo, tsi̍t tsuā lōo hiah hn̄g, kui-khì “it kiam jī kòo, bong lâ-á kiam sé khòo”, kheh-hōo pài-hóng suah, sūn-suà lâi-khì tshuē tsin kú bô kìnn-bīn ê pîng-iú.",
  },
  {
    hanji:
      "這改賣厝，毋但愛納真重的稅金，閣愛付中人錢，有影是「一隻牛剝雙領皮」，較算都算袂和。",
    tailo:
      "Tsit kái bē tshù, m̄-nā ài la̍p tsin tāng ê suè-kim, koh ài hù tiong-lâng tsînn, ū-iánn sī “tsi̍t tsiah gû pak siang niá phuê”, khah sǹg to sǹg-bē-hô.",
  },
  {
    hanji:
      "囡仔才叫一聲「阿爸」爾爾，老爸就「一隻蝨母嗙甲水牛大」，講𪜶囝啥物話都會曉講，這敢有影是真的？",
    tailo:
      "Gín-á tsiah kiò tsi̍t siann “a-pah” niā-niā, lāu-pē tō “tsi̍t tsiah sat-bó pòng kah tsuí-gû tuā”, kóng in kiánn siánn-mih uē to ē-hiáu kóng, tse kám ū-iánn sī tsin--ê?",
  },
  {
    hanji:
      "古早糧食缺欠的時，煮糜是幾粒米、一寡番薯簽乾摻一大坩水，「一粒田螺煮九碗公湯」，欲罟一粒飯粒仔就親像海底摸針，真僫啦！",
    tailo:
      "Kóo-tsá niû-si̍t khueh-khiàm ê sî, tsú muê sī kuí lia̍p bí, tsi̍t-kuá han-tsî-tshiam-kuann tsham tsi̍t tuā khann tsuí, “tsi̍t lia̍p tshân-lê tsú káu uánn-kong thng”, beh koo tsi̍t lia̍p pn̄g-lia̍p-á tō tshin-tshiūnn hái-té bong tsiam, tsin oh--lah!",
  },
  {
    hanji:
      "三兩句就講會清楚的話，煞寫甲規大篇，攏專無路用話，真正是「一粒田螺煮九碗公湯」。",
    tailo:
      "Sann nn̄g kù tō kóng ē tshing-tshó ê uē, suah siá kah kui tuā phinn, lóng tsuan bô-lōo-īng uē, tsin-tsiànn sī “tsi̍t lia̍p tshân-lê tsú káu uánn-kong thng”.",
  },
  {
    hanji:
      "俗語講：「一粒米，百粒汗。」咱這馬有通快活食，攏是作穡人拚出來的，仙都毋通共討債去。",
    tailo:
      "Sio̍k-gí kóng, “Tsi̍t lia̍p bí, pah lia̍p kuānn.” Lán tsit-má ū thang khuìnn-ua̍h tsia̍h, lóng sī tsoh-sit-lâng piànn--tshut-lâi--ê, sian to m̄-thang kā thó-tsè--khì.",
  },
  {
    hanji:
      "伊𠢕講話，嘛興講話，總是有時仔講的話都無影無跡，罔喋的爾爾，真正是一箍「一喙掛雙舌」的人。",
    tailo:
      "I gâu kóng-uē, mā hìng kóng-uē, tsóng--sī ū-sî-á kóng ê uē to bô-iánn-bô-tsiah, bóng thi̍h--ê niā-niā, tsin-tsiànn sī tsi̍t khoo “tsi̍t tshuì kuà siang tsi̍h” ê lâng.",
  },
  {
    hanji:
      "古早人講：「一鄉一俗。」咱愛尊重人別跡的風俗，莫堅持講著愛按怎才是著的。",
    tailo:
      "Kóo-tsá-lâng kóng, “Tsi̍t hiong tsi̍t sio̍k.” Lán ài tsun-tiōng lâng pa̍t-jiah ê hong-sio̍k, mài kian-tshî kóng tio̍h-ài án-tsuánn tsiah-sī tio̍h--ê.",
  },
  {
    hanji:
      "古早人上慼人做賊，人講「一遍賊，百世賊」，偷提人的物件是會害你的家族仔面皮卸落地呢。",
    tailo:
      "Kóo-tsá-lâng siōng tsheh lâng tsò tsha̍t, lâng kóng “tsi̍t piàn tsha̍t, pah sì tsha̍t”, thau-the̍h lâng ê mi̍h-kiānn sī ē hāi lí ê ka-tso̍k-á bīn-phuê sià lo̍h tē--neh.",
  },
  {
    hanji:
      "咱人做任何代誌，愛跤踏實地，袂使干焦取一支喙，若見擺攏「一暝全頭路，天光無半步」，無一項代誌做會成。",
    tailo:
      "Lán-lâng tsò jīm-hô tāi-tsì, ài kha ta̍h si̍t-tē, bē-sái kan-na tshú tsi̍t ki tshuì, nā kiàn-pái lóng “tsi̍t mê tsuân thâu-lōo, thinn-kng bô-puànn-pōo”, bô tsi̍t hāng tāi-tsì tsò ē sîng.",
  },
  {
    hanji:
      "平平是人，有的人恬恬做好代；有的人想空想縫欲害人，有影是「一樣米飼百樣人」，啥物款人都有。",
    tailo:
      "Pênn-pênn sī lâng, ū ê lâng tiām-tiām tsò hó-tāi; ū ê lâng siūnn-khang-siūnn-phāng beh hāi--lâng, ū-iánn sī “tsi̍t iūnn bí tshī pah-iūnn lâng”, siánn-mih khuán lâng to ū.",
  },
  {
    hanji:
      "阿義是好額公子，人範閣袂䆀，有合查某人揀翁「一錢，二緣，三媠，四少年」的要件，毋才有足濟媒人婆攏欲來共伊做親情。",
    tailo:
      "A-gī sī hó-gia̍h kong-tsú, lâng-pān koh bē-bái, ū ha̍h tsa-bóo-lâng kíng ang “it tshiân, jī iân, sann suí, sì siàu-liân” ê iàu-kiānn, m̄-tsiah ū tsiok tsē muê-lâng-pô lóng beh lâi kā i tsò-tshin-tsiânn.",
  },
  {
    hanji:
      "伊無祖公仔屎通致蔭，攏信靠伊家己的才情，都未三十就有成億的家伙，人閣生做躼跤斯文，就是人講的「一錢，二緣，三媠，四少年」，莫怪遐的企業家攏相爭欲共查某囝做予伊。",
    tailo:
      "I bô tsóo-kong-á-sái thang tì-ìm, lóng sìn-khò i ka-kī ê tsâi-tsîng, to buē sann-tsa̍p tō ū tsiânn ik ê ke-hué, lâng koh senn-tsò lò-kha su-bûn, tō sī lâng kóng ê “it tshiân, jī iân, sann suí, sì siàu-liân”, bo̍k-kuài hia-ê khì-gia̍p-ka lóng sio-tsenn beh kā tsa-bóo-kiánn tsò hōo--i.",
  },
  {
    hanji:
      "有人出世就榮華富貴，嘛有人艱難困苦，毋才講「一个人一款命」。毋過就算咱袂當改變咱的出身，只要咱肯拍拚，猶是會當改變咱未來的人生。",
    tailo:
      "Ū lâng tshut-sì tō îng-huâ-hù-kuì, mā ū lâng kan-lân khùn-khóo, m̄-tsiah kóng “tsi̍t ê lâng tsi̍t khuán miā”. M̄-koh tō-sǹg lán bē-tàng kái-piàn lán ê tshut-sin, tsí-iàu lán khíng phah-piànn, iáu-sī ē-tàng kái-piàn lán bī-lâi ê jîn-sing.",
  },
  {
    hanji:
      "自從𪜶翁仔某生一个囡仔了後，原底厝裡真恬靜，今不時都鬧熱滾滾，真正是「一个囡仔較鬧熱三个大人」。",
    tailo:
      "Tsū-tsiông in ang-á-bóo senn tsi̍t ê gín-á liáu-āu, guân-té tshù--lí tsin tiām-tsīng, tann put-sî to lāu-jia̍t-kún-kún, tsin-tsiànn sī “tsi̍t ê gín-á khah lāu-jia̍t sann ê tuā-lâng”.",
  },
  {
    hanji:
      "古早人講：「一个某較好三个天公祖。」你看恁阿玉仔遐爾拍拚拑家、骨力作穡、顧翁閣疼囝，這是你頂世人有燒好香，才有這款福氣，所以你愛知恩寶惜。",
    tailo:
      "Kóo-tsá-lâng kóng, “Tsi̍t ê bóo khah hó sann ê Thinn-kong-tsóo.” Lí khuànn lín A-gio̍k-á hiah-nī phah-piànn khînn-ke, kut-la̍t tsoh-sit, kòo ang koh thiànn kiánn, tse sī lí tíng-sì-lâng ū sio hó hiunn, tsiah ū tsit khuán hok-khì, sóo-í lí ài ti-un pó-sioh.",
  },
  {
    hanji:
      "時機無好，逐家攏驚會去予人刣頭，毋敢請假，總是嘛有人「七月半鴨仔，毋知死活」，閣敢請假請半個月去國外𨑨迌。",
    tailo:
      "Sî-ki bô hó, ta̍k-ke lóng kiann ē khì hōo lâng thâi-thâu, m̄ kánn tshíng-ká, tsóng--sī mā ū lâng “tshit-gue̍h-puànn ah-á, m̄ tsai sí-ua̍h”, koh kánn tshíng-ká tshíng puànn kò gue̍h khì kok-guā tshit-thô.",
  },
  {
    hanji:
      "紅嬰仔咧大，有的大著較快，有的較袂大，總是平均扯差不多就是俗語講的「七坐八爬九發牙」。",
    tailo:
      "Âng-enn-á teh tuā, ū ê tuā tio̍h khah khuài, ū ê khah bē tuā, tsóng--sī pîng-kin-tshé tsha-put-to tō sī sio̍k-gí kóng--ê “tshit tsē peh pê káu huat-gê”.",
  },
  {
    hanji:
      "𪜶兩兄弟仔一下聽著導覽員講欲去看天狗食月矣，就「七仔較興八仔」，相爭喝欲去。",
    tailo:
      "In nn̄g hiann-tī-á tsi̍t-ē thiann-tio̍h tō-lám-uân kóng beh khì khuànn thian-káu-tsia̍h-gue̍h--ah, tō “tshit--á khah hìng peh--á”, sio-tsenn huah beh khì.",
  },
  {
    hanji:
      "俗語講：「九月颱，無人知。」通常咱人九月以後較少有風颱，毋過這時風颱若來，定定會造成大災害。",
    tailo:
      "Sio̍k-gí kóng, “Káu-gue̍h thai, bô lâng tsai.” Thong-siông lán-lâng káu--gue̍h í-āu khah tsió ū hong-thai, m̄-koh tsit-sî hong-thai nā lâi, tiānn-tiānn ē tsō-sîng tuā tsai-hāi.",
  },
  {
    hanji:
      "世事難料，定定有料想袂到的代誌來發生，就親像「九月颱，無人知」仝款，予咱袂按算得。",
    tailo:
      "Sè-sū lân liāu, tiānn-tiānn ū liāu-sióng-bē-kàu ê tāi-tsì lâi huat-sing, tō tshin-tshiūnn “káu-gue̍h thai, bô lâng tsai” kāng-khuán, hōo lán bē-àn-sǹg--tit.",
  },
  {
    hanji:
      "賣毒品的人，干焦想欲一本萬利，完全無顧慮唌人食毒會危害人的健康，真正是「了錢生理無人做，刣頭生理有人做」！",
    tailo:
      "Bē to̍k-phín ê lâng, kan-na siūnn-beh it pún bān lī, uân-tsuân bô kòo-lī siânn lâng tsia̍h-to̍k ē guî-hāi lâng ê kiān-khong, tsin-tsiànn sī “liáu-tsînn sing-lí bô lâng tsò, thâi-thâu sing-lí ū lâng tsò”!",
  },
  {
    hanji:
      "人講：「人心肝，牛腹肚。」有人買彩券著頭獎猶嫌無夠，共錢閣再漚落去，免兩冬錢就吐了了矣。",
    tailo:
      "Lâng kóng, “Lâng sim-kuann, gû pak-tóo.” Ū lâng bé tshái-kuàn tio̍h thâu-tsióng iáu hiâm bô-kàu, kā tsînn koh-tsài au--lo̍h-khì, bián nn̄g tang tsînn tō thòo-liáu-liáu--ah.",
  },
  {
    hanji: "仝祧仔內的人攏知影「人未到，聲先到」的，一定是九嬸婆仔。",
    tailo:
      "Kāng thiāu-á-lāi ê lâng lóng tsai-iánn “lâng buē kàu, siann sing kàu”--ê, it-tīng sī káu-tsím-pô--á.",
  },
  {
    hanji:
      "聲頭遐大，人閣插插插，會使講是「人未到，聲先到」，可見來者非同小可。",
    tailo:
      "Siann-thâu hiah tuā, lâng koh tshah-tshah-tshah, ē-sái kóng sī “lâng buē kàu, siann sing kàu”, khó-kiàn lâi--tsiá hui-tông-siáu-khó.",
  },
  {
    hanji:
      "雖然俗語講：「人兩跤，錢四跤。」毋過佇臺灣這種開放、自由的社會，若肯拍拚閣會變竅，猶原會當趁著夠額的錢通買車、買厝。",
    tailo:
      "Sui-jiân sio̍k-gí kóng, “Lâng nn̄g kha, tsînn sì kha.” M̄-koh tī Tâi-uân tsit tsióng khai-hòng, tsū-iû ê siā-huē, nā khíng phah-piànn koh ē piàn-khiàu, iu-guân ē-tàng thàn-tio̍h kàu-gia̍h ê tsînn thang bé tshia, bé tshù.",
  },
  {
    hanji:
      "人咧講：「人的喙，掩袂密」，喙是生佇別人的身軀，咱無法度阻擋別人去講遐的是非抑是閒仔話，家己莫做虧心事就免煩惱。",
    tailo:
      "Lâng teh kóng, “Lâng ê tshuì, am bē ba̍t”, tshuì sī senn tī pa̍t-lâng ê sin-khu, lán bô-huat-tōo tsóo-tòng pa̍t-lâng khì kóng hia-ê sī-hui ia̍h-sī îng-á-uē, ka-kī mài tsò khui-sim-sū tō bián huân-ló.",
  },
  {
    hanji:
      "你莫掠準無人知，「人咧做，天咧看」，你若閣毋冗早收跤洗手，緊縒慢會予人捎入去櫳仔內。",
    tailo:
      "Lí mài lia̍h-tsún bô lâng tsai, “lâng teh tsò, thinn teh khuànn”, lí nā koh m̄ liōng-tsá siu-kha-sé-tshiú, kín-tsua̍h-bān ē hōo lâng sa ji̍p-khì lông-á-lāi.",
  },
  {
    hanji:
      "最近足歹運，欲食菜頭湯，去買著蓬心的菜頭；欲去剃頭，剃頭店無開門，有影是「人若衰，種匏仔生菜瓜」。",
    tailo:
      "Tsuè-kīn tsiok pháinn-ūn, beh tsia̍h tshài-thâu-thng, khì bé-tio̍h pōng-sim ê tshài-thâu; beh khì thì-thâu, thì-thâu-tiàm bô khui-mn̂g, ū-iánn sī “lâng nā sue, tsìng pû-á senn tshài-kue”.",
  },
  {
    hanji:
      "年歲食到六十外，一寡仔老朋友毋是娶新婦、嫁查某囝，就是序大人過身，攏著陪綴，才知影「人情世事陪到到，無鼎閣無灶」。",
    tailo:
      "Nî-huè tsia̍h kàu la̍k-tsa̍p-guā, tsi̍t-kuá-á lāu-pîng-iú m̄ sī tshuā-sin-pū, kè tsa-bóo-kiánn, tō sī sī-tuā-lâng kuè-sin, lóng tio̍h puê-tuè, tsiah tsai-iánn “jîn-tsîng-sè-sū puê kàu-kàu, bô tiánn koh bô tsàu”.",
  },
  {
    hanji:
      "萬項代誌咱就算氣佇心肝內，嘛愛笑笑回人禮，人講：「人情留一線，日後好相看。」後日仔無的確咱嘛著愛求人。",
    tailo:
      "Bān-hāng tāi-tsì lán tō-sǹg khì tī sim-kuann-lāi, mā ài tshiò-tshiò huê lâng lé, lâng kóng, “Jîn-tsîng lâu tsi̍t suànn, ji̍t-āu hó sio-khuànn.” Āu-ji̍t-á bô tik-khak lán mā tio̍h-ài kiû--lâng.",
  },
  {
    hanji:
      "彼箍歹囝「人牽毋行，鬼牽溜溜行」，下半世人攏愛關佇櫳仔內食免錢飯矣。",
    tailo:
      "Hit khoo pháinn-kiánn “lâng khan m̄ kiânn, kuí khan liù-liù-kiânn”, ē-puànn-sì-lâng lóng ài kuainn tī lông-á-lāi tsia̍h bián-tsînn-pn̄g--ah.",
  },
  {
    hanji:
      "自然環境的敗害，災厄毋捌停睏過，這攏是咱人自私所致，較加嘛有人講這就是「人無照天理，天無照甲子」的結果。",
    tailo:
      "Tsū-jiân khuân-kíng ê pāi-hāi, tsai-eh m̄ bat thîng-khùn--kuè, tse lóng sī lán-lâng tsū-su sóo-tì, khah-ke mā ū lâng kóng tse tō sī “lâng bô tsiàu thinn-lí, thinn bô tsiàu kah-tsí” ê kiat-kó.",
  },
  {
    hanji:
      "阿榮頭一改贌園種弓蕉隨搪著風颱，了甲叫毋敢。佳哉尾仔換去夜市做油湯，拄著時機好，才予伊趁甲油洗洗，有影是「人飼人，一支骨；天飼人，肥朒朒」，真正予人袂𠢕得。",
    tailo:
      "A-îng thâu tsi̍t kái pa̍k-hn̂g tsìng king-tsio suî tn̄g-tio̍h hong-thai, liáu kah kiò-m̄-kánn. Ka-tsài bué--á uānn-khì iā-tshī tsò iû-thng, tú-tio̍h sî-ki hó, tsiah hōo i thàn kah iû-sé-sé, ū-iánn sī “lâng tshī lâng, tsi̍t ki kut; thinn tshī lâng, puî-tsut-tsut”, tsin-tsiànn hōo lâng bē-gâu--tit.",
  },
  {
    hanji:
      "俗語講：「人濟話就濟，三色人講五色話。」開會若出在人去發言，按呢舞三暝三日嘛袂煞，主持人猶是愛小節一下較好。",
    tailo:
      "Sio̍k-gí kóng, “Lâng tsē uē tō tsē, sam sik lâng kóng ngóo sik uē.” Khui-huē nā tshut-tsāi lâng khì huat-giân, án-ne bú sann mê sann ji̍t mā bē suah, tsú-tshî-jîn iáu-sī ài sió tsat--tsi̍t-ē khah hó.",
  },
  {
    hanji:
      "生理人若去專制獨裁的國家做生理，佇生疏的環境，不時都予人刁難，了錢猶小局，命嘛定定會無去，正經是「入虎口，無死也烏漚」。",
    tailo:
      "Sing-lí-lâng nā khì tsuan-tsè to̍k-tshâi ê kok-ka tsò-sing-lí, tī tshenn-soo ê khuân-kíng, put-sî to hōo lâng thiau-lân, liáu-tsînn iáu sió-kio̍k, miā mā tiānn-tiānn ē bô--khì, tsìng-king sī “ji̍p hóo kháu, bô sí iā oo-áu”.",
  },
  {
    hanji:
      "我講的笑詼過半點鐘矣，伊到這馬才知影通笑，真正是「十二月食菜頭，六月才轉嗽」。",
    tailo:
      "Guá  kóng ê tshiò-khue kuè puànn tiám-tsing--ah, i kàu tsit-má tsiah tsai-iánn thang tshiò, tsin-tsiànn sī “tsa̍p-jī--gue̍h tsia̍h tshài-thâu, la̍k--gue̍h tsiah tńg-sàu”.",
  },
  {
    hanji: "伊做頭路無定性，「十二生相變透透」，莫怪逐項都做袂成。",
    tailo:
      "I tsò thâu-lōo bô tīng-sìng, “tsa̍p-jī senn-siùnn pìnn-thàu-thàu”, bo̍k-kuài ta̍k hāng to tsò bē sîng.",
  },
  {
    hanji:
      "阿福嬸仔的後生攏娶某生囝矣，老翁過身了後，後生新婦隨人無閒事業、顧囡仔，伊煞著家己一个人生活，真正是「十囝十新婦，賰一个老寡婦」。",
    tailo:
      "A-hok tsím--á ê hāu-senn lóng tshuā-bóo senn-kiánn--ah, lāu-ang kuè-sin liáu-āu, hāu-senn sin-pū suî-lâng bô-îng sū-gia̍p, kòo gín-á, i suah tio̍h ka-kī tsi̍t ê lâng sing-ua̍h, tsin-tsiànn sī “tsa̍p kiánn tsa̍p sin-pū, tshun tsi̍t ê lāu kuá-hū”.",
  },
  {
    hanji:
      "伊總是怨嘆𪜶爸母較為小弟，人咧講：「十指伸出，無平長。」序大人無論按怎做，加減都會予囝兒序細感覺無公平。",
    tailo:
      "I tsóng-sī uàn-thàn in pē-bú khah uī sió-tī, lâng teh kóng, “Tsa̍p tsáinn tshun-tshut, bô pênn tn̂g.” Sī-tuā-lâng bô-lūn án-tsuánn tsò, ke-kiám to ē hōo kiánn-jî sī-sè kám-kak bô kong-pênn.",
  },
  {
    hanji:
      "咱做代誌愛主心定，人講「十喙九尻川」，若欲事事項項攏聽人的意見，代誌就攏做袂成。",
    tailo:
      "Lán tsò tāi-tsì ài tsú-sim-tiānn, lâng kóng “tsa̍p tshuì káu kha-tshng”, nā beh sū-sū-hāng-hāng lóng thiann lâng ê ì-kiàn, tāi-tsì tō lóng tsò bē sîng.",
  },
  {
    hanji:
      "阮規班拍算欲去旅行，有人欲去臺東，有人欲去澎湖，眾人「十喙九尻川」，無法度定著，尾後規氣抽鬮來決定。",
    tailo:
      "Guán kui pan phah-sǹg beh khì lí-hîng, ū lâng beh khì Tâi-tang, ū lâng beh khì Phênn-ôo, tsìng-lâng “tsa̍p tshuì káu kha-tshng”, bô-huat-tōo tiānn-tio̍h, bué-āu kui-khì thiu-khau lâi kuat-tīng.",
  },
  {
    hanji:
      "俗語講：「三人共五目，日後無長短跤話。」咱這馬講定就講定囉，日後袂使反悔。",
    tailo:
      "Sio̍k-gí kóng, “Sann lâng kāng gōo ba̍k, ji̍t-āu bô tn̂g-té-kha-uē.” Lán tsit-má kóng tiānn tō kóng tiānn--looh, ji̍t-āu bē-sái huán-hué.",
  },
  {
    hanji:
      "咱欲做決定進前，逐个想較齊著咧，閣看予斟酌，親像俗語咧講的「三人共五目，日後無長短跤話」，按呢好無？",
    tailo:
      "Lán beh tsò kuat-tīng tsìn-tsîng, ta̍k ê siūnn khah tsiâu-tio̍h--leh, koh khuànn hōo tsim-tsiok, tshin-tshiūnn sio̍k-gí teh kóng--ê “sann lâng kāng gōo ba̍k, ji̍t-āu bô tn̂g-té-kha-uē”, án-ne hó--bô?",
  },
  {
    hanji:
      "人講「三分人，七分妝」，伊今仔日穿西裝閣梳海結仔頭，加足緣投的。",
    tailo:
      "Lâng kóng “sann hun lâng, tshit hun tsng”, i kin-á-ji̍t tshīng se-tsong koh se hái-kat-á-thâu, ke tsiok iân-tâu--ê.",
  },
  {
    hanji:
      "這改考試你愛好好仔準備，照起工認真讀，若是「三日無餾，𬦰上樹」，就無法度有好成績矣。",
    tailo:
      "Tsit kái khó-tshì lí ài hó-hó-á tsún-pī, tsiàu-khí-kang jīn-tsin tha̍k, nā-sī “sann ji̍t bô liū, peh-tsiūnn tshiū”, tō bô-huat-tōo ū hó sîng-tsik--ah.",
  },
  {
    hanji:
      "人若有歲乎，記持確實會變差，「三日無餾，𬦰上樹」，幾工前學著的工夫，若無閣餾就袂記得了了矣，有影真害。",
    tailo:
      "Lâng nā ū-huè--honnh, kì-tî khak-si̍t ē piàn tsha, “sann ji̍t bô liū, peh-tsiūnn tshiū”, kuí kang tsîng o̍h--tio̍h ê kang-hu, nā bô koh liū tō bē-kì-tit liáu-liáu--ah, ū-iánn tsin hāi.",
  },
  {
    hanji:
      "開基的人辛苦奮鬥，序細嘛鬥艱苦有著，猶原骨力咧做，事業成功了後囝孫免食苦閣𠢕享受，免偌久煞「三代粒積，一代窮空」，予人感慨。",
    tailo:
      "Khai-ki ê lâng sin-khóo hùn-tàu, sī-sè mā tàu kan-khóo ū tio̍h, iu-guân kut-la̍t teh tsò, sū-gia̍p sîng-kong liáu-āu kiánn-sun bián tsia̍h-khóo koh gâu hiáng-siū, bián guā-kú suah “sann tāi lia̍p-tsik, tsi̍t tāi khîng-khong”, hōo lâng kám-khài.",
  },
  {
    hanji:
      "俗語講：「三年一閏，好歹照輪。」艱苦有時過，小可忍咧，就會出運矣。",
    tailo:
      "Sio̍k-gí kóng, “Sann nî tsi̍t jūn, hó-pháinn tsiàu lûn.” Kan-khóo ū-sî kuè, sió-khuá lún--leh, tō ē tshut-ūn--ah.",
  },
  {
    hanji:
      "看人富的富上天，咱是散甲斷寸鐵，若想著「三年一閏，好歹照輪」，就罔做罔度，看有一工會出頭天袂。",
    tailo:
      "Khuànn lâng pù--ê pù tsiūnn thinn, lán sī sàn kah tn̄g-tshùn-thih, nā siūnn-tio̍h “sann nî tsi̍t jūn, hó-pháinn tsiàu lûn”, tō bóng tsò bóng tōo, khuànn ū tsi̍t kang ē tshut-thâu-thinn--bē.",
  },
  {
    hanji:
      "佇多元的社會裡，若有認真拍拚，「三百六十行，行行出狀元」，毋管做佗一途，總是會有出脫的彼一日。",
    tailo:
      "Tī to-guân ê siā-huē--lí, nā ū jīn-tsin phah-piànn, “sann-pah la̍k-tsa̍p hâng, hâng-hâng tshut tsiōng-guân”, m̄-kuán tsò tó tsi̍t tôo, tsóng-sī ē ū tshut-thuat ê hit tsi̍t ji̍t.",
  },
  {
    hanji:
      "較早舊市區毋但「三跤步一坎店」，踅街的人嘛插插插，毋過這馬已經變甲真稀微矣。",
    tailo:
      "Khah-tsá kū tshī-khu m̄-nā “sann kha-pōo tsi̍t khám tiàm”, se̍h-ke ê lâng mā tshah-tshah-tshah, m̄-koh tsit-má í-king piàn kah tsin hi-bî--ah.",
  },
  {
    hanji:
      "遮風景區的飯店開甲是「三跤步一坎店」，逐間店攏著想空想縫來搶人客。",
    tailo:
      "Tsia hong-kíng-khu ê pn̄g-tiàm khui kah sī “sann kha-pōo tsi̍t khám tiàm”, ta̍k king tiàm lóng tio̍h siūnn-khang-siūnn-phāng lâi tshiúnn lâng-kheh.",
  },
  {
    hanji:
      "做研究一定愛有證據，一分證據，講一分話，才袂「三講，四毋著」。",
    tailo:
      "Tsò gián-kiù it-tīng ài ū tsìng-kì, tsi̍t hun tsìng-kì, kóng tsi̍t hun uē, tsiah bē “sann kóng, sì m̄-tio̍h”.",
  },
  {
    hanji:
      "俗語講：「上山看山勢，入門看人意。」咱若去人兜拜訪，就愛看主人的心意，人若咧無閒，抑是欲歇睏，就愛告辭。",
    tailo:
      "Sio̍k-gí kóng, “Tsiūnn-suann khuànn suann-sì, ji̍p-mn̂g khuànn lâng ì.” Lán nā khì lâng tau pài-hóng, tō ài khuànn tsú-lâng ê sim-ì, lâng nā teh bô-îng, ia̍h-sī beh hioh-khùn, tō ài kò-sî.",
  },
  {
    hanji:
      "有的推銷員實在毋捌「上山看山勢，入門看人意」的道理，人當咧無閒做生理，才欲來推銷物件，較加嘛予人拒絕。",
    tailo:
      "Ū ê thui-siau-uân si̍t-tsāi m̄ bat “tsiūnn-suann khuànn suann-sì, ji̍p-mn̂g khuànn lâng ì” ê tō-lí, lâng tng-teh bô-îng tsò-sing-lí, tsiah beh lâi thui-siau mi̍h-kiānn, khah-ke mā hōo lâng kī-tsua̍t.",
  },
  {
    hanji:
      "靠勢阿媽共你惜命命，你毋但共伊身軀邊的所費討了了，這馬連伊嫁粧佮來的金仔都欲共拐去，你有影是「上踏枋，上眠床，無洗跤睏中央」，真正傷超過矣。",
    tailo:
      "Khò-sè a-má kā lí sioh-miā-miā, lí m̄-nā kā i sin-khu-pinn ê sóo-huì thó-liáu-liáu, tsit-má liân i kè-tsng kah--lâi ê kim-á to beh kā kuái--khì, lí ū-iánn sī “tsiūnn ta̍h-pang, tsiūnn bîn-tshn̂g, bô sé kha khùn tiong-ng”, tsin-tsiànn siunn tshiau-kuè--ah.",
  },
  {
    hanji: "咱做代誌進前攏愛先想予周至，千萬毋通「上轎才欲放尿」。",
    tailo:
      "Lán tsò tāi-tsì tsìn-tsîng lóng ài sing siūnn hōo tsiu-tsì, tshian-bān m̄-thang “tsiūnn kiō tsiah beh pàng-jiō”.",
  },
  {
    hanji:
      "伊破病倒佇眠床頂廿捅冬矣，寢開始後生猶真盡心看顧，不而過俗語講：「久長病，無孝子。」這幾冬𪜶後生予伊的醫藥費硩甲袂喘氣，就無通遐認真共照顧矣。",
    tailo:
      "I phuà-pēnn tó tī bîn-tshn̂g-tíng jia̍p-thóng tang--ah, tshím-khai-sí hāu-senn iáu tsin tsīn-sim khuànn-kòo, put-jî-kò sio̍k-gí  kóng, “Kú-tn̂g pēnn, bô hàu-tsú.” Tsit kuí tang in hāu-senn hōo i ê i-io̍h-huì teh kah bē tshuán-khuì, tō bô thang hiah jīn-tsin kā tsiàu-kòo--ah.",
  },
  {
    hanji:
      "俗語講：「也著箠，也著糜。」對囡仔傷過嚴格，攏無共伊肯定佮鼓勵嘛無好。",
    tailo:
      "Sio̍k-gí kóng, “Iā tio̍h tshuê, iā tio̍h muê.” Tuì gín-á siunn kuè giâm-keh, lóng bô kā i khíng-tīng kah kóo-lē mā bô hó.",
  },
  {
    hanji:
      "咱一時落魄免失志，人咧講：「乞食也有三年好運。」定著有出運的彼一工。",
    tailo:
      "Lán tsi̍t-sî lo̍k-phik bián sit-tsì, lâng teh kóng, “Khit-tsia̍h iā ū sann nî hó-ūn.” Tiānn-tio̍h ū tshut-ūn ê hit tsi̍t kang.",
  },
  {
    hanji:
      "你平常時仔毋認真讀冊，竟然敢「乞食下大願」，講一定欲考著公立大學才欲讀，按呢敢袂傷譀古？",
    tailo:
      "Lí pîng-siông-sî-á m̄ jīn-tsin tha̍k-tsheh, kìng-jiân kánn “khit-tsia̍h hē tuā guān”, kóng it-tīng beh khó-tio̍h kong-li̍p tāi-ha̍k tsiah beh tha̍k, án-ne kám bē siunn hàm-kóo?",
  },
  {
    hanji:
      "伊定咧講欲買烏頭仔車來駛，其實伊連機車都買袂起，朋友攏笑伊是「乞食身，皇帝喙」。",
    tailo:
      "I tiānn teh kóng beh bé oo-thâu-á-tshia lâi sái, kî-si̍t i liân ki-tshia to bé bē khí, pîng-iú lóng tshiò i sī “khit-tsia̍h sin, hông-tè tshuì”.",
  },
  {
    hanji:
      "當初阿爸好心共無地去的阿叔收留，予伊暫時蹛佇阮兜，想袂到伊毋但毋知影通感恩，閣不時招朋友來厝裡啉酒，舞甲逐四界挐氅氅，共阮兜當做伊家己的厝仝款，有影是「乞食趕廟公」。",
    tailo:
      "Tong-tshoo a-pah hó-sim kā bô-tè khì ê a-tsik siu-liû, hōo i tsiām-sî tuà tī guán tau, siūnn-bē-kàu i m̄-nā m̄ tsai-iánn thang kám-un, koh put-sî tsio pîng-iú lâi tshù--lí lim tsiú, bú kah ta̍k-sì-kè jû-tsháng-tsháng, kā guán tau tòng-tsò i ka-kī ê tshù kāng-khuán, ū-iánn sī “khit-tsia̍h kuánn biō-kong”.",
  },
  {
    hanji:
      "俗語講：「千金買厝，萬金買厝邊。」最近想欲買厝，看厝的時，攏嘛斟酌探聽厝邊是啥物款人，若有好厝邊，才敢買落來。",
    tailo:
      "Sio̍k-gí kóng, “Tshian-kim bé tshù, bān kim bé tshù-pinn.” Tsuè-kīn siūnn-beh bé tshù, khuànn tshù ê sî, lóng mā tsim-tsiok thàm-thiann tshù-pinn sī siánn-mih khuán lâng, nā ū hó tshù-pinn, tsiah kánn bé--lo̍h-lâi.",
  },
  {
    hanji:
      "最近我搬來庄跤蹛，若有好食物，我就捾去送厝邊。𪜶嘛定定送𪜶家己種的青菜、果子來予我。人講「千金買厝，萬金買厝邊」，咱著佮厝邊頭尾好好仔交陪！",
    tailo:
      "Tsuè-kīn guá puann-lâi tsng-kha tuà, nā ū hó-tsia̍h mi̍h, guá tō kuānn-khì sàng tshù-pinn. In mā tiānn-tiānn sàng in ka-kī tsìng ê tshenn-tshài, kué-tsí lâi hōo--guá. Lâng kóng “tshian-kim bé tshù, bān kim bé tshù-pinn”, lán tio̍h kah tshù-pinn-thâu-bué hó-hó-á kau-puê!",
  },
  {
    hanji:
      "阮厝雖然舊舊仔，毋過厝邊攏真好鬥陣，閣攏會互相看頭看尾，「千金買厝，萬金買厝邊」，阮遮的環境比厝較有價值。",
    tailo:
      "Guán tshù sui-jiân kū-kū--á, m̄-koh tshù-pinn lóng tsin hó tàu-tīn, koh lóng ē hōo-siong khuànn-thâu-khuànn-bué, “tshian-kim bé tshù, bān kim bé tshù-pinn”, guán tsia ê khuân-kíng pí tshù khah ū kè-ta̍t.",
  },
  {
    hanji:
      "這陣時勢無仝矣，古早彼種「千途萬途，毋值得翻田塗」的觀念早就退時去矣，少年人攏嘛欲揣坐佇辦公室吹冷氣的頭路，今是有幾个甘願攑鋤頭落田去作穡咧！",
    tailo:
      "Tsit-tsūn sî-sè bô kāng--ah, kóo-tsá hit tsióng “tshian tôo bān tôo, m̄ ta̍t-tit huan tshân-thôo” ê kuan-liām tsá tō thè-sî--khì--ah, siàu-liân-lâng lóng mā beh tshuē tsē tī pān-kong-sik tshue líng-khì ê thâu-lōo, tann sī ū kuí ê kam-guān gia̍h tî-thâu lo̍h-tshân khì tsoh-sit--leh!",
  },
  {
    hanji:
      "人講：「千算萬算，毋值天一劃。」閣較大間的厝，若拄著七級的大地動，嘛是喝倒就倒，一點仔都袂按算得。",
    tailo:
      "Lâng kóng, “Tshian sǹg bān sǹg, m̄-ta̍t thinn tsi̍t ue̍h.” Koh-khah tuā king ê tshù, nā tú-tio̍h tshit kip ê tuā tē-tāng, mā sī huah tó tō tó, tsi̍t-tiám-á to bē-àn-sǹg--tit.",
  },
  {
    hanji:
      "阿弟仔生日的時吵講欲買新衫，老爸應講：「『大人生日食肉，囡仔生日食拍』，你欲拍幾下？」阿弟仔即時恬去。",
    tailo:
      "A-tī-á senn-ji̍t ê sî tshá kóng beh bé sin sann, lāu-pē ìn kóng, “‘Tuā-lâng senn-ji̍t tsia̍h bah, gín-á senn-ji̍t tsia̍h phah’, lí beh phah kuí ē?” A-tī-á tsik-sî tiām--khì.",
  },
  {
    hanji:
      "雖然阿媽喙講「大人生日食肉，囡仔生日食拍」，其實早就準備小妹上愛的尪仔欲送伊做生日禮物矣啦。",
    tailo:
      "Sui-jiân a-má tshuì kóng “tuā-lâng senn-ji̍t tsia̍h bah, gín-á senn-ji̍t tsia̍h phah”, kî-si̍t tsá tō tsún-pī sió-muē siōng ài ê ang-á beh sàng i tsò senn-ji̍t lé-bu̍t--ah--lah.",
  },
  {
    hanji:
      "世間人各人所興的攏袂相𫝛，平平是仝厝內，「大人愛趁錢，囡仔愛過年」，一人興一項，無兩人興相仝。",
    tailo:
      "Sè-kan-lâng kok-lâng sóo hìng--ê lóng bē sio-siāng, pênn-pênn sī kāng tshù-lāi, “tuā-lâng ài thàn-tsînn, gín-á ài kuè-nî”, tsi̍t lâng hìng tsi̍t hāng, bô nn̄g lâng hìng sio-kāng.",
  },
  {
    hanji:
      "俗語講：「大人儉一喙，囡仔食甲飫。」序大人惜囡仔就是按呢，無論食啥物攏會想著囡仔，欲留予囡仔食。",
    tailo:
      "Sio̍k-gí kóng, “Tuā-lâng khiām tsi̍t tshuì, gín-á tsia̍h kah uì.” Sī-tuā-lâng sioh gín-á tō sī án-ne, bô-lūn tsia̍h siánn-mih lóng ē siūnn-tio̍h gín-á, beh lâu hōo gín-á tsia̍h.",
  },
  {
    hanji:
      "阿義是無下無落的𨑨迌仔，壘錢是毋捌還人過，你著愛有彼款「大甲溪放草魚──有準無」的按算，才通提錢去借伊。",
    tailo:
      "A-gī sī bô-hē-bô-lo̍h ê tshit-thô-á, luí tsînn sī m̄ bat hîng--lâng--kuè, lí tio̍h-ài ū hit khuán “Tāi-kah-khe pàng tsháu-hî──ū tsún bô” ê àn-sǹg, tsiah thang the̍h tsînn khì tsioh--i.",
  },
  {
    hanji:
      "手機仔現現都𫞼佇桌頂，你煞應講你揣無，有影是「大目新娘無看見灶」！",
    tailo:
      "Tshiú-ki-á hiān-hiān to tshāi tī toh-tíng, lí suah ìn kóng lí tshuē-bô, ū-iánn sī “tuā-ba̍k sin-niû bô khuànn-kìnn tsàu”!",
  },
  {
    hanji: "這个人厚話，閣講甲去去倒倒，就有人罵伊「大舌閣興喋」。",
    tailo:
      "Tsit ê lâng kāu-uē, koh kóng kah khì-khì-tò-tò, tō ū lâng mē i “tuā-tsi̍h koh hìng thi̍h”.",
  },
  {
    hanji:
      "俗語講：「大狗盤牆，細狗看樣。」做人序大若串做攏歹代誌，序細早慢會變歹囝。",
    tailo:
      "Sio̍k-gí kóng, “Tuā káu puânn tshiûnn, sè káu khuànn-iūnn.” Tsò lâng sī-tuā nā tshuàn tsò lóng pháinn tāi-tsì, sī-sè tsá-bān ē piàn pháinn-kiánn.",
  },
  {
    hanji:
      "恁囝偷食薰，確實應該愛罵愛教，是講「大狗盤牆，細狗看樣」，你家己規日薰食牢牢，是欲按怎教囝？",
    tailo:
      "Lín kiánn thau tsia̍h-hun, khak-si̍t ing-kai ài mē ài kà, sī-kóng “tuā káu puânn tshiûnn, sè káu khuànn-iūnn”, lí ka-kī kui-ji̍t hun tsia̍h-tiâu-tiâu, sī beh án-tsuánn kà kiánn?",
  },
  {
    hanji:
      "做人著愛知影家己有幾兩重，毋通臭煬閣愛歕雞胿，若無，就會予人笑講是「大紅花毋知䆀，圓仔花䆀毋知」。",
    tailo:
      "Tsò-lâng tio̍h-ài tsai-iánn ka-kī ū kuí niú tāng, m̄-thang tshàu-iāng koh ài pûn-ke-kui, nā-bô, tō ē hōo lâng tshiò kóng sī “tuā-âng-hue m̄ tsai bái, înn-á-hue bái m̄ tsai”.",
  },
  {
    hanji:
      "伊明其知家己都學無一冬，半桶師仔爾爾，煞唱講家己有偌𠢕，有影是「大紅花毋知䆀，圓仔花䆀毋知」。",
    tailo:
      "I bîng-ki-tsai ka-kī  to o̍h bô tsi̍t tang, puànn-tháng-sai-á niā-niā, suah tshiàng kóng ka-kī ū guā gâu, ū-iánn sī “tuā-âng hue m̄ tsai bái, înn-á-hue bái m̄ tsai”.",
  },
  {
    hanji: "伊是一个人才，人講「大格雞慢啼」，閣三五年仔一定會有出脫。",
    tailo:
      "I sī tsi̍t ê jîn-tsâi, lâng kóng “tuā-keh ke bān thî”, koh--sann-gōo-nî-á it-tīng ē ū tshut-thuat.",
  },
  {
    hanji:
      "員工升官就會講主管捌英才，若無予人提拔著，就會講主管「大細目，懸低耳」，人攏是按呢。",
    tailo:
      "Uân-kang sing-kuann tō ē kóng tsú-kuán bat ing-tsâi, nā bô hōo lâng thê-pua̍t--tio̍h, tō ē kóng tsú-kuán “tuā-sè-ba̍k, kuân-kē hīnn”, lâng lóng sī án-ne.",
  },
  {
    hanji:
      "巷仔口彼擔蚵仔麵線「大碗閣滿墘」，料濟氣味好，不管時去攏足濟人咧排隊。",
    tailo:
      "Hāng-á-kháu hit tànn ô-á-mī-suànn “tuā uánn koh buán kînn”, liāu tsē khì-bī hó, put-kuán-sî khì lóng tsiok tsē lâng teh pâi-tuī.",
  },
  {
    hanji:
      "人性攏是痟貪的，心肝往往愈來愈大，也欲甜，也欲滇，也欲「大碗閣滿墘」。",
    tailo:
      "Jîn-sìng lóng sī siáu-tham--ê, sim-kuann íng-íng jú lâi jú tuā, iā beh tinn, iā beh tīnn, iā beh “tuā uánn koh buán kînn”.",
  },
  {
    hanji:
      "我無閒甲規工攏無食物件，這馬是枵甲「大腸告小腸」，強欲接載袂牢矣。",
    tailo:
      "Guá bô-îng kah kui-kang lóng bô tsia̍h mi̍h-kiānn, tsit-má sī iau kah “tuā-tn̂g kò sió-tn̂g”, kiōng-beh tsih-tsài bē tiâu--ah.",
  },
  {
    hanji:
      "有通食就算誠佳哉矣，莫踮遐嫌肝嫌胘，講甲袂得通煞；聽候你枵甲「大腸告小腸」的時陣，啥物吞袂落喉的物件嘛會攏是山珍海味。",
    tailo:
      "Ū thang tsia̍h tō-sǹg tsiânn ka-tsài--ah, mài tiàm hia hiâm-kuann-hiâm-kiān, kóng kah bē-tit-thang suah; thìng-hāu lí iau kah “tuā-tn̂g kò sió-tn̂g” ê sî-tsūn, siánn-mih thun bē lo̍h-âu ê mi̍h-kiānn mā ē lóng sī san-tin-hái-bī.",
  },
  {
    hanji:
      "爸母疼囝是天性，好額人疼囝，散赤人也疼囝，人講「弓蕉吐囝為囝死」，無因為好額散就會無仝款，就會重頭輕。",
    tailo:
      "Pē-bú thiànn kiánn sī thian-sìng, hó-gia̍h-lâng thiànn kiánn, sàn-tshiah-lâng iā thiànn kiánn, lâng kóng “king-tsio thòo kiánn uī kiánn sí”, bô in-uī hó-gia̍h-sàn tō ē bô kāng-khuán, tō ē tāng-thâu-khin.",
  },
  {
    hanji:
      "阮這陣愛寫作的朋友會定期聚會，逐家提家己寫的作品出來唸，希望眾人提出修改的意見，「互相落氣，求進步」，向望寫作的能力會當提升。",
    tailo:
      "Guán tsit tīn ài siá-tsok ê pîng-iú ē tīng-kî tsū-huē, ta̍k-ke the̍h ka-kī siá ê tsok-phín tshut-lâi liām, hi-bāng tsìng-lâng thê-tshut siu-kái ê ì-kiàn, “hōo-siong làu-khuì, kiû tsìn-pōo”, ǹg-bāng siá-tsok ê lîng-li̍k ē-tàng thê-sing.",
  },
  {
    hanji:
      "爸母疼囝，對較有出脫的就放較會落心，啊若趁較無食的就會較照顧，人講：「五肢指頭仔伸出來無平長。」毋過疼囝的心攏是仝款的，絕對無大細心的道理。",
    tailo:
      "Pē-bú thiànn kiánn, tuì khah ū tshut-thuat--ê tō pàng khah ē lo̍h-sim, ah nā thàn khah bô tsia̍h--ê tō ē khah tsiàu-kòo, lâng kóng, “Gōo ki tsíng-thâu-á tshun--tshut-lâi bô pênn tn̂g.” M̄-koh thiànn kiánn ê sim lóng sī kāng-khuán--ê, tsua̍t-tuì bô tuā-sè-sim ê tō-lí.",
  },
  {
    hanji:
      "高科技公司趁錢的家私是技術，若是內底的人將技術漏洩，親像人所講的「內神通外鬼」，閣較大間的公司嘛會倒店。",
    tailo:
      "Ko-kho-ki kong-si  thàn-tsînn ê ke-si sī ki-su̍t, nā-sī lāi-té ê lâng tsiong ki-su̍t lāu-sia̍p, tshin-tshiūnn lâng sóo kóng ê “lāi sîn thong guā kuí”, koh-khah tuā king ê kong-si mā ē tó-tiàm.",
  },
  {
    hanji:
      "彼間大賣場的電腦連紲予人偷提幾若十台去，警方懷疑是因為「內神通外鬼」，才會損失遮嚴重。",
    tailo:
      "Hit king tuā-bē-tiûnn ê tiān-náu liân-suà hōo lâng thau-the̍h kuí-nā tsa̍p tâi--khì, kíng-hong huâi-gî sī in-uī “lāi sîn thong guā kuí”, tsiah ē sún-sit tsiah giâm-tiōng.",
  },
  {
    hanji:
      "俗語講：「六月芥菜假有心。」做人若是假有情、假有義，隨時會予人看破跤手。",
    tailo:
      "Sio̍k-gí kóng, “La̍k-gue̍h kuà-tshài ké ū-sim.” Tsò-lâng nā-sī ké ū-tsîng, ké ū-gī, suî-sî ē hōo lâng khuànn-phuà-kha-tshiú.",
  },
  {
    hanji:
      "你佮伊來往愛較注意咧，伊對你好，是「六月芥菜假有心」，千萬毋通去予伊騙去。",
    tailo:
      "Lí kah i lâi-óng ài khah tsù-ì--leh, i tuì lí hó, sī “la̍k-gue̍h kuà-tshài ké ū-sim”, tshian-bān m̄-thang khì hōo i phiàn--khì.",
  },
  {
    hanji:
      "人講：「公親變事主。」這兩个相拍雞仔的代誌你上好莫插，若無，你是會食袂焦。",
    tailo:
      "Lâng kóng, “Kong-tshin piàn sū-tsú.” Tsit nn̄g ê sio-phah-ke-á ê tāi-tsì lí siōng-hó mài tshap, nā-bô, lí sī ē tsia̍h bē ta.",
  },
  {
    hanji:
      "𪜶翁仔某冤家我去排解，想袂到「公親變事主」，𪜶顛倒講是我害的，和我有啥物底代！",
    tailo:
      "In ang-á-bóo uan-ke guá khì pâi-kái, siūnn-bē-kàu “kong-tshin piàn sū-tsú”, in tian-tò kóng sī guá hāi--ê, hām guá ū siánn-mih tī-tāi!",
  },
  {
    hanji:
      "王董的過身了後才咧分家伙，後生、查某囝逐家相爭袂煞，規日冤家量債，真正是「分袂平，拍甲二九暝」。",
    tailo:
      "Ông-táng--ê kuè-sin liáu-āu tsiah teh pun-ke-hué, hāu-senn, tsa-bóo-kiánn ta̍k-ke sio-tsenn bē suah, kui-ji̍t uan-ke-niû-tsè, tsin-tsiànn sī “pun bē pênn, phah kah Jī-káu-mê”.",
  },
  {
    hanji: "伊人戇直，運途煞誠順序，有影是「天公疼戇人」。",
    tailo:
      "I lâng gōng-ti̍t, ūn-tôo suah tsiânn sūn-sī, ū-iánn sī “thinn-kong thiànn gōng-lâng”.",
  },
  {
    hanji:
      "人講：「天頂天公，地下母舅公。」你對恁阿舅愛較尊重咧，後擺娶某著向伊坐大位，才聽好開桌呢。",
    tailo:
      "Lâng kóng, “Thinn-tíng Thinn-kong, tē-ē bú-kū-kong.” Lí tuì lín a-kū ài khah tsun-tiōng--leh, āu-pái tshuā-bóo tio̍h ǹg i tsē tuā-uī, tsiah thìng-hó khui-toh--neh.",
  },
  {
    hanji:
      "少年人衝碰閣好強，冤家相拍閣較車，莫怪人講：「少年若無一擺戇，路邊哪有有應公。」家己無惜性命，嘛愛替爸母小想咧。",
    tailo:
      "Siàu-liân-lâng tshóng-pōng koh hònn-kiông, uan-ke sio-phah koh kà-tshia, bo̍k-kuài lâng kóng, “Siàu-liân nā bô tsi̍t pái gōng, lōo-pinn ná ū Iú-ìng-kong.” Ka-kī bô sioh sènn-miā, mā ài thè pē-bú sió siūnn--leh.",
  },
  {
    hanji:
      "俗語講：「少年袂曉想，食老毋成樣。」這馬無工夫嘛免煩惱，若肯食苦，去職業訓練班受訓學技術，就免驚見食老歹過日。",
    tailo:
      "Sio̍k-gí kóng, “Siàu-liân bē-hiáu siūnn, tsia̍h-lāu m̄-tsiânn-iūnn.” Tsit-má bô kang-hu mā bián huân-ló, nā khíng tsia̍h-khóo, khì tsit-gia̍p hùn-liān-pan siū-hùn o̍h ki-su̍t, tō bián kiann-kìnn tsia̍h-lāu pháinn kuè-ji̍t.",
  },
  {
    hanji:
      "厝邊的老阿伯定定怨嘆家己「少年袂曉想，食老毋成樣」，生活無好過，嘛無通予囝兒序細一个好模樣。",
    tailo:
      "Tshù-pinn ê lāu-a-peh tiānn-tiānn uàn-thàn ka-kī “siàu-liân bē-hiáu siūnn, tsia̍h-lāu m̄-tsiânn-iūnn”, sing-ua̍h bô hó-kuè, mā bô thang hōo kiánn-jî sī-sè tsi̍t ê hó bôo-iūnn.",
  },
  {
    hanji:
      "俗語講：「心歹無人知，喙歹上厲害。」佮人講話，好也一句，歹也一句，歹話莫出喙，較無代誌。",
    tailo:
      "Sio̍k-gí kóng, “Sim pháinn bô lâng tsai, tshuì pháinn siōng lī-hāi.” Kah lâng kóng-uē, hó iā tsi̍t kù, pháinn iā tsi̍t kù, pháinn-uē mài tshut-tshuì, khah bô tāi-tsì.",
  },
  {
    hanji:
      "毋管你是刁持的抑是咧滾耍笑，人講「心歹無人知，喙歹上厲害」，你講話遐刺鑿，人聽著會無歡喜。",
    tailo:
      "M̄-kuán lí sī tiau-tî--ê ia̍h-sī teh kún-sńg-tshiò, lâng kóng “sim pháinn bô lâng tsai, tshuì pháinn siōng lī-hāi”, lí kóng-uē hiah tshì-tsha̍k, lâng thiann tio̍h ē bô huann-hí.",
  },
  {
    hanji:
      "俗語講：「手曲，屈入無屈出。」厝裡的人若佮外口的人冤家，咱攏是為厝裡的人較濟。",
    tailo:
      "Sio̍k-gí kóng, “Tshiú-khiau, khut-ji̍p bô khut-tshut.” Tshù--lí ê lâng nā kah guā-kháu ê lâng uan-ke, lán lóng sī uī tshù--lí ê lâng khah tsē.",
  },
  {
    hanji:
      "這件代誌若甲雙爿攏有毋著，是講「手曲，屈入無屈出」，閣較按怎嘛無彼號先替外人講話的道理。",
    tailo:
      "Tsit kiānn tāi-tsì nā-kah siang-pîng lóng ū m̄-tio̍h, sī-kóng “tshiú-khiau, khut-ji̍p bô khut-tshut”, koh-khah án-tsuánn mā bô hit-lō sing thè guā-lâng kóng-uē ê tō-lí.",
  },
  {
    hanji:
      "阿明講𪜶囝暗時攏愛伊抱咧睏，有夠忝的，聽𪜶爸母講伊細漢嘛真歹育飼，這馬真正是「手抱孩兒，才知爸母時」。",
    tailo:
      "A-bîng kóng in kiánn àm-sî lóng ài i phō leh khùn, ū-kàu thiám--ê, thiann in pē-bú kóng i sè-hàn mā tsin pháinn io-tshī, tsit-má tsin-tsiànn sī “tshiú phō hâi-jî, tsiah tsai pē-bú sî”.",
  },
  {
    hanji:
      "拄著無公平的代誌，著愛即時反映，毋通「日頭赤焱焱，隨人顧性命」，予無辜的人受害。",
    tailo:
      "Tú-tio̍h bô kong-pênn ê tāi-tsì, tio̍h-ài tsik-sî huán-ìng, m̄-thang “ji̍t-thâu tshiah-iānn-iānn, suî lâng kòo sènn-miā”, hōo bû-koo ê lâng siū-hāi.",
  },
  {
    hanji:
      "伊欠人的錢無還，閣罵債主來討錢害伊無面子；家己不孝閣有一大堆理由，嫌爸母雜唸，怨爸母無好好仔栽培，真正是「欠錢怨債主，不孝怨爸母」。",
    tailo:
      "I khiàm--lâng ê tsînn bô hîng, koh mē tsè-tsú lâi thó-tsînn hāi i bô bīn-tsú; ka-kī put-hàu koh ū tsi̍t-tuā-tui lí-iû, hiâm pē-bú tsa̍p-liām, uàn pē-bú bô hó-hó-á tsai-puê, tsin-tsiànn sī “khiàm tsînn uàn tsè-tsú, put-hàu uàn pē-bú”.",
  },
  {
    hanji:
      "有一句話講「欠錢怨債主，不孝怨爸母」，有的人炒股票，股票落價，逐日都咧罵政府，有人就共伊加一句「股票跋輸怨政府」。",
    tailo:
      "Ū tsi̍t kù uē kóng “khiàm tsînn uàn tsè-tsú, put-hàu uàn pē-bú”, ū ê lâng tshá-kóo-phiò, kóo-phiò lo̍h-kè, ta̍k-ji̍t to teh mē tsìng-hú, ū lâng tō kā i ke tsi̍t kù “kóo-phiò pua̍h-su uàn tsìng-hú”.",
  },
  {
    hanji:
      "伊閣咧講人的歹話矣，𪜶老母就罵伊「歹瓜厚子，歹人厚言語」，伊就按呢恬去。",
    tailo:
      "I koh teh kóng lâng ê pháinn-uē--ah, in lāu-bú tō mē i “pháinn kue kāu tsí, pháinn-lâng kāu giân-gí”, i tsiū-án-ne tiām--khì.",
  },
  {
    hanji:
      "鱸鰻老爸竟然出一个狀元囝，彼个醫生的後生煞顛倒遮浪蕩，有影是「歹竹出好筍，好竹出痀崙」。",
    tailo:
      "Lôo-muâ lāu-pē kìng-jiân tshut tsi̍t ê tsiōng-guân kiánn, hit ê i-sing ê hāu-senn suah tian-tò tsiah lōng-tōng, ū-iánn sī “pháinn tik tshut hó sún, hó tik tshut ku-lún”.",
  },
  {
    hanji:
      "阿明𪜶老爸自少年到今攏按呢欲食毋討趁，阿明煞顛倒真骨力作穡，趁錢養飼規家口仔，就像人所講的「歹竹出好筍」。",
    tailo:
      "A-bîng in lāu-pē tsū siàu-liân kàu-tann lóng án-ne beh tsia̍h m̄ thó-thàn, A-bîng suah tian-tò tsin kut-la̍t tsoh-sit, thàn-tsînn ióng-tshī kui-ke-kháu-á, tō tshiūnn lâng sóo kóng--ê “pháinn tik tshut hó sún”.",
  },
  {
    hanji:
      "人講：「歹船拄著好港路。」這擺代誌做了順序，不過是一時的好運，咱著愛繼續培養實力，才有法度久久長長，應付各種的挑戰。",
    tailo:
      "Lâng kóng, “Pháinn tsûn tú-tio̍h hó káng-lōo.” Tsit pái tāi-tsì tsò liáu sūn-sī, put-kò sī tsi̍t-sî ê hó-ūn, lán tio̍h-ài kè-sio̍k puê-ióng si̍t-li̍k, tsiah ū-huat-tōo kú-kú-tn̂g-tn̂g, ìng-hù kok-tsióng ê thiáu-tsiàn.",
  },
  {
    hanji:
      "伊頭一遍做大生理，結果「歹船拄著好港路」，進貨了後，物資起大價，予伊趁著大錢。",
    tailo:
      "I thâu tsi̍t piàn tsò tuā sing-lí, kiat-kó “pháinn tsûn tú-tio̍h hó káng-lōo”, tsìn-huè liáu-āu, bu̍t-tsu khí tuā kè, hōo i thàn-tio̍h tuā-tsînn.",
  },
  {
    hanji:
      "普渡的時，司公道士唸的咒語無幾个人捌，民間定定供體𪜶是「毛呼龜粿粽，紅包在你送」。",
    tailo:
      "Phóo-tōo ê sî, sai-kong tō-sū liām ê tsiù-gí bô kuí ê lâng bat, bîn-kan tiānn-tiānn king-thé in sī “môo-honn ku kué tsàng, âng-pau tsāi lí sàng”.",
  },
  {
    hanji:
      "這个人從細漢就誠急性，今都食甲五六十矣，做代誌猶是按呢衝衝碰碰，真正是「牛就是牛，牽到北京也是牛」。",
    tailo:
      "Tsit ê lâng tsîng sè-hàn tō tsiânn kip-sìng, tann to tsia̍h kah gōo la̍k-tsa̍p--ah, tsò tāi-tsì iáu-sī án-ne tshóng-tshóng-pōng-pōng, tsin-tsiànn sī “gû tō sī gû, khan kàu Pak-kiann iā sī gû”.",
  },
  {
    hanji:
      "恁兄弟仔干焦會曉佇厝裡相觸，出去到外口就若軟跤蝦咧，俗語講：「牛牢內觸牛母。」是欲按怎會興？",
    tailo:
      "Lín hiann-tī-á kan-na ē-hiáu tī tshù--lí sio-tak, tshut-khì kàu guā-kháu tō ná nńg-kha-hê--leh, sio̍k-gí kóng, “Gû-tiâu-lāi tak gû-bó.” Sī beh án-tsuánn ē hing?",
  },
  {
    hanji:
      "公司的業務檢討會是欲揣出問題，提高業績，毋是欲「牛牢內觸牛母」，拍歹同事的感情。",
    tailo:
      "Kong-si ê gia̍p-bū kiám-thó-huē sī beh tshuē-tshut būn-tê, thê-ko gia̍p-tsik, m̄ sī beh “gû-tiâu-lāi tak gû-bó”, phah-pháinn tông-sū ê kám-tsîng.",
  },
  {
    hanji:
      "「王梨頭，西瓜尾」是咧講王梨是倚蒂頭的所在上蓋甜，西瓜顛倒是離蒂頭上遠的彼爿較甜，欲食的時先食較無甜的彼爿就會愈食愈甜。",
    tailo:
      "“Ông-lâi thâu, si-kue bué” sī teh kóng ông-lâi sī uá tì-thâu ê sóo-tsāi siōng-kài tinn, si-kue tian-tò sī lī tì-thâu siōng hn̄g ê hit pîng khah tinn, beh tsia̍h ê sî sing tsia̍h khah bô tinn ê hit pîng tō ē jú tsia̍h jú tinn.",
  },
  {
    hanji:
      "𪜶兩翁仔某定定冤家，厝邊看袂落去，欲來鬥排解，無疑悟煞予𪜶怨慼，有影是「仙拚仙，害死猴齊天」。",
    tailo:
      "In nn̄g ang-á-bóo tiānn-tiānn uan-ke, tshù-pinn khuànn bē lo̍h--khì, beh lâi tàu pâi-kái, bô-gî-ngōo suah hōo in uàn-tsheh, ū-iánn sī “sian piànn sian, hāi-sí Kâu-Tsê-thian”.",
  },
  {
    hanji:
      "恁若決心欲接老爸的生理，就愛互相體諒，「兄弟若仝心，烏塗變成金」，同齊拍拚才會成功。",
    tailo:
      "Lín nā kuat-sim beh tsiap lāu-pē ê sing-lí, tō ài hōo-siong thé-liōng, “hiann-tī nā kāng-sim, oo-thôo piàn-sîng kim”, tâng-tsê phah-piànn tsiah ē sîng-kong.",
  },
  {
    hanji:
      "時機䆀䆀仔，菜脯罔咬鹹，嘛著堅持「加減趁，較袂散」的原則，散工嘛是頭路，阮攏袂棄嫌。",
    tailo:
      "Sî-ki bái-bái--á, tshài-póo bóng kā kiâm, mā tio̍h kian-tshî “ke-kiám thàn, khah bē sàn” ê guân-tsik, suánn-kang mā sī thâu-lōo, guán lóng bē khì-hiâm.",
  },
  {
    hanji:
      "較早有足濟人千辛萬苦對唐山渡海來臺灣，就是因為「臺灣錢，淹跤目」的緣故。",
    tailo:
      "Khah-tsá ū tsiok tsē lâng tshian-sin-bān-khóo tuì Tn̂g-suann tōo-hái lâi Tâi-uân, tō sī in-uī “Tâi-uân tsînn, im kha-ba̍k” ê iân-kòo.",
  },
  {
    hanji:
      "頂日仔你欲搬厝，恁阿舅專工請假來共你鬥搬，你毋但無感謝伊，閣嫌伊跤手慢，誠實是「外甥食母舅，親像食豆腐」。",
    tailo:
      "Tíng-ji̍t-á lí beh puann-tshù, lín a-kū tsuan-kang tshíng-ká lâi kā lí tàu puann, lí m̄-nā bô kám-siā--i, koh hiâm i kha-tshiú bān, tsiânn-si̍t sī “guē-sing tsia̍h bú-kū, tshin-tshiūnn tsia̍h tāu-hū”.",
  },
  {
    hanji:
      "人伊都「幼秀跤，好命底」，見若出門就有司機共伊載，予人有夠欣羨的。",
    tailo:
      "Lâng i to “iù-siù kha, hó-miā té”, kiàn-nā tshut-mn̂g tō ū su-ki kā i tsài, hōo lâng ū-kàu him-siān--ê.",
  },
  {
    hanji:
      "做萬項代誌攏愛跤踏實地，照起工一步一步來，毋通「未曾學行先學飛，未曾掖種想挽瓜」，按呢才會成功。",
    tailo:
      "Tsò bān-hāng tāi-tsì lóng ài kha-ta̍h-si̍t-tē, tsiàu-khí-kang tsi̍t pōo tsi̍t pōo lâi, m̄-thang “buē-tsîng o̍h kiânn sing o̍h pue, buē-tsîng iā-tsíng siūnn bán kue”, án-ne tsiah ē sîng-kong.",
  },
  {
    hanji:
      "臺灣佇亞熱帶，舊曆三、四月仔有時真寒、有時真熱，著愛到五月才較袂反寒，古早人毋才會講「未食五日節粽，破裘毋甘放」。",
    tailo:
      "Tâi-uân tī a-jia̍t-tài, kū-li̍k sann, sì-gue̍h-á ū-sî tsin kuânn, ū-sî tsin jua̍h, tio̍h-ài kàu gōo--gue̍h tsiah khah bē huán-kuânn, kóo-tsá-lâng m̄-tsiah ē kóng “buē tsia̍h Gōo-ji̍t-tseh tsàng, phuà hiû m̄-kam pàng”.",
  },
  {
    hanji:
      "俗語講，「甘蔗無雙頭甜。」也欲清閒，也欲趁大錢，世間哪有遐爾好空的代誌？",
    tailo:
      "Sio̍k-gí kóng, “Kam-tsià bô siang-thâu tinn.” Iā beh tshing-îng, iā beh thàn tuā tsînn, sè-kan ná ū hiah-nī hó-khang ê tāi-tsì?",
  },
  {
    hanji: "俗語講：「甘願做牛，毋驚無犁通拖。」骨力做，就趁有食。",
    tailo:
      "Sio̍k-gí kóng, “Kam-guān tsò gû, m̄ kiann bô lê thang thua.” Kut-la̍t tsò, tō thàn ū tsia̍h.",
  },
  {
    hanji:
      "叫你讀冊你毋好好仔讀，好啦，你若「甘願做牛，毋驚無犁通拖」，後擺莫反悔就好。",
    tailo:
      "Kiò lí tha̍k-tsheh lí m̄ hó-hó-á tha̍k, hó--lah, lí nā “kam-guān tsò gû, m̄ kiann bô lê thang thua”, āu-pái mài huán-hué tō hó.",
  },
  {
    hanji:
      "欲對紅紅幼幼的嬰仔，晟養到成樣，愛了偌濟時間、精神佮氣力，古早人毋才會講：「生囝師仔，飼囝師傅」。",
    tailo:
      "Beh uì âng-âng-iù-iù ê enn-á, tshiânn-ióng kàu tsiânn-iūnn, ài liáu guā-tsē sî-kan, tsing-sîn kah khuì-la̍t, kóo-tsá-lâng m̄-tsiah ē kóng, “Senn-kiánn sai-á, tshī kiánn sai-hū”.",
  },
  {
    hanji:
      "你毋知影「生狂狗食無屎」的道理是毋？這款代誌，著愛緊事寬辦，聽候計畫想予周至才來處理。",
    tailo:
      "Lí m̄ tsai-iánn “tshenn-kông káu tsia̍h bô sái” ê tō-lí sī--m̄? Tsit khuán tāi-tsì, tio̍h-ài kín-sū-khuann-pān, thìng-hāu kè-uē siūnn hōo tsiu-tsì tsiah lâi tshú-lí.",
  },
  {
    hanji:
      "人講：「生的且一邊，養的恩情較大天。」雖然毋是親骨肉，毋過養爸母的用心晟養愛費偌爾濟苦心，做養子的著愛了解、著愛感恩。",
    tailo:
      "Lâng kóng, “Senn--ê tshiánn tsi̍t pinn, iúnn--ê un-tsîng khah tuā thinn.” Sui-jiân m̄ sī tshin-kut-jio̍k, m̄-koh ióng-pē-bú ê iōng-sim tshiânn-ióng ài huì guā-nī tsē khóo-sim, tsò ióng-tsú--ê tio̍h-ài liáu-kái, tio̍h-ài kám-un.",
  },
  {
    hanji:
      "阿義比我較𠢕趁錢，欲招出國𨑨迌的時陣，我隨共應講我趁的月給「生食都無夠，哪有通曝乾」咧？",
    tailo:
      "A-gī pí guá khah gâu thàn-tsînn, beh tsio tshut-kok tshit-thô ê sî-tsūn, guá suî kā ìn kóng guá thàn ê gue̍h-kip “tshenn tsia̍h to bô-kàu, ná ū thang pha̍k-kuann”--leh?",
  },
  {
    hanji:
      "餐廳拄倩的彼幾个員工，啥物代誌都袂曉做，閣真捷共碗盤摔害去，真正是「生雞卵的無，放雞屎的有」。",
    tailo:
      "Tshan-thiann tú tshiànn ê hit kuí ê uân-kang, siánn-mih tāi-tsì to bē-hiáu tsò, koh tsin tsia̍p kā uánn-puânn siak hāi--khì, tsin-tsiànn sī “senn ke-nn̄g--ê bô, pàng ke-sái--ê ū”.",
  },
  {
    hanji:
      "伊按呢做甲經理矣，見若拄著較歹紡的工課就叫別人去處理，若出代誌攏佮伊無底代，「用別人的拳頭拇舂石獅」毋知疼，尾手若有成果就攏品講是家己的功勞，實在予人真慼心。",
    tailo:
      "I án-ne tsò kah king-lí--ah, kiàn-nā tú-tio̍h khah pháinn-pháng ê khang-khuè tō kiò pa̍t-lâng khì tshú-lí, nā tshut-tāi-tsì lóng kah i bô-tī-tāi, “iōng pa̍t-lâng ê kûn-thâu-bú tsing tsio̍h-sai” m̄ tsai thiànn, bué-tshiú nā ū sîng-kó tō lóng phín kóng sī ka-kī ê kong-lô, si̍t-tsāi hōo lâng tsin tsheh-sim.",
  },
  {
    hanji:
      "這馬歹討趁閣拄著疫情，毋過「田螺含水過冬」，認真拍拚，總有出頭天的一工。",
    tailo:
      "Tsit-má pháinn thó-thàn koh tú-tio̍h i̍k-tsîng, m̄-koh “tshân-lê kâm tsuí kuè tang”, jīn-tsin phah-piànn, tsóng ū tshut-thâu-thinn ê tsi̍t kang.",
  },
  {
    hanji:
      "選舉的時，真捷看著一寡候選人共無影無跡的代誌講甲若真的，正港是人咧講的「白白布染甲烏」。",
    tailo:
      "Suán-kí ê sî, tsin tsia̍p khuànn-tio̍h tsi̍t-kuá hāu-suán-jîn kā bô-iánn-bô-tsiah ê tāi-tsì kóng kah ná tsin--ê, tsiànn-káng sī lâng teh kóng--ê “pe̍h-pe̍h-pòo ní kah oo”.",
  },
  {
    hanji:
      "陳的有夠大面神，朋友招伊做伙來厝裡食飯，伊毋但𤆬一家伙仔去人兜齪嘈，閣共人規厝間舞甲亂操操，正正是「皮皮食甲流糍」。",
    tailo:
      "Tân--ê ū-kàu tuā-bīn-sîn, pîng-iú tsio i tsò-hué lâi tshù--lí tsia̍h-pn̄g, i m̄-nā tshuā tsi̍t-ke-hué-á khì lâng tau tsak-tsō, koh kā lâng kui tshù-king bú kah luān-tshau-tshau, tsiànn-tsiànn sī “phî-phî tsia̍h kah lâu-tsî”.",
  },
  {
    hanji:
      "阿文仔無細膩共鹽看做白糖，就按呢𣁳去摻咖啡，實在是「目睭花花，匏仔看做菜瓜」。",
    tailo:
      "A-bûn--á bô-sè-jī kā  iâm khuànn-tsò pe̍h-thn̂g, tsiū-án-ne khat khì tsham ka-pi, si̍t-tsāi sī “ba̍k-tsiu hue-hue, pû-á khuànn-tsò tshài-kue”.",
  },
  {
    hanji:
      "阿公送到病院的時雖然猶知人，毋過袂講話嘛袂振動，干焦恬恬看病床邊的人，真正是「目睭金金人傷重」。",
    tailo:
      "A-kong sàng kàu pēnn-īnn ê sî sui-jiân iáu tsai lâng, m̄-koh bē kóng-uē mā bē tín-tāng, kan-na tiām-tiām khuànn pēnn-tshn̂g-pinn ê lâng, tsin-tsiànn sī “ba̍k-tsiu kim-kim lâng siong-tiōng”.",
  },
  {
    hanji:
      "北海岸的痟狗湧真恐怖，逐年攏有人予伊絞去，毋過釣魚的人拍死無退，人講：「目睭看佇粿，跤踏著火。」𪜶攏毋知通驚。",
    tailo:
      "Pak-hái-huānn ê siáu-káu-íng tsin khióng-pòo, ta̍k-nî lóng ū lâng hōo i ká--khì, m̄-koh tiò-hî ê lâng phah-sí bô thè, lâng kóng, “Ba̍k-tsiu khuànn tī kué, kha ta̍h-tio̍h hué.” In lóng m̄ tsai thang kiann.",
  },
  {
    hanji:
      "伊看著路中央有一百箍趕緊欲去抾，險險仔去予車挵著，真正是「目睭看佇粿，跤踏著火」。",
    tailo:
      "I khuànn-tio̍h lōo tiong-ng ū tsi̍t-pah khoo kuánn-kín beh khì khioh, hiám-hiám-á khì hōo tshia lòng--tio̍h, tsin-tsiànn sī “ba̍k-tsiu khuànn tī kué, kha ta̍h-tio̍h hué”.",
  },
  {
    hanji:
      "你行路攏無咧看路，「目睭看懸，無看低」，塗跤一窟水，你嘛共伊踏落去。",
    tailo:
      "Lí kiânn-lōo lóng bô teh khuànn lōo, “ba̍k-tsiu khuànn-kuân, bô khuànn-kē”, thôo-kha tsi̍t khut tsuí, lí mā kā i ta̍h--lo̍h-khì.",
  },
  {
    hanji:
      "阿花仔目頭懸，「目睭看懸，無看低」，咱這陣庄跤的囡仔伴，這馬攏予伊看無目地。",
    tailo:
      "A-hue--á ba̍k-thâu kuân, “ba̍k-tsiu khuànn-kuân, bô khuànn-kē”, lán tsit tīn tsng-kha ê gín-á-phuānn, tsit-má lóng hōo i khuànn bô ba̍k-tē.",
  },
  {
    hanji:
      "阿明共阿兄討拄買來的四秀仔，閣共阿姊討比賽贏來的獎品，就去予阿媽共罵講「目睭掛斗概，看人物就愛」。",
    tailo:
      "A-bîng kā a-hiann thó tú bé--lâi ê sì-siù-á, koh kā a-tsí thó pí-sài iânn--lâi ê tsióng-phín, tō khì hōo a-má kā mē kóng “ba̍k-tsiu kuà táu-kài, khuànn lâng mi̍h tō ài”.",
  },
  {
    hanji:
      "老職員認真拍拚，毋過升官加薪攏無伊的份，這遍伊「共天公借膽」，向主管要求加薪，有成無成不常在，伊的勇氣就值得咱呵咾。",
    tailo:
      "Lāu tsit-uân jīn-tsin phah-piànn, m̄-koh sing-kuann ka-sin lóng bô i ê hūn, tsit piàn i “kā Thinn-kong tsioh tánn”, hiòng tsú-kuán iau-kiû ka-sin, ū sîng bô sîng put tshiâng-tsāi, i ê ióng-khì tō ta̍t-tit lán o-ló.",
  },
  {
    hanji: "你毋通冤枉我，我就算是「共天公借膽」，嘛毋敢做這款代誌。",
    tailo:
      "Lí m̄-thang uan-óng--guá, guá tō-sǹg sī “kā Thinn-kong tsioh tánn”, mā m̄ kánn tsò tsit khuán tāi-tsì.",
  },
  {
    hanji: "人講：「囝婿是半子。」阿菊仔共𪜶囝婿疼命命，袂輸親生的仝款。",
    tailo:
      "Lâng kóng, “Kiánn-sài sī puàn-tsú.” A-kiok--á kā in kiánn-sài thiànn-miā-miā, bē-su tshin-senn--ê kāng-khuán.",
  },
  {
    hanji:
      "真濟人攏講，等到成功趁大錢，就會使予爸母過好日子，毋過毋通袂記得「在生一粒豆，較贏死了拜豬頭」，平常時較捷轉來照顧爸母較要緊。",
    tailo:
      "Tsin tsē lâng lóng kóng, tán-kàu sîng-kong thàn-tuā-tsînn, tō ē-sái hōo pē-bú kuè hó ji̍t-tsí, m̄-koh m̄-thang bē-kì-tit “tsāi-senn tsi̍t lia̍p tāu, khah iânn sí-liáu pài ti-thâu”, pîng-siông-sî khah tsia̍p tńg-lâi tsiàu-kòo pē-bú khah iàu-kín.",
  },
  {
    hanji:
      "人講：「好也一句，歹也一句。」佮人接接咱就講寡好聽話，莫歹喙罵人，較袂得失人。",
    tailo:
      "Lâng kóng, “Hó iā tsi̍t kù, pháinn iā tsi̍t kù.” Kah lâng tsih-tsiap  lán tō kóng kuá hó-thiann uē, mài pháinn-tshuì mē--lâng, khah bē tik-sit--lâng.",
  },
  {
    hanji: "我共伊鬥相共，伊閣嫌我跤手慢鈍，真正是「好心予雷唚」。",
    tailo:
      "Guá kā i tàu-sann-kāng, i koh hiâm guá kha-tshiú-bān-tūn, tsin-tsiànn sī “hó-sim hōo luî tsim”.",
  },
  {
    hanji:
      "予人講兩句仔就氣怫怫，面腔閣遐䆀，你就是無捎著「好歹在心內，喙脣皮相款待」的鋩角，按呢欲佮人做生理，會真食虧。",
    tailo:
      "Hōo lâng kóng--nn̄g-kù-á tō khì-phut-phut, bīn-tshiunn koh hiah bái, lí tō sī bô sa-tio̍h “hó-pháinn tsāi sim-lāi, tshuì-tûn-phuê sio khuán-thāi” ê mê-kak, án-ne beh kah lâng tsò-sing-lí, ē tsin tsia̍h-khui.",
  },
  {
    hanji:
      "阿媽真知「好田地不如好子弟」的道理，以早的生活雖然較艱難，伊猶原堅持予每一个囡仔攏有受教育的機會，實在誠無簡單。",
    tailo:
      "A-má tsin tsai “hó tshân-tē put-jû hó tsú-tē” ê tō-lí, í-tsá ê sing-ua̍h sui-jiân khah kan-lân, i iu-guân kian-tshî hōo muí tsi̍t ê gín-á lóng ū siū kàu-io̍k ê ki-huē, si̍t-tsāi tsiânn bô kán-tan.",
  },
  {
    hanji:
      "阿伯儉腸凹肚共伊彼陣囝捏大漢，今隨个仔嘛攏誠才情，毋過煞無甲半个欲共伊有孝，予伊不時都咧怨嘆講：「好囝毋免濟，濟囝餓死爸。」早若知，當初時就莫開遐爾濟錢來栽培𪜶。",
    tailo:
      "A-peh khiām-tn̂g-neh-tōo kā i hit tīn kiánn lia̍p tuā-hàn, tann suî-ê-á mā lóng tsiânn tsâi-tsîng, m̄-koh suah bô kah puànn ê beh kā i iú-hàu, hōo i put-sî to teh uàn-thàn kóng, “Hó kiánn m̄-bián tsē, tsē kiánn gō-sí pē.” Tsá nā tsai, tong-tshe-sî tō mài khai hiah-nī tsē tsînn lâi tsai-puê--in.",
  },
  {
    hanji:
      "阮牽手當咧無閒的時陣，我家婆講欲替伊煎一盤菜脯卵請人客，盍會知影「好好鱟刣甲屎那流」，煞煎甲臭火焦兼著火。",
    tailo:
      "Guán khan-tshiú tng-teh bô-îng ê sî-tsūn, guá ke-pô kóng beh thè i tsian tsi̍t puânn tshài-póo-nn̄g tshiánn lâng-kheh, khah ē tsai-iánn “hó-hó hāu thâi kah sái ná lâu”, suah tsian kah tshàu-hué-ta kiam to̍h-hué.",
  },
  {
    hanji:
      "人客倌，咱這齣戲是愈來愈精彩，半中站先歇十分鐘，下半段是「好酒沉甕底」，請逐家準時轉來。",
    tailo:
      "Lâng-kheh-kuann, lán tsit tshut hì sī jú lâi jú tsing-tshái, puànn-tiong-tsām sing hioh--tsa̍p-hun-tsing, ē-puànn-tuānn sī “hó-tsiú tîm àng-té”, tshiánn ta̍k-ke tsún-sî tńg--lâi.",
  },
  {
    hanji:
      "俗語講：「好額毋值著會食，好命毋值著勇健。」錢賰閣較濟，若無食福，身體閣無勇健，嘛無路用。",
    tailo:
      "Sio̍k-gí kóng, “Hó-gia̍h m̄-ta̍t-tio̍h ē tsia̍h, hó-miā m̄-ta̍t-tio̍h ióng-kiānn.” Tsînn tshun koh-khah tsē, nā bô tsia̍h-hok, sin-thé koh bô ióng-kiānn, mā bô-lōo-īng.",
  },
  {
    hanji:
      "咱的風俗講：「收瀾收離離，明年招小弟。」雖然是真心適，毋過重男輕女較無合時代。若共這句話改做「收瀾收離離，囡仔好育飼。」按呢敢毋是較妥當咧？",
    tailo:
      "Lán ê hong-sio̍k kóng, “Siu-nuā siu-lī-lī, mê-nî tsio sió-tī.” Sui-jiân sī tsin sim-sik, m̄-koh tiōng-lâm-khin-lí khah bô ha̍h sî-tāi. Nā kā tsit kù uē kái-tsò “Siu-nuā siu-lī-lī, gín-á hó io-tshī.” Án-ne kám m̄ sī khah thò-tòng--leh?",
  },
  {
    hanji:
      "人講甘蔗無雙頭甜，你袂當逐項攏欲貿甲贏，總是愛知影「有一好，無兩好」的道理。",
    tailo:
      "Lâng kóng kam-tsià bô siang-thâu tinn, lí bē-tàng ta̍k hāng lóng beh bāu kah iânn, tsóng--sī ài tsai-iánn “ū tsi̍t hó, bô nn̄g hó” ê tō-lí.",
  },
  {
    hanji:
      "𪜶結婚十外冬矣，攏無生甲半个，人講：「有囝有囝命，無囝天註定。」有囝無囝毋是人會當決定的。",
    tailo:
      "In kiat-hun tsa̍p-guā tang--ah, lóng bô senn kah puànn ê, lâng kóng, “Ū kiánn ū kiánn miā, bô kiánn thinn tsù-tiānn.” Ū kiánn bô kiánn m̄ sī lâng ē-tàng kuat-tīng--ê.",
  },
  {
    hanji:
      "俗語講：「有食閣有掠。」有人去食喜酒，食甲飽飽飽，閣共菜尾包包轉去，實在是足好空的。",
    tailo:
      "Sio̍k-gí kóng, “Ū tsia̍h koh ū lia̍h.” Ū lâng khì tsia̍h hí-tsiú, tsia̍h kah pá-pá-pá, koh kā tshài-bué pau-pau--tńg-khì, si̍t-tsāi sī tsiok hó-khang--ê.",
  },
  {
    hanji:
      "來遮看表演，閣有點心通好食，有紀念品通提轉去，實在是「有食閣有掠」！",
    tailo:
      "Lâi tsia khuànn piáu-ián, koh ū tiám-sim thang-hó tsia̍h, ū kì-liām-phín thang the̍h--tńg-khì, si̍t-tsāi sī “ū tsia̍h koh ū lia̍h”!",
  },
  {
    hanji:
      "自細漢就定定聽阮阿公講「有唐山公，無唐山媽」。伊講阮的開基祖是對唐山來的羅漢跤仔，查某祖是平埔族的原住民。",
    tailo:
      "Tsū sè-hàn tō tiānn-tiānn thiann guán a-kong kóng “ū Tn̂g-suann kong, bô Tn̂g-suann má”. I kóng guán ê khai-ki-tsóo sī uì Tn̂g-suann lâi ê lô-hàn-kha-á, tsa-bóo-tsóo sī pênn-poo-tso̍k ê guân-tsū-bîn.",
  },
  {
    hanji:
      "課長足堅持伊的主張，想欲改變伊的決定，準講你「有喙講甲無瀾」，嘛是無效。",
    tailo:
      "Khò-tiúnn tsiok kian-tshî i ê tsú-tiunn, siūnn-beh kái-piàn i ê kuat-tīng, tsún-kóng lí “ū tshuì kóng kah bô nuā”, mā sī bô-hāu.",
  },
  {
    hanji:
      "俗語講：「有量就有福。」腹腸愛放較闊咧，毋通雞仔腸鳥仔肚，逐項代誌都欲佮人計較。",
    tailo:
      "Sio̍k-gí kóng, “Ū-liōng tō ū hok.” Pak-tn̂g ài pàng khah khuah--leh, m̄-thang ke-á tn̂g tsiáu-á tōo, ta̍k hāng tāi-tsì to beh kah lâng kè-kàu.",
  },
  {
    hanji:
      "俗語講：「有樣看樣，無樣家己想。」咱做代誌，除了參考別人的經驗，拄著仔嘛會使家己想看有別的步數無，毋才會進步。",
    tailo:
      "Sio̍k-gí kóng, “Ū iūnn khuànn-iūnn, bô iūnn ka-kī siūnn.” Lán tsò tāi-tsì, tû-liáu tsham-khó pa̍t-lâng ê king-giām, tú-tio̍h--á mā ē-sái ka-kī siūnn khuànn ū pa̍t ê pōo-sòo--bô, m̄-tsiah ē tsìn-pōo.",
  },
  {
    hanji:
      "你拄出社會開始上班，毋通逐項攏驚驚，人講「有樣看樣，無樣家己想」，加做幾擺仔就會曉矣。",
    tailo:
      "Lí tú tshut-siā-huē khai-sí siōng-pan, m̄-thang ta̍k hāng lóng kiann-kiann, lâng kóng “ū iūnn khuànn-iūnn, bô iūnn ka-kī siūnn”, ke tsò--kuí-pái-á tō ē-hiáu--ah.",
  },
  {
    hanji:
      "人講：「有燒香有保庇，有食藥有行氣。」你若綿爛學習，定著會當學著閣較濟智識。",
    tailo:
      "Lâng kóng, “Ū sio-hiunn ū pó-pì, ū tsia̍h io̍h ū kiânn-khì.” Lí nā mî-nuā ha̍k-si̍p, tiānn-tio̍h ē-tàng o̍h-tio̍h koh-khah tsē tì-sik.",
  },
  {
    hanji:
      "伊就是咧操煩若真正百歲年老了後，囝兒序細為著財產承續分袂平棒煞起冤家，這聲就害矣，較輸講趁這陣人猶健健，先共財產分分咧，才袂時到害伊「死目毋願瞌」。",
    tailo:
      "I tō sī teh tshau-huân nā tsin-tsiànn pah-huè-nî-lāu liáu-āu, kiánn-jî sī-sè uī-tio̍h tsâi-sán sîng-sio̍k pun bē pênn-pāng suah khí uan-ke, tsit-siann tō hāi--ah, khah-su kóng thàn tsit-tsūn lâng iáu kiānn-kiānn, sing kā tsâi-sán pun-pun--leh, tsiah bē sî kàu hāi i “sí ba̍k m̄ guān kheh”.",
  },
  {
    hanji:
      "你千萬毋通為著一時失敗來行短路，人講：「死皇帝毋值得活乞食。」歹運總是會過去，活咧未來就有希望。",
    tailo:
      "Lí tshian-bān m̄-thang uī-tio̍h tsi̍t-sî sit-pāi lâi kiânn-té-lōo, lâng kóng, “Sí hông-tè m̄-ta̍t-tit ua̍h khit-tsia̍h.” Pháinn-ūn tsóng--sī ē kuè--khì, ua̍h--leh bī-lâi tō ū hi-bāng.",
  },
  {
    hanji:
      "俗語講：「死蛇活尾溜。」若無共這个詐騙集團的賊頭掠起來，毋知猶有偌濟人會予騙去。",
    tailo:
      "Sio̍k-gí kóng, “Sí tsuâ ua̍h bué-liu.” Nā bô kā tsit ê tsà-phiàn tsi̍p-thuân ê tsha̍t-thâu lia̍h--khí-lâi, m̄ tsai iáu-ū guā-tsē lâng ē hōo phiàn--khì.",
  },
  {
    hanji:
      "伊見若好空的就家己貿，歹空的隨捒予別人，咱著愛較斟酌咧，仙都毋通佮這款「死道友，無死貧道」的朋友交陪。",
    tailo:
      "I kiàn-nā hó-khang--ê tō ka-kī bāu, pháinn-khang--ê suî sak hōo pa̍t-lâng, lán tio̍h-ài khah tsim-tsiok--leh, sian to m̄-thang kah tsit khuán “sí tō-iú, bô sí pîn-tō” ê pîng-iú kau-puê.",
  },
  {
    hanji:
      "雖然俗語講：「老的老步定，少年的較懂嚇。」毋過若攏毋予少年的出頭，伊嘛永遠學袂曉。工課予少年的扞頭，前輩佇邊仔牽教，經驗才會當傳承。",
    tailo:
      "Sui-jiân sio̍k-gí kóng, “Lāu--ê lāu-pōo-tiānn, siàu-liân--ê khah táng-hiannh.” M̄-koh nā lóng m̄ hōo siàu-liân--ê tshut-thâu, i mā íng-uán o̍h bē-hiáu. Khang-khuè hōo siàu-liân--ê huānn-thâu, tsiân-puè tī pinn--á khan-kà, king-giām tsiah ē-tàng thuân-sîng.",
  },
  {
    hanji:
      "伊就是標準的「耳仔生兩葉，家己看袂著」的彼款人，叫伊講別人的缺點，隨就講甲喙角專泡，啊若講著家己佗位愛改，伊就攏恬恬，若親像換一个人的款。",
    tailo:
      "I tō sī piau-tsún ê “hīnn-á senn nn̄g hio̍h, ka-kī khuànn bē tio̍h” ê hit khuán lâng, kiò i kóng pa̍t-lâng ê khuat-tiám, suî tō kóng kah tshuì-kak tsuan pho, ah nā kóng-tio̍h ka-kī tó-uī ài kái, i tō lóng tiām-tiām, ná-tshin-tshiūnn uānn tsi̍t ê lâng ê khuán.",
  },
  {
    hanji:
      "志勇駛遊覽車到今十外冬矣，攏毋捌發生事故，想袂到昨昏煞予山頂落落來的石頭硩一下誠傷重，莫怪有人講「行船走馬三分命」，真正攏袂按得。",
    tailo:
      "Tsì-ióng sái iû-lám-tshia kàu-tann tsa̍p-guā tang--ah, lóng m̄ bat huat-sing sū-kòo, siūnn-bē-kàu tsa-hng suah hōo suann-tíng lak--lo̍h-lâi ê tsio̍h-thâu teh tsi̍t-ē tsiânn siong-tiōng, bo̍k-kuài ū lâng kóng “kiânn-tsûn tsáu-bé sann hun miā”, tsin-tsiànn lóng bē-àn--tit.",
  },
  {
    hanji:
      "阮厝邊一个陳的佇商船頂做二副，收入足好，想袂到一擺出海了後船煞消失去，到今十外年矣攏無消無息，真正是「行船走馬三分命」。",
    tailo:
      "Guán tshù-pinn tsi̍t ê Tân--ê tī siong-tsûn-tíng tsò jī-hù, siu-ji̍p tsiok hó, siūnn-bē-kàu tsi̍t pái tshut-hái liáu-āu tsûn suah siau-sit--khì, kàu-tann tsa̍p-guā nî--ah lóng bô-siau-bô-sit, tsin-tsiànn sī “kiânn-tsûn tsáu-bé sann hun miā”.",
  },
  {
    hanji:
      "雖然講「西北雨，落袂過車路」，天會烏無一定會落，作田人嘛愛趕緊收草、收粟、收衫，號做「走西北雨」。",
    tailo:
      "Sui-jiân kóng “sai-pak-hōo, lo̍h bē kuè tshia-lōo”, thinn ē oo bô-it-tīng ē lo̍h, tsoh-tshân-lâng mā ài kuánn-kín siu tsháu, siu tshik, siu sann, hō-tsò “tsáu sai-pak-hōo”.",
  },
  {
    hanji:
      "因為「西北雨，落袂過車路」，有時天頂一爿咧落雨，另外一爿顛倒咧出日頭，有人共伊叫做「日頭雨」。",
    tailo:
      "In-uī “sai-pak-hōo, lo̍h bē kuè tshia-lōo”, ū-sî thinn-tíng tsi̍t pîng teh lo̍h-hōo, līng-guā tsi̍t pîng tian-tò teh tshut-ji̍t-thâu, ū lâng kā i kiò-tsò “ji̍t-thâu-hōo”.",
  },
  {
    hanji:
      "咱做人愛有主見、有正義感，若干焦會曉「西瓜倚大爿」，早慢會予人看無目地。",
    tailo:
      "Lán tsò-lâng ài ū tsú-kiàn, ū tsìng-gī-kám, nā kan-na ē-hiáu “si-kue uá tuā-pîng”, tsá-bān ē hōo lâng khuànn bô ba̍k-tē.",
  },
  {
    hanji:
      "俗語講：「囡仔人有耳無喙。」大人若咧講話，囡仔人較毋捌芳臭，上好莫烏白插喙，較無代誌。",
    tailo:
      "Sio̍k-gí kóng, “Gín-á-lâng ū-hīnn-bô-tshuì.” Tuā-lâng nā teh kóng-uē, gín-á-lâng khah m̄ bat phang-tshàu, siōng-hó mài oo-pe̍h tshap-tshuì, khah bô tāi-tsì.",
  },
  {
    hanji:
      "古早人驚見囡仔講毋著話會顧人怨，才會講「囡仔人有耳無喙」，這馬的人顛倒會鼓勵囡仔愛勇敢表達家己的想法。",
    tailo:
      "Kóo-tsá-lâng kiann-kìnn gín-á kóng m̄-tio̍h uē ē kòo-lâng-uàn, tsiah ē kóng “gín-á-lâng ū-hīnn-bô-tshuì”, tsit-má ê lâng tian-tò ē kóo-lē gín-á ài ióng-kám piáu-ta̍t ka-kī ê siūnn-huat.",
  },
  {
    hanji:
      "這个歹心烏漉肚的生理人，為著欲省本，原料都過期矣，閣共伊摻落去做，嘛毋驚人食了會各樣袂，正經是「別人的囝死袂了」。",
    tailo:
      "Tsit ê pháinn-sim oo-lok-tōo ê sing-lí-lâng, uī-tio̍h beh síng-pún, guân-liāu to kuè-kî--ah, koh kā i tsham lo̍h-khì tsò, mā m̄ kiann lâng tsia̍h-liáu ē koh-iūnn--bē, tsìng-king sī “pa̍t-lâng ê kiánn sí bē liáu”.",
  },
  {
    hanji:
      "便若拄著嫁娶的時，咱定定會聽著媒人婆講「坐予正，得人疼」的好話來祝福新人。",
    tailo:
      "Piān-nā tú-tio̍h kè-tshuā ê sî, lán tiānn-tiānn ē thiann-tio̍h muê-lâng-pô kóng “tsē hōo tsiànn, tit lâng thiànn” ê hó-uē lâi tsiok-hok sin-lâng.",
  },
  {
    hanji:
      "老師上課定教阮講「坐予正，得人疼」，是希望學生囡仔佇教室上課愛坐予四正，若無，會予人歹印象。",
    tailo:
      "Lāu-su siōng-khò tiānn kà guán kóng “tsē hōo tsiànn, tit lâng thiànn”, sī hi-bāng ha̍k-sing gín-á tī kàu-sik siōng-khò ài tsē hōo sì-tsiànn, nā-bô, ē hōo lâng pháinn ìn-siōng.",
  },
  {
    hanji:
      "做生理加減會拄著漚客，俗語講：「忍氣求財，激氣相刣。」咱對待人客總是毋通激面腔抑是歹聲嗽。",
    tailo:
      "Tsò-sing-lí ke-kiám ē tú-tio̍h àu-kheh, sio̍k-gí kóng, “Lún-khì kiû tsâi, kik-khì sio-thâi.” Lán tuì-thāi lâng-kheh tsóng--sī m̄-thang kik-bīn-tshiunn ia̍h-sī pháinn-siann-sàu.",
  },
  {
    hanji:
      "阿明攏袂堪得人講得，見若講著伊的毋著，伊就「見笑轉受氣」，實在誠害！",
    tailo:
      "A-bîng lóng bē-kham-tit lâng kóng--tit, kiàn-nā kóng-tio̍h i ê m̄-tio̍h, i tō “kiàn-siàu tńg siū-khì”, si̍t-tsāi tsiânn hāi!",
  },
  {
    hanji: "伊講袂贏人就「見笑轉受氣」，開始烏白罵人。",
    tailo:
      "I kóng bē iânn--lâng tō “kiàn-siàu tńg siū-khì”, khai-sí oo-pe̍h mē--lâng.",
  },
  {
    hanji:
      "彼个生理人足厚譴損，不時走去彼間廟求看生理有通較順序咧無，煞毋知「尪姨順話尾，假童害眾人」，內底專是假包的童乩，予𪜶諞真濟錢去。",
    tailo:
      "Hit ê sing-lí-lâng tsiok kāu-khiàn-sńg, put-sî tsáu-khì hit king biō kiû khuànn sing-lí ū thang khah sūn-sī--leh--bô, suah m̄ tsai “ang-î sūn uē-bué, ké tâng hāi tsìng-lâng”, lāi-té tsuan sī ké-pâu ê tâng-ki, hōo in pián tsin tsē tsînn--khì.",
  },
  {
    hanji:
      "學務主任為著欲「刣雞教猴」，就共偷走學的學生叫起去司令台教示予眾人看。",
    tailo:
      "Ha̍k-bū tsú-jīm uī-tio̍h beh “thâi-ke-kà-kâu”, tō kā thau-tsáu-o̍h ê ha̍k-sing kiò khí-khì su-līng-tâi  kà-sī hōo tsìng-lâng khuànn.",
  },
  {
    hanji: "阮兜巷仔口彼擔臭豆腐，食過的人攏「呵咾甲會觸舌」。",
    tailo:
      "Guán tau hāng-á-kháu hit tànn tshàu-tāu-hū, tsia̍h--kuè ê lâng lóng “o-ló kah ē tak-tsi̍h”.",
  },
  {
    hanji:
      "現此時國內外的經濟誠䆀，股市一直落，若欲向股票閣起價，袂輸是「和尚頭掠蝨母」，誠僫咧。",
    tailo:
      "Hiān-tshú-sî kok-lāi-guā ê king-tsè tsiânn bái, kóo-tshī it-ti̍t lo̍h, nā beh ǹg kóo-phiò koh khí-kè, bē-su sī “huê-siūnn thâu lia̍h sat-bó”, tsiânn oh--leh.",
  },
  {
    hanji: "現現都伊先出手的，今煞「拍人喝救人」，偷偷仔走去共老師投。",
    tailo:
      "Hiān-hiān to i sing tshut-tshiú--ê, tann suah “phah lâng huah-kiù-lâng”, thau-thau-á tsáu-khì kā lāu-su tâu.",
  },
  {
    hanji:
      "人講：「拍虎掠賊也著親兄弟。」咱甲有緣做親兄弟矣，同齊拍拚、互相鼓勵，定著會度過這个難關。",
    tailo:
      "Lâng kóng, “Phah hóo lia̍h tsha̍t iā tio̍h tshin hiann-tī.” Lán kah ū-iân tsò tshin hiann-tī--ah, tâng-tsê phah-piànn, hōo-siong kóo-lē, tiānn-tio̍h ē tōo-kuè tsit ê lân-kuan.",
  },
  {
    hanji:
      "無人愛失敗，毋過失敗的經驗會予咱得著教訓、揣出成功的方法，人定定咧講「拍斷手骨顛倒勇」，就是這个意思。",
    tailo:
      "Bô lâng ài sit-pāi, m̄-koh sit-pāi ê king-giām ē hōo lán tit-tio̍h kàu-hùn, tshuē-tshut sîng-kong ê hong-huat, lâng tiānn-tiānn teh kóng “phah-tn̄g tshiú-kut tian-tò ióng”, tō sī tsit ê ì-sù.",
  },
  {
    hanji:
      "食頭路人中年失業，真歹揣著新頭路，有的人「拍斷手骨顛倒勇」，改行做小生理，家己做頭家，免驚見予人刣頭。",
    tailo:
      "Tsia̍h-thâu-lōo-lâng tiong-liân sit-gia̍p, tsin pháinn tshuē-tio̍h sin thâu-lōo, ū ê lâng “phah-tn̄g tshiú-kut tian-tò ióng”, kái-hâng tsò sió-sing-lí, ka-kī tsò thâu-ke, bián kiann-kìnn hōo lâng thâi-thâu.",
  },
  {
    hanji:
      "伊逐暗攏走甲無看著人，閣凊彩應講下暗欲共咱鬥相共，我看伊是咧「放屁安狗心」爾爾，咱毋通向望伊。",
    tailo:
      "I ta̍k-àm lóng tsáu kah bô khuànn-tio̍h lâng, koh tshìn-tshái ìn kóng e-àm beh kā lán tàu-sann-kāng, guá khuànn i sī teh “pàng-phuì an káu sim” niā-niā, lán m̄-thang ǹg-bāng--i.",
  },
  {
    hanji:
      "你不時佮人應酬，閣定定講「杯底毋通飼金魚」，按呢久來，身體哪會堪得？",
    tailo:
      "Lí put-sî kah lâng ìng-siû, koh tiānn-tiānn kóng “pue-té m̄-thang tshī kim-hî”, án-ne kú--lâi, sin-thé ná ē-kham--tit?",
  },
  {
    hanji:
      "雖然出世的家庭有好額散的差別，毋過人講：「狗無嫌主人散。」爸母栽培囡仔的心血攏是仝款的，毋但袂使嫌，閣較愛寶惜。",
    tailo:
      "Sui-jiân tshut-sì ê ka-tîng ū hó-gia̍h-sàn ê tsha-pia̍t, m̄-koh lâng kóng, “Káu bô hiâm tsú-lâng sàn.” Pē-bú tsai-puê gín-á ê sim-hiat lóng sī kāng-khuán--ê, m̄-nā bē-sái hiâm, koh-khah ài pó-sioh.",
  },
  {
    hanji:
      "伊這陣手扭著，無才調去工地做粗重的，就允一寡較輕可的穡頭轉來厝裡做，「罔趁較袂散」，嘛較贏規工佇厝裡閒仙仙。",
    tailo:
      "I tsit-tsūn tshiú láu--tio̍h, bô tsâi-tiāu khì kang-tē tsò tshoo-tāng--ê, tō ín tsi̍t-kuá khah khin-khó ê sit-thâu tńg-lâi tshù--lí tsò, “bóng thàn khah bē sàn”, mā khah iânn kui-kang tī tshù--lí îng-sian-sian.",
  },
  {
    hanji:
      "人生的路途起起落落，俗語講：「花無百日紅，人無千日好。」咱人好空的時毋通傷風神，歹空的時嘛莫餒志，按呢才是健康的生活態度。",
    tailo:
      "Jîn-sing ê lōo-tôo khí-khí-lo̍h-lo̍h, sio̍k-gí kóng, “Hue bô pah ji̍t âng, lâng bô tshian ji̍t hó.” Lán-lâng hó-khang ê sî m̄-thang siunn hong-sîn, pháinn-khang ê sî mā mài lué-tsì, án-ne tsiah-sī kiān-khong ê sing-ua̍h thāi-tōo.",
  },
  {
    hanji:
      "做外交的，若是業績好，升官加薪一直來，毋過「花無百日紅，人無千日好」，若拄著時機䆀，業績無好，就愛趁機會學習、成長，才袂予人叫轉去食家己。",
    tailo:
      "Tsò guā-kau--ê, nā-sī gia̍p-tsik hó, sing-kuann ka-sin it-ti̍t lâi, m̄-koh “hue bô pah ji̍t âng, lâng bô tshian ji̍t hó”, nā tú-tio̍h sî-ki bái, gia̍p-tsik bô hó, tō ài thàn ki-huē ha̍k-si̍p, sîng-tióng, tsiah bē hōo lâng kiò tńg-khì tsia̍h-ka-kī.",
  },
  {
    hanji:
      "你毋通靠勢有倩老師來厝裡共你教，你就會用得凊凊彩彩，人講：「近山剉無柴，近溪擔無水。」若無認真拍拚，時到你的成績猶是袂進步。",
    tailo:
      "Lí m̄-thang khò-sè ū tshiànn lāu-su lâi tshù--lí kā lí kà, lí tō ē-īng-tit tshìn-tshìn-tshái-tshái, lâng kóng, “Kīn suann tshò bô tshâ, kīn khe tann bô tsuí.” Nā bô jīn-tsin phah-piànn, sî kàu lí ê sîng-tsik iáu-sī bē tsìn-pōo.",
  },
  {
    hanji:
      "俗語講：「近水知魚性，近山識鳥音。」伊都自細漢綴𪜶爸母佇紡織廠做工課，這陣毋才會對織布這方面的工課遮爾熟手。",
    tailo:
      "Sio̍k-gí kóng, “Kīn suí ti gû sìng, kīn san sik niáu im.” I to tsū sè-hàn tuè in pē-bú tī pháng-tsit-tshiúnn tsò khang-khuè, tsit-tsūn m̄-tsiah ē tuì tsit-pòo tsit hong-bīn ê khang-khuè tsiah-nī si̍k-tshiú.",
  },
  {
    hanji:
      "阮遮山跤一間廟，不時有人對足遠的所在來咧拜，顛倒阮遮的人攏毋捌去共拜，這就是人講的「近廟欺神」。",
    tailo:
      "Guán tsia suann-kha tsi̍t king biō, put-sî ū lâng tuì tsiok hn̄g ê sóo-tsāi lâi teh pài, tian-tó guán tsia ê lâng lóng m̄ bat khì kā pài, tse tō sī lâng kóng--ê “kīn biō khi sîn”.",
  },
  {
    hanji:
      "大厝宅的囝孫仔有無仝款的面腔，有人是「涼傘雖破，骨格原在」，使人尊重；有人是賣田賣厝，予人講閒仔話。",
    tailo:
      "Tuā tshù-the̍h ê kiánn-sun-á ū bô kāng-khuán ê bīn-tshiunn, ū lâng sī “niû-suànn sui phuà, kut-keh guân-tsāi”, sú lâng tsun-tiōng; ū lâng sī bē tshân bē tshù, hōo lâng kóng îng-á-uē.",
  },
  {
    hanji:
      "外媽𪜶厝是有六龍的大厝起，三十年前因為大路欲楦闊，護龍予人削兩龍去，外埕開做大車路。總是「涼傘雖破，骨格原在」，入去厝內猶原看會著較早的氣派。",
    tailo:
      "Guā-má in tshù sī ū la̍k lîng ê tuā-tshù-khí, sann-tsa̍p nî tsîng in-uī tuā-lōo beh hùn-khuah, hōo-lîng hōo lâng siah nn̄g lîng--khì, guā-tiânn khui-tsò tuā tshia-lōo. Tsóng--sī “niû-suànn sui phuà, kut-keh guân-tsāi”, ji̍p-khì tshù-lāi iu-guân khuànn ē tio̍h khah-tsá ê khì-phài.",
  },
  {
    hanji:
      "百貨公司定會佇年尾拍折大俗賣，俗語講：「俗物食破家。」咱毋通貪著物件俗就拚性命買，若無，時到家伙會去了了。",
    tailo:
      "Pah-huè kong-si tiānn ē tī nî-bué phah-tsiat tuā-sio̍k-bē, sio̍k-gí kóng, “Sio̍k-mi̍h tsia̍h phuà ke.” Lán m̄-thang tham-tio̍h mi̍h-kiānn sio̍k tō piànn-sènn-miā bé, nā-bô, sî kàu ke-hué ē khì-liáu-liáu.",
  },
  {
    hanji: "人咧講：「俗物無好貨。」你猶是閣加比較幾間仔按呢較實在啦。",
    tailo:
      "Lâng teh kóng, “Sio̍k-mi̍h bô hó huè.” Lí iáu-sī koh ke pí-kàu--kuí-king-á án-ne khah si̍t-tsāi--lah.",
  },
  {
    hanji:
      "伊真有才情，煞予人怨妒，重要的工課攏無伊的份，俗語講：「勇勇馬縛佇將軍柱。」才會一直袂當出頭。",
    tailo:
      "I tsin ū tsâi-tsîng, suah hōo lâng uàn-tòo, tiōng-iàu ê khang-khuè lóng bô i ê hūn, sio̍k-gí kóng, “Ióng-ióng bé pa̍k tī tsiong-kun-thiāu.” Tsiah ē it-ti̍t bē-tàng tshut-thâu.",
  },
  {
    hanji:
      "你莫看伊規工恬恬，對人攏誠客氣，「會咬人的狗袂吠」，我捌予伊揲甲走無路通去。",
    tailo:
      "Lí mài khuànn i kui-kang tiām-tiām, tuì lâng lóng tsiânn kheh-khì, “ē kā--lâng ê káu bē puī”, guá bat hōo i tia̍p kah tsáu bô-lōo thang khì.",
  },
  {
    hanji:
      "雖然伊猶閣欠你真濟錢，毋過人都已經死矣，「怨生無怨死」，你就準拄好去矣啦！",
    tailo:
      "Sui-jiân i iáu-koh khiàm lí tsin tsē tsînn, m̄-koh lâng to í-king sí--ah, “uàn senn bô uàn sí”, lí tō tsún-tú-hó--khì--ah--lah!",
  },
  {
    hanji:
      "伊看著真閉思，朋友想講伊會交無女朋友，啥人知伊「恬恬食三碗公半」，逐家猶閣是十一哥，伊就已經欲放帖仔矣。",
    tailo:
      "I khuànn tio̍h tsin pì-sù, pîng-iú siūnn-kóng i ē kau-bô lú-pîng-iú, siánn-lâng tsai i “tiām-tiām tsia̍h sann uánn-kong puànn”, ta̍k-ke iáu-koh sī tsa̍p-it-ko, i tō í-king beh pàng-thiap-á--ah.",
  },
  {
    hanji:
      "人講：「春天後母面，欲變一時間。」今年的春天就像按呢，連鞭寒、連鞭熱。",
    tailo:
      "Lâng kóng, “Tshun-thinn āu-bú-bīn, beh piàn tsi̍t-sî-kan.” Kin-nî ê tshun-thinn tō tshiūnn án-ne, liâm-mi kuânn, liâm-mi jua̍h.",
  },
  {
    hanji:
      "今仔日，下早仔寒，欲晝的時熱，下晡落雨毛仔，予阮感受著「春天後母面，欲變一時間」的天氣。",
    tailo:
      "Kin-á-ji̍t, e-tsái-á kuânn, beh tàu ê sî jua̍h, ē-poo lo̍h hōo-mn̂g-á, hōo guán kám-siū-tio̍h “tshun-thinn āu-bú-bīn, beh piàn tsi̍t-sî-kan” ê thinn-khì.",
  },
  {
    hanji:
      "俗語講：「春雺曝死鬼，夏雺做大水。」這是老祖先的經驗談。現代社會有氣象局，比遮的話閣較科學，會當提來檢驗這寡話的正確性。",
    tailo:
      "Sio̍k-gí kóng, “Tshun bông pha̍k-sí kuí, hā bông tsò-tuā-tsuí.” Tse sī lāu tsóo-sian ê king-giām tâm. Hiān-tāi siā-huē ū khì-siōng-kio̍k, pí tsia-ê uē koh-khah kho-ha̍k, ē-tàng the̍h-lâi kiám-giām tsit kuá uē ê tsìng-khak-sìng.",
  },
  {
    hanji:
      "俗語講：「是毋是，罵家己。」囡仔若和人冤家，愛𤆬轉來家己教示，才袂予人講咱攔家己的囡仔這爿。",
    tailo:
      "Sio̍k-gí kóng, “Sī m̄ sī, mē ka-kī.” Gín-á nā hām lâng uan-ke, ài tshuā tńg-lâi ka-kī kà-sī, tsiah bē hōo lâng kóng lán ânn ka-kī ê gín-á tsit pîng.",
  },
  {
    hanji:
      "𪜶牽的大伊八歲，對伊有夠體貼，兄弟仔伴就共詼講：「某大姊，坐金交椅。」幸福無比止。",
    tailo:
      "In khan--ê tuā i peh huè, tuì i ū-kàu thé-thiap, hiann-tī-á-phuānn tō kā khue kóng, “Bóo-tuā-tsí, tsē kim kau-í.” Hīng-hok bô-pí-tsí.",
  },
  {
    hanji:
      "現此時做人爸母的，愛有「查埔也著疼，查某也著晟」的觀念，仙都毋通大細心，較免予囝兒序細怨嘆袂煞。",
    tailo:
      "Hiān-tshú-sî tsò lâng pē-bú--ê, ài ū “tsa-poo iā tio̍h thiànn, tsa-bóo iā tio̍h tshiânn” ê kuan-liām, sian to m̄-thang tuā-sè-sim, khah bián hōo kiánn-jî sī-sè uàn-thàn bē suah.",
  },
  {
    hanji:
      "現此時講究兩性平等，後生佮查某囝的權利攏仝款，彼款「查埔囝得田園，查某囝得嫁粧」的舊例，今攏退時矣。",
    tailo:
      "Hiān-tshú-sî káng-kiù lióng-sìng pîng-tíng, hāu-senn kah tsa-bóo-kiánn ê khuân-lī lóng kāng-khuán, hit khuán “tsa-poo-kiánn tit tshân-hn̂g, tsa-bóo-kiánn tit kè-tsng” ê kū-lē, tann lóng thè-sî--ah.",
  },
  {
    hanji:
      "時機無好，頭路僫揣，這馬若有人欲倩就愛去做，毋通「歪喙雞食好米」，閣想欲佇遐揀東揀西。",
    tailo:
      "Sî-ki bô hó, thâu-lōo oh tshuē, tsit-má nā ū lâng beh tshiànn tō ài khì tsò, m̄-thang “uai-tshuì ke tsia̍h hó bí”, koh siūnn-beh tī hia kíng-tang-kíng-sai.",
  },
  {
    hanji:
      "老師欲共王梨酥分予阮這班的學生，就共「相分食有賰，相搶食無份」的道理講予逐家知，隨按總人額，落去分伻，較袂相搶食。",
    tailo:
      "Lāu-su beh kā ông-lâi-soo pun hōo guán tsit pan ê ha̍k-sing, tō kā “sio-pun tsia̍h ū tshun, sio-tshiúnn tsia̍h bô hūn” ê tō-lí kóng hōo ta̍k-ke tsai, suî àn tsóng lâng-gia̍h, lo̍h-khì pun-phenn, khah bē sio-tshiúnn tsia̍h.",
  },
  {
    hanji:
      "命理的代誌是烏面賊閣無人捌，看命仙共人算命攏真知影這號齣頭，會加講幾句仔好話予人客歡喜，按呢𪜶才有錢通趁，毋才講「相命無褒，食水都無」，看命仙就是倚靠這步咧賺食的。",
    tailo:
      "Miā-lí ê tāi-tsì sī oo-bīn-tsha̍t koh bô lâng bat, khuànn-miā-sian kā lâng sǹg-miā lóng tsin tsai-iánn tsit-lō tshut-thâu, ē ke kóng kuí-kù-á hó-uē hōo lâng-kheh huann-hí, án-ne in tsiah ū tsînn thang thàn, m̄-tsiah kóng “siòng-miā bô po, tsia̍h tsuí to bô”, khuànn-miā-sian tō sī uá-khò tsit pōo teh tsuán-tsia̍h--ê.",
  },
  {
    hanji:
      "俗語講：「相罵無揀喙，相拍無揀位。」咱若意見袂合的時，毋通連鞭發性地，才袂冤甲感情拍歹了了去。",
    tailo:
      "Sio̍k-gí kóng, “Sio-mē bô kíng tshuì, sio-phah bô kíng uī.” Lán nā ì-kiàn bē ha̍h ê sî, m̄-thang liâm-mi huat-sìng-tē, tsiah bē uan kah  kám-tsîng phah-pháinn-liáu-liáu--khì.",
  },
  {
    hanji:
      "彼是𪜶兩人的恩怨，你是毋通去鬥鬧熱唅，俗語講：「看人食肉，毋通看人相拍。」你猶是莫插較無代！",
    tailo:
      "He sī in nn̄g lâng ê un-uàn, lí sī m̄-thang khì tàu-lāu-jia̍t--hannh, sio̍k-gí kóng, “Khuànn lâng tsia̍h bah, m̄-thang khuànn lâng sio-phah.” Lí iáu-sī mài tshap khah bô tāi!",
  },
  {
    hanji:
      "時裝的款式千變萬化，毋過人講：「紅媠，烏大範。」拄著喜事鬧熱擺，上影目的猶原是烏色的西裝、紅色的洋裝。",
    tailo:
      "Sî-tsong ê khuán-sik tshian-piàn-bān-huà, m̄-koh lâng kóng, “Âng suí, oo tuā-pān.” Tú-tio̍h hí-sū lāu-jia̍t-pái, siōng iánn-ba̍k--ê iu-guân sī oo-sik ê se-tsong, âng-sik ê iûnn-tsong.",
  },
  {
    hanji:
      "伊干焦讀幾本外語冊，就欲允頭路做口譯的工課，實在是「胡蠅舞屎桮」！",
    tailo:
      "I kan-na tha̍k kuí pún guā-gí tsheh, tō beh ín-thâu-lōo tsò kháu-i̍k ê khang-khuè, si̍t-tsāi sī “hôo-sîn bú sái-pue”!",
  },
  {
    hanji:
      "伊佇孤兒院大漢，受著真濟人的捐助。大漢了後事業做了真成功，伊知影「食人一口，報人一斗」的道理，嘛捐足濟錢幫助需要贊助的孤兒。",
    tailo:
      "I tī koo-jî-īnn tuā-hàn, siū-tio̍h tsin tsē lâng ê kuan-tsōo. Tuā-hàn liáu-āu sū-gia̍p tsò liáu tsin sîng-kong, i tsai-iánn “tsia̍h lâng tsi̍t kháu, pò lâng tsi̍t táu” ê tō-lí, mā kuan tsiok tsē tsînn pang-tsōo su-iàu tsàn-tsōo ê koo-jî.",
  },
  {
    hanji:
      "人講：「食人一斤，也著還人四兩。」多謝你頂過遐爾熱心鬥相共，這淡薄仔意思請你收起來。",
    tailo:
      "Lâng kóng, “Tsia̍h lâng tsi̍t kin, iā tio̍h hîng lâng sì niú.” To-siā lí tíng-kuè hiah-nī jia̍t-sim tàu-sann-kāng, tse tām-po̍h-á ì-sù tshiánn lí siu--khí-lâi.",
  },
  {
    hanji:
      "俗語講：「食人一斤，也著還人四兩。」定定收人的物件，你後擺欲提啥物還人？",
    tailo:
      "Sio̍k-gí kóng, “Tsia̍h lâng tsi̍t kin, iā tio̍h hîng lâng sì niú.” Tiānn-tiānn siu lâng ê mi̍h-kiānn, lí āu-pái beh the̍h siánn-mih hîng--lâng?",
  },
  {
    hanji:
      "各位親情朋友、先進序大，我「食人頭鍾酒，講人頭句話」有較僭權，今仔日是主人家七十歲大壽，咱逐家祝伊平安順序食百二。",
    tailo:
      "Kok-uī tshin-tsiânn pîng-iú, sian-tsìn sī-tuā, guá “tsia̍h lâng thâu tsing tsiú, kóng lâng thâu kù uē” ū khah tsiàm-khuân, kin-á-ji̍t sī tsú-jîn-ka tshit-tsa̍p huè tuā-siū, lán ta̍k-ke tsiok i pîng-an sūn-sī tsia̍h pah-jī.",
  },
  {
    hanji:
      "臺灣的王梨酥，因為逐家「食好鬥相報」，這馬已經成做觀光客上愛買的等路矣。",
    tailo:
      "Tâi-uân ê ông-lâi-soo, in-uī ta̍k-ke “tsia̍h hó tàu sio-pò”, tsit-má í-king tsiânn-tsò kuan-kong-kheh siōng ài bé ê tán-lōo--ah.",
  },
  {
    hanji:
      "一粒便當趁人十箍銀，閣去予人嫌講傷貴，真正是「食米毋知米價」。",
    tailo:
      "Tsi̍t lia̍p piān-tong thàn lâng tsa̍p khoo gîn, koh khì hōo lâng hiâm kóng siunn kuì, tsin-tsiànn sī “tsia̍h bí m̄ tsai bí kè”.",
  },
  {
    hanji:
      "阮兜的三頓攏我咧發落，阮翁佮囡仔攏干焦知影通食，有時閣會嫌無好料的通拜牙槽神，真正是「食米毋知米價」。",
    tailo:
      "Guán tau ê sann tǹg lóng guá teh hua̍t-lo̍h, guán ang kah gín-á lóng kan-na tsai-iánn thang tsia̍h, ū-sî koh ē hiâm bô hó-liāu--ê thang pài gê-tsô-sîn, tsin tsiànn sī “tsia̍h bí m̄ tsai bí kè”.",
  },
  {
    hanji:
      "伊出身孤兒院，佳哉有一寡善心人士共伊照顧，大漢了後嘛知通「食果子拜樹頭；食米飯拜田頭」，定定轉去做義工。",
    tailo:
      "I tshut-sin koo-jî-īnn, ka-tsài ū tsi̍t-kuá siān-sim jîn-sū kā i tsiàu-kòo, tuā-hàn liáu-āu mā tsai thang “tsia̍h kué-tsí pài tshiū-thâu; tsia̍h bí-pn̄g pài tshân-thâu”, tiānn-tiānn tńg-khì tsò gī-kang.",
  },
  {
    hanji: "你毋通隨食飽就閣食冰、食四秀仔，才袂「食甜食鹹，臭跤鼻臁」。",
    tailo:
      "Lí m̄-thang suî tsia̍h-pá tō koh tsia̍h ping, tsia̍h sì-siù-á, tsiah bē “tsia̍h tinn tsia̍h kiâm, tshàu kha-phīnn-liâm”.",
  },
  {
    hanji:
      "請人客大魚大肉真豐沛，毋過人咧講：「食魚食肉，也著菜佮。」若無，營養無平均，去倒害。",
    tailo:
      "Tshiánn-lâng-kheh tuā-hî-tuā-bah tsin phong-phài, m̄-koh lâng teh kóng, “Tsia̍h hî tsia̍h bah, iā tio̍h tshài kah.” Nā-bô, îng-ióng bô pîng-kin, khì-tò hāi.",
  },
  {
    hanji:
      "阿明開店做生理有趁著一點仔錢，就想欲借錢開連鎖店，𪜶某緊共擋講，你毋通「食無三把蕹菜，就欲上西天」。",
    tailo:
      "A-bîng khui-tiàm tsò-sing-lí ū thàn-tio̍h tsi̍t-tiám-á tsînn, tō siūnn-beh tsioh tsînn khui liân-só-tiàm, in bóo kín kā tòng kóng, lí m̄-thang “tsia̍h bô sann pé ìng-tshài, tō beh tsiūnn se-thian”.",
  },
  {
    hanji:
      "浴間仔的水道頭咧漏水，阮仙舞都袂好勢，結局阮阿爸攑活扳仔共鎖予絚，一下手就好勢溜溜，有影是「食著藥，青草一葉；食毋著藥，人參一石」。",
    tailo:
      "I̍k-king-á ê tsuí-tō-thâu teh lāu tsuí, guán sian bú to bē hó-sè, kiat-kio̍k guán a-pah gia̍h ua̍h-pán-á kā só hōo ân, tsi̍t-ē-tshiú tō hó-sè-liu-liu, ū-iánn sī “tsia̍h tio̍h io̍h, tshenn-tsháu tsi̍t hio̍h; tsia̍h m̄-tio̍h io̍h, jîn-sim tsi̍t tsio̍h”.",
  },
  {
    hanji:
      "「食飯皇帝大」，當咧食飯莫唸東唸西，若欲教示囡仔，食飯飽才講。",
    tailo:
      "“Tsia̍h-pn̄g hông-tè tuā”, tng-teh tsia̍h-pn̄g mài liām-tang-liām-sai, nā beh kà-sī gín-á, tsia̍h-pn̄g pá tsiah kóng.",
  },
  {
    hanji:
      "頭家足信任伊，予伊做主管，想袂到伊煞予人買收，共公司欲去投標的標金透露予對手的公司，有影是「食碗內，說碗外」。",
    tailo:
      "Thâu-ke tsiok sìn-jīm--i, hōo i tsò tsú-kuán, siūnn-bē-kàu i suah hōo lâng bé-siu, kā kong-si beh khì tâu-pio ê pio-kim thàu-lōo hōo tuì-tshiú ê kong-si, ū-iánn sī “tsia̍h uánn-lāi, sueh uánn-guā”.",
  },
  {
    hanji: "李的足好心閣足客氣，講伊做志工干焦是咧「食飽換枵」爾爾。",
    tailo:
      "Lí--ê tsiok hó-sim koh tsiok kheh-khì, kóng i tsò tsì-kang kan-na sī teh “tsia̍h-pá uānn iau” niā-niā.",
  },
  {
    hanji: "退休遐久矣，閣叫我落去舞遐大注，我都毋是咧「食飽換枵」閣。",
    tailo:
      "Thè-hiu hiah kú--ah, koh kiò guá lo̍h-khì bú hiah tuā tù, guá to m̄ sī teh “tsia̍h-pá uānn iau” koh.",
  },
  {
    hanji:
      "人講：「食緊挵破碗。」做代誌毋好按呢兇兇狂狂，著先想予較斟酌咧才來做。",
    tailo:
      "Lâng kóng, “Tsia̍h-kín lòng-phuà uánn.” Tsò tāi-tsì m̄-hó án-ne hiong-hiong-kông-kông, tio̍h sing siūnn hōo khah tsim-tsiok--leh tsiah lâi tsò.",
  },
  {
    hanji:
      "做代誌若干焦想欲趕緊成功，煞無欲照步來，是會「食緊挵破碗」喔！",
    tailo:
      "Tsò tāi-tsì nā kan-na siūnn-beh kuánn-kín sîng-kong, suah bô beh tsiàu-pōo-lâi, sī ē “tsia̍h-kín lòng-phuà uánn”--ooh!",
  },
  {
    hanji:
      "古早嫁娶的風俗誠心適，新娘暗頓愛佇房間內底食，好命婆捀幾項仔飯菜入來，有雞肉、鰇魚，閣會講好話：「食雞，會起家；食鰇魚，生囡仔好育飼。」予新娘止飢兼祝賀。",
    tailo:
      "Kóo-tsá kè-tshuā ê hong-sio̍k tsiânn sim-sik, sin-niû àm-tǹg ài tī pâng-king lāi-té tsia̍h, hó-miā-pô phâng kuí-hāng-á pn̄g-tshài ji̍p--lâi, ū ke-bah, jiû-hî, koh ē kóng hó-uē, “Tsia̍h ke, ē khí-ke; tsia̍h jiû-hî, senn gín-á hó io-tshī.” Hōo sin-niû tsí-ki kiam tsiok-hō.",
  },
  {
    hanji:
      "你看彼个查埔囡仔目睭金金咧相彼塊紅龜粿，喙瀾強欲津落來矣，閣「枵鬼假細膩」講伊無愛食。",
    tailo:
      "Lí khuànn hit ê tsa-poo gín-á ba̍k-tsiu  kim-kim teh siòng hit tè âng-ku-kué, tshuì-nuā kiōng-beh tin--lo̍h-lâi--ah, koh “iau-kuí ké sè-jī” kóng i bô ài tsia̍h.",
  },
  {
    hanji:
      "阿德，逐家攏嘛知影你熱心閣愛出風頭，老師問講啥人欲做班長，你毋就緊攑手，莫閣「枵鬼假細膩」矣啦！",
    tailo:
      "A-tik, ta̍k-ke lóng mā tsai-iánn lí jia̍t-sim koh ài tshut-hong-thâu, lāu-su mn̄g kóng siánn-lâng beh tsò pan-tiúnn, lí m̄-tō kín gia̍h-tshiú, mài koh “iau-kuí ké sè-jī”--ah--lah!",
  },
  {
    hanji:
      "現代人囡仔生少，攏嘛顧牢牢、惜命命，有時就會寵倖過頭。人講「倖豬夯灶，倖囝不孝」，現代爸母著愛謹記在心。",
    tailo:
      "Hiān-tāi-lâng gín-á senn tsió, lóng mā kòo-tiâu-tiâu, sioh-miā-miā, ū-sî tō ē thíng-sīng kuè-thâu. Lâng kóng “sīng ti giâ tsàu, sīng kiánn put-hàu”, hiān-tāi pē-bú tio̍h-ài kín-kì tsāi sim.",
  },
  {
    hanji:
      "𪜶翁仔某足疼囝，囡仔吵欲挃啥就予伊，這馬𪜶老矣身體無好，囡仔攏講無閒通來看𪜶，有影是「倖豬夯灶，倖囝不孝」。",
    tailo:
      "In ang-á-bóo tsiok thiànn kiánn, gín-á tshá beh ti̍h siánn tō hōo--i, tsit-má in lāu--ah sin-thé bô hó, gín-á lóng kóng bô-îng thang lâi khuànn--in, ū-iánn sī “sīng ti giâ tsàu, sīng kiánn put-hàu”.",
  },
  {
    hanji:
      "你毋通叫是彼个少年家「倒吊無墨水」呢，人伊讀冊誠綿爛，學問飽滇閣袂臭屁。",
    tailo:
      "Lí m̄-thang kiò-sī hit ê siàu-liân-ke “tò-tiàu bô ba̍k-tsuí”--neh, lâng i tha̍k-tsheh tsiânn mî-nuā, ha̍k-būn pá-tīnn koh bē tshàu-phuì.",
  },
  {
    hanji:
      "𪜶兩个定定咧冤家，啥人知序細因為定定見面，互相意愛，去登記結婚，煞「冤家變親家」。",
    tailo:
      "In nn̄g ê tiānn-tiānn teh uan-ke, siánn-lâng tsai sī-sè in-uī tiānn-tiānn kìnn-bīn, hōo-siong ì-ài, khì ting-kì kiat-hun, suah “uan-ke piàn tshin-ke”.",
  },
  {
    hanji:
      "這兩个頭家本成為著搶生理來起呸面，想袂到這馬煞「冤家變親家」，合股做生理。",
    tailo:
      "Tsit nn̄g ê thâu-ke pún-tsiânn uī-tio̍h tshiúnn sing-lí lâi khí-phuì-bīn, siūnn-bē-kàu tsit-má suah “uan-ke piàn tshin-ke”, ha̍p-kóo tsò-sing-lí.",
  },
  {
    hanji:
      "咱做人愛有「家己栽一欉，較贏看別人」的志氣，萬事靠家己，骨力拍拚，才有成功的一工。",
    tailo:
      "Lán tsò-lâng ài ū “ka-kī tsai tsi̍t tsâng, khah iânn khuànn pa̍t-lâng” ê tsì-khì, bān-sū khò ka-kī, kut-la̍t phah-piànn, tsiah ū sîng-kong ê tsi̍t kang.",
  },
  {
    hanji:
      "家己的囝無教示，不時卸世卸眾，閣敢罵厝邊的囡仔歹家教，免講嘛予人剾洗，人講「家己捧屎抹面」就是這款。",
    tailo:
      "Ka-kī ê kiánn bô kà-sī, put-sî sià-sì-sià-tsìng, koh kánn mē tshù-pinn ê gín-á pháinn ka-kàu, bián-kóng mā hōo lâng khau-sé, lâng kóng “ka-kī phóng-sái buah-bīn” tō sī tsit khuán.",
  },
  {
    hanji:
      "咱做人毋通傷膨風，做袂到的代誌千萬毋通講大聲話，若無，是會「家己捧屎抹面」。",
    tailo:
      "Lán tsò-lâng m̄-thang siunn phòng-hong, tsò bē kàu ê tāi-tsì tshian-bān m̄-thang kóng tuā-siann-uē, nā-bô, sī ē “ka-kī phóng-sái buah-bīn”.",
  },
  {
    hanji:
      "俗語講：「家和萬事興，家亂萬世窮。」因為家庭是每一个人閃風覕雨的所在，家庭和諧氣氛好，人就會快活，做事業毋才會順序。",
    tailo:
      "Sio̍k-gí kóng, “Ka hô bān-sū hing, ka luān bān-sè kîng.” In-uī ka-tîng sī muí tsi̍t ê lâng siám-hong bih-hōo ê sóo-tsāi, ka-tîng hô-hâi khì-hun hó, lâng tō ē khuìnn-ua̍h, tsò sū-gia̍p m̄-tsiah ē sūn-sī.",
  },
  {
    hanji:
      "恁毋通閣冤矣啦，人講「家和萬事興，家亂萬世窮」，一家伙仔若是像恁按呢冤家量債，這个家庭早慢會落衰。",
    tailo:
      "Lín m̄-thang koh uan--ah--lah, lâng kóng “ka hô bān-sū hing, ka luān bān-sè kîng”, tsi̍t-ke-hué-á nā-sī tshiūnn lín án-ne uan-ke-niû-tsè, tsit ê ka-tîng tsá-bān ē lo̍h-sue.",
  },
  {
    hanji:
      "俗語講：「時到時擔當，無米才煮番薯湯。」這馬煩惱起來囥嘛無較縒，時到便看，才來決定欲按怎做。",
    tailo:
      "Sio̍k-gí kóng, “Sî kàu sî tam-tng, bô bí tsiah tsú han-tsî-thng.” Tsit-má huân-ló khí-lâi khǹg mā bô-khah-tsua̍h, sî kàu piān-khuànn, tsiah lâi kuat-tīng beh án-tsuánn tsò.",
  },
  {
    hanji:
      "偏僻地區的學校學生少，教職員嘛少，學校內面一个人著兼幾若个工課，就會像人所講的「校長兼摃鐘」。",
    tailo:
      "Phian-phiah tē-khu ê ha̍k-hāu ha̍k-sing tsió, kàu-tsit-uân mā tsió, ha̍k-hāu lāi-bīn tsi̍t ê lâng tio̍h kiam kuí-nā ê khang-khuè, tō ē tshiūnn lâng sóo kóng--ê “hāu-tiúnn kiam kòng tsing”.",
  },
  {
    hanji:
      "店面拄開張無偌久，生理好甲，店長嘛「校長兼摃鐘」，佮遐的辛勞仝款，無閒咧應付開幕這段期間的人客。",
    tailo:
      "Tiàm-bīn tú khai-tiong bô-guā-kú, sing-lí hó kah, tiàm-tiúnn mā “hāu-tiúnn kiam kòng tsing”, kah hia-ê sin-lô kāng-khuán, bô-îng teh ìng-hù khui-bōo tsit tuānn kî-kan ê lâng-kheh.",
  },
  {
    hanji:
      "彼間公司的頭家倩阿勇做辛勞，毋但攢三頓予伊食，月俸嘛有照起工發，阿勇煞四界共人講這間公司誠凍霜，正港是「桌頂食飯，桌跤放屎」。",
    tailo:
      "Hit king kong-si ê thâu-ke tshiànn A-ióng tsò sin-lô, m̄-nā tshuân sann tǹg hōo i tsia̍h, gue̍h-hōng mā ū tsiàu-khí-kang huat, A-ióng suah sì-kè kā lâng kóng tsit king kong-si tsiânn tàng-sng, tsiànn-káng sī “toh-tíng tsia̍h-pn̄g, toh-kha pàng-sái”.",
  },
  {
    hanji:
      "拄著無講情理的人，咱毋通受氣，參伊一直計較，「氣死驗無傷」，伊也免擔責任，咱何必家己討艱苦。",
    tailo:
      "Tú-tio̍h bô kóng tsîng-lí ê lâng, lán m̄-thang siū-khì, tsham i it-ti̍t kè-kàu, “khì-sí giām bô siong”, i iā bián tann tsik-jīm, lán hô-pit ka-kī thó kan-khóo.",
  },
  {
    hanji:
      "天地萬物攏通做咱人的老師，親像「烏仔魚搢水」就啟示咱愛向困難挑戰。",
    tailo:
      "Thinn-tē bān-bu̍t lóng thang tsò lán-lâng ê lāu-su, tshin-tshiūnn “oo-á-hî tsìnn tsuí” tō khé-sī lán ài hiòng khùn-lân thiáu-tsiàn.",
  },
  {
    hanji:
      "伊雖然穿插若庄跤倯咧，毋過泅水、拍球、唱歌、演奏樂器逐項會，真正是「烏矸仔貯豆油」，予人看袂出。",
    tailo:
      "I sui-jiân tshīng-tshah ná tsng-kha-sông--leh, m̄-koh siû-tsuí, phah-kiû, tshiùnn-kua, ián-tsàu ga̍k-khì ta̍k hāng ē, tsin-tsiànn sī “oo kan-á té tāu-iû”, hōo lâng khuànn bē tshut.",
  },
  {
    hanji:
      "一个查某人參加歌唱比賽，主持人看伊大箍閣濟歲，就看伊無點，啥人知影伊「烏矸仔貯豆油」，歌聲袂輸聲樂家，佇網路世界大轟動。",
    tailo:
      "Tsi̍t ê tsa-bóo-lâng tsham-ka kua-tshiùnn pí-sài, tsú-tshî-jîn khuànn i tuā-khoo koh tsē-huè, tō khuànn i bô tiám, siánn-lâng tsai-iánn i “oo kan-á té tāu-iû”, kua-siann bē-su siann-ga̍k-ka, tī bāng-lōo sè-kài tuā hong-tōng.",
  },
  {
    hanji:
      "鹽水的蜂仔炮全國有名，佇元宵暝，逐家攏放蜂仔炮敬神，毋過人講「神明興，弟子窮」，𪜶逐口灶逐年攏著開幾萬箍放蜂仔炮。",
    tailo:
      "Kiâm-tsuí ê phang-á-phàu tsuân-kok ū-miâ, tī Guân-siau-mê, ta̍k-ke lóng pàng-phang-á-phàu kìng-sîn, m̄-koh lâng kóng “sîn-bîng hing, tē-tsú kîng”, in ta̍k kháu-tsàu ta̍k-nî lóng tio̍h khai kuí-bān khoo pàng-phang-á-phàu.",
  },
  {
    hanji:
      "做人僫，做神嘛是僫，神明若無興就無香火、無牲醴，神明著枵腹肚；神明若興咧？「神明興，弟子窮」，煞換人枵腹肚。",
    tailo:
      "Tsò lâng oh, tsò sîn mā sī oh, sîn-bîng nā bô hing tō bô hiunn-hué, bô sing-lé, sîn-bîng tio̍h iau pak-tóo; sîn-bîng nā  hing--leh? “Sîn-bîng hing, tē-tsú kîng”, suah uānn lâng iau pak-tóo.",
  },
  {
    hanji:
      "平素時伊就真𠢕膨風閣𠢕講白賊，看伊講甲喙角專泡，阮攏知影無一句是實在話，正港是「缺喙的食米粉──看現現」。",
    tailo:
      "Pîng-sòo-sî i tō tsin gâu phòng-hong koh gâu kóng-pe̍h-tsha̍t, khuànn i kóng kah tshuì-kak tsuan pho, guán lóng tsai-iánn bô tsi̍t kù sī si̍t-tsāi-uē, tsiànn-káng sī “khih-tshuì--ê tsia̍h bí-hún──khuànn-hiān-hiān”.",
  },
  {
    hanji:
      "阮查某囝欲嫁進前，我共伊開破講「翁仔某是相欠債」，愛互相尊重，婚姻才會久長。",
    tailo:
      "Guán tsa-bóo-kiánn beh kè tsìn-tsîng, guá kā i khui-phuà kóng “ang-á-bóo sī sio-khiàm-tsè”, ài hōo-siong tsun-tiōng, hun-in tsiah ē kú-tn̂g.",
  },
  {
    hanji:
      "阿美𪜶翁仔某常在咧冤家，阿美想欲離緣，逐家共伊苦勸講「翁仔某是相欠債」，愛較吞忍咧。",
    tailo:
      "A-bí in ang-á-bóo tshiâng-tsāi teh uan-ke, A-bí siūnn-beh lī-iân, ta̍k-ke kā i khóo-khǹg kóng “ang-á-bóo sī sio-khiàm-tsè”, ài khah thun-lún--leh.",
  },
  {
    hanji:
      "少年夫妻毋免驚無家伙，人所說：「翁某若仝心，烏塗變成金」。翁仔姐相楗和齊拍拚定著會成功。",
    tailo:
      "Siàu-liân hu-tshe m̄-bián kiann bô ke-hué, lâng sóo sueh, “Ang-bóo nā kāng-sim, oo-thôo piàn-sîng kim”. Ang-á-tsiá sio-kīng hô-tsê phah-piànn tiānn-tio̍h ē sîng-kong.",
  },
  {
    hanji:
      "伊本底猶算有孝，娶某了後煞變某奴，予𪜶爸母足凊心，人咧講「翁親某親，老婆仔拋捙輪」，有影都著。",
    tailo:
      "I pún-té iáu sǹg iú-hàu, tshuā-bóo liáu-āu suah piàn bóo-lôo, hōo in pē-bú tsiok tshìn-sim, lâng teh kóng “ang tshin bóo tshin, lāu-pô-á pha-tshia-lin”, ū-iánn to tio̍h.",
  },
  {
    hanji:
      "俗語講：「草地親家坐大位。」人客入來咱兜，無論伊的身份抑地位是啥，攏愛共好好仔招待。",
    tailo:
      "Sio̍k-gí kóng, “Tsháu-tē tshin-ke tsē tuā-uī.” Lâng-kheh ji̍p-lâi lán tau, bô-lūn i ê sin-hūn ia̍h tē-uī sī siannh, lóng ài kā hó-hó-á tsiau-thāi.",
  },
  {
    hanji:
      "頭一工做會計，就拄著公司年底算總數，真正親像俗語講的，「袂曉剃頭，拄著鬍鬚」。",
    tailo:
      "Thâu tsi̍t kang tsò kuè-kè, tō tú-tio̍h kong-si nî-té sǹg tsóng-siàu, tsin-tsiànn tshin-tshiūnn sio̍k-gí kóng--ê, “bē-hiáu thì-thâu, tú-tio̍h hôo-tshiu”.",
  },
  {
    hanji:
      "伊頭一年教冊，就去教著全校上無乖的彼班，有影是「袂曉剃頭，拄著鬍鬚」。",
    tailo:
      "I thâu tsi̍t nî kà-tsheh, tō khì kà-tio̍h tsuân-hāu siōng bô kuai ê hit pan, ū-iánn sī “bē-hiáu thì-thâu, tú-tio̍h hôo-tshiu”.",
  },
  {
    hanji: "你有影真好命，「財子壽三字全」，予人有夠欣羨的啦！",
    tailo:
      "Lí ū-iánn tsin hó-miā, “tsâi-tsú-siū sann jī tsuân”, hōo lâng ū-kàu him-siān--ê--lah!",
  },
  {
    hanji:
      "俗語講：「送伊魚，較輸教伊掠魚。」你若欲共伊鬥相共，就教伊一寡仔工夫較實在。",
    tailo:
      "Sio̍k-gí kóng, “Sàng i hî, khah-su kà i lia̍h hî.” Lí nā beh kā i tàu-sann-kāng, tō kà i tsi̍t-kuá-á kang-hu khah si̍t-tsāi.",
  },
  {
    hanji:
      "囡仔人若走甲傷生狂，共椅桌門窗挵甲乒乓叫，序大人就會罵囡仔若像「痟狗舂墓壙」，攏袂定著。",
    tailo:
      "Gín-á-lâng nā tsáu kah siunn tshenn-kông, kā í-toh mn̂g-thang lòng kah pìn-piàng-kiò, sī-tuā-lâng tō ē mē gín-á ná-tshiūnn “siáu-káu tsing bōng-khòng”, lóng bē tiānn-tio̍h.",
  },
  {
    hanji:
      "伊䀐著有好空的穡頭通貿，曷無冗早鋪排，喝欲做就做，袂輸「痟狗舂墓壙」按呢，真正是譀甲死無人通比。",
    tailo:
      "I siam-tio̍h ū hó-khang ê sit-thâu thang bāu, a̍h bô liōng-tsá phoo-pâi, huah beh tsò tō tsò, bē-su “siáu-káu tsing bōng-khòng” án-ne, tsin-tsiànn sī hàm kah sí-bô-lâng thang pí.",
  },
  {
    hanji:
      "俗語講：「痟貪軁雞籠。」咱欲趁錢愛做正當頭路，毋通想講行歹路較好趁，煞來食免錢飯。",
    tailo:
      "Sio̍k-gí kóng, “Siáu-tham nǹg ke-lam.” Lán beh thàn-tsînn ài tsò tsìng-tong thâu-lōo, m̄-thang siūnn-kóng kiânn pháinn-lōo khah hó thàn, suah lâi tsia̍h bián-tsînn-pn̄g.",
  },
  {
    hanji: "你毋通掠準共人詐騙好賺食，「痟貪軁雞籠」，早慢會予警察㨑去。",
    tailo:
      "Lí m̄-thang lia̍h-tsún kā lâng tsà-phiàn hó tsuán-tsia̍h, “siáu-tham nǹg ke-lam”, tsá-bān ē hōo kíng-tshat tsang--khì.",
  },
  {
    hanji:
      "里長伯仔誠熱心，見擺若欲替里民調解糾紛，伊攏會佇厝裡攢酒菜，叫雙方坐落來沓沓仔講。里長姆仔怨嘆講這真正是「做公親，貼本」，月俸都無夠納遮的開銷咧。",
    tailo:
      "Lí-tiúnn peh--á tsiânn jia̍t-sim, kiàn-pái nā beh thè lí-bîn tiâu-kái kiù-hun, i lóng ē tī tshù--lí tshuân tsiú-tshài, kiò siang-hong tsē lo̍h-lâi ta̍uh-ta̍uh-á kóng. Lí-tiúnn ḿ--á uàn-thàn kóng tse tsin-tsiànn sī “tsò kong-tshin, thiap pún”, gue̍h-hōng to bô-kàu la̍p tsia-ê khai-siau--leh.",
  },
  {
    hanji:
      "伊食頭路年外，公司就倒去，老爸閣破病蹛院，面對遮爾濟變故，只好安慰家己「做牛著拖，做人著磨」，接受考驗，人生會有另外一種懸度。",
    tailo:
      "I tsia̍h-thâu-lōo nî-guā, kong-si tō tó--khì, lāu-pē koh phuà-pēnn tuà-īnn, bīn-tuì tsiah-nī tsē piàn-kòo, tsí-hó an-uì ka-kī “tsò gû tio̍h thua, tsò lâng tio̍h buâ”, tsiap-siū khó-giām, jîn-sing ē ū līng-guā tsi̍t tsióng kuân-tōo.",
  },
  {
    hanji:
      "定定共伊交關生理，這改煞予伊騙足濟錢去，真正是像人講的，「做官騙厝內，做生理騙熟似」。",
    tailo:
      "Tiānn-tiānn kā i kau-kuan sing-lí, tsit kái suah hōo i phiàn tsiok tsē tsînn khì, tsin-tsiànn sī tshiūnn lâng kóng--ê, “tsò-kuann phiàn tshù-lāi, tsò-sing-lí phiàn si̍k-sāi”.",
  },
  {
    hanji:
      "雖然俗語講：「做官騙厝內，做生理騙熟似。」毋過咱相信世間上嘛有足濟好官、真濟老實可靠的生理人。",
    tailo:
      "Sui-jiân sio̍k-gí kóng, “Tsò-kuann phiàn tshù-lāi, tsò-sing-lí phiàn si̍k-sāi.” M̄-koh lán siong-sìn sè-kan-siōng mā ū tsiok tsē hó kuann, tsin tsē láu-si̍t khó-khò ê sing-lí-lâng.",
  },
  {
    hanji:
      "人講：「做著歹田望下冬，娶著歹某一世人。」選對象目睭著擘予金，才袂一世人艱苦罪過。",
    tailo:
      "Lâng kóng, “Tsò-tio̍h pháinn tshân bāng ē tang, tshuā-tio̍h pháinn bóo tsi̍t-sì-lâng.” Suán tuì-siōng ba̍k-tsiu tio̍h peh hōo kim, tsiah bē tsi̍t-sì-lâng kan-khóo-tsē-kuà.",
  },
  {
    hanji:
      "政治人物佇電視頂冤甲目降鬚聳，雙方佇鏡頭的尻川後早就閣你兄我弟矣，網路頂的支持者煞猶原吵甲袂收山，真正是「做戲的欲煞，看戲的毋煞」。",
    tailo:
      "Tsìng-tī jîn-bu̍t tī tiān-sī-tíng uan kah ba̍k-kàng-tshiu-tshàng, siang-hong tī kiànn-thâu ê kha-tshng-āu tsá tō koh lí-hiann-guá-tī--ah, bāng-lōo-tíng ê tsi-tshî-tsiá suah iu-guân tshá kah bē-siu-suann, tsin-tsiànn sī “tsò-hì--ê beh suah, khuànn-hì--ê m̄ suah”.",
  },
  {
    hanji:
      "做代誌毋通生狂，欲按怎做較好，想予清楚才開始進行，因為「張持無蝕本」。",
    tailo:
      "Tsò tāi-tsì m̄-thang tshenn-kông,  beh án-tsuánn tsò khah hó, siūnn hōo tshing-tshó tsiah khai-sí tsìn-hîng, in-uī “tiunn-tî bô si̍h-pún”.",
  },
  {
    hanji:
      "叫你莫佮厝主相嚷，你干干仔欲，這馬厝主的店面無愛租你，這聲「得失土地公，飼無雞」矣乎。",
    tailo:
      "Kiò lí mài kah tshù-tsú sio-jiáng, lí kan-kan-á beh, tsit-má tshù-tsú ê tiàm-bīn bô ài tsoo--lí, tsit-siann “tik-sit Thóo-tī-kong, tshī bô ke”--ah--honnh.",
  },
  {
    hanji:
      "咱這个單位的主管上愛人扶挺，你拄來遮上好佮伊小盤撋一下，人咧講：「得失土地公，飼無雞。」若無，伊袂予你遐好食睏。",
    tailo:
      "Lán tsit ê tan-uī ê tsú-kuán siōng ài lâng phôo-thánn, lí tú lâi tsia siōng-hó kah i sió puânn-nuá--tsi̍t-ē, lâng teh kóng, “Tik-sit Thóo-tī-kong, tshī bô ke.” Nā-bô, i bē hōo lí hiah hó-tsia̍h-khùn.",
  },
  {
    hanji: "阿火叔「惜花連盆，疼囝連孫」，毋但惜查某囝，嘛足疼外孫。",
    tailo:
      "A-hué tsik “sioh hue liân phûn, thiànn kiánn liân sun”, m̄-nā sioh tsa-bóo-kiánn, mā tsiok thiànn guā-sun.",
  },
  {
    hanji:
      "教囝除了處罰，嘛愛予𪜶知影是佗位毋著，愛按怎改進，若干焦拍干焦罵，頭先會驚，久來就像人講的「捷罵袂聽，捷拍袂疼」，愈來愈不受教。",
    tailo:
      "Kà kiánn tû-liáu tshú-hua̍t, mā ài hōo in tsai-iánn sī tó-uī m̄-tio̍h, ài án-tsuánn kái-tsìn, nā kan-na phah kan-na mē, thâu-sing ē kiann, kú--lâi tō tshiūnn lâng kóng--ê “tsia̍p mē bē thiann, tsia̍p phah bē thiànn”, jú lâi jú put-siū-kàu.",
  },
  {
    hanji:
      "阿爸常在共小妹講「掃地掃壁角，洗面洗耳空」，做工課毋通含糊，毋通用準的就予過。",
    tailo:
      "A-pah tshiâng-tsāi kā sió-muē kóng “sàu-tè sàu piah-kak, sé-bīn sé hīnn-khang”, tsò khang-khuè m̄-thang hâm-hôo, m̄-thang iōng tsún--ê tō hōo kuè.",
  },
  {
    hanji: "俗語講：「欲好額等後世，欲做官學做戲。」人猶是實實在在較好。",
    tailo:
      "Sio̍k-gí kóng, “Beh hó-gia̍h tán āu-sì, beh tsò-kuann o̍h tsò-hì.” Lâng iáu-sī si̍t-si̍t-tsāi-tsāi khah hó.",
  },
  {
    hanji:
      "阿明共退休金攏提去炒股票，想欲一睏仔就好額，到尾煞倒了錢，莫怪俗語講：「欲好額等後世，欲做官學做戲」。",
    tailo:
      "A-bîng kā thè-hiu-kim lóng the̍h-khì tshá-kóo-phiò, siūnn-beh tsi̍t-khùn-á tō hó-gia̍h, kàu-bué suah tò liáu-tsînn, bo̍k-kuài sio̍k-gí kóng, “Beh hó-gia̍h tán āu-sì, beh tsò-kuann o̍h tsò-hì”.",
  },
  {
    hanji:
      "俗語講：「清明無轉厝，無祖；過年無轉厝，無某。」就算你這陣佇外位稅的厝離爸母的厝不止仔遠，過年過節嘛愛轉去。",
    tailo:
      "Sio̍k-gí kóng, “Tshing-bîng bô tńg tshù, bô tsóo; kuè-nî bô tńg tshù, bô bóo.” Tō-sǹg lí tsit-tsūn tī guā-uī suè ê tshù lī pē-bú ê tshù put-tsí-á hn̄g, kuè-nî-kuè-tseh mā ài tńg--khì.",
  },
  {
    hanji:
      "人講：「牽尪姨，順話尾。」𪜶會照咱想欲知的代誌來應話，參考就好，毋通傷過相信。",
    tailo:
      "Lâng kóng, “Khan ang-î, sūn uē-bué.” In ē tsiàu lán siūnn-beh tsai ê tāi-tsì lâi ìn-uē, tsham-khó tō hó, m̄-thang siunn kuè siong-sìn.",
  },
  {
    hanji:
      "咱若去算命，有的相命仙的就會「牽尪姨，順話尾」，予咱叫是伊算了足準的。",
    tailo:
      "Lán nā khì sǹg-miā, ū ê siòng-miā-sian--ê tō ē “khan ang-î, sūn uē-bué”, hōo lán kiò-sī i sǹg liáu tsiok tsún--ê.",
  },
  {
    hanji:
      "業務員佮客戶相交陪，愛有「牽尪姨，順話尾」的本事，予客戶感覺你足了解伊、關心伊，伊就會信任你。",
    tailo:
      "Gia̍p-bū-uân kah kheh-hōo sio-kau-puê, ài ū “khan ang-î, sūn uē-bué” ê pún-sū, hōo kheh-hōo kám-kak lí tsiok liáu-kái--i, kuan-sim--i, i tō ē sìn-jīm--lí.",
  },
  {
    hanji:
      "喙齒若有蛀空愛緊予醫生坉起來，若無，到尾仔愛抽神經就真正是「細空毋補，大空叫苦」。",
    tailo:
      "Tshuì-khí nā ū tsiù-khang ài kín hōo i-sing thūn--khí-lâi, nā-bô, kàu bué--á ài thiu sîn-king tō tsin-tsiànn sī “sè khang m̄ póo, tuā khang kiò-khóo”.",
  },
  {
    hanji:
      "咱做代誌拄頭仔若有發見毋著，就愛佇猶未造成重大傷害進前趕緊修正，才袂「細空毋補，大空叫苦」。",
    tailo:
      "Lán tsò tāi-tsì  tú-thâu-á nā ū huat-kiàn m̄-tio̍h, tō ài tī iáu-buē tsō-sîng tiōng-tāi siong-hāi tsìn-tsîng kuánn-kín siu-tsìng, tsiah bē “sè khang m̄ póo, tuā khang kiò-khóo”.",
  },
  {
    hanji:
      "囡仔自細漢著愛好好仔共教示，若無「細漢偷挽匏，大漢偷牽牛」，聽候伊大漢犯嚴重的錯誤才欲來教，就已經袂赴矣。",
    tailo:
      "Gín-á tsū sè-hàn tio̍h-ài hó-hó-á kā kà-sī, nā-bô “sè-hàn thau bán pû, tuā-hàn thau khan gû”, thìng-hāu i tuā-hàn huān giâm-tiōng ê tshò-gōo tsiah beh lâi kà, tō í-king bē-hù--ah.",
  },
  {
    hanji:
      "爸母為囝是自然天性，莫怪人講：「細漢煩惱伊袂大，大漢煩惱伊未娶。」毋過序細早慢愛為𪜶家己的人生負責，做人序大愛學會曉放手。",
    tailo:
      "Pē-bú uī kiánn sī tsū-jiân thian-sìng, bo̍k-kuài lâng kóng, “Sè-hàn huân-ló i bē tuā, tuā-hàn huân-ló i buē tshuā.” M̄-koh sī-sè tsá-bān ài uī in ka-kī ê jîn-sing hū-tsik, tsò lâng sī-tuā ài o̍h ē-hiáu pàng-tshiú.",
  },
  {
    hanji:
      "伊自細漢讀冊就受著親情幫贊，想袂到佇美國畢業了後，連親情過身嘛毋轉來，人講「船過水無痕」，伊實在真無惜情。",
    tailo:
      "I tsū sè-hàn tha̍k-tsheh tō siū-tio̍h tshin-tsiânn pang-tsān, siūnn-bē-kàu tī Bí-kok pit-gia̍p liáu-āu, liân tshin-tsiânn kuè-sin mā m̄ tńg--lâi, lâng kóng “tsûn kuè tsuí bô hûn”, i si̍t-tsāi tsin bô sioh-tsîng.",
  },
  {
    hanji:
      "這條溪逐年都駐死幾若个人，政府規定遮袂使耍水，毋過攏無人咧插，隔無幾冬，代誌就「船過水無痕」，耍水的人猶原插插插。",
    tailo:
      "Tsit tiâu khe ta̍k-nî to tū-sí kuí-nā ê lâng, tsìng-hú kui-tīng tsia bē-sái sńg tsuí, m̄-koh lóng bô lâng teh tshap, keh bô kuí tang, tāi-tsì tō “tsûn kuè tsuí bô hûn”, sńg tsuí ê lâng iu-guân tshah-tshah-tshah.",
  },
  {
    hanji:
      "伊這个人恬恬仔毋過真奸巧，聽講心肝閣不止仔惡毒，俗語講：「陰鴆陰鴆，咬人三寸深。」你若誠實欲招伊合股做生理，千萬著愛細膩呢！",
    tailo:
      "I tsit ê lâng tiām-tiām--á m̄-koh tsin kan-khiáu, thiann-kóng sim-kuann koh put-tsí-á ok-to̍k, sio̍k-gí kóng, “Im-thim-im-thim, kā lâng sann tshùn tshim.” Lí nā tsiânn-si̍t beh tsio i ha̍p-kóo tsò-sing-lí, tshian-bān tio̍h-ài sè-jī--neh!",
  },
  {
    hanji:
      "你拄開始上班，階層較低，人講你就愛聽，毋通袂記得「頂司管下司，鋤頭管畚箕」。",
    tailo:
      "Lí tú-khai-sí siōng-pan, kai-tsân khah kē, lâng kóng lí tō ài thiann, m̄-thang bē-kì-tit “tíng-si kuán ē-si, tî-thâu kuán pùn-ki”.",
  },
  {
    hanji:
      "阮屏東的烏甕串通講是「頂港有名聲，下港上出名」，食過的人攏呵咾甲會觸舌。",
    tailo:
      "Guán Pîn-tong ê oo-àng-tshǹg thang kóng sī “tíng-káng ū miâ-siann, ē-káng siōng tshut-miâ”, tsia̍h--kuè ê lâng lóng o-ló kah ē tak-tsi̍h.",
  },
  {
    hanji:
      "有兩个人佇路邊為著欲搶停車位咧冤家，邊仔的人逐个都「徛懸山，看馬相踢」，無一觸久仔煞開始咧窒車矣！",
    tailo:
      "Ū nn̄g ê lâng tī lōo-pinn uī-tio̍h beh tshiúnn thîng-tshia-uī teh uan-ke, pinn--á ê lâng ta̍k ê to “khiā kuân suann, khuànn bé sio-that”, bô tsi̍t-tak-kú-á suah khai-sí teh that-tshia--ah!",
  },
  {
    hanji:
      "朋友若咧起衝突的時，咱毋通干焦「徛懸山，看馬相踢」，上好出面做公親來鬥排解，通予代誌好收煞。",
    tailo:
      "Pîng-iú nā teh khí tshiong-tu̍t ê sî, lán m̄-thang kan-na “khiā kuân suann, khuànn bé sio-that”, siōng-hó tshut-bīn tsò kong-tshin lâi tàu pâi-kái, thang hōo tāi-tsì hó siu-suah.",
  },
  {
    hanji:
      "阿龍上興食腥臊的，磕袂著就魚魚肉肉，閣再毋是薟就是重鹹，攏無咧撙節的，結局「喙食，予尻川坐數。」這馬人咧喝艱苦矣。",
    tailo:
      "A-liông siōng hìng tsia̍h tshenn-tshau--ê, kha̍p-bē-tio̍h tō hî-hî-bah-bah, koh-tsài m̄ sī hiam tō sī tāng-kiâm, lóng bô teh tsún-tsat--ê, kiat-kio̍k “tshuì tsia̍h, hōo kha-tshng tshē-siàu.” Tsit-má lâng teh huah kan-khóo--ah.",
  },
  {
    hanji:
      "後禮拜都欲考試矣，這禮拜的歇睏日你猶是莫出去𨑨迌會較穩當，才袂時到「喙食，予尻川坐數」。",
    tailo:
      "Āu lé-pài to beh khó-tshì--ah, tsit lé-pài ê hioh-khùn-ji̍t lí iáu-sī mài tshut-khì tshit-thô ē khah ún-tàng, tsiah bē sî kàu “tshuì tsia̍h, hōo kha-tshng tshē-siàu”.",
  },
  {
    hanji:
      "頭家共公司的錢提去炒股票，將錢輸了了，煞著喝倒店，下跤的員工攏失業，「喙食，予尻川坐數」，按呢敢有公道？",
    tailo:
      "Thâu-ke kā kong-si ê tsînn the̍h-khì tshá-kóo-phiò, tsiong tsînn su-liáu-liáu, suah tio̍h huah tó-tiàm, ē-kha ê uân-kang lóng sit-gia̍p, “tshuì tsia̍h, hōo kha-tshng tshē-siàu”, án-ne kám ū kong-tō?",
  },
  {
    hanji:
      "眾人抱誠大的向望去揣伊鬥相共，無疑悟伊干焦「喙脣皮相款待」爾爾，真正予人感覺柴較冷灶。",
    tailo:
      "Tsìng-lâng phō tsiânn tuā ê ǹg-bāng khì tshuē i tàu-sann-kāng, bô-gî-ngōo i kan-na “tshuì-tûn-phuê sio khuán-thāi” niā-niā, tsin-tsiànn hōo lâng kám-kak tshâ khah líng tsàu.",
  },
  {
    hanji:
      "阿德仔誠實「喙飽目睭枵」，明明都食甲脹袂落去矣，目睭猶閣金金咧顧桌頂的魚魚肉肉，真正有夠譀。",
    tailo:
      "A-tik--á tsiânn-si̍t “tshuì pá ba̍k-tsiu iau”, bîng-bîng to tsia̍h kah tiùnn bē lo̍h--khì--ah, ba̍k-tsiu iáu-koh kim-kim teh kòo toh-tíng ê hî-hî-bah-bah, tsin-tsiànn ū-kàu hàm.",
  },
  {
    hanji:
      "俗語講：「媒人保入房，無保一世人。」婚姻欲糖甘甜、翁某欲好透流，盡靠恁家己囉！",
    tailo:
      "Sio̍k-gí kóng, “Muê-lâng pó ji̍p pâng, bô pó tsi̍t-sì-lâng.” Hun-in beh thn̂g-kam-tinn, ang-bóo beh hó-thàu-lâu, tsīn khò lín ka-kī--looh!",
  },
  {
    hanji:
      "俗語講：「惡馬惡人騎。」你人遮古意，當然嘛無伊法，愛揣一个比伊較惡的人來治伊啦。",
    tailo:
      "Sio̍k-gí kóng, “Ok bé ok lâng khiâ.” Lí lâng tsiah kóo-ì, tong-jiân mā bô i huat, ài tshuē tsi̍t ê pí i khah ok ê lâng lâi tī--i--lah.",
  },
  {
    hanji:
      "彼个囡仔足愛欺負比伊較細漢的人，這改拄著比伊較大漢的就覕鬚，乖乖仔予人創治，真正是「惡馬惡人騎」。",
    tailo:
      "Hit ê gín-á tsiok ài khi-hū pí i khah sè-hàn ê lâng, tsit kái tú-tio̍h pí i khah tuā-hàn--ê tō bih-tshiu, kuai-kuai-á hōo lâng tshòng-tī, tsin-tsiànn sī “ok bé ok lâng khiâ”.",
  },
  {
    hanji:
      "表姊目頭懸，揣對象揀東揀西、揀碗揀箸，啥人知影經過幾若年煞「揀啊揀，揀著一个賣龍眼」。",
    tailo:
      "Piáu-tsí ba̍k-thâu kuân, tshuē tuì-siōng kíng-tang-kíng-sai, kíng-uánn-kíng-tī, siánn-lâng tsai-iánn king-kuè kuí-nā nî suah “kíng--ah kíng, kíng-tio̍h tsi̍t ê bē lîng-gíng”.",
  },
  {
    hanji:
      "你莫叫是講你做的遐的失德代無人知，俗語講：「攑頭三尺有神明。」你緊縒慢會得著報應。",
    tailo:
      "Lí mài kiò-sī kóng lí tsò ê hia-ê sit-tik tāi bô lâng tsai, sio̍k-gí kóng, “Gia̍h-thâu sann tshioh ū sîn-bîng.” Lí kín-tsua̍h-bān ē  tit-tio̍h pò-ìng.",
  },
  {
    hanji:
      "這件代誌若甲蹽落去矣，就莫閣觀前顧後，「敢做匏桸，就毋通驚水燙」，敢毋是咧？",
    tailo:
      "Tsit kiānn tāi-tsì nā-kah liâu--lo̍h-khì--ah, tō mài koh kuan-tsiân kòo-āu, “kánn tsò pû-hia, tō m̄-thang kiann tsuí thǹg”, kám m̄ sī--leh?",
  },
  {
    hanji:
      "古早人講：「棚頂做甲流汗，棚跤嫌甲流瀾。」橫直做代誌總是袂中眾人意，欲做就認真做，毋免驚人批評。",
    tailo:
      "Kóo-tsá-lâng kóng, “Pênn-tíng tsò kah lâu-kuānn, pênn-kha hiâm kah lâu-nuā.” Huâinn-ti̍t tsò tāi-tsì tsóng-sī bē tìng tsìng-lâng ì, beh tsò tō jīn-tsin tsò, m̄-bián kiann lâng phue-phîng.",
  },
  {
    hanji:
      "班長共咱服務，逐家毋但無感謝伊，閣共伊嫌甲無一地仔好，誠實「棚頂做甲流汗，棚跤嫌甲流瀾」。",
    tailo:
      "Pan-tiúnn kā lán ho̍k-bū, ta̍k-ke m̄-nā bô kám-siā--i, koh kā i hiâm kah bô tsi̍t-tè-á hó, tsiânn-si̍t “pênn-tíng tsò kah lâu-kuānn, pênn-kha hiâm kah lâu-nuā”.",
  },
  {
    hanji:
      "伊做人誠慷慨，年冬月節攏會去送禮，收著物件的朋友若共推辭，伊攏會講「無三不成禮」，後回嘛閣繼續送。",
    tailo:
      "I tsò-lâng tsiânn khóng-khài, nî-tang-gue̍h-tseh lóng ē khì sàng lé, siu-tio̍h mi̍h-kiānn ê pîng-iú nā kā the-sî, i lóng ē kóng “bû sam put sîng lé”, āu huê mā koh kè-sio̍k sàng.",
  },
  {
    hanji:
      "「無日毋知晝，無鬚毋知老」，少年時的理想攏猶未實現，目一下𥍉咱都半老老矣。",
    tailo:
      "“Bô ji̍t m̄ tsai tàu, bô tshiu m̄ tsai lāu”, siàu-liân sî ê lí-sióng lóng iáu-buē si̍t-hiān, ba̍k tsi̍t-ē nih lán to puànn-ló-lāu--ah.",
  },
  {
    hanji:
      "阿華明其都腹內無膏，硬死欲佇眾人面前吟詩，吟甲毋成聲調，予人笑講「無毛雞假大格」。",
    tailo:
      "A-huâ bîng-ki to pak-lāi bô ko, ngē sí beh tī tsìng-lâng bīn-tsîng gîm-si, gîm kah m̄-tsiânn siann-tiāu, hōo lâng tshiò kóng “bô môo ke ké tuā-keh”.",
  },
  {
    hanji:
      "早起本來欲騎機車去買菜，想袂到機車煞袂發，臨時「無牛駛馬」，換騎跤踏車去。",
    tailo:
      "Tsá-khí pún-lâi beh khiâ ki-tshia khì bé tshài, siūnn-bē-kàu ki-tshia suah bē huat, lîm-sî “bô gû sái bé”, uānn khiâ kha-ta̍h-tshia khì.",
  },
  {
    hanji:
      "老爸老母攏過身去的阿木，是一个欲食毋討趁的貧惰骨，見想的齊是彼款「無米有舂臼，無囝抱新婦」的套頭，到今嘛是十一哥仔光𣮈𣮈，後過食老毋知欲靠啥人咧？",
    tailo:
      "Lāu-pē lāu-bú lóng kuè-sin--khì ê A-bo̍k, sī tsi̍t ê beh tsia̍h m̄ thó-thàn ê pîn-tuānn-kut, kiàn siūnn--ê tsiâu sī hit khuán “bô bí ū tsing-khū, bô kiánn phō sin-pū” ê thò-thâu, kàu-tann mā sī tsa̍p-it-ko--á kng-khu̍t-khu̍t, āu-kuè tsia̍h-lāu m̄ tsai beh khò siánn-lâng--leh?",
  },
  {
    hanji:
      "你喔！「無彼號尻川，想欲食彼號瀉藥」，行無三步就怦怦喘的人，也欲參人去𬦰山。",
    tailo:
      "Lí--ooh! “Bô hit-lō kha-tshng, siūnn-beh tsia̍h hit-lō sià-io̍h”, kiânn bô sann pōo tō phēnn-phēnn-tshuán ê lâng, iā beh tsham lâng khì peh-suann.",
  },
  {
    hanji:
      "𪜶序大人講的話伊都無咧信篤矣，你何乜苦「無枷夯交椅」，硬欲共伊款勸。",
    tailo:
      "In sī-tuā-lâng kóng ê uē i to bô teh sìn-táu--ah, lí hô-mí-khóo “bô kê giâ kau-í”, ngē beh kā i khuán-khǹg.",
  },
  {
    hanji:
      "失業規年，食三頓都有問題矣，伊就共定存領出來，人講「無通生食，哪有通曝乾」，目睭前的生活較要緊，後擺的日子袂顧得囉。",
    tailo:
      "Sit-gia̍p kui-nî, tsia̍h sann tǹg to ū būn-tê--ah, i tō kā tīng-tsûn niá--tshut-lâi, lâng kóng “bô thang tshenn tsia̍h, ná ū thang pha̍k-kuann”, ba̍k-tsiu-tsîng ê sing-ua̍h khah iàu-kín, āu-pái ê ji̍t-tsí bē-kòo--tit--looh.",
  },
  {
    hanji:
      "阮翁這站仔無頭路，保險公司的業務員煞來招伊入保險，伊現此時都「無通生食，哪有通曝乾」，欲佗生錢來投保咧？",
    tailo:
      "Guán ang tsit-tsām-á bô thâu-lōo, pó-hiám kong-si ê gia̍p-bū-uân suah lâi tsio i ji̍p pó-hiám, i hiān-tshú-sî to “bô thang tshenn tsia̍h, ná ū thang pha̍k-kuann”, beh tó senn tsînn lâi tâu-pó--leh?",
  },
  {
    hanji:
      "想欲食金瓜湯，煞規菜市仔攏無人咧賣金瓜，「無魚，蝦嘛好」，今仔日先買冬瓜轉來去𤉙排骨湯。",
    tailo:
      "Siūnn-beh tsia̍h kim-kue-thng, suah kui tshài-tshī-á lóng bô lâng teh bē kim-kue, “bô hî, hê mā hó”, kin-á-ji̍t sing bé tang-kue tńg lâi-khì kûn pâi-kut-thng.",
  },
  {
    hanji:
      "真濟意外抑是失敗，攏是因為靠勢家己經驗豐富，做代誌無夠細膩才會發生，愛知影「猴也會跋落樹跤」。",
    tailo:
      "Tsin tsē ì-guā ia̍h-sī sit-pāi, lóng sī in-uī khò-sè ka-kī king-giām hong-hù, tsò tāi-tsì bô-kàu sè-jī tsiah ē huat-sing, ài tsai-iánn “kâu iā ē pua̍h-lo̍h tshiū-kha”.",
  },
  {
    hanji:
      "伊便若看著我，就喙笑目笑，好禮相借問，毋過佇尻脊後煞共我講甲無一地好，真正是「畫虎畫皮難畫骨，知人知面不知心」。",
    tailo:
      "I piān-nā khuànn-tio̍h guá, tō tshuì-tshiò-ba̍k-tshiò, hó-lé sio-tsioh-mn̄g, m̄-koh tī kha-tsiah-āu suah kā guá kóng kah bô tsi̍t tè hó, tsin-tsiànn sī “uā hóo uā phî lân uā kut, ti jîn ti biān put ti sim”.",
  },
  {
    hanji:
      "相等的時陣，等的人等甲心狂火著，予人等的煞寬寬仔來，來到位也無會失禮。人講「等物僫到，等人快老」，將心比心，準時較好啦。",
    tailo:
      "Sio-tán ê sî-tsūn, tán ê lâng tán kah sim-kông-hué-to̍h, hōo lâng tán--ê suah khuann-khuann-á lâi, lâi kàu-uī iā bô huē-sit-lé. Lâng kóng “tán mi̍h oh kàu, tán lâng khuài lāu”, tsiong-sim-pí-sim, tsún-sî khah hó--lah.",
  },
  {
    hanji:
      "耍紙牌的時，提著好牌的就穩心仔等，毋過「等物僫到，等人快老」，定定是別人先到，家己煞看有食無干焦癮。",
    tailo:
      "Sńg tsuá-pâi ê sî, the̍h-tio̍h hó pâi--ê tō ún-sim-á tán, m̄-koh “tán mi̍h oh kàu, tán lâng khuài lāu”, tiānn-tiānn sī pa̍t-lâng sing kàu, ka-kī suah  khuànn-ū tsia̍h-bô kan-na giàn.",
  },
  {
    hanji:
      "歹路毋通行，僥倖代毋通做，若無，「菜蟲食菜，菜跤死」，無好煞尾。",
    tailo:
      "Pháinn-lōo m̄-thang kiânn, hiau-hīng-tāi m̄-thang tsò, nā-bô, “tshài-thâng tsia̍h tshài, tshài-kha sí”, bô hó suah-bué.",
  },
  {
    hanji:
      "阿珍看厝看半年外才買著一間伊佮意的厝，伊講：「買厝，買厝邊。」除了考慮價數，閣較要緊的是愛揣著有好厝邊的社區。",
    tailo:
      "A-tin khuànn tshù khuànn puànn nî guā tsiah bé-tio̍h tsi̍t king i kah-ì ê tshù, i kóng, “Bé tshù, bé tshù-pinn.” Tû-liáu khó-lī kè-siàu, koh-khah iàu-kín--ê sī ài tshuē-tio̍h ū hó tshù-pinn ê siā-khu.",
  },
  {
    hanji:
      "雖然咱是交往誠濟年的好朋友，人講「買賣算分，相請無論」，咱的生理猶是著照步來，毋過這攤予我來請，你就莫閣和我相搶矣。",
    tailo:
      "Sui-jiân lán sī kau-óng tsiânn tsē nî ê hó-pîng-iú, lâng kóng “bé-bē sǹg hun, sio-tshiánn bô lūn”, lán ê sing-lí iáu-sī tio̍h tsiàu-pōo-lâi, m̄-koh tsit thuann hōo guá lâi tshiánn, lí tō mài koh hām guá sio-tshiúnn--ah.",
  },
  {
    hanji:
      "你毋通按呢直直做，攏無歇睏，雖罔恁兜這站仔較困難，毋過「趁也著趁，食也著食」，嘛愛停睏食飯，才有氣力通做工課。",
    tailo:
      "Lí m̄-thang án-ne ti̍t-ti̍t tsò, lóng bô hioh-khùn, sui-bóng lín tau tsit-tsām-á khah khùn-lân, m̄-koh “thàn iā tio̍h thàn, tsia̍h iā tio̍h tsia̍h”, mā ài thîng-khùn tsia̍h-pn̄g, tsiah ū khuì-la̍t thang tsò khang-khuè.",
  },
  {
    hanji:
      "原本肝無好就愛注意，毋通為著趁錢拚甲無暝無日，才袂拍歹身體，人講：「趁錢有數，性命愛顧。」趁會著嘛愛食會著才有效。",
    tailo:
      "Guân-pún kuann bô hó tō ài tsù-ì, m̄-thang uī-tio̍h thàn-tsînn piànn kah bô-mê-bô-ji̍t, tsiah bē phah-pháinn sin-thé, lâng kóng, “Thàn-tsînn iú sòo, sènn-miā ài kòo.” Thàn ē tio̍h mā ài tsia̍h ē tio̍h tsiah ū-hāu.",
  },
  {
    hanji:
      "咱若時常想著「趁錢有數，性命愛顧」這句話，就較知影愛照顧家己的身體。",
    tailo:
      "Lán nā sî-siông siūnn-tio̍h “thàn-tsînn iú sòo, sènn-miā ài kòo” tsit kù uē, tō khah tsai-iánn ài tsiàu-kòo ka-kī ê sin-thé.",
  },
  {
    hanji:
      "我最近拄著一寡代誌，無蓋順序，毋過我想著阿母捌共我講過：「跋一倒，抾著一隻金雞母。」遮的代誌一定會當予我愈來愈有智慧，勇敢面對一切。",
    tailo:
      "Guá tsuè-kīn tú-tio̍h tsi̍t-kuá tāi-tsì, bô kài sūn-sī, m̄-koh guá siūnn-tio̍h a-bú bat kā guá kóng--kuè, “Pua̍h tsi̍t tó, khioh-tio̍h tsi̍t tsiah kim ke-bó.” Tsia-ê tāi-tsì it-tīng ē-tàng hōo guá jú lâi jú ū tì-huī, ióng-kám bīn-tuì it-tshè.",
  },
  {
    hanji:
      "明明是伊毋著閣敢佮人大細聲，我佇邊仔看甲「痚呴袂忍得嗽」，就開喙佮伊理論。",
    tailo:
      "Bîng-bîng sī i m̄-tio̍h koh kánn kah lâng tuā-sè-siann, guá tī pinn--á khuànn kah “he-ku bē lún tit sàu”, tō khui-tshuì kah i lí-lūn.",
  },
  {
    hanji:
      "雖然阿美𪜶翁矮閣大箍，學歷嘛並阿美較低，毋過伊猶是真愛𪜶翁，因為「媠䆀無比止，愛著較慘死」。",
    tailo:
      "Sui-jiân A-bí in ang é koh tuā-khoo, ha̍k-li̍k mā phīng A-bí khah kē, m̄-koh  i iáu-sī tsin ài in ang, in-uī “suí-bái bô pí tsí, ài--tio̍h khah tshám sí”.",
  },
  {
    hanji: "「圓人會扁，扁人會圓」，啥人知影到尾會按怎咧？",
    tailo:
      "“Înn--lâng ē pínn, pínn--lâng ē înn”, siánn-lâng tsai-iánn kàu-bué ē án-tsuánn--leh?",
  },
  {
    hanji:
      "人客若欲買物件，加減仔都會嫌東嫌西，毋過俗語咧講：「嫌貨才是買貨人。」咱著愛耐心聽人客講，提無仝的產品予人客揀，生理才做會成。",
    tailo:
      "Lâng-kheh nā beh bé mi̍h-kiānn, ke-kiám-á to ē hiâm-tang-hiâm-sai, m̄-koh sio̍k-gí teh kóng, “Hiâm huè tsiah-sī bé huè lâng.” Lán tio̍h-ài nāi-sim thiann lâng-kheh kóng, the̍h bô kāng ê sán-phín hōo lâng-kheh kíng, sing-lí tsiah tsò ē sîng.",
  },
  {
    hanji:
      "俗語講：「愛拚才會贏。」佇景氣無好的時陣，著愛毋驚艱苦，堅持理想、跤踏實地，成功的機會就占較大面。",
    tailo:
      "Sio̍k-gí kóng, “Ài piànn tsiah ē iânn.” Tī kíng-khì bô hó ê sî-tsūn, tio̍h-ài m̄ kiann kan-khóo, kian-tshî lí-sióng, kha-ta̍h-si̍t-tē, sîng-kong ê ki-huē tō tsiàm khah-tuā-bīn.",
  },
  {
    hanji:
      "人講：「愛媠毋驚流鼻水。」天氣遮爾冷，伊仝款穿遐少，攏毋驚會寒著。",
    tailo:
      "Lâng kóng, “Ài-suí m̄ kiann lâu phīnn-tsuí.” Thinn-khì tsiah-nī líng, i kāng-khuán tshīng  hiah tsió, lóng m̄ kiann ē kuânn--tio̍h.",
  },
  {
    hanji:
      "共你講「惹熊惹虎，毋通惹著刺查某」，你都毋聽，敢去共彼个頭家娘唱聲，這擺知死矣乎？",
    tailo:
      "Kā lí kóng “jiá hîm jiá hóo, m̄-thang jiá-tio̍h tshiah-tsa-bóo”, lí to m̄ thiann, kánn khì kā hit ê thâu-ke-niû tshiàng-siann, tsit pái tsai-sí--ah--honnh?",
  },
  {
    hanji:
      "保健的雜誌推薦「暗頓減食一口，活甲九十九」，閣講若逐工攏出去運動一下，對身體閣較好。",
    tailo:
      "Pó-kiān ê tsa̍p-tsì thui-tsiàn “àm-tǹg kiám tsia̍h tsi̍t kháu, ua̍h kah káu-tsa̍p-káu”, koh kóng nā ta̍k-kang lóng tshut-khì ūn-tōng--tsi̍t-ē, tuì sin-thé koh-khah hó.",
  },
  {
    hanji:
      "現時社會尊重個人，就算是爸囝嘛有無仝款的想法，人講「會生得囝身，袂生得囝心」，爸囝無仝宗教、無仝政黨，嘛應該互相尊重。",
    tailo:
      "Hiān-sî siā-huē tsun-tiōng kò-jîn, tō-sǹg sī pē-kiánn mā ū bô kāng-khuán ê siūnn-huat, lâng kóng “ē-senn-tit kiánn sin, bē-senn-tit kiánn sim”, pē-kiánn bô kāng tsong-kàu, bô kāng tsìng-tóng, mā ing-kai hōo-siong tsun-tiōng.",
  },
  {
    hanji:
      "爸母教育序細是一件誠艱難的工課，「會生得囝身，袂生得囝心」，有的囡仔不受教，甚至忤逆爸母，予𪜶氣甲毋知欲怎樣才好。",
    tailo:
      "Pē-bú kàu-io̍k sī-sè sī tsi̍t kiānn tsiânn kan-lân ê khang-khuè, “ē-senn-tit kiánn sin, bē-senn-tit kiánn sim”, ū ê gín-á put-siū-kàu, sīm-tsì ngóo-gi̍k pē-bú, hōo in khì kah m̄ tsai beh tsuánn-iūnn tsiah hó.",
  },
  {
    hanji:
      "啥人毋捌失敗過？人講：「會跋才會大。」做毋著去共當做經驗，毋才捎會著做工課的鋩角，嘛才會愈做愈熟手。",
    tailo:
      "Siánn-lâng m̄ bat sit-pāi--kuè? Lâng kóng, “Ē pua̍h tsiah ē tuā.” Tsò m̄-tio̍h--khì kā tòng-tsò king-giām, m̄-tsiah sa ē tio̍h tsò khang-khuè ê mê-kak, mā tsiah ē jú tsò jú si̍k-tshiú.",
  },
  {
    hanji:
      "癮頭！你這號做「會曉偷食，袂曉拭喙」，不時提彼張偷拆的圖出來看，這馬逐家攏知影彼本冊是你拆破的矣。",
    tailo:
      "Giàn-thâu! Lí tse hō-tsò “ē-hiáu thau tsia̍h, bē-hiáu tshit tshuì”, put-sî the̍h hit tiunn thau thiah ê tôo tshut-lâi khuànn, tsit-má ta̍k-ke lóng tsai-iánn hit pún tsheh sī lí thiah--phuà--ê--ah.",
  },
  {
    hanji:
      "做生理，面對人客，「溜溜瞅瞅，食兩蕊目睭」，愛知影變竅，予人客滿意，生理才做會交易。",
    tailo:
      "Tsò-sing-lí, bīn-tuì lâng-kheh, “liu-liu-tshiu-tshiu, tsia̍h nn̄g luí ba̍k-tsiu”, ài tsai-iánn piàn-khiàu, hōo lâng-kheh muá-ì, sing-lí tsiah tsò ē ka-ia̍h.",
  },
  {
    hanji:
      "少年人拄出業，毋管食頭路抑是家己做頭家，「萬事起頭難」，愛沓沓仔來，堅持落去，做會久才有成功的機會。",
    tailo:
      "Siàu-liân-lâng tú tshut-gia̍p, m̄-kuán tsia̍h-thâu-lōo ia̍h-sī ka-kī tsò thâu-ke, “bān-sū khí-thâu lân”, ài ta̍uh-ta̍uh-á lâi, kian-tshî--lo̍h-khì, tsò ē kú tsiah ū sîng-kong ê ki-huē.",
  },
  {
    hanji:
      "非洲真濟國家因為飢荒，百姓枵飢失頓，真濟囡仔攏「腹肚若水櫃，胸坎若樓梯」，予人真毋甘。",
    tailo:
      "Hui-tsiu tsin tsē kok-ka in-uī ki-hng, peh-sènn iau-ki-sit-tǹg, tsin tsē gín-á lóng “pak-tóo ná tsuí-kuī, hing-khám ná lâu-thui”, hōo lâng tsin m̄-kam.",
  },
  {
    hanji: "伊自細漢就帶身命，「腹肚做藥櫥」，食藥仔會使講是閬時無閬日。",
    tailo:
      "I tsū sè-hàn tō tài-sin-miā, “pak-tóo tsò io̍h-tû”, tsia̍h io̍h-á ē-sái kóng sī làng-sî bô làng-ji̍t.",
  },
  {
    hanji:
      "較早的人相信「落塗時八字命」，想講命運是出世的時就註好好的。現代人愛知影前途愛靠家己創造，若肯拍拚就會成功。",
    tailo:
      "Khah-tsá ê lâng siong-sìn “lo̍h-thôo sî peh-jī miā”, siūnn-kóng miā-ūn sī tshut-sì ê sî tō tsù hó-hó--ê. Hiān-tāi lâng ài tsai-iánn tsiân-tôo ài khò ka-kī tshòng-tsō, nā khíng phah-piànn tō ē sîng-kong.",
  },
  {
    hanji:
      "咱臺灣人是命運共同體，毋通規工冤家、對立，因為「落水平平沉，全無重頭輕」。",
    tailo:
      "Lán Tâi-uân-lâng sī miā-ūn kiōng-tông-thé, m̄-thang kui-kang uan-ke, tuì-li̍p, in-uī “lo̍h tsuí pênn-pênn tîm, tsuân bô tāng-thâu-khin”.",
  },
  {
    hanji:
      "朋友相請，哪著大魚大肉，人講「誠意食水甜」，路邊擔仔就足好食。",
    tailo:
      "Pîng-iú sio-tshiánn, ná-tio̍h tuā hî tuā bah, lâng kóng “sîng-ì tsia̍h tsuí tinn”, lōo-pinn-tànn-á tō tsiok hó-tsia̍h.",
  },
  {
    hanji:
      "朋友若來相揣，心情歡喜閣熱情共伊招待，白滾水來相請嘛無要緊，人咧講「誠意食水甜」，毋免歹勢。",
    tailo:
      "Pîng-iú nā lâi sio-tshuē, sim-tsîng huann-hí koh jia̍t-tsîng kā i tsiau-thāi, pe̍h-kún-tsuí lâi sio-tshiánn mā bô iàu-kín, lâng teh kóng “sîng-ì tsia̍h tsuí tinn”, m̄-bián pháinn-sè.",
  },
  {
    hanji:
      "你若欲開店賣手機仔，著愛綴會著科技咧發展的速度，毋通「過時賣曆日」，去賣以早彼種無網路功能的，這馬真罕得看著有人咧用矣。",
    tailo:
      "Lí nā beh khui-tiàm bē tshiú-ki-á, tio̍h-ài tuè ē tio̍h kho-ki teh huat-tián ê sok-tōo, m̄-thang “kuè-sî bē la̍h-ji̍t”, khì bē í-tsá hit tsióng bô bāng-lōo kong-lîng--ê, tsit-má tsin hán-tit khuànn-tio̍h ū lâng teh īng--ah.",
  },
  {
    hanji:
      "這个時代需要新思維，老沿的袂使老古板，一直用「過橋較濟你行路，食鹽較濟你食米」的態度，來教示少年人。",
    tailo:
      "Tsit ê sî-tāi su-iàu sin su-uî, lāu-iân--ê bē-sái lāu-kóo-pán, it-ti̍t iōng “kuè kiô khah tsē lí kiânn-lōo, tsia̍h iâm khah tsē lí tsia̍h bí” ê thāi-tōo, lâi kà-sī siàu-liân-lâng.",
  },
  {
    hanji:
      "人講：「隔壁親家，禮數原在。」雖然欲娶的新娘蹛佇厝邊，對𤆬路雞到大禮車，一項都袂省得。",
    tailo:
      "Lâng kóng, “Keh-piah tshin-ke, lé-sòo guân-tsāi.” Sui-jiân beh tshuā ê sin-niû tuà tī tshù-pinn, tuì tshuā-lōo-ke kàu tuā lé-tshia, tsi̍t hāng to bē-síng--tit.",
  },
  {
    hanji: "「隔壁親家，禮數原在」，按呢會予人佮人的關係較親切嘛較搭粒。",
    tailo:
      "“Keh-piah tshin-ke, lé-sòo guân-tsāi”, án-ne ē hōo lâng kah lâng ê kuan-hē khah tshin-tshiat mā khah tah-lia̍p.",
  },
  {
    hanji:
      "做人著愛有孝才有底，千萬毋通「飼囝無論飯，飼爸母算頓」，飼囝飼甲肥朒朒，飼爸母飼甲賰一支骨。",
    tailo:
      "Tsò-lâng tio̍h-ài iú-hàu tsiah ū-té, tshian-bān m̄-thang “tshī kiánn bô-lūn pn̄g, tshī pē-bú sǹg tǹg”, tshī kiánn tshī kah puî-tsut-tsut, tshī pē-bú tshī kah tshun tsi̍t ki kut.",
  },
  {
    hanji:
      "阿義仔這个人傷過奸巧，毋通予伊入來咱公司上班，若無，是會「飼鳥鼠，咬布袋」。",
    tailo:
      "A-gī--á tsit ê lâng siunn kuè kan-khiáu, m̄-thang hōo i ji̍p-lâi lán kong-si siōng-pan, nā-bô, sī ē “tshī niáu-tshí, kā pòo-tē”.",
  },
  {
    hanji:
      "愈有學問愈有才情的人，若像人講的「飽穗的稻仔，頭犁犁」，會予人愈尊敬。",
    tailo:
      "Jú ū ha̍k-būn jú ū tsâi-tsîng ê lâng, ná-tshiūnn lâng kóng--ê “pá-suī ê tiū-á, thâu lê-lê”, ē hōo lâng jú tsun-kìng.",
  },
  {
    hanji:
      "你無聽人講「骨力食栗，貧惰吞瀾」呢？若肯做就毋驚無通食，上驚的是欲食毋討趁，可能就愛看人食穿矣。",
    tailo:
      "Lí bô thiann lâng kóng “kut-la̍t tsia̍h la̍t, pîn-tuānn thun nuā”--nih? Nā khíng tsò tō m̄ kiann bô thang tsia̍h, siōng kiann--ê sī beh tsia̍h m̄ thó-thàn, khó-lîng tō ài khuànn lâng tsia̍h-tshīng--ah.",
  },
  {
    hanji:
      "伊串都用共人騙咧賺食，閣展講按呢攏免本，毋過「僥倖錢，失德了；冤枉錢，跋輸筊」，緊慢伊會知悽慘。",
    tailo:
      "I tshuàn to īng kā lâng phiàn teh tsuán-tsia̍h, koh tián kóng án-ne lóng bián pún, m̄-koh “hiau-hīng-tsînn, sit-tik liáu; uan-óng-tsînn, pua̍h-su kiáu”, kín-bān i ē tsai tshi-tshám.",
  },
  {
    hanji:
      "叫伊做一點仔代誌，就若「慢牛厚屎尿」，𠢕拖沙閣連鞭頭殼疼、連鞭腹肚疼。",
    tailo:
      "Kiò i tsò tsi̍t-tiám-á tāi-tsì, tō ná “bān gû kāu-sái-jiō”, gâu thua-sua koh liâm-mi thâu-khak thiànn, liâm-mi pak-tóo thiànn.",
  },
  {
    hanji: "「疑人，毋成賊」，若無證據通做干證，就袂當烏白賴人。",
    tailo:
      "“Gî lâng, m̄ tsiânn tsha̍t”, nā bô tsìng-kì thang tsò kan-tsìng, tō bē-tàng oo-pe̍h luā--lâng.",
  },
  {
    hanji:
      "人講：「疑人，毋成賊。」佳哉警方有共代誌調查予伊清楚，才無冤枉著好人。",
    tailo:
      "Lâng kóng, “Gî lâng, m̄ tsiânn tsha̍t.” Ka-tsài kíng-hong ū kā tāi-tsì tiâu-tsa hōo i tshing-tshó, tsiah bô uan-óng-tio̍h hó-lâng.",
  },
  {
    hanji:
      "莫想遐濟啦！咱「盡人事，順天意」，到底會按怎就交予天公伯仔安排矣。",
    tailo:
      "Mài siūnn hiah tsē--lah! Lán “tsīn jîn-sū, sūn thinn-ì”, tàu-té ē án-tsuánn tō kau hōo thinn-kong-peh--á an-pâi--ah.",
  },
  {
    hanji:
      "公司的錢水雄雄轉踅袂過來，因端淡薄仔複雜，古早人講：「緊行無好步。」欲解決問題，千萬毋通傷過趕狂，愛三思而後行。",
    tailo:
      "Kong-si ê tsînn-tsuí hiông-hiông tńg-se̍h bē kuè--lâi, in-tuann tām-po̍h-á ho̍k-tsa̍p, kóo-tsá-lâng kóng, “Kín kiânn bô hó pōo.” Beh kái-kuat būn-tê, tshian-bān m̄-thang siunn kuè kuánn-kông, ài sàm-su jî hiō hîng.",
  },
  {
    hanji:
      "咱拄著代誌，上好是緊事寬辦，才袂重耽，愛知「緊紡無好紗，緊嫁無好大家」。",
    tailo:
      "Lán tú-tio̍h tāi-tsì, siōng hó sī kín-sū-khuann-pān, tsiah bē tîng-tânn, ài tsai “kín pháng bô hó se, kín kè bô hó ta-ke”.",
  },
  {
    hanji:
      "阿明瘦罔瘦，逐頓飯攏愛食四、五碗才知飽，莫怪人攏講伊「瘦田𠢕欶水」。",
    tailo:
      "A-bîng sán bóng sán, ta̍k tǹg pn̄g lóng ài tsia̍h sì, gōo uánn tsiah tsai pá, bo̍k-kuài lâng lóng kóng i “sán tshân gâu suh tsuí”.",
  },
  {
    hanji:
      "俗語講：「戲館邊的豬母，袂歕簫嘛會拍拍。」萬項技術，捷看捷摸加減嘛會曉。",
    tailo:
      "Sio̍k-gí kóng, “Hì-kuán-pinn ê ti-bó, bē pûn siau mā ē phah-phik.” Bān-hāng ki-su̍t, tsia̍p khuànn tsia̍p bong ke-kiám mā ē-hiáu.",
  },
  {
    hanji:
      "咱這馬這間厝細罔細，毋過蹛著誠慣勢，人講：「豬岫毋值狗岫穩。」你莫閣想欲開大錢去買樓仔厝。",
    tailo:
      "Lán tsit-má tsit king tshù sè bóng sè, m̄-koh tuà tio̍h tsiânn kuàn-sì, lâng kóng, “Ti-siū m̄-ta̍t káu-siū ún.” Lí mài koh siūnn-beh khai tuā tsînn khì bé lâu-á-tshù.",
  },
  {
    hanji:
      "頭家人上要緊的工課是管理公司的業務，毋通「豬頭毋顧，顧鴨母卵」，干焦咧斟酌辦公室的花有沃水無？",
    tailo:
      "Thâu-ke-lâng siōng iàu-kín ê khang-khuè sī kuán-lí kong-si ê gia̍p-bū, m̄-thang “ti-thâu m̄ kòo, kòo ah-bó-nn̄g”, kan-na teh tsim-tsiok pān-kong-sik ê hue ū ak-tsuí--bô?",
  },
  {
    hanji:
      "若欲予人會佮意聽你講古，上無，腹肚內嘛愛有膏，像你按呢講無三兩句話就講袂落去，真正是「豬頭皮炸無油」。",
    tailo:
      "Nā beh hōo lâng ē kah-ì thiann lí kóng-kóo, siōng-bô, pak-tóo-lāi mā ài ū ko, tshiūnn lí án-ne kóng bô sann nn̄g kù uē tō kóng bē lo̍h--khì, tsin-tsiànn sī “ti-thâu-phuê tsuànn bô iû”.",
  },
  {
    hanji:
      "買物件的時，生理人講的話免不了會「賣茶講茶芳，賣花講花紅」，咱共參考一下就好，免總共信。",
    tailo:
      "Bé mi̍h-kiānn ê sî, sing-lí-lâng kóng ê uē bián-put-liáu ē “bē tê kóng tê phang, bē hue kóng hue âng”, lán kā tsham-khó--tsi̍t-ē tō hó, bián tsóng kā sìn.",
  },
  {
    hanji:
      "伊攏講伊經銷的烏油誠讚，正經是「賣茶講茶芳，賣花講花紅」，咱猶是加行幾間仔才袂予伊偏去。",
    tailo:
      "I lóng kóng i king-siau ê oo-iû tsiânn tsán, tsìng-king sī “bē tê kóng tê phang, bē hue kóng hue âng”, lán iáu-sī ke kiânn--kuí-king-á tsiah bē hōo i phinn--khì.",
  },
  {
    hanji:
      "做人、做代誌著愛跤踏實地，若干焦欲變彼款「鋪面蟶，浸水蚵」的齣頭，連鞭就會予人看破跤手。",
    tailo:
      "Tsò-lâng, tsò tāi-tsì tio̍h-ài kha-ta̍h-si̍t-tē, nā kan-na beh pìnn hit khuán “phoo-bīn than, tsìm-tsuí ô” ê tshut-thâu, liâm-mi tō ē hōo lâng khuànn-phuà-kha-tshiú.",
  },
  {
    hanji:
      "俗語講「靠山山會崩，靠水水會焦」，萬項代誌靠家己去拍拚，是上穩當的步數。",
    tailo:
      "Sio̍k-gí kóng “khò suann suann ē pang, khò tsuí tsuí ē ta”, bān-hāng tāi-tsì khò ka-kī khì phah-piànn, sī siōng ún-tàng ê pōo-sòo.",
  },
  {
    hanji:
      "咱若欲佇社會佮人做代誌，著愛照起工來，仙都毋通想欲偏人，「樹頭徛予在，毋驚樹尾做風颱」。",
    tailo:
      "Lán nā beh tī siā-huē kah lâng tsò tāi-tsì, tio̍h-ài tsiàu-khí-kang lâi, sian to m̄-thang siūnn-beh phinn--lâng, “tshiū-thâu khiā hōo tsāi, m̄ kiann tshiū-bué tsò-hong-thai”.",
  },
  {
    hanji:
      "人講：「樹頭徛予在，毋驚樹尾做風颱。」阿金仔做人實在閣有信用，透底都毋驚人佇尻川後咧生閒仔話。",
    tailo:
      "Lâng kóng, “Tshiū-thâu khiā hōo tsāi, m̄ kiann tshiū-bué tsò-hong-thai.” A-kim--á tsò-lâng si̍t-tsāi koh ū sìn-iōng, thàu-té to m̄ kiann lâng tī kha-tshng-āu teh senn îng-á-uē.",
  },
  {
    hanji:
      "講話袂使傷譀，著愛真的才通講；若定咧歕雞胿是會予人看破跤手，久來人就會講你是「膨風水雞刣無肉」喔！",
    tailo:
      "Kóng-uē bē-sái siunn hàm, tio̍h-ài tsin--ê tsiah thang kóng; nā tiānn teh pûn-ke-kui sī ē hōo lâng khuànn-phuà-kha-tshiú, kú--lâi lâng tō ē kóng lí sī “phòng-hong tsuí-ke thâi bô bah”--ooh!",
  },
  {
    hanji:
      "這擺的比賽，人都共咱唱聲矣，講欲予咱輸甲足歹看的，「輸人毋輸陣，輸陣歹看面」，咱著較綿爛操練咧，較袂落人的喙。",
    tailo:
      "Tsit pái ê pí-sài, lâng to kā lán tshiàng-siann--ah, kóng beh hōo lán su kah tsiok pháinn-khuànn--ê, “su lâng m̄ su tīn, su tīn pháinn-khuànn bīn”, lán tio̍h  khah mî-nuā tshau-liān--leh, khah bē lo̍h-lâng-ê-tshuì.",
  },
  {
    hanji:
      "當今社會無錢行無路，所以咱目睭擘金就愛趁錢，毋過人講「錢四跤，人兩跤」，人逐錢逐無歇，到目睭瞌去才會煞。",
    tailo:
      "Tong-kim siā-huē bô tsînn kiânn bô-lōo, sóo-í lán ba̍k-tsiu peh-kim tō ài thàn-tsînn, m̄-koh lâng kóng “tsînn sì kha, lâng nn̄g kha”, lâng jiok tsînn jiok bô hioh, kàu ba̍k-tsiu kheh--khì tsiah ē suah.",
  },
  {
    hanji:
      "你看伊「頭大面四方，肚大居財王」，相命仙講伊另日仔定著是大富大貴的人。",
    tailo:
      "Lí khuànn i “thâu tuā bīn sù-hong, tóo tuā ki-tsâi ông”, siòng-miā-sian kóng i līng-ji̍t-á tiānn-tio̍h sī tuā-hù-tuā-kuì ê lâng.",
  },
  {
    hanji: "做代誌若不時「頭燒燒，尾冷冷」，欲成功就較僫囉！",
    tailo:
      "Tsò tāi-tsì nā put-sî “thâu sio-sio, bué líng-líng”, beh sîng-kong tō khah oh--looh!",
  },
  {
    hanji:
      "伊都毋知頭毋知尾，你閣講遐緊，較加伊嘛袂輸「鴨仔聽雷」，愣佇遐若柴頭尪仔咧！",
    tailo:
      "I to m̄ tsai thâu m̄ tsai bué, lí koh kóng hiah kín, khah-ke i mā bē-su “ah-á thiann luî”, gāng tī hia ná tshâ-thâu-ang-á--leh!",
  },
  {
    hanji:
      "寢去外國讀語言學校，逐日都親像「鴨仔聽雷」咧，攏聽無先生咧講啥，真正食力甲袂曉講。",
    tailo:
      "Tshím khì guā-kok tha̍k gí-giân ha̍k-hāu, ta̍k-ji̍t to tshin-tshiūnn “ah-á thiann luî”--leh, lóng thiann-bô sian-sinn teh kóng siannh, tsin-tsiànn tsia̍h-la̍t kah bē-hiáu kóng.",
  },
  {
    hanji:
      "爸母毋但愛關心囡仔的健康佮學業，嘛愛注意伊的人際關係，因為「龍交龍，鳳交鳳，隱痀的交侗戇。」朋友對囡仔的影響有時仔比爸母閣較大。",
    tailo:
      "Pē-bú m̄-nā ài kuan-sim gín-á ê kiān-khong kah ha̍k-gia̍p, mā ài tsù-ì i ê jîn-tsè kuan-hē, in-uī “lîng kau lîng, hōng kau hōng, ún-ku--ê kau tòng-gōng.” Pîng-iú tuì gín-á ê íng-hióng ū-sî-á pí pē-bú koh-khah tuā.",
  },
  {
    hanji:
      "阿義仔笑阿土仔頇顢讀冊，論真來講是「龜笑鱉無尾，鱉笑龜粗皮」，一个考四十分，一个考三十八，阿義仔是有較𠢕諾？",
    tailo:
      "A-gī--á tshiò A-thóo--á hân-bān tha̍k-tsheh, lūn-tsin lâi kóng sī “ku tshiò pih bô bué, pih tshiò ku tshoo phuê”, tsi̍t ê khó sì-tsa̍p hun, tsi̍t ê khó sann-tsa̍p-peh, A-gī--á sī ū khah gâu--hioh?",
  },
  {
    hanji:
      "伊拄入來公司，看著都古意古意，啥人知久來變老鳥煞「龜跤趖出來」，見若有菜鳥入來就欲共人創治。",
    tailo:
      "I tú ji̍p-lâi kong-si, khuànn tio̍h to kóo-ì-kóo-ì, siánn-lâng tsai kú--lâi piàn lāu-tsiáu suah “ku-kha sô--tshut-lâi”, kiàn-nā ū tshài-tsiáu ji̍p--lâi tō beh kā lâng tshòng-tī.",
  },
  {
    hanji: "「龜跤龜內肉」，無論查某囝抑後生，攏是序大人的心肝寶貝。",
    tailo:
      "“Ku-kha ku-lāi bah”, bô-lūn tsa-bóo-kiánn ia̍h hāu-senn, lóng sī sī-tuā-lâng ê sim-kuann pó-puè.",
  },
  {
    hanji:
      "這間新開的店講納一百箍參加會員就有一份會員禮物，「龜跤龜內肉」，其實這份禮物就是用咱會員費買的。",
    tailo:
      "Tsit king sin khui ê tiàm kóng la̍p tsi̍t-pah khoo tsham-ka huē-uân tō ū tsi̍t hūn huē-uân lé-bu̍t, “ku-kha ku-lāi bah”, kî-si̍t tsit hūn lé-bu̍t tō sī  īng lán huē-uân-huì bé--ê.",
  },
  {
    hanji:
      "你一月日才趁彼屑仔錢，家己都飼袂飽矣，閣想欲學人蓄厝蓄車，真正是「閹雞趁鳳飛」。",
    tailo:
      "Lí tsi̍t gue̍h-ji̍t tsiah thàn hit-sut-á tsînn, ka-kī to tshī bē pá--ah, koh siūnn-beh o̍h lâng hak-tshù hak tshia, tsin-tsiànn sī “iam-ke thàn hōng pue”.",
  },
  {
    hanji:
      "咱做代誌愛有耐心，毋通驚艱苦，人講「戲棚跤徛久就是你的」，若會當堅持到底，相信咱一定會成功。",
    tailo:
      "Lán tsò tāi-tsì ài ū nāi-sim, m̄-thang kiann kan-khóo, lâng kóng “hì-pênn-kha khiā kú tō sī lí ê”, nā ē-tàng kian-tshî kàu-té,  siong-sìn lán it-tīng ē sîng-kong.",
  },
  {
    hanji:
      "俗語講：「毛毛仔雨落久，塗嘛會澹。」咱人若加減做、加減趁，也會賰一寡仔家伙。",
    tailo:
      "Sio̍k-gí kóng, “Mn̂g-mn̂g-á-hōo lo̍h-kú, thôo mā ē tâm.” Lán-lâng nā ke-kiám tsò, ke-kiám thàn, iā ē tshun tsi̍t-kuá-á ke-hué.",
  },
  {
    hanji:
      "拄著代誌袂順序，若肯骨力去做，堅持落去，「毛毛仔雨落久，塗嘛會澹」，閣較困難的代誌嘛會當解決。",
    tailo:
      "Tú-tio̍h tāi-tsì bē sūn-sī, nā khíng kut-la̍t khì tsò, kian-tshî--lo̍h-khì, “mn̂g-mn̂g-á-hōo lo̍h-kú, thôo mā ē tâm”, koh-khah khùn-lân ê tāi-tsì mā ē-tàng kái-kuat.",
  },
  {
    hanji: "「艱苦頭，快活尾」的道理人人知，毋過有擋頭的人才做會到。",
    tailo:
      "“Kan-khóo thâu, khuìnn-ua̍h bué” ê tō-lí lâng-lâng tsai, m̄-koh ū-tòng-thâu ê lâng tsiah tsò ē kàu.",
  },
  {
    hanji:
      "俗語講：「艱苦頭，快活尾。」阿發自國小出業了後就綴人去做塗水，骨力趁錢來飼規家伙仔，天公伯仔也真疼惜伊，予伊娶著願意做伙拍拚的媠某，閣踏著好時機佮人合股起厝趁著錢，兩个囡仔嘛真有孝閣有才情，予伊穩心仔提早退休，佮𪜶牽手鬥陣去遊山玩水。",
    tailo:
      "Sio̍k-gí kóng, “Kan-khóo thâu, khuìnn-ua̍h bué.” A-huat tsū kok-sió tshut-gia̍p liáu-āu tō tuè lâng khì tsò thôo-tsuí, kut-la̍t thàn-tsînn lâi tshī kui-ke-hué-á, thinn-kong-peh--á iā tsin thiànn-sioh--i, hōo i tshuā-tio̍h guān-ì tsò-hué phah-piànn ê suí bóo, koh ta̍h-tio̍h hó sî-ki kah lâng ha̍p-kóo khí-tshù thàn-tio̍h tsînn, nn̄g ê gín-á mā tsin iú-hàu koh ū tsâi-tsîng, hōo i ún-sim-á thê-tsá thè-hiu, kah in khan-tshiú tàu-tīn khì iû-san-uán-suí.",
  },
  {
    hanji:
      "判斷媒體消息的正確度真誠重要，社會定定有人放一个風聲，隨就有人「講一个影，生一个囝」，綴咧烏白傳消息。",
    tailo:
      "Phuànn-tuàn muî-thé siau-sit ê tsìng-khak-tōo tsin-tsiânn tiōng-iàu, siā-huē tiānn-tiānn ū lâng pàng tsi̍t ê hong-siann, suî tō ū lâng “kóng tsi̍t ê iánn, senn tsi̍t ê kiánn”, tuè leh oo-pe̍h thuân siau-sit.",
  },
  {
    hanji:
      "食物件毋通拚遐雄勢，人講「講著食，舂破額」，你按呢袂輸枵鬼仝款。",
    tailo:
      "Tsia̍h mi̍h-kiānn m̄-thang piànn hiah hiông-sè, lâng kóng “kóng-tio̍h tsia̍h, tsing-phuà hia̍h”, lí án-ne bē-su iau-kuí kāng-khuán.",
  },
  {
    hanji: "貪心的人「講著食，舂破額」，到尾仔嘛無較贏。",
    tailo:
      "Tham-sim ê lâng “kóng-tio̍h tsia̍h, tsing-phuà hia̍h”, kàu bué--á mā bô khah iânn.",
  },
  {
    hanji: "「搖人無才，搖豬無刣」，咱愛較定著咧，才袂予人看袂起。",
    tailo:
      "“Iô lâng bô-tsâi, iô ti bô thâi”, lán ài khah tiānn-tio̍h--leh, tsiah bē hōo lâng khuànn-bē-khí.",
  },
  {
    hanji:
      "俗語講：「斷掌查埔做相公，斷掌查某守空房。」以早這句無影無跡的話，害死一寡斷掌的查某人，真正是買命。",
    tailo:
      "Sio̍k-gí kóng, “Tn̄g-tsiúnn tsa-poo tsò siùnn-kang, tn̄g-tsiúnn tsa-bóo tsiú khang-pâng.” Í-tsá tsit kù bô-iánn-bô-tsiah ê uē, hāi-sí tsi̍t-kuá tn̄g-tsiúnn ê tsa-bóo-lâng, tsin-tsiànn sī bé-miā.",
  },
  {
    hanji:
      "彼个人客䆀閣厚屎，見擺來攏欲賒數，就像人咧講的「䆀猴𠢕欠數」。",
    tailo:
      "Hit ê lâng-kheh bái koh kāu-sái, kiàn-pái lâi lóng beh sia-siàu, tō tshiūnn lâng teh kóng--ê “bái-kâu gâu khiàm-siàu”.",
  },
  {
    hanji:
      "伊拄入去公司就搪著「舊囚食新囚」，逐項代誌老鳥都欲共伊食死死，無欲予伊有機會通出頭。",
    tailo:
      "I tú ji̍p-khì kong-si tō tn̄g-tio̍h “kū siû tsia̍h sin siû”, ta̍k hāng tāi-tsì lāu-tsiáu to beh kā i tsia̍h-sí-sí, bô beh hōo i ū ki-huē thang tshut-thâu.",
  },
  {
    hanji:
      "頭家定定一支喙踅踅唸，毋過「雜唸大家出蠻皮新婦」，久來下跤手人攏麻痺去矣，無咧共伊信篤。",
    tailo:
      "Thâu-ke tiānn-tiānn tsi̍t ki tshuì se̍h-se̍h-liām, m̄-koh “tsa̍p-liām ta-ke tshut bân-phuê sin-pū”, kú--lâi ē-kha-tshiú-lâng lóng bâ-pì--khì--ah, bô teh kā i sìn-táu.",
  },
  {
    hanji:
      "伊少年的時袂曉想，無了解爸母的苦心，閣定定共𪜶夯硬篙，等到伊做人爸母矣，才體會著「雙手抱孩兒，才知爸母時」的道理。",
    tailo:
      "I siàu-liân ê sî bē-hiáu siūnn, bô liáu-kái pē-bú ê khóo-sim, koh tiānn-tiānn kā in giâ-ngē-ko, tán-kàu i tsò lâng pē-bú--ah, tsiah thé-huē-tio̍h “siang-tshiú phō hâi-jî, tsiah tsai pē-bú sî” ê tō-lí.",
  },
  {
    hanji:
      "俗語講：「雙个旋，惡甲無人問。」阮小弟雖然雙个旋，毋過伊性地好，閣真有人緣，共這款無科學根據的古早話當做笑談就好。",
    tailo:
      "Sio̍k-gí kóng, “Siang ê tsn̄g, ok kah bô lâng mn̄g.” Guán sió-tī sui-jiân siang ê tsn̄g, m̄-koh i sìng-tē hó, koh tsin ū-lâng-iân, kā tsit khuán bô kho-ha̍k kin-kì ê kóo-tsá uē tòng-tsò tshiàu-tâm tō hó.",
  },
  {
    hanji: "歹代就毋通做，愛知影「雞卵密密也有縫」，代誌早慢會煏空。",
    tailo:
      "Pháinn-tāi tō m̄-thang tsò, ài tsai-iánn “ke-nn̄g ba̍t-ba̍t iā ū phāng”, tāi-tsì tsá-bān ē piak-khang.",
  },
  {
    hanji:
      "伊掠準進前共人烏西這層代誌處理甲誠好勢矣，毋過「雞卵密密也有縫」，尾仔猶是煏空矣。",
    tailo:
      "I lia̍h-tsún tsìn-tsîng kā lâng oo-se tsit tsân tāi-tsì tshú-lí kah tsiânn hó-sè--ah, m̄-koh “ke-nn̄g ba̍t-ba̍t iā ū phāng”, bué--á iáu-sī  piak-khang--ah.",
  },
  {
    hanji:
      "人看咱無，咱顛倒愛較拍拚。俗語講：「雞屎落塗，也有三寸煙。」咱若會長志，人就毋敢看衰咱。",
    tailo:
      "Lâng khuànn lán bô, lán tian-tò ài khah phah-piànn. Sio̍k-gí kóng, “Ke-sái lo̍h-thôo, iā ū sann tshùn ian.” Lán nā ē tsiáng-tsì, lâng tō m̄ kánn khuànn-sue--lán.",
  },
  {
    hanji:
      "人出世就有好額散的差別，毋過人講「雞屎落塗，也有三寸煙」，散赤囡仔有志氣，閣較會予人呵咾。",
    tailo:
      "Lâng tshut-sì tō ū hó-gia̍h-sàn ê tsha-pia̍t, m̄-koh lâng kóng “ke-sái lo̍h-thôo, iā ū sann tshùn ian”, sàn-tshiah gín-á ū tsì-khì, koh-khah ē hōo lâng o-ló.",
  },
  {
    hanji:
      "伊自少年就對下港起去臺北做生理，佇遐娶某生囝，到今五十外冬矣，毋過「離鄉，無離腔」，講話的時猶原有下港腔。",
    tailo:
      "I tsū siàu-liân tō tuì ē-káng khí-khì Tâi-pak tsò-sing-lí, tī hia tshuā-bóo senn-kiánn, kàu-tann gōo-tsa̍p-guā tang--ah, m̄-koh “lī hiunn, bô lī khiunn”, kóng-uē ê sî iu-guân ū ē-káng khiunn.",
  },
  {
    hanji:
      "人講：「關門著閂，講話著看。」咱講話著愛細膩斟酌，才袂無張無持去共人得失著。",
    tailo:
      "Lâng kóng, “Kuainn-mn̂g tio̍h tshuànn, kóng-uē tio̍h khuànn.” Lán kóng-uē tio̍h-ài sè-jī tsim-tsiok, tsiah bē bô-tiunn-bô-tî khì kā lâng tik-sit--tio̍h.",
  },
  {
    hanji:
      "感謝你點醒我「勸人做好代，較贏食早齋」，我會加做寡善事，共有困難的人鬥相共。",
    tailo:
      "Kám-siā lí tiám-tshénn guá “khǹg lâng tsò hó tāi, khah iânn tsia̍h tsá-tsai”, guá ē ke tsò kuá siān-sū, kā ū khùn-lân ê lâng tàu-sann-kāng.",
  },
  {
    hanji:
      "人講：「勸恁有孝千萬句，袂曉有孝豬狗牛。」你按呢共恁序大人忤逆，實在誠不應該。",
    tailo:
      "Lâng kóng, “Khǹg lín iú-hàu tshian-bān kù, bē-hiáu iú-hàu ti káu gû.” Lí án-ne kā lín sī-tuā-lâng ngóo-gi̍k, si̍t-tsāi tsiânn put ing-kai.",
  },
  {
    hanji:
      "明其知伊這个人是無半撇，猶是交代一寡簡單的穡頭予伊試看覓咧，結局照常做甲離離落落，有影是「爛塗袂糊得壁」。",
    tailo:
      "Bîng-ki-tsai i tsit ê lâng sī bô-puànn-phiat, iáu-sī kau-tài tsi̍t-kuá kán-tan ê sit-thâu hōo i tshì khuànn-māi--leh, kiat-kio̍k tsiàu-siông tsò kah li-li-lak-lak, ū-iánn sī “nuā-thôo bē-kôo-tit piah”.",
  },
  {
    hanji:
      "俗語講：「歡歡喜喜一工，煩煩惱惱也一工。」做人著愛較樂暢咧，煩惱是加工的。",
    tailo:
      "Sio̍k-gí kóng, “Huann-huann-hí-hí tsi̍t kang, huân-huân-ló-ló iā tsi̍t kang.” Tsò lâng tio̍h-ài khah lo̍k-thiòng--leh, huân-ló sī ke-kang--ê.",
  },
  {
    hanji:
      "我知影你揣無頭路心內艱苦，毋過「歡歡喜喜一工，煩煩惱惱也一工」，你著看較開咧，咱閣來去揣。",
    tailo:
      "Guá tsai-iánn lí tshuē-bô thâu-lōo sim-lāi kan-khóo, m̄-koh “huann-huann-hí-hí tsi̍t kang, huân-huân-ló-ló iā tsi̍t kang”, lí tio̍h khuànn khah khui--leh, lán koh lâi-khì tshuē.",
  },
  {
    hanji:
      "遮爾簡單的問題，你一个大學生煞毋知欲按怎解決，敢是「讀冊，讀佇尻脊骿」？",
    tailo:
      "Tsiah-nī kán-tan ê būn-tê, lí tsi̍t ê tāi-ha̍k-sing suah m̄ tsai beh án-tsuánn kái-kuat, kám-sī “tha̍k-tsheh, tha̍k tī kha-tsiah-phiann”?",
  },
  {
    hanji:
      "𪜶共往過佇學校學著的智識用來做歹代誌，正港是「讀冊，讀佇尻脊骿」。",
    tailo:
      "In kā íng-kuè tī ha̍k-hāu o̍h--tio̍h ê tì-sik īng-lâi tsò pháinn tāi-tsì, tsiànn-káng sī “tha̍k-tsheh, tha̍k tī kha-tsiah-phiann”.",
  },
  {
    hanji:
      "人講：「驚某大丈夫，拍某豬狗牛。」翁仔某著愛互相疼惜佮尊存，毋通起跤動手。",
    tailo:
      "Lâng kóng, “Kiann bóo tāi-tiōng-hu, phah bóo ti káu gû.” Ang-á-bóo tio̍h-ài hōo-siong thiànn-sioh kah tsun-tshûn, m̄-thang khí-kha-tāng-tshiú.",
  },
  {
    hanji:
      "伊這个人有較直，袂曉變竅，毋過「戇的也有一項會」，交代伊做直頭路，伊攏會照起工做，袂拖沙、袂勼水，真可取。",
    tailo:
      "I tsit ê lâng ū khah ti̍t, bē-hiáu piàn-khiàu, m̄-koh “gōng--ê iā ū tsi̍t hāng ē”, kau-tài i tsò ti̍t thâu-lōo, i lóng ē tsiàu-khí-kang tsò, bē thua-sua, bē kiu-tsuí, tsin khó-tshú.",
  },
  {
    hanji:
      "阿志定定都「到彼號時，攑彼號旗」，看佗一爿較好空就倚佗一爿，所以逐家攏無愛佮伊做朋友。",
    tailo:
      "A-tsì tiānn-tiānn to “kàu hit-lō sî, gia̍h hit-lō kî”, khuànn tó tsi̍t pîng khah hó-khang tō uá tó tsi̍t pîng, sóo-í ta̍k-ke lóng bô ài kah i tsò pîng-iú.",
  },
  {
    hanji:
      "這間公司的派系誠濟，員工袂和諧，若像「放尿攪沙袂做堆」，致使業績攏無通好。",
    tailo:
      "Tsit king kong-si ê phài-hē tsiânn tsē, uân-kang bē hô-hâi, ná-tshiūnn “pàng-jiō kiáu sua bē tsò-tui”, tì-sú gia̍p-tsik lóng bô-thang hó.",
  },
  {
    hanji:
      "人講：「物會使濫糝食，話袂使濫糝講。」彼寡無影無跡的謠言毋好烏白傳，較袂惹出禍端。",
    tailo:
      "Lâng kóng, “Mi̍h ē-sái lām-sám tsia̍h, uē bē-sái lām-sám kóng.” Hit kuá bô-iánn-bô-tsiah ê iâu-giân m̄-hó oo-pe̍h thuân, khah bē jiá-tshut hō-tuan.",
  },
  {
    hanji:
      "阮阿舅身體真勇健，毋捌破病過，二九暝彼工煞聽著伊過身的消息，真正是「無風無搖，倒大樹」。",
    tailo:
      "Guán a-kū sin-thé tsin ióng-kiānn, m̄ bat phuà-pēnn--kuè, Jī-káu-mê hit kang suah thiann-tio̍h i kuè-sin ê siau-sit, tsin-tsiànn sī “bô-hong-bô-iô, tó tuā-tshiū”.",
  },
  {
    hanji:
      "雖罔表兄功課無甲偌好，毋過「荏荏馬也有一步踢」，伊參加全國畫圖比賽定定攏會著等。",
    tailo:
      "Sui-bóng piáu-hiann kong-khò bô kah guā hó, m̄-koh “lám-lám bé iā ū tsi̍t pōo that”, i tsham-ka tsuân-kok uē-tôo pí-sài tiānn-tiānn lóng ē tio̍h-tíng.",
  },
  {
    hanji:
      "有影是「好心好行，無衫通穿」。我好心替人做保，伊煞走路害我愛賣厝替伊還錢。",
    tailo:
      "Ū-iánn sī “hó-sim-hó-hīng, bô sann thang tshīng”. Guá hó-sim thè lâng tsò-pó, i suah tsáu-lōo hāi guá ài bē tshù thè i hîng tsînn.",
  },
  {
    hanji:
      "這件代誌派張的去做袂使得，叫林的去做嘛毋好，有影是「放屎也疼，放尿也疼」。",
    tailo:
      "Tsit kiānn tāi-tsì phài Tiunn--ê khì tsò bē-sái--tit, kiò Lîm--ê khì tsò mā m̄ hó, ū-iánn sī “pàng-sái iā thiànn, pàng-jiō iā thiànn”.",
  },
  {
    hanji:
      "拚經濟愛用電，毋過燃塗炭汙染空氣，核能發電無安全，綠能成本傷懸，實在是「放屎也疼，放尿也疼」。",
    tailo:
      "Piànn king-tsè ài iōng tiān, m̄-koh hiânn thôo-thuànn u-jiám khong-khì, hi̍k-lîng huat-tiān bô an-tsuân, li̍k-lîng sîng-pún siunn kuân, si̍t-tsāi sī “pàng-sái iā thiànn, pàng-jiō iā thiànn”.",
  },
  {
    hanji:
      "這項任務毋接手頂司會罵，若接手下司會嫌，真正「放屎也疼，放尿也疼」，有夠歹扭搦。",
    tailo:
      "Tsit hāng jīm-bū m̄ tsiap-tshiú tíng-si ē mē, nā tsiap-tshiú ē-si ē hiâm, tsin-tsiànn “pàng-sái iā thiànn, pàng-jiō iā thiànn”, ū-kàu pháinn-liú-la̍k.",
  },
  {
    hanji:
      "這改比賽去予對方修理甲塗塗塗，佇檢討會裡，教練予人檢討半點鐘，會使講是「滿面專豆花」。",
    tailo:
      "Tsit kái pí-sài khì hōo tuì-hong siu-lí kah thôo-thôo-thôo, tī kiám-thó-huē--lí, kàu-liān hōo lâng kiám-thó puànn tiám-tsing, ē-sái kóng sī “muá-bīn tsuan tāu-hue”.",
  },
  {
    hanji:
      "伊大主大意烏白投資，結果了甲叫毋敢，予𪜶某罵甲「滿面專豆花」。",
    tailo:
      "I tuā-tsú-tuā-ì oo-pe̍h tâu-tsu, kiat-kó liáu kah kiò-m̄-kánn, hōo in bóo mē kah “muá-bīn tsuan tāu-hue”.",
  },
  {
    hanji:
      "伊真有才情，做人嘛誠懇，該當有真好的前途，可惜原本咧上班的公司煞倒去，就按呢轉去食家己，有影是人咧講的「人𠢕，天咧做對頭」，予人感覺真遺憾。",
    tailo:
      "I tsin ū tsâi-tsîng, tsò-lâng mā sîng-khún, kai-tong ū tsin hó ê tsiân-tôo, khó-sioh guân-pún teh siōng-pan ê kong-si suah tó--khì, tsiū-án-ne tńg-khì tsia̍h-ka-kī, ū-iánn sī lâng teh kóng--ê “lâng gâu, thinn teh tsò tuì-thâu”, hōo lâng kám-kak tsin uî-hām.",
  },
  {
    hanji:
      "阮阿母已經九十歲矣，煞變做愛食糖仔閣愛共我司奶，真正是「老人囡仔性」。",
    tailo:
      "Guán a-bú í-king káu-tsa̍p huè--ah, suah piàn-tsò ài tsia̍h thn̂g-á koh ài kā guá sai-nai, tsin-tsiànn sī “lāu-lâng gín-á-sìng”.",
  },
  {
    hanji: "坤伯仔真正是「老人囡仔性」，磕袂著就張，誠無伊法。",
    tailo:
      "Khun peh--á tsin-tsiànn sī “lāu-lâng gín-á-sìng”, kha̍p-bē-tio̍h tō tiunn, tsiânn bô i huat.",
  },
  {
    hanji:
      "我逐工載阿娟去上班，伊攏當做是應該的，干焦一工無閒通共伊載，伊就無欲插我，真正是「九頓米糕無上算，一頓冷糜抾起來囥」。",
    tailo:
      "Guá ta̍k-kang tsài A-kuan khì siōng-pan, i lóng tòng-tsò sī ing-kai--ê, kan-na tsi̍t kang bô-îng thang kā i tsài, i tō bô beh tshap--guá, tsin-tsiànn sī “káu tǹg bí-ko bô tsiūnn-sǹg, tsi̍t tǹg líng muâi khioh khí-lâi khǹg”.",
  },
  {
    hanji: "伊不管眾人的反對，硬欲「橫柴夯入灶」，佇這个社區開電動間仔。",
    tailo:
      "I put-kuán tsìng-lâng ê huán-tuì, ngē beh “huâinn tshâ giâ-ji̍p tsàu”, tī tsit ê siā-khu khui tiān-tōng-king-á.",
  },
  {
    hanji:
      "這項歹扭搦的代誌，無人欲插，咱共抾起來做，毋過煞是「拚甲流汗，予人嫌甲流瀾」，實在真毋值。",
    tailo:
      "Tsit hāng pháinn-liú-la̍k ê tāi-tsì, bô lâng beh tshap, lán kā khioh khí-lâi tsò, m̄-koh suah sī “piànn kah lâu-kuānn, hōo lâng hiâm kah lâu-nuā”, si̍t-tsāi tsin m̄-ta̍t.",
  },
  {
    hanji:
      "這擺你閣共我挵一下，我無欲佮你計較，毋過你愛知「肉欲予人食，骨毋予人齧」，後擺你若閣對我按呢，我就欲佮你清總數矣。",
    tailo:
      "Tsit pái lí koh kā guá lòng tsi̍t-ē, guá bô beh kah lí kè-kàu, m̄-koh lí ài tsai “bah beh hōo lâng tsia̍h, kut m̄ hōo lâng khè”, āu-pái lí nā koh tuì guá án-ne, guá tō beh kah lí tshing tsóng-siàu--ah.",
  },
  {
    hanji:
      "俗語講：「肉欲予人食，骨毋予人齧。」較早結婚的時，新郎這爿扛豬爿到新娘彼頭的時，新娘彼爿定著愛共豬頭、豬尾硩佇𣛮台，予人扛轉去還新郎，按呢才有照結婚的禮俗咧行。",
    tailo:
      "Sio̍k-gí kóng, “Bah beh hōo lâng tsia̍h, kut m̄ hōo lâng khè.” Khah-tsá kiat-hun ê sî, sin-lông tsit-pîng kng ti-pîng kàu sin-niû hit thâu ê sî, sin-niû hit-pîng tiānn-tio̍h ài kā ti-thâu, ti-bué teh tī siānn-tâi, hōo lâng kng tńg-khì hîng sin-lông, án-ne tsiah ū tsiàu kiat-hun ê lé-sio̍k teh kiânn.",
  },
  {
    hanji:
      "選舉的時，無仝黨派的候選人逐工「你看我殕殕，我看你霧霧」，互相攻擊，袂輸是冤仇人咧。",
    tailo:
      "Suán-kí ê sî, bô kāng tóng-phài ê hāu-suán-jîn ta̍k-kang “lí khuànn guá phú-phú, guá khuànn lí bū-bū”, hōo-siong kong-kik, bē-su sī uan-siû-lâng--leh.",
  },
  {
    hanji:
      "二姊欲嫁的前一暗，阿母共二姊交代講：「花食露水，人食喙水，做人的新婦拄著人著愛好喙佮人相借問，才會得人疼」。",
    tailo:
      "Jī-tsé beh kè ê tsîng tsi̍t àm, a-bú kā jī-tsé kau-tài kóng, “Hue tsia̍h lōo-tsuí, lâng tsia̍h tshuì-suí, tsò lâng ê sin-pū tú-tio̍h lâng tio̍h-ài hó-tshuì kah lâng sio-tsioh-mn̄g, tsiah ē tit-lâng-thiànn”.",
  },
  {
    hanji:
      "人講：「花食露水，人食喙水。」伊毋但口才好閣有才情，莫怪事業遮爾成功。",
    tailo:
      "Lâng kóng, “Hue tsia̍h lōo-tsuí, lâng tsia̍h tshuì-suí.” I m̄-nā kháu-tsâi hó koh ū tsâi-tsîng, bo̍k-kuài sū-gia̍p tsiah-nī sîng-kong.",
  },
  {
    hanji:
      "俗語講：「馬四跤也會著觸。」一時袂順序，毋通失志，繼續拍拚，成功一定是咱的。",
    tailo:
      "Sio̍k-gí kóng, “Bé sì kha iā ē tio̍h-tak.” Tsi̍t-sî bē sūn-sī, m̄-thang sit-tsì, kè-sio̍k phah-piànn, sîng-kong it-tīng sī lán ê.",
  },
  {
    hanji:
      "你不時佮頂司一句來一句去，毋驚予伊「點油做記號」，後擺免想欲升官。",
    tailo:
      "Lí put-sî kah tíng-si tsi̍t kù lâi tsi̍t kù khì, m̄ kiann hōo i “tiám iû tsò kì-hō”, āu-pái bián siūnn-beh sing-kuann.",
  },
  {
    hanji:
      "勸你心肝毋通遐大，才袂「掠龜走鱉，掠蟳走蠘」，無法度達成願望。",
    tailo:
      "Khǹg lí sim-kuann m̄-thang hiah tuā, tsiah bē “lia̍h-ku tsáu-pih, lia̍h-tsîm-tsáu-tshi̍h”, bô-huat-tōo ta̍t-sîng guān-bōng.",
  },
  {
    hanji:
      "我最近運氣足䆀，股票見買見落價，若賣掉就隨起價，真正是「掠龜走鱉，掠蟳走蠘」。",
    tailo:
      "Guá tsuè-kīn ūn-khì tsiok bái, kóo-phiò kiàn bé kiàn lo̍h-kè, nā bē-tiāu tō suî khí-kè, tsin-tsiànn sī “lia̍h-ku-tsáu-pih, lia̍h-tsîm-tsáu-tshi̍h”.",
  },
  {
    hanji: "欲成功愛靠家己認真拍拚，毋通規日干焦想欲「斬人的稻仔尾」。",
    tailo:
      "Beh sîng-kong ài khò ka-kī jīn-tsin phah-piànn, m̄-thang kui-ji̍t kan-na siūnn-beh “tsánn lâng ê tiū-á-bué”.",
  },
  {
    hanji:
      "阮董事長的助理對公司的員工定定「激一个參仔氣」，袂輸伊是頭家的款。",
    tailo:
      "Guán táng-sū-tiúnn ê tsōo-lí tuì kong-si ê uân-kang tiānn-tiānn “kik tsi̍t ê sim-á-khuì”, bē-su i sī thâu-ke ê khuán.",
  },
  {
    hanji:
      "邱董的舊年予人牽去筊間，今年隨輸甲貼底，走路閃債，人講「跋筊，家伙了」，真正是誠有道理。",
    tailo:
      "Khu-táng--ê kū-nî hōo lâng khan-khì kiáu-king, kin-nî suî su kah tah-té, tsáu-lōo siám-tsè, lâng kóng “pua̍h-kiáu, ke-hué liáu”, tsin-tsiànn sī tsiânn ū tō-lí.",
  },
  {
    hanji:
      "伊見擺報告寫袂出來，攏講是同學無欲共鬥相共，真正是「袂生，牽拖厝邊」。",
    tailo:
      "I kiàn-pái pò-kò siá bē tshut--lâi, lóng kóng sī tông-ha̍k bô beh kā tàu-sann-kāng, tsin-tsiànn sī “bē sinn, khan-thua tshù-pinn”.",
  },
  {
    hanji:
      "伊冊包揹咧講欲去圖書館讀冊，其實「捾籃仔假燒金」，是欲去佮查某朋友約會。",
    tailo:
      "I tsheh-pau phāinn--leh kóng beh khì tôo-su-kuán tha̍k-tsheh, kî-si̍t “kuānn nâ-á ké sio-kim”, sī beh khì kah tsa-bóo pîng-iú iok-huē.",
  },
  {
    hanji:
      "伊講伊是為著市民的福利出來競選，毋過我知影伊是「捾籃仔假燒金」，攏是為著伊家己的利益咧拍算。",
    tailo:
      "I kóng i sī uī-tio̍h tshī-bîn ê hok-lī tshut-lâi kīng-suán, m̄-koh guá tsai-iánn i sī “kuānn nâ-á ké sio-kim”, lóng sī uī-tio̍h i ka-kī ê lī-ik teh phah-sǹg.",
  },
  {
    hanji:
      "雖然這馬逐家生活有較好過矣，毋過「食甜，著愛憶著鹹」，咱嘛是愛繼續認真拍拚，食老才有好日子通過。",
    tailo:
      "Sui-jiân tsit-má ta̍k-ke sing-ua̍h ū khah hó-kuè--ah, m̄-koh “tsia̍h tinn, tio̍h-ài it-tio̍h kiâm”, lán mā sī ài kè-sio̍k jīn-tsin phah-piànn, tsia̍h-lāu tsiah ū hó ji̍t-tsí thang kuè.",
  },
  {
    hanji:
      "人講：「搬岫雞母生無卵。」你規年迵天攏咧換頭路，欲哪有可能會有出脫？",
    tailo:
      "Lâng kóng, “Puann siū ke-bó senn bô nn̄g.” Lí kui-nî-thàng-thinn lóng teh uānn thâu-lōo, beh ná ū khó-lîng ē ū tshut-thuat?",
  },
  {
    hanji:
      "你看伊逐工穿甲𪁎𪁎出門，其實「褲袋仔袋磅子」，攏是欲去揣人借錢。",
    tailo:
      "Lí khuànn i ta̍k-kang tshīng kah tshio-tshio tshut-mn̂g, kî-si̍t “khòo-tē-á tē pōng-tsí”, lóng sī beh khì tshuē lâng tsioh tsînn.",
  },
  {
    hanji:
      "咱欲佇社會上徛起，愛學會曉「一時風，駛一時船」，才綴會著時機趁會著錢。",
    tailo:
      "Lán beh tī siā-huē-siōng khiā-khí, ài o̍h ē-hiáu “tsi̍t-sî hong, sái tsi̍t-sî tsûn”, tsiah tuè ē tio̍h sî-ki thàn ē tio̍h tsînn.",
  },
  {
    hanji:
      "前幾工佇路裡，看著一个人若像是阮阿伯，行倚去欲共叫，才發現看毋著去，險險仔「半路認老爸」。",
    tailo:
      "Tsîng kuí kang tī lōo--lí, khuànn-tio̍h tsi̍t ê lâng ná-tshiūnn sī guán a-peh, kiânn uá-khì beh kā kiò, tsiah huat-hiān khuànn m̄-tio̍h--khì, hiám-hiám-á “puànn-lōo jīn lāu-pē”.",
  },
  {
    hanji:
      "爸母共你栽培到研究所出業矣，這馬你就愛「欲食胡蠅，家己欱」，毋通磕袂著就欲共爸母伸長手。",
    tailo:
      "Pē-bú kā lí tsai-puê kàu gián-kiù-sóo tshut-gia̍p--ah, tsit-má lí tō ài “beh tsia̍h hôo-sîn, ka-kī hap”, m̄-thang kha̍p-bē-tio̍h tō beh kā pē-bú tshun-tn̂g-tshiú.",
  },
  {
    hanji:
      "阿勇「大牛無惜力」，共咱社區的公園整理甲遮爾媠，請逐家拍噗仔共伊感謝。",
    tailo:
      "A-ióng “tuā gû bô sioh la̍t”,  kā lán siā-khu ê kong-hn̂g tsíng-lí kah tsiah-nī suí, tshiánn ta̍k-ke phah-pho̍k-á kā i kám-siā.",
  },
  {
    hanji:
      "你毋通干焦想欲「鵁鴒順便空」，愛家己骨力拍拚，若有成果，毋才會得著眾人的呵咾。",
    tailo:
      "Lí m̄-thang kan-na siūnn-beh “ka-līng sūn piān khang”, ài ka-kī kut-la̍t phah-piànn, nā ū sîng-kó, m̄-tsiah ē tit-tio̍h tsìng-lâng ê o-ló.",
  },
  {
    hanji:
      "阿忠上軁鑽，毋過一直揣袂著理想的頭路；阿義無揀頭路，煞搪著一个欣賞伊的頭家，真緊就升起來做主管。真正是「𠢕算，毋值拄搪」。",
    tailo:
      "A-tiong siōng nǹg-tsǹg, m̄-koh it-ti̍t tshuē bē tio̍h lí-sióng ê thâu-lōo; A-gī bô kíng thâu-lōo, suah tn̄g-tio̍h tsi̍t ê him-sióng--i ê thâu-ke, tsin kín tō sing khí-lâi tsò tsú-kuán. Tsin-tsiànn sī “gâu sǹg, m̄-ta̍t tú-tn̄g”.",
  },
  {
    hanji:
      "阿進死某了後，閣欲趁錢飼家，閣欲照顧猶未三歲的囡仔，實在是「一肩擔雞，雙頭啼」。",
    tailo:
      "A-tsìn sí bóo liáu-āu, koh beh thàn-tsînn tshī ke, koh beh tsiàu-kòo iáu-buē sann huè ê gín-á, si̍t-tsāi sī “tsi̍t king tann ke, siang-thâu thî”.",
  },
  {
    hanji:
      "阿南爸老囝幼，老爸破病愛人照顧，囡仔猶咧讀冊所費真傷，伊感覺家己袂輸是「一肩擔雞，雙頭啼」咧。",
    tailo:
      "A-lâm pē-lāu-kiánn-iù, lāu-pē phuà-pēnn ài lâng tsiàu-kòo, gín-á iáu teh tha̍k-tsheh sóo-huì tsin siong, i kám-kak ka-kī bē-su sī “tsi̍t king tann ke, siang-thâu thî”--leh.",
  },
  {
    hanji:
      "伊本底講好欲來鬥相共的，這馬煞攏揣袂著伊的人，敢會是「暗頭仔食西瓜，半暝仔反症」。",
    tailo:
      "I pún-té kóng hó beh lâi tàu-sann-kāng--ê, tsit-má suah lóng tshuē bē tio̍h i ê lâng, kám ē sī “àm-thâu-á tsia̍h si-kue, puànn-mê-á huán-tsìng”.",
  },
  {
    hanji: "看著昨暝予風颱拍落來的果子，作穡人就「欲哭無目屎」。",
    tailo:
      "Khuànn-tio̍h tsa-mê hōo hong-thai phah--lo̍h-lâi ê kué-tsí, tsoh-sit-lâng tō “beh khàu bô ba̍k-sái”.",
  },
  {
    hanji: "伊𤆬囡仔去踅街，煞偷提店頭的物件，實在是「教歹囡仔大細」。",
    tailo:
      "I tshuā gín-á khì se̍h-ke, suah thau-the̍h tiàm-thâu ê mi̍h-kiānn, si̍t-tsāi sī “kà pháinn gín-á tuā-sè”.",
  },
];

// 如果需要作為模組導出（ES6 modules），取消下面的註解：
// export { exampleSentences };
