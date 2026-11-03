const levels = [
  {name:'Lv.1 友達「そのまま」', make:s=>s},
  {name:'Lv.2 ちょっと丁寧「です・ますの芽」', make:s=>`${s}です。`},
  {name:'Lv.3 標準丁寧「社会人の入口」', make:s=>`${s}と思います。`},
  {name:'Lv.4 無難「空気を読み始めた」', make:s=>`個人的には、${s}ように感じております。`},
  {name:'Lv.5 尊敬「相手が急に偉くなる」', make:s=>`恐れ入りますが、${s}ように存じ上げます。`},
  {name:'Lv.6 謙譲「自分を小さく畳む」', make:s=>`私めの拙い感覚ではございますが、${s}ように感じております。`},
  {name:'Lv.7 二重敬語「念には念を」', make:s=>`誠に恐れ入りますが、${s}ように感じさせていただいております。`},
  {name:'Lv.8 前置き過剰「本題までが遠い」', make:s=>`突然のご申告、誠に失礼いたします。さて、${s}件につきまして、私めの所感を述べさせていただきますと、${s}ように存じます。`},
  {name:'Lv.9 役所「人の心が消える」', make:s=>`当該事象につきまして、私の主観的認識といたしましては、${s}状況にあるものと認識しております旨、ご報告申し上げます。`},
  {name:'Lv.10 謝罪混入「なぜか全部自分のせい」', make:s=>`このたびは、${s}状況を招いておりますこと、ひとえに私めの認識不足によるものと深くお詫び申し上げます。`},
  {name:'Lv.11 国会答弁「何も答えていない」', make:s=>`ご指摘の${s}という点につきましては、諸般の事情を総合的に勘案しつつ、私といたしましても${s}との認識を有しているところでございます。`},
  {name:'Lv.12 宮中「畳の枚数が増える」', make:s=>`誠に恐縮に存じ奉りますが、${s}由、私めが浅学非才の身ながら拝察仕りましては、感慨の極みにございまする。`},
  {name:'Lv.13 縦書き公文「もう手紙じゃない」', make:s=>`敬具　時下ますますご清祥のこととお慶び申し上げます。さて、${s}儀につきましては、私めの不徳の致すところ、慙愧に堪えません。何卒ご寛恕賜りますよう伏してお願い申し上げます。`},
  {name:'Lv.14 条約締結「カレーが国際問題」', make:s=>`本方において確認されました「${s}」なる事態に関し、関係各位の多大なるご理解とご協力に深甚なる謝意を表するとともに、私めの不徳の致すところを厳粛に受け止め、今後とも誠実に対応してまいる所存でございます。`},
  {name:'Lv.15 概念「敬語が人を離れていく」', make:s=>`誠に恐縮ながら、本法を以ってご提供賜りました「${s}」という事象につきまして、私めの不徳の致すところ、感慨良多にしております。ここに言葉の謙譲性と存在の有限性を鑑み、過去・現在・未来の全関係者に対し、言葉にならぬ敬意と、言葉になりすぎた敬意をもって、慎んでご報告申し上げ奉ります。`}
];
const $=id=>document.getElementById(id);const input=$('input'),level=$('level');
function update(){const n=+level.value;const text=input.value.trim()||'（無言）';$('count').textContent=`${input.value.length}文字`;$('levelOut').value=n;$('levelName').textContent=levels[n-1].name;$('result').textContent=levels[n-1].make(text);$('risk').textContent='■'.repeat(Math.ceil(n/3))+'□'.repeat(5-Math.ceil(n/3));}
input.addEventListener('input',update);level.addEventListener('input',update);$('convert').addEventListener('click',()=>{update();$('toast').textContent='社会性を一段階、失いました。';setTimeout(()=>$('toast').textContent='',1800)});
document.querySelectorAll('[data-text]').forEach(b=>b.addEventListener('click',()=>{input.value=b.dataset.text;update()}));
$('copy').addEventListener('click',async()=>{try{await navigator.clipboard.writeText($('result').textContent);$('toast').textContent='コピーしました。送る相手だけは慎重に。';}catch{$('toast').textContent='コピーできませんでした。結果を選択してコピーしてください。';}});update();
