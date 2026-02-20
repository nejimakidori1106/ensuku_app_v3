/* Data (generated from questions.txt) */
const QUESTIONS = [
  {
    "id": "q001",
    "category": "リーチ判断",
    "serial": 1,
    "theoryNo": 1,
    "problemNo": 1,
    "choices": [
      "打[9p]リーチ",
      "打[9p]ダマ"
    ],
    "answer": "打[9p]リーチ",
    "supplement": "",
    "question_image": "assets/questions/q1-1.png",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/a1-1A.png",
        "file": "a1-1A.png"
      },
      {
        "label": "NAGAのリーチ判断",
        "src": "assets/explain/a1-1B.png",
        "file": "a1-1B.png"
      }
    ],
    "explain_text": "《リーチ判断セオリー》\n【赤】リーチ+1飜【/赤】あれば愚形でもリーチ。\n後手でも、安牌を切ってのリーチならば見合う。",
    "prompt": "上家からリーチが入っています。\nどうする？"
  },
  {
    "id": "q002",
    "category": "リーチ判断",
    "serial": 2,
    "theoryNo": 1,
    "problemNo": 2,
    "choices": [
      "打[3s]リーチ",
      "打[3s]ダマ"
    ],
    "answer": "打[3s]リーチ",
    "supplement": "",
    "question_image": "assets/questions/q1-2.png",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/a1-2A.png",
        "file": "a1-2A.png"
      },
      {
        "label": "NAGAのリーチ判断",
        "src": "assets/explain/a1-2B.png",
        "file": "a1-2B.png"
      }
    ],
    "explain_text": "《リーチ判断セオリー》\n【赤】リーチ+1飜【/赤】あれば愚形でもリーチ。\n1枚切れでもリーチ。",
    "prompt": "テンパイしました。\nどうする？"
  },
  {
    "id": "q003",
    "category": "リーチ判断",
    "serial": 3,
    "theoryNo": 2,
    "problemNo": 1,
    "choices": [
      "打[4s]リーチ",
      "打[4s]ダマ"
    ],
    "answer": "打[4s]リーチ",
    "supplement": "満貫の取りこぼしは痛いので、満貫は和了率を落とせない。\nダマで満貫あるときはリーチしても和了率が大して落ちないならリーチ、大きく落ちるならダマが基本。",
    "question_image": "assets/questions/q2-1.png",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/a2-1A.png",
        "file": "a2-1A.png"
      },
      {
        "label": "NAGAのリーチ判断",
        "src": "assets/explain/a2-1B.png",
        "file": "a2-1B.png"
      }
    ],
    "explain_text": "《リーチ判断セオリー》\n両面待ちは【赤】ダマで満貫【/赤】なければ徹底してリーチ。",
    "prompt": "テンパイしました。\nどうする？"
  },
  {
    "id": "q004",
    "category": "リーチ判断",
    "serial": 4,
    "theoryNo": 2,
    "problemNo": 2,
    "choices": [
      "打[4s]リーチ",
      "打[4s]ダマ"
    ],
    "answer": "打[4s]ダマ",
    "supplement": "満貫の取りこぼしは痛いので、満貫は和了率を落とせない。\nダマで満貫あるときはリーチしても和了率が大して落ちないならリーチ、大きく落ちるならダマが基本。",
    "question_image": "assets/questions/q2-2.png",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/a2-2A.png",
        "file": "a2-2A.png"
      },
      {
        "label": "NAGAのリーチ判断",
        "src": "assets/explain/a2-2B.png",
        "file": "a2-2B.png"
      }
    ],
    "explain_text": "《リーチ判断セオリー》\n両面待ちは【赤】ダマで満貫【/赤】なければ徹底してリーチ。\nこの手は【赤】ダマで満貫【/赤】あるのでダマ。",
    "prompt": "テンパイしました。\nどうする？"
  },
  {
    "id": "q005",
    "category": "リーチ判断",
    "serial": 5,
    "theoryNo": 3,
    "problemNo": 1,
    "choices": [
      "打[W]リーチ",
      "打[W]ダマ"
    ],
    "answer": "打[W]ダマ",
    "supplement": "",
    "question_image": "assets/questions/q3-1.png",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/a3-1A.png",
        "file": "a3-1A.png"
      },
      {
        "label": "NAGAのリーチ判断",
        "src": "assets/explain/a3-1B.png",
        "file": "a3-1B.png"
      }
    ],
    "explain_text": "《リーチ判断セオリー》\nダマで【赤】5200点【/赤】以上の【赤】愚形役アリ【/赤】は、基本【赤】ダマ【/赤】。\n和了率MAXの選択を！",
    "prompt": "テンパイしました。\nどうする？"
  },
  {
    "id": "q006",
    "category": "リーチ判断",
    "serial": 6,
    "theoryNo": 4,
    "problemNo": 1,
    "choices": [
      "打[3s]リーチ",
      "打[3s]ダマ"
    ],
    "answer": "打[3s]リーチ",
    "supplement": "",
    "question_image": "assets/questions/q4-1.png",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/a4-1A.png",
        "file": "a4-1A.png"
      },
      {
        "label": "NAGAのリーチ判断",
        "src": "assets/explain/a4-1B.png",
        "file": "a4-1B.png"
      }
    ],
    "explain_text": "《リーチ判断セオリー》\nリーチしても和了率が大きく減少しないケース\n\n①【赤】巡目【/赤】が早い\n②【赤】スジ【/赤】待ち\n③【赤】序盤の捨て牌の外側【/赤】待ち\n④【赤】字牌【/赤】待ち\n⑤【赤】場に高い【/赤】待ち\n\nなどのときには、リーチによる打点上昇の恩恵が和了率の低下に見合う。\nダマで満貫あってもリーチしてOK！",
    "prompt": "テンパイしました。\nどうする？"
  },
  {
    "id": "q007",
    "category": "リーチ判断",
    "serial": 7,
    "theoryNo": 5,
    "problemNo": 1,
    "choices": [
      "打[7s]リーチ",
      "打[7s]ダマ"
    ],
    "answer": "打[7s]リーチ",
    "supplement": "",
    "question_image": "assets/questions/qr5-1.png",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/ar5-1A.png",
        "file": "ar5-1A.png"
      },
      {
        "label": "NAGAのリーチ判断",
        "src": "assets/explain/ar5-1B.png",
        "file": "ar5-1B.png"
      }
    ],
    "explain_text": "《リーチ判断セオリー》\n【赤】七対子【/赤】は【赤】先制リーチ【/赤】したい手役NO1。\n（ツモれば6400から。後手を踏んだら弱い）\n\n先制リーチを打つ価値がとても高いので、2.8待ち程度でもリーチ有力。\n3～7待ちは、プラス要素（【赤】スジ【/赤】になっている、【赤】場況が良い【/赤】など）が欲しい。",
    "prompt": "テンパイしました。\nどうする？"
  },
  {
    "id": "q008",
    "category": "リーチ判断",
    "serial": 8,
    "theoryNo": 7,
    "problemNo": 1,
    "choices": [
      "打[6s]リーチ",
      "打[6s]ダマ",
      "打[8s]リーチ",
      "打[8s]ダマ"
    ],
    "answer": "打[6s]リーチ",
    "supplement": "",
    "question_image": "assets/questions/q7-1.png",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/a7-1A.png",
        "file": "a7-1A.png"
      },
      {
        "label": "NAGAのリーチ判断",
        "src": "assets/explain/a7-1B.png",
        "file": "a7-1B.png"
      }
    ],
    "explain_text": "《リーチ判断セオリー》\n愚形のリーチのみは以下の5つの条件を4つ満たせば打っていい。\n\n①【赤】先制【/赤】\n②【赤】待ち【/赤】が良い\n③押し返されにくい（【赤】ドラ【/赤】が見えいる、【赤】親【/赤】、【赤】ラス目【/赤】、巡目が早いなど）\n④【赤】手変わり【/赤】が少ない\n⑤【赤】点況【/赤】（2着以上のときは【赤】✕【/赤】になりがち）\n\nねじまき鳥先生の簡単基準では、以下の3条件を【赤】全て満たす【/赤】場合は愚形のリーチのみは【赤】打ってはいけない【/赤】。\n\n①【赤】2着以上【/赤】\n②【赤】8巡目【/赤】以降\n③【赤】子【/赤】\n\n今回の手はどちらの基準でも愚形のリーチのみを打っていい。",
    "prompt": "テンパイしました。\nどうする？"
  },
  {
    "id": "q009",
    "category": "リーチ判断",
    "serial": 9,
    "theoryNo": 7,
    "problemNo": 2,
    "choices": [
      "打[2m]リーチ",
      "打[2m]ダマ",
      "打[8s]テンパイ外し"
    ],
    "answer": "打[8s]テンパイ外し",
    "supplement": "",
    "question_image": "assets/questions/q7-2.png",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/a7-2A.png",
        "file": "a7-2A.png"
      }
    ],
    "explain_text": "《リーチ判断セオリー》\n愚形のリーチのみは以下の5つの条件を4つ満たせば打っていい。\n\n①【赤】先制【/赤】\n②【赤】待ち【/赤】が良い\n③押し返されにくい（【赤】ドラ【/赤】が見えいる、【赤】親【/赤】、【赤】ラス目【/赤】、巡目が早いなど）\n④【赤】手変わり【/赤】が少ない\n⑤【赤】点況【/赤】（2着以上のときは【赤】✕【/赤】になりがち）\n\nねじまき鳥先生の簡単基準では、以下の3条件を【赤】全て満たす【/赤】場合は愚形のリーチのみは【赤】打ってはいけない【/赤】。\n\n①【赤】2着以上【/赤】\n②【赤】8巡目【/赤】以降\n③【赤】子【/赤】\n\n今回の手はどちらの基準でも愚形のリーチのみを打ってはいけない。\n手変わりが多いのでテンパイ外しが有力。",
    "prompt": "テンパイしました。\nどうする？"
  },
  {
    "id": "q010",
    "category": "対リーチ押し引き",
    "serial": 10,
    "theoryNo": 1,
    "problemNo": 1,
    "choices": [
      "打[1m]オリ",
      "打[7m]押し",
      "打[9p]オリ"
    ],
    "answer": "打[7m]押し",
    "supplement": "",
    "question_image": "assets/questions/q8-1.png",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/a8-1A.png",
        "file": "a8-1A.png"
      }
    ],
    "explain_text": "《対リーチ押し引きセオリー》\n【赤】テンパイは偉い【/赤】。\n愚形1000点のテンパイでも【赤】オリ切れなさそう【/赤】なら【赤】大体押し【/赤】て良い。\nオリ切れる目安は、安牌の数が残り順の半分or3枚以上。\n（オリ切れる＝オリた方が良い　ではないので注意）",
    "prompt": "対面からリーチが入っています。\nどうする？"
  },
  {
    "id": "q011",
    "category": "対リーチ押し引き",
    "serial": 11,
    "theoryNo": 2,
    "problemNo": 1,
    "choices": [
      "打[7m]オリ",
      "打[3p]オリ",
      "打[1s]オリ",
      "打[5s]押し"
    ],
    "answer": "打[1s]オリ",
    "supplement": "【赤】巡目による手牌価値の減少【/赤】にも注意。\nたとえ両面両面の満貫の1シャンテンであっても、【赤】深い巡目【/赤】となれば和了確率はかなり【赤】低く【/赤】なりノーテンから危険牌を打つには見合わない。",
    "question_image": "assets/questions/q9-1.png",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/a9-1A.png",
        "file": "a9-1A.png"
      }
    ],
    "explain_text": "リーチに対して【赤】愚形【/赤】のある【赤】鳴けない1シャンテン【/赤】から危険牌は切るな！\n（愚形が無いなら無スジを押していいケースもそこそこある）\n\n面子を壊すよりも、ほぼ安牌の1sをトイツ落としして形を維持しながらオリるのがオススメ。",
    "prompt": "対面からリーチが入っています。\nどうする？"
  },
  {
    "category": "対リーチ押し引き",
    "serial": 12,
    "theoryNo": 3,
    "problemNo": 1,
    "prompt": "対面からリーチが入っています。\nどうする？",
    "question_image": "assets/questions/qo3-1.png",
    "choices": [
      "打[5m]押し",
      "打[5s]押し",
      "打[3p]オリ"
    ],
    "answer": "打[3p]オリ",
    "explain_text": "《対リーチ押し引きセオリー》\n愚形の無い1シャンテンであっても【赤】危険牌2種押し【/赤】前提のプッシュは基本的に厳しい。",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/ao3-1.png",
        "file": "ao3-1.png"
      }
    ],
    "supplement": "押し返したい場合は以下の要素を判断基準にする。\n\n①【赤】手牌価値【/赤】\n②【赤】点数状況【/赤】\n③【赤】オリ切れそう【/赤】か\n④切る牌の【赤】危険度【/赤】\n\n④に関しては序盤～中盤で通っていないスジが12本以上残っていれば、【赤】無スジ【/赤】でも危険度はそこまで高くない。",
    "id": "q012"
  },
  {
    "category": "対リーチ押し引き",
    "serial": 13,
    "theoryNo": 4,
    "problemNo": 1,
    "prompt": "2件リーチが入っています。\nどうする？",
    "question_image": "assets/questions/qo4-1.png",
    "choices": [
      "打[3m]オリ",
      "打[9m]押し"
    ],
    "answer": "打[3m]オリ",
    "explain_text": "《対リーチ押し引きセオリー》\n【赤】2件リーチ【/赤】には1シャンテンからは無スジは1つも押せない。\n（好形テンパイであっても【赤】2件に対しての危険牌【/赤】は押せない事が多い）",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/ao4-1.png",
        "file": "ao4-1.png"
      }
    ],
    "supplement": "",
    "id": "q013"
  },
  {
    "category": "対リーチ押し引き",
    "serial": 14,
    "theoryNo": 4,
    "problemNo": 2,
    "prompt": "2件リーチが入っています。\nテンパイしたけど、どうする？",
    "question_image": "assets/questions/qo4-2.png",
    "choices": [
      "打[5p]オリ",
      "打[4s]押し"
    ],
    "answer": "打[5p]オリ",
    "explain_text": "《対リーチ押し引きセオリー》\n好形テンパイであっても【赤】2件に対しての危険牌【/赤】は押せない事が多い。\n\n5pが通っていない場合は打4sリーチがオススメ。\n（下記画像参照）",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/ao4-2A.png",
        "file": "ao4-2A.png"
      },
      {
        "label": "5pが通っていないときのNAGAの推奨打牌",
        "src": "assets/explain/ao4-2B.png",
        "file": "ao4-2B.png"
      }
    ],
    "supplement": "",
    "id": "q014"
  },
  {
    "category": "対リーチ押し引き",
    "serial": 15,
    "theoryNo": 6,
    "problemNo": 1,
    "prompt": "対面のリーチが入っています。\n何切る？",
    "question_image": "assets/questions/qo6-1.png",
    "choices": [
      "打[5m]",
      "打[2p]",
      "打[9p]",
      "打[1s]"
    ],
    "answer": "打[1s]",
    "explain_text": "《対リーチ押し引きセオリー》\nリーチ前（特に序盤）に切られた牌の外側は、【赤】スジ【/赤】と同じくらい安全。（エリア理論）\n\n2シャンテンなので方針はもちろんオリ。",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/ao6-1.png",
        "file": "ao6-1.png"
      }
    ],
    "supplement": "",
    "id": "q015"
  },
  {
    "category": "対リーチ押し引き",
    "serial": 16,
    "theoryNo": 7,
    "problemNo": 1,
    "prompt": "対面のリーチが入っています。\n何切る？",
    "question_image": "assets/questions/qo7-1.png",
    "choices": [
      "打[1p]",
      "打[9p]"
    ],
    "answer": "打[1p]",
    "explain_text": "《対リーチ押し引きセオリー》\nリーチを受けて【赤】1シャンテン【/赤】の際は、粘れないかを考えろ。\n（面子を壊す前に【赤】孤立牌→ターツ【/赤】の順にローリスクで打てる牌が無いかを探す）\n\n今回は比較的ローリスクな1pを切って1シャンテンを維持できる。\n\n粘る価値が全く無いなら、二の矢に備えた【赤】完全ベタオリ【/赤】でもOK。",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/ao7-1.png",
        "file": "ao7-1.png"
      }
    ],
    "supplement": "",
    "id": "q016"
  },
  {
    "category": "対リーチ押し引き",
    "serial": 17,
    "theoryNo": 8,
    "problemNo": 1,
    "prompt": "対面のリーチが入っています。\nどうする？",
    "question_image": "assets/questions/qo8-1.png",
    "choices": [
      "打[6m]リーチ",
      "打[6m]ダマ",
      "打[4s]オリ"
    ],
    "answer": "打[4s]オリ",
    "explain_text": "《対リーチ押し引きセオリー》\n【赤】ツモってもらって構わない相手【/赤】とは戦わなくてもよい。",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/ao8-1.png",
        "file": "ao8-1.png"
      }
    ],
    "supplement": "",
    "id": "q017"
  },
  {
    "category": "対副露押し引き",
    "serial": 18,
    "theoryNo": 1,
    "problemNo": 1,
    "prompt": "上家が3副露。\n何切る？",
    "question_image": "assets/questions/qf1-1.png",
    "choices": [
      "打[8p]",
      "打[2s]",
      "打[5s]"
    ],
    "answer": "打[5s]",
    "explain_text": "《対副露押し引きセオリー》\n副露に対しては以下の【赤】4条件のうち2条件【/赤】を満たすなら対応する。\n満たさないなら対応しない。\n\n①相手が【赤】親【/赤】\n②自分の手牌価値が【赤】低い【/赤】\n③相手の手が【赤】高そう【/赤】\n④相手の待ちが【赤】絞れている【/赤】\n\n4条件は赤字部分の頭文字【赤】「おひたし」【/赤】で覚えよう！\n\n今回は2条件を満たしているとは言えないので、自己都合で打つ。",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/af1-1.png",
        "file": "af1-1.png"
      }
    ],
    "supplement": "絞れているかどうかについては、残りスジが【赤】5，6スジ【/赤】のときや【赤】テンパイしてそうな染め手【/赤】などが該当する。\n\n自分の手牌価値については、残り巡目が少なくなると大きく下がっていくことを意識しよう。",
    "id": "q018"
  },
  {
    "category": "対副露押し引き",
    "serial": 19,
    "theoryNo": 1,
    "problemNo": 2,
    "prompt": "上家が3副露。\n何切る？",
    "question_image": "assets/questions/qf1-2.png",
    "choices": [
      "打[8p]",
      "打[2s]",
      "打[5s]"
    ],
    "answer": "打[8p]",
    "explain_text": "《対副露押し引きセオリー》\n副露に対しては以下の【赤】4条件のうち2条件【/赤】を満たすなら対応する。\n満たさないなら対応しない。\n\n①相手が【赤】親【/赤】\n②自分の手牌価値が【赤】低い【/赤】\n③相手の手が【赤】高そう【/赤】\n④相手の待ちが【赤】絞れている【/赤】\n\n4条件は赤字部分の頭文字【赤】「おひたし」【/赤】で覚えよう！\n\n今回は【赤】2条件を満たしている【/赤】と言えるので、打8pで対応する。\n（②と③を満たしている）",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/af1-2.png",
        "file": "af1-2.png"
      }
    ],
    "supplement": "絞れているかどうかについては、残りスジが【赤】5，6スジ【/赤】のときや【赤】テンパイしてそうな染め手【/赤】などが該当する。\n\n自分の手牌価値については、残り巡目が少なくなると大きく下がっていくことを意識しよう。",
    "id": "q019"
  },
  {
    "category": "二種のオリかた",
    "serial": 20,
    "theoryNo": 1,
    "problemNo": 1,
    "prompt": "対面のリーチが入っています。\n何切る？",
    "question_image": "assets/questions/qb1-1.png",
    "choices": [
      "打[7m]",
      "打[P]",
      "打[C]"
    ],
    "answer": "打[7m]",
    "explain_text": "《オリかたセオリー》\n粘る価値のない手では【赤】先オリ【/赤】をする。\n\n先オリ＝【赤】現在のリーチ者【/赤】だけでなく、来るかもしれない【赤】二の矢【/赤】にも備えたオリ。\n【赤】全体の安牌【/赤】を安易に消費せずに、【赤】今しか切れない目先の安牌【/赤】から切っていく。\n【赤】面子を壊す【/赤】のも厭わない。",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/ab1-1.png",
        "file": "ab1-1.png"
      }
    ],
    "supplement": "",
    "id": "q020"
  },
  {
    "category": "鳴き判断",
    "serial": 21,
    "theoryNo": 1,
    "problemNo": 1,
    "prompt": "上家の切った7sを鳴きますか？",
    "question_image": "assets/questions/qn1-1.png",
    "choices": [
      "チー",
      "スルー"
    ],
    "answer": "スルー",
    "explain_text": "《鳴き判断セオリー》\n【赤】遠くて安い鳴き【/赤】はするな！",
    "explain_images": [
      {
        "label": "局面",
        "src": "assets/explain/an1-1A.png",
        "file": "an1-1A.png"
      },
      {
        "label": "NAGAの副露判断",
        "src": "assets/explain/an1-1B.png",
        "file": "an1-1B.png"
      }
    ],
    "supplement": "副露率は強者の中でも20％～50%と幅がある。\nとりあえず以下を全て満たすなら【赤】スルー【/赤】推奨。\n\n①安い\n②遅い\n③守備力なし",
    "id": "q021"
  },
  {
    "category": "鳴き判断",
    "serial": 22,
    "theoryNo": 2,
    "problemNo": 1,
    "prompt": "上家の切った7sを鳴きますか？",
    "question_image": "assets/questions/qn2-1.png",
    "choices": [
      "チー",
      "スルー"
    ],
    "answer": "チー",
    "explain_text": "《鳴き判断セオリー》\n【赤】愚形【/赤】を捌いて【赤】シャンテンが進む【/赤】なら【赤】大体鳴いて【/赤】OK！",
    "explain_images": [
      {
        "label": "局面",
        "src": "assets/explain/an2-1A.png",
        "file": "an2-1A.png"
      },
      {
        "label": "NAGAの副露判断",
        "src": "assets/explain/an2-1B.png",
        "file": "an2-1B.png"
      }
    ],
    "supplement": "副露率は強者の中でも20％～50%と幅がある。\nとりあえず以下を全て満たすなら【赤】スルー【/赤】推奨。\n\n①安い\n②遅い\n③守備力なし",
    "id": "q022"
  },
  {
    "category": "鳴き判断",
    "serial": 23,
    "theoryNo": 3,
    "problemNo": 1,
    "prompt": "上家の切った7sを鳴きますか？",
    "question_image": "assets/questions/qn3-1.png",
    "choices": [
      "チー",
      "スルー"
    ],
    "answer": "チー",
    "explain_text": "《鳴き判断セオリー》\n【赤】満貫【/赤】が見えるなら、【赤】手が進む【/赤】牌は全て鳴いてもいい！\n【赤】両面【/赤】からでも和了率が上がるならOK。",
    "explain_images": [
      {
        "label": "局面",
        "src": "assets/explain/an3-1A.png",
        "file": "an3-1A.png"
      },
      {
        "label": "NAGAの副露判断",
        "src": "assets/explain/an3-1B.png",
        "file": "an3-1B.png"
      }
    ],
    "supplement": "",
    "id": "q023"
  },
  {
    "category": "鳴き判断",
    "serial": 24,
    "theoryNo": 4,
    "problemNo": 1,
    "prompt": "上家の切った3pを鳴きますか？",
    "question_image": "assets/questions/qn4-1.png",
    "choices": [
      "チー",
      "スルー"
    ],
    "answer": "スルー",
    "explain_text": "《鳴き判断セオリー》\n【赤】ヘッドレス（頭が無い）【/赤】のときは副露の基準を上げろ。",
    "explain_images": [
      {
        "label": "局面",
        "src": "assets/explain/an4-1A.png",
        "file": "an4-1A.png"
      },
      {
        "label": "NAGAの副露判断",
        "src": "assets/explain/an4-1B.png",
        "file": "an4-1B.png"
      }
    ],
    "supplement": "",
    "id": "q024"
  },
  {
    "category": "手組",
    "serial": 25,
    "theoryNo": 1,
    "problemNo": 1,
    "prompt": "何切る？",
    "question_image": "assets/questions/qt1-1.png",
    "choices": [
      "打[7m]",
      "打[E]",
      "打[C]"
    ],
    "answer": "打[7m]",
    "explain_text": "《手組セオリー》\n【赤】5ブロック揃った【/赤】後は【赤】打点や手役【/赤】、【赤】好形変化【/赤】、【赤】安全度【/赤】のいずれかのための牌を残していく。\n\n今回はもう好形ターツが揃っているので、【赤】安全度【/赤】のために東中を残す。",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/at1-1.png",
        "file": "at1-1.png"
      }
    ],
    "supplement": "1番大事なのは打点や手役の種。\n6ブロック目の【赤】愚形ターツ【/赤】よりも【赤】打点や手役の種になる孤立牌【/赤】を残すことが多い。\n\nまた、面前手における好形変化は【赤】打点上昇【/赤】にも繋がる。（ピンフ率、リーチ率、一発率、ツモ率の上昇）\nそのため、好形変化の価値は副露時よりも【赤】門前時【/赤】の方が高い。",
    "id": "q025"
  },
  {
    "category": "手組",
    "serial": 26,
    "theoryNo": 1,
    "problemNo": 2,
    "prompt": "何切る？",
    "question_image": "assets/questions/qt1-2.png",
    "choices": [
      "打[2p]",
      "打[7p]"
    ],
    "answer": "打[2p]",
    "explain_text": "《手組セオリー》\n6ブロック目の【赤】愚形ターツ【/赤】よりも【赤】打点や手役の種になる孤立牌【/赤】を残すことが多い。\n\n今回はドラの7pを残して6ブロック目のペンチャンを切る。",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/at1-2.png",
        "file": "at1-2.png"
      }
    ],
    "supplement": "",
    "id": "q026"
  },
  {
    "category": "手組",
    "serial": 27,
    "theoryNo": 3,
    "problemNo": 1,
    "prompt": "何切る？",
    "question_image": "assets/questions/qt3-1.png",
    "choices": [
      "打[6m]",
      "打[1s]",
      "打[6s]"
    ],
    "answer": "打[6s]",
    "explain_text": "《手組セオリー》\n【赤】リーのみ愚形【/赤】に極力ならないように手組せよ。\nリーのみ愚形を解消できる種を残せるならばリーのみ愚形になる受け入れは消して良い。\n\n今回は3pと6sの縦受けを消して、ピンフや三色を狙える6mを残す。",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/at3-1.png",
        "file": "at3-1.png"
      }
    ],
    "supplement": "【赤】ゴミ手【/赤】（リーのみ愚形になりそう）の時は、リーのみ解消ルートを取りこぼさないように意識。\nわかりやすいタンヤオや役牌はもちろんのこと、ドラ受けや一通、三色、ホンイツ、チャンタ、七対子などの可能性も見落とさないように注意したい。\n\n例えばリーのみ愚形になりそうな場合にはオタ風のドラであってもテンパイまでは引っ張るのが基本だ。",
    "id": "q027"
  },
  {
    "category": "手組",
    "serial": 28,
    "theoryNo": 5,
    "problemNo": 1,
    "prompt": "何切る？",
    "question_image": "assets/questions/qt5-1.png",
    "choices": [
      "打[2m]",
      "打[3m]",
      "打[6s]",
      "打[8s]"
    ],
    "answer": "打[3m]",
    "explain_text": "《手組セオリー》\n【赤】弱い所をフォロー【/赤】して、強い所はフォローいらず。",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/at5-1.png",
        "file": "at5-1.png"
      }
    ],
    "supplement": "",
    "id": "q028"
  },
  {
    "category": "手組",
    "serial": 29,
    "theoryNo": 6,
    "problemNo": 1,
    "prompt": "何切る？",
    "question_image": "assets/questions/qt6-1.png",
    "choices": [
      "打[6m]",
      "打[S]"
    ],
    "answer": "打[6m]",
    "explain_text": "《手組セオリー》\n【赤】面前手【/赤】で【赤】3ヘッド【/赤】の際は、両面トイツを両面に固定。\n（3ヘッド時は切った牌しかロスが出ない）\n\n【赤】超強孤立牌【/赤】（3～7の孤立牌）や【赤】安牌【/赤】を残して両面固定も有力。\n\n今回は安牌の南を残して打6mで両面固定。",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/at6-1.png",
        "file": "at6-1.png"
      }
    ],
    "supplement": "【赤】副露手【/赤】の場合には、鳴いた際に2トイツの完全形になるように、【赤】3トイツキープ【/赤】を推奨。\n\n副露手は　【赤】2枚のポン材≧4枚のチー材【/赤】\n（チー材は枚数が減少し得るが、ポン材は誰が切ってもポンできるので減少しない）",
    "id": "q029"
  },
  {
    "category": "手組",
    "serial": 30,
    "theoryNo": 7,
    "problemNo": 1,
    "prompt": "何切る？",
    "question_image": "assets/questions/qt7-1.png",
    "choices": [
      "打[3m]",
      "打[r5m]",
      "打[7p]",
      "打[8p]"
    ],
    "answer": "打[r5m]",
    "explain_text": "《手組セオリー》\n【赤】1ハン【/赤】→【赤】2ハン【/赤】にする為に無理はするな！\n【赤】和了率【/赤】が少しでも下がるならやめておけ！\n\n赤5mに固執せずに和了率をMAXにしよう！",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/at7-1.png",
        "file": "at7-1.png"
      }
    ],
    "supplement": "",
    "id": "q030"
  },
  {
    "category": "手組",
    "serial": 31,
    "theoryNo": 8,
    "problemNo": 1,
    "prompt": "何切る？",
    "question_image": "assets/questions/qt8-1.png",
    "choices": [
      "打[3m]",
      "打[4m]"
    ],
    "answer": "打[3m]",
    "explain_text": "《手組セオリー》\n和了率が明確に下がるなら、8000点→12000点にはするな。\n【赤】満貫以上【/赤】は【赤】和了率最優先【/赤】で！",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/at8-1.png",
        "file": "at8-1.png"
      }
    ],
    "supplement": "",
    "id": "q031"
  },
  {
    "category": "手組",
    "serial": 32,
    "theoryNo": 9,
    "problemNo": 1,
    "prompt": "何切る？",
    "question_image": "assets/questions/qt9-1.png",
    "choices": [
      "打[9m]",
      "打[3p]",
      "打[8s]",
      "打[N]"
    ],
    "answer": "打[3p]",
    "explain_text": "《手組セオリー》\n【赤】字牌トイツが2組【/赤】ある時は【赤】2ハン役【/赤】を取りこぼすな！\n特に【赤】ホンイツ【/赤】、【赤】トイトイ【/赤】は強く意識しろ！\n\n今回はホンイツを見て9mと北を残す。",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/at9-1.png",
        "file": "at9-1.png"
      }
    ],
    "supplement": "トイツではなく【赤】暗刻【/赤】の場合にはリーチでも打点が見込めるため、【赤】リーチ手順【/赤】と【赤】ホンイツ手順【/赤】のどちらが【赤】手牌価値（和了率×打点）【/赤】が高いかを慎重に見極めよう。\n\nまた、【赤】2面子【/赤】あるときもリーチが打ちやすいため、リーチかホンイツかをしっかり見極めよう。",
    "id": "q032"
  },
  {
    "id": "q033",
    "category": "手組",
    "serial": 33,
    "theoryNo": 10,
    "problemNo": 1,
    "prompt": "何切る？",
    "question_image": "assets/questions/qt10-1.png",
    "choices": [
      "打[7m]",
      "打[W]"
    ],
    "answer": "打[7m]",
    "explain_text": "《手組セオリー》\n【赤】染め色4ブロック【/赤】ある時は【赤】ホンイツ【/赤】への渡りを見落とすな！",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/at10-1.png",
        "file": "at10-1.png"
      }
    ],
    "supplement": "【赤】2面子【/赤】あるときはリーチが打ちやすいため、リーチかホンイツかをしっかり見極めよう。"
  },
  {
    "id": "q034",
    "category": "手組",
    "serial": 34,
    "theoryNo": 11,
    "problemNo": 1,
    "prompt": "何切る？",
    "question_image": "assets/questions/qt11-1.png",
    "choices": [
      "打[2p]",
      "打[N]"
    ],
    "answer": "打[2p]",
    "explain_text": "《手組セオリー》\n手なりで【赤】ゴミ手【/赤】になりそうな配牌の時、字牌を含めて染め色【赤】9～10枚【/赤】あればオタ風も残して【赤】ホンイツ【/赤】を意識。\n\n【赤】ゴミ手【/赤】のときは【赤】遠くて高い手【/赤】を目指すと攻守のバランスを取りやすい。",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/at11-1.png",
        "file": "at11-1.png"
      }
    ],
    "supplement": "手なりでゴミ手になりそうな時＝別色を使うと手牌価値が出ない時。"
  },
  {
    "id": "q035",
    "category": "手組",
    "serial": 35,
    "theoryNo": 12,
    "problemNo": 1,
    "choices": [
      "打[1m]",
      "打[W]"
    ],
    "answer": "打[W]",
    "supplement": "",
    "question_image": "assets/questions/qt12-1.png",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/at12-1.png",
        "file": "at12-1.png"
      }
    ],
    "explain_text": "《手組セオリー》\n【赤】配牌20枚理論【/赤】\n【赤】6巡目【/赤】までは勝手に手牌に見切りをつけるな。\n【赤】6巡目【/赤】までは配牌だと思え。\n配牌14枚で手牌を判断してしまうと、手牌の進化の可能性を見落としてしまう。\n【赤】配牌20枚（14枚+6巡のツモ）【/赤】で戦って、配牌14～16枚程度で戦ってる奴らに無双しよう。",
    "prompt": "何切る？"
  },
  {
    "id": "q036",
    "category": "手組",
    "serial": 36,
    "theoryNo": 13,
    "problemNo": 1,
    "choices": [
      "打[2m]",
      "打[9p]",
      "打[6s]"
    ],
    "answer": "打[2m]",
    "supplement": "",
    "question_image": "assets/questions/qt13-1.png",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/at13-1.png",
        "file": "at13-1.png"
      }
    ],
    "explain_text": "《手組セオリー》\n【赤】4トイツ【/赤】と【赤】ペンチャン【/赤】がある時は【赤】七対子【/赤】を見てペンチャンを払え。",
    "prompt": "何切る？"
  },
  {
    "id": "q037",
    "category": "手組",
    "serial": 37,
    "theoryNo": 15,
    "problemNo": 1,
    "choices": [
      "打[4s]",
      "打[7s]"
    ],
    "answer": "打[4s]",
    "supplement": "",
    "question_image": "assets/questions/qt15-1.png",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/at15-1.png",
        "file": "at15-1.png"
      }
    ],
    "explain_text": "《手組セオリー》\n4567などの4連形から4か7を切る時は、どちらを切るか慎重に吟味しろ。\n【赤】手役【/赤】や【赤】河の強さ【/赤】を考慮して判断しよう。\n\n今回は5mを引いたら567の三色が狙えるため、4sを切る。",
    "prompt": "何切る？"
  },
  {
    "id": "q038",
    "category": "手組",
    "serial": 38,
    "theoryNo": 15,
    "problemNo": 2,
    "choices": [
      "打[4p]",
      "打[7p]",
      "打[西]"
    ],
    "answer": "打[4p]",
    "supplement": "",
    "question_image": "assets/questions/qt15-2.png",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/at15-2.png",
        "file": "at15-2.png"
      }
    ],
    "explain_text": "《手組セオリー》\n4567などの4連形から4か7を切る時は、どちらを切るか慎重に吟味しろ。\nテンパイ者がいる時は、そいつが切っている近い筋を切れ（1が通ってるなら4を切れ）\n\n自分の手牌価値が高くオリ切れるかも怪しいため、押し引き判断は押し。",
    "prompt": "対面のリーチが入っています。\n何切る？"
  },
  {
    "id": "q039",
    "category": "手組",
    "serial": 39,
    "theoryNo": 16,
    "problemNo": 1,
    "choices": [
      "打[2m]",
      "打[8p]"
    ],
    "answer": "打[2m]",
    "supplement": "",
    "question_image": "assets/questions/qt16-1.png",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/at16-1.png",
        "file": "at16-1.png"
      }
    ],
    "explain_text": "《手組セオリー》\n序盤の愚形ターツの比較は、【赤】安全牌【/赤】を含むターツを残す。\n（場況も良いということになり攻守兼用）",
    "prompt": "何切る？"
  },
  {
    "id": "q040",
    "category": "手組",
    "serial": 40,
    "theoryNo": 17,
    "problemNo": 1,
    "choices": [
      "打[5m]",
      "打[8m]"
    ],
    "answer": "打[8m]",
    "supplement": "",
    "question_image": "assets/questions/qt17-1.png",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/at17-1.png",
        "file": "at17-1.png"
      }
    ],
    "explain_text": "《手組セオリー》\nとにかく【赤】5ブロック＞6ブロック【/赤】。\n副露手は特に！！\n（6ブロにしないと追えない打点や手役がある場合には6ブロも許される）",
    "prompt": "何切る？"
  },
  {
    "id": "q041",
    "category": "手組",
    "serial": 41,
    "theoryNo": 18,
    "problemNo": 1,
    "choices": [
      "打[1m]",
      "打[C]"
    ],
    "answer": "打[1m]",
    "supplement": "6巡目定点チェックでは【赤】222の法則【/赤】を用いる。\n222の法則・・・【赤】2シャンテン【/赤】、【赤】愚形2つ残り【/赤】、【赤】立直して2ハン【/赤】、これらを【赤】全て満たす【/赤】なら和了れないと思え。\n【赤】0面子【/赤】のときは無条件で該当。\n（ただし、【赤】副露手は例外【/赤】）",
    "question_image": "assets/questions/qt18-1.png",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/at18-1.png",
        "file": "at18-1.png"
      }
    ],
    "explain_text": "《手組セオリー》\n【赤】6巡目の定点チェック【/赤】\n→6巡目に自分の手の和了が厳しそうならば、その局は将来にわたり【赤】放銃しない【/赤】ように意識する。\n（敵から来る9巡目リーチに備えられているか）\n\nこの手はもうあがれそうにないので、安全度の高い中は残そう。",
    "prompt": "何切る？"
  },
  {
    "id": "q042",
    "category": "手組",
    "serial": 42,
    "theoryNo": 19,
    "problemNo": 1,
    "choices": [
      "打[2m]",
      "打[5p]"
    ],
    "answer": "打[5p]",
    "supplement": "",
    "question_image": "assets/questions/qt19-1.png",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/at19-1.png",
        "file": "at19-1.png"
      }
    ],
    "explain_text": "《手組セオリー》\n【赤】12巡目の定点チェック【/赤】→\n安全に【赤】形式テンパイ【/赤】が取れるルートが無いか意識しろ。\n（【赤】形テン【/赤】は勝負手、2500点の上下差は大きい）",
    "prompt": "下家のリーチが入っています。\n何切る？"
  },
  {
    "id": "q043",
    "category": "手組",
    "serial": 43,
    "theoryNo": 20,
    "problemNo": 1,
    "choices": [
      "打[2p]",
      "打[2s]",
      "打[8s]"
    ],
    "answer": "打[2s]",
    "supplement": "",
    "question_image": "assets/questions/qt20-1.png",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/at20-1.png",
        "file": "at20-1.png"
      }
    ],
    "explain_text": "《手組セオリー》\nヘッドレスは【赤】連続形【/赤】含みの【赤】Ⅱ型【/赤】を目指せ！\n\n面子のそばにある2pや8sは連続形になりやすい。",
    "prompt": "何切る？"
  },
  {
    "id": "q044",
    "category": "手組",
    "serial": 44,
    "theoryNo": 21,
    "problemNo": 1,
    "choices": [
      "打[2p]",
      "打[6p]"
    ],
    "answer": "打[6p]",
    "supplement": "",
    "question_image": "assets/questions/qt21-1.png",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/at21-1A.png",
        "file": "at21-1A.png"
      },
      {
        "label": "ピンフがあるときのNAGAの推奨打牌",
        "src": "assets/explain/at21-1B.png",
        "file": "at21-1B.png"
      }
    ],
    "explain_text": "《手組セオリー》\n1シャンテンになったら、【赤】二次変化【/赤】よりもダイレクトで聴牌した時の待ちの強さを重視。\n\n7p引きの両面変化よりも2p9sのシャボ待ち（強い待ち）を重視。\nピンフがあるときは打2pでピンフを見るのも有力。（下記画像参照）",
    "prompt": "何切る？"
  },
  {
    "id": "q045",
    "category": "手組",
    "serial": 45,
    "theoryNo": 22,
    "problemNo": 1,
    "choices": [
      "打[6p]",
      "打[6s]"
    ],
    "answer": "打[6p]",
    "supplement": "",
    "question_image": "assets/questions/qt22-1.png",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/at22-1.png",
        "file": "at22-1.png"
      }
    ],
    "explain_text": "《手組セオリー》\n【赤】裏目カバー打法【/赤】\n裏目が痛くない方を選べ。\n\n今回は56pを払って裏目の4pを引いてしまってもタンヤオに変化する。\n（4pの裏目があまり痛くない）",
    "prompt": "何切る？"
  },
  {
    "id": "q046",
    "category": "手組",
    "serial": 46,
    "theoryNo": 23,
    "problemNo": 1,
    "choices": [
      "打[8s]",
      "打[C]"
    ],
    "answer": "打[8s]",
    "supplement": "役牌ポンからの数牌ロンを避けたい。\n【赤】数牌→役牌【/赤】と切れば、【赤】放銃を避けられる【/赤】ケースがある。",
    "question_image": "assets/questions/qt23-1.png",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/at23-1.png",
        "file": "at23-1.png"
      }
    ],
    "explain_text": "《手組セオリー》\n【赤】最序盤以外【/赤】は字牌と数牌どちらもいらないなら、後に切りにくくなる【赤】数牌から切れ【/赤】。",
    "prompt": "何切る？"
  },
  {
    "id": "q047",
    "category": "手組",
    "serial": 47,
    "theoryNo": 24,
    "problemNo": 1,
    "choices": [
      "打[7m]",
      "打[8m]",
      "打[2s]"
    ],
    "answer": "打[2s]",
    "supplement": "【赤】4トイツ1面子【/赤】のときは、七対子も面子手も2シャンテンとなるので【赤】分岐点【/赤】となるところ。\n判断基準は【赤】「愚形から埋まって良形テンパイ確定なら面子手にする」【/赤】",
    "question_image": "assets/questions/qt24-1.png",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/at24-1.png",
        "file": "at24-1.png"
      }
    ],
    "explain_text": "《手組セオリー》\n【赤】4トイツ【/赤】出来たら【赤】七対子【/赤】も視野にいれられるか考えろ。\n（但し、4トイツで七対子に決め打ちしていいのは、面子手の【赤】価値が低すぎる【/赤】場合のみ）\n\n今回の手で七対子決め打ちの打7mと七対子否定の打8mはNG。\n両方を追える打2sとしよう。",
    "prompt": "何切る？"
  },
  {
    "id": "q048",
    "category": "手組",
    "serial": 48,
    "theoryNo": 24,
    "problemNo": 2,
    "choices": [
      "打[1m]",
      "打[5p]"
    ],
    "answer": "打[5p]",
    "supplement": "",
    "question_image": "assets/questions/qt24-2.png",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/at24-2.png",
        "file": "at24-2.png"
      }
    ],
    "explain_text": "《手組セオリー》\n【赤】4トイツ1面子【/赤】のときは、七対子も面子手も2シャンテンとなるので【赤】分岐点【/赤】となるところ。\n判断基準は【赤】「愚形から埋まって良形テンパイ確定なら面子手にする」【/赤】\n\n今回の手は2m3m8sのいずれかを引けば良形が確定するため、面子手に固定して良い。",
    "prompt": "何切る？"
  },
  {
    "id": "q049",
    "category": "手組",
    "serial": 49,
    "theoryNo": 25,
    "problemNo": 1,
    "choices": [
      "打[1p]",
      "打[2p]",
      "打[8s]",
      "打[W]"
    ],
    "answer": "打[2p]",
    "supplement": "フィニッシャー＝リーチの【赤】待ちとして優秀【/赤】な牌。",
    "question_image": "assets/questions/qt25-1.png",
    "explain_images": [
      {
        "label": "NAGAの推奨打牌",
        "src": "assets/explain/at25-1.png",
        "file": "at25-1.png"
      }
    ],
    "explain_text": "《手組セオリー》\n七対子の1シャンテンになったら【赤】フィニッシャー【/赤】を【赤】二種類【/赤】以上持て！\n\n西は絶好のフィニッシャー。\nまた、ここで2pを切れば序盤に切った牌の外側として、1pもフィニッシャーにしやすい。",
    "prompt": "何切る？"
  },
  {
    "id": "q050",
    "category": "手組",
    "serial": 50,
    "theoryNo": 26,
    "problemNo": 1,
    "choices": [
      "ポン",
      "スルー"
    ],
    "answer": "ポン",
    "supplement": "【赤】「鳴くとトイトイ2シャンテン」【/赤】とは【赤】5トイツ0暗刻【/赤】のことを指すので注意。\n暗刻が1つある場合には【赤】「鳴いて1シャンテン」【/赤】なので、その場合は鳴いて問題ない。\n（トイトイ+たまに三暗刻！）\n\nまた、暗刻がある場合でも\n\n①1つでも【赤】枯れているトイツ【/赤】がある（トイトイがあがりづらい）\n②【赤】ドラ【/赤】が浮いている（七対子ならドラを使いやすい！）\n③捨て牌【赤】3段目【/赤】\n\nのいずれかに該当する時は、暗刻から1枚外して【赤】七対子に決め打ち【/赤】推奨。",
    "question_image": "assets/questions/qt26-1.png",
    "explain_images": [
      {
        "label": "局面",
        "src": "assets/explain/at26-1A.png",
        "file": "at26-1A.png"
      },
      {
        "label": "NAGAの副露判断",
        "src": "assets/explain/at26-1B.png",
        "file": "at26-1B.png"
      }
    ],
    "explain_text": "《手組セオリー》\n【赤】七対子1シャンテン【/赤】 VS 鳴くと【赤】トイトイ2シャンテン【/赤】\n\n以下の【赤】3条件【/赤】を【赤】全て満たす【/赤】なら【赤】鳴いて【/赤】トイトイへ。\n\n①鳴いて【赤】3ハン【/赤】以上（トイトイ+1ハン）\n②鳴いた後に残る【赤】鳴きにくい3～7【/赤】のトイツが【赤】1組【/赤】まで\n③【赤】10巡目【/赤】以内\n\n今回の手は全て満たしているのでポン。",
    "prompt": "上家の切った5pを鳴きますか？"
  },
  {
    "id": "q051",
    "category": "手組",
    "serial": 51,
    "theoryNo": 26,
    "problemNo": 2,
    "choices": [
      "ポン",
      "スルー"
    ],
    "answer": "スルー",
    "supplement": "【赤】「鳴くとトイトイ2シャンテン」【/赤】とは【赤】5トイツ0暗刻【/赤】のことを指すので注意。\n暗刻が1つある場合には【赤】「鳴いて1シャンテン」【/赤】なので、その場合は鳴いて問題ない。\n（トイトイ+たまに三暗刻！）\n\nまた、暗刻がある場合でも\n\n①1つでも【赤】枯れているトイツ【/赤】がある（トイトイがあがりづらい）\n②【赤】ドラ【/赤】が浮いている（七対子ならドラを使いやすい！）\n③捨て牌【赤】3段目【/赤】\n\nのいずれかに該当する時は、暗刻から1枚外して【赤】七対子に決め打ち【/赤】推奨。",
    "question_image": "assets/questions/qt26-2.png",
    "explain_images": [
      {
        "label": "局面",
        "src": "assets/explain/at26-2A.png",
        "file": "at26-2A.png"
      },
      {
        "label": "NAGAの副露判断",
        "src": "assets/explain/at26-2B.png",
        "file": "at26-2B.png"
      }
    ],
    "explain_text": "《手組セオリー》\n【赤】七対子1シャンテン【/赤】 VS 鳴くと【赤】トイトイ2シャンテン【/赤】\n\n以下の【赤】3条件【/赤】を【赤】全て満たす【/赤】なら【赤】鳴いて【/赤】トイトイへ。\n\n①鳴いて【赤】3ハン【/赤】以上（トイトイ+1ハン）\n②鳴いた後に残る【赤】鳴きにくい3～7【/赤】のトイツが【赤】1組【/赤】まで\n③【赤】10巡目【/赤】以内\n\n今回の手は①と②を満たしていないのでスルー。",
    "prompt": "上家の切った5pを鳴きますか？"
  },
  {
    "id": "q052",
    "category": "手組",
    "serial": 52,
    "theoryNo": 28,
    "problemNo": 1,
    "choices": [
      "打[2m]",
      "打[4p]",
      "打[1s]",
      "打[8s]"
    ],
    "answer": "打[1s]",
    "supplement": "【赤】タンヤオ正義理論【/赤】と【赤】タンヤオ大正義理論【/赤】は似て非なるものなので、要注意。\n\nまた、落とすトイツが【赤】唯一の雀頭【/赤】の場合には慎重に吟味しよう。\nというのも、【赤】「唯一の雀頭の破壊」【/赤】という行為は【赤】「面子破壊」【/赤】と並び「面子手リーチ進行における【赤】2大タブー行為【/赤】」。\n\n唯一雀頭のときは、【赤】面子手リーチ進行＜副露進行【/赤】かつ、【赤】雀頭が作りやすい【/赤】場合にのみ許される。",
    "question_image": "assets/questions/qt28-1.png",
    "explain_images": [
      {
        "label": "NAGAの打牌判断",
        "src": "assets/explain/at28-1.png",
        "file": "at28-1.png"
      }
    ],
    "explain_text": "《手組セオリー》\n【赤】タンヤオ正義理論【/赤】\n【赤】タンヤオで5ブロック【/赤】想定できるならば、ヤオチュウ牌のトイツを払ってタンヤオへ。",
    "prompt": "何切る？"
  }
