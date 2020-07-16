const sharp = require('sharp');

const resumeData = require('./resumeData.json');
const projects = resumeData.portfolio.projects;

// const imageSizes = [300, 500, 600, 900, 1200];

projects.forEach((project) => {
    if (!project.image.local) return;

    let image = sharp(
        `assets/images/portfolio/${project.image.name}/original.${project.image.extension}`,
    );

    // imageSizes.forEach((size) => {
    //     image
    //         .resize(size)
    //         .toFile(
    //             `assets/images/portfolio/${project.image.name}/${project.image.name}-${size}.png`,
    //             function (err) {
    //                 err != null && console.log(err);
    //             },
    //         );
    //     // .toFile(
    //     //     `assets/images/portfolio/${project.image.name}/${project.image.name}-${size}.webp`,
    //     //     function (err) {
    //     //         err != null && console.log(err);
    //     //     },
    //     // );
    // });

    image
        .jpeg({
            quality: 30,
        })
        .toFile(
            `assets/images/portfolio/${project.image.name}/${project.image.name}.jpeg`,
            function (err) {
                err != null && console.log(err);
            },
        );
    // .toFile(
    //     `assets/images/portfolio/${project.image.name}/${project.image.name}.webp`,
    //     function (err) {
    //         err != null && console.log(err);
    //     },
    // );
});
