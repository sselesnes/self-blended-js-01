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
    $("body").append(`<p class="counter-text">pressed ${counter}</p>`);
  });

  $destroyBtn.on("click", function () {
    $createBtn.css("backgroundColor", "");

    $("p.counter-text").remove();
  });
});
