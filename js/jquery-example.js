$(document).ready(function () {
  const $createBtn = $("[data-create]");
  const $destroyBtn = $("[data-destroy]");
  let counter = 0;

  $createBtn.on("click", function () {
    $(this).css("backgroundColor", "#FFFFFF");
    setTimeout(() => {
      $(this).css("backgroundColor", ""); // CSS button property
    }, 1000);

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