,
  {
    "id": "q053",
    "category": "手組",
    "serial": 53,
    "theoryNo": 29,
    "problemNo": 1,
    "choices": [
      "打[8m]",
      "打[1p]",
      "打[7p]",
      "打[3s]"
    ],
    "answer": "打[1p]",
    "supplement": "タンヤオ大正義理論は簡単に使える（使いやすい）強いセオリー。\n\nなので、以下のタンヤオ大正義がダメなパターンだけ覚えておこう！\n\n①【赤】面子破壊【/赤】となる場合\n②19牌と比較するタンヤオ孤立牌の【赤】機能が低い【/赤】場合。(受け被り、スキップ牌、2.8など)\n③19牌が作っている受け入れがとても嬉しいorフィニッシャーにしたいくらい強い待ちの場合（12と持っていてドラが3のときや3があがりやすそうな場合など）\n\nにしても、1枚切ってタンヤオは強い！",
    "question_image": "assets/questions/qt29-1.png",
    "explain_images": [
      {
        "label": "NAGAの打牌判断",
        "src": "assets/explain/at29-1.png",
        "file": "at29-1.png"
      }
    ],
    "explain_text": "《手組セオリー》\n【赤】タンヤオ大正義理論【/赤】\n【赤】1枚の19牌【/赤】を切って【赤】残りが全てタンヤオ牌【/赤】になるならば【赤】19牌を切って良し【/赤】。",
    "prompt": "何切る？"
  }
