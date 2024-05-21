const cvPath = "./doc/curriculo.pdf";
const archiveName = "curriculoEliedsonLuna.pdf";

function downloadCV() {
    const a = document.createElement('a');
    a.style = 'display: none;';

    a.href = cvPath;
    a.download = archiveName;

    return () => {

        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}
