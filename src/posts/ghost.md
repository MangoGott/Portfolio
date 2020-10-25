---
title: "GhostHuntAR"
date: "14/30/2018"
featuredImage: img/ghost/ghost2.png
---

**GhostHuntAR is the smartphone game prototype application developed during this project. The game is played using a smartphone and stereo headphones. The aim for the game is to find and destroy the ghosts that surround the player. The ghosts are placed using augmented reality technology, and they will spawn randomly around the player, which makes the position of the ghosts to always be relative to the player. As soon as the ghosts have spawned in the game, they will start to close in on the player, and when they have reached the player, the player takes damage and loses health points. When the player has lost all their health points, the game ends and the player has lost.**

The player can't physically run from the ghosts, or escape from them, but can destroy them by clicking on them. In order to find the ghosts, the player has to look through their smartphone camera and can also use their hearing to help locate the ghosts. Each ghost emits a sound, which enables the user to locate, through hearing, from which direction the ghost is coming from. The sound will also get louder the closer the ghost gets to the user as to further intensify the perception of location of the ghost through hearing.

## The making of GhostHuntAR
The ghosts were designed and created as 3D models by the project group, using Blender. Blender was also used to animate the ghosts. 
In order to access the smartphone camera in an efficient way, Vuforia was used. The Vuforia tool used was the AR camera. However, the tracking of the ghosts used purely sensory data from the smartphone and not Vuforia's built in image tracking.
The game was created using the game development platform Unity. A virtual empty world was created and the AR camera in the centre. 3D objects placed in view of the camera in the virtual world were viewed as augmented reality objects when playing the game. The directional movement of the AR camera was controlled by the movement of the smartphone, using real time sensory data from the phone.

<iframe src="https://drive.google.com/file/d/0Bw4uycbCgRQpVXlpeGtsRUl0S1k/preview" width="1080" height="720"></iframe>

