<script>
  export let colors = {
    topLeft: "#dcdc3b",
    topRight: "#33db95",
    left: "#ad0000",
    right: "#92008b",
    front: "#009207",
    back: "#00b9b0",
    border: "#000000",
  };

  export let size = 8;
  export let rotation = { x: "-10deg", y: "-15deg" };
</script>

<div class="wrapper" style="--rotation-x: {rotation.x}deg; --rotation-y: {rotation.y}deg">
  <div class="top-left" style="--color: {colors.topLeft}; --border-color: {colors.border}; --package-size: {size}rem;"></div>
  <div class="top-right" style="--color: {colors.topRight}; --border-color: {colors.border}; --package-size: {size}rem;"></div>
  <div class="left" style="--color: {colors.left}; --border-color: {colors.border}; --package-size: {size}rem;"></div>
  <div class="right" style="--color: {colors.right}; --border-color: {colors.border}; --package-size: {size}rem;"></div>
  <div class="front" style="--color: {colors.front}; --border-color: {colors.border}; --package-size: {size}rem;"></div>
  <div class="back" style="--color: {colors.back}; --border-color: {colors.border}; --package-size: {size}rem;"></div>
</div>

<style>
  .wrapper {
    position: relative;
    perspective: 2000px;
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    /* background-color: red; */

    --animation-speed: 0.5s;
  }

  .wrapper > div {
    position: absolute;
    left: calc(50% - 0.5 * var(--package-size));
    top: calc(50% - 0.5 * var(--package-size));
    transition: transform var(--animation-speed);
    height: var(--package-size);
    background-color: var(--color);
    border: 1px solid var(--border-color);
    outline: 1px solid transparent; /* Required workaround for anti aliasing issues */
  }

  .left,
  .right,
  .front,
  .back {
    width: var(--package-size);
  }

  .top-left,
  .top-right {
    width: calc(0.5 * var(--package-size));
  }

  .top-left {
    transform-origin: right;
    transform: rotateX(calc(var(--rotation-x) - 90deg))
      rotateZ(var(--rotation-y)) rotateY(180deg)
      translateX(calc(0.5 * var(--package-size)))
      translateZ(calc(0.5 * var(--package-size)));
  }

  .top-right {
    transform-origin: right;
    transform: rotateX(calc(var(--rotation-x) - 90deg))
      rotateZ(var(--rotation-y)) translateX(calc(0.5 * var(--package-size)))
      translateZ(calc(-0.5 * var(--package-size)));
  }

  .wrapper:hover > .top-left {
    transform: rotateX(calc(var(--rotation-x) - 90deg))
      rotateZ(var(--rotation-y)) rotateY(180deg)
      translateX(calc(0.5 * var(--package-size)))
      translateZ(calc(0.5 * var(--package-size)))
      rotateY(220deg);
  }

  .wrapper:hover > .top-right {
    transform: rotateX(calc(var(--rotation-x) - 90deg))
      rotateZ(var(--rotation-y)) translateX(calc(0.5 * var(--package-size)))
      translateZ(calc(-0.5 * var(--package-size))) rotateY(-220deg);
  }

  .left {
    transform: rotateX(var(--rotation-x))
      rotateY(calc(var(--rotation-y) - 90deg))
      translateZ(calc(0.5 * var(--package-size)));
  }
  .right {
    transform: rotateX(var(--rotation-x))
      rotateY(calc(var(--rotation-y) - 270deg))
      translateZ(calc(0.5 * var(--package-size)));
  }
  .front {
    transform: rotateX(var(--rotation-x)) rotateY(var(--rotation-y))
      translateZ(calc(0.5 * var(--package-size)));
  }
  .back {
    transform: rotateX(var(--rotation-x))
      rotateY(calc(var(--rotation-y) - 180deg))
      translateZ(calc(0.5 * var(--package-size)));
  }
</style>