,
  {
    "id": "q054",
    "category": "手組",
    "serial": 54,
    "theoryNo": 29,
    "problemNo": 2,
    "choices": [
      "打[1m]",
      "打[2p]"
    ],
    "answer": "打[2p]",
    "supplement": "",
    "question_image": "assets/questions/qt29-2.png",
    "explain_images": [
      {
        "label": "NAGAの打牌判断",
        "src": "assets/explain/at29-2.png",
        "file": "at29-2.png"
      }
    ],
    "explain_text": "《手組セオリー》\nこの手は【赤】タンヤオ大正義理論【/赤】がダメなケース。\n\nタンヤオ大正義理論＝【赤】1枚の19牌【/赤】を切って【赤】残りが全てタンヤオ牌【/赤】になるならば【赤】19牌を切って良し【/赤】という理論。\n\n以下の3パターンはタンヤオ大正義の例外なので注意。\n\n①【赤】面子破壊【/赤】となる場合\n②19牌と比較するタンヤオ孤立牌の【赤】機能が低い【/赤】場合。(受け被り、スキップ牌、2.8など)\n③19牌が作っている受け入れがとても嬉しいorフィニッシャーにしたいくらい強い待ちの場合（12と持っていてドラが3のときや3があがりやすそうな場合など）\n\n今回は②に該当する。",
    "prompt": "何切る？"
  }
