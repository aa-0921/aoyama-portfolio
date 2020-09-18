// import Head from "next/head";
// import styles from "./layout.module.css";
// import utilStyles from "../styles/utils.module.css";
// import Link from "next/link";

// // <Layout home>とpropsが渡された場合、JSXを分岐
// export const Header = () => {
//   return (

// <div className="wrapper">

//     <section className="first-view">
//       <div>
//         <span className="logo-name">Aoyama</span>
//         <span className="logo-title">Portfolio</span>
//         <a className="view-btn" href="#about-section" role="button">Read More</a>
//       </div>
//       <img src="img/first-view.jpg"/>

//     </section>

//     <div id="cover"></div>

//     <section>

//       <div id="menu">
//         <i className="fa fa-times" id="hide"></i>
//         <ul>
//           <li className="mobnavi-item">
//             <a className="gnav-link" href="#about-section">About me</a>
//           </li>
//           <li className="mobnavi-item">
//             <a className="gnav-link" href="#rails-section">Rails</a>
//           </li>
//           <li className="mobnavi-item">
//             <a className="gnav-link" href="#api-section">Rails API</a>
//           </li>
//           <li className="mobnavi-item">
//             <a className="gnav-link" href="#react-section">React</a>
//           </li>
//           <li className="mobnavi-item">
//             <a className="gnav-link" href="#js-section">JavaScript</a>
//           </li>
//           <li className="mobnavi-item">
//             <a className="gnav-link" href="#other-section">Other</a>
//           </li>
//           <li className="mobnavi-item">
//             <a className="gnav-link" href="#study-section">Study</a>
//           </li>
//         </ul>
//       </div>

//       <nav className="gnav">

//         <ul className="gnav-list">
//           <li className="gnav-item"><a className="gnav-link" href="#about-section">About me</a></li>
//           <li className="gnav-item"><a className="gnav-link" href="#rails-section">Rails</a></li>
//           <li className="gnav-item"><a className="gnav-link" href="#api-section">Rails API</a></li>
//           <li className="gnav-item"><a className="gnav-link" href="#react-section">React</a></li>
//           <li className="gnav-item"><a className="gnav-link" href="#js-section">JavaScript</a></li>
//           <li className="gnav-item"><a className="gnav-link" href="#other-section">Other</a></li>
//           <li className="gnav-item"><a className="gnav-link" href="#study-section">Study</a></li>
//         </ul>

//       </nav>
//     </section>

//     <main className="content">

