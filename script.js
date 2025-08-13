 const elementsData = [
            {id: 1, symbol: "H", name: "Hydrogen", mass: 1.008, category: "nonmetal", position: [1, 1], electronConfig: "1s¹", state: "Gas", description: "Hydrogen is the lightest and most abundant chemical element in the universe. It's a colorless, odorless, tasteless, flammable gas with atomic number 1."},
            {id: 2, symbol: "He", name: "Helium", mass: 4.0026, category: "noble-gas", position: [18, 1], electronConfig: "1s²", state: "Gas", description: "Helium is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas group in the periodic table. Its boiling point is the lowest among all the elements."},
            {id: 3, symbol: "Li", name: "Lithium", mass: 6.94, category: "alkali-metal", position: [1, 2], electronConfig: "[He] 2s¹", state: "Solid", description: "Lithium is a soft, silvery-white alkali metal. Under standard conditions, it is the lightest metal and the lightest solid element. It is highly reactive and flammable, and must be stored in mineral oil."},
            {id: 4, symbol: "Be", name: "Beryllium", mass: 9.0122, category: "alkaline-earth", position: [2, 2], electronConfig: "[He] 2s²", state: "Solid", description: "Beryllium is a relatively rare element in the universe. It is a divalent element which occurs naturally only in combination with other elements to form minerals."},
            {id: 5, symbol: "B", name: "Boron", mass: 10.81, category: "metalloid", position: [13, 2], electronConfig: "[He] 2s² 2p¹", state: "Solid", description: "Boron is a chemical element with symbol B and atomic number 5. It is a low-abundance element that is a poor electrical conductor at room temperature."},
            {id: 6, symbol: "C", name: "Carbon", mass: 12.011, category: "nonmetal", position: [14, 2], electronConfig: "[He] 2s² 2p²", state: "Solid", description: "Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic and tetravalent—making four electrons available to form covalent chemical bonds."},
            {id: 7, symbol: "N", name: "Nitrogen", mass: 14.007, category: "nonmetal", position: [15, 2], electronConfig: "[He] 2s² 2p³", state: "Gas", description: "Nitrogen is a chemical element with symbol N and atomic number 7. It is the lightest member of group 15 of the periodic table, often called the pnictogens."},
            {id: 8, symbol: "O", name: "Oxygen", mass: 15.999, category: "nonmetal", position: [16, 2], electronConfig: "[He] 2s² 2p⁴", state: "Gas", description: "Oxygen is a chemical element with symbol O and atomic number 8. It is a member of the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing agent that readily forms oxides with most elements."},
            {id: 9, symbol: "F", name: "Fluorine", mass: 18.998, category: "halogen", position: [17, 2], electronConfig: "[He] 2s² 2p⁵", state: "Gas", description: "Fluorine is a chemical element with symbol F and atomic number 9. It is the lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard conditions."},
            {id: 10, symbol: "Ne", name: "Neon", mass: 20.180, category: "noble-gas", position: [18, 2], electronConfig: "[He] 2s² 2p⁶", state: "Gas", description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas. Neon is a colorless, odorless, inert monatomic gas under standard conditions."},
            {id: 11, symbol: "Na", name: "Sodium", mass: 22.990, category: "alkali-metal", position: [1, 3], electronConfig: "[Ne] 3s¹", state: "Solid", description: "Sodium is a chemical element with symbol Na and atomic number 11. It is a soft, silvery-white, highly reactive metal and is a member of the alkali metals."},
            {id: 12, symbol: "Mg", name: "Magnesium", mass: 24.305, category: "alkaline-earth", position: [2, 3], electronConfig: "[Ne] 3s²", state: "Solid", description: "Magnesium is a chemical element with symbol Mg and atomic number 12. It is a shiny gray solid which bears a close physical resemblance to the other five elements in the second column of the periodic table."},
            {id: 13, symbol: "Al", name: "Aluminum", mass: 26.982, category: "post-transition", position: [13, 3], electronConfig: "[Ne] 3s² 3p¹", state: "Solid", description: "Aluminum is a chemical element with symbol Al and atomic number 13. It is a silvery-white, soft, nonmagnetic and ductile metal in the boron group."},
            {id: 14, symbol: "Si", name: "Silicon", mass: 28.085, category: "metalloid", position: [14, 3], electronConfig: "[Ne] 3s² 3p²", state: "Solid", description: "Silicon is a chemical element with symbol Si and atomic number 14. It is a hard and brittle crystalline solid with a blue-grey metallic lustre, and is a tetravalent metalloid and semiconductor."},
            {id: 15, symbol: "P", name: "Phosphorus", mass: 30.974, category: "nonmetal", position: [15, 3], electronConfig: "[Ne] 3s² 3p³", state: "Solid", description: "Phosphorus is a chemical element with symbol P and atomic number 15. As an element, phosphorus exists in two major forms, white phosphorus and red phosphorus."},
            {id: 16, symbol: "S", name: "Sulfur", mass: 32.06, category: "nonmetal", position: [16, 3], electronConfig: "[Ne] 3s² 3p⁴", state: "Solid", description: "Sulfur is a chemical element with symbol S and atomic number 16. It is abundant, multivalent, and nonmetallic. Under normal conditions, sulfur atoms form cyclic octatomic molecules with a chemical formula S8."},
            {id: 17, symbol: "Cl", name: "Chlorine", mass: 35.45, category: "halogen", position: [17, 3], electronConfig: "[Ne] 3s² 3p⁵", state: "Gas", description: "Chlorine is a chemical element with symbol Cl and atomic number 17. The second-lightest of the halogens, it appears between fluorine and bromine in the periodic table and its properties are mostly intermediate between them."},
            {id: 18, symbol: "Ar", name: "Argon", mass: 39.948, category: "noble-gas", position: [18, 3], electronConfig: "[Ne] 3s² 3p⁶", state: "Gas", description: "Argon is a chemical element with symbol Ar and atomic number 18. It is in group 18 of the periodic table and is a noble gas. Argon is the third-most abundant gas in the Earth's atmosphere."},
            {id: 19, symbol: "K", name: "Potassium", mass: 39.098, category: "alkali-metal", position: [1, 4], electronConfig: "[Ar] 4s¹", state: "Solid", description: "Potassium is a chemical element with symbol K and atomic number 19. It was first isolated from potash, the ashes of plants, from which its name derives. In the periodic table, potassium is one of the alkali metals."},
            {id: 20, symbol: "Ca", name: "Calcium", mass: 40.078, category: "alkaline-earth", position: [2, 4], electronConfig: "[Ar] 4s²", state: "Solid", description: "Calcium is a chemical element with symbol Ca and atomic number 20. As an alkaline earth metal, calcium is a reactive metal that forms a dark oxide-nitride layer when exposed to air."},
            {id: 21, symbol: "Sc", name: "Scandium", mass: 44.956, category: "transition-metal", position: [3, 4], electronConfig: "[Ar] 3d¹ 4s²", state: "Solid", description: "Scandium is a chemical element with symbol Sc and atomic number 21. A silvery-white metallic d-block element, it has historically been classified as a rare-earth element."},
            {id: 22, symbol: "Ti", name: "Titanium", mass: 47.867, category: "transition-metal", position: [4, 4], electronConfig: "[Ar] 3d² 4s²", state: "Solid", description: "Titanium is a chemical element with symbol Ti and atomic number 22. It is a lustrous transition metal with a silver color, low density, and high strength."},
            {id: 23, symbol: "V", name: "Vanadium", mass: 50.942, category: "transition-metal", position: [5, 4], electronConfig: "[Ar] 3d³ 4s²", state: "Solid", description: "Vanadium is a chemical element with symbol V and atomic number 23. It is a hard, silvery-grey, ductile, malleable transition metal."},
            {id: 24, symbol: "Cr", name: "Chromium", mass: 51.996, category: "transition-metal", position: [6, 4], electronConfig: "[Ar] 3d⁵ 4s¹", state: "Solid", description: "Chromium is a chemical element with symbol Cr and atomic number 24. It is the first element in group 6. It is a steely-grey, lustrous, hard and brittle transition metal."},
            {id: 25, symbol: "Mn", name: "Manganese", mass: 54.938, category: "transition-metal", position: [7, 4], electronConfig: "[Ar] 3d⁵ 4s²", state: "Solid", description: "Manganese is a chemical element with symbol Mn and atomic number 25. It is not found as a free element in nature; it is often found in minerals in combination with iron."},
            {id: 26, symbol: "Fe", name: "Iron", mass: 55.845, category: "transition-metal", position: [8, 4], electronConfig: "[Ar] 3d⁶ 4s²", state: "Solid", description: "Iron is a chemical element with symbol Fe and atomic number 26. It is a metal that belongs to the first transition series and group 8 of the periodic table. It is by mass the most common element on Earth."},
            {id: 27, symbol: "Co", name: "Cobalt", mass: 58.933, category: "transition-metal", position: [9, 4], electronConfig: "[Ar] 3d⁷ 4s²", state: "Solid", description: "Cobalt is a chemical element with symbol Co and atomic number 27. Like nickel, cobalt is found in the Earth's crust only in chemically combined form, save for small deposits found in alloys of natural meteoric iron."},
            {id: 28, symbol: "Ni", name: "Nickel", mass: 58.693, category: "transition-metal", position: [10, 4], electronConfig: "[Ar] 3d⁸ 4s²", state: "Solid", description: "Nickel is a chemical element with symbol Ni and atomic number 28. It is a silvery-white lustrous metal with a slight golden tinge."},
            {id: 29, symbol: "Cu", name: "Copper", mass: 63.546, category: "transition-metal", position: [11, 4], electronConfig: "[Ar] 3d¹⁰ 4s¹", state: "Solid", description: "Copper is a chemical element with symbol Cu and atomic number 29. It is a soft, malleable, and ductile metal with very high thermal and electrical conductivity."},
            {id: 30, symbol: "Zn", name: "Zinc", mass: 65.38, category: "transition-metal", position: [12, 4], electronConfig: "[Ar] 3d¹⁰ 4s²", state: "Solid", description: "Zinc is a chemical element with symbol Zn and atomic number 30. It is the first element in group 12 (IIB) of the periodic table."},
            {id: 31, symbol: "Ga", name: "Gallium", mass: 69.723, category: "post-transition", position: [13, 4], electronConfig: "[Ar] 3d¹⁰ 4s² 4p¹", state: "Solid", description: "Gallium is a chemical element with symbol Ga and atomic number 31. It is in group 13 of the periodic table, and thus has similarities to the other metals of the group, aluminium, indium, and thallium."},
            {id: 32, symbol: "Ge", name: "Germanium", mass: 72.630, category: "metalloid", position: [14, 4], electronConfig: "[Ar] 3d¹⁰ 4s² 4p²", state: "Solid", description: "Germanium is a chemical element with symbol Ge and atomic number 32. It is a lustrous, hard, grayish-white metalloid in the carbon group."},
            {id: 33, symbol: "As", name: "Arsenic", mass: 74.922, category: "metalloid", position: [15, 4], electronConfig: "[Ar] 3d¹⁰ 4s² 4p³", state: "Solid", description: "Arsenic is a chemical element with symbol As and atomic number 33. Arsenic occurs in many minerals, usually in combination with sulfur and metals, but also as a pure elemental crystal."},
            {id: 34, symbol: "Se", name: "Selenium", mass: 78.971, category: "nonmetal", position: [16, 4], electronConfig: "[Ar] 3d¹⁰ 4s² 4p⁴", state: "Solid", description: "Selenium is a chemical element with symbol Se and atomic number 34. It is a nonmetal with properties that are intermediate between the elements above and below in the periodic table, sulfur and tellurium."},
            {id: 35, symbol: "Br", name: "Bromine", mass: 79.904, category: "halogen", position: [17, 4], electronConfig: "[Ar] 3d¹⁰ 4s² 4p⁵", state: "Liquid", description: "Bromine is a chemical element with symbol Br and atomic number 35. It is the third-lightest halogen, and is a fuming red-brown liquid at room temperature that evaporates readily to form a similarly colored gas."},
            {id: 36, symbol: "Kr", name: "Krypton", mass: 83.798, category: "noble-gas", position: [18, 4], electronConfig: "[Ar] 3d¹⁰ 4s² 4p⁶", state: "Gas", description: "Krypton is a chemical element with symbol Kr and atomic number 36. It is a member of group 18 (noble gases) elements. A colorless, odorless, tasteless noble gas, krypton occurs in trace amounts in the atmosphere."},
            {id: 37, symbol: "Rb", name: "Rubidium", mass: 85.468, category: "alkali-metal", position: [1, 5], electronConfig: "[Kr] 5s¹", state: "Solid", description: "Rubidium is a chemical element with symbol Rb and atomic number 37. Rubidium is a soft, silvery-white metallic element of the alkali metal group."},
            {id: 38, symbol: "Sr", name: "Strontium", mass: 87.62, category: "alkaline-earth", position: [2, 5], electronConfig: "[Kr] 5s²", state: "Solid", description: "Strontium is a chemical element with symbol Sr and atomic number 38. An alkaline earth metal, strontium is a soft silver-white yellowish metallic element that is highly chemically reactive."},
            {id: 39, symbol: "Y", name: "Yttrium", mass: 88.906, category: "transition-metal", position: [3, 5], electronConfig: "[Kr] 4d¹ 5s²", state: "Solid", description: "Yttrium is a chemical element with symbol Y and atomic number 39. It is a silvery-metallic transition metal chemically similar to the lanthanides and has often been classified as a 'rare-earth element'."},
            {id: 40, symbol: "Zr", name: "Zirconium", mass: 91.224, category: "transition-metal", position: [4, 5], electronConfig: "[Kr] 4d² 5s²", state: "Solid", description: "Zirconium is a chemical element with symbol Zr and atomic number 40. The name of zirconium is taken from the name of the mineral zircon, the most important source of zirconium."},
            {id: 41, symbol: "Nb", name: "Niobium", mass: 92.906, category: "transition-metal", position: [5, 5], electronConfig: "[Kr] 4d⁴ 5s¹", state: "Solid", description: "Niobium is a chemical element with symbol Nb and atomic number 41. It is a soft, grey, ductile transition metal, often found in the minerals pyrochlore and columbite."},
            {id: 42, symbol: "Mo", name: "Molybdenum", mass: 95.95, category: "transition-metal", position: [6, 5], electronConfig: "[Kr] 4d⁵ 5s¹", state: "Solid", description: "Molybdenum is a chemical element with symbol Mo and atomic number 42. The name is from Neo-Latin molybdaenum, from Ancient Greek Μόλυβδος molybdos, meaning lead."},
            {id: 43, symbol: "Tc", name: "Technetium", mass: 98, category: "transition-metal", position: [7, 5], electronConfig: "[Kr] 4d⁵ 5s²", state: "Solid", description: "Technetium is a chemical element with symbol Tc and atomic number 43. It is the lightest element whose isotopes are all radioactive, none of which is stable."},
            {id: 44, symbol: "Ru", name: "Ruthenium", mass: 101.07, category: "transition-metal", position: [8, 5], electronConfig: "[Kr] 4d⁷ 5s¹", state: "Solid", description: "Ruthenium is a chemical element with symbol Ru and atomic number 44. It is a rare transition metal belonging to the platinum group of the periodic table."},
            {id: 45, symbol: "Rh", name: "Rhodium", mass: 102.91, category: "transition-metal", position: [9, 5], electronConfig: "[Kr] 4d⁸ 5s¹", state: "Solid", description: "Rhodium is a chemical element with symbol Rh and atomic number 45. It is a rare, silvery-white, hard, corrosion-resistant, and chemically inert transition metal."},
            {id: 46, symbol: "Pd", name: "Palladium", mass: 106.42, category: "transition-metal", position: [10, 5], electronConfig: "[Kr] 4d¹⁰", state: "Solid", description: "Palladium is a chemical element with symbol Pd and atomic number 46. It is a rare and lustrous silvery-white metal discovered in 1803 by William Hyde Wollaston."},
            {id: 47, symbol: "Ag", name: "Silver", mass: 107.87, category: "transition-metal", position: [11, 5], electronConfig: "[Kr] 4d¹⁰ 5s¹", state: "Solid", description: "Silver is a chemical element with symbol Ag and atomic number 47. A soft, white, lustrous transition metal, it exhibits the highest electrical conductivity, thermal conductivity, and reflectivity of any metal."},
            {id: 48, symbol: "Cd", name: "Cadmium", mass: 112.41, category: "transition-metal", position: [12, 5], electronConfig: "[Kr] 4d¹⁰ 5s²", state: "Solid", description: "Cadmium is a chemical element with symbol Cd and atomic number 48. This soft, bluish-white metal is chemically similar to the two other stable metals in group 12, zinc and mercury."},
            {id: 49, symbol: "In", name: "Indium", mass: 114.82, category: "post-transition", position: [13, 5], electronConfig: "[Kr] 4d¹⁰ 5s² 5p¹", state: "Solid", description: "Indium is a chemical element with symbol In and atomic number 49. It is a post-transition metal that makes up 0.21 parts per million of the Earth's crust."},
            {id: 50, symbol: "Sn", name: "Tin", mass: 118.71, category: "post-transition", position: [14, 5], electronConfig: "[Kr] 4d¹⁰ 5s² 5p²", state: "Solid", description: "Tin is a chemical element with symbol Sn and atomic number 50. It is a post-transition metal in group 14 of the periodic table. It is obtained chiefly from the mineral cassiterite, which contains tin dioxide."},
            {id: 51, symbol: "Sb", name: "Antimony", mass: 121.76, category: "metalloid", position: [15, 5], electronConfig: "[Kr] 4d¹⁰ 5s² 5p³", state: "Solid", description: "Antimony is a chemical element with symbol Sb and atomic number 51. A lustrous gray metalloid, it is found in nature mainly as the sulfide mineral stibnite."},
            {id: 52, symbol: "Te", name: "Tellurium", mass: 127.60, category: "metalloid", position: [16, 5], electronConfig: "[Kr] 4d¹⁰ 5s² 5p⁴", state: "Solid", description: "Tellurium is a chemical element with symbol Te and atomic number 52. It is a brittle, mildly toxic, rare, silver-white metalloid."},
            {id: 53, symbol: "I", name: "Iodine", mass: 126.90, category: "halogen", position: [17, 5], electronConfig: "[Kr] 4d¹⁰ 5s² 5p⁵", state: "Solid", description: "Iodine is a chemical element with symbol I and atomic number 53. The heaviest of the stable halogens, it exists as a lustrous, purple-black metallic solid at standard conditions that sublimes readily to form a violet gas."},
            {id: 54, symbol: "Xe", name: "Xenon", mass: 131.29, category: "noble-gas", position: [18, 5], electronConfig: "[Kr] 4d¹⁰ 5s² 5p⁶", state: "Gas", description: "Xenon is a chemical element with symbol Xe and atomic number 54. It is a colorless, dense, odorless noble gas found in the Earth's atmosphere in trace amounts."},
            {id: 55, symbol: "Cs", name: "Cesium", mass: 132.91, category: "alkali-metal", position: [1, 6], electronConfig: "[Xe] 6s¹", state: "Solid", description: "Cesium is a chemical element with symbol Cs and atomic number 55. It is a soft, silvery-gold alkali metal with a melting point of 28.5 °C, which makes it one of only five elemental metals that are liquid at or near room temperature."},
            {id: 56, symbol: "Ba", name: "Barium", mass: 137.33, category: "alkaline-earth", position: [2, 6], electronConfig: "[Xe] 6s²", state: "Solid", description: "Barium is a chemical element with symbol Ba and atomic number 56. It is the fifth element in group 2 and is a soft, silvery alkaline earth metal."},
            {id: 57, symbol: "La", name: "Lanthanum", mass: 138.91, category: "lanthanide", position: [3, 6], electronConfig: "[Xe] 5d¹ 6s²", state: "Solid", description: "Lanthanum is a chemical element with symbol La and atomic number 57. It is a soft, ductile, silvery-white metal that tarnishes rapidly when exposed to air."},
            {id: 58, symbol: "Ce", name: "Cerium", mass: 140.12, category: "lanthanide", position: [4, 9], electronConfig: "[Xe] 4f¹ 5d¹ 6s²", state: "Solid", description: "Cerium is a chemical element with symbol Ce and atomic number 58. It is a soft, silvery, ductile metal which easily oxidizes in air."},
            {id: 59, symbol: "Pr", name: "Praseodymium", mass: 140.91, category: "lanthanide", position: [5, 9], electronConfig: "[Xe] 4f³ 6s²", state: "Solid", description: "Praseodymium is a chemical element with symbol Pr and atomic number 59. It is the third member of the lanthanide series and is traditionally considered to be one of the rare-earth metals."},
            {id: 60, symbol: "Nd", name: "Neodymium", mass: 144.24, category: "lanthanide", position: [6, 9], electronConfig: "[Xe] 4f⁴ 6s²", state: "Solid", description: "Neodymium is a chemical element with symbol Nd and atomic number 60. It is a soft silvery metal that tarnishes in air."},
            {id: 61, symbol: "Pm", name: "Promethium", mass: 145, category: "lanthanide", position: [7, 9], electronConfig: "[Xe] 4f⁵ 6s²", state: "Solid", description: "Promethium is a chemical element with symbol Pm and atomic number 61. All of its isotopes are radioactive; it is extremely rare, with only about 500–600 grams naturally occurring in Earth's crust at any given time."},
            {id: 62, symbol: "Sm", name: "Samarium", mass: 150.36, category: "lanthanide", position: [8, 9], electronConfig: "[Xe] 4f⁶ 6s²", state: "Solid", description: "Samarium is a chemical element with symbol Sm and atomic number 62. It is a moderately hard silvery metal that slowly oxidizes in air."},
            {id: 63, symbol: "Eu", name: "Europium", mass: 151.96, category: "lanthanide", position: [9, 9], electronConfig: "[Xe] 4f⁷ 6s²", state: "Solid", description: "Europium is a chemical element with symbol Eu and atomic number 63. It was isolated in 1901 and is named after the continent of Europe."},
            {id: 64, symbol: "Gd", name: "Gadolinium", mass: 157.25, category: "lanthanide", position: [10, 9], electronConfig: "[Xe] 4f⁷ 5d¹ 6s²", state: "Solid", description: "Gadolinium is a chemical element with symbol Gd and atomic number 64. It is a silvery-white, malleable, and ductile rare-earth metal."},
            {id: 65, symbol: "Tb", name: "Terbium", mass: 158.93, category: "lanthanide", position: [11, 9], electronConfig: "[Xe] 4f⁹ 6s²", state: "Solid", description: "Terbium is a chemical element with symbol Tb and atomic number 65. It is a silvery-white, rare earth metal that is malleable, ductile, and soft enough to be cut with a knife."},
            {id: 66, symbol: "Dy", name: "Dysprosium", mass: 162.50, category: "lanthanide", position: [12, 9], electronConfig: "[Xe] 4f¹⁰ 6s²", state: "Solid", description: "Dysprosium is a chemical element with symbol Dy and atomic number 66. It is a rare earth element with a metallic silver luster."},
            {id: 67, symbol: "Ho", name: "Holmium", mass: 164.93, category: "lanthanide", position: [13, 9], electronConfig: "[Xe] 4f¹¹ 6s²", state: "Solid", description: "Holmium is a chemical element with symbol Ho and atomic number 67. Part of the lanthanide series, holmium is a rare-earth element."},
            {id: 68, symbol: "Er", name: "Erbium", mass: 167.26, category: "lanthanide", position: [14, 9], electronConfig: "[Xe] 4f¹² 6s²", state: "Solid", description: "Erbium is a chemical element with symbol Er and atomic number 68. A silvery-white solid metal when artificially isolated, natural erbium is always found in chemical combination with other elements."},
            {id: 69, symbol: "Tm", name: "Thulium", mass: 168.93, category: "lanthanide", position: [15, 9], electronConfig: "[Xe] 4f¹³ 6s²", state: "Solid", description: "Thulium is a chemical element with symbol Tm and atomic number 69. It is the thirteenth and third-last element in the lanthanide series."},
            {id: 70, symbol: "Yb", name: "Ytterbium", mass: 173.05, category: "lanthanide", position: [16, 9], electronConfig: "[Xe] 4f¹⁴ 6s²", state: "Solid", description: "Ytterbium is a chemical element with symbol Yb and atomic number 70. It is the fourteenth and penultimate element in the lanthanide series."},
            {id: 71, symbol: "Lu", name: "Lutetium", mass: 174.97, category: "lanthanide", position: [17, 9], electronConfig: "[Xe] 4f¹⁴ 5d¹ 6s²", state: "Solid", description: "Lutetium is a chemical element with symbol Lu and atomic number 71. It is a silvery white metal, which resists corrosion in dry air, but not in moist air."},
            {id: 72, symbol: "Hf", name: "Hafnium", mass: 178.49, category: "transition-metal", position: [4, 6], electronConfig: "[Xe] 4f¹⁴ 5d² 6s²", state: "Solid", description: "Hafnium is a chemical element with symbol Hf and atomic number 72. A lustrous, silvery gray, tetravalent transition metal, hafnium chemically resembles zirconium and is found in many zirconium minerals."},
            {id: 73, symbol: "Ta", name: "Tantalum", mass: 180.95, category: "transition-metal", position: [5, 6], electronConfig: "[Xe] 4f¹⁴ 5d³ 6s²", state: "Solid", description: "Tantalum is a chemical element with symbol Ta and atomic number 73. A rare, hard, blue-gray, lustrous transition metal, tantalum is highly corrosion-resistant."},
            {id: 74, symbol: "W", name: "Tungsten", mass: 183.84, category: "transition-metal", position: [6, 6], electronConfig: "[Xe] 4f¹⁴ 5d⁴ 6s²", state: "Solid", description: "Tungsten, or wolfram, is a chemical element with symbol W and atomic number 74. The name tungsten comes from the former Swedish name for the tungstate mineral scheelite, tung sten or 'heavy stone'."},
            {id: 75, symbol: "Re", name: "Rhenium", mass: 186.21, category: "transition-metal", position: [7, 6], electronConfig: "[Xe] 4f¹⁴ 5d⁵ 6s²", state: "Solid", description: "Rhenium is a chemical element with symbol Re and atomic number 75. It is a silvery-white, heavy, third-row transition metal in group 7 of the periodic table."},
            {id: 76, symbol: "Os", name: "Osmium", mass: 190.23, category: "transition-metal", position: [8, 6], electronConfig: "[Xe] 4f¹⁴ 5d⁶ 6s²", state: "Solid", description: "Osmium is a chemical element with symbol Os and atomic number 76. It is a hard, brittle, bluish-white transition metal in the platinum group that is found as a trace element in alloys, mostly in platinum ores."},
            {id: 77, symbol: "Ir", name: "Iridium", mass: 192.22, category: "transition-metal", position: [9, 6], electronConfig: "[Xe] 4f¹⁴ 5d⁷ 6s²", state: "Solid", description: "Iridium is a chemical element with symbol Ir and atomic number 77. A very hard, brittle, silvery-white transition metal of the platinum group, iridium is the second-densest metal with a density of 22.56 g/cm³."},
            {id: 78, symbol: "Pt", name: "Platinum", mass: 195.08, category: "transition-metal", position: [10, 6], electronConfig: "[Xe] 4f¹⁴ 5d⁹ 6s¹", state: "Solid", description: "Platinum is a chemical element with symbol Pt and atomic number 78. It is a dense, malleable, ductile, highly unreactive, precious, silverish-white transition metal."},
            {id: 79, symbol: "Au", name: "Gold", mass: 196.97, category: "transition-metal", position: [11, 6], electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹", state: "Solid", description: "Gold is a chemical element with symbol Au and atomic number 79. In its purest form, it is a bright, slightly reddish yellow, dense, soft, malleable, and ductile metal."},
            {id: 80, symbol: "Hg", name: "Mercury", mass: 200.59, category: "transition-metal", position: [12, 6], electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s²", state: "Liquid", description: "Mercury is a chemical element with symbol Hg and atomic number 80. It is commonly known as quicksilver and was formerly named hydrargyrum."},
            {id: 81, symbol: "Tl", name: "Thallium", mass: 204.38, category: "post-transition", position: [13, 6], electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹", state: "Solid", description: "Thallium is a chemical element with symbol Tl and atomic number 81. This soft gray malleable poor metal resembles tin but discolors when exposed to air."},
            {id: 82, symbol: "Pb", name: "Lead", mass: 207.2, category: "post-transition", position: [14, 6], electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²", state: "Solid", description: "Lead is a chemical element with symbol Pb and atomic number 82. It is a heavy metal that is denser than most common materials."},
            {id: 83, symbol: "Bi", name: "Bismuth", mass: 208.98, category: "post-transition", position: [15, 6], electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³", state: "Solid", description: "Bismuth is a chemical element with the symbol Bi and atomic number 83. A pentavalent post-transition metal and one of the pnictogens, chemically resembles arsenic and antimony."},
            {id: 84, symbol: "Po", name: "Polonium", mass: 209, category: "post-transition", position: [16, 6], electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴", state: "Solid", description: "Polonium is a chemical element with symbol Po and atomic number 84, discovered in 1898 by Marie Curie and Pierre Curie. A rare and highly radioactive metal with no stable isotopes."},
            {id: 85, symbol: "At", name: "Astatine", mass: 210, category: "halogen", position: [17, 6], electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵", state: "Solid", description: "Astatine is a chemical element with symbol At and atomic number 85. It is the rarest naturally occurring element in the Earth's crust. It is a highly radioactive element."},
            {id: 86, symbol: "Rn", name: "Radon", mass: 222, category: "noble-gas", position: [18, 6], electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶", state: "Gas", description: "Radon is a chemical element with symbol Rn and atomic number 86. It is a radioactive, colorless, odorless, tasteless noble gas."},
            {id: 87, symbol: "Fr", name: "Francium", mass: 223, category: "alkali-metal", position: [1, 7], electronConfig: "[Rn] 7s¹", state: "Solid", description: "Francium is a chemical element with symbol Fr and atomic number 87. It was discovered by Marguerite Perey in France in 1939. It is the second-most electropositive element, behind only cesium."},
            {id: 88, symbol: "Ra", name: "Radium", mass: 226, category: "alkaline-earth", position: [2, 7], electronConfig: "[Rn] 7s²", state: "Solid", description: "Radium is a chemical element with symbol Ra and atomic number 88. It is the sixth element in group 2 of the periodic table, also known as the alkaline earth metals."},
            {id: 89, symbol: "Ac", name: "Actinium", mass: 227, category: "actinide", position: [3, 7], electronConfig: "[Rn] 6d¹ 7s²", state: "Solid", description: "Actinium is a chemical element with symbol Ac and atomic number 89. It was discovered in 1899 and is a radioactive, silvery-white metal."},
            {id: 90, symbol: "Th", name: "Thorium", mass: 232.04, category: "actinide", position: [4, 10], electronConfig: "[Rn] 6d² 7s²", state: "Solid", description: "Thorium is a chemical element with symbol Th and atomic number 90. A radioactive actinide metal, thorium is one of only four radioactive elements that still occur naturally in large quantities as a primordial element."},
            {id: 91, symbol: "Pa", name: "Protactinium", mass: 231.04, category: "actinide", position: [5, 10], electronConfig: "[Rn] 5f² 6d¹ 7s²", state: "Solid", description: "Protactinium is a chemical element with symbol Pa and atomic number 91. It is a dense, silvery-gray metal which readily reacts with oxygen, water vapor and inorganic acids."},
            {id: 92, symbol: "U", name: "Uranium", mass: 238.03, category: "actinide", position: [6, 10], electronConfig: "[Rn] 5f³ 6d¹ 7s²", state: "Solid", description: "Uranium is a chemical element with symbol U and atomic number 92. It is a silvery-white metal in the actinide series of the periodic table."},
            {id: 93, symbol: "Np", name: "Neptunium", mass: 237, category: "actinide", position: [7, 10], electronConfig: "[Rn] 5f⁴ 6d¹ 7s²", state: "Solid", description: "Neptunium is a chemical element with symbol Np and atomic number 93. A radioactive actinide metal, neptunium is the first transuranic element."},
            {id: 94, symbol: "Pu", name: "Plutonium", mass: 244, category: "actinide", position: [8, 10], electronConfig: "[Rn] 5f⁶ 7s²", state: "Solid", description: "Plutonium is a radioactive chemical element with symbol Pu and atomic number 94. It is an actinide metal of silvery-gray appearance."},
            {id: 95, symbol: "Am", name: "Americium", mass: 243, category: "actinide", position: [9, 10], electronConfig: "[Rn] 5f⁷ 7s²", state: "Solid", description: "Americium is a chemical element with symbol Am and atomic number 95. This transuranic element of the actinide series is radioactive."},
            {id: 96, symbol: "Cm", name: "Curium", mass: 247, category: "actinide", position: [10, 10], electronConfig: "[Rn] 5f⁷ 6d¹ 7s²", state: "Solid", description: "Curium is a chemical element with symbol Cm and atomic number 96. This transuranic element of the actinide series was named after Marie and Pierre Curie."},
            {id: 97, symbol: "Bk", name: "Berkelium", mass: 247, category: "actinide", position: [11, 10], electronConfig: "[Rn] 5f⁹ 7s²", state: "Solid", description: "Berkelium is a chemical element with symbol Bk and atomic number 97. It is a member of the actinide and transuranium element series."},
            {id: 98, symbol: "Cf", name: "Californium", mass: 251, category: "actinide", position: [12, 10], electronConfig: "[Rn] 5f¹⁰ 7s²", state: "Solid", description: "Californium is a chemical element with symbol Cf and atomic number 98. This radioactive transuranic element is an actinide."},
            {id: 99, symbol: "Es", name: "Einsteinium", mass: 252, category: "actinide", position: [13, 10], electronConfig: "[Rn] 5f¹¹ 7s²", state: "Solid", description: "Einsteinium is a chemical element with symbol Es and atomic number 99. A member of the actinide series, it is the seventh transuranic element."},
            {id: 100, symbol: "Fm", name: "Fermium", mass: 257, category: "actinide", position: [14, 10], electronConfig: "[Rn] 5f¹² 7s²", state: "Solid", description: "Fermium is a chemical element with symbol Fm and atomic number 100. It is a member of the actinide series and was named after Enrico Fermi."},
            {id: 101, symbol: "Md", name: "Mendelevium", mass: 258, category: "actinide", position: [15, 10], electronConfig: "[Rn] 5f¹³ 7s²", state: "Solid", description: "Mendelevium is a chemical element with symbol Md and atomic number 101. A metallic radioactive transuranic element in the actinide series, it is named after Dmitri Mendeleev."},
            {id: 102, symbol: "No", name: "Nobelium", mass: 259, category: "actinide", position: [16, 10], electronConfig: "[Rn] 5f¹⁴ 7s²", state: "Solid", description: "Nobelium is a chemical element with symbol No and atomic number 102. It is named in honor of Alfred Nobel, the inventor of dynamite and founder of the Nobel Prizes."},
            {id: 103, symbol: "Lr", name: "Lawrencium", mass: 266, category: "actinide", position: [17, 10], electronConfig: "[Rn] 5f¹⁴ 7s² 7p¹", state: "Solid", description: "Lawrencium is a chemical element with symbol Lr and atomic number 103. It is named in honor of Ernest Lawrence, inventor of the cyclotron."},
            {id: 104, symbol: "Rf", name: "Rutherfordium", mass: 267, category: "transition-metal", position: [4, 7], electronConfig: "[Rn] 5f¹⁴ 6d² 7s²", state: "Unknown", description: "Rutherfordium is a chemical element with symbol Rf and atomic number 104. It is named after physicist Ernest Rutherford."},
            {id: 105, symbol: "Db", name: "Dubnium", mass: 268, category: "transition-metal", position: [5, 7], electronConfig: "[Rn] 5f¹⁴ 6d³ 7s²", state: "Unknown", description: "Dubnium is a chemical element with symbol Db and atomic number 105. It is named after the town of Dubna in Russia."},
            {id: 106, symbol: "Sg", name: "Seaborgium", mass: 269, category: "transition-metal", position: [6, 7], electronConfig: "[Rn] 5f¹⁴ 6d⁴ 7s²", state: "Unknown", description: "Seaborgium is a chemical element with symbol Sg and atomic number 106. It is named after American nuclear chemist Glenn T. Seaborg."},
            {id: 107, symbol: "Bh", name: "Bohrium", mass: 270, category: "transition-metal", position: [7, 7], electronConfig: "[Rn] 5f¹⁴ 6d⁵ 7s²", state: "Unknown", description: "Bohrium is a chemical element with symbol Bh and atomic number 107. It is named after Danish physicist Niels Bohr."},
            {id: 108, symbol: "Hs", name: "Hassium", mass: 269, category: "transition-metal", position: [8, 7], electronConfig: "[Rn] 5f¹⁴ 6d⁶ 7s²", state: "Unknown", description: "Hassium is a chemical element with symbol Hs and atomic number 108. It is named after the German state of Hesse."},
            {id: 109, symbol: "Mt", name: "Meitnerium", mass: 278, category: "unknown", position: [9, 7], electronConfig: "[Rn] 5f¹⁴ 6d⁷ 7s²", state: "Unknown", description: "Meitnerium is a chemical element with symbol Mt and atomic number 109. It is named after Austrian physicist Lise Meitner."},
    {id: 109, symbol: "Mt", name: "Meitnerium", mass: 278, category: "unknown", position: [9, 7], electronConfig: "[Rn] 5f¹⁴ 6d⁷ 7s²", state: "Unknown", description: "Meitnerium is a chemical element with symbol Mt and atomic number 109. It is named after Austrian physicist Lise Meitner."},
    {id: 110, symbol: "Ds", name: "Darmstadtium", mass: 281, category: "unknown", position: [10, 7], electronConfig: "[Rn] 5f¹⁴ 6d⁸ 7s²", state: "Unknown", description: "Darmstadtium is a chemical element with symbol Ds and atomic number 110. It is named after Darmstadt, Germany, where it was discovered."},
    {id: 111, symbol: "Rg", name: "Roentgenium", mass: 282, category: "unknown", position: [11, 7], electronConfig: "[Rn] 5f¹⁴ 6d⁹ 7s²", state: "Unknown", description: "Roentgenium is a chemical element with symbol Rg and atomic number 111. It is named after Wilhelm Conrad Röntgen, the discoverer of X-rays."},
    {id: 112, symbol: "Cn", name: "Copernicium", mass: 285, category: "transition-metal", position: [12, 7], electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s²", state: "Unknown", description: "Copernicium is a chemical element with symbol Cn and atomic number 112. It is named after astronomer Nicolaus Copernicus."},
    {id: 113, symbol: "Nh", name: "Nihonium", mass: 286, category: "unknown", position: [13, 7], electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹", state: "Unknown", description: "Nihonium is a chemical element with symbol Nh and atomic number 113. It is named after Japan (Nihon in Japanese)."},
    {id: 114, symbol: "Fl", name: "Flerovium", mass: 289, category: "unknown", position: [14, 7], electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²", state: "Unknown", description: "Flerovium is a chemical element with symbol Fl and atomic number 114. It is named after the Flerov Laboratory of Nuclear Reactions."},
    {id: 115, symbol: "Mc", name: "Moscovium", mass: 290, category: "unknown", position: [15, 7], electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³", state: "Unknown", description: "Moscovium is a chemical element with symbol Mc and atomic number 115. It is named after the Moscow region."},
    {id: 116, symbol: "Lv", name: "Livermorium", mass: 293, category: "unknown", position: [16, 7], electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴", state: "Unknown", description: "Livermorium is a chemical element with symbol Lv and atomic number 116. It is named after the Lawrence Livermore National Laboratory."},
    {id: 117, symbol: "Ts", name: "Tennessine", mass: 294, category: "unknown", position: [17, 7], electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵", state: "Unknown", description: "Tennessine is a chemical element with symbol Ts and atomic number 117. It is named after the U.S. state of Tennessee."},
    {id: 118, symbol: "Og", name: "Oganesson", mass: 294, category: "unknown", position: [18, 7], electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶", state: "Unknown", description: "Oganesson is a chemical element with symbol Og and atomic number 118. It is named after Russian nuclear physicist Yuri Oganessian."}
];

// Add CSS variables for element categories
document.documentElement.style.setProperty('--alkali-metal', '#ff6666');
document.documentElement.style.setProperty('--alkaline-earth', '#ffdead');
document.documentElement.style.setProperty('--transition-metal', '#ffc0c0');
document.documentElement.style.setProperty('--post-transition', '#cccccc');
document.documentElement.style.setProperty('--metalloid', '#cccc99');
document.documentElement.style.setProperty('--nonmetal', '#a1ffc3');
document.documentElement.style.setProperty('--halogen', '#ffff99');
document.documentElement.style.setProperty('--noble-gas', '#c0ffff');
document.documentElement.style.setProperty('--lanthanide', '#ffbfff');
document.documentElement.style.setProperty('--actinide', '#ff99cc');
document.documentElement.style.setProperty('--unknown', '#e8e8e8');

// DOM elements
const periodicTable = document.getElementById('periodic-table');
const elementDetails = document.getElementById('element-details');
const overlay = document.getElementById('overlay');
const closeDetails = document.getElementById('close-details');
const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');
const resetBtn = document.getElementById('reset-btn');

// Create the periodic table grid
function createPeriodicTable() {
    // Create an 18x10 grid for the periodic table
    const table = document.createElement('div');
    table.className = 'table-grid';
    
    // Create empty cells for the grid
    for (let row = 1; row <= 10; row++) {
        for (let col = 1; col <= 18; col++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.row = row;
            cell.dataset.col = col;
            table.appendChild(cell);
        }
    }
    
    periodicTable.appendChild(table);
    
    // Add elements to the grid
    elementsData.forEach(element => {
        const [col, row] = element.position;
        const cell = table.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
        
        if (cell) {
            cell.className = `cell element ${element.category}`;
            cell.dataset.id = element.id;
            
            cell.innerHTML = `
                <div class="element-number">${element.id}</div>
                <div class="element-symbol">${element.symbol}</div>
                <div class="element-name">${element.name}</div>
                <div class="element-mass">${element.mass}</div>
            `;
            
            // Add click event to show details
            cell.addEventListener('click', () => showElementDetails(element));
        }
    });
}

// Show element details
function showElementDetails(element) {
    // Fill in the details
    document.getElementById('detail-name').textContent = element.name;
    document.getElementById('detail-symbol').textContent = element.symbol;
    document.getElementById('detail-number').textContent = element.id;
    document.getElementById('detail-mass').textContent = element.mass;
    document.getElementById('detail-category').textContent = formatCategory(element.category);
    document.getElementById('detail-period').textContent = element.position[1];
    document.getElementById('detail-group').textContent = element.position[0];
    document.getElementById('detail-electron').textContent = element.electronConfig;
    document.getElementById('detail-state').textContent = element.state;
    document.getElementById('element-description').textContent = element.description;
    
    // Update the 3D visualization
    updateElementVisualization(element);
    
    // Show the details panel and overlay
    elementDetails.classList.add('active');
    overlay.classList.add('active');
}

// Format category name for display
function formatCategory(category) {
    if (!category) return 'Unknown';
    return category.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

// Update the 3D visualization of the element
function updateElementVisualization(element) {
    const sphere = document.getElementById('element-sphere');
    
    // Clear previous visualization
    sphere.innerHTML = '';
    
    // Set background color based on category
    sphere.style.backgroundColor = `var(--${element.category})`;
    
    // Add symbol text to the sphere
    const symbol = document.createElement('div');
    symbol.className = 'sphere-symbol';
    symbol.textContent = element.symbol;
    sphere.appendChild(symbol);
    
    // Add atomic number to the sphere
    const number = document.createElement('div');
    number.className = 'sphere-number';
    number.textContent = element.id;
    sphere.appendChild(number);
}

// Search for elements
function searchElements() {
    const searchTerm = searchInput.value.toLowerCase();
    const elements = document.querySelectorAll('.element');
    
    elements.forEach(element => {
        const elementId = element.dataset.id;
        const elementData = elementsData.find(e => e.id.toString() === elementId);
        
        if (elementData) {
            const name = elementData.name.toLowerCase();
            const symbol = elementData.symbol.toLowerCase();
            
            if (name.includes(searchTerm) || symbol.includes(searchTerm)) {
                element.classList.add('highlight');
            } else {
                element.classList.remove('highlight');
                element.classList.add('fade');
            }
        }
    });
}

// Reset search
function resetSearch() {
    searchInput.value = '';
    const elements = document.querySelectorAll('.element');
    
    elements.forEach(element => {
        element.classList.remove('highlight', 'fade');
    });
}

// Close element details panel
function closeElementDetails() {
    elementDetails.classList.remove('active');
    overlay.classList.remove('active');
}

// Event listeners
closeDetails.addEventListener('click', closeElementDetails);
overlay.addEventListener('click', closeElementDetails);
searchBtn.addEventListener('click', searchElements);
resetBtn.addEventListener('click', resetSearch);
searchInput.addEventListener('keyup', event => {
    if (event.key === 'Enter') {
        searchElements();
    }
});

// Initialize the periodic table when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', createPeriodicTable);