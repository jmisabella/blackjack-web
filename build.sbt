name := """Blackjack"""
organization := "io.github.jmisabella"

version := "0.1.2"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.13.6"

libraryDependencies ++= Seq(
  guice,
  "io.github.jmisabella" %% "cards" % "0.1.25",
  "org.scalatestplus.play" %% "scalatestplus-play" % "5.1.0" % Test,
  "org.scalatest" %% "scalatest" % "3.2.9" % "test",
  filters
)