//       <section className="about-section section" id="about-section">
//         <div className="inner">
//           <div className="section-heading">
//             <h2 className="heading-primary">About me</h2>
//           </div>
//           <div className="section-lead">
//             <p>初めまして。</p>
//           </div>
//           <div className="section-body about">
//             <div className="about-item">
//               <div className="about-image-wrapper">
//                 <img className="about-image" src="img/profile/katahey.png"/>
//                 <ul>
//                   <li>
//                     <a href="https://twitter.com/ryo0_heyhey" className="twitter" target="_blank">
//                     <i className="fab fa-twitter"></i> Twitter</a>
//                   </li>
//                   <li>
//                     <a href="https://github.com/im05ttbbh" className="github" target="_blank">
//                     <i className="fab fa-github"></i> GitHub</a>
//                   </li>
//                   <li>
//                     <a href="https://qiita.com/ryo0_heyhey" className="qiita" target="_blank">
//                     <i className="fas fa-search"></i> Qiita</a>
//                   </li>
//                   <li>
//                     <a href="mailto:kyatakawa1230@gmail.com" target="_blank">
//                     <i className="fas fa-envelope"></i> E-mail</a>
//                   </li>
//                   <li>
//                     <a href="https://connpass.com/user/im05ttbbh/" className="connpass" target="_blank">
//                     <i className="fas fa-user-graduate"></i> Connpass</a>
//                   </li>
//                 </ul>
//               </div>
//               <div className="about-body">
//                 <div className="body-title"><i className="fas fa-user-circle"></i>自己紹介</div>
//                 <ul>
//                   <li>1992年12月生まれ / 27歳</li>
//                   <li>育ちは神奈川県で、現在は岡山県に在住しております。</li>
//                 </ul>
//                 <div className="body-title"><i className="fas fa-hiking"></i>経歴</div>
//                 <ul>
//                   <li>・2015年3月 : 中央大学 商学部 商業・貿易学科 卒業</li>
//                   <li>・2015年4月 : 内資系製薬企業 就職（MR職）</li>
//                   <div className="body-content">
//                     【日頃の取り組み】<br/>
//                     現職での主な業務内容は医師をはじめとした医療従事者への医薬品情報の提供です。<br/>
//                     昨今のITの進歩により、医薬品情報へのアクセスが格段にしやすくなり、インターネットで取れる基本的な医薬品情報では顧客ニーズに応えることが難しくなりました。<br/>
//                     このような環境変化の中、論文を読み込んだり、月に1回社内で勉強会を主催したり、時には有給を活用して学会に足を運び、<span>積極的に最新の情報を仕入れていました。</span><br/>
//                     その結果、顧客との中長期的な信頼関係の構築に繋がったこともあります。<br/>
//                     <br/>
//                     <br/>
//                     【成果】<br/>
//                     2019年度新製品売上ランキング9/992位 営業所2/95位<br/>
//                     2018年度市場大先で前年比500%達成<br/>
//                     新製品プロモーター（情報発信業務メイン）として支店内最高評価<br/>
//                     新製品プレゼンテーション大会最優秀賞獲得<br/>
//                     <br/>
//                     このような経験より、<span>率先した行動や周囲を巻き込んだ活動が成果に結びついた時、</span><br/>
//                     仕事へのやりがいや充実感を覚えます。<br/>
//                     <br/>
//                     <br/>
//                     【エンジニアとして活かしたい強み】<br/>
//                     ◇行動力<br/>
//                     <span>とにかくやってみること</span>を念頭に、最近でもconnpassイベントや、ハッカソンに参加し人生で初めてのLTを経験、他にもいくつかアプリを作成し公開、Qiita記事投稿等、チャレンジを重ねてきました。<br/>
//                     <br/>
//                     ◇発信する姿勢<br/>
//                     上記に記載したLTやQiita投稿以外にも、現職での新製品PM（情報発信業務メイン）の経験では、自ら情報を集め、<span>メンバーが活用できる形で発信を続けていた</span>結果、支店内最高評価をいただきました。<br/>
//                     <br/>
//                     ◇挫折してもやり切る力<br/>
//                     現職にて新製品大口先（300万/年）で採用が取り消しになってしまい、<span>実績を巻き返す目標を掲げ</span>、結果400万/年の実績確保、営業所ランキング2/95位、個人9/992位を達成しました。<br/>
//                     <br/>
//                     ◇コミュニケーション力<br/>
//                     現職での顧客折衝経験に加え、チームリーダー経験があり、メンバーの目線を合わせる為にコミュニケーションをとり、<span>チーム力の向上にも努めました。</span><br/>
//                     <br/>
//                     ◇継続力<br/>
//                     プログラミング学習記録をTwitterにて約半年毎日欠かすことなく更新しております。
//                   </div>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="feature-section section" id="rails-section">
//         <div className="inner">
//           <div className="section-heading">
//             <h2 className="heading-primary">Ruby on Rails</h2>
//           </div>
//           <p className="section-lead">
//             独学開始後初めて制作したアプリです。
//           </p>
//           <div className="section-body feature">
//             <div className="feature-item">
//               <div className="feature-image-wrapper">
//                 <span>↓アプリへのリンク<br/>
//                   （テストユーザーで簡単ログインができます）</span>
//                 <a href="https://www.diynow-app.com/" target="_blank">
//                   <img className="feature-image" src="img/feature/firstview_diynow.png" alt="アプリリンク" >
//                 </a>
//                 <span>↓アプリデモ</span>

