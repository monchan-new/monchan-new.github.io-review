// 画像ギャラリー機能を動かす
// ここでやりたいのは、ギャラリーの各サムネイル画像にイベントリスナーをアタッチして
// クリックされたときにメイン画像をサムネイル画像に対応するものに差し替えること
function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  // 下記を１つメソッドにした：
  // let thumbnails = document.querySelector("#gallery-thumbs").querySelectorAll("img");
  let mainImage = document.querySelector("#gallery-photo img");
  // 下記を１つのメソッドにした：
  // let mainImage = document.querySelector("#gallery-photo").querySelector("img");

  thumbnails.forEach( (thumbnail) => {
    thumbnail.addEventListener("click", () => {
      // クリックされたサムネイル画像をメイン画像として設定する
      let newImageSrc = thumbnail.dataset.largeVersion;
      // HMTLタグの属性に"data-xxx-yyy"を指定した値は、JSから"該当のDOM要素.data.xxxYyy(camel caseに変換した形)"でアクセスできる
      mainImage.setAttribute("src", newImageSrc);
      mainImage.setAttribute("alt", thumbnail.alt);
      let currentClass = "current";

      // クリックされたサムネイル画像を現在選択されている画像に変更する
      // まずcurrentクラスを削除する
      document.querySelector("." + currentClass).classList.remove(currentClass);
      // クラス属性として"current"の値を持つDOM要素を取得し、その要素のクラス属性値の一覧から"current"という値を削除する（".current"と"current"の指定方法の違いに注意！）

      // その上でクリックされた画像の親要素にcurrentの値を持つクラス属性を追加
      thumbnail.parentNode.classList.add(currentClass);
    });
  });
}