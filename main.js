document.addEventListener("DOMContentLoaded", () => {
    const modelViewer = document.querySelector('#ar-viewer');

    // ARのステータスが変わったときのイベント
    modelViewer.addEventListener('ar-status', (event) => {
        if (event.detail.status === 'failed') {
            alert('申し訳ありません。お使いのデバイスまたはブラウザはAR表示に対応していません。');
        }
    });

    // 3Dモデルの読み込みに失敗した場合のエラー処理
    modelViewer.addEventListener('error', (event) => {
        console.error('モデルの読み込みエラー:', event);
        alert('3Dモデルが見つかりません。同じフォルダに配置されているか確認してください。');
    });
});