//               </div>
//               <div className="feature-body">
//                 <div className="body-title"><i className="fas fa-gamepad"></i>アプリ概要・制作背景</div>
//                 <ul>
//                   <li>作品名：DIYなう</li>
//                   <li>アプリ概要：住宅におけるDIYやリフォームの作品をコメント付きで投稿できるアプリです。</li>
//                   <li>
//                     作成背景：DIY好きの方々と接した際、仲間意識の強さを感じたことがあり、それぞれご自身のブログでアウトプットしている光景が印象的でした。
//                     そんな方々がSNS感覚で繋がれたらと思い、作成に取り掛かりました。
//                   </li>
//                 </ul>
//                 <div className="body-title"><i className="fas fa-code"></i></i>ソースコード</div>
//                 <ul>
//                   <a href="https://github.com/im05ttbbh/diynow" className="github-src" target="_blank">
//                     <i className="fab fa-github"></i> GitHub
//                   </a>
//                 </ul>
//                 <div className="body-title"><i className="fas fa-wrench"></i>使用技術等</div>
//                 <ul>
//                   <li>・コメント機能付きCRUD実装</li>
//                   <li>・deviseを使用しメール認証機能を実装しました</li>
//                   <li>・画像投稿機能にはrefileを使用</li>
//                   <li>・AWSでデプロイ</li>
//                   <li>・いいね機能はajaxを用いております</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <!-- Railsアプリ紹介 -->

//       <!-- RailsAPI紹介 -->
//       <section className="feature-section section" id="api-section">
//         <div className="inner">
//           <div className="section-heading">
//             <h2 className="heading-primary">Rails API</h2>
//           </div>
//           <p className="section-lead">
//             RailsでAPIを作成しRSpecでテスト実装をしました。
//           </p>
//           <div className="section-body feature">
//             <div className="feature-item">
//               <div className="feature-image-wrapper">
//                 <span>↓APIデモ(Postmanを使用)</span>
//                 <iframe className="feature-image" width="100%" height="315" src="https://www.youtube.com/embed/fvC5v4KCMPw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//                 <span>↓テストデモ(RSpec +FactoryBotを使用)</span>
//                 <iframe width="100%" height="315" src="https://www.youtube.com/embed/eo7bnqHQ-2Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//               </div>
//               <div className="feature-body">
//                 <div className="body-title"><i className="fas fa-gamepad"></i>アプリ概要・制作背景</div>
//                 <ul>
//                   <li>作品名：アーティスト管理API</li>
//                   <li>アプリ概要：アーティストをジャンル別で登録・取得できるAPIです。</li>
//                   <li>
//                     作成背景：参加した<span><a href="#other-section">ハッカソン</a></span>でRailsとReactを連携してwebpackerで動作させてみたことを通じて、
//                     スタンダードな方法はRailsはAPIとして作成し、Reactと別々で作成することを知りました。<br/>
//                     これに加えてRailsのテスト実装が理解できていなかったのでRSpecを学習し、使ってみました。
//                   </li>
//                 </ul>
//                 <div className="body-title"><i className="fas fa-code"></i></i>ソースコード</div>
//                 <ul>
//                   <a href="https://github.com/im05ttbbh/myartist-api" className="github-src" target="_blank">
//                     <i className="fab fa-github"></i> GitHub
//                   </a>
//                 </ul>
//                 <div className="body-title"><i className="fas fa-wrench"></i>使用技術等</div>
//                 <ul>
//                   <li>・APIモードでRailsを利用</li>
//                   <li>・アーティストをジャンルに紐付けて登録ができます</li>
//                   <li>・テストはRSpec + FactoryBotは実装しています</li>
//                   <li>・データ登録等のやり方はREADMEに記載しました</li>
//                   <li>・今後はReactを通信させフロントエンドを実装予定</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <!-- RailsAPI紹介 -->

//       <!-- Reactアプリ紹介 -->
//       <section className="feature-section section" id="react-section">
//         <div className="inner">
//           <div className="section-heading">
//             <h2 className="heading-primary">React</h2>
//           </div>
//           <p className="section-lead">
//             シンプルなTodoアプリです。
//           </p>
//           <div className="section-body feature">
//             <div className="feature-item">
//               <div className="feature-image-wrapper">
//                 <span>↓アプリへのリンク<br/>
//                   （テストユーザーで簡単ログインができます）</span>
//                 <a href="https://react-tsumiage-app.web.app/" target="_blank">
//                   <img className="feature-image" src="img/feature/react-app.png" alt="アプリリンク">
//                 </a>
//                 <span>↓アプリデモ</span>
//                 <iframe width="100%" height="315" src="https://www.youtube.com/embed/jZyvchh8LpI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//               </div>
//               <div className="feature-body">
//                 <div className="body-title"><i className="fas fa-gamepad"></i>アプリ概要・制作背景</div>
//                 <ul>
//                   <li>作品名：#今日の積み上げ</li>
//                   <li>アプリ概要：Todoリストを作成し、Twitterにハッシュタグ付きで宣言できるアプリです。</li>
//                   <li>
//                     作成背景：作成の過程でReactの基礎を学びたかったことと、日々のTwitterでの学習宣言・報告をアプリからそのままツイートできるようにしたくなり、作成しました。
//                   </li>
//                 </ul>
//                 <div className="body-title"><i className="fas fa-code"></i></i>ソースコード</div>
//                 <ul>
//                   <a href="https://github.com/im05ttbbh/react-tsumiage-app" className="github-src" target="_blank">
//                     <i className="fab fa-github"></i> GitHub
//                   </a>
//                 </ul>
//                 <div className="body-title"><i className="fas fa-wrench"></i>使用技術等</div>
//                 <ul>
//                   <li>・CRUD + Twitter投稿機能を実装</li>
//                   <li>・DBはFirebaseのCloudFirestoreを使用</li>
//                   <li>・認証はFirebaseのFirebase Authenticationを使用</li>
//                   <li>・スマホでも操作可能なようにUIを調整しております</li>
//                   <li>・Firebaseでデプロイ</li>
//                   <li>・今後はユーザーごとのリストになるように仕様変更予定</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <!-- Reactアプリ紹介 -->

