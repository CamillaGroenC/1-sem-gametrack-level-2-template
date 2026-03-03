// Main student-editable configuration file.
// Most gameplay changes should happen here, not in engine files.

export const GAME_CONFIG = {
    tileSize: 32,

    map: {
        imageSrc: "assets/map/map.png",
        widthTiles: 40,
        heightTiles: 30
    },

    camera: {
        widthPx: 320,
        heightPx: 240
    },

    player: {
        startTile: { x: 2, y: 2 },
        moveDurationMs: 150,
        defaultFacing: "down",
        spriteSheetSrc: "assets/player/player_sheet.png",
        frameWidth: 32,
        frameHeight: 32,

        // Direction rows in the sprite sheet.
        // Frames can stay at 1 if you do not want animation.
        directions: {
            up: { row: 0, frames: 1 },
            down: { row: 1, frames: 1 },
            left: { row: 2, frames: 1 },
            right: { row: 3, frames: 1 }
        }
    },

    // Event -> sound key mapping.
    audioEvents: {
        step: "step",
        interact: "interact",
        teleport: "teleport",
        ui_open_modal: "ui_open_modal"
    },

    // Sound key -> file path mapping.
    sounds: {
        step: "assets/sfx/step.wav",
        interact: "assets/sfx/interact.wav",
        teleport: "assets/sfx/teleport.wav",
        ui_open_modal: "assets/sfx/interact.wav"
    },

    // Simple coordinate list for non-walkable cells.
    solidTiles: [
        { x: 12, y: 8 }, { x: 12, y: 9 }, { x: 12, y: 10 }, { x: 12, y: 11 }, { x: 12, y: 12 },
        { x: 10, y: 10 }, { x: 11, y: 10 }, { x: 13, y: 10 }, { x: 14, y: 10 },

        { x: 24, y: 16 }, { x: 25, y: 16 }, { x: 26, y: 16 }, { x: 27, y: 16 }, { x: 28, y: 16 },
        { x: 26, y: 14 }, { x: 26, y: 15 }, { x: 26, y: 17 }, { x: 26, y: 18 },

        { x: 6, y: 20 }, { x: 7, y: 20 }, { x: 8, y: 20 }, { x: 6, y: 21 }, { x: 8, y: 21 },

        { x: 32, y: 7 }, { x: 32, y: 8 }, { x: 32, y: 9 }, { x: 33, y: 9 }, { x: 34, y: 9 }
    ],

    triggers: [
        {
            id: "welcome_tile",
            type: "onEnterCell",
            x: 3,
            y: 3,
            once: true,
            action: {
                kind: "openModalText",
                title: "Welcome",
                text: "This is the starter map. Edit js/config.js to add your own triggers."
            }
        },
        {
            id: "village_sign",
            type: "onInteractCell",
            x: 12,
            y: 10,
            action: {
                kind: "openModalHtml",
                title: "Village Sign",
                contentKey: "village_sign"
            }
        },
        {
            id: "intro_video",
            type: "onInteractCell",
            x: 20,
            y: 6,
            action: {
                kind: "openModalVideo",
                title: "Intro Video",
                contentKey: "intro_clip"
            }
        },
        {
            id: "portal_sound",
            type: "onInteractCell",
            x: 30,
            y: 9,
            action: {
                kind: "playSound",
                soundKey: "teleport"
            }
        },
        {
            id: "portal_jump",
            type: "onInteractCell",
            x: 30,
            y: 9,
            action: {
                kind: "teleport",
                targetX: 2,
                targetY: 24,
                sfx: "teleport"
            }
        },
        {
            id: "portal_text",
            type: "onInteractCell",
            x: 30,
            y: 9,
            once: true,
            action: {
                kind: "openModalText",
                title: "Portal",
                text: "Multiple triggers ran on that same tile event."
            }
        },
        {
            id: "arrival_message",
            type: "onEnterCell",
            x: 2,
            y: 24,
            once: true,
            action: {
                kind: "openModalText",
                title: "Arrival",
                text: "Teleport completed. You can walk back and trigger it again."
            }
        }
    ]
};
