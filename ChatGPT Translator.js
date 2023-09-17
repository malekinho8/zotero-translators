{
	"translatorID": "20b170ac-a80e-4993-9306-4cfa3a31858a",
	"label": "ChatGPT Translator",
	"creator": "malekinho8",
	"target": "^https?://chat.openai.com",
	"minVersion": "5.0",
	"maxVersion": "",
	"priority": 1,
	"inRepository": true,
	"translatorType": 4,
	"browserSupport": "gcsibv",
	"lastUpdated": "2023-09-17 18:51:17"
}

/*
	***** BEGIN LICENSE BLOCK *****

	Copyright © 2023 Malek Ibrahim

	This file is part of Zotero.

	Zotero is free software: you can redistribute it and/or modify
	it under the terms of the GNU Affero General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	Zotero is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
	GNU Affero General Public License for more details.

	You should have received a copy of the GNU Affero General Public License
	along with Zotero. If not, see <http://www.gnu.org/licenses/>.

	***** END LICENSE BLOCK *****
*/

function detectWeb(doc, url) {
	Zotero.debug("This message will appear in the Zotero debug output.");
	if (url.includes("chat.openai.com")) {
		Zotero.debug("URL matches. Returning 'webpage' type.");
		return "webpage";
	}
	Zotero.debug("URL does not match.");
	return false;
}

// function detectWeb(doc, url) {
// 	if (url.includes("chat.openai.com/c/")) {
// 		return "web";
// 	}
// }

function doWeb(doc, url) {
	Zotero.debug("Inside doWeb function.");
	// Comment out everything else for now
	var item = new Zotero.Item("webpage");

	// Extracting title from the first <h1> tag
	var titleElement = doc.querySelector("h1");
	if (titleElement) {
		item.title = titleElement.textContent;
	}
	else {
		item.title = "Chat with ChatGPT"; // Fallback title in case <h1> is not found
	}

	// Setting the author
	item.creators.push({
		firstName: "",
		lastName: "ChatGPT",
		creatorType: "author"
	});
		
	item.url = url;
	item.accessDate = new Date().toISOString();
	
	// Save other metadata as required
	
	Zotero.debug("Before completing item.");
	item.complete();
	Zotero.debug("After completing item.");
}

/** BEGIN TEST CASES **/
var testCases = [
	{
		"type": "web",
		"url": "https://chat.openai.com/share/e16f9bb2-4d8d-41d5-8178-0ab6388d9b9b",
		"detectedItemType": "webpage",
		"items": [
			{
				"itemType": "webpage",
				"title": "Zotero for ChatGPT Citation",
				"url": "https://chat.openai.com/share/e16f9bb2-4d8d-41d5-8178-0ab6388d9b9b",
				"creators": [
					{
						"firstName":"",
						"lastName":"ChatGPT",
						"creatorType":"author"
					}
				],
				"notes": [],
				"tags": [],
				"seeAlso": [],
				"attachments": []
			}
		]
	}
]
/** END TEST CASES **/
