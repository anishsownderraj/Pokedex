import grassIcon from "../../assets/type-icons/grass.svg";
import fireIcon from "../../assets/type-icons/fire.svg";
import waterIcon from "../../assets/type-icons/water.svg";
import electricIcon from "../../assets/type-icons/electric.svg";
import groundIcon from "../../assets/type-icons/ground.svg";
import rockIcon from "../../assets/type-icons/rock.svg";
import ghostIcon from "../../assets/type-icons/ghost.svg";
import fairyIcon from "../../assets/type-icons/fairy.svg";
import fightingIcon from "../../assets/type-icons/fighting.svg";
import flyingIcon from "../../assets/type-icons/flying.svg";
import dragonIcon from "../../assets/type-icons/dragon.svg";
import darkIcon from "../../assets/type-icons/dark.svg";
import iceIcon from "../../assets/type-icons/ice.svg";
import psychicIcon from "../../assets/type-icons/psychic.svg";
import poisonIcon from "../../assets/type-icons/poison.svg";
import steelIcon from "../../assets/type-icons/steel.svg";
import normalIcon from "../../assets/type-icons/normal.svg";

import bugIcon from "../../assets/type-icons/bug.svg";

function defineIcon(type) {
    switch (type) {
        case "grass":
            return grassIcon;
        case "water":
            return waterIcon;

        case "electric":
            return electricIcon;

        case "ground":
            return groundIcon;

        case "rock":
            return rockIcon;

        case "fire":
            return fireIcon;

        case "fairy":
            return fairyIcon;

        case "fighting":
            return fightingIcon;

        case "flying":
            return flyingIcon;

        case "dragon":
            return dragonIcon;

        case "dark":
            return darkIcon;

        case "ice":
            return iceIcon;

        case "psychic":
            return psychicIcon;

        case "poison":
            return poisonIcon;

        case "steel":
            return steelIcon;

        case "bug":
            return bugIcon;

        case "ghost":
            return ghostIcon;

        case "normal":
            return normalIcon;

        default:
            return normalIcon;
    }
}
export {
    defineIcon
};