//       <!-- JSアプリ紹介 -->
//       <section className="feature-section section" id="js-section">
//         <div className="inner">
//           <div className="section-heading">
//             <h2 className="heading-primary">JavaScript</h2>
//           </div>
//           <p className="section-lead">
//             漫才風タイピングゲームです。
//           </p>
//           <div className="section-body feature">
//             <div className="feature-item">
//               <div className="feature-image-wrapper">
//                 <span>↓アプリへのリンク　※PC専用アプリです</span>
//                 <a href="https://typing-manzai-game.web.app/" target="_blank">
//                   <img className="feature-image" src="img/feature/js-app.png" alt="アプリリンク">
//                 </a>
//                 <span>↓アプリデモ</span>
//                 <iframe width="100%" height="315" src="https://www.youtube.com/embed/_F60xq15luY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//               </div>
//               <div className="feature-body">
//                 <div className="body-title"><i className="fas fa-gamepad"></i>アプリ概要・制作背景</div>
//                 <ul>
//                   <li>作品名：Typing Manzai Game</li>
//                   <li>アプリ概要：漫才を楽しみながらタイピング速度を速くできるゲームです。</li>
//                   <li>
//                     作成背景：基本的なDOM操作をアウトプットしたく作成し始め、どうせならJavaScriptの理解だけでなく、楽しみながらタイピング速度も上げられるゲームを作りたいと思い作成しました。
//                   </li>
//                 </ul>
//                 <div className="body-title"><i className="fas fa-code"></i></i>ソースコード</div>
//                 <ul>
//                   <a href="https://github.com/im05ttbbh/typing-manzai-game" className="github-src" target="_blank">
//                     <i className="fab fa-github"></i> GitHub
//                   </a>
//                 </ul>
//                 <div className="body-title"><i className="fas fa-wrench"></i>使用技術等</div>
//                 <ul>
//                   <li>・HTML + CSS（一部アニメーション）+ JavaScript + jQuertのみ使用</li>
//                   <li>【以下ゲーム説明】</li>
//                   <li>・クリックしてタイピングしまくる、それだけです！</li>
//                   <li>・審査員は漫才が面白くなければ100点をくれません。</li>
//                   <li>・100点を出すには漫才が成り立つ必要があります。</li>
//                   <li>・漫才が成り立つかどうかはランダムなので、とにかく速いタイピングがクリアの鍵を握ります。</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <!-- JSアプリ紹介 -->

