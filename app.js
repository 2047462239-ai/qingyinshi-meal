const icon = name => '<svg aria-hidden="true"><use href="#' + name + '"/></svg>';
const scenes = {
  canteen: {name:'食堂', short:'平价吃得好', icon:'bowl', image:'canteen.webp', intro:'从食堂现有菜品里挑一份主食、一份蛋白质食物，再搭两样蔬菜。'},
  delivery: {name:'外卖', short:'忙时也好搭', icon:'bag', image:'delivery.webp', intro:'结算前看一眼配菜和酱汁。想多吃点蔬菜时，可以加点一份时蔬。'},
  dorm: {name:'宿舍', short:'简单好上手', icon:'cup', image:'dorm.webp', intro:'用燕麦、全麦面包和豆制品等常见食材，按手边设备搭一餐。'},
  home: {name:'家庭', short:'轻松自己做', icon:'chef', image:'home.webp', intro:'在家用米饭或薯类搭配鱼、豆腐和蔬菜。按人数准备食材，还能留一份明天的便当。'}
};
const recipes = [
  {id:'tomato', scene:'canteen', name:'番茄炒蛋杂粮饭', image:'canteen.webp', time:8, cost:13, desc:'杂粮饭、番茄炒蛋、青菜和豆腐，食堂窗口就能搭齐。', items:[['杂粮饭','1 小碗'],['番茄炒蛋','1 份'],['清炒青菜','1 份'],['豆腐','半份']], steps:['先选米饭或杂粮饭作为主食。','在窗口选一份番茄炒蛋，再看看有没有豆腐或青菜。','留意蔬菜份量，想增加种类可以搭一份当季菜。'], tip:'杂粮饭售完时，可以换普通米饭或玉米。'},
  {id:'canteen-tofu', scene:'canteen', name:'豆腐时蔬盖饭', time:10, cost:11, desc:'米饭搭配家常豆腐、油麦菜和彩椒，适合食堂午餐。', items:[['米饭','1 小碗'],['家常豆腐','1 份'],['油麦菜','1 份'],['彩椒','半份']], steps:['选米饭和豆腐。','在窗口选一份绿叶菜和彩椒。','如果盖饭配菜偏少，可以把青菜单点。'], tip:'食堂油麦菜可以换成菠菜或其他绿叶菜。'},
  {id:'chicken', scene:'delivery', name:'鸡肉双蔬外卖饭', image:'delivery.webp', time:10, cost:25, desc:'鸡肉、米饭、西兰花和紫甘蓝，工作日午餐容易点到。', items:[['米饭','1 小碗'],['鸡肉','1 份'],['西兰花','1 份'],['紫甘蓝','半份']], steps:['挑选有鸡肉和主食的套餐，留意菜品的烹饪方式。','看清配菜，蔬菜少时加一份西兰花或时蔬。','店家支持时可选择酱汁分装，按口味加。'], tip:'鸡肉可以换豆腐或清蒸鱼。'},
  {id:'delivery-fish', scene:'delivery', name:'清蒸鱼时蔬饭', time:12, cost:29, desc:'清蒸鱼、青菜和米饭组成的一餐。', items:[['米饭','1 小碗'],['清蒸鱼','1 份'],['时蔬','2 种']], steps:['在菜单里找清蒸、煮或炖的鱼类菜品。','加入一份米饭，检查套餐里的配菜。','如有需要，再点一份应季蔬菜。'], tip:'搭配白水或无糖茶。'},
  {id:'oats', scene:'dorm', name:'香蕉蓝莓酸奶燕麦', image:'dorm.webp', time:5, cost:8, desc:'备好水果和燕麦，早课前也来得及。', items:[['即食燕麦','40 克'],['无糖酸奶','150 克'],['香蕉','半根'],['蓝莓','1 小把']], steps:['将即食燕麦放入干净的碗。','加入冷藏无糖酸奶后拌匀。','切几片香蕉、放上洗净的蓝莓，拌好即可食用。'], tip:'水果可以换成手边容易买到的当季水果。'},
  {id:'dorm-toast', scene:'dorm', name:'全麦面包豆浆组合', time:5, cost:7, desc:'从便利店买齐食材，无需烹饪设备。', items:[['全麦面包','2 片'],['无糖豆浆','1 瓶'],['香蕉','1 根']], steps:['选两片全麦面包。','搭配一瓶无糖豆浆。','加一份完整水果，按食量调整。'], tip:'食材买来后按包装说明保存。'},
  {id:'salmon', scene:'home', name:'香煎三文鱼杂粮碗', image:'salmon.webp', time:20, cost:28, desc:'一份杂粮饭、两样时蔬，再加一块香煎三文鱼。', items:[['三文鱼','120 克'],['熟杂粮饭','150 克'],['西兰花','80 克'],['胡萝卜','50 克'],['毛豆与紫甘蓝','各少量']], steps:['把西兰花、胡萝卜和毛豆煮熟，紫甘蓝洗净后切丝。','将三文鱼煎至熟透，按口味加少许黑胡椒或柠檬汁。','以熟杂粮饭铺底，放上蔬菜和三文鱼。'], tip:'想控制预算时，可把三文鱼换成豆腐或鸡蛋。三文鱼属于鱼类过敏原。'},
  {id:'home-fish', scene:'home', name:'煎鱼菌菇红薯盘', image:'home.webp', time:19, cost:23, desc:'鱼肉搭配绿叶菜、菌菇和红薯，适合工作日晚餐。', items:[['白鱼','120 克'],['红薯','1 个'],['小白菜','1 把'],['菌菇','1 小把']], steps:['将红薯切块蒸熟。','把鱼煎至熟透，菌菇和小白菜分别炒熟。','盛盘后配红薯，按食量调整份量。'], tip:'红薯能与米饭轮换搭配。'}
];