,
  {
    "id": "q055",
    "category": "手組",
    "serial": 55,
    "theoryNo": 30,
    "problemNo": 1,
    "choices": [
      "打[1m]",
      "打[2m]",
      "打[2p]",
      "打[4s]"
    ],
    "answer": "打[4s]",
    "supplement": "これと相反するセオリーとして、【赤】「セットで払い切れるターツを落とす」【/赤】というものがある。\nセットで払うことで、【赤】打点の種【/赤】や【赤】安全牌の種【/赤】などの余剰牌を抱えられるメリットがある。\nこちらのセオリーも意識することで、その都度どちらのセオリーが得かを判断できるようにしたい。（上級者向け）",
    "question_image": "assets/questions/qt30-1.png",
    "explain_images": [
      {
        "label": "NAGAの打牌判断",
        "src": "assets/explain/at30-1.png",
        "file": "at30-1.png"
      }
    ],
    "explain_text": "《手組セオリー》\n【赤】6ブロック【/赤】時は、【赤】受け入れロスが無い打牌【/赤】があるならそれを選べれば大体OK。\n\n4sを切っても3s受けは残る。",
    "prompt": "何切る？"
  }
,
  {
    "id": "q056",
    "category": "手組",
    "serial": 56,
    "theoryNo": 32,
    "problemNo": 1,
    "choices": [
      "打[2s]",
      "打[W]",
      "打[F]"
    ],
    "answer": "打[F]",
    "supplement": "",
    "question_image": "assets/questions/qt32-1.png",
    "explain_images": [
      {
        "label": "NAGAの打牌判断",
        "src": "assets/explain/at32-1.png",
        "file": "at32-1.png"
      }
    ],
    "explain_text": "《手組セオリー》\n平和効率で打つ基準（オタ風、1.9＜役牌　の基本序列が逆転する基準）\n＝【赤】2面子 + 1両面 + ヘッド無し【/赤】（or 【赤】1面子 + 3両面 + ヘッド無し【/赤】）\n\n今回はこれに該当するので、発から切る。",
    "prompt": "何切る？"
  }
