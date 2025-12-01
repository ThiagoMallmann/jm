document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();
    const msg = document.createElement("div");
    msg.textContent = "Página carregada com sucesso";
    msg.className =
        "fixed bottom-4 right-4 bg-blue text-white px-4 py-2 rounded-xl shadow-lg text-sm opacity-0";

    document.body.appendChild(msg);

    setTimeout(() => {
        msg.style.opacity = "1";
    }, 300);

    setTimeout(() => {
        document.body.removeChild(msg);
    }, 4000)
});