const app = document.querySelector('#app');
const crumb = document.querySelector('#crumb');
const dialog = document.querySelector('#dialog');
const inner = document.querySelector('#dialog-inner');
const toast = document.querySelector('#toast');
const nav = {today:'今日总览', scenes:'场景搭配', scan:'拍照识别', plans:'饮食计划', records:'饮食记录', ask:'AI 饮食问答'};
const storageKey = 'qingyinshi-prototype-v1';
const defaults = {scene:'home', budget:30, goal:'均衡饮食'};
const initial = {favorites:[], records:[], preferences:defaults};
let state = initial;
try { const saved = JSON.parse(localStorage.getItem(storageKey)); if (saved) state = {...initial, ...saved}; } catch {}
let activeDay = 0;
let recordView = 'today';
let scanRows = [];
let scanPreview = '';
const demoNutrition = {'杂粮饭':[122,3,1,26],'番茄炒蛋':[96,6,6,4],'青菜':[25,2,1,3],'豆腐':[82,8,4,2]};
let toastTimer;
const dayKey = (date = new Date()) => [date.getFullYear(), String(date.getMonth()+1).padStart(2,'0'), String(date.getDate()).padStart(2,'0')].join('-');
const esc = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const byId = id => recipes.find(r => r.id === id);
const imageOf = r => r.image || scenes[r.scene].image;
const dishLink = r => '#scenes/' + r.scene + '/' + r.id;

