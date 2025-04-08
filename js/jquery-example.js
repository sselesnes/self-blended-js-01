$(document).ready(function () {
  const $createBtn = $("[data-create]");
  const $destroyBtn = $("[data-destroy]");
  let counter = 0;

  $createBtn.on("click", function () {
    gsap.to($(this), {
      duration: 0.3,
      fontSize: "1.2em",
      backgroundColor: "#f00",
      onComplete: () => {
        gsap.to($(this), {
          duration: 0.5,
          fontSize: "16px",
          backgroundColor: "#4e75ff",
        });
      },
    });

    counter++;

    // $createBtn.after(`<p class="counter-text">pressed ${counter}</p>`);
    // $("body").append(`<p class="counter-text">pressed ${counter}</p>`);

    const $newText = $(`<p class="counter-text">pressed ${counter}</p>`).hide();
    $createBtn.after($newText);
    gsap.fromTo(
      $newText,
      { autoAlpha: 0, display: "none" }, // Initial state
      { autoAlpha: 1, display: "block", duration: 1.3 } // Final state
    );
  });

  $destroyBtn.on("click", function () {
    $createBtn.css("backgroundColor", "");

    $("p.counter-text").remove();
  });
});
