/**
 * When you clap loud the   microbit will show a big heart if you clap quiet or no sound the it will show a small heart.
 */
input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Heart)
})
input.onSound(DetectedSound.Quiet, function () {
    basic.showIcon(IconNames.SmallHeart)
})