//       <!-- ハッカソンアプリ紹介 -->
//       <section className="feature-section section" id="other-section">
//         <div className="inner">
//           <div className="section-heading">
//             <h2 className="heading-primary">ハッカソンでの成果物</h2>
//           </div>
//           <p className="section-lead">
//             Rails上でReactを動作させてみました。
//           </p>
//           <div className="section-body feature">
//             <div className="feature-item">
//               <div className="feature-image-wrapper">
//                 <span>↓アプリへのリンク</span>
//                 <a href="https://glacial-thicket-48030.herokuapp.com/" target="_blank">
//                   <img className="feature-image" src="img/feature/react-on-rails.png" alt="アプリリンク">
//                 </a>
//                 <span>↓アプリデモ</span>
//                 <iframe width="100%" height="315" style="margin-bottom: 80px;" src="https://www.youtube.com/embed/mg6rCR58dYU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//                 <span>↓LT資料</span>
//                 <iframe src="img/feature/hakkason.pdf" width="100%" height="315"></iframe>
//               </div>
//               <div className="feature-body">
//                 <div className="body-title"><i className="fas fa-gamepad"></i>アプリ概要・制作背景</div>
//                   <ul>
//                     <li>作品名：React on Rails</li>
//                     <li>アプリ概要：webpackerを用いてRails上でReactの動作まで実施し、過程をQiitaにアウトプット</li>
//                     <li>
//                       作成背景：GWでオンラインサロン上で開催された5日間のハッカソンに参加しました。これまでの学習を紐づけたかったことと、Material-UIをRails上でも表示をしてみたいという好奇心もあり、制作に取り掛かりました。
//                     </li>
//                   </ul>
//                 <div className="body-title"><i className="fas fa-code"></i></i>ソースコード</div>
//                   <ul>
//                     <li className="hakkason-code">
//                       <a href="https://github.com/im05ttbbh/react-on-rails" className="github-src" target="_blank">
//                         <i className="fab fa-github"></i> GitHub（RailsとReactのCRUDテーブル）
//                       </a>
//                     </li>
//                     <li className="hakkason-code">
//                       <a href="https://github.com/im05ttbbh/qiita-react-rails" className="github-src" target="_blank">
//                         <i className="fab fa-github"></i> GitHub（Qiita記事のソースコード）
//                       </a>
//                     </li>
//                   </ul>
//                 <div className="body-title"><i className="fas fa-wrench"></i>使用技術等</div>
//                   <ul>
//                     <li>・webpackerを用いたRails上でのReact使用</li>
//                     <li>・Qiita記事ではMaterial-UIをRails上で動作まで実施</li>
//                     <li>・人生初のLTも経験しました</li>
//                     <li>・今後RailsはAPIとしてReactと別々にアプリを作成予定</li>
//                   </ul>
//                 <div className="qiita-image-wrapper">
//                   <span>↓Qiita投稿</span>
//                   <a href="https://qiita.com/ryo0_heyhey/items/c660225a5568e0ba8e7d" target="_blank">
//                     <img className="qiita-image" src="img/feature/qiita.png">
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <!-- ハッカソンアプリ紹介 -->

//       <!-- Study紹介 -->
//       <section className="feature-section section" id="study-section">
//         <div className="inner">
//           <div className="section-heading">
//             <h2 className="heading-primary">学習継続</h2>
//           </div>
//           <p className="section-lead">
//             日々精進して参ります。
//           </p>
//           <div className="section-body feature">
//             <div className="feature-item" style="margin-bottom: 60px;">
//               <div className="feature-body">
//                 <div className="body-title"><i className="fas fa-pencil-alt"></i>Twitterでの学習記録</div>
//                 <ul>
//                   <li>2020年1月より、休むことなく学習記録を更新しております</li>
//                   <li>少しでも現場でお役に立てるよう、今後も学習を継続していきます</li>
//                 </ul>
//               </div>
//             </div>
//             <div className="study-wrapper">
//               <a className="twitter-timeline" data-width="400" data-height="500" href="https://twitter.com/ryo0_heyhey?ref_src=twsrc%5Etfw">Tweets by ryo0_heyhey</a>
//               <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
//             </div>
//           </div>
//           <div className="connpass-body">
//             <div className="feature-item">
//               <div className="feature-body">
//                 <div className="body-title"><i className="fas fa-pencil-alt"></i>もくもく会への積極参加</div>
//                 <ul>
//                   <li>少人数から大人数の勉強会まで、参加させていただいておりました</li>
//                   <li>こちらも継続していきたいと考えております</li>
//                 </ul>
//                 <ul>
//                   <a href="https://connpass.com/user/im05ttbbh/" className="connpass-src" target="_blank">
//                     <i className="fas fa-user-graduate"></i> Connpassアカウント
//                   </a>
//                 </ul>
//               </div>
//             </div>
//             <div className="study-wrapper">
//               <img className="feature-image" src="img/feature/connpass.gif" width="400" height="500">
//             </div>
//           </div>
//         </div>
//       </section>

//     </main>
//   </div>

//   );
// };