function persist(message) {
  try { localStorage.setItem(storageKey, JSON.stringify(state)); }
  catch { notify('已在本次打开期间更新，浏览器存储不可用。'); return; }
  notify(message);
}
function notify(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add('show');
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2700);
}
function heading(title, copy, eyebrow = '') {
  return '<div class="heading">' + (eyebrow ? '<div class="kicker">' + icon('leaf') + eyebrow + '</div>' : '') + '<h1 id="page-title" tabindex="-1">' + title + '</h1><p>' + copy + '</p></div>';
}
function section(title, copy = '', link = '') {
  return '<div class="section-head"><div><h2>' + title + '</h2>' + (copy ? '<p>' + copy + '</p>' : '') + '</div>' + link + '</div>';
}
function recipeMeta(r) {
  return '<div class="meta"><span>' + icon('clock') + '约 ' + r.time + ' 分钟</span><span>' + icon('wallet') + '约 ¥' + r.cost + ' / 人</span></div>';
}
function sceneGrid() {
  return '<div class="scene-grid">' + Object.entries(scenes).map(([key,s]) => '<a class="scene-card" href="#scenes/' + key + '"><img src="' + s.image + '" alt=""><div class="scene-info"><span class="scene-icon">' + icon(s.icon) + '</span><div><strong>' + s.name + '搭配</strong><small>' + s.short + '</small></div>' + icon('chevron') + '</div></a>').join('') + '</div>';
}
function quick(href, ico, title, description) {
  return '<a href="' + href + '"><span class="scene-icon">' + icon(ico) + '</span><div><strong>' + title + '</strong><small>' + description + '</small></div>' + icon('chevron') + '</a>';
}
function homeView() {
  const featured = byId('salmon');
  const date = new Intl.DateTimeFormat('zh-CN',{month:'long',day:'numeric',weekday:'long'}).format(new Date());
  return heading('今天，吃点什么？', '在食堂、外卖和厨房里，都能搭出均衡的一餐。', date) +
    '<section class="hero" aria-label="今日推荐"><div class="hero-copy"><span class="pill">' + icon('spark') + '今日推荐</span><h2>' + featured.name + '</h2><p>' + featured.desc + '</p>' + recipeMeta(featured) + '<a class="btn" href="' + dishLink(featured) + '">查看搭配详情</a></div><div class="hero-media"><img src="salmon.webp" alt="三文鱼、时蔬和杂粮饭组成的餐碗"></div></section>' +
    '<section class="section">' + section('按场景选餐','按你今天在哪里吃，找一份容易执行的搭配。','<a class="text-link" href="#scenes">全部场景</a>') + sceneGrid() + '</section>' +
    '<section class="section">' + section('快捷入口') + '<div class="quick">' + quick('#scan','camera','拍照识别','体验餐盘识别和份量修正') + quick('#plans','calendar','看看本周菜单','按预算安排一周饮食') + '</div></section>';
}
function sceneTabs(active) {
  return '<nav class="chips" aria-label="用餐场景"><a class="chip" href="#scenes"' + (!active ? ' aria-current="page"' : '') + '>全部场景</a>' +
    Object.entries(scenes).map(([key,s]) => '<a class="chip" href="#scenes/' + key + '"' + (active === key ? ' aria-current="page"' : '') + '>' + s.name + '</a>').join('') + '</nav>';
}
function recipeCard(r) {
  return '<a class="recipe-card" href="' + dishLink(r) + '"><img src="' + imageOf(r) + '" alt="' + (r.image ? '' : '场景参考图') + '"><div class="recipe-copy"><h3>' + r.name + '</h3><p>' + r.desc + '</p>' + recipeMeta(r) + '</div></a>';
}
function sceneView(key) {
  if (!key) return heading('按场景找搭配', '选一个用餐场景，看看符合时间和预算的食谱。') + sceneGrid() +
    '<section class="section">' + section('食谱精选') + '<div class="recipe-grid">' + ['tomato','chicken','oats'].map(id => recipeCard(byId(id))).join('') + '</div></section>';
  const s = scenes[key];
  return sceneTabs(key) + '<section class="scene-banner"><div><span class="pill">' + icon(s.icon) + s.short + '</span><h1 id="page-title" tabindex="-1">' + s.name + '搭配</h1><p>' + s.intro + '</p></div><img src="' + s.image + '" alt="' + s.name + '餐食示意"></section>' +
    '<section class="section">' + section('可选食谱') + '<div class="filters"><label>每人预算 <select id="budget"><option value="1000">不限</option><option value="10">¥10 以内</option><option value="15">¥15 以内</option><option value="30">¥30 以内</option></select></label><label>准备时间 <select id="time"><option value="1000">不限</option><option value="5">5 分钟以内</option><option value="10">10 分钟以内</option><option value="20">20 分钟以内</option></select></label></div><div id="results" aria-live="polite"></div></section>';
}
function updateRecipes(scene) {
  const budget = +document.querySelector('#budget').value;
  const time = +document.querySelector('#time').value;
  const visible = recipes.filter(r => r.scene === scene && r.cost <= budget && r.time <= time);
  document.querySelector('#results').innerHTML = visible.length ? '<div class="recipe-grid">' + visible.map(recipeCard).join('') + '</div>' : '<div class="panel empty">这个场景暂时没有符合筛选条件的食谱。</div>';
}
function recipeView(r) {
  const favorite = state.favorites.includes(r.id);
  return '<section class="details-head"><div><span class="pill">' + icon(scenes[r.scene].icon) + scenes[r.scene].name + '搭配</span><h1 id="page-title" tabindex="-1">' + r.name + '</h1><p>' + r.desc + '</p>' + recipeMeta(r) +
    '<div class="actions"><button class="btn" id="log-recipe">' + icon('plus') + '记入今日</button><button class="btn secondary" id="save-recipe" aria-pressed="' + favorite + '">' + icon('heart') + (favorite ? '已收藏' : '收藏食谱') + '</button></div></div><img src="' + imageOf(r) + '" alt="' + (r.image ? r.name : scenes[r.scene].name + '场景参考图') + '"></section>' +
    '<div class="section two-col"><section class="panel"><h2>食材清单</h2><ul class="ingredients">' + r.items.map(([name, amount]) => '<li>' + name + '<span>' + amount + '</span></li>').join('') +
    '</ul></section><section class="panel"><h2>' + (r.scene === 'home' || r.scene === 'dorm' ? '制作步骤' : '选餐步骤') + '</h2><ol class="steps">' + r.steps.map(step => '<li>' + step + '</li>').join('') + '</ol><div class="tip">' + r.tip + '</div></section></div>';
}
function openDialog(title, content) {
  inner.innerHTML = '<div class="dialog-head"><h2 id="dialog-title">' + title + '</h2><button class="iconbtn" id="close-dialog" type="button" aria-label="关闭">' + icon('close') + '</button></div>' + content;
  dialog.setAttribute('aria-labelledby','dialog-title');
  inner.querySelector('#close-dialog').onclick = () => dialog.close();
  dialog.showModal();
}
function logDialog(name = '') {
  openDialog('记一餐','<form class="form" id="log-form"><label>餐食名称<input name="name" type="text" required maxlength="80" value="' + esc(name) + '"></label><label>餐次<select name="meal"><option>早餐</option><option selected>午餐</option><option>晚餐</option><option>加餐</option></select></label><label>份量感受<select name="feedback"><option value="">暂不填写</option><option>份量合适</option><option>份量偏少</option><option>份量偏多</option></select></label><button class="btn">保存记录</button></form>');
  document.querySelector('#log-form').onsubmit = event => {
    event.preventDefault();
    const form = Object.fromEntries(new FormData(event.currentTarget));
    form.name = form.name.trim();
    if (!form.name) { notify('请输入餐食名称。'); return; }
    state.records.push({...form, date:dayKey(), id:String(Date.now())});
    dialog.close();
    if (location.hash === '#records') render(false);
    persist('已记入今日饮食');
  };
}
function preferenceDialog() {
  const pref = state.preferences;
  const option = (value, label, current) => '<option value="' + value + '"' + (String(value) === String(current) ? ' selected' : '') + '>' + label + '</option>';
  openDialog('我的饮食偏好','<form class="form" id="pref-form"><label>常用场景<select name="scene">' + Object.entries(scenes).map(([id,s]) => option(id,s.name,pref.scene)).join('') + '</select></label><label>每餐预算<select name="budget">' + [10,15,20,30,50].map(v => option(v,'¥'+v,pref.budget)).join('') + '</select></label><label>饮食目标<select name="goal">' + ['均衡饮食','维持体重','丰富食物种类'].map(v => option(v,v,pref.goal)).join('') + '</select></label><button class="btn">保存偏好</button></form>');
  document.querySelector('#pref-form').onsubmit = event => {
    event.preventDefault();
    const p = Object.fromEntries(new FormData(event.currentTarget));
    state.preferences = {...p, budget:+p.budget};
    dialog.close();
    if (location.hash === '#plans') render(false);
    persist('已保存饮食偏好');
  };
}
function scanView() {
  return heading('拍照识别', '体验拍照、修正食材和份量、保存餐食的流程。') +
    '<div class="two-col scan-layout"><section class="panel"><h2>餐盘照片</h2><img id="scan-image" src="' + (scanPreview || 'canteen.webp') + '" alt="' + (scanPreview ? '上传的餐盘照片' : '食堂餐盘示例') + '"><label for="photo">上传餐盘照片</label><br><input type="file" id="photo" accept="image/*"><p class="body-text">本原型支持照片预览。示例识别使用固定结果。</p><div class="actions" style="margin-top:14px"><button class="btn" id="scan-sample">' + icon('spark') + '识别示例餐盘</button></div></section>' +
    '<section class="panel"><h2>食材与份量</h2><div id="scan-result"></div></section></div>';
}
function scanResult() {
  const result = document.querySelector('#scan-result');
  if (!scanRows.length) {
    result.innerHTML = '<p class="empty">可载入示例结果，或手动添加餐盘中的食材。</p><button type="button" class="btn secondary" id="add-scan">' + icon('plus') + '手动添加</button>';
  } else {
    result.innerHTML = '<form id="scan-form"><p class="body-text" style="margin-bottom:10px">份量单位为克，可按实际餐食修改。</p>' + scanRows.map(([name, grams], index) => '<div class="scan-row"><input type="text" required maxlength="28" aria-label="食材 ' + (index+1) + '" name="item" value="' + esc(name) + '"><input type="number" min="1" max="2000" required aria-label="份量 ' + (index+1) + ' 克" name="grams" value="' + esc(grams) + '"></div>').join('') +
      '<div class="actions"><button type="button" class="btn secondary" id="add-scan">' + icon('plus') + '添加食材</button><button class="btn">记入今日</button></div></form><div class="tip">照片结果为示例估算。食材份量和配菜可按实际情况调整。</div><div id="scan-nutrition" aria-live="polite"></div>';
    updateScanNutrition();
    document.querySelector('#scan-form').oninput = () => { syncScan(); updateScanNutrition(); };
    document.querySelector('#scan-form').onsubmit = event => {
      event.preventDefault();
      syncScan();
      if (scanRows.some(([name]) => !name.trim())) { notify('请填写每种食材的名称。'); return; }
      logDialog(scanRows.map(([name, grams]) => name.trim() + ' ' + grams + '克').join('、').slice(0,80));
    };
  }
  document.querySelector('#add-scan').onclick = () => {
    syncScan();
    scanRows.push(['','']);
    scanResult();
    Array.from(document.querySelectorAll('.scan-row input[name=item]')).at(-1)?.focus();
  };
}
function updateScanNutrition() {
  const totals = [0,0,0,0];
  let recognized = 0;
  for (const [name, grams] of scanRows) {
    const values = demoNutrition[name.trim()];
    if (!Object.hasOwn(demoNutrition,name.trim()) || !(+grams > 0)) continue;
    values.forEach((v,i) => totals[i] += v * (+grams / 100));
    recognized++;
  }
  const container = document.querySelector('#scan-nutrition');
  container.innerHTML = recognized ? '<div class="body-text" style="margin:12px 0 8px">已匹配 ' + recognized + ' 种食材 · 营养估算</div><div class="numbers nutrition">' +
    totals.map((v,i) => '<div><strong>' + Math.round(v) + '</strong><span>' + ['千卡','蛋白质 / 克','脂肪 / 克','碳水 / 克'][i] + '</span></div>').join('') + '</div>' : '';
}
function syncScan() {
  const fields = document.querySelectorAll('.scan-row');
  if (fields.length) scanRows = Array.from(fields, row => [row.children[0].value, row.children[1].value]);
}
function planView() {
  const p = state.preferences;
  const local = recipes.filter(r => r.scene === p.scene && r.cost <= p.budget);
  const affordable = recipes.filter(r => r.cost <= p.budget);
  const ranked = [...new Set([...local, ...affordable])];
  const savory = ranked.filter(r => r.scene !== 'dorm');
  const mainMeals = savory.length ? savory : ranked;
  const breakfast = recipes.filter(r => r.scene === 'dorm' && r.cost <= p.budget);
  const meals = [['早餐', breakfast[activeDay % breakfast.length]], ['午餐', mainMeals[activeDay % mainMeals.length]], ['晚餐', mainMeals[(activeDay + (p.goal === '丰富食物种类' ? 2 : 1)) % mainMeals.length]]];
  return heading('一周饮食计划', '按常用场景和每餐预算查看菜单。') +
    '<section class="panel"><div class="section-head"><div><h2>这周吃什么</h2><p>' + esc(p.goal) + ' · ' + scenes[p.scene].name + '优先 · 每餐 ¥' + p.budget + ' 以内</p></div><button class="btn secondary" id="plan-pref">调整偏好</button></div><div class="day-list" aria-label="选取日期">' +
    ['周一','周二','周三','周四','周五','周六','周日'].map((d,i) => '<button class="chip" data-day="' + i + '" aria-pressed="' + (activeDay === i) + '"' + (activeDay === i ? ' aria-current="page"' : '') + '>' + d + '</button>').join('') +
    '</div><div class="meals">' + meals.map(([meal,r]) => '<div class="meal"><img src="' + imageOf(r) + '" alt=""><div><small>' + meal + '</small><a href="' + dishLink(r) + '"><strong>' + r.name + '</strong></a></div><small>约 ¥' + r.cost + '</small></div>').join('') + '</div></section>';
}
function recordsView() {
  const today = dayKey();
  const monday = new Date();
  monday.setDate(monday.getDate() - ((monday.getDay()+6)%7));
  const allWeek = state.records.filter(r => r.date >= dayKey(monday) && r.date <= today);
  const records = (recordView === 'week' ? allWeek : state.records.filter(r => r.date === today)).slice().reverse();
  const saved = state.favorites.map(byId).filter(Boolean);
  return heading('我的饮食记录', '回顾吃过的餐食，也可以把喜欢的搭配留下来。') +
    '<div class="chips"><button class="chip" data-record-view="today" aria-pressed="' + (recordView === 'today') + '"' + (recordView === 'today' ? ' aria-current="page"' : '') + '>今日记录</button><button class="chip" data-record-view="week" aria-pressed="' + (recordView === 'week') + '"' + (recordView === 'week' ? ' aria-current="page"' : '') + '>本周回顾</button></div>' +
    '<section class="panel"><div class="section-head"><div><h2>' + (recordView === 'week' ? '本周回顾' : '今天吃了什么') + '</h2></div><button class="btn" id="manual-log">' + icon('plus') + '记一餐</button></div>' +
    (recordView === 'week' ? '<div class="numbers"><div><strong>' + new Set(allWeek.map(r=>r.date)).size + '</strong><span>记录天数</span></div><div><strong>' + allWeek.length + '</strong><span>已记录餐次</span></div><div><strong>' + new Set(allWeek.map(r=>r.name)).size + '</strong><span>不同餐食</span></div></div>' : '') +
    (records.length ? records.map(r => '<div class="record-row"><div><strong>' + esc(r.name) + '</strong><br><small>' + (recordView === 'week' ? r.date.slice(5) + ' · ' : '') + esc(r.meal) + (r.feedback ? ' · ' + esc(r.feedback) : '') + '</small></div><button class="iconbtn remove-record" data-record="' + esc(r.id) + '" aria-label="删除' + esc(r.name) + '">' + icon('close') + '</button></div>').join('') : '<p class="empty">还没有餐食记录，点击「记一餐」开始。</p>') + '</section>' +
    '<section class="section">' + section('收藏食谱') + (saved.length ? '<div class="recipe-grid">' + saved.map(recipeCard).join('') + '</div>' : '<div class="panel empty">收藏过的食谱会显示在这里。</div>') + '</section>';
}
const sampleQuestions = ['今天食堂怎么搭配？','这份外卖还缺什么？','没有时间做饭吃什么？'];
function askView() {
  return heading('AI 饮食问答', '通过示例问答体验如何按场景获取搭配建议。') +
    '<section class="panel"><div class="chips">' + sampleQuestions.map(q => '<button class="chip sample-question">' + q + '</button>').join('') + '</div><form id="ask-form" class="actions"><label for="question">你的问题</label><input id="question" required type="text" maxlength="120" placeholder="比如：宿舍早餐吃什么？"><button class="btn">获取建议</button></form><div id="answer" aria-live="polite"></div></section>';
}
function answerQuestion(q) {
  const id = /外卖|点餐/.test(q) ? 'chicken' : /食堂|学校/.test(q) ? 'tomato' : /宿舍|早餐|没时间|没有时间/.test(q) ? 'dorm-toast' : /做饭|家庭|晚餐/.test(q) ? 'home-fish' : null;
  const r = byId(id);
  document.querySelector('#answer').innerHTML = '<div class="tip"><strong>示例建议</strong><p>' + (r ? r.desc + ' ' + r.tip : '可以先确定手边的主食、蔬菜和蛋白质食物，再把缺少的一类补上。你也可以补充是在食堂、点外卖，还是在家吃。') + '</p>' +
    '<a class="text-link" href="' + (r ? dishLink(r) : '#scenes') + '">' + (r ? '查看完整搭配' : '浏览用餐场景') + '</a></div>';
}
function render(focus = true) {
  const [requested, sceneKey, recipeId] = location.hash.slice(1).split('/');
  const page = Object.hasOwn(nav, requested) ? requested : 'today';
  const scene = page === 'scenes' && Object.hasOwn(scenes, sceneKey) ? sceneKey : '';
  const recipe = scene && byId(recipeId);
  const dish = recipe?.scene === scene ? recipe : null;
  document.querySelectorAll('[data-nav]').forEach(link => {
    if (link.dataset.nav === page) link.setAttribute('aria-current','page');
    else link.removeAttribute('aria-current');
  });
  const trail = [['今日总览','#today']];
  if (page !== 'today') trail.push([nav[page],'#'+page]);
  if (scene) trail.push([scenes[scene].name+'搭配','#scenes/'+scene]);
  if (dish) trail.push([dish.name,dishLink(dish)]);
  crumb.innerHTML = trail.map(([name, href],i) => i === trail.length - 1 ? '<strong>' + name + '</strong>' : '<a href="' + href + '">' + name + '</a>').join(icon('chevron'));
  document.title = trail.at(-1)[0] + ' · 轻饮食 AI 管家';
  if (page === 'today') app.innerHTML = homeView();
  if (page === 'scenes') {
    app.innerHTML = dish ? recipeView(dish) : sceneView(scene);
    if (dish) {
      document.querySelector('#log-recipe').onclick = () => logDialog(dish.name);
      document.querySelector('#save-recipe').onclick = event => {
        const added = !state.favorites.includes(dish.id);
        state.favorites = added ? [...state.favorites,dish.id] : state.favorites.filter(id => id !== dish.id);
        event.currentTarget.setAttribute('aria-pressed',added);
        event.currentTarget.innerHTML = icon('heart') + (added ? '已收藏' : '收藏食谱');
        persist(added ? '已收藏食谱' : '已取消收藏');
      };
    } else if (scene) {
      updateRecipes(scene);
      for (const field of document.querySelectorAll('.filters select')) field.onchange = () => updateRecipes(scene);
    }
  }
  if (page === 'scan') {
    app.innerHTML = scanView();
    scanResult();
    document.querySelector('#scan-sample').onclick = () => {
      if (scanPreview) URL.revokeObjectURL(scanPreview);
      scanPreview = '';
      scanRows = [['杂粮饭',150],['番茄炒蛋',110],['青菜',70],['豆腐',60]];
      render(false);
      document.querySelector('#scan-sample').focus();
      notify('已载入示例餐盘');
    };
    document.querySelector('#photo').onchange = event => {
      const file = event.currentTarget.files[0];
      if (!file) return;
      if (!file.type.startsWith('image/')) { notify('请选择图片文件。'); return; }
      if (scanPreview) URL.revokeObjectURL(scanPreview);
      scanPreview = URL.createObjectURL(file);
      scanRows = [];
      const image = document.querySelector('#scan-image');
      image.src = scanPreview;
      image.alt = '上传的餐盘照片';
      scanResult();
      notify('图片已预览，可手动添加食材');
    };
  }
  if (page === 'plans') {
    app.innerHTML = planView();
    document.querySelector('#plan-pref').onclick = preferenceDialog;
    document.querySelectorAll('[data-day]').forEach(button => button.onclick = () => {
      activeDay = +button.dataset.day;
      render(false);
      document.querySelector('[data-day="' + activeDay + '"]').focus();
    });
  }
  if (page === 'records') {
    app.innerHTML = recordsView();
    document.querySelector('#manual-log').onclick = () => logDialog();
    document.querySelectorAll('[data-record-view]').forEach(button => button.onclick = () => {
      recordView = button.dataset.recordView;
      render(false);
      document.querySelector('[data-record-view="' + recordView + '"]').focus();
    });
    document.querySelectorAll('.remove-record').forEach(button => button.onclick = () => {
      openDialog('删除这条餐食记录？','<form id="delete-form"><button class="btn">确认删除</button></form>');
      document.querySelector('#delete-form').onsubmit = event => {
        event.preventDefault();
        state.records = state.records.filter(r => r.id !== button.dataset.record);
        dialog.close();
        render(false);
        document.querySelector('#manual-log').focus();
        persist('已删除记录');
      };
    });
  }
  if (page === 'ask') {
    app.innerHTML = askView();
    const question = document.querySelector('#question');
    document.querySelectorAll('.sample-question').forEach(button => button.onclick = () => {
      question.value = button.textContent;
      answerQuestion(question.value);
    });
    document.querySelector('#ask-form').onsubmit = event => {
      event.preventDefault();
      if (question.value.trim()) answerQuestion(question.value.trim());
    };
  }
  if (focus) {
    document.querySelector('#page-title')?.focus({preventScroll:true});
    window.scrollTo(0,0);
  }
}
document.querySelector('#profile').onclick = preferenceDialog;
window.addEventListener('hashchange', () => render());
render(false);
