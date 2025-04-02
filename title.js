
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        document.title = "¡Vuelve pronto! 🥺";
    } else {
        document.title = "¡Regresaste ! 😊";
    }
});