,
  {
    "id": "q057",
    "category": "手組",
    "serial": 57,
    "theoryNo": 33,
    "problemNo": 1,
    "choices": [
      "打[2m]",
      "打[8p]",
      "打[9s]",
      "打[F]"
    ],
    "answer": "打[8p]",
    "supplement": "【赤】00物件【/赤】はまともな面子手リーチは【赤】ほぼ無理【/赤】なので、和了するには【赤】リーチ以外の役【/赤】が必要となる。\n\n役牌やオタ風を残して強孤立やペンチャンターツを切るといった【赤】基本序列とは大きく異なる【/赤】思い切りの良さも大事だ。\n\n最も罪深いのはゴミ手を手なりで進行して中盤以降に【赤】手詰まる【/赤】事。\n00物件のまま手なりにリーチを目指すよりは、【赤】配牌オリ【/赤】の方がまだマシなレベル。",
    "question_image": "assets/questions/qt33-1.png",
    "explain_images": [
      {
        "label": "NAGAの打牌判断",
        "src": "assets/explain/at33-1.png",
        "file": "at33-1.png"
      }
    ],
    "explain_text": "《手組セオリー》\n【赤】00物件【/赤】（【赤】0面子0両面【/赤】、配牌時出現率【赤】8％【/赤】の【赤】超ゴミ手【/赤】）は面子手リーチは相当厳しいので、手なりリーチ進行は地獄行き。\n副露高打点（【赤】ホンイツ【/赤】、【赤】チャンタ【/赤】等）や【赤】七対子【/赤】に絞りつつ、【赤】守備駒【/赤】を持ちながら進行しよう。\n\nこの手ならマンズホンイツ、七対子、役牌重なりの可能性は残して打89p。",
    "prompt": "何切る？"
  }

];
const HONOR_MAP = {
  "東":"E","南":"S","西":"W","北":"N","白":"P","発":"F","中":"C",
  "E":"E","S":"S","W":"W","N":"N","P":"P","F":"F","C":"C"
};

