// Add items to this list in date order (oldest at the top) as they
// are reversed when shown on the page.

module.exports = {
    feed: [
        {
            name: "Find UK Government Data - sprint",
            link_name: "FGD - team 1",
            url: "https://finding-awesome1.herokuapp.com/",
            date: "April 2017",
            phase: "alpha",
            reasons: [
                {
                    what: "Focused on Resolving non-relevant results, simpler version of DGU, understanding datasets as lists of transactions and thinking of a customised search and lists of things",
                    why: "We wanted to explore different options to help users to find data that is relevant and meaningful to them."
                },
            ]
        },
        {
            name: "Find UK Government Data - sprint",
            link_name: "FGD - team 2",
            url: "https://github.com/datagovuk/find-gov-data-v1",
            date: "April 2017",
            phase: "alpha",
            reasons: [
                {
                    what: "Focus on improving the journey for explorers and explainers on their known journey based on the new data publishers are creating with the new publishing process",
                    why: "We wanted to explore different options for making the journey successful by allowing them to find what they look for as soon as possible or direct them on a different way that might lead them to it."
                },
            ]
        },

        {
            name: "Find UK Government Data V2",
            link_name: "FGD1",
            url: "https://find-gov-data-v2.herokuapp.com/",
            date: "April 2017",
            phase: "alpha",
            reasons: [
                {
                    what: "Simplified layout for the dataset page with a focus on metadata and data files",
                    why: "We found that the most common entry point for the journey of a data user was the dataset page, so we decided to change the layout to allow them to scan as quickly as possible whether that dataset can be useful for them."
                },
                {
                    what: "Added Related datasets section on the dataset page",
                    why: "Because the dataset page is the entry point and that's part of a cycle that keeps them searching on google and inspecting dataset pages, it seems unlikely that users will leave that page to search on the home page, so we've added a new section to provide them more options to lead them to the right dataset"
                },
                {
                    what: "Simplified search result item on search results page",
                    why: "Based on our research we identified what type of metadata was more useful for data users, so we displayed that metadata for each search result together with the title and description"
                },
                {
                    what: "Simplified filters on results page",
                    why: "Following our decision with displaying the metadata that is more useful to data users to make a decision, we've simplified the filters and kept only the ones that match that metadata and will quickly allow them to narrow down the search results number"
                },
                {
                    what: "New layout for home page",
                    why: "We knew from research that data users sometimes don't know what they're looking for, so we included on the home page different way to let them know about available data, like collections, popular datasets and upcoming datasets"
                }
            ]
        },

        {
            name: "Find UK Government Data V3",
            link_name: "FGD2",
            url: "https://find-gov-data-v3.herokuapp.com/",
            date: "May 2017",
            phase: "alpha",
            reasons: [
                {
                    what: "Added peview page for individual datafiles",
                    why: "Testing on version 1 showed that data users wanted to view what the data was like before downloading it"
                },
                {
                    what: "Switched related datasets section on dataset page for a manually cuarted collection",
                    why: "Testing on version 1 showed that data users found the related datasets useful, but the displayed datasets weren't that relevant, so we've opted to display manually curated datasets on this version to see if that is more relevant to them"
                },
                {
                    what: "Added link to search tips page below search box on dataset page",
                    why: "We want to test if people will notice and click on a search tips page to get better results if they can't find what they're looking for"
                }
            ]
        }
    ]
}
