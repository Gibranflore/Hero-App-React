
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        document.title = "¡Vuelve! 🥺";
    } else {
        document.title = "¡Regresaste ! 😊";

    }
});