let state = {
  idx: 0,
  selected: null,
};

const elTitle = document.getElementById("screen-title");
const elList = document.getElementById("screen-list");
const elQuiz = document.getElementById("screen-quiz");
const elResult = document.getElementById("screen-result");

const elBtnStart = document.getElementById("btn-start");
const elBtnList = document.getElementById("btn-list");
const elBtnListBack = document.getElementById("btn-list-back");
const elBtnNext = document.getElementById("btn-next");
const elBtnHome = document.getElementById("btn-home");
const elProgress = document.getElementById("progress");
const elPrompt = document.getElementById("prompt");
const elProgress2 = document.getElementById("progress2");

const elQImage = document.getElementById("q-image");
const elBtnQImg = document.getElementById("btn-qimg");

const elChoices = document.getElementById("choices");
const elResultBadge = document.getElementById("result-badge");
const elCorrect = document.getElementById("correct-choice");
const elYour = document.getElementById("your-choice");

const elExplainText = document.getElementById("explain-text");
const elExplainMedia = document.getElementById("explain-media");
const elBtnMore = document.getElementById("btn-more");
const elSupplement = document.getElementById("supplement");

/* list */
const elListContainer = document.getElementById("list-container");

/* modal */
const elModal = document.getElementById("modal");
const elModalBackdrop = document.getElementById("modal-backdrop");
const elModalClose = document.getElementById("modal-close");
const elModalImg = document.getElementById("modal-img");
const elModalTitle = document.getElementById("modal-title");

