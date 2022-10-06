    let audio = document.querySelector("audio");
    audio.crossOrigin = "anonymous";
    let canvas = document.querySelector("canvas");

    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.8;

    let wave = new Wave(audio, canvas);

      wave.addAnimation(
      new wave.animations.Wave({
        lineColor: "white",
        lineWidth: 10,
        fillColor: { gradient: ["#FF9A8B", "#FF7A88", "#FF99AC"] },
        mirroredX: true,
        count: 5,
        rounded: true,
        frequencyBand: "base",
      })
    );
    wave.addAnimation(
      new wave.animations.Cubes({
        top: true,
        count: 60,
        cubeHeight: 10,
        fillColor: "#FFFF00",
        lineColor: "rgba(0,0,0,0)",
        radius: 1,
      })
    );
    wave.addAnimation(
      new wave.animations.Circles({
        lineColor: { gradient: ["#FF9A8B", "#FF7A88", "#FF99AC"], rotate: 90 },
        lineWidth: 4,
        diameter: 20,
        count: 20,
        frequencyBand: "base",
      })
    );
    wave.addAnimation(
      new wave.animations.Glob({
        fillColor: { gradient: ["#FF9A8B", "#FF7A88", "#FF99AC"], rotate: 90 },
        lineColor: "white",
        glow: { strength: 15, color: "#FAD961" },
        lineWidth: 10,
        count: 45,
      })
    );
    wave.addAnimation(
      new wave.animations.Shine({
        lineColor: "#FAD961",
        glow: { strength: 15, color: "#FAD961" },
        diameter: 300,
        lineWidth: 10,
      })
    );
    wave.addAnimation(
      new wave.animations.Square({
        lineColor: { gradient: ["#21D4FD", "#B721FF"] },
      })
    );
    wave.addAnimation(
      new wave.animations.Arcs({
        lineWidth: 4,
        lineColor: { gradient: ["#21D4FD", "#B721FF"] },
        diameter: 500,
        fillColor: { gradient: ["#21D4FD", "#21D4FD", "#B721FF"], rotate: 45 },
      })
    );