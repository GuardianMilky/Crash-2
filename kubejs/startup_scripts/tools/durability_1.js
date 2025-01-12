ItemEvents.modification(event => {
    let toolsmod = 
        [
            "minecraft:wooden_shovel",
            "minecraft:wooden_pickaxe",
            "minecraft:wooden_axe",
            "minecraft:wooden_hoe",
            "minecraft:stone_shovel",
            "minecraft:stone_pickaxe",
            "minecraft:stone_axe",
            "minecraft:stone_hoe",
            "minecraft:iron_shovel",
            "minecraft:iron_pickaxe",
            "minecraft:iron_axe",
            "minecraft:iron_hoe",
            "minecraft:golden_shovel",
            "minecraft:golden_pickaxe",
            "minecraft:golden_axe",
            "minecraft:golden_hoe",
            "minecraft:diamond_shovel",
            "minecraft:diamond_pickaxe",
            "minecraft:diamond_axe",
            "minecraft:diamond_hoe",
            "minecraft:netherite_shovel",
            "minecraft:netherite_pickaxe",
            "minecraft:netherite_axe",
            "minecraft:netherite_hoe",
            "minecraft:wooden_sword",
            "minecraft:stone_sword",
            "minecraft:iron_sword",
            "minecraft:golden_sword",
            "minecraft:diamond_sword",
            "minecraft:netherite_sword",
            "minecraft:trident",
            "ae2:nether_quartz_pickaxe",
            "ae2:nether_quartz_axe",
            "ae2:fluix_shovel",
            "ae2:certus_quartz_hoe",
            "ae2:certus_quartz_shovel",
            "ae2:nether_quartz_hoe",
            "ae2:certus_quartz_axe",
            "ae2:fluix_pickaxe",
            "ae2:fluix_axe",
            "ae2:certus_quartz_pickaxe",
            "ae2:nether_quartz_shovel",
            "ae2:fluix_hoe",
            "ae2:certus_quartz_sword",
            "ae2:fluix_sword",
            "ae2:nether_quartz_sword",
            "minecraft:shield"
        ];

        toolsmod.forEach(tool => event.modify(tool, item => {
            item.maxDamage = 1
        }))

    })