function showScreen(name){
  elTitle.classList.toggle("hidden", name !== "title");
  elList.classList.toggle("hidden", name !== "list");
  elQuiz.classList.toggle("hidden", name !== "quiz");
  elResult.classList.toggle("hidden", name !== "result");
}

function escapeHtml(s){
  return String(s)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#39;");
}

function tokenToTileCode(token){
  const t = token.trim();
  if (HONOR_MAP[t]) return HONOR_MAP[t];
  // already like 1m, 9p, r5s
  return t;
}

function renderChoiceInline(choiceStr){
  const s = String(choiceStr || "");
  const m = s.match(/^(.*?)\[([^\]]+)\](.*)$/);
  if (!m) {
    return `<span class="choice-inline"><span class="choice-text">${escapeHtml(s)}</span></span>`;
  }
  const prefix = (m[1] || "").trim();
  const token = m[2];
  const rest = (m[3] || "").trim();
  const code = tokenToTileCode(token);
  const src = `assets/tiles/${code}.png`;
  const img = `<img class="tile" src="${src}" alt="${escapeHtml(token)}" />`;
  const pre = prefix ? `<span class="choice-text">${escapeHtml(prefix)}</span>` : "";
  const txt = rest ? `<span class="choice-text">${escapeHtml(rest)}</span>` : "";
  return `<span class="choice-inline">${pre}${img}${txt}</span>`;
}

