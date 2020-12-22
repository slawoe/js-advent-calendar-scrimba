function domainType(domains) {
  const orgGroup = ["org"];
  const comGroup = ["com"];
  const netGroup = ["net"];
  const infoGroup = ["info"];
  const geoGroup = ["de", "at", "uk", "pl"];
  const result = [];
  domains.forEach((domain) => {
    let domainEnding = domain.split(".").pop();
    if (orgGroup.includes(domainEnding)) {
      result.push("organization");
    } else if (comGroup.includes(domainEnding)) {
      result.push("commercial");
    } else if (netGroup.includes(domainEnding)) {
      result.push("network");
    } else if (infoGroup.includes(domainEnding)) {
      result.push("information");
    } else if (geoGroup.includes(domainEnding)) {
      result.push("geographic");
    } else {
      console.log(
        `Group unknown for following: "${domain}". You have to check & add this!`
      );
    }
  });
  return result;
}

/**
 * Test Suite
 */
describe("domainType()", () => {
  it("returns list of domain types", () => {
    // arrange
    const domains = ["en.wiki.org", "codefights.com", "happy.net", "code.info"];

    // act
    const result = domainType(domains);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toEqual([
      "organization",
      "commercial",
      "network",
      "information",
    ]);
  });
});
