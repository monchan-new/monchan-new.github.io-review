// 画像ギャラリー機能を動かす
// ここでやりたいのは、ギャラリーの各サムネイル画像にイベントリスナーをアタッチして
// クリックされたときにメイン画像をサムネイル画像に対応するものに差し替えること
function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img"); // 下記を１つメソッドにした：let thumbnails = document.querySelector("#gallery-thumbs").querySelectorAll("img");
  let mainImage = document.querySelector("#gallery-photo img"); // 下記を１つのメソッドにした：let mainImage = document.querySelector("#gallery-photo").querySelector("img");
  let title = document.querySelector("#gallery-info .title");
  let description = document.querySelector("#gallery-info .description"); 

  thumbnails.forEach( (thumbnail) => {
    // 大画像をプリロードする
      let newImageSrc = thumbnail.dataset.largeVersion; // HMTLタグの属性に"data-xxx-yyy"を指定した場合は、JSからその値を"該当のDOM要素.data.xxxYyy(camel caseに変換した形)"でアクセスできる
      let largeVersion =new Image(); // （DOMに配置しない）imgオブジェクトを生成する
      largeVersion.src = newImageSrc; // imgオブジェクトに新たなsrc属性を設定することで画像のローディングが開始される

    thumbnail.addEventListener("click", () => {
      // クリックされたサムネイル画像（のLarge Version）をメイン画像として設定する
      mainImage.setAttribute("src", newImageSrc);
      // clickされた画像のaltも同様にメイン画像のaltに設定する
      mainImage.setAttribute("alt", thumbnail.alt);
      
      // クリックされたサムネイル画像を選択中の画像として設定する
      let currentClass = "current";
      // まず一旦初期クリアをする
      document.querySelector("." + currentClass).classList.remove(currentClass); // クラス属性として"current"の値を持つDOM要素を取得し、その要素のクラス属性値の一覧から"current"という値を削除する（".current"と"current"の指定方法の違いに注意！）
      // その上でクリックされた画像の親要素(div)のクラス属性にcurrent値を追加する
      thumbnail.parentNode.classList.add(currentClass);

      // メイン画像の説明も更新する
      title.innerHTML = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description; // clickされた画像の説明情報をメイン画像の説明情報にセットする
    });
  });
}