function setProgress(){
  const q = QUESTIONS[state.idx];
  const base = `第${state.idx+1}問 / ${QUESTIONS.length}`;
  elProgress.textContent = base;
  elProgress2.textContent = base;
}

function openModal(src, title){
  elModalTitle.textContent = title || "";
  elModalImg.src = src;
  elModal.classList.remove("hidden");
}

function closeModal(){
  elModal.classList.add("hidden");
  elModalImg.src = "";
}

elModalBackdrop.addEventListener("click", closeModal);
elModalClose.addEventListener("click", closeModal);
document.addEventListener("keydown", (e)=>{
  if(e.key === "Escape") closeModal();
});

function renderExplainText(text){
  const lines = String(text || "").split("\n");
  const out = lines.map(line => {
    const raw = line.replace(/\r/g, "");
    const trimmed = raw.trim();
    if(trimmed === "") return `<div class="explain-spacer"></div>`;
    if(/^《.+》$/.test(trimmed) && trimmed === raw.trim()) {
      // keep brackets 《》
      return `<div class="explain-heading">${escapeHtml(trimmed)}</div>`;
    }
    // red markup: 【赤】...【/赤】
    const parts = raw.split(/(【赤】|【\/赤】)/);
    let red = false;
    let html = "";
    for(const p of parts){
      if(p === "【赤】") { red = true; continue; }
      if(p === "【/赤】") { red = false; continue; }
      if(p === "") continue;
      const esc = escapeHtml(p);
      html += red ? `<span class="hl-red">${esc}</span>` : esc;
    }
    return `<div class="explain-line">${html}</div>`;
  });
  return out.join("");
}

function renderExplainMedia(q){
  elExplainMedia.innerHTML = "";
  for(const im of (q.explain_images || [])) {
    const block = document.createElement("div");
    block.className = "media-block";
    const lab = document.createElement("div");
    lab.className = "media-label";
    lab.textContent = im.label || "";
    const img = document.createElement("img");
    img.className = "media-img";
    img.src = im.src;
    img.alt = im.label || "解説画像";
    // heuristic: B.png => bar
    if((im.file || "").match(/B\.(png|webp|jpg)$/i) || (im.label || "").includes("リーチ判断")) {
      img.classList.add("bar");
    }
    img.addEventListener("click", ()=> openModal(im.src, im.label || "解説画像"));
    block.appendChild(lab);
    block.appendChild(img);
    elExplainMedia.appendChild(block);
  }
}

function renderChoices(q){
  elChoices.innerHTML = "";
  for(const choice of q.choices) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn choice-btn";
    btn.innerHTML = renderChoiceInline(choice);
    btn.addEventListener("click", ()=> onSelectChoice(choice));
    elChoices.appendChild(btn);
  }
}

function renderProblemList(){
  if(!elListContainer) return;
  elListContainer.innerHTML = "";

  // Keep insertion order
  const catMap = new Map();
  QUESTIONS.forEach((q, i) => {
    const cat = (q.category || "未分類").trim();
    if(!catMap.has(cat)) catMap.set(cat, []);
    catMap.get(cat).push({ q, i });
  });

  for(const [cat, arr] of catMap.entries()){
    const head = document.createElement("div");
    head.className = "list-category";
    head.textContent = `【${cat}】`;
    elListContainer.appendChild(head);

    for(const { q, i } of arr){
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "btn list-item";

      const left = document.createElement("div");
      left.className = "list-item-no";
      left.textContent = `問題${q.serial}`;
      btn.appendChild(left);

      btn.addEventListener("click", ()=>{
        state.idx = i;
        loadQuestion();
      });
      elListContainer.appendChild(btn);
    }
  }
}

function loadQuestion(){
  state.selected = null;
  const q = QUESTIONS[state.idx];
  if (elPrompt) elPrompt.textContent = q.prompt || "";
  setProgress();

  elQImage.src = q.question_image;
  elBtnQImg.onclick = () => openModal(q.question_image, "出題画像");

  renderChoices(q);
  showScreen("quiz");
}

function showResult(isCorrect){
  const q = QUESTIONS[state.idx];
  setProgress();

  elResultBadge.className = "result-badge " + (isCorrect ? "ok" : "ng");
  elResultBadge.textContent = isCorrect ? "正解！" : "不正解";

  elCorrect.innerHTML = renderChoiceInline(q.answer);
  elYour.innerHTML = renderChoiceInline(state.selected || "");

  // Explanation text
  elExplainText.innerHTML = renderExplainText(q.explain_text);

  // Supplement: hidden until "もっと詳しく"
  const sup = (q.supplement || "").trim();
  const hasSup = (sup && sup !== "無し");
  if(hasSup){
    elBtnMore.classList.remove("hidden");
    elSupplement.classList.add("hidden");
    elSupplement.innerHTML = renderExplainText(sup);
    elBtnMore.textContent = "もっと詳しく";
  } else {
    elBtnMore.classList.add("hidden");
    elSupplement.classList.add("hidden");
    elSupplement.innerHTML = "";
  }

  renderExplainMedia(q);
  showScreen("result");
}

function onSelectChoice(choice){
  state.selected = choice;
  const q = QUESTIONS[state.idx];
  const isCorrect = (choice === q.answer);
  showResult(isCorrect);
}

elBtnMore.addEventListener("click", ()=>{
  const isHidden = elSupplement.classList.contains("hidden");
  if(isHidden){
    elSupplement.classList.remove("hidden");
    elBtnMore.textContent = "閉じる";
  } else {
    elSupplement.classList.add("hidden");
    elBtnMore.textContent = "もっと詳しく";
  }
});

elBtnStart.addEventListener("click", ()=>{
  state.idx = 0;
  loadQuestion();
});

elBtnList.addEventListener("click", ()=>{
  renderProblemList();
  showScreen("list");
  window.scrollTo(0, 0);
});

elBtnListBack.addEventListener("click", ()=>{
  showScreen("title");
  window.scrollTo(0, 0);
});

elBtnHome.addEventListener("click", ()=>{
  closeModal();
  showScreen("title");
  window.scrollTo(0, 0);
});

elBtnNext.addEventListener("click", ()=>{
  state.idx = (state.idx + 1) % QUESTIONS.length;
  loadQuestion();
});

// Start on title
showScreen("title");